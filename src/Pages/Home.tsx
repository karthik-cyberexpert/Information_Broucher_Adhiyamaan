import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
// @ts-ignore
import TransparentGif from '../components/TransparentGif';
// @ts-ignore - JSON import for Lottie
import welcomeAnimation from '../assets/Welcome Animation.json';

// We'll duplicate this CSS import or ensure App.css is global
import { Info } from 'lucide-react';
import '../App.css';
import LightRays from '../components/LightRays';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [showWelcome] = useState(false);

  // Form state removed as it moved to BikePage, 
  // but if we need it for welcome animation context we can restart it there.

  const handleClick = () => {
    navigate('/bike-animation');
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
      scale: 1.5
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  const text = "Adhiyamaan College of Engineering Welcomes You";

  return (
    <div className="landing-page">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/promo.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>




      <div className="main-content">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem', padding: '0 20px' }}>
          <motion.h1
            className="welcome-message"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.4rem',
              // Creative Styles for "Merging" with Video
              color: 'rgba(255, 255, 255, 0.95)',
              mixBlendMode: 'overlay', // This blends it with the video
              textShadow: '0 4px 30px rgba(0,0,0,0.5)', // Adds depth ensuring legibility
              backdropFilter: 'blur(2px)', // Subtle blur to background
            }}
          >
            {text.split(" ").map((word, wordIndex) => (
              <div key={wordIndex} style={{ display: 'inline-block' }}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    variants={letterVariants}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(to bottom, #ffffff, #a5b4fc)', // Subtle gradient
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.h1>
        </div>
        <div className="click-here-container">
          <div className="info-badge">
            <div className="info-icon-circle">
              <Info size={14} />
            </div>
            <p className="click-more-info">To know more about the college</p>
          </div>
          <button className="start-btn" onClick={handleClick}>
            CLICK HERE
          </button>
        </div>
      </div>

      {/* Welcome Animation Overlay - Still kept here if needed for other flows, 
          but BikePage now handles post-form welcome. */}
      {showWelcome && (
        <div className="welcome-overlay">
          <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
              <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
              />
            </div>
            <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
              <Lottie
                animationData={welcomeAnimation}
                loop={true}
                className="welcome-animation"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Sad Animation Overlay */}

    </div>
  );
};

export default Home;


