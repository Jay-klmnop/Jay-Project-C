import { HeroBanner, PromoBanner } from '@/components/layout';
import { FeaturedProducts } from '@/components/products';
import { getAllProducts } from '@/lib/data';
import { ErrorBoundary } from '@suspensive/react';

const allProducts = await getAllProducts();

export default function HomePage() {
  return (
    <ErrorBoundary fallback={<div className='m-4 pt-14'>Error loading products</div>}>
      <HeroBanner />
      <PromoBanner />
      <FeaturedProducts products={allProducts} />
    </ErrorBoundary>
  );
}
