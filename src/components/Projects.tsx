import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ChevronLeft, ChevronRight, Calendar, Tag, Play } from 'lucide-react';

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

const Projects: React.FC = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const project = projectsData[currentIndex];

  const goNext = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % projectsData.length, 1]);
  }, []);

  const goPrev = useCallback(() => {
    setPage(([prev]) => [(prev - 1 + projectsData.length) % projectsData.length, -1]);
  }, []);

  const goTo = useCallback((index: number) => {
    setPage([index, index > currentIndex ? 1 : -1]);
  }, [currentIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    clearInterval(autoPlayRef.current);

    const onPlay = () => {
      setVideoPlaying(true);
      clearInterval(autoPlayRef.current);
    };
    const onPause = () => {
      setVideoPlaying(false);
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(goNext, 6000);
    };
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    const timer = setTimeout(() => {
      video.play().catch(() => {});
    }, 400);

    return () => {
      clearTimeout(timer);
      clearInterval(autoPlayRef.current);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, [currentIndex, goNext]);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

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

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {/* Video */}
                <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={project.thumbnail}
                    loop
                    muted
                    playsInline
                    onClick={toggleVideo}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>

                  {/* Desktop gradient overlay */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent pointer-events-none"></div>

                  <div onClick={toggleVideo} className="absolute inset-0 flex items-center justify-center cursor-pointer group">
                    {!videoPlaying && (
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                        <Play size={28} className="text-white ml-1 fill-white" />
                      </div>
                    )}
                  </div>

                  <div className="absolute top-5 left-5 flex gap-2 pointer-events-none">
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
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-base max-w-2xl line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.slice(0, 5).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-md backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile content below video */}
                <div className="block md:hidden glass-card rounded-b-2xl p-5 -mt-2">
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
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-300 cursor-pointer z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-300 cursor-pointer z-10"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center items-center gap-2.5 mt-8">
            {projectsData.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 h-2.5 bg-gradient-to-r from-teal-500 to-blue-600'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-3 text-gray-500 text-sm">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
