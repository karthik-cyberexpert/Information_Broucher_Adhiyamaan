import { useState } from 'react';
import { Award, GraduationCap, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import './Scholarships.css';

// DATA
const schemes = [
  {
    name: 'SC/ST Scholarship',
    benefit: 'Full Tuition Fee Waiver',
    type: 'UG/PG',
    details: [
      'Applicable for SC/ST/SCA category students.',
      'Income limit criteria as per government norms.',
      'Covers tuition fees and other academic expenses.',
      'Requires community certificate and income certificate.'
    ]
  },
  {
    name: 'BC/MBC Scholarship',
    benefit: 'Tuition Fee Support',
    type: 'UG/PG',
    details: [
      'Applicable for BC/MBC/DNC category students.',
      'Annual parental income should be within the prescribed limit.',
      'Provides scholarship for tuition fees and maintenance allowance.',
      'Submission of community and income certificates is mandatory.'
    ]
  },
  { name: 'ARMS Scholarship', benefit: 'Government Financial Assistance', type: 'UG' },
  {
    name: 'Prime Minister Scholarship',
    benefit: 'Central Govt Aid for Students',
    type: 'UG/PG',
    details: [
      'Implemented by the Government of India for dependents and widows of Ex-Servicemen and serving defence personnel.',
      'Provides financial support for professional degree courses like Engineering, Medicine, MBA, MCA, etc.',
      'Scholarship amount is given annually and credited directly to the student’s bank account.',
      'Application is submitted online through the Kendriya Sainik Board portal.',
      'Aims to support higher education of defence personnel families.'
    ]
  },
  {
    name: 'Pragathi Scholarship Scheme',
    benefit: 'Support for Girl Students',
    type: 'UG',
    details: [
      'Implemented by the All India Council for Technical Education (AICTE) to support girl students pursuing technical education.',
      'Available for girls admitted to diploma or degree courses in AICTE-approved institutions.',
      'Provides financial assistance per year to cover tuition fees and other educational expenses.',
      'Selection is based on family income criteria and merit.',
      'Aims to promote higher education and empower girl students in technical fields.'
    ]
  },
  {
    name: 'First Graduation Scholar',
    benefit: 'Aid for First-Gen Graduates',
    type: 'UG',
    details: [
      'Introduced by the Government of Tamil Nadu to support students who are the first in their family to pursue higher education.',
      'Applicable to students whose parents or siblings have not completed any graduation degree.',
      'Eligible students receive tuition fee concessions, especially for professional courses like Engineering, Medicine, Law, and Agriculture.',
      'Students must obtain a First Graduate Certificate from the revenue department or through the Tamil Nadu e-Sevai portal to avail the benefits.',
      'Promotes educational equality and encourages students from non-graduate families to improve their social and economic status.'
    ]
  },
  { name: '7.5% Scholarship', benefit: 'Govt School Quota Support', type: 'Special' },
  { name: 'Pudumai Pen', benefit: 'TN Govt Aid for Women', type: 'UG' },
  { name: 'Tamil Pudalvan', benefit: 'TN Govt Aid for Men', type: 'UG' },
  { name: 'CM Merit Scholarship', benefit: 'Academic Excellence Reward', type: 'Special' },
  { name: 'Muslim Women Aid', benefit: 'Minority Welfare Support', type: 'Minority' },
  { name: 'Post-Matric Minor', benefit: 'Community Specific Grants', type: 'Minority' },
];

const Scholarships = () => {
  const navigate = useNavigate();
  const [selectedScheme, setSelectedScheme] = useState<any>(null);

  return (
    <div className="ace-page-layout scholarship-3d-theme">
      {/* Background */}
      <div className="ace-bg-layer">
        <video autoPlay loop muted playsInline className="ace-video-bg">
          <source src="/media/scholorship.mp4" type="video/mp4" />
        </video>
        <div className="ace-overlay-interactive" />
      </div>

      {/* Header */}
      <header className="ace-header-pill">
        <GraduationCap className="brand-icon" size={24} />
        <h1>ACE SCHOLARSHIPS</h1>
      </header>

      {/* Simplified Main Content */}
      <div className="ace-full-content">
        <div className="content-pane-centered">

          <div className="schemes-header-centered">
            <h2 className="main-title-alt">Financial Aid Schemes</h2>
            <p className="section-subtitle">Empowering excellence through our comprehensive scholarship systems.</p>
          </div>

          <div className="schemes-grid-container">
            <div className="schemes-immersive-grid">
              {schemes.map((scheme, i) => (
                <motion.button
                  key={i}
                  className="scheme-interactive-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedScheme(scheme)}
                >
                  <div className="btn-icon-wrapper">
                    <Award size={48} className="btn-icon-main" />
                  </div>
                  <div className="btn-content">
                    <span className="btn-name-large">{scheme.name}</span>
                    <div className="btn-type-sub">{scheme.type}</div>
                  </div>
                  {scheme.details && (
                    <div className="btn-info-tag">Click for Info</div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CONTACT INFO AT BOTTOM */}
          <div className="scholarship-footer-contact">
            <div className="magnetic-card-mini">
              <h4>Questions? Reach out to our Scholarship Liaison</h4>
              <div className="contact-grid-mini">
                <p>Officer: Prabhu</p>
                <p>scholarships@adhiyamaan.ac.in</p>
                <p>9943704553</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SCHEME DETAIL MODAL */}
      <AnimatePresence>
        {selectedScheme && (
          <div className="scheme-modal-overlay" onClick={() => setSelectedScheme(null)}>
            <motion.div
              className="scheme-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedScheme(null)}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="modal-type-badge">{selectedScheme.type}</div>
                <h3>{selectedScheme.name}</h3>
                <p className="modal-benefit-text">{selectedScheme.benefit}</p>
              </div>

              <div className="modal-body">
                {selectedScheme.details ? (
                  <div className="details-list">
                    {selectedScheme.details.map((point: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className="detail-point"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ChevronRight size={16} className="point-icon" />
                        <p>{point}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="no-details-msg">
                    <p>Contact our Scholarship Officer for more information about this program.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <NavigationDock
        onBack={() => navigate(-1)}
        onHome={() => navigate('/thank-you')}
        onForward={() => navigate(1)}
      />
    </div>
  );
};

export default Scholarships;
