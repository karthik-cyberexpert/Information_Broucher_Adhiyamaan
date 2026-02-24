import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../components/Menu.css";
import "./Sports.css";


/* GALLERY IMAGES - Updated to match actual files in /public/images/sports/ */
const galleryImages = [
  "13.png", "14.png", "15.png", "16.png", "17.png", "18.png",
  "20.jpg", "22.jpg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg",
  "27.jpeg", "30.jpeg", "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg",
  "hockey (1).jpg", "hockey (1).png", "hockey (2).jpeg", "hockey (2).png",
  "hockey (3).jpeg", "hockey (3).png", "hockey (4).jpeg", "hockey (4).png",
  "hockey (5).jpeg", "hockey (5).png", "hockey (6).jpeg", "hockey (6).png",
  "hockey (7).jpeg", "hockey (7).png", "hockey (8).jpeg", "hockey (8).png",
  "hockey (9).png", "hockey (10).png", "hockey (11).png", "hockey (12).png"
].map(name => `/images/sports/${name}`);

const indoorGames = [
  "Badminton", "Basketball", "Table Tennis", "Chess", "Carrom",
  "Weight Lifting", "Best Physique", "Kho-Kho", "Gymnasium"
];

const outdoorGames = [
  "Athletics", "Cricket", "Football", "Hockey", "Volleyball",
  "Kabaddi", "Ball Badminton", "Tennis", "Handball"
];

export default function Sports() {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start the gallery interval
    const interval = setInterval(() => {
      setDirection((d) => (d === "right" ? "left" : "right"));
      setIndex((i) => (i + 1) % galleryImages.length);
    }, 3000);

    // Immediate start for sectional reveals
    setShowContent(true);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="sports-page">
      {/* BACKGROUND VIDEO */}
      <video className="sports-bg-video" autoPlay loop muted playsInline>
        <source src="/media/sports.mp4" type="video/mp4" />
      </video>

      <motion.h1
        className="sports-title"
        initial={{ opacity: 0, y: -50 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
      >
        🏆 Sports
      </motion.h1>

      <div className="sports-layout">
        {/* INDOOR SECTION */}
        <div className="game-section-wrapper">
          {/* Lead Ball - Drops from Top */}
          <motion.div
            className="lead-ball blue"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={showContent ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", damping: 12, stiffness: 50, delay: 0.2 }}
          />
          {/* Indoor Card - Follows the ball */}
          <motion.div
            className="glass-box indoor-box"
            initial={{ y: "-50px", opacity: 0, scale: 0.95 }}
            animate={showContent ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Indoor Games</h2>
            <div className="scroll-window">
              <div className="scroll-track">
                {indoorGames.map((game, i) => <div key={`in1-${i}`} className="game-card">{game}</div>)}
                {indoorGames.map((game, i) => <div key={`in2-${i}`} className="game-card">{game}</div>)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CENTER GALLERY */}
        <motion.div
          className="gallery-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img
            key={index}
            src={galleryImages[index]}
            alt="Sports Gallery"
            className={`gallery-image ${direction}`}
            draggable="false"
          />
        </motion.div>

        {/* OUTDOOR SECTION */}
        <div className="game-section-wrapper">
          {/* Lead Ball - Rises from Bottom */}
          <motion.div
            className="lead-ball orange"
            initial={{ y: "100vh", opacity: 0 }}
            animate={showContent ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", damping: 12, stiffness: 50, delay: 0.4 }}
          />
          {/* Outdoor Card - Follows the ball */}
          <motion.div
            className="glass-box outdoor-box"
            initial={{ y: "50px", opacity: 0, scale: 0.95 }}
            animate={showContent ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2>Outdoor Games</h2>
            <div className="scroll-window">
              <div className="scroll-track">
                {outdoorGames.map((game, i) => <div key={`out1-${i}`} className="game-card">{game}</div>)}
                {outdoorGames.map((game, i) => <div key={`out2-${i}`} className="game-card">{game}</div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
