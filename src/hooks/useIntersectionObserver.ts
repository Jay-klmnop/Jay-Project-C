import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      setEntry(entries[0]);
    }, options);

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [options, targetRef]);
  return { ref: targetRef, entry };
};