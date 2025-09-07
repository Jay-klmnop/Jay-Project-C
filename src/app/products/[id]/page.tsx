import { notFound } from 'next/navigation';
import { FeaturedProducts, ProductDetailCard } from '@/components/products';
import { getAllProducts, getProductById } from '@/lib/data';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, allProducts] = await Promise.all([getProductById(params.id), getAllProducts()]);

  if (!product) {
    notFound();
  }

  return (
    <div className='p-20 text-center'>
      {product && <ProductDetailCard product={product} />}
      <FeaturedProducts products={allProducts} />
    </div>
  );
}
