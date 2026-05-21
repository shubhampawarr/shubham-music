'use client';

import SectionReveal from './SectionReveal';
import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import { mixtape } from '@/data/siteContent';

export default function Mixtapes() {
  return (
    <section
      id="mixtapes"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-24 text-center text-white md:px-6"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover grayscale"
      >
        <source src="/videos/mixtape-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      <SectionReveal className="relative z-10 flex flex-col items-center text-white">
        <h2 className="text-[52px] font-black lowercase tracking-[0.16em] md:text-[140px] md:tracking-[0.08em]">
          {mixtape.title}
        </h2>

        <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.4em] md:text-[16px]">
          {mixtape.status}
        </p>

        <div className="mt-10 flex items-center justify-center gap-10 text-[30px]">
          <a
            href={mixtape.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:scale-110 hover:opacity-50"
          >
            <FaYoutube />
          </a>

          <a
            href={mixtape.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:scale-110 hover:opacity-50"
          >
            <FaInstagram />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}