import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'framer-motion';
import ClickSpark from '../components/ClickSpark';
// import TransparentGif from '../components/TransparentGif';
import DepartmentPage from '../DepartmentPage';
import '../App.css';
import '../components/Menu.css'; // Ensure we have the specific CSS
import droneAnimation from '../assets/drone_fly.json';


// --- DATA DEFINITIONS ---

const navItems = [
  { title: 'B.E.', id: 'be', bg: '/images/becourse.jpg' },
  { title: 'B.Tech.', id: 'btech', bg: '/images/btech.jpg' },
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
  { title: 'Scholarship', id: 'scholarship', bg: '/images/scholarship.jpeg' },
];

const beCourses = [
  { name: 'Aeronautical Engineering', icon: '✈️', bg: '/images/aeroback.jpg' },
  { name: 'Biomedical Engineering', icon: '🧬', bg: '/images/be/biomedical-bg.jpg.jpeg', video: '/media/bio.mp4' },
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
  { name: 'M.E. - Communication Systems', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
  { name: 'M.E. - Computer Science and Engineering', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
  { name: 'M.E. - Engineering Design', icon: '📐', bg: '/images/me.jpg', video: '/media/mech.mp4' },
  { name: 'M.E. - Power Systems', icon: '⚡', bg: '/images/me_power.jpg', video: '/media/elect.mp4' },
  { name: 'M.E. - Structural Engineering', icon: '🏗️', bg: '/images/civilback.jpg', video: '/media/civil.mp4' },
];

const phdCourses = [
  { name: 'Ph.D. Computer Science', icon: '💻', bg: '/images/computerback.jpg', video: '/media/comp.mp4' },
  { name: 'Ph.D. ECE', icon: '📡', bg: '/images/be/ECE-bg.jpg.jpeg', video: '/media/commun.mp4' },
  { name: 'Ph.D. Mechanical Engineering', icon: '⚙️', bg: '/images/me.jpg', video: '/media/mech.mp4' },
  { name: 'Ph.D. Chemistry', icon: '🧪', bg: '/images/btech/CE_bg.jpg' },
  { name: 'Ph.D. Physics', icon: '⚛️', bg: '/images/phd%20physics.jpg' },
];

const mbaCourses = [
  { name: 'MBA Part Time', icon: '⌛', bg: '/images/mba%20parttime.jpg', video: '/media/mba.mp4' },
  { name: 'MBA Regular', icon: '🎓', bg: '/images/mbaregular.jpg', video: '/media/mba.mp4' },
  { name: 'MBA Logistics and Supply Chain Management', icon: '📦', bg: '/images/mbalscm.jpg', video: '/media/mba.mp4' },
];

const bArchData = { name: 'Bachelor of Architecture', icon: '🏛️', bg: '/images/civilback.jpg', video: '/media/be arch.mp4' };
const mbaData = { name: 'Master of Business Administration', icon: '📊', bg: '/images/mba.jpg', video: '/media/mba.mp4' };
const mcaData = { name: 'Computer Applications', icon: '💻', bg: '/images/mca.jpg', video: '/media/mca.mp4?v=2' };

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
  const lottieRef = useRef<LottieRefCurrentProps>(null);

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
  const lottieRef = useRef<LottieRefCurrentProps>(null);

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
    const newParams: Record<string, string> = { dept: course.name };
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

  const handleDelayedAction = (action: () => void) => {
    setTimeout(() => {
      action();
    }, 350);
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
          <img
            src="/images/adhiyamaanlogo.jpeg"
            alt="Adhiyamaan College Logo"
            className="college-logo"
            style={{
              width: 'auto',
              height: '60px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '5px'
            }}
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
                  <ClickSpark sparkColor="#ffd700" sparkCount={12} sparkRadius={25}>
                    <motion.button
                      className={`nav-item ${item.className || ''}`}
                      onClick={() => handleDelayedAction(() => handleNavClick(item.id))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${item.bg}) center/cover no-repeat`,
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                      }}
                    >
                      {item.title}
                    </motion.button>
                  </ClickSpark>
                  {/* Drone Animation Container */}
                  <DroneAnimation />
                </div>
              ))}
            </div>
            <div className="menu-contact-info" style={{
              position: 'fixed',
              bottom: '30px',
              left: '30px',
              zIndex: 1000,
              textAlign: 'left'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.12)' }}
                style={{
                  padding: '1.2rem 2.5rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  color: 'white',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '8px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                  transition: 'all 0.4s ease',
                  cursor: 'default'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.4rem' }}>📞</span>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    color: '#ffd700',
                    textTransform: 'uppercase'
                  }}>
                    For Details Contact
                  </span>
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '1px'
                }}>
                  8883562627, 9150147751
                </div>
              </motion.div>
            </div>

            <div style={{
              textAlign: 'center',
              width: '100%',
              marginTop: '40px',
              paddingBottom: '40px',
              zIndex: 100,
              position: 'relative'
            }}>
              <ClickSpark sparkColor="#ffffff" sparkCount={10} sparkRadius={20}>
                <motion.button
                  className="home-btn"
                  onClick={() => handleDelayedAction(() => navigate('/thank-you'))}
                  whileHover={{ scale: 1.03, background: 'rgba(255, 255, 255, 0.12)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '1.5rem 3.5rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50px',
                    color: 'white',
                    cursor: 'pointer',
                    backdropFilter: 'blur(20px)',
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    minWidth: '500px'
                  }}
                >
                  🏠 Return Home
                </motion.button>
              </ClickSpark>
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
                  <ClickSpark sparkColor="#ffd700" sparkCount={8} sparkRadius={30}>
                    <motion.div
                      className="be-item"
                      onClick={() => handleDelayedAction(() => handleCourseClick(course))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <span className="be-icon">{course.icon}</span>
                      <span className="be-name">{course.name}</span>
                    </motion.div>
                  </ClickSpark>
                  {/* Drone Animation Container for Sub-Menu */}
                  <SubMenuDroneAnimation />
                </div>
              ))}
            </div>
            <ClickSpark sparkColor="#ffffff" sparkCount={8}>
              <motion.button
                className="menu-back-btn"
                onClick={() => handleDelayedAction(handleBackToNav)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MENU
              </motion.button>
            </ClickSpark>
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
                  <ClickSpark sparkColor="#ffd700" sparkCount={8} sparkRadius={30}>
                    <motion.div
                      className="be-item"
                      onClick={() => handleDelayedAction(() => handleCourseClick(course))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <span className="be-icon">{course.icon}</span>
                      <span className="be-name">{course.name}</span>
                    </motion.div>
                  </ClickSpark>
                  {/* Drone Animation Container for Sub-Menu */}
                  <SubMenuDroneAnimation />
                </div>
              ))}
            </div>
            <ClickSpark sparkColor="#ffffff" sparkCount={8}>
              <motion.button
                className="menu-back-btn"
                onClick={() => handleDelayedAction(handleBackToNav)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MENU
              </motion.button>
            </ClickSpark>
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
                  <ClickSpark sparkColor="#ffd700" sparkCount={8} sparkRadius={30}>
                    <motion.div
                      className="be-item"
                      onClick={() => handleDelayedAction(() => handleCourseClick(course))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${course.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <span className="be-icon">{course.icon}</span>
                      <span className="be-name">{course.name}</span>
                    </motion.div>
                  </ClickSpark>
                  {/* Drone Animation Container for Sub-Menu */}

                  <SubMenuDroneAnimation />
                </div>
              ))}
            </div>
            <ClickSpark sparkColor="#ffffff" sparkCount={8}>
              <motion.button
                className="menu-back-btn"
                onClick={() => handleDelayedAction(handleBackToNav)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MENU
              </motion.button>
            </ClickSpark>
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
                  <ClickSpark sparkColor="#ffd700" sparkCount={8} sparkRadius={30}>
                    <motion.div
                      className="be-item"
                      onClick={() => handleDelayedAction(() => handleCourseClick(course))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                    </motion.div>
                  </ClickSpark>
                  {/* Drone Animation Container for Sub-Menu */}

                  <SubMenuDroneAnimation />
                </div>
              ))}
            </div>
            <ClickSpark sparkColor="#ffffff" sparkCount={8}>
              <motion.button
                className="menu-back-btn"
                onClick={() => handleDelayedAction(handleBackToNav)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MENU
              </motion.button>
            </ClickSpark>
          </div>
        )}

        {isMBADetails && (
          <div className="be-container">
            <h2 className="be-title">MBA Programs</h2>
            <div className="be-grid">
              {mbaCourses.map((course, index) => (
                <div
                  key={index}
                  className="entry-wrapper"
                  style={{ '--entry-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <ClickSpark sparkColor="#ffd700" sparkCount={8} sparkRadius={30}>
                    <motion.div
                      className="be-item"
                      onClick={() => handleDelayedAction(() => handleCourseClick(course))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                    </motion.div>
                  </ClickSpark>
                  {/* Drone Animation Container for Sub-Menu */}
                  <SubMenuDroneAnimation />
                </div>
              ))}
            </div>
            <ClickSpark sparkColor="#ffffff" sparkCount={8}>
              <motion.button
                className="menu-back-btn"
                onClick={() => handleDelayedAction(handleBackToNav)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MENU
              </motion.button>
            </ClickSpark>
          </div>
        )}

      </main>

    </>
  );
};

export default Menu;
