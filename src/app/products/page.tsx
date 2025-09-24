'use client';

import { GridSkeleton } from '@/components/common';
import { useAllProductsQuery } from '@/components/products';
import { useIntersectionObserver } from '@/hooks';
import { useEffect, useMemo } from 'react';
import { ProductsView } from './ProductsView';
import { useSearchParams } from 'next/navigation';
import type { CategoryFilterType, SizeFilterType, SortOptionType } from '@/constants';

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    const categories = searchParams.getAll('category') as CategoryFilterType[];
    const sizes = searchParams.getAll('size') as SizeFilterType[];

    const sort = searchParams.get('sort') as SortOptionType;
    const query = searchParams.get('q') ?? '';

    return { category: categories, size: sizes, sort, color: [] as string[], query };
  }, [searchParams]);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
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

  if (isLoading) {
    return <GridSkeleton count={12} />;
  }

  if (error) return <div className='pt-14'>Error: {error.message}</div>;

  return (
    <ProductsView
      products={allProducts}
      loadMoreRef={loadMoreRef}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
}
