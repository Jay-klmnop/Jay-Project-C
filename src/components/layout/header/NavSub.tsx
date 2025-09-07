import { InternalLink } from '@/components/common';
import { SUB_NAV_ITEMS } from '@/constants';

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  return (
    <nav className={`flex h-6 w-full flex-row items-center justify-around px-4 ${className ?? ''}`}>
      {SUB_NAV_ITEMS.map(({ href, label }) => (
        <InternalLink
          key={href}
          href={href}
          className='flex h-full w-full flex-row flex-nowrap items-center justify-center gap-x-2 px-2 py-2 transition'
        >
          <button className='whitespace-nowrap'> {label}</button>
        </InternalLink>
      ))}
    </nav>
  );
}
