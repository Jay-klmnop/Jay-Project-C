import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const products = await getAllProducts();
    console.log(request);

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const productsWithFullImageUrls = products.map((product) => ({
      ...product,
      variants: product.variants.map((variant) => ({
        ...variant,
        images: {
          thumbnail: `${baseUrl}${variant.images.thumbnail.src}`,
          large: `${baseUrl}${variant.images.large.src}`,
        },
      })),
    }));

    return NextResponse.json(productsWithFullImageUrls);
  } catch (error) {
    console.error('[API ERROR] /api/products:', error);
    return NextResponse.json({ message: 'InternalServer Error' }, { status: 500 });
  }
}
