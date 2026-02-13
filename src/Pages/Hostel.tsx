import { useState, useEffect } from 'react';
import { Bed, Utensils, MapPin, ChevronRight, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import './Hostel.css';

// DATA STRUCTURE
const hostelData = {
  living: {
    id: 'living',
    label: 'Living Spaces',
    icon: Bed,
    items: [
      { id: 'single', name: 'Single Room', desc: 'Private accommodation with dedicated study area.', img: '/images/hostel/h4.jpg' },
      { id: 'double', name: 'Double Sharing', desc: 'Spacious room for two with separate wardrobes.', img: '/images/hostel/h4.jpg' }, // Using same img if unique not available
      { id: 'triple', name: 'Triple Sharing', desc: 'Economic choice with ample ventilation.', img: '/images/hostel/h4.jpg' }
    ]
  },
  dining: {
    id: 'dining',
    label: 'Dining & Mess',
    icon: Utensils,
    items: [
      { id: 'breakfast', name: 'Breakfast Menu', desc: 'Idli, Dosa, Pongal, Vada with Chutney/Sambar.', img: '/images/hostel/h5.jpg' },
      { id: 'lunch', name: 'Lunch Spread', desc: 'Rice, Sambar, Rasam, Poriyal, Curd, Pickle.', img: '/images/hostel/h5.jpg' },
      { id: 'dinner', name: 'Dinner Special', desc: 'Chapati, Kurma, Variety Rice, Milk.', img: '/images/hostel/h5.jpg' }
    ]
  },
  facilities: {
    id: 'facilities',
    label: 'Facilities',
    icon: LayoutGrid,
    items: [
      { id: 'wifi', name: 'High Speed Wi-Fi', desc: '24/7 Connectivity across the campus.', img: '/images/hostel/h1.jpg' },
      { id: 'library', name: 'Study Hall', desc: 'Peaceful environment for academic focus.', img: '/images/hostel/h6.jpg' },
      { id: 'gym', name: 'Fitness Center', desc: 'Basic gym equipment for daily workouts.', img: '/images/hostel/h6.jpg' } // Placeholder img
    ]
  }
};

const Hostel = () => {
  const navigate = useNavigate();

  // State
  const [activeCategory, setActiveCategory] = useState<keyof typeof hostelData>('living');
  const [activeItem, setActiveItem] = useState(hostelData['living'].items[0]);

  // Update active item when category changes
  useEffect(() => {
    setActiveItem(hostelData[activeCategory].items[0]);
  }, [activeCategory]);

  const currentCategoryData = hostelData[activeCategory];

  return (
    <div className="hostel-tri-layout">
      {/* Background Layer */}
      <div className="hostel-bg-layer">
        <video autoPlay loop muted playsInline className="tri-video-bg">
          <source src="/media/hostel.mp4.mp4" type="video/mp4" />
        </video>
        <div className="tri-overlay" />
      </div>

      {/* Top Center Header */}
      <header className="hostel-main-header">
        <div className="header-glass-pill">
          <Bed className="brand-icon" size={28} />
          <h1>ACE HOSTEL</h1>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="tri-grid-container">

        {/* 1. LEFT PANEL: CATEGORIES */}
        <div className="panel-left">
          {/* Header moved out */}

          <nav className="category-nav">
            {Object.values(hostelData).map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id as keyof typeof hostelData)}
              >
                <cat.icon size={20} />
                <span>{cat.label}</span>
                {activeCategory === cat.id && <ChevronRight className="arrow-indicator" size={16} />}
              </button>
            ))}
          </nav>

          <div className="location-badge">
            <MapPin size={16} />
            <span>Adhiyamaan Campus</span>
          </div>
        </div>

        {/* 2. CENTER PANEL: ITEMS LIST */}
        <div className="panel-center">
          <div className="center-header">
            <h3>{currentCategoryData.label}</h3>
            <p>Select an option to view details</p>
          </div>

          <div className="items-list">
            <AnimatePresence mode='popLayout'>
              {currentCategoryData.items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`item-card ${activeItem.id === item.id ? 'active' : ''}`}
                  onClick={() => setActiveItem(item)}
                >
                  <div className="item-card-content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                  {activeItem.id === item.id && (
                    <motion.div layoutId="card-highlight" className="card-highlight-border" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* 3. RIGHT PANEL: PREVIEW */}
        <div className="panel-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              className="preview-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={activeItem.img} alt={activeItem.name} className="preview-image" />

              <div className="preview-overlay-info">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeItem.name}
                </motion.h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <NavigationDock
        onBack={() => navigate(-1)}
        onHome={() => navigate('/thank-you')}
        onForward={() => navigate(1)}
      />
    </div>
  );
};

export default Hostel;
