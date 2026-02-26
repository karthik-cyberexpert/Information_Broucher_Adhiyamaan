import React from 'react';
import { ArrowLeft, Home, ArrowRight } from 'lucide-react';

interface NavigationDockProps {
  onBack: () => void;
  onHome: () => void;
  onForward: () => void;
}

const NavigationDock: React.FC<NavigationDockProps> = ({ onBack, onHome, onForward }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '30px',
      padding: '15px 30px',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(15px)',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
      zIndex: 1000
    }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.2s',
          borderRadius: '50%'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <ArrowLeft size={32} />
      </button>

      <button
        onClick={onHome}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.2s',
          borderRadius: '50%'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Home size={32} />
      </button>

      <button
        onClick={onForward}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.2s',
          borderRadius: '50%'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <ArrowRight size={32} />
      </button>
    </div>
  );
};

export default NavigationDock;
