import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

const developers = [
  {
    name: "KARTHIKEYAN S",
    details: "II CSE-Cyber Security (2024 batch)",
    image: "/images/thak you page/Karthik.jpg"
  },
  {
    name: "ABINAYA B",
    details: "I MCA (2025 batch)",
    image: "/images/thak you page/abinaya.jpeg"
  },
  {
    name: "SUMMAIYA L",
    details: "I MCA (2025 batch)",
    image: "/images/thak you page/summiaya.jpeg"
  },
  {
    name: "MERLIN",
    details: "I MCA (2025 batch)",
    image: "/images/thak you page/merlin.jpeg"
  },
  {
    name: "FATHIMA",
    details: "I MCA (2025 batch)",
    image: "/images/thak you page/fathima.jpeg"
  },
  {
    name: "DHARSHITHA",
    details: "II CSE-Cyber Security (2024 batch)",
    image: "/images/thak you page/dharshitha.jpg.jpeg"
  },
  {
    name: "POOJA SREE",
    details: "II CSE-Cyber Security (2024 batch)",
    image: "/images/thak you page/pooja sree .jpg.jpeg"
  }
];

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 8000); // 8 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-page">
      <div className="thank-you-bg"></div>

      <div className="thank-you-content">
        <h1 className="thank-you-title">Project Developers</h1>
        <p className="thank-you-subtitle">Designed & Developed by</p>

        <div className="developers-section">
          {/* <h2 className="developers-title">Developed By</h2> */}
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

        {/* <div className="redirect-hint">
          Redirecting to home in a few moments...
        </div> */}
        {/* Removed Return Home Button */}
      </div>
    </div>
  );
};

export default ThankYou;
