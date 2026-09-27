import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const experienceData: ExperienceEntry[] = [
  {
    role: 'Unreal Engine Developer',
    company: 'Mimar Studios',
    period: 'October 2024 – Present',
    bullets: [
      'Architected and maintained scalable multiplayer gameplay systems supporting LAN and online sessions for 30+ concurrent players using Unreal replication and RPC frameworks.',
      'Designed modular AI combat frameworks using Behavior Trees and EQS, supporting dynamic state-driven enemy and vehicle behaviors.',
      'Developed extensible animation systems leveraging Control Rig, IK, and layered Animation Blueprints to support responsive combat and character movement.',
      'Built high-fidelity VR combat mechanics including weapon handling, recoil simulation, reload systems, and hardware-synced feedback loops.',
      'Profiled and optimized rendering, physics, and network performance, maintaining 72–90 FPS on Meta Quest 3 and reducing draw calls by approximately 30%.',
      'Collaborated within a cross-functional team of 6–8 developers, delivering gameplay features across iterative production sprints.',
    ],
  },
  {
    role: 'Unreal Engine Developer',
    company: 'Algoryte',
    period: 'June 2023 – October 2024',
    bullets: [
      'Led development of an interactive VR vehicle configurator featuring real-time material, mesh, and environment customization on Meta Quest 2.',
      'Implemented gameplay interaction systems within pixel-streamed Unreal environments, enabling low-latency remote user interaction.',
      'Designed AR gameplay systems including spatial detection, real-time spawning, progression tracking, and leaderboard infrastructure.',
      'Integrated backend APIs for persistent player progression and live data synchronization across sessions.',
      'Optimized assets and rendering pipelines to maintain stable 72 FPS on standalone VR hardware under performance constraints.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-base py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading eyebrow="Career" title="Work experience" meta="2 studios" />

        <ol className="relative space-y-5 md:pl-9">
          {/* rail + node, aligned to the card edge */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[7px]"
          />

          {experienceData.map((entry, i) => (
            <li key={`${entry.company}-${entry.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-7 -left-[22px] hidden h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-base md:block"
              />
              <Reveal delay={i * 110}>
                <article className="rounded-[14px] border border-line bg-surface p-6 md:p-7">
                  <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-6">
                    <div>
                      <h3 className="text-[21px] font-semibold tracking-[-0.015em] text-ink">
                        {entry.role}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-[15px] text-ink-3">
                        <Briefcase size={13} className="text-accent" />
                        {entry.company}
                        <span className="text-ink-4">· Islamabad, Pakistan</span>
                      </p>
                    </div>
                    <p className="flex shrink-0 items-center gap-2 font-mono text-[13px] whitespace-nowrap text-ink-2">
                      <Calendar size={13} className="text-accent" />
                      {entry.period}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15.5px] leading-[1.7] text-ink-3">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
