import { PROMO_ITEMS } from '@/constants';
import { LargePromoCard, MediumPromoCard, SmallPromoCardR, SmallPromoCardL } from './PromoCards';

export function PromoBanner() {
  return (
    <div className='flex w-full flex-col text-white md:grid md:h-dvh md:grid-flow-row md:grid-cols-4 md:grid-rows-2'>
      <div className='flex w-full flex-col md:col-span-2 md:row-span-2 md:grid'>
        <MediumPromoCard item={PROMO_ITEMS.first} />
        <div className='flex w-full flex-col md:col-span-2 md:row-span-1 md:grid md:grid-flow-col'>
          <SmallPromoCardL item={PROMO_ITEMS.second} />
          <SmallPromoCardR item={PROMO_ITEMS.third} />
        </div>
      </div>
      <LargePromoCard item={PROMO_ITEMS.fourth} />
    </div>
  );
}
