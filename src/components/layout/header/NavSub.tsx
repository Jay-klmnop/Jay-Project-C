import { InternalLink } from '@/components/common';
import { SUB_NAV_ITEMS } from '@/constants/navigation';

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  return (
    <nav
      className={`flex w-full flex-row items-center justify-around divide-x divide-gray-400 bg-zinc-900 px-28 text-white ${className ?? ''}`}
    >
      {SUB_NAV_ITEMS.map(({ to, label, IconComponent }) => (
        <InternalLink
          key={to}
          to={to}
          className='flex h-full w-full flex-row items-center justify-center gap-x-2 px-4 py-2 opacity-70 transition hover:opacity-100'
        >
          <IconComponent size={24} />
          <span className='text-sm'> {label}</span>
        </InternalLink>
      ))}
    </nav>
  );
}
