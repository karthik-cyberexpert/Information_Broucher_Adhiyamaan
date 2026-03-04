import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import welcomeAnimation from '../assets/Welcome Animation.json';

// We'll duplicate this CSS import or ensure App.css is global
import { Info } from 'lucide-react';
import '../App.css';
import LightRays from '../components/LightRays';

const Home = () => {
  const navigate = useNavigate();
  const [showWelcome] = useState(false);

  const handleClick = () => {
    navigate('/bike-animation');
  };

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
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 20,
          width: 'max-content',
          maxWidth: '90vw'
        }}>
          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(1.2rem, 5vw, 2.2rem)',
            fontWeight: 900,
            letterSpacing: 'clamp(1px, 1.5vw, 4px)',
            margin: '0',
            background: 'linear-gradient(90deg, #fff 0%, #3b82f6 25%, #fbbf24 50%, #3b82f6 75%, #fff 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'holographic-flow 4s linear infinite',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.8)',
            textTransform: 'uppercase',
            lineHeight: '1.2'
          }}>
            ADHIYAMAAN COLLEGE OF ENGINEERING
          </h1>
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(1.2rem, 5vw, 2.2rem)',
            fontWeight: 900,
            letterSpacing: 'clamp(1px, 1.5vw, 4px)',
            margin: 0,
            background: 'linear-gradient(90deg, #fff 0%, #3b82f6 25%, #fbbf24 50%, #3b82f6 75%, #fff 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'holographic-flow 4s linear infinite',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.8)',
            textTransform: 'uppercase',
            lineHeight: '1.2',
            marginTop: '8px'
          }}>
            WELCOMES YOU
          </h2>
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


