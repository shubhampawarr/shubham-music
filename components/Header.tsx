'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'music', href: '/music' },
  { label: 'mixtapes', href: '/mixtapes' },
  { label: 'gallery', href: '/gallery' },
  { label: 'connect', href: '/connect' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full bg-white/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 md:py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-10">
          {pathname !== '/' && (
            <Link
              href="/"
              className="group relative text-[9px] font-light lowercase tracking-[0.22em] text-neutral-500 transition duration-300 hover:text-black md:text-[15px] md:tracking-[0.42em]"
            >
              home

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full md:-bottom-2" />
            </Link>
          )}

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[9px] font-light lowercase tracking-[0.22em] text-neutral-500 transition duration-300 hover:text-black md:text-[15px] md:tracking-[0.42em]"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full md:-bottom-2" />
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}