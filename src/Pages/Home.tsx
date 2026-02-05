import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import collegeLogo from '../assets/college-logo.png';
// @ts-ignore - JSON import for Lottie
import welcomeAnimation from '../../public/assets/Welcome Animation.json';
// @ts-ignore - JSON import for Lottie
import sadAnimation from '../../public/assets/Sad guy is walking.json';
// We'll duplicate this CSS import or ensure App.css is global
import '../App.css'; 
import LightRays from '../components/LightRays'; 

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSad, setShowSad] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    
    // Show sad animation for 3 seconds when closing without submit
    setShowSad(true);
    setTimeout(() => {
      setShowSad(false);
      navigate('/menu');
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '' });
    
    // Show welcome animation for 3 seconds
    setShowWelcome(true);
    setTimeout(() => {
      setShowWelcome(false);
      navigate('/menu');
    }, 3000);
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
          <img src={collegeLogo} className="college-logo" alt="College Logo" />
          <h1 className="college-name">Adhiyamaan College of Engineering</h1>
        </div>
      </header>

      <div className="main-content">
        <div className="click-here-container">
           <button className="start-btn" onClick={handleClick}>
             CLICK HERE
           </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={handleClose}>&times;</button>
            <h2 className="modal-title">Add your Details</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Welcome Animation Overlay */}
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
      {showSad && (
        <div className="sad-overlay">
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
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Lottie 
                animationData={sadAnimation} 
                loop={true}
                className="sad-animation"
                style={{ height: '400px' }}
              />
              <p className="sad-text" style={{ marginTop: '20px', zIndex: 10 }}>You haven't added your details!!!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


