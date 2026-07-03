import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { Play, Pause, Loader, Calendar, Tag, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [bufferingId, setBufferingId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const toggleVideo = useCallback((id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (video.paused) {
      if (playingId !== null && playingId !== id) {
        const prev = videoRefs.current[playingId];
        if (prev) prev.pause();
      }
      video.play().then(() => setBufferingId(null)).catch(() => setBufferingId(null));
      setPlayingId(id);
      setBufferingId(id);
    } else {
      video.pause();
      setPlayingId(null);
      setBufferingId(null);
    }
  }, [playingId]);

  const setVideoRef = (id: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[id] = el;
  };

  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.load();
    });
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-[#050505]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div key={project.id} className={`group ${isExpanded ? 'md:col-span-2' : ''}`}>
                {/* Main Card */}
                <div
                  className="project-card rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  {/* Video */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden cursor-pointer">
                    <video
                      ref={setVideoRef(project.id)}
                      className="w-full h-full object-cover"
                      poster={project.thumbnail}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onClick={(e) => { e.stopPropagation(); toggleVideo(project.id); setExpandedId(isExpanded ? null : project.id); }}
                      onWaiting={() => setBufferingId(project.id)}
                      onPlaying={() => setBufferingId(null)}
                      onCanPlay={() => setBufferingId(null)}
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>

                    {/* Desktop gradient overlay */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>

                    {/* Play/Pause button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none">
                      {bufferingId === project.id ? (
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                          <Loader className="w-7 h-7 text-teal-400 animate-spin" />
                        </div>
                      ) : playingId === project.id ? (
                        <div className="w-14 h-14 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Pause className="w-6 h-6 text-white fill-white" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-transform duration-300 hover:scale-110">
                          <Play className="w-7 h-7 text-white ml-0.5 fill-white" />
                        </div>
                      )}
                    </div>

                    {/* Badges */}
                    <div className="absolute top-5 left-5 flex gap-2">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                        <Tag size={11} />
                        {project.category}
                      </span>
                      {project.year && (
                        <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full flex items-center gap-1">
                          <Calendar size={11} />
                          {project.year}
                        </span>
                      )}
                    </div>

                    {/* Desktop overlay content */}
                    <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1.5">{project.title}</h3>
                      <p className="text-gray-400 text-sm max-w-2xl line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-md backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <div className="absolute bottom-3 right-4 text-gray-500 group-hover:text-teal-400 transition-colors duration-300 hidden md:block">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {/* Mobile content below video */}
                  <div className="block md:hidden p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white/5 text-teal-400 text-xs font-medium rounded-md border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="glass-card rounded-b-2xl p-6 md:p-8 -mt-1 border-t-0">
                        <div className="max-w-3xl mx-auto">
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
                            Full Description
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {project.description}
                          </p>
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1.5 bg-white/5 text-teal-400 text-xs font-medium rounded-md border border-white/10">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
