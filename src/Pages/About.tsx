import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, GraduationCap, Award, Users, BookOpen, Sparkles, Home, ShieldCheck } from 'lucide-react';
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

// --- Magnetic Card Component ---
const MagneticCard = ({ children, className }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// --- Hexagon Component ---
/*
const HexagonCard = ({ icon, title, desc, delay }: any) => {
  return (
    <motion.div
      className="hexagon-card"
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, rotateZ: 5 }}
    >
      <div className="hex-icon">{icon}</div>
      <h4 className="hex-title">{title}</h4>
      <p className="hex-desc">{desc}</p>
    </motion.div>
  );
};
*/

export default function About() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    { num: "40+", label: "Years of Excellence", icon: <Award size={24} /> },
    { num: "15000+", label: "Alumni Worldwide", icon: <Users size={24} /> },
    { num: "50+", label: "Programs Offered", icon: <BookOpen size={24} /> },
    { num: "300+", label: "Expert Faculty", icon: <GraduationCap size={24} /> }
  ];

  const affiliations = [
    "Recognized By Government of Tamil Nadu",
    "Approved By AICTE, New Delhi",
    "Approved By Council of Architecture, New Delhi",
    "Affiliated To Anna University, Chennai",
    "Autonomous Status, UGC, New Delhi",
    "Recognized under 2(f)&12(B) in 2013 of UGC Act",
    "Accredited NAAC, New Delhi",
    "Accredited By NBA, New Delhi",
    "Recognized As SIRO by DSIR of DST",
    "Research Centre"
  ];

  const coreValues = [
    {
      title: "Student Focus",
      desc: "Creating an educational environment for diverse goals.",
      icon: <Users size={20} />
    },
    {
      title: "Excellence",
      desc: "High standards of integrity and performance.",
      icon: <Award size={20} />
    },
    {
      title: "Collaboration",
      desc: "Input from all stakeholders and community.",
      icon: <Users size={20} />
    },
    {
      title: "Diversity",
      desc: "Recognizing all learning styles and values.",
      icon: <Sparkles size={20} />
    },
    {
      title: "Life-Long Learning",
      desc: "Independent thinkers striving for growth.",
      icon: <BookOpen size={20} />
    },
    {
      title: "Tech Advancement",
      desc: "Keeping pace with global trends.",
      icon: <Rocket size={20} />
    },
    {
      title: "Supportive Atmosphere",
      desc: "Trust, communication, and teamwork.",
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <div className="about-creative-page">
      {/* Background Layer */}
      <div className="creative-bg-layer">
        <video autoPlay loop muted playsInline className="creative-video">
          <source src="/media/about.mp4.mp4" type="video/mp4" />
        </video>
        <div className="creative-overlay" />

        {/* Animated Particles */}
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Home Button */}
      <motion.button
        className="creative-home-btn"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <Home size={20} />
      </motion.button>

      {/* Main Content */}
      <div className="creative-container">
        {/* Header */}
        <motion.div
          className="creative-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="holographic-title">
            ADHIYAMAAN COLLEGE OF ENGINEERING
          </h1>
          <p className="creative-tagline">EXCELLENCE IN EDUCATION SINCE 1984</p>
        </motion.div>

        {/* Floating Stats */}
        <motion.div className="floating-stats" style={{ y: y1 }}>
          {stats.map((stat, i) => (
            <MagneticCard key={i} className="stat-float-card">
              <motion.div
                className="stat-ring"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              >
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" />
                </svg>
              </motion.div>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <AnimatedCounter value={stat.num} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </MagneticCard>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Mission Card */}
          <MagneticCard className="glass-card compact-card">
            <div className="card-glow" />
            <div className="card-header-new">
              <Rocket className="header-icon" size={24} />
              <h2>Our Mission</h2>
            </div>
            <ul className="mission-list-compact">
              <li>Impart value-based quality education</li>
              <li>Nurture creativity and critical thinking</li>
              <li>Develop holistic personality for global mobility</li>
              <li>Make ACE a centre for excellence</li>
            </ul>
          </MagneticCard>

          {/* Quality Policy Card */}
          <MagneticCard className="glass-card compact-card">
            <div className="card-glow" />
            <div className="card-header-new">
              <GraduationCap className="header-icon" size={24} />
              <h2>Quality Policy</h2>
            </div>
            <p className="quality-text-compact">
              ACE is committed to develop skills, knowledge and right attitude among students
              to meet the expectations of Industry, Parents and Society with continual improvement
              through dedicated team work.
            </p>
          </MagneticCard>

          {/* Core Values Grid */}
          <div className="core-values-compact">
            <div className="card-header-new">
              <Sparkles className="header-icon" size={24} />
              <h2>Core Values</h2>
            </div>
            <div className="values-grid">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="value-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="pill-icon">{value.icon}</div>
                  <span>{value.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Affiliations Marquee */}
        <div className="affiliations-marquee">
          <div className="marquee-header">
            <ShieldCheck className="header-icon" size={24} />
            <h3>Accreditations & Affiliations</h3>
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...affiliations, ...affiliations, ...affiliations].map((text, idx) => (
                <div key={idx} className="marquee-item">
                  <img
                    src={`/images/a${(idx % 7) + 1}.png`}
                    alt="Logo"
                    className="marquee-logo"
                    onError={(e) => (e.currentTarget.src = "/images/logo.png")}
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hexagonal Core Values - Hidden for single page layout */}
        {/* <motion.div
          className="hexagon-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="section-title">
            <Sparkles className="title-icon" />
            Core Values
          </h2>
          <div className="hexagon-grid">
            {coreValues.map((value, idx) => (
              <HexagonCard
                key={idx}
                icon={value.icon}
                title={value.title}
                desc={value.desc}
                delay={1.4 + idx * 0.1}
              />
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
