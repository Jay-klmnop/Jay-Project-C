'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { FaRegImage } from 'react-icons/fa6';

interface ImageWithPlaceholderProps extends Omit<ImageProps, 'src' | 'alt'> {
  image?: {
    src?: string | null;
    width?: number | null;
    height?: number | null;
  };
  alt: string;
  imageClassName?: string;
}

export function ImageWithPlaceholder({ image, alt, imageClassName }: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  if (!image?.src) {
    return (
      <div className='absolute inset-0 flex items-center justify-center bg-neutral-200'>
        <FaRegImage className='h-1/2 w-1/2 animate-pulse text-neutral-400' />
      </div>
    );
  }

  return (
    <>
      <Image
        src={image?.src ?? ''}
        alt={alt}
        width={image?.width ?? 300}
        height={image?.height ?? 300}
        className={clsx(
          'aspect-square h-full w-full max-w-56 transition-opacity duration-500 lg:max-w-96',
          !loaded && 'opacity-0',
          imageClassName
        )}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className='absolute inset-0 flex items-center justify-center bg-neutral-200'>
          <FaRegImage className='h-1/2 w-1/2 animate-pulse text-neutral-400' />
        </div>
      )}
    </>
  );
}