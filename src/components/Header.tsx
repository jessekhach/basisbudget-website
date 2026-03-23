'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/guide', label: 'Guide' },
    { href: '/terms', label: 'Terms' },
    { href: '/privacy', label: 'Privacy' },
  ];

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/appicon.png" alt="Basis Budget" width={28} height={28} className="rounded-md" />
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Basis Budget</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden gap-5 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-gray-500 md:hidden" aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-gray-200 px-4 py-2 md:hidden dark:border-gray-700">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
