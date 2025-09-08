export function CardSkeleton() {
  return (
    <div className="flex min-h-[340px] flex-col rounded-lg bg-neutral-200 p-4">
      <div className="relative w-full grow animate-pulse rounded-md bg-neutral-400" />
      <div className="mt-4 flex flex-col items-center">
        <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-400" />
        <div className="mt-4 h-5 w-1/3 animate-pulse rounded bg-neutral-400" />
      </div>
    </div>
  );
}
