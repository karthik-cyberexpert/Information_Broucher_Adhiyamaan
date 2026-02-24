import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticleExplosionProps {
  onComplete: () => void;
  width?: number; // Width of the object exploding
  height?: number;
}

const ParticleExplosion: React.FC<ParticleExplosionProps> = ({
  onComplete,
  width = 450,
  height = 550
}) => {
  // Config
  const rows = 8;
  const cols = 8;
  const particleCount = rows * cols;

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200); // Slightly longer than animation to ensure clean unmount
    return () => clearTimeout(timer);
  }, [onComplete]);

  const [particleData] = useState(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      randomX: (Math.random() - 0.5) * 600,
      randomY: (Math.random() - 0.5) * 600,
      randomRotate: (Math.random() - 0.5) * 720,
      duration: 0.5 + Math.random() * 0.5,
      top: Math.floor(i / cols) * (height / rows),
      left: (i % cols) * (width / cols),
    }));
  });

  return (
    <div
      style={{
        width: width,
        height: height,
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        // Match the modal's original position effectively by being in the same container
      }}
    >
      {particleData.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: p.randomX,
            y: p.randomY,
            opacity: 0,
            rotate: p.randomRotate,
            scale: 0
          }}
          transition={{
            duration: p.duration,
            ease: "easeOut"
          }}
          style={{
            width: width / cols,
            height: height / rows,
            background: 'rgba(255, 255, 255, 0.4)', // Glass-like shard
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            position: 'absolute',
            top: p.top,
            left: p.left,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleExplosion;
