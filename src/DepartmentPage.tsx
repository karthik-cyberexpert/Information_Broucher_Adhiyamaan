import { useState, useEffect } from 'react';
import './DepartmentPage.css';
import { getDepartmentContent } from './data/departments';

interface DepartmentPageProps {
  department: {
    name: string;
    icon: string;
    bg: string;
    video?: string;
  };
  onBack: () => void;
}

const DepartmentPage: React.FC<DepartmentPageProps> = ({ department, onBack }) => {
  const [activeTab, setActiveTab] = useState('About');
  const [fallingIcons, setFallingIcons] = useState<Array<{ id: number, icon: string, style: React.CSSProperties }>>([]);

  // ... (keep getDeptIcons and useEffect exactly as is - no change needed there)

  // Icon Mapping
  const getDeptIcons = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('aero')) return ['✈️', '🚁', '🛸', '🪂', '☁️', '🦅'];
    if (n.includes('bio') || n.includes('medical')) return ['🧬', '🩺', '🏥', '🔬', '💊', '🦠'];
    if (n.includes('civil') || n.includes('arch') || n.includes('structural')) return ['🏗️', '🧱', '🏠', '🌉', '👷', '📐'];
    if (n.includes('computer') || n.includes('cse') || n.includes('it') || n.includes('mca') || n.includes('software')) return ['💻', '🖥️', '⌨️', '🖱️', '💾', '🌐', '👾'];
    if (n.includes('electronic') || n.includes('communication') || n.includes('ece')) return ['📡', '📶', '📻', '📱', '🔋', '🔌'];
    if (n.includes('electrical') || n.includes('eee') || n.includes('power')) return ['⚡', '💡', '🔌', '🔋', '🏭', '🔦'];
    if (n.includes('mech') || n.includes('production') || n.includes('design')) return ['⚙️', '🔧', '🔩', '🛠️', '🚗', '🏍️'];
    if (n.includes('artificial') || n.includes('ai') || n.includes('data')) return ['🧠', '🤖', '📊', '📈', '🔗', '👁️'];
    if (n.includes('chem')) return ['🧪', '⚗️', '⚛️', '🔥', '💧', '☣️'];
    if (n.includes('mba') || n.includes('business')) return ['📊', '💼', '💰', '📈', '🤝', '👔'];
    if (n.includes('phys')) return ['⚛️', '🔭', '🌌', '🍎', '📏', '⚡'];
    return ['🎓', '📚', '🏫', '📝', '✨', '🌟']; // Default
  };

  useEffect(() => {
    const icons = getDeptIcons(department.name);
    const newIcons = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      icon: icons[i % icons.length],
      style: {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 0.5}s`, // Start quickly
        animationDuration: `${2 + Math.random() * 2}s`, // 2-4s throw
        fontSize: `${3 + Math.random() * 2}rem`, // Bigger icons (3-5rem)
        zIndex: 20
      } as React.CSSProperties
    }));
    setFallingIcons(newIcons);
  }, [department.name]);


  // Static Data for Supervisor/Approval Images
  const isPhD = department.name.startsWith('Ph.d.');

  const menuItems = isPhD
    ? [
      { id: 'About', label: 'About' },
      { id: 'ApprovalCopy', label: 'Approval Copy' },
      { id: 'Supervisor', label: 'Supervisor' },
      { id: 'Contact', label: 'Contact' },
    ]
    : [
      { id: 'About', label: 'About' },
      { id: 'Infrastructure', label: 'Infrastructure' },
      { id: 'Career', label: 'Career Opportunities' },
      { id: 'Contact', label: 'Contact' },
    ];

  // Helper to render specific content based on ID
  const renderSectionContent = (id: string) => {
    const content = getDepartmentContent(department.name);
    const images = content.phd || {};

    switch (id) {
      case 'About':
        return (
          <>
            <h3>About</h3>
            {content.about}
          </>
        );
      case 'Infrastructure':
        const infraItems = content.infrastructure?.items || [];
        return (
          <>
            <h3>Infrastructure</h3>
            {content.infrastructure?.description && <p>{content.infrastructure.description}</p>}
            {infraItems.length > 0 ? (
              <div className="infra-scroll-window">
                <div className="infra-scroll-track">
                  <div className="infra-grid">
                    {infraItems.map((item, idx) => (
                      <div key={idx} className="infra-card full-width">
                        <div className="infra-content-left">
                          <span className="infra-icon">{item.icon}</span>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                        <div className="infra-image-right">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="infra-grid">
                    {infraItems.map((item, idx) => (
                      <div key={`loop-${idx}`} className="infra-card full-width">
                        <div className="infra-content-left">
                          <span className="infra-icon">{item.icon}</span>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                        <div className="infra-image-right">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p>Infrastructure details are being updated for this department.</p>
            )}
          </>
        );
      case 'Career':
        return (
          <>
            <h3>Career Opportunities</h3>
            {content.career?.description && <p>{content.career.description}</p>}
            {content.career?.roles && content.career.roles.length > 0 ? (
              <>
                <h4>Career Roles</h4>
                <div className="infra-scroll-window" style={{ height: '300px' }}>
                  <div className="infra-scroll-track">
                    <ul className="career-list">
                      {content.career.roles.map((role, idx) => (
                        <li key={idx}>{role}</li>
                      ))}
                    </ul>
                    <ul className="career-list">
                      {content.career.roles.map((role, idx) => (
                        <li key={`loop-${idx}`}>{role}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <p>Career opportunity details are being updated for this department.</p>
            )}
            {content.career?.globalRelevance && (
              <div className="global-relevance">
                <h4>Global Relevance</h4>
                <p>{content.career.globalRelevance}</p>
              </div>
            )}
          </>
        );
      case 'Contact':
        const contact = content.contact;
        return (
          <>
            <h3>Contact Us</h3>
            <div className="contact-info">
              {(contact?.hod || contact?.["HoD In-Charge"]) && (
                <div className="hod-details" style={{ marginBottom: '1rem' }}>
                  <p>
                    <strong>👤 {contact["HoD In-Charge"] ? "HoD In-Charge" : "Head of Department"}:</strong> {contact["HoD In-Charge"] || contact.hod}
                  </p>
                  {contact.designation && <p style={{ marginLeft: '1.5rem', opacity: 0.9 }}><em>{contact.designation}</em></p>}
                </div>
              )}
              <p><strong>📍 Location:</strong> {contact?.location || 'Main Block, Adhiyamaan College of Engineering'}</p>
              <p><strong>📧 Email:</strong> {contact?.email || `hod.${department.name.toLowerCase().split(' ')[0]}@adhiyamaan.ac.in`}</p>
              <p><strong>📞 Phone:</strong> {contact?.phone || '+91 4344 261001'}</p>
            </div>
          </>
        );
      case 'Supervisor':
        return (
          <>
            <h3>Supervisor</h3>
            <div className="dept-section-placeholder">
              {images.supervisor ? (
                typeof images.supervisor === 'string' ? (
                  images.supervisor.toLowerCase().endsWith('.pdf') ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <embed
                        src={images.supervisor}
                        type="application/pdf"
                        width="100%"
                        height="600px"
                        style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                      />
                      <a href={images.supervisor} target="_blank" rel="noopener noreferrer" className="dept-back-btn" style={{ textAlign: 'center', width: 'fit-content' }}>
                        📄 Open PDF in New Tab
                      </a>
                    </div>
                  ) : (
                    <img
                      src={images.supervisor}
                      alt={`${department.name} Supervisor`}
                      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                  )
                ) : (
                  <div className="custom-phd-content">
                    {images.supervisor}
                  </div>
                )
              ) : (
                <p>Details about the Supervisor will be available here.</p>
              )}
            </div>
          </>
        );
      case 'ApprovalCopy':
        return (
          <>
            <h3>Approval Copy</h3>
            <div className="dept-section-placeholder">
              {images.approval ? (
                typeof images.approval === 'string' ? (
                  images.approval.toLowerCase().endsWith('.pdf') ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <embed
                        src={images.approval}
                        type="application/pdf"
                        width="100%"
                        height="600px"
                        style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                      />
                      <a href={images.approval} target="_blank" rel="noopener noreferrer" className="dept-back-btn" style={{ textAlign: 'center', width: 'fit-content' }}>
                        📄 Open PDF in New Tab
                      </a>
                    </div>
                  ) : (
                    <img
                      src={images.approval}
                      alt={`${department.name} Approval Copy`}
                      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                  )
                ) : (
                  <div className="custom-phd-content">
                    {images.approval}
                  </div>
                )
              ) : (
                <p>The Approval Copy documents will be displayed here.</p>
              )}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dept-page-container">
      {/* Background: Video or Image */}
      {department.video ? (
        <video
          className="dept-video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={department.video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="dept-bg-image"
          style={{ backgroundImage: `url(${department.bg})` }}
        />
      )}

      <div className="dept-overlay" />

      {/* Falling Icons Container */}
      <div className="falling-icons-container">
        {fallingIcons.map((icon) => (
          <div
            key={icon.id}
            className="falling-icon"
            style={icon.style}
          >
            {icon.icon}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="dept-header">
        <button className="dept-back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1 className="dept-title">{department.name.startsWith('M.E.') || department.name.startsWith('ME ') || department.name.startsWith('Ph.d.') ? department.name : `Department of ${department.name}`}</h1>
      </div>

      <div className="dept-layout">
        {/* Sidebar Navigation - Visible on Desktop */}
        <div className="dept-sidebar">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`dept-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="dept-nav-arrow">{activeTab === item.id ? '▶' : ''}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="dept-main-content">
          <div
            className="content-glass-card"
            style={{
              '--dept-bg': department.video ? 'none' : `url(${department.bg})`,
              // If video, we might want a slight transparent dark bg instead of image repetition
              backgroundColor: department.video ? 'rgba(15, 23, 42, 0.7)' : undefined
            } as React.CSSProperties}
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`dept-content-section ${activeTab === item.id ? 'desktop-active' : 'desktop-hidden'}`}
              >
                {renderSectionContent(item.id)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
