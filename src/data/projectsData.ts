export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  year?: string;
  featured?: boolean;
  achievements?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Military Grade VR Simulator",
    category: "Game Development",
    description: "A high-fidelity military VR simulator featuring dynamic weather systems, diverse combat environments, multiplayer networking, AI-driven enemy behavior, vehicle driving mechanics, and an extensive multi-weapon arsenal - engineered in Unreal Engine 5.",
    videoUrl: "/MultiplayerVR.mp4",
    thumbnail: "/MultiplayerVR.png",
    techStack: ["Unreal Engine 5", "C++", "Blueprints", "VR", "Multiplayer", "AI", "Niagara VFX", "Lumen"],
    liveLink: "https://combatvr.pro/",
    githubLink: "https://github.com/username/neon-nexus",
    year: "2025",
    featured: true,
    achievements: [
      "Featured on Unreal Engine Marketplace",
      "20K+ downloads",
      "Best Environment Design Award 2024"
    ]
  },
  {
    id: 2,
    title: "Architectural Viz",
    category: "Real-time Rendering",
    description: "Revolutionary architectural visualization tool that enables real-time material changes, lighting scenarios, and interactive walkthroughs. Used by top architecture firms for client presentations and design reviews.",
    videoUrl: "/Archviz.mp4",
    thumbnail: "/ArchitecturalViz.png",
    techStack: ["Unreal Engine 5", "Blueprints", "Lumen", "Nanite", "Real-time Rendering"],
    liveLink: "https://project-demo.com/lumina",
    githubLink: "https://github.com/username/lumina",
    year: "2025",
    achievements: [
      "Used by 50+ architecture firms",
      "Featured in Architectural Digest",
      "Best Innovation Award 2024"
    ]
  },
  {
    id: 3,
    title: "VR Car Configurator",
    category: "Character Animation",
    description: "An immersive VR car configurator featuring real-time material changes for exterior and interior, dynamic rim customization, environment switching, and live lighting adjustments - delivering a premium automotive experience in Unreal Engine 5.",
    videoUrl: "/VR_CarConfigurator.mp4",
    thumbnail: "/VRCarConfigurator.png",
    techStack: ["Unreal Engine 5", "Blueprints", "VR", "Lumen", "Nanite", "Datasmith", "Material System"],
    liveLink: "https://project-demo.com/meta-character",
    githubLink: "https://github.com/username/meta-character",
    year: "2023",
    featured: true,
    achievements: [
      "10K+ community downloads",
      "Used in 3 AAA game projects",
      "Epic Games MegaGrant recipient"
    ]
  },
  {
    id: 4,
    title: "VR Museum: Saudia Traveler",
    category: "Virtual Reality",
    description: "Step into a virtual museum and explore Saudi Arabia like never before. An interactive VR experience where city names on a national map transform into detailed 3D models, unlocking curated cultural videos that celebrate the heritage and traditions of each region.",
    videoUrl: "/Saudia_Map_Teleportation.mp4",
    thumbnail: "/VRMuseum.png",
    techStack: ["Unreal Engine 5", "Blueprints", "VR", "Interactive UI", "3D Modeling", "Media Framework", "Lumen"],
    liveLink: "https://project-demo.com/vr-museum",
    githubLink: "https://github.com/username/vr-museum",
    year: "2025",
    achievements: [
      "Featured at VR Expo 2024",
      "Used by 5 major museums",
      "Best Educational VR Experience"
    ]
  },
  {
    id: 5,
    title: "Paper Throw VR",
    category: "Tools & Systems",
    description: "A physics-driven VR paper toss game built in Unreal Engine 5 with real-time hand tracking, allowing players to crumple, aim, and throw paper balls using natural hand gestures - complete with dynamic scoring and responsive object interaction.",
    videoUrl: "/PaperTossVR.mp4",
    thumbnail: "/PaperThrowVR.png",
    techStack: ["Unreal Engine 5", "Blueprints", "VR", "Hand Tracking", "Physics", "Meta Quest"],
    liveLink: "https://project-demo.com/procedural-world",
    githubLink: "https://github.com/username/procedural-world",
    year: "2025",
    featured: true,
    achievements: [
      "Top 10 Asset Store - November 2024",
      "5K+ active users",
      "Integration with major game studios"
    ]
  },
  {
    id: 6,
    title: "ARena: Augmented Reality Games",
    category: "VFX & Simulation",
    description: "A multi-game AR experience built in Unreal Engine 5 featuring target shooting, spatial puzzles, and object placement challenges - powered by real-time scoring systems and competitive leaderboards for an engaging augmented reality gameplay collection.",
    videoUrl: "/AR.mp4",
    thumbnail: "/AR.jpg",
    techStack: ["Unreal Engine 5", "Blueprints", "AR", "Spatial Detection", "Real-time Scoring", "Leaderboard", "Meta Quest"],
    liveLink: "https://project-demo.com/particle-sim",
    githubLink: "https://github.com/username/particle-sim",
    year: "2024",
    achievements: [
      "VFX Award Nominee 2024",
      "Used in 50+ game trailers",
      "Featured in Unreal Engine Learning"
    ]
  },
    {
    id: 7,
    title: "CarVerse: XR Configurator",
    category: "VFX & Simulation",
    description: "A high-fidelity XR vehicle configurator built in Unreal Engine 5, featuring real-time material and lighting systems for full exterior and interior customization, dynamic rim selection, and seamless environment switching across multiple showroom settings - accessible across both AR and VR platforms.",
    videoUrl: "/XR_CarConfigurator.mp4",
    thumbnail: "/XR.jpg",
    techStack: ["Unreal Engine 5", "Blueprints", "XR", "AR", "VR", "Lumen", "Datasmith", "Real-time Rendering"],
    liveLink: "https://project-demo.com/particle-sim",
    githubLink: "https://github.com/username/particle-sim",
    year: "2024",
    achievements: [
      "VFX Award Nominee 2024",
      "Used in 50+ game trailers",
      "Featured in Unreal Engine Learning"
    ]
  },
    {
    id: 8,
    title: "NeuralFire: AI Shooter Showcase",
    category: "VFX & Simulation",
    description: "A comprehensive AI combat showcase built in Unreal Engine 5 demonstrating production-ready NPC intelligence - featuring Behavior Tree architecture, EQS-driven spatial awareness, realistic patrol systems, precision shooting mechanics, and aggressive adaptive attack behaviors.",
    videoUrl: "/TPS_AI.mp4",
    thumbnail: "/AIShooter.png",
    techStack: ["Unreal Engine 5", "C++", "Blueprints", "Behavior Trees", "EQS", "AI Systems", "Combat AI"],
    liveLink: "https://project-demo.com/particle-sim",
    githubLink: "https://github.com/username/particle-sim",
    year: "2024",
    achievements: [
      "VFX Award Nominee 2024",
      "Used in 50+ game trailers",
      "Featured in Unreal Engine Learning"
    ]
  },
    {
    id: 9,
    title: "PaintballVR: Arena Combat",
    category: "VFX & Simulation",
    description: "A comprehensive VR paintball game built in Unreal Engine 5 featuring multiple combat maps, three distinct game modes (timed, wave survival, one-life elimination), AI-driven opponents with Behavior Trees, a realistic shooting and ammo pickup system, and a fully interactive health and HUD widget system.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    techStack: ["Unreal Engine 5", "C++", "Blueprints", "VR", "AI Systems", "Behavior Trees", "Meta Quest", "HUD"],
    liveLink: "https://project-demo.com/particle-sim",
    githubLink: "https://github.com/username/particle-sim",
    year: "2026",
    achievements: [
      "VFX Award Nominee 2024",
      "Used in 50+ game trailers",
      "Featured in Unreal Engine Learning"
    ]
  }
];