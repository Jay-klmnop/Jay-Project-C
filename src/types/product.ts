import { CategoryFilterType, SizeFilterType, SortOptionType } from '@/constants';

interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  sku: string;
  color: string;
  size: string;
  stock: number;
  images: {
    thumbnail: ImageInfo;
    large: ImageInfo;
  };
}
export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice: number;
  calculatedPrice: number;
  tags: string[];
  options: {
    colors: string[];
    sizes: string[];
  };
  variants: ProductVariant[];
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ProductFilters {
  category: CategoryFilterType[];
  size: SizeFilterType[];
  color: string[];
  sort: SortOptionType;
  query: string;
}
