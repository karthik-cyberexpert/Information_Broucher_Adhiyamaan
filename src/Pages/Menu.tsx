import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import collegeLogo from '../assets/college-logo.png';
import DepartmentPage from '../DepartmentPage';
import '../App.css'; 

const Menu = () => {
  const navigate = useNavigate();

  // Navigation States for Sub-menus
  const [showBEDetails, setShowBEDetails] = useState(false);
  const [showBTechDetails, setShowBTechDetails] = useState(false);
  const [showMEDetails, setShowMEDetails] = useState(false);
  const [showPhDDetails, setShowPhDDetails] = useState(false);
  
  // Selected Department State for Detailed View
  const [selectedDepartment, setSelectedDepartment] = useState<{name: string, icon: string, bg: string} | null>(null);

  // Navigation Items Data
  const navItems = [
    { title: 'B.E', id: 'be', bg: '/images/bebaack.jpg' },
    { title: 'B.Tech', id: 'btech', bg: '/images/tech_bg.png' },
    { title: 'B.Arch', id: 'barch', bg: '/images/civilback.jpg' }, // No dedicated page yet
    { title: 'MBA', id: 'mba', bg: '/images/mba.jpg' }, // No dedicated page yet
    { title: 'MCA', id: 'mca', bg: '/images/mca.jpg' }, // No dedicated page yet
    { title: 'ABOUT', id: 'about', className: 'nav-item-large', bg: '/images/aboutcollege.jpg' }, // Central item
    { title: 'M.E', id: 'me', bg: '/images/me.jpg' },
    { title: 'P.H.D', id: 'phd', bg: '/images/college.jpeg' },
    { title: 'Placement', id: 'placement', bg: '/images/placement.jpg' },
    { title: 'Sports', id: 'sports', bg: '/images/sports.jpg' },
    { title: 'Hostel', id: 'hostel', bg: '/images/hostel.jpg' },
    { title: 'Transport', id: 'transport', bg: '/images/transport.jpg' },
    { title: 'Scholarship', id: 'scholarship', bg: '/images/scholarship.jpg' },
  ];

  // B.E Courses Data
  const beCourses = [
    { name: 'Aeronautical Engineering', icon: '✈️', bg: '/images/aeroback.jpg' },
    { name: 'Biomedical Engineering', icon: '🧬', bg: '/images/bioback.jpg' },
    { name: 'Civil Engineering', icon: '🏗️', bg: '/images/civilback.jpg' },
    { name: 'Computer Science & Engineering', icon: '💻', bg: '/images/computerback.jpg' },
    { name: 'CSE (Cyber Security)', icon: '🔐', bg: '/images/computerback.jpg' },
    { name: 'CSE (AI & ML)', icon: '🤖', bg: '/images/be/AIML-bg.jpg.jpeg' },
    { name: 'Electronics & Communication', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg' },
    { name: 'Electrical & Electronics', icon: '⚡', bg: '/images/be/eee1.jpg.jpeg' },
    { name: 'Mechanical Engineering', icon: '⚙️', bg: '/images/me.jpg' },
  ];

  // B.Tech Courses Data
  const bTechCourses = [
    { name: 'Artificial Intelligence & Data Science', icon: '🧠', bg: '/images/btech/AIDS_BG.jpg' },
    { name: 'Biotechnology', icon: '🔬', bg: '/images/btech/biobg.jpg' },
    { name: 'Chemical Engineering', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
    { name: 'Computer Science and Business Systems', icon: '💼', bg: '/images/btech/csbsbg.jpg' },
    { name: 'Information Technology', icon: '🖥️', bg: '/images/btech/ITbg.jpg' },
  ];

  // M.E Courses Data
  const meCourses = [
    { name: 'M.E. Communication System Engineering', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg' },
    { name: 'M.E. Computer Science Engineering', icon: '💻', bg: '/images/computerback.jpg' },
    { name: 'M.E. Engineering Design', icon: '📐', bg: '/images/me.jpg' },
    { name: 'M.E. Power System Engineering', icon: '⚡', bg: '/images/be/eee1.jpg.jpeg' },
    { name: 'M.E. Structural Engineering', icon: '🏗️', bg: '/images/civilback.jpg' },
  ];

  // Ph.D Courses Data
  // Ph.D Courses Data
  const phdCourses = [
    { name: 'Ph.D. Computer Science', icon: '💻', bg: '/images/computerback.jpg' },
    { name: 'Ph.D. ECE', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg' },
    { name: 'Ph.D. Mechanical Engineering', icon: '⚙️', bg: '/images/me.jpg' },
    { name: 'Ph.D. Chemistry', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
    { name: 'Ph.D. Physics', icon: '⚛️', bg: '/images/be/eee1.jpg.jpeg' },
  ];

  // Single Department Data (No Sub-menu)
  const bArchData = { name: 'Bachelor of Architecture', icon: '🏛️', bg: '/images/civilback.jpg' };
  const mbaData = { name: 'Master of Business Administration', icon: '📊', bg: '/images/mba.jpg' };
  const mcaData = { name: 'Master of Computer Applications', icon: '💻', bg: '/images/mca.jpg' };

  const handleNavClick = (id: string) => {
    // Check if it's a page navigation
    if (['placement', 'scholarship', 'sports', 'transport'].includes(id)) {
      navigate(`/${id}`);
      return;
    }

    // Handle Sub-menus
    if (id === 'be') setShowBEDetails(true);
    else if (id === 'btech') setShowBTechDetails(true);
    else if (id === 'me') setShowMEDetails(true);
    else if (id === 'phd') setShowPhDDetails(true);

    // Handle Single Departments
    else if (id === 'barch') handleCourseClick(bArchData);
    else if (id === 'mba') handleCourseClick(mbaData);
    else if (id === 'mca') handleCourseClick(mcaData);
    
    console.log(`Clicked ${id}`);
  };

  const handleBackToNav = () => {
    setShowBEDetails(false);
    setShowBTechDetails(false);
    setShowMEDetails(false);
    setShowPhDDetails(false);
  };

  const handleCourseClick = (course: {name: string, icon: string, bg: string}) => {
    setSelectedDepartment(course);
  };

  const handleBackFromDept = () => {
    setSelectedDepartment(null);
  };

  // View States
  const isDepartmentView = !!selectedDepartment;
  const isMainNav = !showBEDetails && !showBTechDetails && !showMEDetails && !showPhDDetails && !isDepartmentView;
  const isBEDetails = showBEDetails && !isDepartmentView;
  const isBTechDetails = showBTechDetails && !isDepartmentView;
  const isMEDetails = showMEDetails && !isDepartmentView;
  const isPhDDetails = showPhDDetails && !isDepartmentView;

  if (isDepartmentView && selectedDepartment) {
    return (
      <DepartmentPage 
        department={selectedDepartment} 
        onBack={handleBackFromDept} 
      />
    );
  }

  return (
    <>
      {/* Header - Always visible in Menu unless inside Department Page */}
      <header className="header">
        <div className="logo-container">
          <img src={collegeLogo} className="college-logo" alt="College Logo" />
          <h1 className="college-name">Adhiyamaan College of Engineering</h1>
        </div>
      </header>

      <main className={`main-content ${
        isMainNav ? 'inner-page-bg' : 
        isBEDetails ? 'be-page-bg' : 
        isBTechDetails ? 'btech-page-bg' : 
        isMEDetails ? 'me-page-bg' : 
        isPhDDetails ? 'phd-page-bg' : ''
      }`}>
        
        {isMainNav && (
          <div className="nav-grid-container">
            <div className="nav-grid">
              {navItems.map((item) => (
                <button 
                  key={item.id} 
                  className={`nav-item ${item.className || ''}`}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${item.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* B.E Grid */}
        {isBEDetails && (
          <div className="be-container">
            <h2 className="be-title">BE Courses</h2>
            <div className="be-grid">
              {beCourses.map((course, index) => (
                <div 
                  key={index} 
                  className="be-item"
                  onClick={() => handleCourseClick(course)}
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <span className="be-icon">{course.icon}</span>
                  <span className="be-name">{course.name}</span>
                </div>
              ))}
            </div>
            <button className="menu-back-btn" onClick={handleBackToNav}>
              MENU
            </button>
          </div>
        )}

        {/* B.Tech Grid */}
        {isBTechDetails && (
          <div className="be-container">
            <h2 className="be-title">B.Tech Courses</h2>
            <div className="btech-grid"> 
              {bTechCourses.map((course, index) => (
                <div 
                  key={index} 
                  className="be-item"
                  onClick={() => handleCourseClick(course)}
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <span className="be-icon">{course.icon}</span>
                  <span className="be-name">{course.name}</span>
                </div>
              ))}
            </div>
            <button className="menu-back-btn" onClick={handleBackToNav}>
              MENU
            </button>
          </div>
        )}

        {/* M.E Grid */}
        {isMEDetails && (
          <div className="be-container">
            <h2 className="be-title">M.E Courses</h2>
            <div className="btech-grid"> 
              {meCourses.map((course, index) => (
                <div 
                  key={index} 
                  className="be-item"
                  onClick={() => handleCourseClick(course)}
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <span className="be-icon">{course.icon}</span>
                  <span className="be-name">{course.name}</span>
                </div>
              ))}
            </div>
            <button className="menu-back-btn" onClick={handleBackToNav}>
              MENU
            </button>
          </div>
        )}

        {/* Ph.D Grid */}
        {isPhDDetails && (
          <div className="be-container">
             <h2 className="be-title">Ph.D. Programs</h2>
             <div className="btech-grid"> 
               {phdCourses.map((course, index) => (
                 <div 
                   key={index} 
                   className="be-item"
                   onClick={() => handleCourseClick(course)}
                   style={{ 
                     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     color: 'white',
                     textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                   }}
                 >
                   <span className="be-icon">{course.icon}</span>
                   <span className="be-name">{course.name}</span>
                 </div>
               ))}
             </div>
             <button className="menu-back-btn" onClick={handleBackToNav}>
               MENU
             </button>
           </div>
        )}

      </main>
    </>
  );
};

export default Menu;
