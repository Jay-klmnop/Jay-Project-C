import { ITEMS_PER_PAGE, SortOptionType } from '@/constants';
import { dbData } from './db';
import type { PaginatedResponse, ProductType } from '@/types';

interface ProductFilters {
  page?: number;
  sort?: SortOptionType | 'release_asc';
  categories?: string[];
  sizes?: string[];
  colors?: string[];
  query?: string;
}

const sortFunctions: Record<SortOptionType, (products: ProductType[]) => ProductType[]> = {
  release_asc: (products: ProductType[]) => products,
  release_desc: (products: ProductType[]) => [...products].reverse(),
  price_asc: (products: ProductType[]) =>
    [...products].sort((a, b) => a.calculatedPrice - b.calculatedPrice),
  price_desc: (products: ProductType[]) =>
    [...products].sort((a, b) => b.calculatedPrice - a.calculatedPrice),
};

export const getPaginatedProducts = async (
  filters: ProductFilters = {}
): Promise<PaginatedResponse<ProductType>> => {
  const {
    page = 1,
    sort = 'release_desc',
    categories = [],
    sizes = [],
    colors = [],
    query,
  } = filters;

  let filteredData = [...dbData];

  if (query) {
    const lowercasedQuery = query.toLowerCase();
    filteredData = filteredData.filter((product) =>
      product.name.toLowerCase().includes(lowercasedQuery)
    );
  }

  const sortFunction = sortFunctions[sort];

  if (sortFunction) {
    filteredData = sortFunction(filteredData);
  }

  if (categories.length > 0) {
    filteredData = filteredData.filter((p) => categories.includes(p.category));
  }

  if (sizes.length > 0) {
    filteredData = filteredData.filter((p) => p.variants.some((v) => sizes.includes(v.size)));
  }

  if (colors.length > 0) {
    filteredData = filteredData.filter((p) => p.variants.some((v) => colors.includes(v.color)));
  }

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return {
    page: page,
    results: paginatedItems,
    total_pages: totalPages,
    total_results: filteredData.length,
  };
};

export const getAllProducts = async (): Promise<ProductType[]> => {
  return dbData;
};

export const getProductById = async (id: string): Promise<ProductType | undefined> => {
  return dbData.find((p) => p.id === id);
};
