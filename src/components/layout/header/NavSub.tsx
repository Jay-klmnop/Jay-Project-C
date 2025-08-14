import InternalLink from '../../common/link/InternalLink';
import {
  CameraIcon,
  DesktopIcon,
  DeviceMobileIcon,
  GameControllerIcon,
  HeadphonesIcon,
  WatchIcon,
} from '@phosphor-icons/react';

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  const navItems = [
    { to: '/phones', label: 'Phones', IconComponent: DeviceMobileIcon },
    { to: '/computers', label: 'Computers', IconComponent: DesktopIcon },
    {
      to: '/smartwatches',
      label: 'Smart Watches',
      IconComponent: WatchIcon,
    },
    { to: '/cameras', label: 'Cameras', IconComponent: CameraIcon },
    { to: '/headphones', label: 'Headphones', IconComponent: HeadphonesIcon },
    { to: '/gaming', label: 'Gaming', IconComponent: GameControllerIcon },
  ];

  return (
    <div
      className={`flex w-full flex-row items-center justify-around divide-x divide-gray-400 bg-zinc-900 px-28 text-white ${className ?? ''}`}
    >
      {navItems.map(({ to, label, IconComponent }) => (
        <InternalLink
          key={to}
          to={to}
          className='flex h-full w-full flex-row items-center justify-center gap-x-2 px-4 py-2 opacity-70 transition hover:opacity-100'
        >
          <IconComponent size={24} />
          <span className='text-sm'> {label}</span>
        </InternalLink>
      ))}
    </div>
  );
}
