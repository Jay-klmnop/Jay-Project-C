export interface ProductVariant {
  sku: string;
  color: string;
  size: string;
  stock: number;
  images: {
    thumbnail: string;
    large: string;
  };
}
export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  tags: string[];
  options: {
    colors: string[];
    sizes: string[];
  };
  variants: ProductVariant[];
}
