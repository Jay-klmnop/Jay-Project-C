import type { CartItemType } from '@/types';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/RTK';
import { useDispatch } from 'react-redux';

interface CartProductCardProps {
  item: CartItemType;
}

export function CartProductCard({ item }: CartProductCardProps) {
  const dispatch = useDispatch();

  const getImageUrl = (path: string): string => {
    return new URL(path, import.meta.url).href;
  };

  return (
    <section
      key={item.sku}
      className='m-4 flex flex-row items-center justify-evenly gap-2 rounded-md bg-neutral-400 p-4 text-xs font-semibold'
    >
      <img src={getImageUrl(item.image)} alt={item.name} className='h-20 w-20' />
      <div className='flex flex-col'>
        <p>{item.name}</p>
        <div className='flex flex-row gap-4'>
          <p>
            {item.calculatedPrice} x {item.quantity}
          </p>
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.sku))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.sku))}>+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.sku))}>X</button>
        </div>
      </div>
    </section>
  );
}
