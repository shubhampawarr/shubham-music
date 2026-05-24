'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';
import { releases } from '@/data/siteContent';
import { FaSpotify, FaApple } from 'react-icons/fa6';

export default function MusicArchive() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-white px-6 pb-16 pt-32 text-black">
      <SectionReveal className="relative z-10 mx-auto max-w-[520px]">
        {/* TITLE */}
        <h1 className="mb-12 text-center text-[26px] font-semibold lowercase tracking-[0.16em] text-black md:text-[42px] md:tracking-[0.22em]">
          discography
        </h1>

        {/* RELEASES */}
        <div className="space-y-10">
          {releases.map((release) => {
            const isActive = activeSlug === release.slug;

            return (
              <div key={release.slug}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlug(isActive ? null : release.slug)
                  }
                  className="block w-full text-left transition duration-500 hover:translate-x-1 hover:opacity-60"
                >
                  <h2 className="break-words text-[18px] font-light uppercase tracking-[0.08em] text-black/70 md:text-[24px] md:tracking-[0.12em]">
                    {release.title}
                  </h2>

                  <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-black/40">
                    {release.year}
                  </p>
                </button>

                {isActive && (
                  <div className="mt-5 border-l border-black/15 pl-4">
                    {/* DESCRIPTION */}
                    <p className="text-[13px] leading-7 text-black/55">
                      {release.description}
                    </p>

                    {/* PREVIEW CARD */}
                    <div className="mt-6 flex items-center gap-4 rounded-2xl bg-black/80 p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="h-20 w-20 rounded-xl object-cover grayscale"
                      />

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">
                          Preview
                        </p>

                        <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.06em]">
                          {release.title}
                        </p>

                        <p className="mt-1 text-[11px] text-white/55">
                          Shubham
                        </p>
                      </div>
                    </div>

                    {/* ICONS */}
                    <div className="mt-6 flex gap-6 text-[20px] text-black">
                      <a
                        href="#"
                        className="transition duration-300 hover:scale-110 hover:text-[#1DB954]"
                      >
                        <FaSpotify />
                      </a>

                      <a
                        href="#"
                        className="transition duration-300 hover:scale-110 hover:text-[#FA233B]"
                      >
                        <FaApple />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}