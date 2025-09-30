import type { ProductType } from '@/types';
import { ProductImages } from '@/assets';

export const dbData: ProductType[] = [
  {
    id: 'C0001',
    name: 'Ocean Original Fit T-shirt No. 01',
    category: 'tshirts',
    price: 17000,
    discountPrice: 1700,
    calculatedPrice: 15300,
    tags: ['ocean', 'original-fit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0001-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0001.black.thumb,
          large: ProductImages.C0001.black.large,
        },
      },
      {
        sku: 'C0001-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0001.black.thumb,
          large: ProductImages.C0001.black.large,
        },
      },
      {
        sku: 'C0001-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0001.black.thumb,
          large: ProductImages.C0001.black.large,
        },
      },
      {
        sku: 'C0001-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0001.black.thumb,
          large: ProductImages.C0001.black.large,
        },
      },
      {
        sku: 'C0001-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0001.white.thumb,
          large: ProductImages.C0001.white.large,
        },
      },
      {
        sku: 'C0001-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0001.white.thumb,
          large: ProductImages.C0001.white.large,
        },
      },
      {
        sku: 'C0001-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0001.white.thumb,
          large: ProductImages.C0001.white.large,
        },
      },
      {
        sku: 'C0001-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0001.white.thumb,
          large: ProductImages.C0001.white.large,
        },
      },
    ],
  },
  {
    id: 'C0002',
    name: 'Ocean Original Fit T-shirt No. 02',
    category: 'tshirts',
    price: 17000,
    discountPrice: 1700,
    calculatedPrice: 15300,
    tags: ['ocean', 'original-fit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L'],
    },
    variants: [
      {
        sku: 'C0002-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0002.black.thumb,
          large: ProductImages.C0002.black.large,
        },
      },
      {
        sku: 'C0002-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0002.black.thumb,
          large: ProductImages.C0002.black.large,
        },
      },
      {
        sku: 'C0002-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0002.black.thumb,
          large: ProductImages.C0002.black.large,
        },
      },
      {
        sku: 'C0002-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0002.white.thumb,
          large: ProductImages.C0002.white.large,
        },
      },
      {
        sku: 'C0002-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0002.white.thumb,
          large: ProductImages.C0002.white.large,
        },
      },
      {
        sku: 'C0002-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0002.white.thumb,
          large: ProductImages.C0002.white.large,
        },
      },
    ],
  },
  {
    id: 'C0003',
    name: 'Ocean Original Fit T-shirt No. 03',
    category: 'tshirts',
    price: 17000,
    discountPrice: 1700,
    calculatedPrice: 15300,
    tags: ['ocean', 'original-fit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0003-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0003.black.thumb,
          large: ProductImages.C0003.black.large,
        },
      },
      {
        sku: 'C0003-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0003.black.thumb,
          large: ProductImages.C0003.black.large,
        },
      },
      {
        sku: 'C0003-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0003.black.thumb,
          large: ProductImages.C0003.black.large,
        },
      },
      {
        sku: 'C0003-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0003.black.thumb,
          large: ProductImages.C0003.black.large,
        },
      },
      {
        sku: 'C0003-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0003.white.thumb,
          large: ProductImages.C0003.white.large,
        },
      },
      {
        sku: 'C0003-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0003.white.thumb,
          large: ProductImages.C0003.white.large,
        },
      },
      {
        sku: 'C0003-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0003.white.thumb,
          large: ProductImages.C0003.white.large,
        },
      },
      {
        sku: 'C0003-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0003.white.thumb,
          large: ProductImages.C0003.white.large,
        },
      },
    ],
  },
  {
    id: 'C0004',
    name: 'Ocean Original Fit T-shirt No. 04',
    category: 'tshirts',
    price: 17000,
    discountPrice: 1700,
    calculatedPrice: 15300,
    tags: ['ocean', 'original-fit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0004-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0004.black.thumb,
          large: ProductImages.C0004.black.large,
        },
      },
      {
        sku: 'C0004-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0004.black.thumb,
          large: ProductImages.C0004.black.large,
        },
      },
      {
        sku: 'C0004-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0004.black.thumb,
          large: ProductImages.C0004.black.large,
        },
      },
      {
        sku: 'C0004-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0004.black.thumb,
          large: ProductImages.C0004.black.large,
        },
      },
      {
        sku: 'C0004-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0004.white.thumb,
          large: ProductImages.C0004.white.large,
        },
      },
      {
        sku: 'C0004-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0004.white.thumb,
          large: ProductImages.C0004.white.large,
        },
      },
      {
        sku: 'C0004-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0004.white.thumb,
          large: ProductImages.C0004.white.large,
        },
      },
      {
        sku: 'C0004-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0004.white.thumb,
          large: ProductImages.C0004.white.large,
        },
      },
    ],
  },
  {
    id: 'C0005',
    name: 'Ocean Original Fit T-shirt No. 05',
    category: 'tshirts',
    price: 17000,
    discountPrice: 1700,
    calculatedPrice: 15300,
    tags: ['ocean', 'original-fit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0005-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0005.black.thumb,
          large: ProductImages.C0005.black.large,
        },
      },
      {
        sku: 'C0005-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0005.black.thumb,
          large: ProductImages.C0005.black.large,
        },
      },
      {
        sku: 'C0005-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0005.black.thumb,
          large: ProductImages.C0005.black.large,
        },
      },
      {
        sku: 'C0005-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0005.black.thumb,
          large: ProductImages.C0005.black.large,
        },
      },
      {
        sku: 'C0005-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0005.white.thumb,
          large: ProductImages.C0005.white.large,
        },
      },
      {
        sku: 'C0005-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0005.white.thumb,
          large: ProductImages.C0005.white.large,
        },
      },
      {
        sku: 'C0005-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0005.white.thumb,
          large: ProductImages.C0005.white.large,
        },
      },
      {
        sku: 'C0005-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0005.white.thumb,
          large: ProductImages.C0005.white.large,
        },
      },
    ],
  },
  {
    id: 'C0006',
    name: 'Forest Overfit T-shirt No. 01',
    category: 'tshirts',
    price: 18000,
    discountPrice: 0,
    calculatedPrice: 18000,
    tags: ['forest', 'overfit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0006-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0006.black.thumb,
          large: ProductImages.C0006.black.large,
        },
      },
      {
        sku: 'C0006-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0006.black.thumb,
          large: ProductImages.C0006.black.large,
        },
      },
      {
        sku: 'C0006-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0006.black.thumb,
          large: ProductImages.C0006.black.large,
        },
      },
      {
        sku: 'C0006-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0006.black.thumb,
          large: ProductImages.C0006.black.large,
        },
      },
      {
        sku: 'C0006-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0006.white.thumb,
          large: ProductImages.C0006.white.large,
        },
      },
      {
        sku: 'C0006-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0006.white.thumb,
          large: ProductImages.C0006.white.large,
        },
      },
      {
        sku: 'C0006-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0006.white.thumb,
          large: ProductImages.C0006.white.large,
        },
      },
      {
        sku: 'C0006-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0006.white.thumb,
          large: ProductImages.C0006.white.large,
        },
      },
    ],
  },
  {
    id: 'C0007',
    name: 'Forest Overfit T-shirt No. 02',
    category: 'tshirts',
    price: 18000,
    discountPrice: 0,
    calculatedPrice: 18000,
    tags: ['forest', 'overfit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0007-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0007.black.thumb,
          large: ProductImages.C0007.black.large,
        },
      },
      {
        sku: 'C0007-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0007.black.thumb,
          large: ProductImages.C0007.black.large,
        },
      },
      {
        sku: 'C0007-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0007.black.thumb,
          large: ProductImages.C0007.black.large,
        },
      },
      {
        sku: 'C0007-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0007.black.thumb,
          large: ProductImages.C0007.black.large,
        },
      },
      {
        sku: 'C0007-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0007.white.thumb,
          large: ProductImages.C0007.white.large,
        },
      },
      {
        sku: 'C0007-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0007.white.thumb,
          large: ProductImages.C0007.white.large,
        },
      },
      {
        sku: 'C0007-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0007.white.thumb,
          large: ProductImages.C0007.white.large,
        },
      },
      {
        sku: 'C0007-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0007.white.thumb,
          large: ProductImages.C0007.white.large,
        },
      },
    ],
  },
  {
    id: 'C0008',
    name: 'Forest Overfit T-shirt No. 03',
    category: 'tshirts',
    price: 18000,
    discountPrice: 0,
    calculatedPrice: 18000,
    tags: ['forest', 'overfit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0008-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0008.black.thumb,
          large: ProductImages.C0008.black.large,
        },
      },
      {
        sku: 'C0008-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0008.black.thumb,
          large: ProductImages.C0008.black.large,
        },
      },
      {
        sku: 'C0008-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0008.black.thumb,
          large: ProductImages.C0008.black.large,
        },
      },
      {
        sku: 'C0008-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0008.black.thumb,
          large: ProductImages.C0008.black.large,
        },
      },
      {
        sku: 'C0008-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0008.white.thumb,
          large: ProductImages.C0008.white.large,
        },
      },
      {
        sku: 'C0008-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0008.white.thumb,
          large: ProductImages.C0008.white.large,
        },
      },
      {
        sku: 'C0008-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0008.white.thumb,
          large: ProductImages.C0008.white.large,
        },
      },
      {
        sku: 'C0008-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0008.white.thumb,
          large: ProductImages.C0008.white.large,
        },
      },
    ],
  },
  {
    id: 'C0009',
    name: 'Forest Overfit T-shirt No. 04',
    category: 'tshirts',
    price: 18000,
    discountPrice: 0,
    calculatedPrice: 18000,
    tags: ['forest', 'overfit', 'graphic-tee'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0009-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0009.black.thumb,
          large: ProductImages.C0009.black.large,
        },
      },
      {
        sku: 'C0009-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0009.black.thumb,
          large: ProductImages.C0009.black.large,
        },
      },
      {
        sku: 'C0009-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0009.black.thumb,
          large: ProductImages.C0009.black.large,
        },
      },
      {
        sku: 'C0009-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0009.black.thumb,
          large: ProductImages.C0009.black.large,
        },
      },
      {
        sku: 'C0009-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0009.white.thumb,
          large: ProductImages.C0009.white.large,
        },
      },
      {
        sku: 'C0009-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0009.white.thumb,
          large: ProductImages.C0009.white.large,
        },
      },
      {
        sku: 'C0009-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0009.white.thumb,
          large: ProductImages.C0009.white.large,
        },
      },
      {
        sku: 'C0009-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0009.white.thumb,
          large: ProductImages.C0009.white.large,
        },
      },
    ],
  },
  {
    id: 'C0010',
    name: 'Forest Overfit T-shirt No. 05',
    category: 'tshirts',
    price: 18000,
    discountPrice: 0,
    calculatedPrice: 18000,
    tags: ['forest', 'overfit', 'graphic-tee', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0010-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0010.black.thumb,
          large: ProductImages.C0010.black.large,
        },
      },
      {
        sku: 'C0010-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0010.black.thumb,
          large: ProductImages.C0010.black.large,
        },
      },
      {
        sku: 'C0010-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0010.black.thumb,
          large: ProductImages.C0010.black.large,
        },
      },
      {
        sku: 'C0010-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0010.black.thumb,
          large: ProductImages.C0010.black.large,
        },
      },
      {
        sku: 'C0010-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0010.white.thumb,
          large: ProductImages.C0010.white.large,
        },
      },
      {
        sku: 'C0010-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0010.white.thumb,
          large: ProductImages.C0010.white.large,
        },
      },
      {
        sku: 'C0010-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0010.white.thumb,
          large: ProductImages.C0010.white.large,
        },
      },
      {
        sku: 'C0010-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0010.white.thumb,
          large: ProductImages.C0010.white.large,
        },
      },
    ],
  },
  {
    id: 'C0011',
    name: 'Cloud Unisex Sweatshirt No. 01',
    category: 'sweatshirts',
    price: 21900,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['cloud', 'unisex', 'crewneck-sweatshirt', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0011-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0011.black.thumb,
          large: ProductImages.C0011.black.large,
        },
      },
      {
        sku: 'C0011-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0011.black.thumb,
          large: ProductImages.C0011.black.large,
        },
      },
      {
        sku: 'C0011-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0011.black.thumb,
          large: ProductImages.C0011.black.large,
        },
      },
      {
        sku: 'C0011-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0011.black.thumb,
          large: ProductImages.C0011.black.large,
        },
      },
      {
        sku: 'C0011-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0011.white.thumb,
          large: ProductImages.C0011.white.large,
        },
      },
      {
        sku: 'C0011-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0011.white.thumb,
          large: ProductImages.C0011.white.large,
        },
      },
      {
        sku: 'C0011-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0011.white.thumb,
          large: ProductImages.C0011.white.large,
        },
      },
      {
        sku: 'C0011-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0011.white.thumb,
          large: ProductImages.C0011.white.large,
        },
      },
    ],
  },
  {
    id: 'C0012',
    name: 'Cloud Unisex Sweatshirt No. 02',
    category: 'sweatshirts',
    price: 21900,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['cloud', 'unisex', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0012-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0012.black.thumb,
          large: ProductImages.C0012.black.large,
        },
      },
      {
        sku: 'C0012-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0012.black.thumb,
          large: ProductImages.C0012.black.large,
        },
      },
      {
        sku: 'C0012-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0012.black.thumb,
          large: ProductImages.C0012.black.large,
        },
      },
      {
        sku: 'C0012-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0012.black.thumb,
          large: ProductImages.C0012.black.large,
        },
      },
      {
        sku: 'C0012-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0012.white.thumb,
          large: ProductImages.C0012.white.large,
        },
      },
      {
        sku: 'C0012-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0012.white.thumb,
          large: ProductImages.C0012.white.large,
        },
      },
      {
        sku: 'C0012-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0012.white.thumb,
          large: ProductImages.C0012.white.large,
        },
      },
      {
        sku: 'C0012-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0012.white.thumb,
          large: ProductImages.C0012.white.large,
        },
      },
    ],
  },
  {
    id: 'C0013',
    name: 'Cloud Unisex Sweatshirt No. 03',
    category: 'sweatshirts',
    price: 21900,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['cloud', 'unisex', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0013-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0013.black.thumb,
          large: ProductImages.C0013.black.large,
        },
      },
      {
        sku: 'C0013-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0013.black.thumb,
          large: ProductImages.C0013.black.large,
        },
      },
      {
        sku: 'C0013-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0013.black.thumb,
          large: ProductImages.C0013.black.large,
        },
      },
      {
        sku: 'C0013-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0013.black.thumb,
          large: ProductImages.C0013.black.large,
        },
      },
      {
        sku: 'C0013-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0013.white.thumb,
          large: ProductImages.C0013.white.large,
        },
      },
      {
        sku: 'C0013-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0013.white.thumb,
          large: ProductImages.C0013.white.large,
        },
      },
      {
        sku: 'C0013-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0013.white.thumb,
          large: ProductImages.C0013.white.large,
        },
      },
      {
        sku: 'C0013-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0013.white.thumb,
          large: ProductImages.C0013.white.large,
        },
      },
    ],
  },
  {
    id: 'C0014',
    name: 'Cloud Unisex Sweatshirt No. 04',
    category: 'sweatshirts',
    price: 21900,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['cloud', 'unisex', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0014-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0014.black.thumb,
          large: ProductImages.C0014.black.large,
        },
      },
      {
        sku: 'C0014-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0014.black.thumb,
          large: ProductImages.C0014.black.large,
        },
      },
      {
        sku: 'C0014-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0014.black.thumb,
          large: ProductImages.C0014.black.large,
        },
      },
      {
        sku: 'C0014-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0014.black.thumb,
          large: ProductImages.C0014.black.large,
        },
      },
      {
        sku: 'C0014-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0014.white.thumb,
          large: ProductImages.C0014.white.large,
        },
      },
      {
        sku: 'C0014-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0014.white.thumb,
          large: ProductImages.C0014.white.large,
        },
      },
      {
        sku: 'C0014-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0014.white.thumb,
          large: ProductImages.C0014.white.large,
        },
      },
      {
        sku: 'C0014-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0014.white.thumb,
          large: ProductImages.C0014.white.large,
        },
      },
    ],
  },
  {
    id: 'C0015',
    name: 'Cloud Unisex Sweatshirt No. 05',
    category: 'sweatshirts',
    price: 21900,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['cloud', 'unisex', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0015-BL-S',
        color: 'Black',
        size: 'S',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0015.black.thumb,
          large: ProductImages.C0015.black.large,
        },
      },
      {
        sku: 'C0015-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0015.black.thumb,
          large: ProductImages.C0015.black.large,
        },
      },
      {
        sku: 'C0015-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0015.black.thumb,
          large: ProductImages.C0015.black.large,
        },
      },
      {
        sku: 'C0015-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0015.black.thumb,
          large: ProductImages.C0015.black.large,
        },
      },
      {
        sku: 'C0015-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0015.white.thumb,
          large: ProductImages.C0015.white.large,
        },
      },
      {
        sku: 'C0015-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0015.white.thumb,
          large: ProductImages.C0015.white.large,
        },
      },
      {
        sku: 'C0015-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0015.white.thumb,
          large: ProductImages.C0015.white.large,
        },
      },
      {
        sku: 'C0015-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0015.white.thumb,
          large: ProductImages.C0015.white.large,
        },
      },
    ],
  },
  {
    id: 'C0016',
    name: 'Monochrome Overfit Sweatshirt No. 01',
    category: 'sweatshirts',
    price: 22200,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['monochrome', 'overfit', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0016-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0016.black.thumb,
          large: ProductImages.C0016.black.large,
        },
      },
      {
        sku: 'C0016-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0016.black.thumb,
          large: ProductImages.C0016.black.large,
        },
      },
      {
        sku: 'C0016-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0016.black.thumb,
          large: ProductImages.C0016.black.large,
        },
      },
      {
        sku: 'C0016-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0016.black.thumb,
          large: ProductImages.C0016.black.large,
        },
      },
      {
        sku: 'C0016-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0016.white.thumb,
          large: ProductImages.C0016.white.large,
        },
      },
      {
        sku: 'C0016-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0016.white.thumb,
          large: ProductImages.C0016.white.large,
        },
      },
      {
        sku: 'C0016-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0016.white.thumb,
          large: ProductImages.C0016.white.large,
        },
      },
      {
        sku: 'C0016-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0016.white.thumb,
          large: ProductImages.C0016.white.large,
        },
      },
    ],
  },
  {
    id: 'C0017',
    name: 'Monochrome Overfit Sweatshirt No. 02',
    category: 'sweatshirts',
    price: 22200,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['monochrome', 'overfit', 'crewneck-sweatshirt', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0017-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0017.black.thumb,
          large: ProductImages.C0017.black.large,
        },
      },
      {
        sku: 'C0017-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0017.black.thumb,
          large: ProductImages.C0017.black.large,
        },
      },
      {
        sku: 'C0017-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0017.black.thumb,
          large: ProductImages.C0017.black.large,
        },
      },
      {
        sku: 'C0017-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0017.black.thumb,
          large: ProductImages.C0017.black.large,
        },
      },
      {
        sku: 'C0017-WH-S',
        color: 'White',
        size: 'S',
        stock: 17,
        images: {
          thumbnail: ProductImages.C0017.white.thumb,
          large: ProductImages.C0017.white.large,
        },
      },
      {
        sku: 'C0017-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0017.white.thumb,
          large: ProductImages.C0017.white.large,
        },
      },
      {
        sku: 'C0017-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0017.white.thumb,
          large: ProductImages.C0017.white.large,
        },
      },
      {
        sku: 'C0017-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 17,
        images: {
          thumbnail: ProductImages.C0017.white.thumb,
          large: ProductImages.C0017.white.large,
        },
      },
    ],
  },
  {
    id: 'C0018',
    name: 'Monochrome Overfit Sweatshirt No. 03',
    category: 'sweatshirts',
    price: 22200,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['monochrome', 'overfit', 'crewneck-sweatshirt', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0018-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0018.black.thumb,
          large: ProductImages.C0018.black.large,
        },
      },
      {
        sku: 'C0018-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0018.black.thumb,
          large: ProductImages.C0018.black.large,
        },
      },
      {
        sku: 'C0018-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0018.black.thumb,
          large: ProductImages.C0018.black.large,
        },
      },
      {
        sku: 'C0018-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0018.black.thumb,
          large: ProductImages.C0018.black.large,
        },
      },
      {
        sku: 'C0018-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0018.white.thumb,
          large: ProductImages.C0018.white.large,
        },
      },
      {
        sku: 'C0018-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0018.white.thumb,
          large: ProductImages.C0018.white.large,
        },
      },
      {
        sku: 'C0018-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0018.white.thumb,
          large: ProductImages.C0018.white.large,
        },
      },
      {
        sku: 'C0018-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0018.white.thumb,
          large: ProductImages.C0018.white.large,
        },
      },
    ],
  },
  {
    id: 'C0019',
    name: 'Monochrome Overfit Sweatshirt No. 04',
    category: 'sweatshirts',
    price: 22200,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['monochrome', 'overfit', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0019-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0019.black.thumb,
          large: ProductImages.C0019.black.large,
        },
      },
      {
        sku: 'C0019-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0019.black.thumb,
          large: ProductImages.C0019.black.large,
        },
      },
      {
        sku: 'C0019-BL-L',
        color: 'Black',
        size: 'L',
        stock: 19,
        images: {
          thumbnail: ProductImages.C0019.black.thumb,
          large: ProductImages.C0019.black.large,
        },
      },
      {
        sku: 'C0019-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0019.black.thumb,
          large: ProductImages.C0019.black.large,
        },
      },
      {
        sku: 'C0019-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0019.white.thumb,
          large: ProductImages.C0019.white.large,
        },
      },
      {
        sku: 'C0019-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0019.white.thumb,
          large: ProductImages.C0019.white.large,
        },
      },
      {
        sku: 'C0019-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0019.white.thumb,
          large: ProductImages.C0019.white.large,
        },
      },
      {
        sku: 'C0019-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0019.white.thumb,
          large: ProductImages.C0019.white.large,
        },
      },
    ],
  },
  {
    id: 'C0020',
    name: 'Monochrome Overfit Sweatshirt No. 05',
    category: 'sweatshirts',
    price: 22200,
    discountPrice: 0,
    calculatedPrice: 21900,
    tags: ['monochrome', 'overfit', 'crewneck-sweatshirt'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0020-BL-S',
        color: 'Black',
        size: 'S',
        stock: 20,
        images: {
          thumbnail: ProductImages.C0020.black.thumb,
          large: ProductImages.C0020.black.large,
        },
      },
      {
        sku: 'C0020-BL-M',
        color: 'Black',
        size: 'M',
        stock: 20,
        images: {
          thumbnail: ProductImages.C0020.black.thumb,
          large: ProductImages.C0020.black.large,
        },
      },
      {
        sku: 'C0020-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0020.black.thumb,
          large: ProductImages.C0020.black.large,
        },
      },
      {
        sku: 'C0020-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0020.black.thumb,
          large: ProductImages.C0020.black.large,
        },
      },
      {
        sku: 'C0020-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0020.white.thumb,
          large: ProductImages.C0020.white.large,
        },
      },
      {
        sku: 'C0020-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0020.white.thumb,
          large: ProductImages.C0020.white.large,
        },
      },
      {
        sku: 'C0020-WH-L',
        color: 'White',
        size: 'L',
        stock: 20,
        images: {
          thumbnail: ProductImages.C0020.white.thumb,
          large: ProductImages.C0020.white.large,
        },
      },
      {
        sku: 'C0020-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0020.white.thumb,
          large: ProductImages.C0020.white.large,
        },
      },
    ],
  },
  {
    id: 'C0021',
    name: 'Vertical Graphic Basic Hoodie No. 01',
    category: 'hoodies',
    price: 26900,
    discountPrice: 0,
    calculatedPrice: 26900,
    tags: ['vertical', 'basic-fit', 'graphic', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0021-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0021.black.thumb,
          large: ProductImages.C0021.black.large,
        },
      },
      {
        sku: 'C0021-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0021.black.thumb,
          large: ProductImages.C0021.black.large,
        },
      },
      {
        sku: 'C0021-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0021.black.thumb,
          large: ProductImages.C0021.black.large,
        },
      },
      {
        sku: 'C0021-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0021.black.thumb,
          large: ProductImages.C0021.black.large,
        },
      },
      {
        sku: 'C0021-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0021.white.thumb,
          large: ProductImages.C0021.white.large,
        },
      },
      {
        sku: 'C0021-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0021.white.thumb,
          large: ProductImages.C0021.white.large,
        },
      },
      {
        sku: 'C0021-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0021.white.thumb,
          large: ProductImages.C0021.white.large,
        },
      },
      {
        sku: 'C0021-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0021.white.thumb,
          large: ProductImages.C0021.white.large,
        },
      },
    ],
  },
  {
    id: 'C0022',
    name: 'Vertical Graphic Basic Hoodie No. 02',
    category: 'hoodies',
    price: 26900,
    discountPrice: 0,
    calculatedPrice: 26900,
    tags: ['vertical', 'basic-fit', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0022-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0022.black.thumb,
          large: ProductImages.C0022.black.large,
        },
      },
      {
        sku: 'C0022-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0022.black.thumb,
          large: ProductImages.C0022.black.large,
        },
      },
      {
        sku: 'C0022-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0022.black.thumb,
          large: ProductImages.C0022.black.large,
        },
      },
      {
        sku: 'C0022-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0022.black.thumb,
          large: ProductImages.C0022.black.large,
        },
      },
      {
        sku: 'C0022-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0022.white.thumb,
          large: ProductImages.C0022.white.large,
        },
      },
      {
        sku: 'C0022-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0022.white.thumb,
          large: ProductImages.C0022.white.large,
        },
      },
      {
        sku: 'C0022-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0022.white.thumb,
          large: ProductImages.C0022.white.large,
        },
      },
      {
        sku: 'C0022-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0022.white.thumb,
          large: ProductImages.C0022.white.large,
        },
      },
    ],
  },
  {
    id: 'C0023',
    name: 'Vertical Graphic Basic Hoodie No. 03',
    category: 'hoodies',
    price: 26900,
    discountPrice: 0,
    calculatedPrice: 26900,
    tags: ['vertical', 'basic-fit', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0023-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0023.black.thumb,
          large: ProductImages.C0023.black.large,
        },
      },
      {
        sku: 'C0023-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0023.black.thumb,
          large: ProductImages.C0023.black.large,
        },
      },
      {
        sku: 'C0023-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0023.black.thumb,
          large: ProductImages.C0023.black.large,
        },
      },
      {
        sku: 'C0023-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0023.black.thumb,
          large: ProductImages.C0023.black.large,
        },
      },
      {
        sku: 'C0023-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0023.white.thumb,
          large: ProductImages.C0023.white.large,
        },
      },
      {
        sku: 'C0023-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0023.white.thumb,
          large: ProductImages.C0023.white.large,
        },
      },
      {
        sku: 'C0023-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0023.white.thumb,
          large: ProductImages.C0023.white.large,
        },
      },
      {
        sku: 'C0023-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0023.white.thumb,
          large: ProductImages.C0023.white.large,
        },
      },
    ],
  },
  {
    id: 'C0024',
    name: 'Vertical Graphic Basic Hoodie No. 04',
    category: 'hoodies',
    price: 26900,
    discountPrice: 0,
    calculatedPrice: 26900,
    tags: ['vertical', 'basic-fit', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0024-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0024.black.thumb,
          large: ProductImages.C0024.black.large,
        },
      },
      {
        sku: 'C0024-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0024.black.thumb,
          large: ProductImages.C0024.black.large,
        },
      },
      {
        sku: 'C0024-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0024.black.thumb,
          large: ProductImages.C0024.black.large,
        },
      },
      {
        sku: 'C0024-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0024.black.thumb,
          large: ProductImages.C0024.black.large,
        },
      },
      {
        sku: 'C0024-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0024.white.thumb,
          large: ProductImages.C0024.white.large,
        },
      },
      {
        sku: 'C0024-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0024.white.thumb,
          large: ProductImages.C0024.white.large,
        },
      },
      {
        sku: 'C0024-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0024.white.thumb,
          large: ProductImages.C0024.white.large,
        },
      },
      {
        sku: 'C0024-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0024.white.thumb,
          large: ProductImages.C0024.white.large,
        },
      },
    ],
  },
  {
    id: 'C0025',
    name: 'Vertical Graphic Basic Hoodie No. 05',
    category: 'hoodies',
    price: 26900,
    discountPrice: 0,
    calculatedPrice: 26900,
    tags: ['vertical', 'basic-fit', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0025-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0025.black.thumb,
          large: ProductImages.C0025.black.large,
        },
      },
      {
        sku: 'C0025-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0025.black.thumb,
          large: ProductImages.C0025.black.large,
        },
      },
      {
        sku: 'C0025-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0025.black.thumb,
          large: ProductImages.C0025.black.large,
        },
      },
      {
        sku: 'C0025-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0025.black.thumb,
          large: ProductImages.C0025.black.large,
        },
      },
      {
        sku: 'C0025-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0025.white.thumb,
          large: ProductImages.C0025.white.large,
        },
      },
      {
        sku: 'C0025-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0025.white.thumb,
          large: ProductImages.C0025.white.large,
        },
      },
      {
        sku: 'C0025-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0025.white.thumb,
          large: ProductImages.C0025.white.large,
        },
      },
      {
        sku: 'C0025-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0025.white.thumb,
          large: ProductImages.C0025.white.large,
        },
      },
    ],
  },
  {
    id: 'C0026',
    name: 'Street sign Graphic Hoodie No. 01',
    category: 'hoodies',
    price: 30900,
    discountPrice: 0,
    calculatedPrice: 30900,
    tags: ['Street sign', 'light', 'graphic', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0026-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0026.black.thumb,
          large: ProductImages.C0026.black.large,
        },
      },
      {
        sku: 'C0026-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0026.black.thumb,
          large: ProductImages.C0026.black.large,
        },
      },
      {
        sku: 'C0026-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0026.black.thumb,
          large: ProductImages.C0026.black.large,
        },
      },
      {
        sku: 'C0026-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0026.black.thumb,
          large: ProductImages.C0026.black.large,
        },
      },
      {
        sku: 'C0026-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0026.white.thumb,
          large: ProductImages.C0026.white.large,
        },
      },
      {
        sku: 'C0026-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0026.white.thumb,
          large: ProductImages.C0026.white.large,
        },
      },
      {
        sku: 'C0026-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0026.white.thumb,
          large: ProductImages.C0026.white.large,
        },
      },
      {
        sku: 'C0026-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0026.white.thumb,
          large: ProductImages.C0026.white.large,
        },
      },
    ],
  },
  {
    id: 'C0027',
    name: 'Street sign Graphic Hoodie No. 02',
    category: 'hoodies',
    price: 30900,
    discountPrice: 0,
    calculatedPrice: 30900,
    tags: ['Street sign', 'light', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0027-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0027.black.thumb,
          large: ProductImages.C0027.black.large,
        },
      },
      {
        sku: 'C0027-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0027.black.thumb,
          large: ProductImages.C0027.black.large,
        },
      },
      {
        sku: 'C0027-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0027.black.thumb,
          large: ProductImages.C0027.black.large,
        },
      },
      {
        sku: 'C0027-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0027.black.thumb,
          large: ProductImages.C0027.black.large,
        },
      },
      {
        sku: 'C0027-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0027.white.thumb,
          large: ProductImages.C0027.white.large,
        },
      },
      {
        sku: 'C0027-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0027.white.thumb,
          large: ProductImages.C0027.white.large,
        },
      },
      {
        sku: 'C0027-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0027.white.thumb,
          large: ProductImages.C0027.white.large,
        },
      },
      {
        sku: 'C0027-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0027.white.thumb,
          large: ProductImages.C0027.white.large,
        },
      },
    ],
  },
  {
    id: 'C0028',
    name: 'Street sign Graphic Hoodie No. 03',
    category: 'hoodies',
    price: 30900,
    discountPrice: 0,
    calculatedPrice: 30900,
    tags: ['Street sign', 'light', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0028-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0028.black.thumb,
          large: ProductImages.C0028.black.large,
        },
      },
      {
        sku: 'C0028-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0028.black.thumb,
          large: ProductImages.C0028.black.large,
        },
      },
      {
        sku: 'C0028-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0028.black.thumb,
          large: ProductImages.C0028.black.large,
        },
      },
      {
        sku: 'C0028-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0028.black.thumb,
          large: ProductImages.C0028.black.large,
        },
      },
      {
        sku: 'C0028-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0028.white.thumb,
          large: ProductImages.C0028.white.large,
        },
      },
      {
        sku: 'C0028-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0028.white.thumb,
          large: ProductImages.C0028.white.large,
        },
      },
      {
        sku: 'C0028-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0028.white.thumb,
          large: ProductImages.C0028.white.large,
        },
      },
      {
        sku: 'C0028-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0028.white.thumb,
          large: ProductImages.C0028.white.large,
        },
      },
    ],
  },
  {
    id: 'C0029',
    name: 'Street sign Graphic Hoodie No. 04',
    category: 'hoodies',
    price: 30900,
    discountPrice: 0,
    calculatedPrice: 30900,
    tags: ['Street sign', 'light', 'graphic', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0029-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0029.black.thumb,
          large: ProductImages.C0029.black.large,
        },
      },
      {
        sku: 'C0029-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0029.black.thumb,
          large: ProductImages.C0029.black.large,
        },
      },
      {
        sku: 'C0029-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0029.black.thumb,
          large: ProductImages.C0029.black.large,
        },
      },
      {
        sku: 'C0029-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0029.black.thumb,
          large: ProductImages.C0029.black.large,
        },
      },
      {
        sku: 'C0029-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0029.white.thumb,
          large: ProductImages.C0029.white.large,
        },
      },
      {
        sku: 'C0029-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0029.white.thumb,
          large: ProductImages.C0029.white.large,
        },
      },
      {
        sku: 'C0029-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0029.white.thumb,
          large: ProductImages.C0029.white.large,
        },
      },
      {
        sku: 'C0029-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0029.white.thumb,
          large: ProductImages.C0029.white.large,
        },
      },
    ],
  },
  {
    id: 'C0030',
    name: 'Street sign Graphic Hoodie No. 05',
    category: 'hoodies',
    price: 30900,
    discountPrice: 0,
    calculatedPrice: 30900,
    tags: ['street-sign', 'light', 'graphic'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0030-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0030.black.thumb,
          large: ProductImages.C0030.black.large,
        },
      },
      {
        sku: 'C0030-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0030.black.thumb,
          large: ProductImages.C0030.black.large,
        },
      },
      {
        sku: 'C0030-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0030.black.thumb,
          large: ProductImages.C0030.black.large,
        },
      },
      {
        sku: 'C0030-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0030.black.thumb,
          large: ProductImages.C0030.black.large,
        },
      },
      {
        sku: 'C0030-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0030.white.thumb,
          large: ProductImages.C0030.white.large,
        },
      },
      {
        sku: 'C0030-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0030.white.thumb,
          large: ProductImages.C0030.white.large,
        },
      },
      {
        sku: 'C0030-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0030.white.thumb,
          large: ProductImages.C0030.white.large,
        },
      },
      {
        sku: 'C0030-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0030.white.thumb,
          large: ProductImages.C0030.white.large,
        },
      },
    ],
  },
  {
    id: 'C0031',
    name: 'The C:ODE Windbreaker',
    category: 'outwear',
    price: 25300,
    discountPrice: 0,
    calculatedPrice: 25300,
    tags: ['simple', 'light', 'jacket', 'featured'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0031-BL-S',
        color: 'Black',
        size: 'S',
        stock: 10,
        images: {
          thumbnail: ProductImages.C0031.black.thumb,
          large: ProductImages.C0031.black.large,
        },
      },
      {
        sku: 'C0031-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0031.black.thumb,
          large: ProductImages.C0031.black.large,
        },
      },
      {
        sku: 'C0031-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0031.black.thumb,
          large: ProductImages.C0031.black.large,
        },
      },
      {
        sku: 'C0031-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0031.black.thumb,
          large: ProductImages.C0031.black.large,
        },
      },
      {
        sku: 'C0031-WH-S',
        color: 'White',
        size: 'S',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0031.white.thumb,
          large: ProductImages.C0031.white.large,
        },
      },
      {
        sku: 'C0031-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0031.white.thumb,
          large: ProductImages.C0031.white.large,
        },
      },
      {
        sku: 'C0031-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0031.white.thumb,
          large: ProductImages.C0031.white.large,
        },
      },
      {
        sku: 'C0031-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0031.white.thumb,
          large: ProductImages.C0031.white.large,
        },
      },
    ],
  },
  {
    id: 'C0032',
    name: 'The C:ODE Varsity Jacket',
    category: 'outwear',
    price: 53000,
    discountPrice: 0,
    calculatedPrice: 53000,
    tags: ['autumn', 'baseball', 'jacket'],
    options: {
      colors: ['Black', 'White'],
      sizes: ['M', 'L', 'XL'],
    },
    variants: [
      {
        sku: 'C0032-BL-M',
        color: 'Black',
        size: 'M',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0032.black.thumb,
          large: ProductImages.C0032.black.large,
        },
      },
      {
        sku: 'C0032-BL-L',
        color: 'Black',
        size: 'L',
        stock: 14,
        images: {
          thumbnail: ProductImages.C0032.black.thumb,
          large: ProductImages.C0032.black.large,
        },
      },
      {
        sku: 'C0032-BL-XL',
        color: 'Black',
        size: 'XL',
        stock: 18,
        images: {
          thumbnail: ProductImages.C0032.black.thumb,
          large: ProductImages.C0032.black.large,
        },
      },
      {
        sku: 'C0032-WH-M',
        color: 'White',
        size: 'M',
        stock: 9,
        images: {
          thumbnail: ProductImages.C0032.white.thumb,
          large: ProductImages.C0032.white.large,
        },
      },
      {
        sku: 'C0032-WH-L',
        color: 'White',
        size: 'L',
        stock: 15,
        images: {
          thumbnail: ProductImages.C0032.white.thumb,
          large: ProductImages.C0032.white.large,
        },
      },
      {
        sku: 'C0032-WH-XL',
        color: 'White',
        size: 'XL',
        stock: 12,
        images: {
          thumbnail: ProductImages.C0032.white.thumb,
          large: ProductImages.C0032.white.large,
        },
      },
    ],
  },
];
