import { Mail, Phone, MapPin, Briefcase, Layers, Users, Gauge } from 'lucide-react';
import { personalData } from '../data/personalData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const FACTS = [
  { icon: <Mail size={15} />, label: personalData.email, href: `mailto:${personalData.email}` },
  { icon: <Phone size={15} />, label: personalData.phone, href: `tel:${personalData.phone.replace(/\s/g, '')}` },
  { icon: <MapPin size={15} />, label: personalData.location },
];

// Concrete, defensible figures drawn from the CV — no inflated vanity metrics.
const STATS = [
  { icon: <Briefcase size={16} />, value: '3+', label: 'Years in production' },
  { icon: <Layers size={16} />, value: '9', label: 'Shipped projects' },
  { icon: <Users size={16} />, value: '30+', label: 'Concurrent players' },
  { icon: <Gauge size={16} />, value: '72–90', label: 'FPS on Quest 3' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-base py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="Who I am"
          meta="Islamabad, PK"
        />

        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-14">
          <Reveal delay={100}>
            <div className="rounded-[14px] border border-line bg-surface p-7 md:p-8">
              <p className="text-[17px] leading-[1.8] text-ink-2">{personalData.aboutText}</p>
            </div>

            <ul className="mt-5 space-y-2.5">
              {FACTS.map((fact) => {
                const content = (
                  <>
                    <span className="text-accent">{fact.icon}</span>
                    <span className="text-[15.5px] text-ink-2">{fact.label}</span>
                  </>
                );
                return (
                  <li key={fact.label}>
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="flex items-center gap-3 rounded-[10px] border border-line-soft px-4 py-3 transition-colors duration-200 hover:border-accent/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-[10px] border border-line-soft px-4 py-3">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 self-start">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={150 + i * 90}>
                <div className="h-full rounded-[14px] border border-line bg-surface p-5">
                  <span className="mb-3 inline-grid h-9 w-9 place-items-center rounded-[9px] bg-accent/10 text-accent">
                    {stat.icon}
                  </span>
                  <p className="text-[26px] leading-none font-bold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[14px] leading-snug text-ink-4">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
