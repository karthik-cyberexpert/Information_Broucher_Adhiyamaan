import React, { useState } from 'react';
import './DepartmentPage.css';

interface DepartmentPageProps {
  department: {
    name: string;
    icon: string;
    bg: string;
  };
  onBack: () => void;
}

const DepartmentPage: React.FC<DepartmentPageProps> = ({ department, onBack }) => {
  const [activeTab, setActiveTab] = useState('About');

  const menuItems = [
    { id: 'About', label: 'About' },
    { id: 'Infrastructure', label: 'Infrastructure' },
    { id: 'Career', label: 'Career Opportunities' },
    { id: 'Contact', label: 'Contact' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <div className="dept-content-section fadeIn">
            <h3>About {department.name}</h3>
            <p>
              The Department of {department.name} is dedicated to providing world-class education 
              and research opportunities. Our curriculum is designed to foster innovation, 
              critical thinking, and practical skills that prepare students for leadership roles 
              in their respective fields.
            </p>
            <p>
              Established with a vision to excel, the department boasts state-of-the-art laboratories, 
              experienced faculty, and a vibrant student community. We focus on holistic development, 
              encouraging both academic excellence and co-curricular participation.
            </p>
          </div>
        );
      case 'Infrastructure':
        return (
          <div className="dept-content-section fadeIn">
            <h3>Infrastructure</h3>
            <div className="infra-grid">
              <div className="infra-card">
                <span className="infra-icon">🖥️</span>
                <h4>Modern Labs</h4>
                <p>Equipped with the latest hardware and software tools.</p>
              </div>
              <div className="infra-card">
                <span className="infra-icon">📚</span>
                <h4>Department Library</h4>
                <p>Extensive collection of books, journals, and digital resources.</p>
              </div>
              <div className="infra-card">
                <span className="infra-icon">📡</span>
                <h4>Smart Classrooms</h4>
                <p>Wi-Fi enabled rooms with advanced teaching aids.</p>
              </div>
              <div className="infra-card">
                <span className="infra-icon">🔬</span>
                <h4>R&D Center</h4>
                <p>Dedicated space for research and innovation projects.</p>
              </div>
            </div>
          </div>
        );
      case 'Career':
        return (
          <div className="dept-content-section fadeIn">
            <h3>Career Opportunities</h3>
            <p>
              Graduates from the {department.name} department have excellent placement records. 
              Our students are recruited by top-tier companies and research organizations globally.
            </p>
            <ul className="career-list">
              <li>Software Development & Engineering</li>
              <li>Research & Data Analysis</li>
              <li>System Architecture</li>
              <li>Project Management</li>
              <li>Consultancy & Advisory Roles</li>
            </ul>
          </div>
        );
      case 'Contact':
        return (
          <div className="dept-content-section fadeIn">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><strong>📍 Location:</strong> Main Block, Adhiyamaan College of Engineering</p>
              <p><strong>📧 Email:</strong> hod.{department.name.toLowerCase().split(' ')[0]}@adhiyamaan.ac.in</p>
              <p><strong>📞 Phone:</strong> +91 4344 261001</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dept-page-container">
      {/* Background with overlay */}
      <div 
        className="dept-bg-image" 
        style={{ backgroundImage: `url(${department.bg})` }}
      />
      <div className="dept-overlay" />

      {/* Header */}
      <div className="dept-header">
        <button className="dept-back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1 className="dept-title">Department of {department.name}</h1>
      </div>

      <div className="dept-layout">
        {/* Sidebar Navigation */}
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
          <div className="content-glass-card">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
