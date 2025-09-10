import type { CartItemType } from '@/types';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/RTK';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

interface CartProductCardProps {
  item: CartItemType;
}

export function CartProductCard({ item }: CartProductCardProps) {
  const dispatch = useDispatch();

  return (
    <section key={item.sku} className='cart-product-card my-4 gap-4 p-4 font-semibold'>
      <Image src={item.image} alt={item.name} className='h-20 w-20' />
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
