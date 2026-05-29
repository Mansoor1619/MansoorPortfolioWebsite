import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { personalData } from '../data/personalData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a]">
      {/* Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <div className={`md:col-span-6 space-y-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: <Mail size={16} />, label: personalData.email },
              { icon: <Phone size={16} />, label: personalData.phone },
              { icon: <MapPin size={16} />, label: personalData.location },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className={`md:col-span-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 input-glass rounded-lg text-white placeholder-gray-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 input-glass rounded-lg text-white placeholder-gray-600"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 input-glass rounded-lg text-white placeholder-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
              >
                {submitted ? (
                  <><CheckCircle size={18} className="mr-2" /> Message Sent!</>
                ) : (
                  <><Send size={18} className="mr-2" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
