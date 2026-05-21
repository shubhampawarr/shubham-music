'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { artist } from '@/data/siteContent';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: 'blur(8px)',
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white text-black"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute h-[620px] w-[620px] rounded-full opacity-[0.2]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(0,0,0,0.9) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 text-[34px] font-light uppercase md:text-[64px]"
          >
            {artist.name}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}