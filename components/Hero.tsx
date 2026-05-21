'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { artist } from '@/data/siteContent';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.55, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 1],
    ['0.18em', '0.02em']
  );

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-white">
      <div className="flex min-h-screen items-center justify-center px-6 pt-20">
        <motion.h1
          style={{
            scale,
            opacity,
            letterSpacing,
            transformOrigin: 'center center',
          }}
          className="relative z-10 origin-center text-center text-[62px] font-extralight uppercase leading-none text-black md:text-[120px]"
        >
          {artist.name}
        </motion.h1>
      </div>
    </section>
  );
}