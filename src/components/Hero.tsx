import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Sparkles, Code2, Gamepad2, Layers } from 'lucide-react';
import { personalData } from '../data/personalData';
import { iconsData } from '../data/iconData';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Unreal Engine Gameplay Programmer",
    "VR Developer",
    "Game Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }}
        ></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-medium">Available for freelance work</span>
          </div>
          
          {/* Profile Image with Glow Effect */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img
              src={personalData.avatar}
              alt={personalData.name}
              className="w-70 h-70 rounded-full  mx-auto border-4 border-teal-500 shadow-2xl animate-float relative z-10 object-cover object-[center_20%]"
            />
          </div>
          
          {/* Name with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            {personalData.name}
          </h1>
          
          {/* Rotating Text */}
          <div className="h-16 mb-4">
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up">
              {rotatingTexts[textIndex]}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalData.description}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">20+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">15+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
          
          {/* Social Icons with Custom Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {iconsData.slice(0, 5).map((social) => (
              <a
                key={social.id}
                href={`${social.url}${personalData[social.id as keyof typeof personalData] || ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-teal-500 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 filter brightness-0 invert group-hover:invert-0 transition-all duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={personalData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={20} className="mr-2 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border-2 border-teal-500 text-teal-400 font-medium rounded-lg hover:bg-teal-500 hover:text-white transform hover:scale-105 transition-all duration-300 group"
            >
              <span>View Projects</span>
              <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-80 animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-teal-500 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-float-slow">
        <Code2 size={48} className="text-teal-500" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 animate-float-slow animation-delay-2000">
        <Gamepad2 size={48} className="text-blue-500" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 animate-float-slow animation-delay-4000">
        <Layers size={48} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;