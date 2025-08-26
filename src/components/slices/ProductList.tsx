import ProductCard from './ProductCard';
import { useFetch } from '@/hooks/useFetch';
import type { ProductType, ProductVariant } from '@/types/product';

interface ProductListProps {
  addToCart: (product: ProductType, selectedVariant: ProductVariant) => void;
}

export default function ProductList({ addToCart }: ProductListProps) {
  const API_URL = `http://localhost:3001/products`;

  const { data: products, loading, error } = useFetch<ProductType[]>(API_URL);

  if (loading) return <div>Loading products...</div>;
  if (error)
    return (
      <div>
        Error fetching products, please try again <br />
        {error.message}
      </div>
    );

  return (
    <div className='mx-4 my-4 grid flex-[3] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
      {products?.map((product) => {
        const representativeVariant = product.variants[0];

        if (!representativeVariant) return null;

        return (
          <ProductCard
            key={product.id}
            product={product}
            variant={representativeVariant}
            addToCart={() => addToCart(product, representativeVariant)}
          />
        );
      })}
    </div>
  );
}
