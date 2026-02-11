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

const Home = () => {
  const navigate = useNavigate();
  const [showWelcome] = useState(false);

  // Form state removed as it moved to BikePage, 
  // but if we need it for welcome animation context we can restart it there.

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

      <header className="header">
        <div className="logo-container">
          <TransparentGif 
            src="/images/logo33.gif" 
            width={300} 
            height={90} 
            className="college-logo"
            style={{ borderRadius: '16px' }}
          />
        </div>
      </header>

      <div className="main-content">
        <div className="click-here-container">
           <div className="info-badge">
             <div className="info-icon-circle">
               <Info size={14} />
             </div>
             <p className="click-more-info">To explore more details and insights</p>
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


