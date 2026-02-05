import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InactivityHandler.css';

interface InactivityHandlerProps {
  timeout?: number; // Total timeout in ms (default 60000)
  warningDuration?: number; // Duration to show warning in ms (default 10000)
}

const InactivityHandler: React.FC<InactivityHandlerProps> = ({ 
  timeout = 60000, 
  warningDuration = 10000 
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(timeout / 1000);
  const [showWarning, setShowWarning] = useState(false);
  const lastActivityRef = useRef<number>(Date.now());
  const location = useLocation();
  const navigate = useNavigate();

  // Events to track activity
  const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];

  const resetTimer = () => {
    lastActivityRef.current = Date.now();
    setShowWarning(false);
  };

  useEffect(() => {
    // Don't track on home page
    if (location.pathname === '/') {
      setShowWarning(false);
      return;
    }

    const checkInactivity = () => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivityRef.current;
      const timeRemaining = timeout - timeSinceLastActivity;

      if (timeRemaining <= 0) {
        // Timeout reached
        navigate('/');
        resetTimer();
      } else if (timeRemaining <= warningDuration) {
        // Show warning
        setShowWarning(true);
        setTimeLeft(Math.ceil(timeRemaining / 1000));
      } else {
        // Healthy state
        setShowWarning(false);
      }
    };

    // Check every second
    const intervalId = setInterval(checkInactivity, 1000);

    // Add event listeners
    const handleActivity = () => {
      // If warning is shown, interaction resets it immediately
      // Otherwise, just update the ref (handled by next interval check effectively, but we can prevent frequent updates)
      if (showWarning) {
        resetTimer();
      } else {
        lastActivityRef.current = Date.now();
      }
    };

    events.forEach(event => window.addEventListener(event, handleActivity));

    // Cleanup
    return () => {
      clearInterval(intervalId);
      events.forEach(event => window.removeEventListener(event, handleActivity));
    };
  }, [location.pathname, navigate, timeout, warningDuration, showWarning]);

  if (!showWarning) return null;

  return (
    <div className="inactivity-overlay" onClick={resetTimer}>
      <div className="inactivity-modal">
        <h2>Are you still there?</h2>
        <div className="countdown-circle">
          <span>{timeLeft}</span>
        </div>
        <p>Redirecting to Home in {timeLeft} seconds...</p>
        <p className="click-msg">Click anywhere to stay</p>
      </div>
    </div>
  );
};

export default InactivityHandler;
