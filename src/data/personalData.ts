export interface PersonalData {
  name: string;
  title: string;
  /** Fields cycled through in the hero. `title` is the canonical one used for SEO. */
  rotatingTitles: string[];
  description: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeLink: string;
  avatar: string;
  aboutText: string;
}

export const personalData: PersonalData = {
  name: 'Muhammad Mansoor',
  title: 'Unreal Engine Developer & Technical Artist',
  rotatingTitles: [
    'Unreal Engine Gameplay Programmer',
    'Multiplayer & Network Systems Engineer',
    'VR / XR Developer',
    'Game Developer',
  ],
  description:
    'Building immersive VR worlds, scalable multiplayer systems and AI-driven game experiences in Unreal Engine 5 — shipping at 72–90 FPS on standalone Meta Quest 3.',
  email: 'muhammadmansoor3085@gmail.com',
  location: 'Islamabad, Pakistan',
  phone: '+92 331 5514677',
  github: 'Mansoor1619',
  linkedin: 'mansoor07',
  resumeLink: '/MansoorCV_UnrealEngineDeveloper.pdf',
  avatar: '/avatar.webp',
  aboutText:
    'I am an Unreal Engine Developer with 3+ years of experience designing and engineering scalable multiplayer and AI-driven systems in Unreal Engine 5 using C++ and Blueprints. My work spans network replication, gameplay architecture, combat systems and performance optimization across PC and standalone VR. I focus on production-ready systems built for scalability, maintainability and player experience — most recently maintaining 72–90 FPS on Meta Quest 3 while cutting draw calls by roughly 30%.',
};
