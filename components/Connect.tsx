'use client';

import SectionReveal from './SectionReveal';
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';
import { artist, socials } from '@/data/siteContent';

const socialLinks = [
  {
    name: 'Instagram',
    href: socials.instagram,
    icon: FaInstagram,
  },
  {
    name: 'YouTube',
    href: socials.youtube,
    icon: FaYoutube,
  },
  {
    name: 'X',
    href: socials.twitter,
    icon: FaXTwitter,
  },
  {
    name: 'LinkedIn',
    href: socials.linkedin,
    icon: FaLinkedinIn,
  },
  {
    name: 'GitHub',
    href: socials.github,
    icon: FaGithub,
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-24 text-center md:px-6 md:py-20"
    >
      <SectionReveal className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        {/* TITLE */}
        <h2 className="mt-10 mb-10 text-center text-[26px] font-semibold lowercase tracking-[0.16em] text-black md:mt-16 md:text-[42px] md:tracking-[0.22em]">
          connect
        </h2>

        {/* EMAIL */}
        <p className="text-[12px] font-semibold tracking-[0.12em] text-black/80 md:text-[15px] md:tracking-[0.22em]">
          {artist.email}
        </p>

        {/* STAY TUNED */}
        <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.3em] text-black/80 md:text-[13px] md:tracking-[0.38em]">
          STAY TUNED
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-7 text-[26px] text-black md:gap-10 md:text-[30px]">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="transition duration-500 hover:scale-110 hover:opacity-40"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* BUILT BY */}
        <div className="mt-14 flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/70 md:text-[12px] md:tracking-[0.4em]">
            BUILT BY
          </p>

          <img
            src="/images/voyce.svg"
            alt="Voyce"
            className="mt-6 h-[110px] w-[110px] animate-spin object-contain [animation-duration:6s] md:h-[140px] md:w-[140px]"
          />
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-10 flex items-center justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/80 md:gap-12 md:text-[13px] md:tracking-[0.28em]">
          <span className="transition hover:text-black">
            Privacy
          </span>

          <span className="transition hover:text-black">
            Terms
          </span>

          <span className="transition hover:text-black">
            Sitemap
          </span>
        </div>
      </SectionReveal>
    </section>
  );
}