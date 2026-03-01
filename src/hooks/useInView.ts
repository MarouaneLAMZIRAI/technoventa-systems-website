import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setIsInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options, reducedMotion]);

  return { ref, isInView };
}
