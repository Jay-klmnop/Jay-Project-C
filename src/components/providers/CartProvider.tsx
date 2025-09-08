'use client';

import { setCart, useAppDispatch, useAppSelector } from '@/RTK';
import { useEffect, useRef } from 'react';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        dispatch(setCart(JSON.parse(storedCart)));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
  }, [dispatch]);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  return <>{children}</>;
}
