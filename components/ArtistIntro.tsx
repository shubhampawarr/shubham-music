import SectionReveal from './SectionReveal';
import { artist } from '@/data/siteContent';

export default function ArtistIntro() {
  const expandedBio = `Shubham Pawar is a Data Science and Artificial Intelligence graduate building at the intersection of AI, web technology, creative systems, and digital storytelling.`;

  return (
    <section
      id="music"
      className="relative min-h-screen overflow-hidden bg-white px-6 text-black md:px-10"
    >
      {/* floor line */}
      <div className="absolute bottom-0 left-0 z-30 h-[8px] w-full bg-black md:h-[10px]" />

      <SectionReveal className="relative z-10 flex min-h-screen w-full flex-col items-center justify-between pt-24 pb-2 md:grid md:grid-cols-[0.95fr_0.8fr_1.15fr] md:items-end md:pt-0">
        
        {/* MOBILE NAME / DESKTOP NAME */}
        <div className="order-1 flex w-full justify-start md:order-1 md:justify-start md:pb-[28vh]">
          <h2 className="text-[18px] font-light uppercase leading-none tracking-[0.42em] text-black md:text-[78px] md:tracking-[0.34em]">
            {artist.name}
          </h2>
        </div>

        {/* MOBILE TEXT / DESKTOP TEXT */}
        <div className="order-2 mt-2 flex justify-center md:order-3 md:mt-0 md:justify-end md:pb-[9vh]">
          <p className="max-w-[320px] text-center text-[13px] leading-7 text-neutral-800 md:max-w-[520px] md:text-left md:text-[22px] md:leading-[1.65]">
            {expandedBio}
          </p>
        </div>

        {/* IMAGE */}
        <div className="order-3 relative mt-2 flex items-end justify-center md:order-2 md:mt-0 md:h-screen">
          <img
            src={artist.image}
            alt={artist.name}
            className="relative z-10 h-[330px] w-auto object-contain grayscale md:h-[560px]"
          />
        </div>
      </SectionReveal>
    </section>
  );
}