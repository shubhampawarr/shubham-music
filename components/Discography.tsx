import SectionReveal from './SectionReveal';
import { FaSpotify, FaApple, FaItunesNote } from 'react-icons/fa6';
import { releases } from '@/data/siteContent';

export default function Discography() {
  return (
    <section
      id="discography"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-24 text-center md:px-6"
    >
      <SectionReveal className="relative z-10 flex w-full max-w-7xl flex-col items-center">
        <h2 className="text-[38px] font-light lowercase tracking-[0.28em] text-black md:text-[76px] md:tracking-[0.38em]">
          discography
        </h2>

        <div className="mt-8 grid w-full grid-cols-2 gap-5 md:mt-10 md:grid-cols-5 md:gap-10">
          {releases.map((release) => (
            <div key={release.title} className="flex flex-col items-center">
              <div className="aspect-square w-full overflow-hidden bg-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src={release.image}
                  alt={release.title}
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>

              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-black/80 md:text-[13px] md:tracking-[0.28em]">
                {release.title}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                {release.year}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-10 text-[24px] text-black md:mt-12 md:gap-12 md:text-[28px]">
          <FaSpotify className="transition duration-500 hover:scale-110 hover:opacity-40" />
          <FaApple className="transition duration-500 hover:scale-110 hover:opacity-40" />
          <FaItunesNote className="transition duration-500 hover:scale-110 hover:opacity-40" />
        </div>
      </SectionReveal>
    </section>
  );
}