import type { ProductType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  const data = await response.json();
  return data as ProductType[];
});

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`);
    const data = await response.json();
    return data as ProductType;
  }
);
