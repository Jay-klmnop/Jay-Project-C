'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PRODUCT_NAV_ITEMS } from '@/constants';
import Link from 'next/link';

interface ProductNavProps {
  className?: string;
}

export default function ProductNav({ className }: ProductNavProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`flex h-6 w-full flex-row items-center justify-around px-4 ${className ?? ''}`}>
      {PRODUCT_NAV_ITEMS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          data-state={pathname === href ? 'active' : 'inactive'}
          className='toggle-button flex h-full w-full flex-row flex-nowrap items-center justify-center gap-x-2 px-2 transition'
        >
          <button className='whitespace-nowrap'> {label}</button>
        </Link>
      ))}
    </nav>
  );
}
