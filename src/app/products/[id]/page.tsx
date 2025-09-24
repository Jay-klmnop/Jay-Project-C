import { notFound } from 'next/navigation';
import { ProductDetailCard } from '@/components/products';
import { getProductById } from '@/lib/data';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className='p-20 text-center'>
      <ProductDetailCard product={product} />
    </div>
  );
}
