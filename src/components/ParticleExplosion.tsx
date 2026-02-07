import React, { useEffect } from 'react';
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
  const particles = Array.from({ length: particleCount });

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200); // Slightly longer than animation to ensure clean unmount
    return () => clearTimeout(timer);
  }, [onComplete]);

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
      {particles.map((_, i) => {
        // Random explosive force
        const randomX = (Math.random() - 0.5) * 600; // Spread wide
        const randomY = (Math.random() - 0.5) * 600;
        const randomRotate = (Math.random() - 0.5) * 720;
        const duration = 0.5 + Math.random() * 0.5;

        // Calculate initial position in the grid (approximate)
        // Actually, just starting them all from the center or grid doesn't matter much 
        // if they are "shards" of the original.
        // Let's reflect "shards" by giving them a glass look.
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 1 
            }}
            animate={{ 
              x: randomX, 
              y: randomY, 
              opacity: 0, 
              rotate: randomRotate, 
              scale: 0 
            }}
            transition={{ 
              duration: duration, 
              ease: "easeOut" 
            }}
            style={{
              width: width / cols,
              height: height / rows,
              background: 'rgba(255, 255, 255, 0.4)', // Glass-like shard
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              position: 'absolute',
              // Distribute them initially in a grid if we wanted to be precise, 
              // but purely random scatter creates a good "explosion" from center.
              // To mimic "breaking apart", let's give them initial grid positions:
              top: Math.floor(i / cols) * (height / rows),
              left: (i % cols) * (width / cols),
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleExplosion;
