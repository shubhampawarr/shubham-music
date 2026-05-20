'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function GrainOverlay() {
  const particles = useMemo(() => {
    return Array.from({ length: 900 }).map((_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const radiusX = Math.sqrt(Math.random()) * 460;
      const radiusY = Math.sqrt(Math.random()) * 320;

      return {
        id: index,
        x: Math.cos(angle) * radiusX,
        y: Math.sin(angle) * radiusY,
        size: Math.random() > 0.82 ? 2.2 : Math.random() > 0.55 ? 1.5 : 1,
        opacity: 0.18 + Math.random() * 0.65,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 130,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative h-[760px] w-[1080px] -rotate-[18deg]"
      >
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full bg-black"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}