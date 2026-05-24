import SectionReveal from './SectionReveal';
import { FaSpotify, FaApple } from 'react-icons/fa6';
import { releases } from '@/data/siteContent';

export default function Discography() {
  return (
    <section
      id="discography"
      className="relative flex min-h-screen items-start justify-center overflow-visible bg-white px-5 pt-28 pb-16 text-center md:items-center md:px-6 md:py-24"
    >
      <SectionReveal className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        {/* TITLE */}
        <h2 className="text-[26px] font-semibold lowercase leading-none tracking-[0.16em] text-black md:text-[42px] md:tracking-[0.22em]">
          discography
        </h2>

        {/* GRID */}
        <div className="mt-8 grid w-full max-w-[900px] grid-cols-2 gap-x-4 gap-y-5 md:mt-10 md:grid-cols-5 md:gap-8">
          {releases.map((release) => (
            <div key={release.title} className="flex flex-col items-center">
              <div className="aspect-square w-full overflow-hidden bg-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                <img
                  src={release.image}
                  alt={release.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-black/80 md:mt-3 md:text-[11px] md:tracking-[0.22em]">
                {release.title}
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-neutral-400 md:text-[9px]">
                {release.year}
              </p>
            </div>
          ))}
        </div>

        {/* ICONS */}
        <div className="mt-6 flex items-center justify-center gap-8 text-[18px] text-black md:mt-10 md:gap-10 md:text-[24px]">
          <FaSpotify className="transition duration-500 hover:scale-110 hover:text-[#1DB954]" />

          <FaApple className="transition duration-500 hover:scale-110 hover:text-[#FA233B]" />
        </div>
      </SectionReveal>
    </section>
  );
}