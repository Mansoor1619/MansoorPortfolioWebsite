import { Play, ArrowUpRight, BadgeCheck } from 'lucide-react';
import { featuredProductData } from '../data/featuredProductData';
import Reveal from './Reveal';

export default function FeaturedProduct() {
  const p = featuredProductData;

  return (
    <section id="product" className="relative bg-base py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[16px] border border-line bg-surface lg:grid-cols-2">
            {/* ---------- media panel ---------- */}
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={p.thumbnail}
                alt={`${p.name} — gameplay key art`}
                width={1000}
                height={750}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.95] contrast-[1.03]"
              />
              {/* legibility gradient: bottom + right edge fade into the copy panel */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent lg:bg-gradient-to-l lg:from-surface lg:via-surface/10 lg:to-transparent"
              />

              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-black/60 px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-accent uppercase backdrop-blur-md">
                <BadgeCheck size={13} />
                Published
              </span>
            </div>

            {/* ---------- copy panel ---------- */}
            <div className="relative flex flex-col justify-center gap-6 p-7 sm:p-10 lg:p-12">
              <div>
                <span className="mb-4 block font-mono text-[12px] tracking-[0.16em] text-accent uppercase">
                  {p.eyebrow}
                </span>
                <h2 className="text-[34px] leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-[42px]">
                  {p.name}
                </h2>
                <p className="mt-3 text-[17px] leading-[1.5] font-medium text-ink-2">
                  {p.tagline}
                </p>
              </div>

              <p className="max-w-[46ch] text-[15px] leading-[1.75] text-ink-3">
                {p.description}
              </p>

              {/* highlight tiles */}
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-line-soft bg-line-soft sm:grid-cols-4">
                {p.highlights.map((h) => (
                  <div key={h.label} className="bg-surface px-4 py-3.5">
                    <dt className="font-mono text-[11px] tracking-[0.08em] text-ink-4 uppercase">
                      {h.label}
                    </dt>
                    <dd className="mt-1 text-[16px] font-semibold text-ink">{h.value}</dd>
                  </div>
                ))}
              </dl>

              {/* tech stack */}
              <ul className="flex flex-wrap gap-1.5">
                {p.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-[6px] border border-accent/25 bg-accent/[0.06] px-2 py-1 text-[12px] text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-1 flex flex-wrap gap-3">
                <a
                  href={p.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[9px] bg-accent px-6 py-3.5 text-[15px] font-semibold text-[#0b0b0c] transition-colors duration-200 hover:bg-accent-hi"
                >
                  Get it on {p.storeName}
                  <ArrowUpRight size={17} />
                </a>
                <a
                  href={p.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[9px] border border-line px-6 py-3.5 text-[15px] font-medium text-ink-2 transition-colors duration-200 hover:border-accent/50 hover:text-ink"
                >
                  <Play size={16} className="fill-current" />
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
