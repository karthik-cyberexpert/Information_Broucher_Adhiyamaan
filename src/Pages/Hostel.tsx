import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Bed, Utensils, Lightbulb, Quote } from 'lucide-react';
import "./Hostel.css";

const sections = [
  {
    id: 'wifi',
    title: 'High-Speed Internet',
    icon: <Wifi size={20} />,
    label: 'Wi-Fi',
    image: '/images/hostel/h1.jpg',
    description: 'Stay connected with 24/7 high-speed fiber internet covering every corner of the hostel premise. Perfect for research and leisure.',
    stats: ['100 Mbps', 'Dedicated Bandwidth', 'Secure Login']
  },
  {
    id: 'rooms',
    title: 'Premium Accommodations',
    icon: <Bed size={20} />,
    label: 'Rooms',
    image: '/images/hostel/h4.jpg',
    description: 'Choose from a variety of spacious, well-ventilated rooms designed for comfort. Available in Single, Double, and Triple occupancy.',
    stats: ['Daily Cleaning', 'Ergonomic Desk', 'Private Balcony']
  },
  {
    id: 'dining',
    title: 'Nutritious Dining',
    icon: <Utensils size={20} />,
    label: 'Dining',
    image: '/images/hostel/h5.jpg',
    description: 'Enjoy healthy and hygienic multi-cuisine meals. Our mess menu is designed to provide optimal nutrition for hard-working students.',
    stats: ['Pure Veg & Non-Veg', 'RO Drinking Water', 'Spacious Hall']
  },
  {
    id: 'support',
    title: 'Academic Support',
    icon: <Lightbulb size={20} />,
    label: 'Support',
    image: '/images/hostel/h6.jpg',
    description: 'Quiet study zones, in-house library, and academic peer-support groups to help you excel in your professional journey.',
    stats: ['24/7 Study Room', 'Reference Library', 'Peer Groups']
  }
];

const Hostel = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  const activeSection = sections.find(s => s.id === activeTab) || sections[0];

  // Animation Variants for Immersive Experience
  const textVariants = {
    initial: { y: 100, opacity: 0, filter: 'blur(20px)' },
    animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
    exit: { y: -100, opacity: 0, filter: 'blur(20px)' }
  };

  const imageVariants = {
    initial: { y: -100, opacity: 0, scale: 1.1 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 100, opacity: 0, scale: 1.1 }
  };

  const menuVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20, delay: 0.5 }
    }
  };

  return (
    <div className="ace-hostel-immersive">
      {/* Cinematic Video Background */}
      <div className="immersive-video-wrap">
        <video autoPlay loop muted playsInline className="full-bg-video">
          <source src="/media/hostel.mp4.mp4" type="video/mp4" />
        </video>
        <div className="immersive-overlay" />
      </div>

      {/* Background Macro-Typography */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection.label}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.05, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="macro-bg-text"
        >
          {activeSection.label}
        </motion.div>
      </AnimatePresence>

      <header className="immersive-header">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="brand-floating"
        >
          <h1 className="brand-title">ACE <span className="glow-text">HOSTEL</span></h1>
        </motion.div>
      </header>

      {/* Main Content: Floating elements with Opposite Motion */}
      <main className="immersive-content-canvas">
        <AnimatePresence mode="wait">
          <div key={activeTab} className="immersive-slide-wrap">

            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="immersive-text-box"
            >
              <h2 className="display-title">{activeSection.title}</h2>
              <p className="display-desc">{activeSection.description}</p>

              <div className="display-stats-row">
                {activeSection.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="floating-stat-card"
                  >
                    {stat}
                  </motion.div>
                ))}
              </div>

              <div className="immersive-quote">
                <Quote size={24} className="quote-icon-neon" />
                <p>"The {activeSection.label.toLowerCase()} experience here redefined my student life."</p>
              </div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="immersive-visual-wrap"
            >
              <div className="floating-image-frame">
                <img src={activeSection.image} alt={activeSection.title} className="immersive-img" />
                <div className="frame-glow" />
              </div>
            </motion.div>

          </div>
        </AnimatePresence>
      </main>

      {/* Floating Macro-Navigation at Bottom */}
      <motion.footer
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        className="floating-nav-container"
      >
        <div className="navbar-blur-box">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`nav-card-btn ${activeTab === section.id ? 'active' : ''}`}
            >
              <div className="nav-card-icon">{section.icon}</div>
              <span className="nav-card-label">{section.label}</span>
              {activeTab === section.id && (
                <motion.div layoutId="nav-active-glow" className="nav-active-glow" />
              )}
            </button>
          ))}
        </div>
      </motion.footer>

      {/* Atmospheric Particles Overlay */}
      <div className="ambient-particles" />
    </div>
  );
};

export default Hostel;
