import { useDispatch, useSelector } from 'react-redux';
import { closeCart, store } from '@/RTK';
import { CartProductCard } from './CartProductCard';

type RootState = ReturnType<typeof store.getState>;

export function CartSidebar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isCartOpen = useSelector((state: RootState) => state.ui.isCartOpen);

  if (!isCartOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-40 bg-black bg-opacity-50'
      onClick={() => dispatch(closeCart())}
    >
      <div
        className='fixed right-0 top-0 z-50 h-full w-96 bg-neutral-200 p-4'
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
      </div>
      <button onClick={() => dispatch(closeCart())}>Close</button>
    </div>
  );
}
