import { ProductsView } from './ProductsView';
import { GridSkeleton } from '@/components/common';
import { FilterSidebar } from '@/components/products';
import { ErrorBoundary, Suspense } from '@suspensive/react';

export default function ProductsPage() {
  return (
    <div className='pt-14 font-semibold md:grid md:grid-cols-4 md:gap-8 lg:grid-cols-5 xl:grid-cols-7'>
      <div className='md:col-span-1'>
        <ErrorBoundary fallback={<div className='m-4 pt-14'>Error loading filters</div>}>
          <Suspense fallback={<div>loading filters...</div>}>
            <FilterSidebar />
          </Suspense>
        </ErrorBoundary>
      </div>
      <main className='md:col-span-3 lg:col-span-4 xl:col-span-6'>
        <Suspense fallback={<GridSkeleton count={12} />}>
          <ProductsView />
        </Suspense>
      </main>
    </div>
  );
}
