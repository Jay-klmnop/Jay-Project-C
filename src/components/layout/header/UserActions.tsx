import { InternalLink } from '@/components/common';
import { USER_ACTIONS_LINKS } from '@/constants/navigation';

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

        return link.to ? (
          <InternalLink key={link.to} to={link.to}>
            <button>{link.label}</button>
          </InternalLink>
        ) : null;
      })}
    </div>
  );
}
