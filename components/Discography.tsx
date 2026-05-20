import SectionReveal from './SectionReveal';
import { FaSpotify, FaApple, FaItunesNote } from 'react-icons/fa6';

const works = [
  {
    title: 'AI LAB',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'WEB SYSTEMS',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'DATA WORK',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'NYTHERA',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'EXPERIMENTS',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Discography() {
  return (
    <section
      id="mixtapes"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-24 text-center md:h-screen md:px-6 md:py-0"
    >
      <SectionReveal className="relative z-10 flex w-full max-w-7xl flex-col items-center">
        <h2 className="text-[38px] font-light lowercase tracking-[0.28em] text-black md:text-[76px] md:tracking-[0.38em]">
          discography
        </h2>

        <div className="mt-8 grid w-full grid-cols-2 gap-5 md:mt-10 md:grid-cols-5 md:gap-10">
          {works.map((work) => (
            <div key={work.title} className="flex flex-col items-center">
              <div className="aspect-square w-full overflow-hidden bg-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>

              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-black/80 md:text-[13px] md:tracking-[0.28em]">
                {work.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-10 text-[24px] text-black md:mt-12 md:gap-12 md:text-[28px]">
          <a href="#" className="transition duration-500 hover:scale-110 hover:opacity-40">
            <FaSpotify />
          </a>

          <a href="#" className="transition duration-500 hover:scale-110 hover:opacity-40">
            <FaApple />
          </a>

          <a href="#" className="transition duration-500 hover:scale-110 hover:opacity-40">
            <FaItunesNote />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}