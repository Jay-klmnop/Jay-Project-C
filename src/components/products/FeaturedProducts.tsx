'use client';

import { useMemo, useState } from 'react';
import { ProductType } from '@/types';
import ProductGrid from './ProductGrid';
import {
  FEATURED_SECTION_FILTER_NAMES,
  FEATURED_SECTION_FILTERS,
  ProductFilterType,
} from '@/constants';

interface FeaturedProductsProps {
  products: ProductType[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [filter, setFilter] = useState<ProductFilterType>('featured');

  const filteredProducts = useMemo(() => {
    const filterFunction = FEATURED_SECTION_FILTERS[filter];
    return filterFunction ? filterFunction(products) : products;
  }, [products, filter]);

  return (
    <div className='min-h-96 w-full'>
      <nav className='mx-5 my-4 flex gap-4 text-xs font-black'>
        {FEATURED_SECTION_FILTER_NAMES.map((filterName) => (
          <button
            key={filterName}
            onClick={() => setFilter(filterName)}
            className={`${filter === filterName ? 'text-black' : 'text-neutral-700'} capitalize`}
          >
            {filterName}
          </button>
        ))}
      </nav>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
