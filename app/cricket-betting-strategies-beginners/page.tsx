import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cricket Betting Strategies for Beginners: A Winning Plan",
  description: "Start betting on cricket the smart way. Learn essential bankroll management, how to specialize your focus, and common mistakes to avoid in 2026.",
  alternates: {
    canonical: '/cricket-betting-strategies-beginners/',
  },
};

export default function BeginnerStrategyPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Strategy
            </span>
            <span className="text-2xl">📈</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Beginner’s Strategy: A Winning Game Plan
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>October 30, 2025</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>4 min read</span>
            </div>
            <div className="text-zinc-600">By Mahadev Book Analyst</div>
          </div>
        </div>

        {/* Content body */}
        <article className="prose prose-invert max-w-none prose-amber prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-zinc-350 prose-li:font-light prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4">
          <p>
            The secret to long-term success in 2026 isn't a "hot streak" or a lucky guess; it’s bankroll management. Most beginners fail because they treat betting like a gamble rather than an investment. Learn how to protect your capital while building your confidence with a disciplined approach.
          </p>
          
          <h3>The 1-5% Rule</h3>
          <p>
            The most important rule in professional betting is never to overextend.
          </p>
          <ul>
            <li><strong>Bankroll Management:</strong> Divide your total betting budget into 100 units. Never bet more than 1–5% of your total bankroll on any single match.</li>
            <li><strong>Survival:</strong> This approach ensures that even a string of bad luck won’t wipe out your entire account, giving you the time and runway to learn from your mistakes.</li>
          </ul>

          <h3>Specialization</h3>
          <p>
            Trying to bet on every single game (Test, ODI, T20, and various domestic leagues) is a recipe for disaster.
          </p>
          <ul>
            <li><strong>Focus Your Research:</strong> Pick one format (e.g., T20) or one league (e.g., IPL) and become an expert in that area.</li>
            <li><strong>Edge:</strong> The deeper your knowledge of a specific format's nuances, the better your ability to identify when bookmakers have mispriced an event.</li>
          </ul>

          <h3>Avoiding Emotional Bets</h3>
          <p>
            "Betting with your heart" is the quickest way to experience "logical bankruptcy."
          </p>
          <ul>
            <li><strong>The Favorite Team Bias:</strong> We all want our favorite team to win, but that bias clouds your objective analysis. If you cannot look at your favorite team’s stats impartially, it is better to avoid betting on their matches entirely.</li>
          </ul>

          <h3>FAQs</h3>
          <h4>What is a bankroll?</h4>
          <p>
            A bankroll is the total amount of money you have set aside specifically for betting. It should be money you can afford to lose without it affecting your daily life.
          </p>
          <h4>How do I handle a losing streak?</h4>
          <p>
            Follow your bankroll management plan strictly. Never "chase" losses by increasing your bet size to try and win it back quickly. Stick to the 1-5% rule.
          </p>
        </article>

        {/* Bottom Call to action box */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
          <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
            Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/917589045547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
            >
              Get Your ID Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
