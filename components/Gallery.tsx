'use client';

import { galleryImages } from '@/data/siteContent';

export default function Gallery() {
  const repeatedImages = [...galleryImages, ...galleryImages];

  return (
    <section
      id="gallery"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-24 text-center"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-black/50">
          visual archive
        </p>

        <h2 className="text-[42px] font-light lowercase tracking-[0.28em] text-black md:text-[64px] md:tracking-[0.34em]">
          gallery
        </h2>

        <div className="group mt-12 w-full overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] items-end gap-7 group-hover:[animation-play-state:paused] md:gap-10">
            {repeatedImages.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative h-[300px] w-[210px] shrink-0 overflow-hidden bg-neutral-100 shadow-[0_25px_80px_rgba(0,0,0,0.14)] md:h-[400px] md:w-[280px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}