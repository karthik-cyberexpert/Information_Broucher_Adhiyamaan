import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/images/placement/p1.jpeg",
  "/images/placement/p2.jpeg",
  "/images/placement/p3.jpeg",
  "/images/placement/p4.jpeg",
  "/images/placement/p5.jpeg",
  "/images/placement/p6.jpeg",
  "/images/placement/p7.jpeg",
  "/images/placement/p8.jpeg"
];

export default function PlacementSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '8px' }}>
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Placement ${index + 1}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </AnimatePresence>
    </div>
  );
}
