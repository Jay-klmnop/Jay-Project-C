'use client';

import type { ProductType } from '@/types';
import { ImageWithPlaceholder } from '@/components/common';
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState('Black');
  const selectedVariant =
    product.variants.find((v) => v.color === selectedColor) || product.variants[0];

  useEffect(() => {
    product.options.colors.forEach((color) => {
      const variant = product.variants.find((v) => v.color === color);
      if (variant) {
        const image = new Image();
        image.src = variant.images.thumbnail.src;
      }
    });
  }, [product]);

  const handleColorChange = (e: MouseEvent, color: string) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedColor(color);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className='product-card relative max-h-96 min-h-80 min-w-60 gap-4 bg-neutral-200 p-4 transition-opacity duration-300 ease-in-out'>
        <ImageWithPlaceholder
          src={selectedVariant.images.thumbnail}
          alt={product.name}
          width={selectedVariant.images.thumbnail.width}
          height={selectedVariant.images.thumbnail.height}
          className='h-auto w-full min-w-32 rounded-md object-cover object-top'
        />
        <div className='flex h-14 flex-grow flex-col justify-between text-xs'>
          <h3 className='mb-2 font-bold'>{product.name}</h3>
          <p className='font-bold'>₩{product.calculatedPrice.toLocaleString()}</p>
        </div>
        <div className='my-2 flex justify-center gap-2'>
          {product.options.colors.map((color) => (
            <button
              key={color}
              type='button'
              onClick={(e) => handleColorChange(e, color)}
              className={`h-5 w-5 rounded-full border-2 ${
                color === 'Black' ? 'bg-black' : 'bg-white'
              } ${selectedColor === color ? 'border-neutral-500' : 'border-transparent'}`}
            ></button>
          ))}
        </div>
      </div>
    </Link>
  );
}
