import { ListHeartIcon, ShoppingBagIcon, UserSquareIcon } from '@phosphor-icons/react';

export const MAIN_NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
];

export const SUB_NAV_ITEMS = [
  { to: '/t-shirts', label: 'T-shirts' },
  { to: '/sweatshirts', label: 'Sweatshirts' },
  { to: '/hoodies', label: 'Hoodies' },
  { to: '/jackets', label: 'Jackets' },
];

export const USER_ACTIONS_LINKS = [
  { to: '/liked', IconComponent: ListHeartIcon },
  { to: '/cart', IconComponent: ShoppingBagIcon },
  { to: '/profile', IconComponent: UserSquareIcon },
];
