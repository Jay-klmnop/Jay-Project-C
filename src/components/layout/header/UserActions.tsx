import { USER_ACTIONS_LINKS } from '@/constants';
import Link from 'next/link';

interface UserActionsProps {
  className?: string;
  onCartClick: () => void;
}

export default function UserActions({ className, onCartClick }: UserActionsProps) {
  return (
    <div className={`flex flex-row items-center gap-4 ${className ?? ''}`}>
      {USER_ACTIONS_LINKS.map((link) => {
        if (link.type === 'action' && link.action === 'toggleCart') {
          return (
            <button key={link.label} onClick={onCartClick}>
              {link.label}
            </button>
          );
        }

        return link.href ? (
          <Link key={link.href} href={link.href}>
            <button>{link.label}</button>
          </Link>
        ) : null;
      })}
    </div>
  );
}
