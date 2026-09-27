import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  delay?: number;
}

/**
 * Reveal-on-scroll primitive. Fires once, then disconnects.
 * If IntersectionObserver is unavailable the content starts visible,
 * so it is never trapped behind a failed observer.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  delay = 0,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const supportsObserver = typeof IntersectionObserver !== 'undefined';
  const [inView, setInView] = useState(!supportsObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsObserver) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        timer = window.setTimeout(() => setInView(true), delay);
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [threshold, delay, supportsObserver]);

  return { ref, inView };
}
