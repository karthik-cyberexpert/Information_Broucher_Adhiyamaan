import { ArrowUp, ArrowDown, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RightSideNav = () => {
    const navigate = useNavigate();

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
        navigate(-1);
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
