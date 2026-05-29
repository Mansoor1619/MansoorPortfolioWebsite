import React, { useEffect, useState, useRef } from 'react';
import { skills } from '../data/skillsData';
import {
  Cpu, Code2, Gamepad2, Wifi, Brain, Glasses, VenetianMask,
  Sparkles, Palette, Gauge, Atom, Footprints, Layers,
  Eye, Settings2, Crosshair, Target, Camera, Droplets,
  Hammer, Monitor, GitBranch, Database, Server, Terminal, Kanban
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  "Unreal Engine 5": <Gamepad2 size={18} />,
  "C++ Programming": <Code2 size={18} />,
  "Blueprints": <Cpu size={18} />,
  "Multiplayer & Networking": <Wifi size={18} />,
  "AI Systems (BT & EQS)": <Brain size={18} />,
  "Gameplay Architecture": <Crosshair size={18} />,
  "Combat Systems": <Target size={18} />,
  "VR Development": <Glasses size={18} />,
  "AR Development": <Camera size={18} />,
  "Animation Systems": <Footprints size={18} />,
  "Control Rig & IK": <VenetianMask size={18} />,
  "Niagara VFX": <Sparkles size={18} />,
  "Shader Development": <Palette size={18} />,
  "Material Systems": <Droplets size={18} />,
  "Performance Optimization": <Gauge size={18} />,
  "Chaos Physics": <Atom size={18} />,
  "Destruction Physics": <Hammer size={18} />,
  "Pixel Streaming": <Monitor size={18} />,
  "Version Control (Git/Perforce)": <GitBranch size={18} />,
  "IDE Proficiency (Visual Studio)": <Terminal size={18} />,
  "Project Management (Jira)": <Kanban size={18} />,
  "Database Design": <Database size={18} />,
  "SQL": <Server size={18} />,
  "MongoDB": <Database size={18} />,
};

const categoryConfig: { title: string; icon: React.ReactNode; keys: string[] }[] = [
  { title: "Core Engine", icon: <Layers size={20} />, keys: ["Unreal Engine 5", "C++ Programming", "Blueprints", "Performance Optimization"] },
  { title: "Gameplay & AI", icon: <Crosshair size={20} />, keys: ["Multiplayer & Networking", "AI Systems (BT & EQS)", "Gameplay Architecture", "Combat Systems"] },
  { title: "VR/AR & Graphics", icon: <Eye size={20} />, keys: ["VR Development", "AR Development", "Niagara VFX", "Shader Development", "Material Systems", "Pixel Streaming"] },
  { title: "Animation & Physics", icon: <Footprints size={20} />, keys: ["Animation Systems", "Control Rig & IK", "Chaos Physics", "Destruction Physics"] },
  { title: "Tools & Workflow", icon: <Settings2 size={20} />, keys: ["Version Control (Git/Perforce)", "IDE Proficiency (Visual Studio)", "Project Management (Jira)"] },
  { title: "Databases", icon: <Database size={20} />, keys: ["Database Design", "SQL", "MongoDB"] },
];

const SkillTag: React.FC<{ name: string; index: number }> = ({ name, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), index * 80); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/[0.06] transition-all duration-500 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <span className="text-teal-400 flex-shrink-0">{iconMap[name] || <Code2 size={15} />}</span>
      <span className="text-gray-300 text-sm whitespace-nowrap">{name}</span>
    </div>
  );
};

const CategoryCard: React.FC<{ config: typeof categoryConfig[0]; index: number }> = ({ config, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const categorySkills = skills.filter(s => config.keys.includes(s.name));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), index * 150); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center text-teal-400">
          {config.icon}
        </div>
        <h3 className="text-white font-semibold text-base">{config.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {categorySkills.map((skill, i) => (
          <SkillTag key={skill.name} name={skill.name} index={i} />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 bg-[#050505]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categoryConfig.map((cat, i) => (
            <CategoryCard key={cat.title} config={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
