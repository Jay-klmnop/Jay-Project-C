import { useSelector } from 'react-redux';
import type { RootState } from '@/RTK/store';
import ProductCard from './ProductCard';
import _ from 'lodash';
import { CardSkeleton } from '@/components/common';
import { FeaturedProducts } from './FeaturedProducts';

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  let content;

  if (status === 'loading' || status === 'idle') {
    content = Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />);
  } else if (status === 'succeeded') {
    content = products.map((product) => <ProductCard key={product.id} product={product} />);
  } else if (status === 'failed') {
    content = (
      <div>
        Error fetching products, please try again <br />
        {error}
      </div>
    );
  } else {
    content = <div>No products found</div>;
  }

  return (
    <>
      <div className='mx-4 my-4 grid flex-[3] grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
        {content}
      </div>
      <FeaturedProducts />
    </>
  );
}
