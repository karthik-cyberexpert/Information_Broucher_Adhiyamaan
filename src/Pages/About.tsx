import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Award, Users, BookOpen, Home, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "./About.css";

// --- Animated Counter Component ---
const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\+/g, ''));

  useEffect(() => {
    let start = 0;
    const increment = numericValue / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return <span>{count}{value.includes('+') ? '+' : ''}</span>;
};



export default function About() {
  const navigate = useNavigate();

  const stats = [
    { num: "35", label: "YEARS OF EXPERIENCE", icon: <Award className="honeycomb-icon" size={32} /> },
    { num: "19", label: "COURSES", icon: <BookOpen className="honeycomb-icon" size={32} /> },
    { num: "6000+", label: "STUDENTS", icon: <Users className="honeycomb-icon" size={32} /> },
    { num: "800+", label: "PUBLICATIONS", icon: <GraduationCap className="honeycomb-icon" size={32} /> }
  ];

  const accreditations = [
    { text: "Approved By AICTE, New Delhi", img: "aicte.png" },
    { text: "Affiliated To Anna University, Chennai", img: "annauniversity.png" },
    { text: "Approved By Council Of Architecture, New Delhi", img: "ca.png" },
    { text: "Autonomous Status, UGC, New Delhi", img: "autonomous new delhi.png" },
    { text: "Recognized By Government of Tamil Nadu", img: "tamilnadu.png" },
    { text: "Accredited NAAC, New Delhi", img: "nacc new delhi.png" },
    { text: "Accredited By NBA, New Delhi", img: "nba.png" },
    { text: "Recognition of Scientific and Industrial Research Organisation (SIRO) by DSIR", img: "dsir.png" }
  ];

  return (
    <div className="about-visual-redesign">
      {/* Background with circuit lines */}
      <div className="visual-background">
        <div className="circuit-lines"></div>
        <div className="star-field"></div>
      </div>

      {/* Home Button */}
      <motion.button
        className="floating-home-btn"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <Home size={20} />
      </motion.button>

      <div className="visual-container">
        {/* Title */}
        <motion.h1
          className="central-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ADHIYAMAAN COLLEGE OF ENGINEERING
        </motion.h1>

        {/* Top Stats Section - Octagonal Cards */}
        <div className="stats-octa-row">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="octa-card-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="octa-shape">
                <div className="octa-inner">
                  {stat.icon}
                  <div className="octa-num"><AnimatedCounter value={stat.num} /></div>
                  <div className="octa-label">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Section - Side by Side Cards */}
        <div className="info-side-grid">
          <motion.div
            className="info-box glow-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="box-header">
              <Eye className="box-icon" size={32} />
              <h2>Our Vision</h2>
            </div>
            <p className="box-text">
              To foster ACE as a centre for nurturing and developing world class Engineers and Managers who convert global challenges into opportunities through value-based quality education.
            </p>
          </motion.div>

          <motion.div
            className="info-box glow-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="box-header">
              <Rocket className="box-icon" size={32} />
              <h2>Our Mission</h2>
            </div>
            <ul className="box-list">
              <li>Impart value-based quality education</li>
              <li>Nurture creativity and critical thinking</li>
              <li>Develop holistic personality for global mobility</li>
              <li>Make ACE a centre for excellence</li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Section - Accreditations */}
        <div className="visual-footer">
          <div className="footer-section">
            <h3 className="footer-title">Accreditations & Affiliations</h3>
            <div className="affiliations-scroll-wrapper">
              <div className="affiliations-track">
                {[...accreditations, ...accreditations].map((item, i) => (
                  <div key={i} className="affiliation-logo-box">
                    <img src={`/images/${item.img}`} alt={item.text} className="affiliation-img" />
                    <span className="affiliation-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
