'use client';

import { closeCart, useAppDispatch, useAppSelector } from '@/RTK';
import { CartProductCard } from './CartProductCard';

export function CartSidebar() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isCartOpen = useAppSelector((state) => state.ui.isCartOpen);

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className='side-menu fixed inset-0 z-40' onClick={() => dispatch(closeCart())}>
      <div
        className='fixed top-0 right-0 z-50 h-full w-96 p-8 pt-14 lg:w-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='sr-only'>Cart</h1>
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
