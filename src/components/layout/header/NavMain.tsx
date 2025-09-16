'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MAIN_NAV_LINKS } from '@/constants';
import Link from 'next/link';

interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`flex flex-row items-center gap-4 ${className ?? ''}`}>
      {MAIN_NAV_LINKS.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          data-state={pathname === href ? 'active' : 'inactive'}
          className='toggle-button'
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
