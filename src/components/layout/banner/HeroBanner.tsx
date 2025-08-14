interface HeroBannerProps {
  className?: string;
}

export default function HeroBanner({ className }: HeroBannerProps) {
  return (
    <div
      className={`flex h-[calc(100vh-80px)] items-center justify-center bg-gray-700 text-white 2xl:h-[calc(100vh-120px)] ${className ?? ''}`}
    >
      <div className='flex flex-col gap-4 text-center lg:text-left'>
        <p className='text-2xl font-medium opacity-40'>Pro.Beyond.</p>
        <h1 className='text-7xl font-thin'>
          IPhone 14 <span className='font-bold'>Pro</span>
        </h1>
        <p className='text-lg text-gray-400'>
          Created to change everything for the better. For everyone
        </p>
      </div>
    </div>
  );
}
