import { StaticImageData } from 'next/image';

export interface ProductVariant {
  sku: string;
  color: string;
  size: string;
  stock: number;
  images: {
    thumbnail: StaticImageData;
    large: StaticImageData;
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
