import { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { personalData } from '../data/personalData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const channels = [
    { icon: <Mail size={16} />, label: personalData.email, href: `mailto:${personalData.email}` },
    { icon: <Phone size={16} />, label: personalData.phone, href: `tel:${personalData.phone.replace(/\s/g, '')}` },
    { icon: <MapPin size={16} />, label: personalData.location },
  ];

  const fieldClass =
    'w-full rounded-[10px] border border-line bg-surface-2 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-4 transition-colors duration-200 focus:border-accent/60 focus:outline-none';

  return (
    <section id="contact" className="relative bg-base py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          lede="Have a project in mind, or want to talk through a role? Send a message and I'll get back to you."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <ul className="space-y-3">
              {channels.map((channel) => {
                const inner = (
                  <>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-accent/10 text-accent">
                      {channel.icon}
                    </span>
                    <span className="text-[15.5px] break-all text-ink-2">{channel.label}</span>
                  </>
                );
                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="flex items-center gap-4 rounded-[12px] border border-line bg-surface p-4 transition-colors duration-200 hover:border-accent/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-[12px] border border-line bg-surface p-4">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-[14px] border border-line bg-surface p-6 md:p-7"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-[14.5px] text-ink-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={fieldClass}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-[14.5px] text-ink-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={fieldClass}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[14.5px] text-ink-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-accent px-5 py-4 text-[15px] font-semibold text-[#0b0b0c] transition-colors duration-200 hover:bg-accent-hi"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
