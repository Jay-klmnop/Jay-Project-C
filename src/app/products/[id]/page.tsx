import { notFound } from 'next/navigation';
import { ProductDetailCard } from '@/components/products';
import { getProductById } from '@/lib/data';

interface ProductDetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className='p-20 text-center'>
      <ProductDetailCard product={product} />
    </div>
  );
}
