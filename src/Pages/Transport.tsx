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
   "Bargur", "Tirupathur", "Anchetty"
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
const ANIMATION_DURATION = 11; 

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
      alignItems: section === 'left' ? 'flex-end' : section === 'right' ? 'flex-start' : 'center',
      justifyContent: section === 'center' ? 'center' : 'space-between',
    }}>
      {routes.map((route, index) => {
        let isVisible = false;
        const total = routes.length;
        
        if (section === 'left') {
            const threshold = (index / total) * 0.33;
            isVisible = globalProgress > threshold;
        } else if (section === 'center') {
            const threshold = 0.33 + (index / total) * 0.33;
            isVisible = globalProgress > threshold;
        } else if (section === 'right') {
            const indexFromBottom = total - 1 - index; 
            const threshold = 0.66 + (indexFromBottom / total) * 0.34;
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
                    <div className="route-dot" style={{ background: '#10b981', boxShadow: '0 0 8px #10b981' }}/>
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
  )};

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
      const LEFT_X = 13; // Inner edge of Left Col (15% with 2% margin)
      const RIGHT_X = 87; // Inner edge of Right Col (85% + 2% margin)
      const TOP_Y = 10;
      const BOTTOM_Y = 92;

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
        const p = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;
        setProgress(p);
        animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const busState = getBusState(progress);

  return (
    <div className="transport-page">
        {/* Video Background */}
        <video 
            className="transport-video-bg" 
            autoPlay 
            loop 
            muted 
            playsInline
        >
            <source src="/media/bg_image.mp4" type="video/mp4" />
        </video>

        {/* Global Bus Element - Icon */}
        <motion.div 
            style={{
                position: 'absolute',
                left: `${busState.x}%`,
                top: `${busState.y}%`,
                zIndex: 100, /* Above route cards */
                transform: `translate(-50%, -50%) rotate(${busState.rotation}deg)`,
                filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.6))', /* Yellow glow */
                pointerEvents: 'none',
            }}
        >
            <Bus size={40} color="#EAB308" fill="#EAB308" /> 
        </motion.div>

        {/* Dark Overlay matching Home page */}
        <div className="transport-overlay"></div>
    
            {/* Main Grid Layout */}
            <div className="transport-grid">
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
        
        {/* Navigation Dock */}
        <NavigationDock 
            onBack={() => navigate(-1)}
            onHome={() => navigate('/')}
            onForward={() => navigate(1)}
        />
        
        {/* Style Tag for Animations */}
        <style dangerouslySetInnerHTML={{__html: `
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
