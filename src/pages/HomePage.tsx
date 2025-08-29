import { HeroBanner } from '@/components/layout';
import { PromoBanner } from '@/components/layout';
import { FeaturedProducts } from '@/components/products';

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <PromoBanner />
      <FeaturedProducts />
    </div>
  );
}
