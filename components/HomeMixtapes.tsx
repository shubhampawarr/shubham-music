'use client';

import SectionReveal from './SectionReveal';
import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import { mixtape } from '@/data/siteContent';

export default function HomeMixtapes() {
  return (
    <section
      id="mixtapes"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-20 text-center md:h-screen"
    >
      <SectionReveal className="flex w-full max-w-4xl flex-col items-center">
        <h2 className="text-[42px] font-light lowercase tracking-[0.26em] text-black md:text-[76px] md:tracking-[0.38em]">
          {mixtape.title}
        </h2>

        <div className="mt-8 flex h-[330px] w-full max-w-[92vw] items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_25px_90px_rgba(0,0,0,0.10)] md:mt-12 md:h-[390px] md:w-[720px]">
          <div className="flex flex-col items-center">
            <div className="relative h-[80px] w-[170px] rounded-md border-[7px] border-black bg-white shadow-[0_18px_35px_rgba(0,0,0,0.22)] md:h-[120px] md:w-[240px] md:border-[8px]">
              <div className="absolute left-0 top-0 h-5 w-full bg-black/90 md:h-7" />
              <div className="absolute left-6 top-9 h-8 w-8 rounded-full border-[6px] border-black md:left-8 md:top-11 md:h-12 md:w-12 md:border-[7px]" />
              <div className="absolute right-6 top-9 h-8 w-8 rounded-full border-[6px] border-black md:right-8 md:top-11 md:h-12 md:w-12 md:border-[7px]" />
              <div className="absolute left-1/2 top-9 h-8 w-14 -translate-x-1/2 rounded-sm border border-black/40 bg-black/10 md:top-11 md:h-12 md:w-20" />
            </div>

            <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.38em] text-black/80 md:mt-8 md:text-[14px]">
              {mixtape.status}
            </p>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-10 text-[28px] text-black md:mt-10">
          <a href={mixtape.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>

          <a href={mixtape.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}