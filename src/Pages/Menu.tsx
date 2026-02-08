import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
// @ts-ignore
import TransparentGif from '../components/TransparentGif';
import DepartmentPage from '../DepartmentPage';
import '../App.css';
import '../components/Menu.css'; // Ensure we have the specific CSS

interface TorchState {
  active: boolean;
  rect: DOMRect | null;
  title: string;
  bg: string;
  onComplete: (() => void) | null;
  isExiting: boolean; // For the zoom/fade phase
}

const Menu = () => {
  const navigate = useNavigate();

  // Navigation States for Sub-menus
  const [showBEDetails, setShowBEDetails] = useState(false);
  const [showBTechDetails, setShowBTechDetails] = useState(false);
  const [showMEDetails, setShowMEDetails] = useState(false);
  const [showPhDDetails, setShowPhDDetails] = useState(false);

  // Selected Department State for Detailed View
  const [selectedDepartment, setSelectedDepartment] = useState<{ name: string, icon: string, bg: string, video?: string } | null>(null);

  // Torch Animation State
  const [torchState, setTorchState] = useState<TorchState>({
    active: false,
    rect: null,
    title: '',
    bg: '',
    onComplete: null,
    isExiting: false
  });

  // Torch Animation Data State
  const [torchAnimationData, setTorchAnimationData] = useState<any>(null);

  // Fetch Torch Animation JSON
  useEffect(() => {
    fetch('/assets/torch.json')
      .then(response => response.json())
      .then(data => setTorchAnimationData(data))
      .catch(error => console.error("Error loading torch animation:", error));
  }, []);

  // Navigation Items Data
  const navItems = [
    { title: 'B.E.', id: 'be', bg: '/images/bebaack.jpg' },
    { title: 'B.Tech.', id: 'btech', bg: '/images/tech_bg.png' },
    { title: 'B.Arch.', id: 'barch', bg: '/images/civilback.jpg' },
    { title: 'MBA.', id: 'mba', bg: '/images/mba.jpg' },
    { title: 'MCA.', id: 'mca', bg: '/images/mca.jpg' },
    { title: 'ABOUT', id: 'about', className: 'nav-item-large', bg: '/images/aboutcollege.jpg' },
    { title: 'M.E.', id: 'me', bg: '/images/me.jpg' },
    { title: 'Ph.D.', id: 'phd', bg: '/images/college.jpeg' },
    { title: 'Placement', id: 'placement', bg: '/images/placement.jpg' },
    { title: 'Sports', id: 'sports', bg: '/images/sports.jpg' },
    { title: 'Hostel', id: 'hostel', bg: '/images/hostel.jpg' },
    { title: 'Transport', id: 'transport', bg: '/images/transport.jpg' },
    { title: 'Scholarship', id: 'scholarship', bg: '/images/scholarship.jpg' },
  ];

  // B.E Courses Data
  const beCourses = [
    { name: 'Aeronautical Engineering', icon: '✈️', bg: '/images/aeroback.jpg' },
    { name: 'Biomedical Engineering', icon: '🧬', bg: '/images/bioback.jpg', video: '/media/bio.mp4' },
    { name: 'Civil Engineering', icon: '🏗️', bg: '/images/civilback.jpg', video: '/media/civil.mp4' },
    { name: 'Computer Science & Engineering', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
    { name: 'CSE (Cyber Security)', icon: '🔐', bg: '/images/computerback.jpg', video: '/media/cyber.mp4' },
    { name: 'CSE (AI & ML)', icon: '🤖', bg: '/images/be/AIML-bg.jpg.jpeg', video: '/media/ai.mp4' },
    { name: 'Electronics & Communication', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
    { name: 'Electrical & Electronics', icon: '⚡', bg: '/media/eee.jpg', video: '/media/elect.mp4' },
    { name: 'Mechanical Engineering', icon: '⚙️', bg: '/images/me.jpg', video: '/media/mech.mp4' },
  ];

  // B.Tech Courses Data
  const bTechCourses = [
    { name: 'Artificial Intelligence & Data Science', icon: '🧠', bg: '/images/btech/AIDS_BG.jpg', video: '/media/ai.mp4' },
    { name: 'Biotechnology', icon: '🔬', bg: '/images/btech/biobg.jpg', video: '/media/bio.mp4' },
    { name: 'Chemical Engineering', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
    { name: 'Computer Science and Business Systems', icon: '💼', bg: '/images/btech/csbsbg.jpg', video: '/media/comp.mp4' },
    { name: 'Information Technology', icon: '🖥️', bg: '/images/btech/ITbg.jpg', video: '/media/comp.mp4' },
  ];

  // M.E Courses Data
  const meCourses = [
    { name: 'M.E. Communication System Engineering', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
    { name: 'M.E. Computer Science Engineering', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
    { name: 'M.E. Engineering Design', icon: '📐', bg: '/images/me.jpg', video: '/media/mech.mp4' },
    { name: 'M.E. Power System Engineering', icon: '⚡', bg: '/images/be/eee1.jpg.jpeg', video: '/media/elect.mp4' },
    { name: 'M.E. Structural Engineering', icon: '🏗️', bg: '/images/civilback.jpg', video: '/media/civil.mp4' },
  ];

  // Ph.D Courses Data
  const phdCourses = [
    { name: 'Ph.D. Computer Science', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
    { name: 'Ph.D. ECE', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
    { name: 'Ph.D. Mechanical Engineering', icon: '⚙️', bg: '/images/me.jpg', video: '/media/mech.mp4' },
    { name: 'Ph.D. Chemistry', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
    { name: 'Ph.D. Physics', icon: '⚛️', bg: '/images/be/eee1.jpg.jpeg' },
  ];

  // Single Department Data (No Sub-menu)
  const bArchData = { name: 'Bachelor of Architecture', icon: '🏛️', bg: '/images/civilback.jpg', video: '/media/be arch.mp4' };
  const mbaData = { name: 'Master of Business Administration', icon: '📊', bg: '/images/mba.jpg', video: '/media/mba.mp4' };
  const mcaData = { name: 'Master of Computer Applications', icon: '💻', bg: '/images/mca.jpg', video: '/media/mca.mp4?v=2' };

  // Start Torch Animation Sequence
  const startTorchAnimation = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    title: string,
    bg: string,
    action: () => void
  ) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    // Init Torch State
    setTorchState({
        active: true,
        rect,
        title,
        bg,
        onComplete: action,
        isExiting: false
    });

    // Phase 1: Torch Focus (1 second)
    // Then Phase 2: Zoom and Fade
    setTimeout(() => {
        setTorchState(prev => ({ ...prev, isExiting: true }));
        
        // Wait for exit animation to finish (e.g., 0.5s or 0.8s), then navigate
        setTimeout(() => {
             // Reset state
             setTorchState({ active: false, rect: null, title: '', bg: '', onComplete: null, isExiting: false });
             // Execute Navigation
             action();
        }, 800); 
    }, 1000);
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

    startTorchAnimation(e, item.title, item.bg, action);
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
    course: { name: string, icon: string, bg: string, video?: string }
  ) => {
    const action = () => {
      setSelectedDepartment(course);
      window.scrollTo(0, 0);
    };
    startTorchAnimation(e, course.name, course.bg, action);
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
          <TransparentGif 
            src="/images/logo33.gif" 
            width={300} 
            height={90} 
            className="college-logo" 
            style={{ borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.75)',height:'50px',width:'200px' }}
          />
        </div>

      </header>

      <main className={`main-content ${isMainNav ? 'inner-page-bg' :
        isBEDetails ? 'be-page-bg' :
          isBTechDetails ? 'btech-page-bg' :
            isMEDetails ? 'me-page-bg' :
              isPhDDetails ? 'phd-page-bg' : ''
        }`}>

        {/* PhD Video Background */}
        {isPhDDetails && (
          <video className="phd-bg-video" autoPlay loop muted playsInline>
            <source src="/media/phd.mp4" type="video/mp4" />
          </video>
        )}

        {/* BE Video Background */}
        {isBEDetails && (
          <video className="be-bg-video" autoPlay loop muted playsInline>
            <source src="/media/be.mp4" type="video/mp4" />
          </video>
        )}

        {/* B.Tech Video Background */}
        {isBTechDetails && (
          <video className="btech-bg-video" autoPlay loop muted playsInline>
            <source src="/media/btech.mp4" type="video/mp4" />
          </video>
        )}

        {/* ME Video Background */}
        {isMEDetails && (
          <video className="me-bg-video" autoPlay loop muted playsInline>
            <source src="/media/me.mp4" type="video/mp4" />
          </video>
        )}

        {isMainNav && (
          <div className="nav-grid-container">
            <div className="nav-grid">
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`entry-wrapper ${item.className || ''}`}
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
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
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginTop: '40px',
              paddingBottom: '40px',
              zIndex: 100,
              position: 'relative'
            }}>
              <button className="home-btn" onClick={() => navigate('/')} style={{
                padding: '1.5rem 6rem',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                🏠 Return Home
              </button>
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

      {/* Torch Animation Overlay */}
      {torchState.active && torchState.rect && (
        <div className="torch-interaction-layer">
           {/* Dark Overlay for non-focused items */}
           <div className="dim-overlay" />

           {/* Focused Item Clone (High Z-Index) */}
           <div 
             className={`focused-clone ${torchState.isExiting ? 'zoom-exit' : ''}`}
             style={{
                position: 'fixed',
                left: torchState.rect.left,
                top: torchState.rect.top,
                width: torchState.rect.width,
                height: torchState.rect.height,
                backgroundImage: torchState.bg.includes('gradient') ? torchState.bg : `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${torchState.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px', // Match .nav-item / .be-item
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: torchState.rect.height > 100 ? '1.5rem' : '1.2rem', // Approximation
                zIndex: 10001,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)', // Glow
                textTransform: 'uppercase',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
             }}
           >
                {/* Simplified content - just text for nav items, icon+text for courses */}
                {/* Since we don't have the exact mapped item here easily without passing more data, 
                    we can just render the title we passed. 
                    For course items, we might miss the icon if we don't pass it.
                    Let's just use the title for now, it's the main thing.
                 */}
                 {torchState.title}
           </div>

           {/* Torch Lottie Animation */}
           {torchAnimationData && (
               <div 
                className="torch-lottie-container"
                style={{
                    position: 'fixed',
                    left: torchState.rect.left + torchState.rect.width / 2 - 150, // Center torch (assume 300px width)
                    top: torchState.rect.top - 100, // Adjust vertically
                    width: 300,
                    height: 300,
                    zIndex: 10002,
                    pointerEvents: 'none',
                    opacity: torchState.isExiting ? 0 : 1, // Fade out torch when exiting
                    transition: 'opacity 0.2s'
                }}
               >
                <Lottie 
                    animationData={torchAnimationData}
                    loop={true}
                    autoPlay={true}
                />
               </div>
           )}
        </div>
      )}
    </>
  );
};

export default Menu;

