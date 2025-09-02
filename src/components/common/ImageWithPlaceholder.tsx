import { useEffect, useState } from 'react';
import { ImageIcon } from '@phosphor-icons/react';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  className,
  placeholderClassName,
}: ImageWithPlaceholderProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImageSrc(src);
    };
    image.onerror = () => {
      setImageSrc('error');
    };
  }, [src]);

  if (imageSrc === src) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div
      className={`flex items-center justify-center bg-neutral-200 ${placeholderClassName || className}`}
    >
      <ImageIcon className='h-1/2 w-1/2 animate-pulse text-neutral-400' />
    </div>
  );
}
