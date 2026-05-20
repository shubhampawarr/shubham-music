'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-white px-6 text-black">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 text-[11px] font-light uppercase tracking-[0.45em] text-neutral-500 md:mb-8 md:text-[14px]"
        >
          AI • DESIGN • SYSTEMS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.16em' }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[52px] font-light uppercase text-black md:text-[120px] md:tracking-[0.38em]"
        >
          SHUBHAM
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-8 h-px bg-black/30"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 max-w-2xl text-[14px] font-light leading-8 text-neutral-600 md:text-[18px] md:leading-9"
        >
          Building intelligent digital systems through artificial intelligence,
          creative technology, modern web experiences, and cinematic visual
          identity.
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)]" />
    </section>
  );
}