import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/RTK/store';
import { fetchProducts } from '@/RTK';
import _ from 'lodash';
import ProductCard from './ProductCard';

export function FeaturedProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [filter, setFilter] = useState('featured');
  const filters = ['featured', 'recommended', 'discounted'];

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = useMemo(() => {
    const safeProducts = products ?? [];
    if (filter === 'featured') {
      return safeProducts.filter((p) => p.tags.includes('featured'));
    }
    if (filter === 'recommended') {
      return _.shuffle(safeProducts).slice(0, 8);
    }
    if (filter === 'discounted') {
      return safeProducts.filter((p) => p.discountPrice);
    }
    return safeProducts;
  }, [products, filter]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') {
    return (
      <div>
        Error fetching products, please try again <br />
        {error}
      </div>
    );
  }

  return (
    <div className='min-h-96 w-full'>
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
    </div>
  );
}
