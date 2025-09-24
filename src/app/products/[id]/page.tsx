import { notFound } from 'next/navigation';
import { ProductDetailCard } from '@/components/products';
import { getProductById } from '@/lib/data';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import { DetailPageSkeleton } from '@/components/common';

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
    <ErrorBoundary fallback={<div className='m-4 pt-14'>Error loading products</div>}>
      <Suspense fallback={<DetailPageSkeleton />}>
        <div className='p-20 text-center'>
          <ProductDetailCard product={product} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
