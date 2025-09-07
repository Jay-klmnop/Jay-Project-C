import { HeroBanner, PromoBanner } from '@/components/layout';
import { FeaturedProducts } from '@/components/products';
import { getAllProducts } from '@/lib/data';

const allProducts = await getAllProducts();

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <PromoBanner />
      <FeaturedProducts products={allProducts} />
    </div>
  );
}
