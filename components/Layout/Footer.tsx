import React from 'react';
import Link from 'next/link';
import Logo from '../UI/Logo';
import { Shield, CheckCircle, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/919412834207";

  return (
    <footer className="bg-[#050505] border-t border-amber-500/10 text-zinc-400 text-sm font-sans relative overflow-hidden">
      {/* Absolute faint background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand details */}
          <div className="space-y-5">
            <Logo />
            <p className="text-zinc-400 leading-relaxed font-light">
              India's most trusted sports insights and fantasy analytics platform. Providing live odds, player analysis, and verified betting IDs nationwide since 2018.
            </p>
            <div className="flex gap-3 text-amber-500">
              <Shield className="w-5 h-5 opacity-80" />
              <CheckCircle className="w-5 h-5 opacity-80" />
              <Heart className="w-5 h-5 opacity-80 fill-current" />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs border-b border-amber-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">Insights Blog</Link>
              </li>
              <li>
                <Link href="/mahadev-betting-app" className="hover:text-amber-400 transition-colors">Mahadev Betting App</Link>
              </li>
              <li>
                <Link href="/mahadev-book-id" className="hover:text-amber-400 transition-colors">Mahadev Book ID</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner Sites / Keywords */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs border-b border-amber-500/20 pb-2">
              Supported Platforms
            </h4>
            <ul className="space-y-2.5">
              <li><span className="text-zinc-500">•</span> Gold365 Exchange</li>
              <li><span className="text-zinc-500">•</span> Laser247 Official</li>
              <li><span className="text-zinc-500">•</span> IPL Cricket Betting ID</li>
              <li><span className="text-zinc-500">•</span> Online Betting ID India</li>
              <li><span className="text-zinc-500">•</span> Mahadev Book Online Book</li>
              <li><span className="text-zinc-500">•</span> Mahadev Book Official</li>
            </ul>
          </div>

          {/* Column 4: Contact and Badges */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs border-b border-amber-500/20 pb-2">
              Get Started
            </h4>
            <p className="text-zinc-400 font-light leading-relaxed">
              Create your secure betting profile in under 2 minutes and start placing smart bets today.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-5 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10 w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
            <div className="flex justify-between items-center bg-[#111111] p-3 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-500 uppercase">SSL Secured</span>
              <span className="text-xs text-amber-500 font-bold">18+ Play Responsibly</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-zinc-500 text-center md:text-left">
            &copy; {currentYear} Mahadev Book. All rights reserved.
          </p>
          <p className="text-zinc-600 max-w-xl text-center md:text-right font-light">
            Mahadev Book is an educational sports insights platform. All content is for informational purposes only. Play responsibly and at your own risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
