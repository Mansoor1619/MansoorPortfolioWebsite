import React from 'react';
import { personalData } from '../data/personalData';
import { MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {personalData.aboutText}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="text-teal-400" size={20} />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="text-teal-400" size={20} />
                <span>{personalData.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="text-teal-400" size={20} />
                <span>{personalData.location}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-6 rounded-lg backdrop-blur-sm border border-teal-500/20">
              <div className="text-3xl font-bold text-teal-400 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-6 rounded-lg backdrop-blur-sm border border-teal-500/20">
              <div className="text-3xl font-bold text-teal-400 mb-2">20+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-6 rounded-lg backdrop-blur-sm border border-teal-500/20">
              <div className="text-3xl font-bold text-teal-400 mb-2">1</div>
              <div className="text-gray-300">AAA Titles</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-6 rounded-lg backdrop-blur-sm border border-teal-500/20">
              <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;