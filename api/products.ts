import dbData from './db.json' with { type: 'json' };
import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://localhost:5173';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
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

    res.status(200).json(productsWithFullImageUrls);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: 'Internal Server Error', error: errorMessage });
  }
}
