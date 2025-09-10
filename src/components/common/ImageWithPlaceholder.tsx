'use client';

import clsx from 'clsx';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { useState } from 'react';
import { FaRegImage } from 'react-icons/fa6';

interface ImageWithPlaceholderProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  imageClassName?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  width,
  height,
  imageClassName,
}: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
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
