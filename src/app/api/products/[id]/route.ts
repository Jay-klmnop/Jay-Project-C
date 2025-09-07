import { type NextRequest, NextResponse } from 'next/server';
import { getProductById } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];

    if (!id) {
      return NextResponse.json({ message: 'Product ID is missing.' }, { status: 400 });
    }

    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json({ message: 'Product not found.' }, { status: 404 });
    }
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const productWithFullImageUrls = {
      ...product,
      variants: product.variants.map((variant) => ({
        ...variant,
        images: {
          thumbnail: `${baseUrl}${variant.images.thumbnail.src}`,
          large: `${baseUrl}${variant.images.large.src}`,
        },
      })),
    };

    return NextResponse.json(productWithFullImageUrls);
  } catch (error) {
    console.error('[API ERROR] /api/products/[id]:', error);
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { message: 'Internal Server Error', error: errorMessage },
      { status: 500 }
    );
  }
}
