import { useFetch } from '@/hooks/useFetch.ts';
import ProductCard from './ProductCard';

interface ProductListProps {
  addToCart: (product: DummyJsonProductType) => void;
}

interface DummyJsonProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  thumbnail: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductList({ addToCart }: ProductListProps) {
  const API_URL = `https://dummyjson.com/products?limit=100`;

  interface DummyJsonResponse {
    products: DummyJsonProductType[];
    total: number;
    skip: number;
    limit: number;
  }

  const { data: apiResponse, loading, error } = useFetch<DummyJsonResponse>(API_URL);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  const products = apiResponse?.products || [];

  return (
    <div className='grid flex-[3] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            name: product.title,
            price: product.price,
            img: product.thumbnail,
          }}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}
