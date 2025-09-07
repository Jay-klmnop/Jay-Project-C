'use client';

import { usePathname } from 'next/navigation';
import { InternalLink } from '@/components/common';
import { MAIN_NAV_LINKS } from '@/constants';

interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex flex-row items-center gap-6 ${className ?? ''}`}>
      {MAIN_NAV_LINKS.map(({ href, label }) => (
        <InternalLink
          key={label}
          href={href}
          className={pathname === href ? 'text-black' : 'text-neutral-800'}
        >
          {label}
        </InternalLink>
      ))}
    </nav>
  );
}
