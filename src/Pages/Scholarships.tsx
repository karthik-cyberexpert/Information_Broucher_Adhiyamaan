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
    type: 'UG/PG',
    details: [
      'Applicable for SC/ST/SCA category students where annual income must 2.5 lakh',
      'If income is above 2.5 lakh then applicate for FG Scholarship',
      'Covers tuition fees and other Maintenance charges.',
      'Requires community certificate and income certificate.'
    ]
  },
  {
    name: 'BC/MBC Scholarship',
    type: 'UG/PG',
    details: [
      'Applicable for BC/MBC/DNC category students, under government quota.',
      'Annual parental income should be within 2.5 lakh below.',
      'must needed of Government Allotment copy.',
      'Submission of community and income certificates is mandatory.'
    ]
  },
  {
    name: 'ARMS Scholarship',
    type: 'UG',
    details: [
      'Implemented by the All India Council for Technical Education (AICTE).',
      'Provides financial assistance to students who have lost either or both parents, especially due to unforeseen circumstances.',
      'Applicable for students studying in AICTE-approved technical institutions (Degree/Diploma courses).',
      'Scholarship amount is provided annually to support tuition fees and other educational expenses.',
      'Aims to support vulnerable students and ensure continuation of technical education.'
    ]
  },
  {
    name: 'Prime Minister Scholarship',
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
    type: 'UG',
    details: [
      'Implemented by the All India Council for Technical Education (AICTE) to support girl students pursuing technical education.',
      'Available for family income must be 8 lakh below.',
      'Provides financial assistance per year to cover tuition fees and other educational expenses.',
      'Selection is based on 2 girl child in a family.',
      'Aims to promote higher education and empower girl students in technical fields.'
    ]
  },
  {
    name: 'First Graduation Scholar',
    type: 'UG',
    details: [
      'Introduced by the Government of Tamil Nadu to support students who are the first in their family to pursue higher education.',
      'Applicable to students whose parents or siblings have not completed any graduation degree.',
      'Eligible students receive tuition fee concessions, especially for professional courses like Engineering, Medicine, Law, and Agriculture.',
      'Students must obtain a First Graduate Certificate from the revenue department or through the Tamil Nadu e-Sevai portal to avail the benefits.',
      'Promotes educational equality and encourages students from non-graduate families to improve their social and economic status.'
    ]
  },
  {
    name: '7.5% Scholarship',
    type: 'Special',
    details: [
      'Provides 7.5% special reservation for students who studied from Class 6 to 12 in government schools.',
      'Applicable to professional courses like Engineering, Medicine, Agriculture, Law, etc.',
      'The Government of Tamil Nadu covers tuition fees and other educational expenses for selected students.',
      'Works as a horizontal reservation across all communities.',
      'Aims to improve higher education opportunities for government school students.'
    ]
  },
  {
    name: 'Pudumai Pen',
    type: 'UG',
    details: [
      'It is a government initiative launched as the Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme to encourage girls’ education.',
      'Eligible girl students who studied from Class 6 to Class 12 in government (and extended to government–aided) schools can benefit.',
      'Financial assistance of ₹1,000 per month is provided until the completion of higher education such as undergraduate, diploma, ITI, or other recognised courses.',
      'The amount is directly credited to the student’s bank account as support for continuing studies.',
      'The scheme aims to increase girls’ enrolment in higher education and reduce early school dropout or early marriage.'
    ]
  },
  {
    name: 'Tamil Pudalvan',
    type: 'UG',
    details: [
      'It is a monthly financial assistance scheme launched by the Government of Tamil Nadu to support students pursuing higher education.',
      'Eligible boys who studied from Class 6 to Class 12 in Tamil Nadu government or government-aided schools receive the benefit.',
      'Beneficiaries receive ₹1,000 per month directly into their bank account.',
      'The assistance continues until the student completes their first higher education course (like undergraduate, diploma, ITI, polytechnic).',
      'It aims to encourage government school students to continue higher studies and reduce dropouts.'
    ]
  },
  {
    name: 'Management Quota(Sports)',
    type: 'College',
    details: [
      'Sports management quotes emphasize the importance of teamwork and leadership in athletic success.',
      'Quotes inspire discipline, dedication, and commitment among student athletes and managers.',
      'They highlight strategic planning as key to organizing successful sports events.',
      'Quotes reinforce the value of resilience and overcoming challenges in sports.',
      'They encourage a positive competitive spirit and holistic development through sports'
    ]
  },
  {
    name: 'Muslim Women Aid',
    type: 'Minority',
    details: [
      'Provided under Minority Welfare schemes by the Government of Tamil Nadu.',
      'Available for Muslim girl students studying from school level to higher education.',
      'Financial assistance is given to support tuition fees and other educational expenses.',
      'Selection is mainly based on family income and eligibility criteria.',
      'The aim is to promote education and empower Muslim women through higher studies.'
    ]
  },
  {
    name: 'Post-Matric Minor',
    type: 'Minority',
    details: [
      'It is a Government of India scholarship for students belonging to notified minority communities (e.g., Muslim, Christian, Sikh, Buddhist, Jain, Parsi).',
      'The scholarship supports students studying from Class 11 and 12 up to undergraduate, postgraduate, technical, or professional courses.',
      'Applicants must have at least 50% marks in the previous qualifying examination.',
      'Family’s annual income must be below a specified limit (around ₹2 lakh) to be eligible.',
      'Financial assistance includes maintenance allowance and tuition fee support for the academic year, credited directly to the student’s account.'
    ]
  },
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

          {/* SIMPLIFIED CONTACT INFO */}
          <div className="scholarship-footer-contact">
            <div className="magnetic-card-mini">
              <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#93c5fd' }}>Scholarship Officer: Prabhu</p>
              <p style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>9943704553</p>
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
              </div>

              <div className="modal-body">
                {selectedScheme.details && (
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
