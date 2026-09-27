import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  threshold = 0.15,
  className = '',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ delay, threshold });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
    >
      {children}
    </div>
  );
}
