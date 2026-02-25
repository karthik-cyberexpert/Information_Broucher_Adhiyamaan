import { useState } from 'react';
import { Bed, MapPin, Utensils, X, ShieldCheck, Heart, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import { hostelData } from '../data/hostelData';
import './Hostel.css';

const Hostel = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    {
      id: 'boys',
      label: 'Boys Hostel',
      tag: "Men's Residence",
      icon: <Bed size={40} />,
      data: hostelData.boys
    },
    {
      id: 'girls',
      label: 'Girls Hostel',
      tag: "Women's Residence",
      icon: <Heart size={40} />,
      data: hostelData.girls
    },
    {
      id: 'dining',
      label: 'Dining & Mess',
      tag: "Nutritious Living",
      icon: <Utensils size={40} />,
      data: hostelData.dining
    }
  ];

  return (
    <div className="ace-page-layout hostel-3d-theme">
      {/* Background Layer */}
      <div className="ace-bg-layer">
        <video autoPlay loop muted playsInline className="ace-video-bg">
          <source src="/media/hostel.mp4.mp4" type="video/mp4" />
        </video>
        <div className="ace-overlay-interactive" />
      </div>

      {/* Header Pill */}
      <header className="ace-header-pill">
        <Bed size={24} color="#60a5fa" />
        <h1>ACE RESIDENTIAL LIFE</h1>
      </header>

      {/* Main Content */}
      <div className="ace-full-content">
        <div className="content-pane-centered">

          <div className="hostel-header-centered">
            <motion.h2
              className="main-title-alt"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hostel
            </motion.h2>
          </div>

          <div className="hostels-main-grid">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                className="hostel-3d-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="card-icon-wrapper">
                  {cat.icon}
                </div>
                <span className="btn-type-sub" style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
                  {cat.tag}
                </span>
                <h3 className="card-title-large">{cat.label}</h3>
                <p className="card-desc-muted">
                  Explore our facilities, room options, and world-class amenities designed for excellence.
                </p>
                <div className="card-action-tag">View Details</div>
              </motion.div>
            ))}
          </div>

          <div className="hostel-location-pill">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="location-link">
              <MapPin size={18} />
              <span>Adhiyamaan College Campus, Hosur - Tamil Nadu</span>
            </a>
          </div>

        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="hostel-modal-overlay" onClick={() => setSelectedCategory(null)}>
            <motion.div
              className="hostel-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedCategory(null)}>
                <X size={24} />
              </button>

              <div className="modal-header">
                <span className="btn-type-sub" style={{ color: '#60a5fa', marginBottom: '10px', display: 'block' }}>{selectedCategory.tag}</span>
                <h3>{selectedCategory.label}</h3>
              </div>

              <div className="modal-body">
                <div className="details-grid">
                  {selectedCategory.id === 'dining' ? (
                    <div className="menu-image-container">
                      <img
                        src="/images/hostel/dinnermenu.jpg"
                        alt="Weekly Dining Menu"
                        className="v6-menu-image"
                      />
                      <div className="image-zoom-hint">
                        <Info size={16} /> Scroll to view full menu details
                      </div>
                    </div>
                  ) : (
                    selectedCategory.data.features?.map((f: string) => (
                      <div key={f} className="detail-item-glass">
                        <ShieldCheck size={20} color="#60a5fa" />
                        <span>{f}</span>
                      </div>
                    ))
                  )}
                </div>

                {selectedCategory.id !== 'dining' && (
                  <div className="hostel-gallery-section">
                    <h4 className="gallery-title">Residence Gallery</h4>
                    <div className="gallery-grid">
                      {selectedCategory.data.items.slice(0, 4).map((it: any) => (
                        <div key={it.id} className="gallery-card">
                          <img src={it.img} alt={it.name} className="gallery-img" />
                          <div className="gallery-info">
                            <p>{it.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <NavigationDock
        onBack={() => navigate(-1)}
        onHome={() => navigate('/')}
        onForward={() => navigate(1)}
      />
    </div>
  );
};

export default Hostel;
