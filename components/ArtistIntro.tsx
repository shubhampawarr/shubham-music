import SectionReveal from './SectionReveal';

export default function ArtistIntro() {
  return (
    <section
      id="music"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 text-black md:h-screen md:px-8 md:py-0"
    >
      <SectionReveal className="grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_0.8fr_1.3fr] md:gap-12">
        <div className="flex justify-center md:justify-start">
          <h2 className="text-[42px] font-light tracking-[0.18em] md:text-[82px] md:tracking-[0.38em]">
            SHUBHAM
          </h2>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/shubham.jpeg"
            alt="Shubham"
            className="h-[320px] w-auto object-contain grayscale md:h-[520px]"
          />
        </div>

        <div className="flex justify-center md:justify-end">
          <p className="max-w-xl text-center text-[15px] leading-8 text-neutral-800 md:text-left md:text-[20px] md:leading-9">
            Shubham Pawar is a Data Science and Artificial Intelligence graduate
            building at the intersection of AI, web technology, creative systems,
            and digital storytelling. His work blends analytical thinking with
            design-led execution, focusing on practical projects, intelligent
            tools, and future-facing online experiences.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}