import type { CartItemType } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItemType[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<CartItemType[]>) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      const { product, selectedVariant } = action.payload;
      const existingItem = state.items.find((item) => item.sku === selectedVariant.sku);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          productId: product.id,
          sku: selectedVariant.sku,
          name: product.name,
          color: selectedVariant.color,
          size: selectedVariant.size,
          price: product.price,
          discountPrice: product.discountedPrice,
          calculatedPrice: product.calculatedPrice,
          image: selectedVariant.images.thumbnail,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const skuToRemove = action.payload;
      state.items = state.items.filter((item) => item.sku != skuToRemove);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const sku = action.payload;
      const itemToUpdate = state.items.find((item) => item.sku === sku);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const sku = action.payload;
      const itemToUpdate = state.items.find((item) => item.sku === sku);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity--;
      } else if (itemToUpdate && itemToUpdate.quantity === 1) {
        state.items = state.items.filter((item) => item.sku !== sku);
      }
    },
  },
});

export const { setCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
