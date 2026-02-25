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
    "/images/transport/t1.jpeg",
    "/images/transport/t2.jpeg",
    "/images/transport/t3.jpg"
];

// Route Details Data
const routeDetails: Record<string, { time: string, driver: string, phone: string, stops: string[], image?: string }> = {
    // Left Section
    "Ayyur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Ayyur", "Intermediate Point", "ACE"], image: "/images/transport/ayyur.jpg" },
    "Haleseebam": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Haleseebam", "Intermediate Point", "ACE"], image: "/images/transport/haleesibam.jpg" },
    "Kagadasam": { time: "7:10 AM", driver: "TBD", phone: "9442855079", stops: ["Kagadasam", "Intermediate Point", "ACE"], image: "/images/transport/kadagasam.jpg" },
    "Local Staff Bus": { time: "8:15 AM", driver: "TBD", phone: "9442855079", stops: ["Main Gate", "Admin", "ACE"], image: "/images/transport/local staff bus.jpg" },
    "Kaknoor": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Kaknoor", "Intermediate Point", "ACE"], image: "/images/transport/kakanoor.jpg" },
    "Jawalagiri": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Jawalagiri", "Intermediate Point", "ACE"], image: "/images/transport/jawalagiri.jpg" },
    "Mathur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Mathur", "Intermediate Point", "ACE"], image: "/images/transport/mathur.jpg" },
    "Seekanapalli": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Seekanapalli", "Intermediate Point", "ACE"], image: "/images/transport/seekanapalli.jpg" },

    // Center Section
    "Alsanatham": { time: "7:00 AM", driver: "TBD", phone: "9442855079", stops: ["Alsanatham", "Intermediate Point", "ACE"], image: "/images/transport/alsanatham.jpg" },
    "Mathigiri": { time: "7:30 AM", driver: "TBD", phone: "9442855079", stops: ["Mathigiri", "Intermediate Point", "ACE"], image: "/images/transport/mathigiri.jpg" },
    "Athipalli": { time: "6:50 AM", driver: "TBD", phone: "9442855079", stops: ["Athipalli", "Intermediate Point", "ACE"], image: "/images/transport/athipalli.jpg" },
    "Kariyamangalam": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Kariyamangalam", "Intermediate Point", "ACE"], image: "/images/transport/kariyamangalam.jpg" },
    "Bargur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Bargur", "Intermediate Point", "ACE"], image: "/images/transport/Bargur.jpg" },
    "Tirupathur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Tirupathur", "Intermediate Point", "ACE"], image: "/images/transport/thirupathur.jpg" },
    "Anchetty": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Anchetty", "Intermediate Point", "ACE"], image: "/images/transport/anchetty.jpg" },
    "Hosur": { time: "8:00 AM", driver: "TBD", phone: "9442855079", stops: ["Bus Stand", "Raman Nagar", "ACE"], image: "/images/transport/15.jpg" },
    "Thally": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Thally", "Intermediate Point", "ACE"], image: "/images/transport/17.jpg" },

    // Right Section
    "Poonapalli": { time: "7:40 AM", driver: "TBD", phone: "9442855079", stops: ["Poonapalli", "Intermediate Point", "ACE"], image: "/images/transport/poonapalli.jpg" },
    "Rayakottai": { time: "6:45 AM", driver: "TBD", phone: "9442855079", stops: ["Rayakottai", "Intermediate Point", "ACE"], image: "/images/transport/rayakottai.jpg" },
    "Mudampatti": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Mudampatti", "Intermediate Point", "ACE"], image: "/images/transport/mudampatti.jpg" },
    "Kelamangalam & Gowthalam": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Kelamangalam", "Gowthalam", "ACE"], image: "/images/transport/kelamangalam.jpg" },
    "Berigai": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Berigai", "Intermediate Point", "ACE"], image: "/images/transport/bergai.jpg" },
    "Krishnagiri": { time: "6:30 AM", driver: "TBD", phone: "9442855079", stops: ["Krishnagiri", "Intermediate Point", "ACE"], image: "/images/transport/krishnagiri.jpg" },
    "Basthi": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Basthi", "Intermediate Point", "ACE"], image: "/images/transport/basthi.jpg" },
    "Ashok Leyland": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Ashok Leyland", "Intermediate Point", "ACE"], image: "/images/transport/ashoke leyland.jpg" },
};

// Default detail for routes not specifically defined
const getDefaultDetail = (name: string): { time: string, driver: string, phone: string, stops: string[], image?: string } => ({
    time: "7:15 AM",
    driver: "TBD",
    phone: "9442855079",
    stops: [name, "Intermediate Point", "ACE"]
});

// Animation Constants
const ANIMATION_DURATION = 20;

// Sub-component defined outside to prevent re-mounting glitches during animation
const RouteList = ({ routes, section, globalProgress, onRouteClick }: {
    routes: string[],
    section: 'left' | 'center' | 'right',
    globalProgress: number,
    onRouteClick: (route: string) => void
}) => {
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
                        className={`route-card ${section} ${globalProgress >= 1 ? 'clickable' : ''}`}
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
                        whileHover={globalProgress >= 1 ? {
                            scale: 1.08,
                            borderColor: 'rgba(255, 255, 255, 0.9)',
                            background: 'rgba(59, 130, 246, 0.4)',
                            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                        } : {}}
                        whileTap={globalProgress >= 1 ? { scale: 0.95 } : {}}
                        style={{ cursor: globalProgress >= 1 ? 'pointer' : 'default' }}
                        onClick={() => globalProgress >= 1 && onRouteClick(route)}
                    >
                        <span className="route-text" style={{ textAlign: 'center', width: '100%' }}>{route}</span>
                    </motion.div>
                );
            })}
        </div>
    )
};

const Transport = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = React.useState(0);
    const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % transportImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const getBusState = (progress: number) => {
        const LEFT_X = 7.5;
        const RIGHT_X = 92.5;
        const TOP_Y = 14;
        const BOTTOM_Y = 88;

        let x = 0;
        let y = 0;
        let rotation = 0;

        if (progress < 0.33) {
            const localP = progress / 0.33;
            x = LEFT_X;
            y = TOP_Y + (localP * (BOTTOM_Y - TOP_Y));
            rotation = 180;
        } else if (progress < 0.66) {
            const localP = (progress - 0.33) / 0.33;
            x = LEFT_X + (localP * (RIGHT_X - LEFT_X));
            y = BOTTOM_Y;
            rotation = 90;
        } else {
            const localP = (progress - 0.66) / 0.34;
            x = RIGHT_X;
            y = BOTTOM_Y - (localP * (BOTTOM_Y - TOP_Y));
            rotation = 0;
        }
        return { x, y, rotation };
    };

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

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const busState = getBusState(progress);

    const details = selectedRoute ? (routeDetails[selectedRoute] || getDefaultDetail(selectedRoute)) : null;

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
                        width: '60px',
                        height: 'auto',
                        zIndex: 100,
                        transform: `translate(-50%, -50%) rotate(${busState.rotation}deg)`,
                        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* Dark Overlay */}
            <div className="transport-overlay" style={isMobile ? { position: 'fixed' } : {}}></div>

            {/* Desktop Layout */}
            {!isMobile && (
                <div className="transport-grid desktop-only">
                    <div className="edge-top">
                        <h1 className="transport-title">
                            <Bus size={40} color="#3b82f6" style={{ filter: 'drop-shadow(0 0 10px #3b82f6)' }} />
                            ACE Transport Routes
                        </h1>
                    </div>

                    <div className="edge-left">
                        <RouteList routes={routesLeft} section="left" globalProgress={progress} onRouteClick={setSelectedRoute} />
                    </div>

                    <div className="center-stage">
                        <div className="center-visual-top">
                            <AnimatePresence mode="wait">
                                {!selectedRoute ? (
                                    <motion.div
                                        key="visual-slider"
                                        className="center-visual-container"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="glass-disc">
                                            <img src={transportImages[currentImage]} alt="Transport" className="center-image" />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="route-details"
                                        className="center-details-container"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="details-glass-card">
                                            {details?.image ? (
                                                <div
                                                    className="full-route-image-container"
                                                    onClick={() => setSelectedRoute(null)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <img src={details.image} alt={selectedRoute} className="full-route-image" />
                                                    <div className="image-exit-hint">Click image to go back</div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="details-header">
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                            <Bus size={32} color="#3b82f6" />
                                                            <h2>{selectedRoute}</h2>
                                                        </div>
                                                        <button className="back-to-images" onClick={() => setSelectedRoute(null)}>Back</button>
                                                    </div>

                                                    <div className="details-grid">
                                                        <div className="detail-box">
                                                            <span className="detail-label">Departure</span>
                                                            <span className="detail-value">{details?.time}</span>
                                                        </div>
                                                        <div className="detail-box">
                                                            <span className="detail-label">Driver</span>
                                                            <span className="detail-value">{details?.driver}</span>
                                                        </div>
                                                        <div className="detail-box">
                                                            <span className="detail-label">Contact</span>
                                                            <span className="detail-value">{details?.phone}</span>
                                                        </div>
                                                    </div>

                                                    <div className="details-content-row">
                                                        <div className="details-stops">
                                                            <span className="detail-label">Route Map</span>
                                                            <div className="stops-timeline">
                                                                {details?.stops.map((stop, idx) => (
                                                                    <div key={idx} className="timeline-item">
                                                                        <div className="timeline-dot"></div>
                                                                        <span className="timeline-text">{stop}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="edge-center-bottom">
                            <RouteList routes={routesCenter} section="center" globalProgress={progress} onRouteClick={setSelectedRoute} />
                        </div>
                    </div>

                    <div className="edge-right">
                        <RouteList routes={routesRight} section="right" globalProgress={progress} onRouteClick={setSelectedRoute} />
                    </div>

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

            {/* Mobile Layout */}
            {isMobile && (
                <div className="transport-mobile-layout">
                    <div style={{ padding: '80px 20px 20px', textAlign: 'center', zIndex: 10 }}>
                        <h1 className="transport-title-mobile" style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.8rem' }}>
                            <Bus size={32} color="#3b82f6" /> ACE Transport
                        </h1>

                        <AnimatePresence mode="wait">
                            {!selectedRoute ? (
                                <motion.div
                                    key="mobile-nav"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <div className="mobile-image-card" style={{ marginTop: '20px', borderRadius: '20px', overflow: 'hidden', height: '200px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
                                        <img src={transportImages[currentImage]} alt="Transport Mobile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>

                                    <div className="mobile-routes-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px', gap: '10px', marginTop: '20px' }}>
                                        <div className="mobile-col-left" style={{ flex: 1, position: 'relative', borderRight: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                                            <motion.img
                                                src="/bus.png"
                                                style={{ position: 'absolute', left: '50%', x: '-50%', zIndex: 0, width: '30px', opacity: 0.6, transform: 'rotate(180deg)', filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))' }}
                                                animate={{ top: ['-10%', '110%'] }}
                                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                            />
                                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px 0', alignItems: 'center' }}>
                                                <h3 style={{ fontSize: '1rem', color: '#93c5fd', marginBottom: '5px' }}>Zone A</h3>
                                                {[...routesLeft, ...routesCenter.slice(0, Math.ceil(routesCenter.length / 2))].map((r, i, arr) => {
                                                    const mobileLoop = (progress * ANIMATION_DURATION) % 8 / 8;
                                                    const threshold = (i + 1) / (arr.length + 2);
                                                    const isVisible = progress >= 1 || (mobileLoop > threshold - 0.1);
                                                    return (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ opacity: isVisible ? 1 : 0.2, scale: isVisible ? 1 : 0.95 }}
                                                            transition={{ duration: 0.3 }}
                                                            style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', width: '90%', textAlign: 'center', cursor: progress >= 1 ? 'pointer' : 'default', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
                                                            onClick={() => progress >= 1 && setSelectedRoute(r)}
                                                        >
                                                            {r}
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="mobile-col-right" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                                            <motion.img
                                                src="/bus.png"
                                                style={{ position: 'absolute', left: '50%', x: '-50%', zIndex: 0, width: '30px', opacity: 0.6, filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.5))' }}
                                                animate={{ top: ['110%', '-10%'] }}
                                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                            />
                                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px 0', alignItems: 'center' }}>
                                                <h3 style={{ fontSize: '1rem', color: '#fca5a5', marginBottom: '5px' }}>Zone B</h3>
                                                {[...routesRight, ...routesCenter.slice(Math.ceil(routesCenter.length / 2))].map((r, i, arr) => {
                                                    const mobileLoop = (progress * ANIMATION_DURATION) % 8 / 8;
                                                    const busY = 1 - mobileLoop;
                                                    const itemY = (i + 1) / (arr.length + 2);
                                                    const isVisible = progress >= 1 || (busY < itemY + 0.05);
                                                    return (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ opacity: isVisible ? 1 : 0.2, scale: isVisible ? 1 : 0.95 }}
                                                            transition={{ duration: 0.3 }}
                                                            style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', width: '90%', textAlign: 'center', cursor: progress >= 1 ? 'pointer' : 'default', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
                                                            onClick={() => progress >= 1 && setSelectedRoute(r)}
                                                        >
                                                            {r}
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mobile-footer-info" style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textAlign: 'left' }}>
                                        <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                            <MapPin size={16} /> Transport Incharge: Mr. Govindaraj
                                        </p>
                                        <p style={{ marginLeft: '26px' }}>📞 9442855079</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="mobile-details"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    style={{ marginTop: '20px' }}
                                >
                                    <div className="details-glass-card" style={{ width: '100%', height: 'auto', minHeight: '400px', padding: '20px' }}>
                                        {details?.image ? (
                                            <div
                                                className="full-route-image-container"
                                                onClick={() => setSelectedRoute(null)}
                                                style={{ cursor: 'pointer', height: 'auto', minHeight: '300px' }}
                                            >
                                                <img src={details.image} alt={selectedRoute} className="full-route-image" style={{ objectFit: 'contain' }} />
                                                <div className="image-exit-hint" style={{ opacity: 1 }}>Tap to go back</div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="details-header" style={{ flexDirection: 'column', gap: '15px', paddingBottom: '15px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <Bus size={28} color="#3b82f6" />
                                                        <h2 style={{ fontSize: '1.5rem' }}>{selectedRoute}</h2>
                                                    </div>
                                                    <button className="back-to-images" onClick={() => setSelectedRoute(null)} style={{ width: '100%' }}>Back to Routes</button>
                                                </div>

                                                <div className="details-grid" style={{ gridTemplateColumns: '1fr', gap: '12px', marginTop: '15px' }}>
                                                    <div className="detail-box">
                                                        <span className="detail-label">Departure</span>
                                                        <span className="detail-value">{details?.time}</span>
                                                    </div>
                                                    <div className="detail-box">
                                                        <span className="detail-label">Driver</span>
                                                        <span className="detail-value">{details?.driver}</span>
                                                    </div>
                                                    <div className="detail-box">
                                                        <span className="detail-label">Contact</span>
                                                        <span className="detail-value">{details?.phone}</span>
                                                    </div>
                                                </div>

                                                <div style={{ marginTop: '20px' }}>
                                                    <span className="detail-label">Route Map</span>
                                                    <div className="mobile-stops-list" style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                        {details?.stops.map((stop, idx) => (
                                                            <div key={idx} className="timeline-item">
                                                                <div className="timeline-dot"></div>
                                                                <span className="timeline-text">{stop}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            )}

            <NavigationDock onBack={() => navigate(-1)} onHome={() => navigate('/thank-you')} onForward={() => navigate(1)} />

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                `
            }} />
        </div>
    );
};

export default Transport;
