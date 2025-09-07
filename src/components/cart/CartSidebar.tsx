'use client';

import { closeCart, store, useAppDispatch, useAppSelector } from '@/RTK';
import { CartProductCard } from './CartProductCard';

type RootState = ReturnType<typeof store.getState>;

export function CartSidebar() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const isCartOpen = useAppSelector((state: RootState) => state.ui.isCartOpen);

  if (!isCartOpen) {
    return null;
  }

  return (
    <div
      className='bg-opacity-50 fixed inset-0 z-40 bg-black'
      onClick={() => dispatch(closeCart())}
    >
      <div
        className='fixed top-0 right-0 z-50 h-full w-96 bg-neutral-200 p-6'
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => <CartProductCard key={item.sku} item={item} />)
        )}
        {cartItems.length > 0 && (
          <h2>
            Total: ₩
            {cartItems
              .reduce((total, item) => total + item.calculatedPrice * item.quantity, 0)
              .toLocaleString()}
          </h2>
        )}
        <button onClick={() => dispatch(closeCart())}>Close</button>
      </div>
    </div>
  );
}
