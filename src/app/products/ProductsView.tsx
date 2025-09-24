'use client';

import { type RefObject } from 'react';
import { GridSkeleton } from '@/components/common';
import { FilterSidebar, ProductGrid } from '@/components/products';
import { ProductType } from '@/types';

interface ProductsViewProps {
  products: ProductType[];
  loadMoreRef: RefObject<HTMLDivElement>;
  isFetchingNextPage: boolean;
}

export function ProductsView({ products, loadMoreRef, isFetchingNextPage }: ProductsViewProps) {
  return (
    <div className='pt-14 font-semibold md:grid md:grid-cols-4 md:gap-8'>
      <div className='md:col-span-1'>
        <FilterSidebar />
      </div>
      <main className='md:col-span-3'>
        {products.length > 0 ? (
          <>
            <ProductGrid products={products} />
            <div ref={loadMoreRef} />
            {isFetchingNextPage && <GridSkeleton />}
          </>
        ) : (
          <div>
            <h2>No results found.</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
