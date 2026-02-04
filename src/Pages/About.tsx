import { useNavigate } from "react-router-dom";
import "../components/Menu.css";
import "./About.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Background */}
      <div className="about-bg"></div>
      
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">Adhiyamaan College of Engineering</h1>
        <p className="about-tagline">Excellence in Education Since 1984</p>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stat-card">
          <span className="stat-number">40+</span>
          <span className="stat-label">Years of Excellence</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">15000+</span>
          <span className="stat-label">Alumni Worldwide</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">50+</span>
          <span className="stat-label">Programs Offered</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">300+</span>
          <span className="stat-label">Expert Faculty</span>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-content">
        <div className="about-card vision-card">
          <div className="card-icon">🎯</div>
          <h2>Our Vision</h2>
          <p>
            To be a globally recognized institution of excellence in technical education, 
            fostering innovation, research, and holistic development of students to meet 
            the challenges of the ever-evolving technological landscape.
          </p>
        </div>

        <div className="about-card mission-card">
          <div className="card-icon">🚀</div>
          <h2>Our Mission</h2>
          <ul>
            <li>Provide quality education with state-of-the-art infrastructure</li>
            <li>Foster research and innovation among students and faculty</li>
            <li>Develop industry-ready professionals with ethical values</li>
            <li>Promote entrepreneurship and leadership skills</li>
          </ul>
        </div>
      </section>

      {/* Accreditation */}
      <section className="about-accreditation">
        <h2>Accreditations & Affiliations</h2>
        <div className="accred-grid">
          <div className="accred-item">NAAC A+ Grade</div>
          <div className="accred-item">NBA Accredited</div>
          <div className="accred-item">Anna University</div>
          <div className="accred-item">AICTE Approved</div>
        </div>
      </section>

      {/* Navigation Button */}
      <div className="me-nav-controls">
        <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/menu")}>
          <img src="/images/menu.gif" alt="Menu" />
        </button>
      </div>
    </div>
  );
}
