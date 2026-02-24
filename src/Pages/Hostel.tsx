import { useState, useEffect } from 'react';
import { Bed, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import { hostelData } from '../data/hostelData';
import './Hostel.css';

const Hostel = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState<keyof typeof hostelData>('boys');
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItems = hostelData[activeCategory].items;
  const activeItem = currentItems[activeIndex];

  // Reset to first item when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-cycle images every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currentItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeCategory, currentItems.length]);

  return (
    <div className="hostel-page">
      {/* Video Background */}
      <div className="hostel-bg">
        <video autoPlay loop muted playsInline className="hostel-video">
          <source src="/media/hostel.mp4" type="video/mp4" />
        </video>
        <div className="hostel-overlay" />
      </div>

      {/* Header */}
      <header className="hostel-header">
        <div className="hostel-header-pill">
          <Bed size={26} />
          <h1>ACE HOSTEL</h1>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="hostel-tabs">
        {Object.values(hostelData).map((cat) => (
          <button
            key={cat.id}
            className={`hostel-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id as keyof typeof hostelData)}
          >
            <cat.icon size={18} />
            <span>{cat.label}</span>
            {activeCategory === cat.id && (
              <motion.div layoutId="tab-indicator" className="tab-indicator" />
            )}
          </button>
        ))}
      </div>

      {/* Hero Showcase */}
      <div className="hostel-showcase">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            className="showcase-image-wrapper"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img src={activeItem.img} alt={activeItem.name} className="showcase-image" />

            {/* Gradient overlay with text */}
            <div className="showcase-info">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {activeItem.name}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                {activeItem.desc}
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              className="showcase-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 4, ease: 'linear' }}
              key={`progress-${activeItem.id}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      <div className="hostel-thumbnails">
        {currentItems.map((item, idx) => (
          <motion.button
            key={item.id}
            className={`thumb-btn ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={item.img} alt={item.name} />
            <span className="thumb-label">{item.name}</span>
            {idx === activeIndex && (
              <motion.div layoutId="thumb-ring" className="thumb-ring" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Location Footer */}
      <div className="hostel-location">
        <MapPin size={14} />
        <span>Adhiyamaan Campus, Hosur</span>
      </div>

      <NavigationDock
        onBack={() => navigate(-1)}
        onHome={() => navigate('/')}
        onForward={() => navigate(1)}
      />
    </div>
  );
};

export default Hostel;
