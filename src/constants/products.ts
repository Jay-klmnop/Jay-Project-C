import _ from 'lodash';
import type { ProductType } from '@/types';

export type ProductFilterType = 'featured' | 'recommended' | 'discounted';

export const FEATURED_SECTION_FILTERS: Record<
  ProductFilterType,
  (products: ProductType[]) => ProductType[]
> = {
  featured: (products) => products.filter((p) => p.tags.includes('featured')),
  recommended: (products) => _.shuffle(products).slice(0, 8),
  discounted: (products) => products.filter((p) => p.discountPrice),
};

export const FEATURED_SECTION_FILTER_NAMES = Object.keys(
  FEATURED_SECTION_FILTERS
) as ProductFilterType[];

export const ITEMS_PER_PAGE = 20;

export type SortOptionType = 'release_asc' | 'release_desc' | 'price_asc' | 'price_desc';

export const SORT_OPTIONS = {
  release_asc: 'oldest first',
  release_desc: 'newest first',
  price_asc: 'price: low to high',
  price_desc: 'price: high to low',
} as const;

export const SORT_OPTION_NAMES = Object.keys(SORT_OPTIONS) as SortOptionType[];

export type CategoryFilterType = 'tshirts' | 'sweatshirts' | 'hoodies' | 'outwear';

export const CATEGORIES = {
  tshirts: 'tees',
  sweatshirts: 'sweats',
  hoodies: 'hoodies',
  outwear: 'outwear',
} as const;

export const CATEGORY_FILTER_NAMES = Object.keys(CATEGORIES) as CategoryFilterType[];

export type SizeFilterType = 'small' | 'medium' | 'large' | 'extra_large';

export const SIZES = {
  small: 'S',
  medium: 'M',
  large: 'L',
  extra_large: 'XL',
} as const;

export const SIZE_FILTER_NAMES = Object.keys(SIZES) as SizeFilterType[];

export type ColorFilterType = 'black' | 'white';

export const COLORS = ['black', 'white'] as const;
