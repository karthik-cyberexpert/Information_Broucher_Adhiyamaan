import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InactivityHandler.css';

interface InactivityHandlerProps {
  timeout?: number; // Total timeout in ms (default 60000)
  warningDuration?: number; // Duration to show warning in ms (default 10000)
}

// Events to track activity
const EVENTS = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];

const InactivityHandler: React.FC<InactivityHandlerProps> = ({
  timeout = 60000,
  warningDuration = 10000
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(timeout / 1000);
  const [showWarning, setShowWarning] = useState(false);
  const lastActivityRef = useRef<number>(0);
  const location = useLocation();
  const navigate = useNavigate();

  const resetTimer = () => {
    lastActivityRef.current = Date.now();
    setShowWarning(false);
  };

  useEffect(() => {
    lastActivityRef.current = Date.now();
  }, []);

  useEffect(() => {
    // Don't track on home page or thank you page
    if (location.pathname === '/' || location.pathname === '/thank-you') {
      // Async update to avoid "set-state-in-effect" lint error
      Promise.resolve().then(() => {
        if (showWarning) setShowWarning(false);
      });
      lastActivityRef.current = Date.now();
      return;
    }

    const checkInactivity = () => {
      const now = Date.now();
      if (lastActivityRef.current === 0) return; // Wait for initialization

      const timeSinceLastActivity = now - lastActivityRef.current;
      const timeRemaining = timeout - timeSinceLastActivity;

      if (timeRemaining <= 0) {
        // Timeout reached - Go to Home page first
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
      if (showWarning) {
        resetTimer();
      } else {
        lastActivityRef.current = Date.now();
      }
    };

    EVENTS.forEach(event => window.addEventListener(event, handleActivity));

    // Cleanup
    return () => {
      clearInterval(intervalId);
      EVENTS.forEach(event => window.removeEventListener(event, handleActivity));
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
