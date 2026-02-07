import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BikePullAnimation from '../components/BikePullAnimation';
import Lottie from 'lottie-react';
// @ts-ignore
import welcomeAnimation from '../assets/Welcome Animation.json';
import LightRays from '../components/LightRays';
import '../App.css'; // Ensure global styles (modal, form) are available

const BikePage = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleClose = () => {
    // Navigate back to home or show welcome animation then menu?
    // Let's follow original flow: Welcome Animation -> /menu
    setShowWelcome(true);
    setTimeout(() => {
      setShowWelcome(false);
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
    setFormData({ name: '', email: '', phone: '' });
    handleClose();
  };

  return (
    <div className="bike-page-container">
        {/* Background Video/Image is handled by CSS on .bike-page-container or a child */}
        <div className="glass-background"></div>

        {!showWelcome && (
            <BikePullAnimation onComplete={() => {}}>
                <div className="modal square-modal">
                <button className="modal-close" onClick={() => navigate('/')}>&times;</button>
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
            </BikePullAnimation>
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
    </div>
  );
};

export default BikePage;
