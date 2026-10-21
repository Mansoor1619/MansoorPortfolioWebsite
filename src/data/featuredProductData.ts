export interface FeaturedProduct {
  name: string;
  eyebrow: string;
  storeName: string;
  tagline: string;
  description: string;
  /** Primary CTA — the Meta Horizon Store listing. */
  storeUrl: string;
  /** Optional secondary CTA — the trailer. */
  trailerUrl: string;
  trailerYoutubeId: string;
  thumbnail: string;
  /** Highlight tiles shown under the copy. */
  highlights: { label: string; value: string }[];
  techStack: string[];
  platforms: string[];
}

export const featuredProductData: FeaturedProduct = {
  name: 'Paintball VR',
  eyebrow: 'Published · Meta Horizon Store',
  storeName: 'Meta Horizon Store',
  tagline: 'Arena-scale paintball combat, built for standalone VR.',
  description:
    'A fast, physical VR paintball shooter shipped end-to-end to the Meta Horizon Store. Multiple combat maps, three game modes and Behaviour Tree-driven opponents, tuned to hold a smooth frame rate on Meta Quest with an in-world HUD and reload system that keeps players looking forward, not at menus.',
  storeUrl: 'https://www.meta.com/experiences/paintball-vr/26987607744159108/',
  trailerUrl: 'https://www.youtube.com/watch?v=iOGf72TZTBU',
  trailerYoutubeId: 'iOGf72TZTBU',
  thumbnail: '/PaintBallVR.webp',
  highlights: [
    { label: 'Game modes', value: '3' },
    { label: 'Combat maps', value: 'Multiple' },
    { label: 'Opponents', value: 'AI-driven' },
    { label: 'Platform', value: 'Meta Quest' },
  ],
  techStack: ['Unreal Engine 5', 'C++', 'Blueprints', 'VR', 'Behaviour Trees', 'HUD'],
  platforms: ['Meta Quest 2', 'Quest 3', 'Quest Pro'],
};
