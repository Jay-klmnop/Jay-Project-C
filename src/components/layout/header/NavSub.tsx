'use client';

import { SUB_NAV_ITEMS } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex h-6 w-full flex-row items-center justify-around px-4 ${className ?? ''}`}>
      {SUB_NAV_ITEMS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          data-state={pathname === href ? 'active' : 'inactive'}
          className='filter-button flex h-full w-full flex-row flex-nowrap items-center justify-center gap-x-2 px-2 py-2 transition'
        >
          <button className='whitespace-nowrap'> {label}</button>
        </Link>
      ))}
    </nav>
  );
}
