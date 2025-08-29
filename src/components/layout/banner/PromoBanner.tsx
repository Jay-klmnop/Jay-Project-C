import { PROMO_ITEMS } from '@/constants/promotions';
import {
  LargePromoCard,
  MediumPromoCard,
  SmallPromoCardRight,
  SmallPromoCardLeft,
} from './PromoCards';

export function PromoBanner() {
  return (
    <div className='flex w-full flex-col text-white md:grid md:h-dvh md:grid-flow-row md:grid-cols-4 md:grid-rows-2'>
      <div className='flex w-full flex-col md:col-span-2 md:row-span-2 md:grid'>
        <MediumPromoCard item={PROMO_ITEMS.first} />
        <div className='flex w-full flex-col md:col-span-2 md:row-span-1 md:grid md:grid-flow-col'>
          <SmallPromoCardLeft item={PROMO_ITEMS.second} />
          <SmallPromoCardRight item={PROMO_ITEMS.third} />
        </div>
      </div>
      <LargePromoCard item={PROMO_ITEMS.fourth} />
    </div>
  );
}
