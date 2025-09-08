import { dbData } from './db';
import type { ProductType } from '@/types';

export const getAllProducts = async (): Promise<ProductType[]> => {
  return dbData;
};

export const getProductById = async (id: string): Promise<ProductType | undefined> => {
  return dbData.find((p) => p.id === id);
};
