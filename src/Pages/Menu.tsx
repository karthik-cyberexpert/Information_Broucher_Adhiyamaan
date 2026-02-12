import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import TransparentGif from '../components/TransparentGif';
import DepartmentPage from '../DepartmentPage';
import '../App.css';
import '../components/Menu.css'; // Ensure we have the specific CSS
import droneAnimation from '../assets/drone_fly.json';


// --- DATA DEFINITIONS ---

const navItems = [
  { title: 'B.E.', id: 'be', bg: '/images/bebaack.jpg' },
  { title: 'B.Tech.', id: 'btech', bg: '/images/tech_bg.png' },
  { title: 'B.Arch.', id: 'barch', bg: '/images/civilback.jpg' },
  { title: 'M.E.', id: 'me', bg: '/images/me.jpg' },
  { title: 'M.B.A.', id: 'mba', bg: '/images/mba.jpg' },
  { title: 'ABOUT', id: 'about', className: 'nav-item-large', bg: '/images/about3.jpeg' },
  { title: 'Ph.D.', id: 'phd', bg: '/images/phd.jpg' },
  { title: 'M.C.A.', id: 'mca', bg: '/images/mca.jpg' },
  { title: 'Placement', id: 'placement', bg: '/images/placement.jpg' },
  { title: 'Sports', id: 'sports', bg: '/images/sports.jpg' },
  { title: 'Hostel', id: 'hostel', bg: '/images/hostel.jpg' },
  { title: 'Transport', id: 'transport', bg: '/images/transport.jpg' },
  { title: 'Scholarship', id: 'scholarship', bg: '/images/scholarship.jpg' },
];

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

const bTechCourses = [
  { name: 'Artificial Intelligence & Data Science', icon: '🧠', bg: '/images/btech/AIDS_BG.jpg', video: '/media/ai.mp4' },
  { name: 'Biotechnology', icon: '🔬', bg: '/images/btech/biobg.jpg', video: '/media/bio.mp4' },
  { name: 'Chemical Engineering', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
  { name: 'Computer Science and Business Systems', icon: '💼', bg: '/images/btech/csbsbg.jpg', video: '/media/comp.mp4' },
  { name: 'Information Technology', icon: '🖥️', bg: '/images/btech/ITbg.jpg', video: '/media/comp.mp4' },
];

const meCourses = [
  { name: 'M.E. Communication System Engineering', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
  { name: 'M.E. Computer Science Engineering', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
  { name: 'M.E. Engineering Design', icon: '📐', bg: '/images/me.jpg', video: '/media/mech.mp4' },
  { name: 'M.E. Power Engineering', icon: '⚡', bg: '/images/me_power.jpg', video: '/media/elect.mp4' },
  { name: 'M.E. Structural Engineering', icon: '🏗️', bg: '/images/civilback.jpg', video: '/media/civil.mp4' },
];

const phdCourses = [
  { name: 'Ph.D. Computer Science', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
  { name: 'Ph.D. ECE', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
  { name: 'Ph.D. Mechanical Engineering', icon: '⚙️', bg: '/images/me.jpg', video: '/media/mech.mp4' },
  { name: 'Ph.D. Chemistry', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
  { name: 'Ph.D. Physics', icon: '⚛️', bg: '/images/phd%20physics.jpg' },
];

const mbaCourses = [
  { name: 'MBA Part Time', icon: '⌛', bg: '/images/mba/mba%20parttime.jpg', video: '/media/mba.mp4' },
  { name: 'MBA Full Time', icon: '🎓', bg: '/images/mba/mba%20fulltime.jpg', video: '/media/mba.mp4' },
  { name: 'MBA Logistics and Supply Chain Management', icon: '📦', bg: '/images/mba/mba%20logistic.jpg', video: '/media/mba.mp4' },
];

const bArchData = { name: 'Bachelor of Architecture', icon: '🏛️', bg: '/images/civilback.jpg', video: '/media/be arch.mp4' };
const mbaData = { name: 'Master of Business Administration', icon: '📊', bg: '/images/mba.jpg', video: '/media/mba.mp4' };
const mcaData = { name: 'Master of Computer Applications', icon: '💻', bg: '/images/mca.jpg', video: '/media/mca.mp4?v=2' };

// Combine all courses for easy lookup by name
const allCourses = [
  ...beCourses,
  ...bTechCourses,
  ...meCourses,
  ...phdCourses,
  ...mbaCourses,
  bArchData,
  mbaData,
  mcaData
];


// Helper Component for Drone Animation (2s duration)
const DroneAnimation = () => {
  // @ts-ignore
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    // Original: ~6.5s (391 frames / 60 fps)
    // Target: 2s
    // Speed: 6.5 / 2 = 3.25
    if (lottieRef.current) {
      lottieRef.current.setSpeed(3.25);
    }
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: '-140%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '170%',
      height: '170%',
      pointerEvents: 'none',
      zIndex: 20
    }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={droneAnimation}
        loop={false}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

// Sub-Menu Drone Animation (Smaller & Adjusted)
const SubMenuDroneAnimation = () => {
  // @ts-ignore
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(3.25);
    }
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: '-80%', // Adjusted for smaller height
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120%', // Smaller relative width for sub-menu items
      height: '120%',
      pointerEvents: 'none',
      zIndex: 20
    }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={droneAnimation}
        loop={false}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};


const Menu = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current state from URL
  const currentCategory = searchParams.get('category');
  const currentDeptName = searchParams.get('dept');

  // Derive selected Department from URL
  // We need to find the full department object matching the name
  const selectedDepartment = currentDeptName
    ? allCourses.find(c => c.name === currentDeptName) || null
    : null;





  const handleNavClick = (id: string) => {
    // Check if it's a page navigation
    if (['placement', 'scholarship', 'sports', 'transport', 'about', 'hostel'].includes(id)) {
      navigate(`/${id}`);
      return;
    }

    window.scrollTo(0, 0);

    // Handle Sub-menus/Single Departments via URL params
    if (id === 'be' || id === 'btech' || id === 'me' || id === 'phd') {
      setSearchParams({ category: id });
    }
    // Handle Single Departments direct navigation
    else if (id === 'barch') {
      setSearchParams({ dept: bArchData.name });
    }
    else if (id === 'mba') {
      setSearchParams({ category: 'mba' });
    }
    else if (id === 'mca') {
      setSearchParams({ dept: mcaData.name });
    }
  };

  const handleBackToNav = () => {
    setSearchParams({}); // Clear params to go back to main menu
    window.scrollTo(0, 0);
  };

  const handleCourseClick = (
    course: { name: string, icon: string, bg: string, video?: string }
  ) => {
    // Keep category if it exists, add dept
    const newParams: any = { dept: course.name };
    if (currentCategory) newParams.category = currentCategory;
    setSearchParams(newParams);
    window.scrollTo(0, 0);
  };

  const handleBackFromDept = () => {
    // If we have a category (BE/BTech etc), go back to that category listing
    if (currentCategory) {
      setSearchParams({ category: currentCategory });
    } else {
      // Otherwise go back to main menu
      setSearchParams({});
    }
    window.scrollTo(0, 0);
  };

  // View States
  const isDepartmentView = !!selectedDepartment;
  const isMainNav = !currentCategory && !isDepartmentView;
  const isBEDetails = currentCategory === 'be' && !isDepartmentView;
  const isBTechDetails = currentCategory === 'btech' && !isDepartmentView;
  const isMEDetails = currentCategory === 'me' && !isDepartmentView;
  const isPhDDetails = currentCategory === 'phd' && !isDepartmentView;
  const isMBADetails = currentCategory === 'mba' && !isDepartmentView;

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
            style={{ borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.75)', height: '50px', width: '200px' }}
          />
        </div>

      </header>

      <main className={`main-content ${isMainNav ? 'inner-page-bg' :
        isBEDetails ? 'be-page-bg' :
          isBTechDetails ? 'btech-page-bg' :
            isMEDetails ? 'me-page-bg' :
              isPhDDetails ? 'phd-page-bg' :
                isMBADetails ? 'mba-page-bg' : ''
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

        {/* MBA Video Background */}
        {isMBADetails && (
          <video className="mba-bg-video" autoPlay loop muted playsInline>
            <source src="/media/mba.mp4" type="video/mp4" />
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
                    onClick={() => handleNavClick(item.id)}
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
                  {/* Drone Animation Container */}
                  <DroneAnimation />
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
              <button className="home-btn" onClick={() => navigate('/thank-you')} style={{
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
                  {/* Drone Animation Container for Sub-Menu */}
                  <SubMenuDroneAnimation />
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
                  {/* Drone Animation Container for Sub-Menu */}
                  <SubMenuDroneAnimation />
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
                  {/* Drone Animation Container for Sub-Menu */}

                  <SubMenuDroneAnimation />
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
                  {/* Drone Animation Container for Sub-Menu */}

                  <SubMenuDroneAnimation />
                </div>
              ))}
            </div>
            <button className="menu-back-btn" onClick={handleBackToNav}>
              MENU
            </button>
          </div>
        )}

        {isMBADetails && (
          <div className="be-container">
            <h2 className="be-title">MBA Programs</h2>
            <div className="mba-list">
              {mbaCourses.map((course, index) => (
                <div
                  key={index}
                  className="entry-wrapper"
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div
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
                  {/* Drone Animation Container for Sub-Menu */}
                  <SubMenuDroneAnimation />
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
