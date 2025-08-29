import type { ProductType } from '@/types/product';
import { Button } from '@/components/common';
import { useState } from 'react';

interface ProductCardProps {
  product: ProductType;
  addToCart: () => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  const getImageUrl = (path: string): string => {
    return new URL(path, import.meta.url).href;
  };

  const [currentImageUrl, setCurrentImageUrl] = useState(
    getImageUrl(product.variants.find((v) => v.color === 'Black')?.images.thumbnail || '')
  );

  const handleMouseEnter = () => {
    const whiteVariantImage = getImageUrl(
      product.variants.find((v) => v.color === 'White')?.images.thumbnail || ''
    );
    if (whiteVariantImage) {
      setCurrentImageUrl(whiteVariantImage);
    }
  };

  const handleMouseLeave = () => {
    const blackVariantImage = getImageUrl(
      product.variants.find((v) => v.color === 'Black')?.images.thumbnail || ''
    );
    if (blackVariantImage) {
      setCurrentImageUrl(blackVariantImage);
    }
  };

  return (
    <div
      className='flex min-h-[320px] flex-col items-center rounded-lg bg-neutral-200 p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={currentImageUrl}
        alt={product.name}
        className='h-full w-full rounded-md object-cover'
      />
      <h3 className='my-2 font-bold'>{product.name}</h3>
      <p className='font-bold text-black'>₩{product.price.toLocaleString()}</p>
      <Button
        onClick={addToCart}
        variant='filled-dark'
        shape='rounded'
        size='small'
        className='my-4'
      >
        Add To Cart
      </Button>
    </div>
  );
}
