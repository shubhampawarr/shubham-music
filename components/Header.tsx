'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

import { artist, socials } from '@/data/siteContent';

const navItems = [
  { label: 'music', href: '/music' },
  { label: 'mixtapes', href: '/mixtapes' },
  { label: 'gallery', href: '/gallery' },
  { label: 'connect', href: '/connect' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:justify-center md:px-8 md:py-8">
          <Link
            href="/"
            className="text-[16px] font-light uppercase tracking-[0.38em] text-black md:hidden"
          >
            {artist.name}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black md:hidden"
            aria-label="Open menu"
          >
            <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-white" />
          </button>

          <div className="hidden items-center justify-center gap-10 md:flex">
            {!isHomePage && (
              <Link
                href="/"
                className="text-[15px] lowercase tracking-[0.34em] text-neutral-500 transition hover:text-black"
              >
                home
              </Link>
            )}

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] lowercase tracking-[0.34em] transition ${
                  pathname === item.href
                    ? 'text-black'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </motion.header>

      {open && (
        <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col bg-black text-white md:hidden">
          <div className="flex items-center justify-between px-7 pt-7">
            <h2 className="text-[22px] font-light uppercase tracking-[0.38em]">
              {artist.name}
            </h2>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[34px] font-light leading-none text-white"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-9">
            {!isHomePage && (
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-[18px] font-semibold lowercase tracking-[0.34em] text-white"
              >
                home
              </Link>
            )}

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[18px] font-semibold lowercase tracking-[0.34em] text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-14 pb-12 text-[28px] text-white">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      )}
    </>
  );
}