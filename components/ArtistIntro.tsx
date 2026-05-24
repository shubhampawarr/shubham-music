import SectionReveal from './SectionReveal';
import { artist } from '@/data/siteContent';

export default function ArtistIntro() {
  const expandedBio = `Shubham Pawar is a Data Science and Artificial Intelligence graduate building at the intersection of AI, web technology, creative systems, and digital storytelling. His work explores intelligent systems, clean interfaces, automation, and cinematic digital experiences.`;

  return (
    <section
      id="music"
      className="relative h-screen overflow-hidden bg-white px-6 text-black md:px-10"
    >
      {/* BLACK LINE OVERLAPPING PHOTO */}
      <div className="absolute bottom-0 left-0 z-[50] h-[10px] w-full bg-black" />

      <SectionReveal className="relative z-10 flex h-full w-full flex-col items-center justify-between pt-24 pb-0 md:grid md:grid-cols-[0.95fr_0.8fr_1.15fr] md:items-center md:pt-0">
        {/* NAME - HIDDEN ON MOBILE */}
        <div className="order-1 hidden w-full justify-start md:order-1 md:flex md:justify-start">
          <h2 className="text-[34px] font-semibold uppercase leading-none tracking-[0.1em] text-black md:text-[46px] md:tracking-[0.12em]">
            {artist.name}
          </h2>
        </div>

        {/* TEXT */}
        <div className="order-2 mt-2 flex justify-center md:order-3 md:mt-0 md:justify-end">
          <p className="max-w-[320px] text-center text-[13px] leading-7 text-neutral-800 md:max-w-[520px] md:text-left md:text-[22px] md:leading-[1.65]">
            {expandedBio}
          </p>
        </div>

        {/* IMAGE */}
        <div className="order-3 relative mt-2 flex items-end justify-center md:order-2 md:mt-0 md:h-screen">
          <img
            src={artist.image}
            alt={artist.name}
            className="relative z-20 h-[330px] w-auto object-contain grayscale md:h-[560px] md:translate-y-[4px]"
          />
        </div>
      </SectionReveal>
    </section>
  );
}