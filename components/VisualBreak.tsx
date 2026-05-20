'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionReveal from './SectionReveal';

export default function VisualBreak() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6 py-28">
      <SectionReveal className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative h-[560px] overflow-hidden bg-neutral-100 shadow-[0_40px_140px_rgba(0,0,0,0.16)]">
          <motion.img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="Abstract editorial visual"
            className="h-[115%] w-full object-cover grayscale"
            style={{ y: imageY }}
          />

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:7px_7px]" />
        </div>

        <div className="md:pl-10">
          <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-neutral-400">
            visual system
          </p>

          <h2 className="max-w-md text-4xl font-extralight leading-tight tracking-[0.18em] md:text-5xl">
            silence, rhythm, motion
          </h2>

          <p className="mt-10 max-w-sm text-[15px] font-light leading-8 text-neutral-600">
            A restrained visual language built with monochrome contrast,
            spatial rhythm, soft movement, and atmospheric composition.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}