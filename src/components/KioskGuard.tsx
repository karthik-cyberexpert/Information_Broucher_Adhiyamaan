import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ShieldAlert } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './KioskGuard.css';

interface KioskGuardProps {
    children: React.ReactNode;
}

const ADMIN_PASSWORD = '123';

const KioskGuard: React.FC<KioskGuardProps> = ({ children }) => {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // ─── Fullscreen ──────────────────────────────────────────────────────────

    const enterFullscreen = useCallback(() => {
        const el = document.documentElement as any;
        try {
            if (el.requestFullscreen) el.requestFullscreen();
            else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen(); // iOS Safari / older Chrome
            else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
        } catch (err) {
            console.warn('Fullscreen request failed:', err);
        }
    }, []);

    const exitFullscreen = useCallback(() => {
        try {
            const doc = document as any;
            if (doc.exitFullscreen) doc.exitFullscreen();
            else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
            else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
        } catch (err) {
            console.warn('Exit fullscreen failed:', err);
        }
    }, []);

    // Track fullscreen state
    useEffect(() => {
        const handleFsChange = () => {
            const doc = document as any;
            const inFs = !!(
                doc.fullscreenElement ||
                doc.webkitFullscreenElement ||
                doc.mozFullScreenElement
            );
            setIsFullscreen(inFs);

            // If fullscreen was exited unexpectedly (user swiped down on Android, etc.)
            // and the modal is not open, show the modal first, then try to re-enter FS
            if (!inFs && !showModal) {
                setShowModal(true);
            }
        };

        document.addEventListener('fullscreenchange', handleFsChange);
        document.addEventListener('webkitfullscreenchange', handleFsChange);
        document.addEventListener('mozfullscreenchange', handleFsChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFsChange);
            document.removeEventListener('webkitfullscreenchange', handleFsChange);
            document.removeEventListener('mozfullscreenchange', handleFsChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal]);

    // Enter fullscreen on first user interaction (required by browsers)
    useEffect(() => {
        const onFirstInteraction = () => {
            enterFullscreen();
            window.removeEventListener('click', onFirstInteraction);
            window.removeEventListener('touchstart', onFirstInteraction);
            window.removeEventListener('keydown', onFirstInteraction);
        };

        window.addEventListener('click', onFirstInteraction);
        window.addEventListener('touchstart', onFirstInteraction, { passive: true });
        window.addEventListener('keydown', onFirstInteraction);

        return () => {
            window.removeEventListener('click', onFirstInteraction);
            window.removeEventListener('touchstart', onFirstInteraction);
            window.removeEventListener('keydown', onFirstInteraction);
        };
    }, [enterFullscreen]);

    // ─── Android Back Button (History API trap) ──────────────────────────────
    // Push a dummy state so the back button fires `popstate` instead of navigating away
    // Only apply this logic on the home page '/'

    useEffect(() => {
        if (location.pathname === '/') {
            // Push initial dummy state
            history.pushState({ kioskLocked: true }, '');

            const handlePopState = () => {
                // User pressed Back – intercept it, re-push dummy state, show modal
                history.pushState({ kioskLocked: true }, '');
                setShowModal(true);
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [location.pathname]);

    // ─── Home / Recents / Tab switch (visibilitychange + blur) ───────────────

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // User pressed Home, Recents, or switched to another app/tab
                setShowModal(true);
            }
        };

        const handleBlur = () => {
            // Window lost focus – another app or task switcher is in front
            setShowModal(true);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
        };
    }, []);

    // ─── Before Unload (Close Tab / Browser) ─────────────────────────────────

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            // Modern Chrome requires returnValue to be set
            e.returnValue = 'Admin authentication required to leave this page.';
            return e.returnValue;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    // ─── Escape Key ──────────────────────────────────────────────────────────

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                setShowModal(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // ─── Block Right-Click ───────────────────────────────────────────────────

    useEffect(() => {
        const block = (e: MouseEvent) => e.preventDefault();
        document.addEventListener('contextmenu', block);
        return () => document.removeEventListener('contextmenu', block);
    }, []);

    // ─── Auto-focus input when modal opens ───────────────────────────────────

    useEffect(() => {
        if (showModal) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [showModal]);

    // ─── Handlers ────────────────────────────────────────────────────────────

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setError('');
            setShowModal(false);
            setPassword('');
            // Admin authenticated — exit fullscreen so they can control the device
            exitFullscreen();
        } else {
            setError('Incorrect Admin Password');
            setPassword('');
            inputRef.current?.focus();
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        setPassword('');
        setError('');
        // Re-enter fullscreen if we exited
        if (!isFullscreen) {
            enterFullscreen();
        }
        // Re-push history dummy state so back button is trapped again
        history.pushState({ kioskLocked: true }, '');
    };

    // ─── Render ──────────────────────────────────────────────────────────────

    return (
        <>
            {children}

            {showModal && (
                <div className="kiosk-overlay" role="dialog" aria-modal="true">
                    <div className="kiosk-modal">
                        <div className="kiosk-icon">
                            <ShieldAlert size={36} />
                        </div>
                        <h2 className="kiosk-title">ADMIN ACCESS</h2>
                        <p className="kiosk-subtitle">
                            Enter admin password to exit kiosk mode
                        </p>

                        <form onSubmit={handleVerify} className="kiosk-form">
                            <div className="kiosk-input-wrapper">
                                <input
                                    ref={inputRef}
                                    type="password"
                                    className="kiosk-input"
                                    placeholder="Enter Admin Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>

                            {error && <div className="kiosk-error">{error}</div>}

                            <div className="kiosk-actions">
                                <button
                                    type="button"
                                    className="kiosk-btn btn-cancel"
                                    onClick={handleCancel}
                                >
                                    CANCEL
                                </button>
                                <button type="submit" className="kiosk-btn btn-confirm">
                                    UNLOCK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default KioskGuard;
