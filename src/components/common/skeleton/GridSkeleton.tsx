import { CardSkeleton } from '@/components/common';

export function GridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}