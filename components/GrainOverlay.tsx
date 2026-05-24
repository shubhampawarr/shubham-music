'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export default function GrainOverlay() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: isMobile ? 1200 : 2200 }).map(
      (_, index) => {
        const angle = Math.random() * Math.PI * 2;

        const radiusX =
          Math.sqrt(Math.random()) * (isMobile ? 240 : 520);

        const radiusY =
          Math.sqrt(Math.random()) * (isMobile ? 180 : 360);

        const random = Math.random();

        return {
          id: index,
          x: Math.cos(angle) * radiusX,
          y: Math.sin(angle) * radiusY,

          size:
            random > 0.985
              ? 5
              : random > 0.92
                ? 3
                : random > 0.55
                  ? 1.6
                  : 0.8,

          opacity: 0.16 + Math.random() * 0.58,
        };
      }
    );
  }, [isMobile]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
          x: [0, 34, -28, 0],
          y: [0, -28, 32, 0],
          scale: [1, 1.08, 0.98, 1],
        }}
        transition={{
          rotate: {
            duration: isMobile ? 8 : 16,
            repeat: Infinity,
            ease: 'linear',
          },

          x: {
            duration: isMobile ? 4 : 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },

          y: {
            duration: isMobile ? 5 : 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },

          scale: {
            duration: isMobile ? 5 : 7,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className={`relative ${
          isMobile
            ? 'h-[420px] w-[420px]'
            : 'h-[840px] w-[1220px]'
        } -rotate-[18deg]`}
      >
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`absolute rounded-full ${
              isMobile ? 'bg-black/60' : 'bg-black'
            }`}
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