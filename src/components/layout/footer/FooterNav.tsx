'use client';

import { useEffect, useState } from 'react';
import { FOOTER_NAV_LINKS } from '@/constants';
import Link from 'next/link';

interface FooterNavProps {
  className?: string;
}

export default function FooterNav({ className }: FooterNavProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`flex flex-row items-center gap-4 ${className ?? ''}`}>
      {FOOTER_NAV_LINKS.map(({ href, label }) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
