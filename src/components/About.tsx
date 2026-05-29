import React, { useEffect, useState, useRef } from 'react';
import { personalData } from '../data/personalData';
import { MapPin, Mail, Phone, Award, Briefcase, Code, Headphones } from 'lucide-react';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; delay: number }> = ({ icon, value, label, delay }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-5 text-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 mb-3">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2 block">About</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who <span className="gradient-text">I Am</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed text-base">
                {personalData.aboutText}
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: <Mail size={16} />, label: personalData.email },
                { icon: <Phone size={16} />, label: personalData.phone },
                { icon: <MapPin size={16} />, label: personalData.location },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 glass-card rounded-lg">
                  <span className="text-teal-400">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={<Briefcase size={16} />} value="3+" label="Years Experience" delay={0} />
            <StatCard icon={<Code size={16} />} value="20+" label="Projects Completed" delay={150} />
            <StatCard icon={<Award size={16} />} value="1" label="AAA Titles" delay={300} />
            <StatCard icon={<Headphones size={16} />} value="24/7" label="Support" delay={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
