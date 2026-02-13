import { ArrowUp, ArrowDown, ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const RightSideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    // Hide on Transport page as per original code, and also hide on Home page as per new requirement
    if (location.pathname === '/transport' || location.pathname === '/') return null;

    const scrollUp = () => {
        window.scrollBy({
            top: -400,
            behavior: 'smooth'
        });
    };

    const scrollDown = () => {
        window.scrollBy({
            top: 400,
            behavior: 'smooth'
        });
    };

    const goBack = () => {
        const path = location.pathname;

        // 1. If Bike Page -> Go to Thank You
        if (path === '/bike-animation') {
            navigate('/thank-you');
            return;
        }

        // 2. If Menu Page
        if (path === '/menu') {
            const currentDept = searchParams.get('dept');
            const currentCategory = searchParams.get('category');

            if (currentDept) {
                // If in a deep department view (e.g. Aeronautical)
                // Go back to the category list if it exists (e.g. BE), or root if not
                if (currentCategory) {
                    setSearchParams({ category: currentCategory });
                } else {
                    setSearchParams({});
                }
            } else if (currentCategory) {
                // If in a sub-menu (e.g. BE course list) -> Go to Menu Root
                setSearchParams({});
            } else {
                // If in Menu Root -> Go to Thank You
                navigate('/thank-you');
            }
            return;
        }

        // 3. All other pages (Placement, Sports, etc.) -> Go to Menu
        // "if departments page, go to menu page or sub-menu page if available" 
        // -> This refers to our DepartmentPage which is rendered at /menu when dept param is present.
        // So for actual separate routes like /placement, we go to /menu.
        navigate('/menu');
    };

    return (
        <div style={{
            position: 'fixed',
            right: '25px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px 12px',
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(16px)',
            borderRadius: '40px',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            {/* Scroll Up */}
            <button
                onClick={scrollUp}
                title="Scroll Up"
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s, color 0.2s',
                    borderRadius: '50%'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'none';
                }}
            >
                <ArrowUp size={24} />
            </button>

            {/* Back Button */}
            <button
                onClick={goBack}
                title="Go Back"
                style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#38bdf8', // Light blue accent
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.color = '#7dd3fc';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.color = '#38bdf8';
                }}
            >
                <ChevronLeft size={28} strokeWidth={2.5} />
            </button>

            {/* Scroll Down */}
            <button
                onClick={scrollDown}
                title="Scroll Down"
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s, color 0.2s',
                    borderRadius: '50%'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'none';
                }}
            >
                <ArrowDown size={24} />
            </button>
        </div>
    );
};

export default RightSideNav;
