import type { PromoItemType } from '@/constants';

interface PromoCardProps {
  item: PromoItemType;
}

export function LargePromoCard({ item }: PromoCardProps) {
  return (
    <div
      className='relative flex h-full min-h-80 w-full overflow-hidden bg-gray-300 bg-cover text-xs duration-1000 md:col-span-2 md:row-span-2 md:grid lg:text-sm'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className='absolute bottom-5 left-5 right-5 flex flex-col'>
        <h3 className='flex flex-wrap gap-1.5 font-extrabold'>{item.title}</h3>
        <p className='flex flex-wrap gap-1 font-semibold'>{item.description}</p>
      </div>
    </div>
  );
}

export function MediumPromoCard({ item }: PromoCardProps) {
  return (
    <div
      className='relative flex h-full min-h-80 w-full overflow-hidden bg-gray-300 bg-cover text-xs duration-1000 md:col-span-2 md:grid lg:text-sm'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className='absolute bottom-5 left-5 right-5 flex flex-col'>
        <h3 className='flex flex-wrap gap-1.5 font-extrabold'>{item.title}</h3>
        <p className='flex flex-wrap gap-1 font-semibold'>{item.description}</p>
      </div>
    </div>
  );
}

export function SmallPromoCardL({ item }: PromoCardProps) {
  return (
    <div
      className='relative flex h-full min-h-80 w-full overflow-hidden bg-gray-300 bg-cover text-xs duration-1000 md:col-span-1 md:grid lg:text-sm'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className='absolute bottom-5 left-5 right-5 flex flex-col text-neutral-900'>
        <h3 className='flex flex-wrap gap-1.5 font-extrabold'>{item.title}</h3>
        <p className='flex flex-wrap gap-1 font-semibold'>{item.description}</p>
      </div>
    </div>
  );
}

export function SmallPromoCardR({ item }: PromoCardProps) {
  return (
    <div
      className='relative flex h-full min-h-80 w-full overflow-hidden bg-gray-300 bg-cover text-xs duration-1000 md:col-span-1 md:grid lg:text-sm'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className='absolute bottom-5 left-5 right-5 flex flex-col text-black'>
        <h3 className='flex flex-wrap gap-1.5 font-extrabold'>{item.title}</h3>
        <p className='flex flex-wrap gap-1 font-semibold'>{item.description}</p>
      </div>
    </div>
  );
}
