import { fetchProductById } from '@/RTK';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch, RootState } from '@/RTK/store';
import { FeaturedProducts } from '@/components/products';
import ProductDetail from '@/components/products/ProductDetail';

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const product = useSelector((state: RootState) => state.products.currentProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  if (status === 'loading' || !product) return <div>Loading...</div>;
  if (status === 'failed') {
    return (
      <div>
        Error fetching products, please try again <br />
        {error}
      </div>
    );
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className='p-20 text-center'>
      {product && <ProductDetail product={product} />}
      <FeaturedProducts />
    </div>
  );
}
