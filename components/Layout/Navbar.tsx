'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../UI/Logo';
import { Menu, X, MessageCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Betting App', path: '/mahadev-betting-app' },
  { name: 'Book ID', path: '/mahadev-book-id' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/919412834207";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-lg shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                    isActive ? 'text-amber-400' : 'text-zinc-300 hover:text-amber-300'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-amber-500/50 text-amber-400 font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-amber-500/10 transition-all duration-300"
            >
              Login
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/20 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              Get ID
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-amber-400 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-amber-500/15 py-4 px-4 sm:px-6">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 border border-amber-500/30 text-amber-400 font-bold text-sm rounded-lg hover:bg-amber-500/5 transition-colors"
              >
                Login
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black text-sm rounded-lg hover:brightness-115 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Get Verified ID
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
