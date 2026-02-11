import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

const developers = [
  {
    name: "KARTHIKEYAN S",
    details: "II CSE-Cyber Security (2024 batch)",
    image: "/images/a1.png"
  },
  {
    name: "ABINAYA",
    details: "I MCA (2025 batch)",
    image: "/images/a2.png"
  },
  {
    name: "SUMMAIYA",
    details: "I MCA (2025 batch)",
    image: "/images/a3.png"
  },
  {
    name: "MERLIN",
    details: "I MCA (2025 batch)",
    image: "/images/a4.png"
  },
  {
    name: "FATHIMA",
    details: "I MCA (2025 batch)",
    image: "/images/a5.png"
  },
  {
    name: "DHARSHITHA",
    details: "II CSE-Cyber Security (2024 batch)",
    image: "/images/a6.png"
  },
  {
    name: "POOJA SREE",
    details: "II CSE-Cyber Security (2024 batch)",
    image: "/images/a7.png"
  }
];

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-page">
      <div className="thank-you-bg"></div>
      
      <div className="thank-you-content">
        <h1 className="thank-you-title">Thank You for Visiting!</h1>
        <p className="thank-you-subtitle">We hope you found the information helpful.</p>
        
        <div className="developers-section">
          <h2 className="developers-title">Developed By</h2>
          <div className="developers-grid">
            {developers.map((dev, index) => (
              <div key={index} className="developer-card">
                <div className="dev-image-container">
                  <img src={dev.image} alt={dev.name} className="dev-image" />
                </div>
                <div className="dev-info">
                  <h3 className="dev-name">{dev.name}</h3>
                  <p className="dev-details">{dev.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="redirect-hint">
          Redirecting to home in a few moments...
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
