import { InternalLink } from '@/components/common';
import { USER_ACTIONS_LINKS } from '@/constants/navigation';

interface UserActionsProps {
  className?: string;
}

export default function UserActions({ className }: UserActionsProps) {
  return (
    <div className={`flex flex-row items-center gap-4 ${className ?? ''}`}>
      {USER_ACTIONS_LINKS.map(({ to, IconComponent }) => (
        <InternalLink key={to} to={to}>
          <IconComponent size={32} />
        </InternalLink>
      ))}
    </div>
  );
}
