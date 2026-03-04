import React from 'react';
import { Bus, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import './Transport.css';

// Routes Data
const routesLeft = ["Ayyur", "Haleseebam", "Kagadasam", "Local Staff Bus", "Kaknoor", "Jawalagiri", "Mathur", "Seekanapalli"];
const routesCenter = ["Alsanatham", "Mathigiri", "Athipalli", "Kariyamangalam", "Bargur", "Thirupathur", "Anchetty", "Hosur", "Thally"];
const routesRight = ["Poonapalli", "Rayakottai", "Mudampatti", "Kelamangalam & Gowthalam", "Berigai", "Krishnagiri", "Basthi", "Ashok Leyland"];

const transportImages = [
    "/images/transport/t1.jpeg",
    "/images/transport/t2.jpeg",
    "/images/transport/t3.jpg"
];

const routeDetails: Record<string, { time: string, driver: string, phone: string, stops: string[], image?: string }> = {
    "Ayyur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Ayyur", "Intermediate Point", "ACE"], image: "/images/transport/ayyur.jpg" },
    "Haleseebam": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Haleseebam", "Intermediate Point", "ACE"], image: "/images/transport/haleesibam.jpg" },
    "Kagadasam": { time: "7:10 AM", driver: "TBD", phone: "9442855079", stops: ["Kagadasam", "Intermediate Point", "ACE"], image: "/images/transport/kadagasam.jpg" },
    "Local Staff Bus": { time: "8:15 AM", driver: "TBD", phone: "9442855079", stops: ["Main Gate", "Admin", "ACE"], image: "/images/transport/local staff bus.jpg" },
    "Kaknoor": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Kaknoor", "Intermediate Point", "ACE"], image: "/images/transport/kakanoor.jpg" },
    "Jawalagiri": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Jawalagiri", "Intermediate Point", "ACE"], image: "/images/transport/jawalagiri.jpg" },
    "Mathur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Mathur", "Intermediate Point", "ACE"], image: "/images/transport/mathur.jpg" },
    "Seekanapalli": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Seekanapalli", "Intermediate Point", "ACE"], image: "/images/transport/seekanapalli.jpg" },
    "Alsanatham": { time: "7:00 AM", driver: "TBD", phone: "9442855079", stops: ["Alsanatham", "Intermediate Point", "ACE"], image: "/images/transport/alsanatham.jpg" },
    "Mathigiri": { time: "7:30 AM", driver: "TBD", phone: "9442855079", stops: ["Mathigiri", "Intermediate Point", "ACE"], image: "/images/transport/mathigiri.jpg" },
    "Athipalli": { time: "6:50 AM", driver: "TBD", phone: "9442855079", stops: ["Athipalli", "Intermediate Point", "ACE"], image: "/images/transport/athipalli.jpg" },
    "Kariyamangalam": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Kariyamangalam", "Intermediate Point", "ACE"], image: "/images/transport/kariyamangalam.jpg" },
    "Bargur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Bargur", "Intermediate Point", "ACE"], image: "/images/transport/Bargur.jpg" },
    "Thirupathur": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Thirupathur", "Intermediate Point", "ACE"], image: "/images/transport/thirupathur.jpg" },
    "Anchetty": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Anchetty", "Intermediate Point", "ACE"], image: "/images/transport/anchetty.jpg" },
    "Hosur": { time: "8:00 AM", driver: "TBD", phone: "9442855079", stops: ["Bus Stand", "Raman Nagar", "ACE"], image: "/images/transport/15.jpg" },
    "Thally": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Thally", "Intermediate Point", "ACE"], image: "/images/transport/17.jpg" },
    "Poonapalli": { time: "7:40 AM", driver: "TBD", phone: "9442855079", stops: ["Poonapalli", "Intermediate Point", "ACE"], image: "/images/transport/poonapalli.jpg" },
    "Rayakottai": { time: "6:45 AM", driver: "TBD", phone: "9442855079", stops: ["Rayakottai", "Intermediate Point", "ACE"], image: "/images/transport/rayakottai.jpg" },
    "Mudampatti": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Mudampatti", "Intermediate Point", "ACE"], image: "/images/transport/mudampatti.jpg" },
    "Kelamangalam & Gowthalam": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Kelamangalam", "Gowthalam", "ACE"], image: "/images/transport/kelamangalam.jpg" },
    "Berigai": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Berigai", "Intermediate Point", "ACE"], image: "/images/transport/bergai.jpg" },
    "Krishnagiri": { time: "6:30 AM", driver: "TBD", phone: "9442855079", stops: ["Krishnagiri", "Intermediate Point", "ACE"], image: "/images/transport/krishnagiri.jpg" },
    "Basthi": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Basthi", "Intermediate Point", "ACE"], image: "/images/transport/basthi.jpg" },
    "Ashok Leyland": { time: "7:15 AM", driver: "TBD", phone: "9442855079", stops: ["Ashok Leyland", "Intermediate Point", "ACE"], image: "/images/transport/ashoke leyland.jpg" },
};

const ANIMATION_DURATION = 12; // Seconds

const P1_END = 0.327;
const P2_END = 0.674;

const getBusState = (progress: number) => {
    if (progress <= P1_END) {
        const stageProgress = progress / P1_END;
        return {
            x: 7.5,
            y: 10 + (stageProgress * 80),
            rotation: 180
        };
    }
    if (progress <= P2_END) {
        const stageProgress = (progress - P1_END) / (P2_END - P1_END);
        return {
            x: 7.5 + (stageProgress * 85),
            y: 90,
            rotation: 90
        };
    }
    const stageProgress = (progress - P2_END) / (1 - P2_END);
    return {
        x: 92.5,
        y: 90 - (stageProgress * 80),
        rotation: 0
    };
};

const getDefaultDetail = (name: string) => ({
    time: "7:15 AM",
    driver: "TBD",
    phone: "9442855079",
    stops: [name, "Intermediate Point", "ACE"]
});

const RouteList = ({ routes, section, globalProgress, onRouteClick }: any) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: section === 'center' ? 'row' : 'column',
            flexWrap: 'nowrap',
            gap: section === 'center' ? '12px' : '20px',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: section === 'center' ? 'center' : 'space-between',
        }}>
            {routes.map((route: string, index: number) => {
                let isVisible = false;
                const phaseLength = section === 'left' ? P1_END : section === 'center' ? (P2_END - P1_END) : (1 - P2_END);
                const phaseStart = section === 'left' ? 0.0 : section === 'center' ? P1_END : P2_END;
                const itemIndex = section === 'right' ? (routes.length - 1 - index) : index;
                const itemThreshold = phaseStart + (itemIndex / routes.length) * phaseLength;

                isVisible = globalProgress >= 1 || globalProgress >= itemThreshold;

                return (
                    <motion.div
                        key={route}
                        className={`route-card ${section}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: isVisible ? 1 : 0.1,
                            scale: isVisible ? 1 : 0.9
                        }}
                        transition={{ duration: 0.4 }}
                        onClick={() => isVisible && onRouteClick(route)}
                    >
                        <Bus size={18} color="#60a5fa" />
                        <span className="route-text">{route}</span>
                    </motion.div>
                );
            })}
        </div>
    );
};

const Transport = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = React.useState(0);
    const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % transportImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        let animationFrame: number;
        const startTime = Date.now();
        const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const newProgress = Math.min(elapsed / ANIMATION_DURATION, 1);
            setProgress(newProgress);
            if (newProgress < 1) animationFrame = requestAnimationFrame(animate);
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
            <video className="transport-video-bg" autoPlay loop muted playsInline style={isMobile ? { position: 'fixed' } : {}}>
                <source src="/media/bg_image.mp4" type="video/mp4" />
            </video>

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

            <div className="transport-overlay" style={isMobile ? { position: 'fixed' } : {}} />

            {!isMobile && (
                <div className="transport-grid">
                    <div className="edge-top">
                        <h1 className="transport-title">
                            <Bus size={40} color="#3b82f6" />
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
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="details-glass-card image-only">
                                            <div className="details-header floating">
                                                <div className="title-row">
                                                    <Bus size={24} color="#60a5fa" />
                                                    <h2>{selectedRoute}</h2>
                                                </div>
                                                <button className="back-btn blur" onClick={() => setSelectedRoute(null)}>
                                                    ✕ Close
                                                </button>
                                            </div>

                                            <div className="full-route-image-container">
                                                {details?.image ? (
                                                    <img src={details.image} alt={selectedRoute} className="full-route-img" />
                                                ) : (
                                                    <div className="no-image-placeholder">
                                                        <MapPin size={48} color="rgba(255,255,255,0.2)" />
                                                        <span>No preview available for {selectedRoute}</span>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="edge-center-bottom">
                        <RouteList routes={routesCenter} section="center" globalProgress={progress} onRouteClick={setSelectedRoute} />
                    </div>

                    <div className="edge-right">
                        <RouteList routes={routesRight} section="right" globalProgress={progress} onRouteClick={setSelectedRoute} />
                    </div>

                    <div className="edge-bottom">
                        <MapPin size={18} />
                        <span>Transport Incharge: Mr. Govindaraj (9442855079)</span>
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="transport-mobile-header" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Bus size={24} color="#3b82f6" />
                    <h1 style={{ fontSize: '1.2rem', margin: 0, color: 'white' }}>ACE Transport Routes</h1>
                </div>
            )}

            {isMobile && (
                <div className="transport-mobile-layout" style={{ padding: '80px 15px 120px', zIndex: 10 }}>
                    <div className="mobile-route-grid">
                        {[...routesLeft, ...routesCenter, ...routesRight].map((r, i) => {
                            const routeImg = routeDetails[r]?.image;
                            return (
                                <motion.div
                                    key={i}
                                    className="route-card-mobile"
                                    onClick={() => setSelectedRoute(r)}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div className="card-image-bg" style={{
                                        backgroundImage: routeImg ? `url(${routeImg})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '100px',
                                        width: '100%',
                                        borderRadius: '10px',
                                        marginBottom: '10px',
                                        background: routeImg ? '' : 'rgba(255,255,255,0.1)'
                                    }}>
                                        {!routeImg && <Bus size={32} color="rgba(255,255,255,0.2)" />}
                                    </div>
                                    <div className="card-info">
                                        <span className="route-name">{r}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Mobile Details Modal */}
            <AnimatePresence>
                {isMobile && selectedRoute && (
                    <motion.div
                        className="mobile-details-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="mobile-details-header">
                            <div className="title-section">
                                <Bus size={20} color="#60a5fa" />
                                <h3>{selectedRoute}</h3>
                            </div>
                            <button className="mobile-close-btn" onClick={() => setSelectedRoute(null)}>✕</button>
                        </div>
                        <div className="mobile-details-content">
                            {details?.image ? (
                                <img src={details.image} alt={selectedRoute} className="mobile-route-detail-img" />
                            ) : (
                                <div className="no-image-mobile">
                                    <MapPin size={48} color="rgba(255,255,255,0.2)" />
                                    <span>No preview available</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <NavigationDock onBack={() => navigate(-1)} onHome={() => navigate('/thank-you')} onForward={() => navigate(1)} />
        </div>
    );
};

export default Transport;
