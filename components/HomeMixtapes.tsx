'use client';

import SectionReveal from './SectionReveal';
import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import { mixtape } from '@/data/siteContent';

export default function HomeMixtapes() {
  return (
    <section
      id="mixtapes"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-20 text-center"
    >
      <SectionReveal className="mt-12 flex w-full max-w-5xl flex-col items-center md:mt-20">
        {/* TOP AREA */}
        <div className="relative w-full max-w-[720px]">
          {/* TITLE */}
          <h2 className="absolute left-1/2 top-[-54px] -translate-x-1/2 text-[26px] font-semibold lowercase tracking-[0.16em] text-black md:text-[42px] md:tracking-[0.22em]">
            mixtapes
          </h2>

          {/* BOX */}
          <div className="mx-auto flex w-full max-w-[520px] items-center justify-center rounded-[22px] border border-black/10 bg-[#f8f8f8] px-6 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.05)]">
            <img
              src="/images/mixtape-coming-soon.webp"
              alt="Coming Soon Mixtape"
              className="w-full max-w-[180px] object-contain md:max-w-[240px]"
            />
          </div>
        </div>

        {/* ICONS */}
        <div className="mt-10 flex items-center justify-center gap-12 text-[30px] text-black">
          <a
            href={mixtape.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-50"
          >
            <FaYoutube />
          </a>

          <a
            href={mixtape.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-50"
          >
            <FaInstagram />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}