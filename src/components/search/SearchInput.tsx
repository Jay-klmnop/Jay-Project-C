'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks';
import { useRouter } from 'next/navigation';

export function SearchInput() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const params = new URLSearchParams();
      params.set('q', debouncedSearchTerm);
      router.replace(`/products?${params.toString()}`);
    } else if (searchTerm === '') {
      router.replace('/products');
    }
  }, [debouncedSearchTerm, router, searchTerm]);

  return (
    <div className='relative m-2 flex flex-1'>
      <input
        type='text'
        className='flex h-8 flex-1 border-b focus:ring-0 focus:outline-none'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}
