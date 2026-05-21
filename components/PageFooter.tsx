import Link from 'next/link';
import { artist } from '@/data/siteContent';

export default function PageFooter() {
  return (
    <footer className="relative z-10 bg-black px-6 py-7 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-white/75 md:text-[12px]">
          {artist.name}
        </p>

        <div className="flex gap-8 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/65 md:text-[12px]">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>

          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}