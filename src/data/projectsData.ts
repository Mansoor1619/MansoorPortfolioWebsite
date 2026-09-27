export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  /** Long-form copy shown in the expanded panel. */
  detail: string;
  youtubeId: string;
  thumbnail: string;
  techStack: string[];
  year: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Military Grade VR Simulator',
    category: 'Game Development',
    description:
      'A high-fidelity military VR simulator with dynamic weather, varied combat environments, multiplayer networking, AI-driven enemies and vehicle mechanics.',
    detail:
      'Built in Unreal Engine 5, this simulator covers a full combat loop: weapon handling with recoil and reload simulation, vehicle driving, and AI enemies driven by Behaviour Trees and EQS. Multiplayer sessions support LAN and online play for 30+ concurrent players using Unreal replication and RPC frameworks. Profiling work on rendering, physics and network traffic holds 72–90 FPS on Meta Quest 3 and reduced draw calls by roughly 30%.',
    youtubeId: 'jSNSTNAjb7k',
    thumbnail: '/MultiplayerVR.webp',
    techStack: ['Unreal Engine 5', 'C++', 'Blueprints', 'VR', 'Multiplayer', 'AI', 'Niagara', 'Lumen'],
    year: '2025',
    featured: true,
  },
  {
    id: 2,
    title: 'Architectural Viz',
    category: 'Real-time Rendering',
    description:
      'Real-time architectural walkthroughs enabling live material changes, lighting scenarios and interactive client presentations.',
    detail:
      'A real-time visualization toolset for architecture studios. Clients can swap materials, test lighting scenarios and walk through interior spaces interactively instead of waiting on offline renders. Built with Lumen and Nanite for physically accurate lighting at interactive frame rates, and Datasmith for importing and optimizing BIM-derived geometry.',
    youtubeId: 'GgA-PE2N93E',
    thumbnail: '/ArchitecturalViz.webp',
    techStack: ['Unreal Engine 5', 'Blueprints', 'Lumen', 'Nanite', 'Datasmith'],
    year: '2025',
  },
  {
    id: 3,
    title: 'VR Car Configurator',
    category: 'Virtual Reality',
    description:
      'An immersive VR configurator with real-time material, rim and environment customization, delivered on Meta Quest 2.',
    detail:
      'A premium automotive configuration experience running entirely in standalone VR. Customers configure exterior paint, interior trim and wheel design in real time, and switch between showroom environments to judge how the finish reads under different lighting. Optimized to hold a stable 72 FPS on Quest 2 by streaming assets on demand and baking lighting where it did not need to be dynamic.',
    youtubeId: 'j7CPi6FcOgw',
    thumbnail: '/VRCarConfigurator.webp',
    techStack: ['Unreal Engine 5', 'Blueprints', 'VR', 'Lumen', 'Nanite', 'Datasmith', 'Material System'],
    year: '2023',
    featured: true,
  },
  {
    id: 4,
    title: 'VR Museum: Saudia Traveler',
    category: 'Virtual Reality',
    description:
      'An interactive virtual museum where city names on a national map transform into detailed 3D models with curated cultural video.',
    detail:
      'Visitors explore Saudi Arabia from a virtual museum floor. Selecting a city name on the national map teleports them to that region and resolves it into a detailed 3D model, alongside curated cultural video covering the heritage and traditions of the area. Interaction is driven by the Media Framework and a custom interactive UI, with Lumen lighting to keep the museum interior readable across headset resolutions.',
    youtubeId: 'vuym0t4S5wg',
    thumbnail: '/VRMuseum.webp',
    techStack: ['Unreal Engine 5', 'Blueprints', 'VR', 'Interactive UI', '3D Modeling', 'Media Framework', 'Lumen'],
    year: '2025',
  },
  {
    id: 5,
    title: 'Paper Throw VR',
    category: 'Virtual Reality',
    description:
      'A physics-driven VR paper toss game with real-time hand tracking and natural gesture-based input.',
    detail:
      'Players crumple, aim and throw paper balls using natural hand gestures. The interaction layer is driven by real-time hand tracking, feeding directly into the physics simulation so thrown objects behave believably rather than following a scripted arc. Includes dynamic scoring and responsive object interaction, with performance tuned to stay inside the standalone VR frame budget.',
    youtubeId: 'nX3Ny2EdUxo',
    thumbnail: '/PaperThrowVR.webp',
    techStack: ['Unreal Engine 5', 'Blueprints', 'VR', 'Hand Tracking', 'Physics', 'Meta Quest'],
    year: '2025',
    featured: true,
  },
  {
    id: 6,
    title: 'ARena: Augmented Reality Games',
    category: 'Augmented Reality',
    description:
      'A multi-game AR collection featuring target shooting, spatial puzzles and object placement, with live scoring and leaderboards.',
    detail:
      'A collection of augmented reality games sharing one progression and scoring backbone: target shooting, spatial puzzles and object placement challenges. Spatial detection anchors gameplay to the player environment, while a real-time scoring system and leaderboard infrastructure keep runs competitive across sessions. Built for mobile AR with Meta Quest as the primary target.',
    youtubeId: '1ktUQXlomcE',
    thumbnail: '/AR.webp',
    techStack: ['Unreal Engine 5', 'Blueprints', 'AR', 'Spatial Detection', 'Real-time Scoring', 'Leaderboard'],
    year: '2024',
  },
  {
    id: 7,
    title: 'CarVerse: XR Configurator',
    category: 'XR Development',
    description:
      'A high-fidelity XR vehicle configurator with real-time material and lighting, running across both AR and VR.',
    detail:
      'An extension of the VR configurator into a unified XR build. Real-time material and lighting systems drive full exterior and interior customization, dynamic rim selection and environment switching across multiple showroom settings, and the same project ships to AR and VR so customers can configure on a desktop-scale display or in a headset without switching tools.',
    youtubeId: 'p08gXjn1Av8',
    thumbnail: '/XR.webp',
    techStack: ['Unreal Engine 5', 'Blueprints', 'XR', 'AR', 'VR', 'Lumen', 'Datasmith'],
    year: '2024',
  },
  {
    id: 8,
    title: 'NeuralFire: AI Shooter Showcase',
    category: 'AI Development',
    description:
      'A production-ready AI combat showcase demonstrating Behaviour Tree architecture, EQS spatial awareness and adaptive attacks.',
    detail:
      'A combat AI reference implementation built around Behaviour Tree architecture with EQS-driven spatial awareness. Covers patrol routing, cover selection and precision shooting, with enemies that escalate behaviour as the encounter develops rather than switching state on a timer. The AI layer is separated from gameplay so the same framework could be reused across weapons, vehicles and companion actors.',
    youtubeId: '81rI5PSaSfs',
    thumbnail: '/AIShooter.webp',
    techStack: ['Unreal Engine 5', 'C++', 'Blueprints', 'Behavior Trees', 'EQS', 'AI Systems', 'Combat AI'],
    year: '2024',
  },
  {
    id: 9,
    title: 'PaintballVR: Arena Combat',
    category: 'Virtual Reality',
    description:
      'A VR paintball game with multiple maps, three game modes, AI opponents and a full health and HUD system.',
    detail:
      'Three distinct game modes — timed, wave survival and one-life elimination — across multiple combat maps. Opponents are driven by Behaviour Trees rather than fixed patrol paths, so they respond to player positioning. The shooting and ammo pickup systems model reload and reserve ammunition separately, and the health and HUD widget layer is fully interactive in-world to keep the player looking forward instead of at a menu.',
    youtubeId: 'iOGf72TZTBU',
    thumbnail: '/PaintBallVR.webp',
    techStack: ['Unreal Engine 5', 'C++', 'Blueprints', 'VR', 'AI Systems', 'Behavior Trees', 'HUD'],
    year: '2026',
  },
];
