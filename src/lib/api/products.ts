import { BASE_URL } from '@/constants';
import { PaginatedResponse, ProductType } from '@/types';
import { ProductFilters } from '@/types/product';

interface FetchProductsParams {
  pageParam?: number;
  filters: ProductFilters;
}

export const fetchAllProducts = async ({
  pageParam = 1,
  filters,
}: FetchProductsParams): Promise<PaginatedResponse<ProductType>> => {
  console.log('[API Fetch] fetchAllProducts called with filters:', filters);
  const params = new URLSearchParams();
  params.append('page', String(pageParam));

  filters.category.forEach((cat) => params.append('category', cat));
  filters.size.forEach((s) => params.append('size', s));

  if (filters.sort) {
    params.append('sort', filters.sort);
  }

  if (filters.query) {
    params.append('q', filters.query);
  }

  const url = `${BASE_URL}/api/products?${params.toString()}`;
  console.log('[API Fetch] Final fetch URL:', url);

  if (!BASE_URL) {
    console.error('API BASE_URL is not defined!');
    return Promise.reject(new Error('API URL is not configured.'));
  }

  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const fetchProductById = async (id: string): Promise<ProductType> => {
  const url = `${BASE_URL}/api/products/${id}`;

  const response = await fetch(url);

  if (!BASE_URL) {
    console.error('API BASE_URL is not defined!');
    return Promise.reject(new Error('API URL is not configured.'));
  }

  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
};
