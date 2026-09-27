import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  meta?: string;
  lede?: string;
}

/** Consistent section header: amber eyebrow, serif-free tight title, hairline rule. */
export default function SectionHeading({ eyebrow, title, meta, lede }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-baseline justify-between gap-6 border-b border-line-soft pb-5">
        <div>
          <span className="mb-3 block font-mono text-[12px] tracking-[0.16em] text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-ink md:text-[40px]">
            {title}
          </h2>
        </div>
        {meta && (
          <span className="shrink-0 font-mono text-[12px] tracking-[0.1em] text-ink-4 uppercase">
            {meta}
          </span>
        )}
      </div>
      {lede && <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.75] text-ink-3">{lede}</p>}
    </Reveal>
  );
}
