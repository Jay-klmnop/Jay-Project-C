'use client';

import clsx from 'clsx';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { useState } from 'react';
import { FaRegImage } from 'react-icons/fa6';

interface ImageWithPlaceholderProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: StaticImageData | string;
  alt: string;
  imageClassName?: string;
}

export function ImageWithPlaceholder({ src, alt, imageClassName }: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className={clsx('transition-opacity duration-500', !loaded && 'opacity-0', imageClassName)}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className='absolute inset-0 flex items-center justify-center bg-neutral-200'>
          <FaRegImage className='h-1/2 w-1/2 animate-pulse text-neutral-400' />
        </div>
      )}
    </div>
  );
}
