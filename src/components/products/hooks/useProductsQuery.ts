import { fetchAllProducts, fetchProductById } from '@/lib/api/products';
import { PaginatedResponse, ProductType } from '@/types';
import { ProductFilters } from '@/types/product';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const productsKeys = {
  all: ['products'] as const,
  lists: () => [...productsKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productsKeys.lists(), filters] as const,
  details: () => [...productsKeys.all, 'detail'] as const,
  detail: (id: string) => [...productsKeys.details(), id] as const,
};

export const useAllProductsQuery = (filters: ProductFilters) => {
  return useInfiniteQuery({
    queryKey: productsKeys.list(filters),
    queryFn: ({ pageParam }) => fetchAllProducts({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: PaginatedResponse<ProductType>) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
  });
};

export const useProductByIdQuery = (id: string) => {
  return useQuery({
    queryKey: productsKeys.detail(id),
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};
