import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    role: "Unreal Engine Developer",
    period: "October 2024 – Present",
    company: "Mimar Studios, Islamabad, Pakistan",
    bullets: [
      "Architected and maintained scalable multiplayer gameplay systems supporting LAN and online sessions for 30+ concurrent players using Unreal replication and RPC frameworks.",
      "Designed modular AI combat frameworks using Behavior Trees and EQS, supporting dynamic state-driven enemy and vehicle behaviors.",
      "Developed extensible animation systems leveraging Control Rig, IK, and layered Animation Blueprints to support responsive combat and character movement.",
      "Built high-fidelity VR combat mechanics including weapon handling, recoil simulation, reload systems, and hardware-synced feedback loops.",
      "Profiled and optimized rendering, physics, and network performance, maintaining 72–90 FPS on Meta Quest 3 and reducing draw calls by ~30%.",
      "Collaborated within a cross-functional team of 6–8 developers, delivering gameplay features across iterative production sprints.",
    ],
  },
  {
    role: "Unreal Engine Developer",
    period: "June 2023 – October 2024",
    company: "Algoryte, Islamabad, Pakistan",
    bullets: [
      "Led development of an interactive VR vehicle configurator featuring real-time material, mesh, and environment customization on Meta Quest 2.",
      "Implemented gameplay interaction systems within pixel-streamed Unreal environments, enabling low-latency remote user interaction.",
      "Designed AR gameplay systems including spatial detection, real-time spawning, progression tracking, and leaderboard infrastructure.",
      "Integrated backend APIs for persistent player progression and live data synchronization across sessions.",
      "Optimized assets and rendering pipelines to maintain stable 72 FPS on standalone VR hardware under performance constraints.",
    ],
  },
];

const ExperienceEntry: React.FC<{ entry: typeof experienceData[0]; index: number }> = ({ entry, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([el]) => { if (el.isIntersecting) { setTimeout(() => setVisible(true), index * 200); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{entry.role}</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Briefcase size={14} />
            <span>{entry.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-teal-400 text-sm font-medium whitespace-nowrap">
          <Calendar size={14} />
          <span>{entry.period}</span>
        </div>
      </div>
      <ul className="space-y-3">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([el]) => { if (el.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2 block">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-blue-500/30 to-transparent hidden md:block" />
          <div className="space-y-8">
            {experienceData.map((entry, i) => (
              <ExperienceEntry key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
