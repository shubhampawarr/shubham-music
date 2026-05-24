'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/siteContent';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex items-center justify-center"
      >
        {/* SHU */}
        <span className="text-[36px] font-light uppercase tracking-[0.05em] text-black md:text-[58px] md:tracking-[0.06em]">
          SHU
        </span>

        {/* STICKER */}
        <img
          src="/images/shubham-sticker.jpeg"
          alt={artist.name}
          className="-mx-1 h-[108px] w-auto object-contain md:-mx-1 md:h-[150px]"
        />

        {/* HAM */}
        <span className="text-[36px] font-light uppercase tracking-[0.05em] text-black md:text-[58px] md:tracking-[0.06em]">
          HAM
        </span>
      </motion.div>
    </section>
  );
}