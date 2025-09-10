'use client';

import { usePathname } from 'next/navigation';
import { MAIN_NAV_LINKS } from '@/constants';
import Link from 'next/link';

interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex flex-row items-center gap-6 ${className ?? ''}`}>
      {MAIN_NAV_LINKS.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          data-state={pathname === href ? 'active' : 'inactive'}
          className='filter-button'
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
