'use client';

import { CategoryFilter, SizeFilter, SortOption } from '@/components/products';
import type { CategoryFilterType, SizeFilterType, SortOptionType } from '@/constants';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryToggle = useCallback(
    (category: CategoryFilterType) => {
      const params = new URLSearchParams(searchParams.toString());
      const currentCategories = params.getAll('category');

      const newCategories = currentCategories.includes(category)
        ? currentCategories.filter((c) => c !== category)
        : [...currentCategories, category];

      params.delete('category');
      if (newCategories.length > 0) {
        newCategories.forEach((c) => params.append('category', c));
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleSizeToggle = useCallback(
    (size: SizeFilterType) => {
      const params = new URLSearchParams(searchParams.toString());
      const currentSizes = params.getAll('size');

      const newSizes = currentSizes.includes(size)
        ? currentSizes.filter((c) => c !== size)
        : [...currentSizes, size];

      params.delete('size');
      if (newSizes.length > 0) {
        newSizes.forEach((c) => params.append('size', c));
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleOptionToggle = useCallback(
    (sort: SortOptionType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('sort', sort);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const selectedCategories = searchParams.getAll('category') as CategoryFilterType[];
  const selectedSizes = searchParams.getAll('size') as SizeFilterType[];
  const selectedSort = (searchParams.get('sort') || 'release_desc') as SortOptionType;

  return (
    <aside className='flex flex-col gap-4 p-4'>
      <div className='filter-group items-start'>
        <h2 className='w-12 font-black md:w-14'>sort by:</h2>
        <SortOption
          className='flex flex-col'
          selectedOption={selectedSort}
          onToggleOption={handleOptionToggle}
        />
      </div>
      <div className='filter-group items-start'>
        <h2 className='w-12 font-black md:w-14'>filter:</h2>
        <div className='flex flex-col justify-center gap-2'>
          <CategoryFilter
            selectedCategories={selectedCategories}
            onToggleCategory={handleCategoryToggle}
          />
          <SizeFilter selectedSizes={selectedSizes} onToggleSize={handleSizeToggle} />
        </div>
      </div>
    </aside>
  );
}
