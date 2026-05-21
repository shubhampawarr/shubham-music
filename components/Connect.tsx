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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-24 text-center md:h-screen md:px-6 md:py-20"
    >
      <SectionReveal className="relative z-10 flex flex-col items-center">
        <h2 className="text-[42px] font-light lowercase tracking-[0.28em] text-black md:text-[72px] md:tracking-[0.38em]">
          connect
        </h2>

        <a
          href={`mailto:${artist.email}`}
          className="mt-5 text-[12px] font-semibold tracking-[0.12em] text-black/80 transition hover:text-black md:text-[15px] md:tracking-[0.22em]"
        >
          {artist.email}
        </a>

        <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.3em] text-black/80 md:text-[13px] md:tracking-[0.38em]">
          STAY TUNED
        </p>

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

        <p className="mt-9 text-[11px] font-semibold uppercase tracking-[0.32em] text-black/70 md:text-[12px] md:tracking-[0.4em]">
          BUILT BY
        </p>

        <div className="relative mt-6 flex items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-[14px] border-black border-r-transparent border-t-transparent [animation-duration:8s] md:h-40 md:w-40 md:border-[18px]" />

          <div className="absolute flex h-14 w-14 items-center justify-center rounded-full border-[8px] border-black bg-white md:h-16 md:w-16 md:border-[10px]">
            <span className="text-[10px] font-semibold tracking-[0.2em] md:text-[12px]">
              {artist.name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 2)}
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-[9px] font-semibold uppercase tracking-[0.24em] text-black/60 md:gap-10 md:text-[10px] md:tracking-[0.34em]">
          <a href="/music" className="transition hover:text-black">
            Identity
          </a>

          <a href="/discography" className="transition hover:text-black">
            Work
          </a>

          <a
            href={`mailto:${artist.email}`}
            className="transition hover:text-black"
          >
            Contact
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}