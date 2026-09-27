import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/personalData';
import SocialLinks from './SocialLinks';

const QUICK_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft bg-base">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[19px] font-semibold tracking-[-0.015em] text-ink">
              {personalData.name}
            </p>
            <p className="mt-2 max-w-[34ch] text-[15px] leading-[1.65] text-ink-4">
              {personalData.title} — {personalData.location}
            </p>

            <SocialLinks variant="icons" className="mt-5 flex gap-2.5" />
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[15px] text-ink-4 transition-colors duration-200 hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line-soft pt-6 text-[13.5px] text-ink-4">
          <p>
            © {year} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed right-6 bottom-6 z-40 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-2 transition-colors duration-200 hover:border-accent/50 hover:text-accent"
      >
        <ArrowUp size={17} />
      </button>
    </footer>
  );
}
