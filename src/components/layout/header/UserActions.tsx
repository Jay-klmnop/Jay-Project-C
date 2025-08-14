import InternalLink from '../../common/link/InternalLink';
import { ListHeartIcon, ShoppingBagIcon, UserSquareIcon } from '@phosphor-icons/react';

interface UserActionsProps {
  className?: string;
}

export default function UserActions({ className }: UserActionsProps) {
  return (
    <div className={`flex flex-row gap-4 ${className ?? ''}`}>
      <InternalLink to='/liked'>
        <ListHeartIcon size={32} />
      </InternalLink>
      <InternalLink to='/cart'>
        <ShoppingBagIcon size={32} />
      </InternalLink>
      <InternalLink to='/profile'>
        <UserSquareIcon size={32} />
      </InternalLink>
    </div>
  );
}
