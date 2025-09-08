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
