import React, { useRef, useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import { Play, Pause, Maximize2, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Handle video play on hover
  const handleVideoHover = (id: number, isHovering: boolean) => {
    const video = videoRefs.current[id];
    if (video) {
      if (isHovering) {
        // Pause any other playing video
        if (hoveredVideo !== null && hoveredVideo !== id) {
          const prevVideo = videoRefs.current[hoveredVideo];
          if (prevVideo) {
            prevVideo.pause();
          }
        }
        video.play();
        setHoveredVideo(id);
      } else {
        video.pause();
        video.currentTime = 0; // Reset to beginning
        setHoveredVideo(null);
      }
    }
  };

  const setVideoRef = (id: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[id] = el;
  };

  // Preload videos
  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.load();
      }
    });
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-teal-500/10 rounded-full text-teal-400 text-sm font-medium border border-teal-500/20">
              My Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Explore my latest Unreal Engine projects showcasing cutting-edge graphics, immersive experiences, and technical excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 shadow-xl hover:shadow-2xl border border-gray-700/50 hover:border-teal-500/30 ${
                expandedProject === project.id ? 'md:col-span-2' : ''
              }`}
            >
              {/* Video Container */}
              <div 
                className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden cursor-pointer"
                onMouseEnter={() => handleVideoHover(project.id, true)}
                onMouseLeave={() => handleVideoHover(project.id, false)}
              >
                <video
                  ref={setVideoRef(project.id)}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  poster={project.thumbnail}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play/Pause Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black/70 backdrop-blur-md rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    {hoveredVideo === project.id ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-0.5" />
                    )}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                    <Tag size={12} />
                    {project.category}
                  </span>
                </div>
                
                {/* Year Badge (if available) */}
                {project.year && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                  </div>
                )}
                
                {/* Expand Button */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="absolute bottom-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-teal-500"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-700/50 text-teal-400 text-xs font-medium rounded-full border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links and Stats */} 
         {/*     <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-700"> 
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                      >
                        <Globe size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>       */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;