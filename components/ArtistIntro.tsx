import SectionReveal from './SectionReveal';
import { artist } from '@/data/siteContent';

export default function ArtistIntro() {
  return (
    <section
      id="music"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-24 text-black md:px-8"
    >
      <SectionReveal className="grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_0.8fr_1.3fr] md:gap-12">
        <div className="flex justify-center md:justify-start">
          <h2 className="text-[42px] font-light tracking-[0.18em] md:text-[82px] md:tracking-[0.38em]">
            {artist.name}
          </h2>
        </div>

        <div className="flex justify-center">
          <img
            src={artist.image}
            alt={artist.name}
            className="h-[320px] w-auto object-contain grayscale md:h-[520px]"
          />
        </div>

        <div className="flex justify-center md:justify-end">
          <p className="max-w-xl text-center text-[15px] leading-8 text-neutral-800 md:text-left md:text-[20px] md:leading-9">
            {artist.bio}
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}