import SectionReveal from './SectionReveal';
import { FaSpotify, FaApple, FaItunesNote } from 'react-icons/fa6';
import { releases } from '@/data/siteContent';

export default function Discography() {
  return (
    <section
      id="discography"
      className="relative flex min-h-screen items-start justify-center overflow-visible bg-white px-5 pt-28 pb-16 text-center md:items-center md:px-6 md:py-24"
    >
      <SectionReveal className="relative z-10 flex w-full max-w-7xl flex-col items-center">
        <h2 className="text-[54px] font-light lowercase leading-none tracking-[0.16em] text-black md:text-[76px] md:tracking-[0.38em]">
          discography
        </h2>

        <div className="mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-5 md:mt-10 md:grid-cols-5 md:gap-10">
          {releases.map((release) => (
            <div key={release.title} className="flex flex-col items-center">
              <div className="aspect-square w-full overflow-hidden bg-neutral-100 shadow-[0_15px_45px_rgba(0,0,0,0.10)]">
                <img
                  src={release.image}
                  alt={release.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/80 md:mt-4 md:text-[13px] md:tracking-[0.28em]">
                {release.title}
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-neutral-400 md:text-[10px]">
                {release.year}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-8 text-[20px] text-black md:mt-12 md:gap-12 md:text-[28px]">
          <FaSpotify className="transition duration-500 hover:scale-110 hover:opacity-40" />
          <FaApple className="transition duration-500 hover:scale-110 hover:opacity-40" />
          <FaItunesNote className="transition duration-500 hover:scale-110 hover:opacity-40" />
        </div>
      </SectionReveal>
    </section>
  );
}