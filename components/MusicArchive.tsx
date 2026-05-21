'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';
import { releases } from '@/data/siteContent';
import { FaSpotify, FaApple, FaItunesNote } from 'react-icons/fa6';

export default function MusicArchive() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeRelease = releases.find((release) => release.slug === activeSlug);

  return (
    <section className="relative min-h-screen bg-white px-6 pb-24 pt-44 text-black">
      <SectionReveal className="relative z-10 mx-auto max-w-[620px]">
        <h1 className="mb-16 text-center text-[42px] font-light lowercase tracking-[0.36em] md:text-[72px]">
          discography
        </h1>

        <div className="space-y-14">
          {releases.map((release) => {
            const isActive = activeSlug === release.slug;

            return (
              <div key={release.slug}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlug(isActive ? null : release.slug)
                  }
                  className="block w-full text-left transition duration-500 hover:translate-x-2 hover:opacity-60"
                >
                  <h2 className="text-[28px] font-light uppercase tracking-[0.16em] text-black/65 md:text-[36px]">
                    {release.title}
                  </h2>

                  <p className="mt-2 text-[13px] font-light tracking-[0.28em] text-black/40">
                    {release.year}
                  </p>
                </button>

                {isActive && (
                  <div className="mt-8 border-l border-black/20 pl-6">
                    <p className="text-[15px] leading-8 text-black/55">
                      {release.description}
                    </p>

                    <div className="mt-8 flex items-center gap-5 rounded-2xl bg-black/75 p-4 text-white shadow-[0_25px_80px_rgba(0,0,0,0.16)]">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="h-24 w-24 rounded-xl object-cover grayscale"
                      />

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                          Preview
                        </p>

                        <p className="mt-2 text-[16px] font-semibold uppercase tracking-[0.08em]">
                          {release.title}
                        </p>

                        <p className="mt-1 text-[12px] text-white/55">
                          Artist Name
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-8 text-[24px] text-black">
                      <a
                        href="#"
                        className="transition hover:scale-110 hover:opacity-40"
                      >
                        <FaSpotify />
                      </a>

                      <a
                        href="#"
                        className="transition hover:scale-110 hover:opacity-40"
                      >
                        <FaApple />
                      </a>

                      <a
                        href="#"
                        className="transition hover:scale-110 hover:opacity-40"
                      >
                        <FaItunesNote />
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