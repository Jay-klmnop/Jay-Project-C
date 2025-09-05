import type { VercelRequest, VercelResponse } from '@vercel/node';
import dbData from '../db';
import { getBaseUrl } from '@/utils';

const BASE_URL = getBaseUrl();

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  const { id } = request.query;
  const product = dbData.products.find((p) => String(p.id) === id);

  if (product) {
    const productWithFullImageUrls = {
      ...product,
      variants: product.variants.map((variant) => ({
        ...variant,
        images: {
          thumbnail: `${BASE_URL}${variant.images.thumbnail}`,
          large: `${BASE_URL}${variant.images.large}`,
        },
      })),
    };
    return response.status(200).json(productWithFullImageUrls);
  } else {
    return response.status(404).json({ message: 'Product not found' });
  }
}
