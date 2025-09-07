'use client';

import type { ProductType } from '@/types';
import { Button } from '@/components/common';
import { useState } from 'react';
import { ImageWithPlaceholder } from '@/components/common/ImageWithPlaceholder';
import { addToCart, useAppDispatch } from '@/RTK';

interface ProductDetailCardProps {
  product: ProductType;
}

export default function ProductDetail({ product }: ProductDetailCardProps) {
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState(product.options.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.options.sizes[1]);

  const selectedVariant = product.variants.find(
    (variant) => variant.color === selectedColor && variant.size === selectedSize
  );

  if (!selectedVariant) {
    return <div>Cannot find the selected item.</div>;
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      dispatch(addToCart({ product, selectedVariant }));
    }
  };

  return (
    <div className='mx-5 my-4 flex min-h-80 min-w-60 flex-col items-center justify-center rounded-lg bg-neutral-200 p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out lg:flex-row lg:justify-around lg:text-sm'>
      <ImageWithPlaceholder
        src={selectedVariant.images.large}
        alt={product.name}
        width={selectedVariant.images.thumbnail.width}
        height={selectedVariant.images.thumbnail.height}
        className='h-full max-h-96 w-full max-w-96 rounded-md object-cover object-top'
      />
      <div className='flex flex-col lg:pr-8'>
        <div className='flex h-32 flex-col gap-3 lg:h-48 lg:items-start lg:gap-6'>
          <h3 className='font-bold'>{product.name}</h3>
          <div className='flex justify-center gap-2 pb-2'>
            {product.options.colors.map((color) => (
              <button
                key={color}
                type='button'
                onClick={() => setSelectedColor(color)}
                className={`h-5 w-5 rounded-full border-2 ${
                  color === 'Black' ? 'bg-black' : 'bg-white'
                } ${selectedColor === color ? 'border-neutral-400' : 'border-transparent'}`}
              ></button>
            ))}
          </div>
          <div className='flex items-center justify-center gap-2'>
            {product.options.sizes.map((size) => (
              <Button
                key={size}
                type='button'
                shape='rounded'
                size='small'
                onClick={() => setSelectedSize(size)}
                className='h-7 w-10 text-xs font-extrabold'
                variant={selectedSize === size ? 'filled-dark' : 'outlined-dark'}
              >
                {size}
              </Button>
            ))}
          </div>
          <p className='font-bold text-black'>₩{product.price.toLocaleString()}</p>
        </div>
        <Button
          variant='filled-dark'
          shape='rounded'
          size='small'
          className='my-4'
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
