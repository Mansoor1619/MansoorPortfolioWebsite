import type { ReactNode } from 'react';
import {
  Cpu, Code2, Gamepad2, Wifi, Brain, Glasses, Bone, Sparkles, Palette, Gauge, Atom,
  Footprints, Layers, Eye, Settings2, Crosshair, Target, Camera, Droplets, Hammer,
  Monitor, GitBranch, Terminal, Kanban, Database, Server,
} from 'lucide-react';
import { skills } from '../data/skillsData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const iconMap: Record<string, ReactNode> = {
  'Unreal Engine 5': <Gamepad2 size={14} />,
  'C++ Programming': <Code2 size={14} />,
  Blueprints: <Cpu size={14} />,
  'Multiplayer & Networking': <Wifi size={14} />,
  'AI Systems (BT & EQS)': <Brain size={14} />,
  'Gameplay Architecture': <Crosshair size={14} />,
  'Combat Systems': <Target size={14} />,
  'VR Development': <Glasses size={14} />,
  'AR Development': <Camera size={14} />,
  'Animation Systems': <Footprints size={14} />,
  'Control Rig & IK': <Bone size={14} />,
  'Niagara VFX': <Sparkles size={14} />,
  'Shader Development': <Palette size={14} />,
  'Material Systems': <Droplets size={14} />,
  'Performance Optimization': <Gauge size={14} />,
  'Chaos Physics': <Atom size={14} />,
  'Destruction Physics': <Hammer size={14} />,
  PixelStreaming: <Monitor size={14} />,
  'Version Control (Git/Perforce)': <GitBranch size={14} />,
  'IDE Proficiency (Visual Studio)': <Terminal size={14} />,
  'Project Management (Jira)': <Kanban size={14} />,
  'Database Design': <Database size={14} />,
  SQL: <Server size={14} />,
  MongoDB: <Database size={14} />,
};

const CATEGORIES: { title: string; icon: ReactNode; keys: string[] }[] = [
  { title: 'Core Engine', icon: <Layers size={17} />, keys: ['Unreal Engine 5', 'C++ Programming', 'Blueprints', 'Performance Optimization'] },
  { title: 'Gameplay & AI', icon: <Crosshair size={17} />, keys: ['Multiplayer & Networking', 'AI Systems (BT & EQS)', 'Gameplay Architecture', 'Combat Systems'] },
  { title: 'VR/AR & Graphics', icon: <Eye size={17} />, keys: ['VR Development', 'AR Development', 'Niagara VFX', 'Shader Development', 'Material Systems', 'Pixel Streaming'] },
  { title: 'Animation & Physics', icon: <Footprints size={17} />, keys: ['Animation Systems', 'Control Rig & IK', 'Chaos Physics', 'Destruction Physics'] },
  { title: 'Tools & Workflow', icon: <Settings2 size={17} />, keys: ['Version Control (Git/Perforce)', 'IDE Proficiency (Visual Studio)', 'Project Management (Jira)'] },
  { title: 'Databases', icon: <Database size={17} />, keys: ['Database Design', 'SQL', 'MongoDB'] },
];

export default function Skills() {
  const total = skills.length;

  return (
    <section id="skills" className="relative bg-base py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Technical skills"
          meta={`${total} technologies`}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {CATEGORIES.map((category, i) => {
            const items = category.keys
              .map((key) => skills.find((s) => s.name === key))
              .filter((s): s is (typeof skills)[number] => Boolean(s));

            return (
              <Reveal key={category.title} delay={i * 70}>
                <div className="h-full rounded-[14px] border border-line bg-surface p-6">
                  <div className="mb-5 flex items-center gap-3 border-b border-line-soft pb-4">
                    <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-accent/10 text-accent">
                      {category.icon}
                    </span>
                    <h3 className="text-[17px] font-semibold text-ink">{category.title}</h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-[8px] border border-line-soft bg-surface-2 px-3 py-2 text-[14.5px] text-ink-2"
                      >
                        <span className="text-accent">{iconMap[skill.name] ?? <Code2 size={13} />}</span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
