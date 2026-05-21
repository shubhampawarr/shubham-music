'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { artist } from '@/data/siteContent';

const navItems = [
  { label: 'music', href: '/music' },
  { label: 'mixtapes', href: '/mixtapes' },
  { label: 'gallery', href: '/gallery' },
  { label: 'connect', href: '/connect' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 md:justify-center md:py-8">
          <Link
            href="/"
            className="text-[16px] font-light uppercase tracking-[0.42em] text-black md:hidden"
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
            {pathname !== '/' && (
              <Link
                href="/"
                className="text-[15px] font-light lowercase tracking-[0.42em] text-neutral-500 transition hover:text-black"
              >
                home
              </Link>
            )}

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-light lowercase tracking-[0.42em] text-neutral-500 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </motion.header>

      {open && (
        <div className="fixed left-0 top-0 z-[9999] flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden bg-white text-black md:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-8 top-7 text-[28px] font-light"
            aria-label="Close menu"
          >
            ×
          </button>

          <div className="flex flex-col items-center justify-center gap-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[18px] lowercase tracking-[0.42em]"
            >
              home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[18px] lowercase tracking-[0.42em]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}