import React from 'react';
import { Bus, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import './Transport.css';

// Routes Data moved outside to prevent re-creation
const routesLeft = [
    "Ayyur", "Haleseebam", "Kagadasam", "Local Staff Bus",
    "Kaknoor", "Jawalagiri", "Mathur", "Seekanapalli"
];

const routesCenter = [
    "Alsanatham", "Mathigiri", "Athipalli", "Kariyamangalam",
    "Bargur", "Tirupathur", "Anchetty", "Hosur", "Thally"
];

const routesRight = [
    "Poonapalli", "Rayakottai", "Mudampatti", "Kelamangalam & Gowthalam",
    "Berigai", "Krishnagiri", "Basthi", "Ashok Leyland"
];

const transportImages = [
    "/images/transport.jpg",
    "/images/t1.jpeg",
    "/images/t2.jpeg"
];

// Animation Constants
const ANIMATION_DURATION = 20;

// Sub-component defined outside to prevent re-mounting glitches during animation
const RouteList = ({ routes, section, globalProgress }: { routes: string[], section: 'left' | 'center' | 'right', globalProgress: number }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: section === 'center' ? 'row' : 'column',
            flexWrap: 'nowrap',
            gap: '20px',
            width: '100%',
            height: '100%',
            // Centered for all sections so bus is on top
            alignItems: 'center',
            justifyContent: section === 'center' ? 'center' : 'space-between',
        }}>
            {routes.map((route, index) => {
                let isVisible = false;
                const total = routes.length;

                if (globalProgress >= 1) { // Force show all when animation completes
                    isVisible = true;
                } else if (section === 'left') {
                    const threshold = ((index + 1) / total) * 0.33;
                    isVisible = globalProgress > threshold;
                } else if (section === 'center') {
                    const threshold = 0.33 + ((index + 1) / total) * 0.33;
                    isVisible = globalProgress > threshold;
                } else if (section === 'right') {
                    const indexFromBottom = total - 1 - index;
                    const threshold = 0.66 + ((indexFromBottom + 1) / total) * 0.34;
                    isVisible = globalProgress > threshold;
                }

                return (
                    <motion.div
                        key={route}
                        className={`route-card ${section}`}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            x: isVisible ? 0 : (section === 'left' ? -15 : section === 'right' ? 15 : 0),
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.2,
                            ease: "linear"
                        }}
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(255, 255, 255, 0.8)',
                            background: 'rgba(255, 255, 255, 0.45)'
                        }}
                    >
                        {section === 'left' && (
                            <>
                                <span className="route-text" style={{ textAlign: 'right' }}>{route}</span>
                                <div className="route-dot" />
                            </>
                        )}

                        {section === 'center' && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <div className="route-dot" style={{ background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                                <span className="route-text" style={{ textAlign: 'center', fontSize: '0.8rem' }}>{route}</span>
                            </div>
                        )}

                        {section === 'right' && (
                            <>
                                <div className="route-dot" />
                                <span className="route-text" style={{ textAlign: 'left' }}>{route}</span>
                            </>
                        )}
                    </motion.div>
                );
            })}
        </div>
    )
};

const Transport = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % transportImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);


    // Helper to get bus position based on progress (0 -> 1)
    // Path: Top-Left -> Bottom-Left -> Bottom-Right -> Top-Right
    // Segments: 
    // 1. Vertical Down (0 - 0.33)
    // 2. Horizontal Right (0.33 - 0.66)
    // 3. Vertical Up (0.66 - 1.0)
    const getBusState = (progress: number) => {
        // Coordinates in % (relative to container)
        const LEFT_X = 7.5; // Exactly Center of Left Col (15% / 2)
        const RIGHT_X = 92.5; // Exactly Center of Right Col (100 - 15% / 2)
        const TOP_Y = 14;    // Matches center of side cards
        const BOTTOM_Y = 88; // Aligns with the standardized 18px padding

        let x = 0;
        let y = 0;
        let rotation = 0;

        if (progress < 0.33) {
            // Segment 1: Moving Down
            const localP = progress / 0.33; // 0 to 1
            x = LEFT_X;
            y = TOP_Y + (localP * (BOTTOM_Y - TOP_Y));
            rotation = 180; // Facing Down
        } else if (progress < 0.66) {
            // Segment 2: Moving Right
            const localP = (progress - 0.33) / 0.33; // 0 to 1
            x = LEFT_X + (localP * (RIGHT_X - LEFT_X));
            y = BOTTOM_Y;
            rotation = 90;
        } else {
            // Segment 3: Moving Up
            const localP = (progress - 0.66) / 0.34; // 0 to 1
            x = RIGHT_X;
            y = BOTTOM_Y - (localP * (BOTTOM_Y - TOP_Y));
            rotation = 0; // Facing Up
        }
        return { x, y, rotation };
    };


    // Global Animation Loop
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        let start: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = (timestamp - start) / 1000;
            const p = Math.min(elapsed / ANIMATION_DURATION, 1);
            setProgress(p);
            if (p < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    // State for Mobile View
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const busState = getBusState(progress);

    return (
        <div className={`transport-page ${isMobile ? 'no-scrollbar' : ''}`} style={isMobile ? { overflowY: 'scroll', height: 'auto', minHeight: '100vh' } : {}}>
            {/* Video Background */}
            <video
                className="transport-video-bg"
                autoPlay
                loop
                muted
                playsInline
                style={isMobile ? { position: 'fixed' } : {}}
            >
                <source src="/media/bg_image.mp4" type="video/mp4" />
            </video>

            {/* Global Bus Element - Icon (Desktop Only) */}
            {!isMobile && (
                <motion.img
                    src="/bus.png"
                    style={{
                        position: 'absolute',
                        left: `${busState.x}%`,
                        top: `${busState.y}%`,
                        width: '60px', /* Adjusted size for the PNG bus */
                        height: 'auto',
                        zIndex: 100, /* Above route cards */
                        transform: `translate(-50%, -50%) rotate(${busState.rotation}deg)`,
                        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* Dark Overlay matching Home page */}
            <div className="transport-overlay" style={isMobile ? { position: 'fixed' } : {}}></div>

            {/* Desktop Layout (Hidden on Mobile) */}
            {!isMobile && (
                <div className="transport-grid desktop-only">
                    {/* Top Edge - Header */}
                    <div className="edge-top">
                        <h1 className="transport-title">
                            <Bus size={40} color="#3b82f6" style={{ filter: 'drop-shadow(0 0 10px #3b82f6)' }} />
                            ACE Transport Routes
                        </h1>
                    </div>

                    {/* Left Edge - Route List 1 */}
                    <div className="edge-left">
                        <RouteList routes={routesLeft} section="left" globalProgress={progress} />
                    </div>

                    {/* Center Content - Split into Top (Visual) and Bottom (Routes) */}
                    <div className="center-stage">
                        {/* Top: Image Visual */}
                        <div className="center-visual-top">
                            <motion.div
                                className="center-visual-container"
                                initial={{ scale: 0.5, opacity: 0, rotateX: 20 }}
                                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                {/* Central Glass Disc */}
                                <div className="glass-disc" style={{ padding: 0, overflow: 'hidden' }}>
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImage}
                                            src={transportImages[currentImage]}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '20px' // Match container radius
                                            }}
                                        />
                                    </AnimatePresence>

                                    {/* Overlay Text */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '20px',
                                        zIndex: 20,
                                        textAlign: 'left'
                                    }}>
                                        <h1 className="campus-title" style={{ marginTop: 0, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                                            Campus
                                        </h1>
                                        <p className="logistics-subtitle" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                                            Logistics
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: Routes Center */}
                        <div className="edge-center-bottom">
                            <RouteList routes={routesCenter} section="center" globalProgress={progress} />
                        </div>
                    </div>

                    {/* Right Edge - Route List 2 */}
                    <div className="edge-right">
                        <RouteList routes={routesRight} section="right" globalProgress={progress} />
                    </div>

                    {/* Bottom Edge - Footer */}
                    <div className="edge-bottom">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <MapPin size={18} />
                            <span style={{ fontSize: '0.9rem' }}>Transport Incharge: Mr. Govindaraj</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '0.9rem' }}>9442855079</span>
                        </div>
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="transport-mobile-layout">
                    {/* 1. Header & Image Card */}
                    <div style={{ padding: '20px', textAlign: 'center', zIndex: 10 }}>
                        <h1 className="transport-title-mobile">
                            <Bus size={32} color="#3b82f6" /> ACE Transport
                        </h1>
                        <div className="mobile-image-card" style={{
                            marginTop: '20px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            height: '250px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            position: 'relative'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={transportImages[currentImage]}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </AnimatePresence>
                            <div style={{ position: 'absolute', bottom: 15, left: 15, zIndex: 2 }}>
                                <h2 style={{ margin: 0, fontSize: '1.5rem', textShadow: '0 2px 4px black' }}>Campus Logistics</h2>
                            </div>
                        </div>
                    </div>

                    {/* 2. Two Columns for Routes */}
                    <div className="mobile-routes-container" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '10px',
                        // height: 'calc(100vh - 350px)', // Removed fixed height to allow scroll
                        gap: '10px'
                    }}>
                        {/* Left Column: Top -> Bottom Bus */}
                        <div className="mobile-col-left" style={{ flex: 1, position: 'relative', borderRight: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                            {/* Animated Bus: Top -> Bottom */}
                            <motion.img
                                src="/bus.png"
                                style={{ 
                                    position: 'absolute', 
                                    left: '50%', 
                                    x: '-50%', 
                                    zIndex: 0, 
                                    width: '40px', 
                                    opacity: 0.6,
                                    transform: 'rotate(180deg)',
                                    filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))'
                                }}
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            />
                            
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px 0', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1rem', color: '#93c5fd', marginBottom: '5px' }}>Zone A</h3>
                                {[...routesLeft, ...routesCenter.slice(0, Math.ceil(routesCenter.length / 2))].map((r, i, arr) => {
                                    // Calculate visibility based on global progress loop (approximate)
                                    // Since we can't easily sync framer-motion animate value with React render without state,
                                    // we will use the existing 'progress' state but mapped to a faster cycle for mobile if needed,
                                    // or just reuse the global progress for simplicity but scaled.
                                    // Actually, let's use a simpler CSS animation approach for the bus and a time-based reveal?
                                    // Better: Deriving from 'progress' state.
                                    // Global progress is 20s. Let's map it: 0-0.5 is one pass, 0.5-1 is another? 
                                    // Or just use 'progress' directly. 
                                    // Bus is at Top (0%) at progress X, Bottom (100%) at progress Y.
                                    
                                    // Let's rely on the bus passing visual.
                                    // Since the user asked for "if and only if the bus crossed then only", we need strict sync.
                                    // We'll use the 'progress' state.
                                    
                                    // Left Bus: 0 -> 1 over 10s (half of global 20s for tighter loop? or just use global).
                                    // Let's make mobile progress loop faster: 8s.
                                    const mobileLoop = (progress * ANIMATION_DURATION) % 8 / 8; // 0 to 1 over 8s
                                    
                                    // Threshold: Item is at (i + 1) / (total + 1) roughly.
                                    const threshold = (i + 1) / (arr.length + 2); 
                                    const isVisible = progress >= 1 || (mobileLoop > threshold - 0.1); // Reveal slightly before/as it passes

                                    return (
                                        <motion.div 
                                            key={i} 
                                            animate={{ opacity: isVisible ? 1 : 0.2, scale: isVisible ? 1 : 0.95 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', width: '90%', textAlign: 'center' }}
                                        >
                                            {r}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Bottom -> Top Bus */}
                        <div className="mobile-col-right" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                            {/* Animated Bus: Bottom -> Top */}
                             <motion.img
                                src="/bus.png"
                                style={{ 
                                    position: 'absolute', 
                                    left: '50%', 
                                    x: '-50%', 
                                    zIndex: 0, 
                                    width: '40px', 
                                    opacity: 0.6,
                                    // Upright for going up
                                    filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.5))'
                                }}
                                animate={{ top: ['110%', '-10%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            />

                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px 0', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1rem', color: '#fca5a5', marginBottom: '5px' }}>Zone B</h3>
                                {[...routesRight, ...routesCenter.slice(Math.ceil(routesCenter.length / 2))].map((r, i, arr) => {
                                    // Right Bus: Goes Bottom (100%) to Top (0%).
                                    // Progress 0 -> 1. Bus Y: 1 -> 0.
                                    const mobileLoop = (progress * ANIMATION_DURATION) % 8 / 8; // 0 to 1 over 8s
                                    const busY = 1 - mobileLoop; // 1.0 (bottom) to 0.0 (top)
                                    
                                    // Items are laid out Top to Bottom (0 to N).
                                    // Item Y is approx (i + 1) / (arr.length + 2).
                                    // Reveal if Bus Y < Item Y (Bus has passed it moving up).
                                    const itemY = (i + 1) / (arr.length + 2);
                                    
                                    const isVisible = progress >= 1 || (busY < itemY + 0.05); // Reveal as it passes up

                                    return (
                                        <motion.div 
                                            key={i} 
                                            animate={{ opacity: isVisible ? 1 : 0.2, scale: isVisible ? 1 : 0.95 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', width: '90%', textAlign: 'center' }}
                                        >
                                            {r}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation Dock */}
            <NavigationDock
                onBack={() => navigate(-1)}
                onHome={() => navigate('/menu')}
                onForward={() => navigate(1)}
            />

            {/* Style Tag for Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
            @keyframes spin { 
                from { transform: rotate(0deg); } 
                to { transform: rotate(360deg); } 
            }
            @keyframes spin-reverse { 
                from { transform: rotate(360deg); } 
                to { transform: rotate(0deg); } 
            }
        `}} />
        </div>
    );
};

export default Transport;
