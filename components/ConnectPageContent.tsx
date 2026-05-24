'use client';

import Header from '@/components/Header';
import GrainOverlay from '@/components/GrainOverlay';
import SectionReveal from '@/components/SectionReveal';
import PageFooter from '@/components/PageFooter';
import { artist, socials } from '@/data/siteContent';

import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';

const socialLinks = [
  { name: 'Instagram', href: socials.instagram, icon: FaInstagram },
  { name: 'YouTube', href: socials.youtube, icon: FaYoutube },
  { name: 'X', href: socials.twitter, icon: FaXTwitter },
  { name: 'LinkedIn', href: socials.linkedin, icon: FaLinkedinIn },
  { name: 'GitHub', href: socials.github, icon: FaGithub },
];

export default function ConnectPageContent() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GrainOverlay />
      <Header />

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <SectionReveal className="relative z-10 flex w-full max-w-[440px] flex-col items-center text-center">
          {/* TITLE */}
          <h1 className="text-[42px] font-light lowercase tracking-[0.32em] md:text-[62px]">
            connect
          </h1>

          {/* STAY TUNED */}
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.34em] text-black/70">
            STAY TUNED
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex justify-center gap-7 text-[22px]">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="transition duration-500 hover:scale-110 hover:opacity-40"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* FORM */}
          <form className="mt-12 w-full space-y-5 text-left">
            <div>
              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.34em] text-black/45">
                Purpose
              </label>

              <select className="h-12 w-full border border-black/20 bg-white px-4 text-[12px] tracking-[0.08em] text-black/70 outline-none transition focus:border-black">
                <option>Select intent</option>
                <option>Booking inquiry</option>
                <option>Collaboration</option>
                <option>Press / media</option>
                <option>General inquiry</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.34em] text-black/45">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="h-12 w-full border border-black/20 bg-white px-4 text-[12px] tracking-[0.06em] text-black outline-none transition placeholder:text-black/40 focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.34em] text-black/45">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="h-12 w-full border border-black/20 bg-white px-4 text-[12px] tracking-[0.06em] text-black outline-none transition placeholder:text-black/40 focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.34em] text-black/45">
                Message
              </label>

              <textarea
                placeholder="Context and details"
                rows={4}
                className="w-full resize-none border border-black/20 bg-white px-4 py-4 text-[12px] tracking-[0.06em] text-black outline-none transition placeholder:text-black/40 focus:border-black"
              />
            </div>

            <button
              type="button"
              className="mt-2 border border-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.34em] transition hover:bg-black hover:text-white"
            >
              Send
            </button>
          </form>

          {/* EMAIL TEXT ONLY */}
          <p className="mt-14 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/45">
            {artist.email}
          </p>
        </SectionReveal>
      </section>

      <PageFooter />
    </main>
  );
}