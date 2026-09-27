import { iconsData } from '../data/iconData';
import { personalData } from '../data/personalData';

interface SocialLinksProps {
  variant: 'buttons' | 'icons';
  className?: string;
}

/** Single source of truth for profile URLs, shared by the hero and the footer. */
export default function SocialLinks({ variant, className = '' }: SocialLinksProps) {
  return (
    <ul className={className}>
      {iconsData.map((social) => {
        const handle = personalData[social.id];
        const href = `${social.url}${handle}`;

        if (variant === 'icons') {
          return (
            <li key={social.id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="grid h-10 w-10 place-items-center rounded-[9px] border border-line bg-surface transition-colors duration-200 hover:border-accent/50"
              >
                <img
                  src={social.icon}
                  alt=""
                  width={17}
                  height={17}
                  loading="lazy"
                  className="h-[17px] w-[17px] opacity-70 invert"
                />
              </a>
            </li>
          );
        }

        return (
          <li key={social.id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[9px] border border-line bg-surface px-4 py-2.5 text-[15px] font-medium text-ink-2 transition-colors duration-200 hover:border-accent/50 hover:text-ink"
            >
              <img
                src={social.icon}
                alt=""
                width={16}
                height={16}
                loading="lazy"
                className="h-4 w-4 opacity-70 invert"
              />
              {social.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
