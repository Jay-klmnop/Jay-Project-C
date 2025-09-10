import { FeaturedProducts, ProductGrid } from '@/components/products';
import { getAllProducts } from '@/lib/data';

export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  return (
    <div className='pt-14'>
      <ProductGrid products={allProducts} />
      <FeaturedProducts products={allProducts} />
    </div>
  );
}
