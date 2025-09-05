import dbData from '../db';
import { getBaseUrl } from '@/utils';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE_URL = getBaseUrl();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const products = dbData.products;

    const productsWithFullImageUrls = products.map((product) => ({
      ...product,
      variants: product.variants.map((variant) => ({
        ...variant,
        images: {
          thumbnail: `${BASE_URL}${variant.images.thumbnail}`,
          large: `${BASE_URL}${variant.images.large}`,
        },
      })),
    }));

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    res.status(200).json(productsWithFullImageUrls);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: 'Internal Server Error', error: errorMessage });
  }
}
