import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface UseInViewReturn {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export function useInView({
  threshold = 0,
  rootMargin = '0px',
  once = false,
}: UseInViewOptions = {}): UseInViewReturn {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!ref.current || (once && observedRef.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observedRef.current = true;
          
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}