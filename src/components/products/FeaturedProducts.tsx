import { useMemo, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import type { ProductType } from '@/types/product';
import _ from 'lodash';
import ProductCard from './ProductCard';

export function FeaturedProducts() {
  const [filter, setFilter] = useState('featured');
  const filters = ['featured', 'recommended', 'discounted'];

  const API_URL = `http://localhost:3001/products`;

  const { data: products, loading, error } = useFetch<ProductType[]>(API_URL);

  const filteredProducts = useMemo(() => {
    const safeProducts = products ?? [];
    if (filter === 'featured') {
      return safeProducts.filter((p) => p.tags.includes('featured'));
    }
    if (filter === 'recommended') {
      return _.shuffle(safeProducts).slice(0, 8);
    }
    if (filter === 'discounted') {
      return safeProducts.filter((p) => p.discountPrice != 0 || null);
    }
    return safeProducts;
  }, [products, filter]);

  if (loading) return <div>Loading products...</div>;
  if (error)
    return (
      <div>
        Error fetching products, please try again <br />
        {error.message}
      </div>
    );

  return (
    <>
      <nav className='mx-5 my-4 flex gap-4 text-xs font-black'>
        {filters.map((filterName) => (
          <button
            key={filterName}
            onClick={() => setFilter(filterName)}
            className={`${filter === filterName ? 'text-black' : 'text-neutral-700'} capitalize`}
          >
            {filterName}
          </button>
        ))}
      </nav>
      <div className='mx-4 my-4 grid flex-[3] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
