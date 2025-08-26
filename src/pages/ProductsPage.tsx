import ProductList from '@/components/slices/ProductList';

export default function ProductsPage() {
  return (
    <>
      <ProductList addToCart={(product) => console.log('Add to cart:', product)} />
    </>
  );
}
