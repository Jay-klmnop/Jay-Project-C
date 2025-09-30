'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useEffect } from 'react';
import { ProductGrid, useAllProductsQuery } from '@/components/products';
import type { CategoryFilterType, SizeFilterType, SortOptionType } from '@/constants';
import { useIntersectionObserver } from '@/hooks';
import { GridSkeleton } from '@/components/common';
import { ErrorBoundary } from '@suspensive/react';

export function ProductsView() {
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    const categories = searchParams.getAll('category') as CategoryFilterType[];
    const sizes = searchParams.getAll('size') as SizeFilterType[];

    const sort = searchParams.get('sort') as SortOptionType;
    const query = searchParams.get('q') ?? '';

    return { category: categories, size: sizes, sort, color: [] as string[], query };
  }, [searchParams]);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAllProductsQuery(filters);

  const allProducts = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  const { ref: loadMoreRef, entry } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (error) throw error;

  return (
    <ErrorBoundary fallback={<div className='m-4 pt-14'>Error loading products</div>}>
      <ProductGrid products={allProducts} />
      <div ref={loadMoreRef} />
      {isFetchingNextPage && <GridSkeleton count={4} />}
    </ErrorBoundary>
  );
}
