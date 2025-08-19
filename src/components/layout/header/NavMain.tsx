import { useLocation } from 'react-router-dom';
import { InternalLink } from '@/components/common';
import { MAIN_NAV_LINKS } from '@/constants/navigation';

interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  const location = useLocation();

  return (
    <nav className={`flex flex-row items-center gap-10 ${className ?? ''}`}>
      {MAIN_NAV_LINKS.map(({ to, label }) => (
        <InternalLink
          key={label}
          to={to}
          className={location.pathname === to ? 'text-black' : 'text-gray-400'}
        >
          {label}
        </InternalLink>
      ))}
    </nav>
  );
}
