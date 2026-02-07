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
  const bikeControls = useAnimation();
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
              duration: 5, 
              ease: "easeOut",
              type: "spring",
              damping: 20,
              stiffness: 30
          } 
      });

      if (onComplete) onComplete();

      // 3. Bike Exit: Drive away to the right
      // The container stops, so we animate the bike relative to it.
      await bikeControls.start({
          x: '150vw', // Move way off to the right
          transition: {
              duration: 2.5,
              ease: "easeIn" // Accelerate away
          }
      });
    };

    sequence();
  }, [controls, bikeControls, onComplete]);

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
        
        <div style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}>
            {children}
        </div>

        {/* Rope Connector REMOVED */}

        {/* Bike Container */}
        <motion.div 
            animate={bikeControls}
            style={{ 
                width: '400px', 
                height: '400px', 
                position: 'relative', 
                zIndex: 20, 
                marginLeft: '-80px', 
            }}
        >
            <Lottie 
                lottieRef={lottieRef}
                animationData={riderAnimation} 
                loop={true} 
                style={{ width: '100%', height: '100%' }}
            />
        </motion.div>

    </motion.div>
  );
};

export default BikePullAnimation;
