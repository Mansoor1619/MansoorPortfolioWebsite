import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Code2, Gamepad2, Layers, Sparkles } from 'lucide-react';
import { personalData } from '../data/personalData';
import { iconsData } from '../data/iconData';

const rotatingTexts = [
  "Unreal Engine Gameplay Programmer",
  "VR Developer",
  "Game Developer"
];

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });

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

  useEffect(() => {
    const targets = { years: 3, projects: 20, clients: 15 };
    const duration = 2000;
    const steps = 60;
    const increment = { years: targets.years / steps, projects: targets.projects / steps, clients: targets.clients / steps };
      const current = { years: 0, projects: 0, clients: 0 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current.years = Math.min(current.years + increment.years, targets.years);
      current.projects = Math.min(current.projects + increment.projects, targets.projects);
      current.clients = Math.min(current.clients + increment.clients, targets.clients);
      setCounts({
        years: Math.round(current.years),
        projects: Math.round(current.projects),
        clients: Math.round(current.clients)
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`, top: '10%', left: '20%' }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"
          style={{ transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`, top: '50%', right: '10%' }}
        ></div>
        <div
          className="absolute w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px]"
          style={{ bottom: '5%', left: '30%' }}
        ></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-medium">Available for freelance work</span>
          </div>

          {/* Profile Image */}
          <div className="mb-8 relative flex justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-glow-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-full animate-spin opacity-30" style={{ animationDuration: '6s' }}></div>
            <img
              src={personalData.avatar}
              alt={personalData.name}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full block relative z-10 object-cover object-[center_20%] border-2 border-white/10"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            {personalData.name}
          </h1>

          {/* Rotating Text */}
          <div className="h-12 md:h-16 mb-4 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up" key={textIndex}>
              {rotatingTexts[textIndex]}
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalData.description}
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{counts.years}+</div>
              <div className="text-sm text-gray-500 mt-1">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{counts.projects}+</div>
              <div className="text-sm text-gray-500 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{counts.clients}+</div>
              <div className="text-sm text-gray-500 mt-1">Clients</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 mb-10">
            {iconsData.slice(0, 5).map((social) => (
              <a
                key={social.id}
                href={`${social.url}${personalData[social.id as keyof typeof personalData] || ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500/10">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={personalData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Download size={18} className="mr-2" />
              <span>Download Resume</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-gray-300 font-medium rounded-xl hover:bg-white/5 hover:border-teal-500/30 transform hover:scale-105 transition-all duration-300 group"
            >
              <span>View Projects</span>
              <ChevronDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center group-hover:border-teal-500/50 transition-colors duration-300">
          <div className="w-1 h-2.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-[8%] opacity-15 animate-float-slow hidden lg:block">
        <Code2 size={40} className="text-teal-500" />
      </div>
      <div className="absolute bottom-1/4 right-[8%] opacity-15 animate-float-slow hidden lg:block" style={{ animationDelay: '2s' }}>
        <Gamepad2 size={40} className="text-blue-500" />
      </div>
      <div className="absolute top-1/3 right-[15%] opacity-15 animate-float-slow hidden lg:block" style={{ animationDelay: '4s' }}>
        <Layers size={40} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;
