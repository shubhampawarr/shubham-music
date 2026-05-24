'use client';

import { galleryImages } from '@/data/siteContent';

export default function Gallery() {
  const repeatedImages = [...galleryImages, ...galleryImages];

  return (
    <section
      id="gallery"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-24 text-center"
    >
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        {/* SUBTITLE */}
        <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-black/50">
          visual archive
        </p>

        {/* TITLE */}
        <h2 className="text-[26px] font-semibold lowercase tracking-[0.16em] text-black md:text-[42px] md:tracking-[0.22em]">
          gallery
        </h2>

        {/* MARQUEE */}
        <div className="group mt-10 w-full overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] items-end gap-5 group-hover:[animation-play-state:paused] md:gap-7">
            {repeatedImages.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative h-[250px] w-[180px] shrink-0 overflow-hidden bg-neutral-100 shadow-[0_18px_55px_rgba(0,0,0,0.10)] md:h-[340px] md:w-[230px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105 md:grayscale md:hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}