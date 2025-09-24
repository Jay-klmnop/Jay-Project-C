import { type NextRequest, NextResponse } from 'next/server';
import { getProductById } from '@/lib/data';

export const dynamic = 'force-dynamic';

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

    const headers = {
      'Cache-Control': 'no-store, max-age=0',
    };

    return NextResponse.json(product, { headers });
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
