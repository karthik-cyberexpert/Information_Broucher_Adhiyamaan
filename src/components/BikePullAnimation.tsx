import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
// @ts-ignore
import riderAnimation from '../assets/animated_rider.json';

interface BikePullAnimationProps {
  onComplete?: () => void;
  children: React.ReactNode; 
}

const BikePullAnimation = ({ onComplete, children }: BikePullAnimationProps) => {
  const controls = useAnimation();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const sequence = async () => {
      // 1. Initial State: Off-screen left
      await controls.start({ 
          x: '-100vw', 
          transition: { duration: 0 } 
      });

      // 2. Pull Animation: Move to center
      lottieRef.current?.play();

      await controls.start({ 
          x: 'calc(50vw - 250px)', // Centering
          transition: { 
              duration: 5, // Increased to 5s
              ease: "easeOut",
              type: "spring",
              damping: 20,
              stiffness: 30 // Softer spring for longer duration
          } 
      });

      if (onComplete) onComplete();
    };

    sequence();
  }, [controls, onComplete]);

  return (
    <motion.div 
      animate={controls}
      initial={{ x: '-100vw' }}
      style={{
        position: 'fixed',
        top: '0',
        left: '0', 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        zIndex: 2000,
        width: 'max-content',
        pointerEvents: 'none'
      }}
    >
        {/* Bike Container - Leading the way */}
        {/* If Bike pulls Modal from Left, Bike must be in front (Right side) */}
        
        <div style={{ pointerEvents: 'auto' }}>
            {children}
        </div>

        {/* Rope Connector */}
        <div style={{
            width: '100px',
            height: '6px',
            background: 'linear-gradient(to right, #5d4037, #3e2723)',
            borderRadius: '4px',
            position: 'relative',
            zIndex: 5,
            margin: '0 -10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
            {/* Knot at modal end */}
            <div style={{
                position: 'absolute',
                left: '-4px',
                top: '-5px',
                width: '16px',
                height: '16px',
                background: '#3e2723',
                borderRadius: '50%'
            }} />
             {/* Knot at bike end */}
             <div style={{
                position: 'absolute',
                right: '-4px',
                top: '-5px',
                width: '16px',
                height: '16px',
                background: '#3e2723',
                borderRadius: '50%'
            }} />
        </div>

        {/* Bike Container */}
        <div style={{ 
            width: '250px', 
            height: '250px', 
            zIndex: 10,
            // Removed scaleX(-1) as per user request (reverse direction)
        }}>
            <Lottie 
                lottieRef={lottieRef}
                animationData={riderAnimation} 
                loop={true} 
                style={{ width: '100%', height: '100%' }}
            />
        </div>

    </motion.div>
  );
};

export default BikePullAnimation;
