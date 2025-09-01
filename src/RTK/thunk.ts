import type { ProductType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await fetch('http://localhost:3001/products');
  const data = await response.json();
  return data as ProductType[];
});

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId: string) => {
    const response = await fetch(`http://localhost:3001/products/${productId}`);
    const data = await response.json();
    return data as ProductType;
  }
);
