import type { ProductType } from '@/types';
import { Button } from '../common';
import { addToCart } from '@/RTK';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/RTK/store';

interface ProductDetailProps {
  product: ProductType;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const dispatch = useDispatch<AppDispatch>();

  const getImageUrl = (path: string): string => {
    return new URL(path, import.meta.url).href;
  };

  const [selectedColor, setSelectedColor] = useState(product.options.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.options.sizes[1]);

  const handleAddToCart = () => {
    const selectedVariant = product.variants.find(
      (variant) => variant.color === selectedColor && selectedSize
    );
    if (!selectedVariant) {
      console.error('Selected variant not found!');
      return;
    }
    dispatch(addToCart({ product, selectedVariant: selectedVariant }));
  };

  return (
    <div className='mx-5 my-4 text-center'>
      <div className='flex min-h-80 min-w-52 flex-col items-center justify-center gap-4 rounded-lg bg-neutral-200 p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out'>
        <div className='flex flex-col gap-4'>
          <img
            src={getImageUrl(
              product.variants.find((v) => v.color === selectedColor)?.images.large ||
                product.variants[0].images.large
            )}
            alt={product.name}
            className='h-full max-h-96 w-full max-w-96 rounded-md object-cover'
          />
          <div className='my-2 flex justify-center gap-2'>
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
        </div>
        <div className='flex h-20 flex-col gap-3'>
          <h3 className='font-bold'>{product.name}</h3>
          <div className='flex items-center justify-center gap-2'>
            {product.options.sizes.map((size) => (
              <Button
                key={size}
                type='button'
                shape='rounded'
                size='small'
                onClick={() => setSelectedSize(size)}
                className={`h-8 w-12 text-xs font-extrabold`}
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
