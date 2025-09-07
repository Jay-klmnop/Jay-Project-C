export function DetailPageSkeleton() {
  return (
    <div className="mx-5 my-4 flex flex-col items-center gap-8 rounded-lg bg-neutral-200 p-8 shadow-md lg:flex-row lg:items-start lg:justify-center">
      <div className="h-96 w-96 flex-shrink-0 animate-pulse rounded-md bg-neutral-400" />
      <div className="flex w-full max-w-sm flex-col items-center gap-4 pt-8 lg:items-start">
        <div className="h-8 w-3/4 animate-pulse rounded bg-neutral-400" />
        <div className="flex items-center justify-center gap-2">
          <div className="h-8 w-12 animate-pulse rounded-md bg-neutral-400" />
          <div className="h-8 w-12 animate-pulse rounded-md bg-neutral-400" />
          <div className="h-8 w-12 animate-pulse rounded-md bg-neutral-400" />
          <div className="h-8 w-12 animate-pulse rounded-md bg-neutral-400" />
        </div>
        <div className="mt-4 h-12 w-full animate-pulse rounded-lg bg-neutral-400" />
      </div>
    </div>
  );
}
