import { type NextRequest, NextResponse } from 'next/server';
import { getPaginatedProducts } from '@/lib/data';
import { SORT_OPTION_NAMES, SortOptionType } from '@/constants';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  console.log('API request received! Query:', request.url);
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get('page')) || 1;
    const categories = searchParams.getAll('category');
    const sizes = searchParams.getAll('size');
    const colors = searchParams.getAll('color');

    const sortParam = searchParams.get('sort');
    const sort = SORT_OPTION_NAMES.includes(sortParam as SortOptionType)
      ? (sortParam as SortOptionType)
      : undefined;

    const query = searchParams.get('q');

    const paginatedData = await getPaginatedProducts({
      page,
      sort,
      categories,
      sizes,
      colors,
      query: query ?? undefined,
    });

    const headers = {
      'Cache-Control': 'no-store, max-age=0',
    };

    return NextResponse.json(paginatedData, { headers });
  } catch (error) {
    console.error('[API ERROR] /api/products:', error);
    return NextResponse.json({ message: 'InternalServer Error' }, { status: 500 });
  }
}
