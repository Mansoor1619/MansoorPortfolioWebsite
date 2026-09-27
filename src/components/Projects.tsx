import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Projects() {
  // projects whose video has replaced the thumbnail
  const [playing, setPlaying] = useState<Set<number>>(() => new Set());
  const [expanded, setExpanded] = useState<number | null>(null);

  const play = (id: number) => setPlaying((prev) => new Set(prev).add(id));
  const toggle = (id: number) => setExpanded((prev) => (prev === id ? null : id));

  const featuredCount = projectsData.filter((p) => p.featured).length;

  return (
    <section id="projects" className="relative bg-base py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured work"
          meta={`${projectsData.length} projects · ${featuredCount} featured`}
          lede="Click any card to expand the technical breakdown, or hit play to watch the build video."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => {
            const isPlaying = playing.has(project.id);
            const isOpen = expanded === project.id;

            return (
              <Reveal
                key={project.id}
                delay={(i % 3) * 80}
                className={`h-full ${isOpen ? 'md:col-span-2' : ''}`}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-colors duration-300 hover:border-accent/35">
                  {/* video / thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {isPlaying ? (
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                        title={`${project.title} — video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => play(project.id)}
                        aria-label={`Play video for ${project.title}`}
                        className="group absolute inset-0 h-full w-full cursor-pointer"
                      >
                        <img
                          src={project.thumbnail}
                          alt={`${project.title} gameplay screenshot`}
                          width={800}
                          height={419}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <span className="absolute inset-0 grid place-items-center bg-black/25 transition-colors duration-300 group-hover:bg-black/10">
                          <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                            <Play size={22} className="ml-0.5 fill-white text-white" />
                          </span>
                        </span>
                      </button>
                    )}

                    <span className="pointer-events-none absolute top-3.5 left-3.5 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[11px] tracking-[0.07em] text-ink-2 uppercase backdrop-blur-md">
                      {project.category}
                    </span>

                    {/* expand indicator, mirroring the previous card treatment */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-3.5 bottom-3 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/55 text-ink-2 backdrop-blur-md transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </div>

                  {/* whole card body toggles the breakdown */}
                  <button
                    type="button"
                    onClick={() => toggle(project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`project-detail-${project.id}`}
                    className="flex flex-1 cursor-pointer flex-col p-5 text-left"
                  >
                    <span className="mb-2.5 flex items-baseline justify-between gap-3">
                      <span className="text-[17px] leading-snug font-semibold tracking-[-0.015em] text-ink">
                        {project.title}
                      </span>
                      <span className="shrink-0 font-mono text-[12.5px] text-ink-4">
                        {project.year}
                      </span>
                    </span>

                    <span className="text-[15px] leading-[1.65] text-ink-3">
                      {project.description}
                    </span>

                    <span className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[6px] border border-line-soft px-2 py-1 text-[12px] text-ink-3"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-[6px] border border-line-soft px-2 py-1 text-[12px] text-ink-4">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </span>

                    <span className="mt-5 flex items-center justify-between border-t border-line-soft pt-4 text-[14px] font-medium text-ink-2">
                      {isOpen ? 'Hide technical breakdown' : 'Technical breakdown'}
                      <ChevronDown
                        size={16}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`project-detail-${project.id}`}
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line-soft px-5 pt-5 pb-6">
                          <p className="text-[15px] leading-[1.75] text-ink-3">{project.detail}</p>
                          <p className="mt-5 mb-2.5 font-mono text-[11px] tracking-[0.12em] text-ink-4 uppercase">
                            Full toolset
                          </p>
                          <span className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-[6px] border border-accent/25 bg-accent/[0.06] px-2 py-1 text-[12px] text-accent"
                              >
                                {tech}
                              </span>
                            ))}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
