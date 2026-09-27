import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/personalData';
import SocialLinks from './SocialLinks';

const [firstName, ...restName] = personalData.name.split(' ');

const META = [
  ['Location', personalData.location],
  ['Stack', 'C++ · Blueprints · UE5'],
  ['Experience', '3+ years production'],
];

export default function Hero() {
  const titles = personalData.rotatingTitles;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion, titles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-base">
      {/* single static light source, no mouse tracking */}
      <div className="amber-glow pointer-events-none absolute -top-[220px] left-1/2 h-[520px] w-[900px] -translate-x-1/2" />
      <div className="hairline-grid masked-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-end gap-12 pt-32 pb-20 md:grid-cols-[1fr_320px] md:gap-16 md:pt-44 md:pb-24">
          <div>
            <p className="mb-7 inline-flex items-center gap-2.5 text-[13.5px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(217,164,65,0.16)]" />
              Available for freelance work
            </p>

            <h1 className="text-[52px] leading-[0.94] font-bold tracking-[-0.045em] text-ink sm:text-[68px] md:text-[84px]">
              {firstName}
              <br />
              <span className="font-light text-ink-4">{restName.join(' ')}</span>
            </h1>

            {/* Rotating field. The full list is exposed to screen readers as static
                text, and rotation is skipped entirely when reduced motion is on. */}
            <h2 className="mt-6 mb-5 min-h-[2.7em] text-[20px] leading-[1.35] font-medium tracking-[-0.01em] text-ink-2 md:min-h-[1.4em] md:text-[22px]">
              <span className="sr-only">{titles.join(' · ')}</span>
              <span className="relative block overflow-hidden" aria-hidden="true">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={index}
                    initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduceMotion ? undefined : { y: -16, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>

            <p className="mb-9 max-w-[54ch] text-[17px] leading-[1.7] text-ink-3">
              {personalData.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={personalData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[9px] bg-accent px-6 py-3.5 text-[15px] font-semibold text-[#0b0b0c] transition-colors duration-200 hover:bg-accent-hi"
              >
                <Download size={17} />
                Download résumé
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[9px] border border-line px-6 py-3.5 text-[15px] font-medium text-ink-2 transition-colors duration-200 hover:border-accent/50 hover:text-ink"
              >
                View work
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div>
            <img
              src={personalData.avatar}
              alt={`${personalData.name}, ${personalData.title}`}
              width={640}
              height={640}
              className="aspect-square w-full rounded-[14px] border border-line object-cover object-[center_20%] saturate-[0.92] contrast-[1.03]"
            />

            <dl className="mt-4 space-y-1.5 font-mono text-[13px] leading-[1.7]">
              {META.map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <dt className="text-ink-4">{label}</dt>
                  <dd className="text-ink-2">{value}</dd>
                </div>
              ))}
            </dl>

            <SocialLinks variant="buttons" className="mt-5 flex flex-wrap gap-2.5" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-10 md:px-8">
        <button
          type="button"
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="group flex h-9 w-5 items-start justify-center rounded-full border-2 border-ink-4/40 pt-2 transition-colors duration-300 hover:border-accent/60"
        >
          <span className="h-2 w-0.5 rounded-full bg-accent transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}
