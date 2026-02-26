import React, { useState, useEffect, useCallback } from 'react';
import { ShieldAlert } from 'lucide-react';
// Capacitor app import removed to use dynamic import below
import './KioskGuard.css';

interface KioskGuardProps {
    children: React.ReactNode;
}

const ADMIN_PASSWORD = '123'; // Default password as requested

const KioskGuard: React.FC<KioskGuardProps> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to enter fullscreen
    const enterFullscreen = useCallback(() => {
        const docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen().catch(err => {
                console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        }
    }, []);


    // Handle first interaction to trigger fullscreen
    useEffect(() => {
        const initialInteraction = () => {
            if (!document.fullscreenElement) {
                enterFullscreen();
            }
            // Remove listener after first interaction
            window.removeEventListener('click', initialInteraction);
            window.removeEventListener('touchstart', initialInteraction);
        };

        window.addEventListener('click', initialInteraction);
        window.addEventListener('touchstart', initialInteraction);

        return () => {
            window.removeEventListener('click', initialInteraction);
            window.removeEventListener('touchstart', initialInteraction);
        };
    }, [enterFullscreen]);

    // Capacitor Back Button Hijacking
    useEffect(() => {
        let handler: any;

        const setupListener = async () => {
            try {
                const { App } = await import('@capacitor/app');
                handler = await App.addListener('backButton', () => {
                    // Instead of exiting, show the admin modal
                    setShowModal(true);
                });
            } catch (e) {
                console.warn('Capacitor App plugin not available:', e);
            }
        };

        setupListener();

        return () => {
            if (handler) {
                handler.remove();
            }
        };
    }, []);

    // Prevent typical exit keys if on desktop (Esc)
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

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            // Correct password
            setError('');
            setShowModal(false);
            setPassword('');

            // If we are in fullscreen, we might want to exit it as an "Admin Action"
            // or actually allow app exit if on mobile.
            // For now, let's exit fullscreen as the "Unlock" action.
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                // If not in fullscreen, maybe the user wants to close the app (Capacitor)
                try {
                    import('@capacitor/app').then(({ App }) => {
                        App.exitApp();
                    }).catch(() => {
                        console.warn('Capacitor App.exitApp not available');
                    });
                } catch (e) {
                    console.warn('Capacitor App.exitApp not available');
                }
            }
        } else {
            setError('Incorrect Admin Password');
            setPassword('');
        }
    };

    const closeOverlay = () => {
        setShowModal(false);
        setPassword('');
        setError('');
        // Re-ensure fullscreen if it was dismissed
        if (!document.fullscreenElement) {
            enterFullscreen();
        }
    };

    return (
        <>
            {children}

            {showModal && (
                <div className="kiosk-overlay">
                    <div className="kiosk-modal">
                        <div className="kiosk-icon">
                            <ShieldAlert size={32} />
                        </div>
                        <h2 className="kiosk-title">ADMIN ACCESS</h2>
                        <p className="kiosk-subtitle">Enter password to exit kiosk mode</p>

                        <form onSubmit={handleVerify} className="kiosk-form">
                            <div className="kiosk-input-wrapper">
                                <input
                                    type="password"
                                    className="kiosk-input"
                                    placeholder="Enter Admin Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            {error && <div className="kiosk-error">{error}</div>}

                            <div className="kiosk-actions">
                                <button type="button" className="kiosk-btn btn-cancel" onClick={closeOverlay}>
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
