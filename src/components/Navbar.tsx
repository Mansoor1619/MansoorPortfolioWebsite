import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalData } from '../data/personalData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section currently owns the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // topmost visible section wins
        const first = SECTION_IDS.find((id) => visible.has(id));
        if (first) setActive(first);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile drawer on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const initials = personalData.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line-soft bg-base' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[16px] font-semibold tracking-[-0.01em] text-ink"
        >
          <span className="grid h-[26px] w-[26px] place-items-center rounded-[7px] bg-gradient-to-br from-accent to-[#b4781f] text-[12px] font-extrabold text-[#0b0b0c]">
            {initials}
          </span>
          {personalData.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 text-[15px] transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-[3px] left-0 h-px w-full bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={personalData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-[9px] border border-line px-4 py-2 text-[14px] font-medium text-ink-2 transition-colors duration-200 hover:border-accent/50 hover:text-ink md:inline-block"
        >
          Résumé
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 text-ink-3 transition-colors hover:text-ink md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-line-soft bg-base md:hidden">
          <ul className="px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3.5 text-[16px] text-ink-3 transition-colors hover:text-ink"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={personalData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-block rounded-[9px] border border-line px-4 py-2 text-[15px] text-ink-2"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
