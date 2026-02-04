import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import collegeLogo from '../assets/college-logo.png';
import DepartmentPage from '../DepartmentPage';
// @ts-ignore
import droneAnimation from '../../public/assets/drone_fly.json';
import '../App.css'; 

interface DroneState {
  active: boolean;
  buttonRect: DOMRect | null;
  phase: 'descend' | 'grab' | 'ascend' | null;
  pendingAction: (() => void) | null;
}

const Menu = () => {
  const navigate = useNavigate();

  // Navigation States for Sub-menus
  const [showBEDetails, setShowBEDetails] = useState(false);
  const [showBTechDetails, setShowBTechDetails] = useState(false);
  const [showMEDetails, setShowMEDetails] = useState(false);
  const [showPhDDetails, setShowPhDDetails] = useState(false);
  
  // Selected Department State for Detailed View
  const [selectedDepartment, setSelectedDepartment] = useState<{name: string, icon: string, bg: string} | null>(null);

  // Drone Animation State
  const [droneState, setDroneState] = useState<DroneState>({
    active: false,
    buttonRect: null,
    phase: null,
    pendingAction: null
  });
  const [flyingButtonStyle, setFlyingButtonStyle] = useState<React.CSSProperties>({});
  const [flyingButtonText, setFlyingButtonText] = useState('');
  const [flyingButtonBg, setFlyingButtonBg] = useState('');

  // Navigation Items Data
  const navItems = [
    { title: 'B.E', id: 'be', bg: '/images/bebaack.jpg' },
    { title: 'B.Tech', id: 'btech', bg: '/images/tech_bg.png' },
    { title: 'B.Arch', id: 'barch', bg: '/images/civilback.jpg' },
    { title: 'MBA', id: 'mba', bg: '/images/mba.jpg' },
    { title: 'MCA', id: 'mca', bg: '/images/mca.jpg' },
    { title: 'ABOUT', id: 'about', className: 'nav-item-large', bg: '/images/aboutcollege.jpg' },
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
  const aboutData = { name: 'About ACE', icon: '🏫', bg: '/images/aboutcollege.jpg' };
  const hostelData = { name: 'Hostel Facilities', icon: '🏨', bg: '/images/hostel.jpg' };

  // Start drone animation sequence
  const startDroneAnimation = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    title: string,
    bg: string,
    action: () => void
  ) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Set flying button appearance
    setFlyingButtonText(title);
    setFlyingButtonBg(bg);
    setFlyingButtonStyle({
      position: 'fixed',
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      opacity: 1,
      transition: 'none'
    });

    // Hide original button
    button.style.opacity = '0';

    // Start drone animation
    setDroneState({
      active: true,
      buttonRect: rect,
      phase: 'descend',
      pendingAction: action
    });

    // Phase 2: After drone descends (0.8s), start grabbing
    setTimeout(() => {
      setDroneState(prev => ({ ...prev, phase: 'grab' }));
      
      // Phase 3: After grab (0.3s), ascend together
      setTimeout(() => {
        setDroneState(prev => ({ ...prev, phase: 'ascend' }));
        setFlyingButtonStyle(prev => ({
          ...prev,
          top: -200,
          transition: 'top 0.8s ease-in'
        }));
        
        // Complete animation and navigate
        setTimeout(() => {
          setDroneState({ active: false, buttonRect: null, phase: null, pendingAction: null });
          action();
        }, 800);
      }, 300);
    }, 800);
  };

  const handleNavClick = (id: string, e: React.MouseEvent<HTMLButtonElement>, item: typeof navItems[0]) => {
    const action = () => {
      // Check if it's a page navigation
      if (['placement', 'scholarship', 'sports', 'transport', 'about', 'hostel'].includes(id)) {
        navigate(`/${id}`);
        return;
      }

      window.scrollTo(0, 0);

      // Handle Sub-menus
      if (id === 'be') setShowBEDetails(true);
      else if (id === 'btech') setShowBTechDetails(true);
      else if (id === 'me') setShowMEDetails(true);
      else if (id === 'phd') setShowPhDDetails(true);

      // Handle Single Departments
      else if (id === 'barch') setSelectedDepartment(bArchData);
      else if (id === 'mba') setSelectedDepartment(mbaData);
      else if (id === 'mca') setSelectedDepartment(mcaData);
    };

    startDroneAnimation(e, item.title, item.bg, action);
  };

  const handleBackToNav = () => {
    setShowBEDetails(false);
    setShowBTechDetails(false);
    setShowMEDetails(false);
    setShowPhDDetails(false);
    window.scrollTo(0, 0);
  };

  const handleCourseClick = (
    e: React.MouseEvent<HTMLDivElement>,
    course: {name: string, icon: string, bg: string}
  ) => {
    const action = () => {
      setSelectedDepartment(course);
      window.scrollTo(0, 0);
    };
    startDroneAnimation(e, course.name, course.bg, action);
  };

  const handleBackFromDept = () => {
    setSelectedDepartment(null);
    window.scrollTo(0, 0);
  };

  // View States
  const isDepartmentView = !!selectedDepartment;
  const isMainNav = !showBEDetails && !showBTechDetails && !showMEDetails && !showPhDDetails && !isDepartmentView;
  const isBEDetails = showBEDetails && !isDepartmentView;
  const isBTechDetails = showBTechDetails && !isDepartmentView;
  const isMEDetails = showMEDetails && !isDepartmentView;
  const isPhDDetails = showPhDDetails && !isDepartmentView;

  // Calculate drone position based on phase
  const getDroneStyle = (): React.CSSProperties => {
    if (!droneState.buttonRect) return {};
    const rect = droneState.buttonRect;
    const droneSize = 120;
    
    switch (droneState.phase) {
      case 'descend':
        return {
          position: 'fixed',
          left: rect.left + rect.width / 2 - droneSize / 2,
          top: rect.top - droneSize + 20,
          width: droneSize,
          height: droneSize,
          animation: 'droneDescend 0.8s ease-out forwards',
          zIndex: 10000
        };
      case 'grab':
      case 'ascend':
        return {
          position: 'fixed',
          left: rect.left + rect.width / 2 - droneSize / 2,
          top: droneState.phase === 'ascend' ? -150 : rect.top - droneSize + 20,
          width: droneSize,
          height: droneSize,
          transition: droneState.phase === 'ascend' ? 'top 0.8s ease-in' : 'none',
          zIndex: 10000
        };
      default:
        return {};
    }
  };

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
      {/* Header */}
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
              {navItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`entry-wrapper ${item.className || ''}`}
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="drone-carrier">
                    <Lottie 
                      animationData={droneAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <button 
                    className={`nav-item ${item.className || ''}`}
                    onClick={(e) => handleNavClick(item.id, e, item)}
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${item.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    }}
                  >
                    {item.title}
                  </button>
                </div>
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
                  className="entry-wrapper"
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="drone-carrier">
                    <Lottie 
                      animationData={droneAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div 
                    className="be-item"
                    onClick={(e) => handleCourseClick(e, course)}
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <span className="be-icon">{course.icon}</span>
                    <span className="be-name">{course.name}</span>
                  </div>
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
                  className="entry-wrapper"
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="drone-carrier">
                    <Lottie 
                      animationData={droneAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div 
                    className="be-item"
                    onClick={(e) => handleCourseClick(e, course)}
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <span className="be-icon">{course.icon}</span>
                    <span className="be-name">{course.name}</span>
                  </div>
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
                  className="entry-wrapper"
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="drone-carrier">
                    <Lottie 
                      animationData={droneAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div 
                    className="be-item"
                    onClick={(e) => handleCourseClick(e, course)}
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <span className="be-icon">{course.icon}</span>
                    <span className="be-name">{course.name}</span>
                  </div>
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
                   className="entry-wrapper"
                   style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                 >
                   <div className="drone-carrier">
                     <Lottie 
                       animationData={droneAnimation} 
                       loop={true}
                       style={{ width: '100%', height: '100%' }}
                     />
                   </div>
                   <div 
                     className="be-item"
                     onClick={(e) => handleCourseClick(e, course)}
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
                 </div>
               ))}
             </div>
             <button className="menu-back-btn" onClick={handleBackToNav}>
               MENU
             </button>
           </div>
        )}

      </main>

      {/* Drone Animation Overlay */}
      {droneState.active && (
        <>
          {/* Flying Button Clone */}
          <div 
            className="flying-button"
            style={{
              ...flyingButtonStyle,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${flyingButtonBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {flyingButtonText}
          </div>
          
          {/* Drone */}
          <div style={getDroneStyle()}>
            <Lottie 
              animationData={droneAnimation} 
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Menu;

