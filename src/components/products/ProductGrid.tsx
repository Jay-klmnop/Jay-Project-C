'use client';

import ProductCard from './ProductCard';
import { ProductType } from '@/types';

interface ProductGridProps {
  products: ProductType[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <div>No Items to display.</div>;
  }

  return (
    <div className='mx-4 my-4 grid flex-[3] grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
      {products.map((product) => {
        if (!product) return null;
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
