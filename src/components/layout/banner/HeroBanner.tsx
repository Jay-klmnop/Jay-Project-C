import promoImage1 from '@/assets/banner/banner_1.webp';

interface HeroBannerProps {
  className?: string;
}

export function HeroBanner({ className }: HeroBannerProps) {
  return (
    <div
      className={`relative flex h-dvh items-center justify-center bg-cover text-white ${className ?? ''}`}
      style={{ backgroundImage: `url(${promoImage1.src})` }}
    >
      <div className='absolute right-5 bottom-5 left-5 text-xs duration-2000 lg:text-sm'>
        <h1 className='font-extrabold'>C:ODE</h1>
        <p className='font-semibold text-neutral-400'>
          Crafting essential apparel that debugs your morning routine.
        </p>
      </div>
    </div>
  );
}
