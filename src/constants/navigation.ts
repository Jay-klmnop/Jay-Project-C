import {
  DeviceMobileIcon,
  DesktopIcon,
  WatchIcon,
  CameraIcon,
  HeadphonesIcon,
  GameControllerIcon,
  ListHeartIcon,
  ShoppingBagIcon,
  UserSquareIcon,
} from '@phosphor-icons/react';

export const MAIN_NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/blog', label: 'Blog' },
];

export const SUB_NAV_ITEMS = [
  { to: '/phones', label: 'Phones', IconComponent: DeviceMobileIcon },
  { to: '/computers', label: 'Computers', IconComponent: DesktopIcon },
  { to: '/smartwatches', label: 'Smart Watches', IconComponent: WatchIcon },
  { to: '/cameras', label: 'Cameras', IconComponent: CameraIcon },
  { to: '/headphones', label: 'Headphones', IconComponent: HeadphonesIcon },
  { to: '/gaming', label: 'Gaming', IconComponent: GameControllerIcon },
];

export const USER_ACTIONS_LINKS = [
  { to: '/liked', IconComponent: ListHeartIcon },
  { to: '/cart', IconComponent: ShoppingBagIcon },
  { to: '/profile', IconComponent: UserSquareIcon },
];
