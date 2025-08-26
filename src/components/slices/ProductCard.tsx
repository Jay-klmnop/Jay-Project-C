import type { ProductType, ProductVariant } from '@/types/product';
import { Button } from '@/components/common';

interface ProductCardProps {
  product: ProductType;
  variant: ProductVariant;
  addToCart: () => void;
}

export default function ProductCard({ product, variant, addToCart }: ProductCardProps) {
  const getImageUrl = (path: string): string => {
    return new URL(path, import.meta.url).href;
  };
  const imageUrl = getImageUrl(variant.images.thumbnail);

  return (
    <div className='flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md transition-transform duration-200 ease-in-out hover:-translate-y-1'>
      <img src={imageUrl} alt={product.name} className='h-[150px] w-full rounded-md object-cover' />
      <h3 className='my-2 text-base font-semibold'>{product.name}</h3>
      <p className='font-bold text-black'>₩{product.price.toLocaleString()}</p>
      <Button onClick={addToCart} variant='filled-dark' shape='rounded' size='small'>
        Add To Cart
      </Button>
    </div>
  );
}
