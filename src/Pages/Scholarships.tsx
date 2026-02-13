import { useState } from 'react';
import { Award, GraduationCap, ClipboardList, BookOpen, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavigationDock from '../components/NavigationDock';
import './Scholarships.css';

// DATA
const navItems = [
  { id: 'overview', label: 'Overview', icon: Award },
  { id: 'schemes', label: 'Schemes', icon: Star },
  { id: 'criteria', label: 'Eligibility', icon: ClipboardList },
  { id: 'process', label: 'Process', icon: BookOpen }
];

const schemes = [
  { name: 'Merit Scholarship', benefit: 'Fee Concession based on Cut-off', type: 'Academic' },
  { name: 'Government SC/ST', benefit: 'Full Tuition Waiver', type: 'Community' },
  { name: 'BC/MBC Support', benefit: 'Maintenance Allowance', type: 'Community' },
  { name: 'Minority Grant', benefit: 'Annual Aid ₹25,000', type: 'Social' },
  { name: '7.5% Category', benefit: 'Full Govt Quota Support', type: 'Special' },
  { name: 'Sports Excellence', benefit: '100% Waiver + Mess Free', type: 'Talent' },
  { name: 'First Graduate', benefit: 'Tuition Fee Exemption', type: 'Social' },
  { name: 'Research Grant', benefit: 'Project Funding up to ₹1L', type: 'Innovation' },
  { name: 'Single Parent Aid', benefit: 'Special Financial Support', type: 'Need-Based' }
];

const requirements = [
  'Consistently high academic performance (60%+)',
  'Income certificate for need-based grants',
  'Community certificate (if applicable)',
  'First Graduate certificate (if applicable)',
  'Valid attendance record',
  'Bonafide certificate from Institution',
  'Aadhar seeded Bank Account'
];

const steps = [
  { num: '01', title: 'Application', desc: 'Submit request via portal' },
  { num: '02', title: 'Verification', desc: 'Faculty reviews documents' },
  { num: '03', title: 'Approval', desc: 'Committee sanctions grant' },
  { num: '04', title: 'Disbursal', desc: 'Amount credited to account' }
];

const Scholarships = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="ace-page-layout">
      {/* Background */}
      <div className="ace-bg-layer">
        <video autoPlay loop muted playsInline className="ace-video-bg">
          <source src="/media/scholorship.mp4" type="video/mp4" />
        </video>
        <div className="ace-overlay" />
      </div>

      {/* Header */}
      <header className="ace-header-pill">
        <GraduationCap className="brand-icon" size={24} />
        <h1>ACE SCHOLARSHIPS</h1>
      </header>

      {/* Main Content Split */}
      <div className="ace-main-split">

        {/* Left: Navigation */}
        <div className="ace-left-nav">
          <div className="nav-intro">
            <h2>Financial Aid</h2>
            <p>Empowering excellence through comprehensive support systems.</p>
          </div>

          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-menu-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
                {activeTab === item.id && <motion.div layoutId="active-pill" className="active-bg" />}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Content */}
        <div className="ace-right-content">
          <AnimatePresence mode="wait">

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-pane"
              >
                <h3 className="section-title">Empowering Futures</h3>
                <p className="section-lead">
                  We believe financial constraints should never hinder academic potential.
                  Our comprehensive scholarship programs reward merit and support those in need.
                </p>

                <div className="overview-features">
                  <div className="feature-row">
                    <CheckCircle className="brand-icon" size={20} />
                    <span><strong>Merit-First Approach:</strong> Rewarding consistent academic performers.</span>
                  </div>
                  <div className="feature-row">
                    <CheckCircle className="brand-icon" size={20} />
                    <span><strong>Inclusive Support:</strong> Special aid for sports, arts, and innovation.</span>
                  </div>
                  <div className="feature-row">
                    <CheckCircle className="brand-icon" size={20} />
                    <span><strong>Hassle-Free Process:</strong> Fully digital application and disbursal.</span>
                  </div>
                </div>

                <div className="stats-grid">
                  <div className="stat-card">
                    <h4>2.5Cr+</h4>
                    <span>Annual Disbursement</span>
                  </div>
                  <div className="stat-card">
                    <h4>1500+</h4>
                    <span>Students Benefited</span>
                  </div>
                  <div className="stat-card">
                    <h4>100%</h4>
                    <span>Transparency</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCHEMES TAB */}
            {activeTab === 'schemes' && (
              <motion.div
                key="schemes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-pane"
              >
                <h3 className="section-title">Available Schemes</h3>
                <div className="schemes-grid">
                  {schemes.map((s, i) => (
                    <div key={i} className="scheme-card">
                      <div className="scheme-badge">{s.type}</div>
                      <h4>{s.name}</h4>
                      <div className="scheme-benefit">
                        <CheckCircle size={16} />
                        <span>{s.benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CRITERIA TAB */}
            {activeTab === 'criteria' && (
              <motion.div
                key="criteria"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-pane"
              >
                <h3 className="section-title">Eligibility Requirements</h3>
                <div className="checklist-container">
                  {requirements.map((req, i) => (
                    <motion.div
                      key={i}
                      className="check-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="check-icon"><CheckCircle size={20} /></div>
                      <span>{req}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PROCESS TAB */}
            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-pane"
              >
                <h3 className="section-title">Application Process</h3>
                <div className="process-timeline">
                  {steps.map((step, i) => (
                    <div key={i} className="process-step">
                      <div className="step-num">{step.num}</div>
                      <div className="step-info">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                      {i !== steps.length - 1 && <ArrowRight className="step-arrow" size={20} />}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

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

export default Scholarships;
