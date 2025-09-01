import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/RTK/store';
import { fetchProducts } from '@/RTK';
import { useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

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
    <div className='mx-4 my-4 grid flex-[3] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
      {products?.map((product) => {
        const representativeVariant = product.variants[0];

        if (!representativeVariant) return null;

        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
