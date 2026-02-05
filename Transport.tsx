import React from 'react';
import { Bus, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import './Transport.css';

const Transport = () => {
  const navigate = useNavigate();
  // Routes Data extracted from reference
  const routesLeft = [
    "Ayyur", "Haleseebam", "Kagadasam", "Local Staff Bus", 
    "Kaknoor", "Jawalagiri", "Mathur", "Seekanapalli", 
    "Alsanatham", "Mathigiri", "Athipalli", "Kariyamangalam"
  ];

  const routesRight = [
    "Bargur", "Tirupathur", "Anchetty", "Poonapalli", 
    "Rayakottai", "Mudampatti", "Kelamangalam & Gowthalam", 
    "Berigai", "Krishnagiri", "Basthi", "Ashok Leyland"
  ];

  // Animation Constants
  const ANIMATION_DURATION = 4; // Faster animation as requested

  const RouteList = ({ routes, align }: { routes: string[], align: 'left' | 'right' }) => {
     // We need to drive the animation based on the "Bus Progress" (0 to 1)
     // 0 = Start of animation
     // 1 = End of animation
     
     const totalItems = routes.length;
     // The bus travels from -10% to 110% visually.
     // Let's create a progress value that loops 0 -> 1.
     
     const [progress, setProgress] = React.useState(0);

     // Looping logic
     React.useEffect(() => {
        let start: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = (timestamp - start) / 1000; // seconds
            
            // Current Loop Progress (0 to 1)
            const p = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;
            setProgress(p);

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
     }, []);

     // Derived Values
     // Left Side: Bus goes Top -> Bottom.  Progress 0 -> 1 maps to Index 0 -> Last
     // Right Side: Bus goes Bottom -> Top. Progress 0 -> 1 maps to Last -> Index 0
     
    return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px', 
      width: '100%',
      alignItems: align === 'left' ? 'flex-start' : 'flex-end',
      // Padding handled by container classes edge-left/right
    }}>
      {/* The Bus */}
      <motion.img 
        src="/assets/bus.png"
        // We use the computed progress to drive position directly to ensure sync
        style={{
            position: 'absolute',
            left: align === 'left' ? '20%' : 'auto', 
            right: align === 'right' ? '20%' : 'auto',
            transform: align === 'left' ? 'translateX(-50%) rotate(180deg)' : 'translateX(50%) rotate(0deg)',
            opacity: 1,
            zIndex: 20,
            width: '60px',
            height: 'auto',
            mixBlendMode: 'screen',
            // Drive position with progress:
            // Left: -10% -> 110%
            // Right: 110% -> -10%
            top: align === 'left' 
                ? `${-10 + (progress * 130)}%` 
                : `${120 - (progress * 130)}%`, // start lower (120%) go high (-10%)
                
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
        }}
      />

      {routes.map((route, index) => {
        // Calculations for visibility
        // We want the card to show when the bus "passes" it.
        // Left: Index 0 is at Top. Bus passes it early (progress ~ 0.1)
        // Right: Index Last is at Bottom. Bus starts Bottom, passes it early.
        
        let isVisible = false;
        
        // Threshold: At what progress % does the bus pass this card?
        // We have N cards equally spaced.
        // Card N's position is roughly (Index / Total) * 100 %.
        
        if (align === 'left') {
            // Bus goes Top (0%) -> Bottom (100%)
            // Card visual position ~ (index / totalItems)
            const threshold = (index / totalItems); 
            // Add a slight buffer so it reveals just AS the bus arrives, not after
            isVisible = progress > (threshold - 0.05);
        } else {
             // Bus goes Bottom (110%) -> Top (-10%)
             // We are rendering top-down, so index 0 is Top, index Last is Bottom.
             // We want bottom cards to show first.
             // Card visual position from bottom ~ ((total - index) / total)
             // But simpler: Bus progress 0 means it's at bottom.
             // As progress increases, it moves UP.
             // So it reveals (total - 1 - index) items?
             
             // Let's map progress to "Current Height from Bottom".
             // Progress 0 = 0% form bottom. Progress 1 = 100% from bottom.
             // Card "depth" from bottom:
             const indexFromBottom = totalItems - 1 - index;
             const threshold = (indexFromBottom / totalItems);
             
             isVisible = progress > (threshold - 0.05);
        }

        // Hard Reset at end of cycle:
        // When progress wraps to 0, it becomes false, so they hide instantly.
        // This gives the "Reset" effect the user described naturally loop-wise.

        return (
            <motion.div 
            key={route}
            animate={{ 
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : (align === 'left' ? -20 : 20),
                scale: isVisible ? 1 : 0.95
            }}
            transition={{ duration: 0.3 }} // Fast local transition for the reveal state
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
                gap: '8px',
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                padding: '8px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: 'fit-content',
                cursor: 'default',
                margin: '0'
            }}
            whileHover={{
                scale: 1.02,
                background: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
            >
            {align === 'left' && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6', flexShrink: 0 }}></div>}
            <span style={{ flex: 1, textAlign: align }}>{route}</span>
            {align === 'right' && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6', flexShrink: 0 }}></div>}
            </motion.div>
        );
      })}
    </div>
  )};

  return (
    <div className="transport-page">
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
                <RouteList routes={routesLeft} align="left" />
            </div>

            {/* Center Content - The "Premium" Visual */}
            <div className="center-stage">
                <motion.div
                    className="center-visual-container"
                    initial={{ scale: 0.5, opacity: 0, rotateX: 20 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Glowing Rings Background */}
                    <div className="glowing-ring-outer"></div>
                     <div className="glowing-ring-inner"></div>

                    {/* Central Glass Disc */}
                    <div className="glass-disc">
                        <Bus className="bus-icon-large" />
                        
                        {/* Orbiting Icons */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            style={{ position: 'absolute', width: '100%', height: '100%' }}
                        >
                            <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                <div style={{ background: '#3b82f6', width: '8px', height: '8px', borderRadius: '50%', boxShadow: '0 0 10px #3b82f6' }}></div>
                            </div>
                        </motion.div>
                    </div>

                    <h1 className="campus-title">
                        Campus
                    </h1>
                     <p className="logistics-subtitle">
                        Logistics
                    </p>

                </motion.div>
            </div>

            {/* Right Edge - Route List 2 */}
            <div className="edge-right">
                <RouteList routes={routesRight} align="right" />
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
