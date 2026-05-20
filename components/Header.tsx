'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'music', href: '#music' },
  { label: 'discography', href: '#discography' },
  { label: 'mixtapes', href: '#mixtapes' },
  { label: 'connect', href: '#connect' },
];

export default function Header() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHome(window.scrollY > window.innerHeight * 0.45);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full bg-white/75 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-4 py-5 md:py-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {showHome && (
            <a
              href="#home"
              className="group relative text-[11px] font-light lowercase tracking-[0.32em] text-neutral-500 transition duration-300 hover:text-black md:text-[15px] md:tracking-[0.42em]"
            >
              home

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </a>
          )}

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[11px] font-light lowercase tracking-[0.32em] text-neutral-500 transition duration-300 hover:text-black md:text-[15px] md:tracking-[0.42em]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}