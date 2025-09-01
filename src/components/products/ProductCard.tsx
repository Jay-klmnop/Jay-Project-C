import type { ProductType } from '@/types';
import { InternalLink } from '@/components/common';
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getImageUrl = (path: string): string => {
    return new URL(path, import.meta.url).href;
  };

  const [selectedColor, setSelectedColor] = useState('Black');
  const selectedVariant =
    product.variants.find((v) => v.color === selectedColor) || product.variants[0];

  const imageUrl = getImageUrl(selectedVariant.images.thumbnail);

  useEffect(() => {
    product.options.colors.forEach((color) => {
      const variant = product.variants.find((v) => v.color === color);
      if (variant) {
        const image = new Image();
        image.src = getImageUrl(variant.images.thumbnail);
      }
    });
  }, [product]);

  const handleColorChange = (e: MouseEvent, color: string) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedColor(color);
  };

  return (
    <InternalLink to={`/products/${product.id}`}>
      <div className='flex max-h-96 min-h-80 flex-col items-center rounded-lg bg-neutral-200 p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out'>
        <img
          src={imageUrl}
          alt={product.name}
          className='h-full w-full min-w-52 rounded-md object-cover'
        />
        <div className='h-16'>
          <h3 className='my-2 font-bold'>{product.name}</h3>
          <p className='font-bold text-black'>₩{product.calculatedPrice.toLocaleString()}</p>
        </div>
        <div className='my-2 flex justify-center gap-2'>
          {product.options.colors.map((color) => (
            <button
              key={color}
              type='button'
              onClick={(e) => handleColorChange(e, color)}
              className={`h-5 w-5 rounded-full border-2 ${
                color === 'Black' ? 'bg-black' : 'bg-white'
              } ${selectedColor === color ? 'border-neutral-400' : 'border-transparent'}`}
            ></button>
          ))}
        </div>
      </div>
    </InternalLink>
  );
}
