'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '../../components/UI/Reveal';
import { blogPosts } from '../../lib/blogData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
              Mahadev Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Insights</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
              Stay ahead with our latest betting guides, legal compliance updates, and match analytics.
            </p>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.slug} yOffset={40} delay={idx * 0.1}>
              <div className="glass-card glass-card-hover rounded-2xl p-6 border border-zinc-850 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-2xl">{post.icon}</span>
                  </div>
                  
                  <h2 className="text-xl font-serif font-bold text-white hover:text-amber-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-zinc-455 text-sm font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-amber-500 font-semibold hover:text-amber-400 flex items-center gap-1 transition-colors">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
}
