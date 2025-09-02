import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { type RootState, type AppDispatch, addToCart, fetchProductById } from '@/RTK';
import { FeaturedProducts, ProductDetailCard } from '@/components/products';
import { DetailPageSkeleton } from '@/components/common';
import type { ProductVariant } from '@/types';
import { useEffect } from 'react';

export default function ProductDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  const product = useSelector((state: RootState) => state.products.currentProduct);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  const handleAddToCart = (selectedVariant: ProductVariant) => {
    if (!product) return;
    dispatch(addToCart({ product, selectedVariant }));
  };

  if (status === 'loading') {
    return <DetailPageSkeleton />;
  }

  if (status === 'failed') {
    return (
      <div>
        Error fetching products, please try again <br />
        {error}
      </div>
    );
  }

  if (!product || product.id !== id) {
    return <DetailPageSkeleton />;
  }

  return (
    <div className='p-20 text-center'>
      {product && <ProductDetailCard product={product} onAddToCart={handleAddToCart} />}
      <FeaturedProducts />
    </div>
  );
}
