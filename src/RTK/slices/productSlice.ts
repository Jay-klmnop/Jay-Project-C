import type { ProductType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  allProducts: ProductType[];
  currentProduct: ProductType | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  allProducts: [],
  currentProduct: null,
  status: 'idle',
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.allProducts = action.payload;
      state.status = 'succeeded';
    },
    setCurrentProduct(state, action: PayloadAction<ProductType>) {
      state.currentProduct = action.payload;
      state.status = 'succeeded';
    },
    setLoading(state) {
      state.status = 'loading';
    },
  },
});

export const { setProducts, setCurrentProduct, setLoading } = productSlice.actions;

export default productSlice.reducer;
