'use client';

import React, { useState } from 'react';
import Reveal from '../../components/UI/Reveal';
import { Mail, MessageSquare, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/919412834207";
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send data to API
    setStatus('Message sent successfully! Our WhatsApp team will get in touch.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Mahadev Book</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
              Our support team is available 24/7. Reach us via WhatsApp or Telegram for the fastest response.
            </p>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Support options details */}
          <Reveal xOffset={-45}>
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-6 border border-zinc-850 space-y-4">
                <h3 className="text-white font-serif font-bold text-lg">Instant Support Channels</h3>
                
                <div className="space-y-4 pt-2">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:border-amber-500/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">WhatsApp Chat</h4>
                      <p className="text-zinc-550 text-xs mt-0.5">Fastest response – average response time under 1 minute.</p>
                    </div>
                  </a>

                  <a 
                    href="https://t.me/mahadevbook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:border-amber-500/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0088cc]/10 text-[#0088cc] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Send className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Telegram Channel</h4>
                      <p className="text-zinc-550 text-xs mt-0.5">Join our community channel for daily sports news and prediction updates.</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Security info box */}
              <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-900 space-y-2">
                <h4 className="text-amber-500 font-bold text-sm uppercase tracking-wider">⚠️ Phishing Warning</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  We will never ask you to send funds without confirming your registration details. Only communicate through the official WhatsApp number displayed on this domain.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal xOffset={45}>
            <div className="glass-card rounded-2xl p-8 border border-amber-500/10">
              <h3 className="text-white font-serif font-bold text-lg mb-6">Drop Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-2" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 text-sm font-light"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-2" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 text-sm font-light"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 text-sm font-light"
                    placeholder="Write your query here..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold rounded-xl hover:brightness-110 transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>

                {status && (
                  <p className="text-[#25D366] text-xs font-semibold text-center mt-4">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </Reveal>

        </div>

      </div>
    </div>
  );
}
