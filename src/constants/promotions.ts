import promoImage2 from '@/assets/banner/banner2.webp';
import promoImage3 from '@/assets/banner/banner3.webp';
import promoImage4 from '@/assets/banner/banner4.webp';
import promoImage5 from '@/assets/banner/banner5.webp';

export interface PromoItemType {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export const PROMO_ITEMS: Record<string, PromoItemType> = {
  first: {
    id: 1,
    title: 'Signature Outwear',
    description: 'Engineered for the everyday',
    link: '/products/outwear',
    imageUrl: promoImage2,
  },
  second: {
    id: 2,
    title: 'New T-shirts Collection',
    description: 'Explore the Forest series',
    link: '/products/t-shirts',
    imageUrl: promoImage3,
  },
  third: {
    id: 3,
    title: 'Street Sign Graphic Hoodies',
    description: 'New graphic hoodies available',
    link: '/products/hoodies',
    imageUrl: promoImage4,
  },
  fourth: {
    id: 4,
    title: 'Autumn Sale Coming Soon',
    description: 'Up to 30% off on selected items',
    link: '/on-sale',
    imageUrl: promoImage5,
  },
};
