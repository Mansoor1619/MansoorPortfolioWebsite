export interface IconData {
  id: 'github' | 'linkedin';
  name: string;
  icon: string;
  url: string;
}

export const iconsData: IconData[] = [
  {
    id: 'github',
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    url: 'https://github.com/',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
    url: 'https://linkedin.com/in/',
  },
];
