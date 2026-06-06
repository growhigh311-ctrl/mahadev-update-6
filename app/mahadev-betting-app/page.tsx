'use client';

import React from 'react';
import Reveal from '../../components/UI/Reveal';
import { Smartphone, Download, Shield, Zap, Info, Play } from 'lucide-react';

const appFeatures = [
  { title: "Live Betting Exchange", desc: "Bet on cricket, football, tennis and kabaddi while the action unfolds in real-time." },
  { title: "Instant ID Activation", desc: "Sign up and receive your login credentials in less than 5 minutes on WhatsApp." },
  { title: "Fast Encrypted Cashouts", desc: "Priority withdrawal request processing directly within the app, hitting your account in minutes." },
  { title: "Intuitive Interface", desc: "Clean navigation, fast load times, and custom dashboards designed for Indian users." }
];

const installSteps = [
  { num: "1", title: "Open WhatsApp Chat", desc: "Click 'Download via WhatsApp' to request the secure app download link from our agent." },
  { num: "2", title: "Allow Unknown Sources", desc: "For Android, enable 'Install from unknown sources' in your device settings." },
  { num: "3", title: "Install the APK / App", desc: "Tap the downloaded package and complete the installation wizard." },
  { num: "4", title: "Log In & Bet", desc: "Open the app, sign in using your verified Mahadev Book ID, and start playing." }
];

const activeMatches = [
  { type: "🏏 Live Cricket", match: "IND vs AUS (3rd ODI)", odds: "IND: 1.85 | AUS: 2.05" },
  { type: "🏏 Live Cricket", match: "CSK vs MI (IPL)", odds: "CSK: 1.90 | MI: 1.90" },
  { type: "⚽ Live Football", match: "Chelsea vs Liverpool", odds: "CHE: 2.40 | LIV: 1.65" }
];

export default function BettingAppPage() {
  const whatsappUrl = "https://wa.me/919412834207";

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
              <Smartphone className="w-4 h-4 text-amber-500" />
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Mobile App Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
              Mahadev Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Betting App</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
              Download the official Mahadev Book application for Android & iOS to enjoy live sports and casino payouts on the go.
            </p>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
        </Reveal>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Reveal xOffset={-45}>
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-white leading-snug">
                Download the Mahadev Betting App – India's Most Trusted Mobile Betting Exchange
              </h2>
              <p className="text-zinc-350 leading-relaxed font-light">
                Looking for a secure and lightning-fast online betting app? The official Mahadev Book mobile application brings live markets, expert prediction models, and seamless deposits to your fingertips.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light">
                Compatible with both Android and iOS, the mobile app is optimized for low-bandwidth environments, ensuring you never miss a cricket delivery or card flip.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3.5 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
                >
                  <Download className="w-4 h-4" /> Download via WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal xOffset={45}>
            <div className="glass-card rounded-2xl p-6 border border-amber-500/15 space-y-6 bg-gradient-to-br from-[#0d0a05] to-black">
              <h3 className="text-white font-serif font-bold text-lg border-b border-zinc-800 pb-3">App Quick Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-900">
                  <div className="text-zinc-500 text-[10px] uppercase">Minimum Deposit</div>
                  <div className="text-amber-500 font-extrabold text-xl mt-1">₹500 Min</div>
                </div>
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-900">
                  <div className="text-zinc-500 text-[10px] uppercase">Withdrawal Time</div>
                  <div className="text-amber-500 font-extrabold text-xl mt-1">5 Mins Avg</div>
                </div>
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-900">
                  <div className="text-zinc-500 text-[10px] uppercase">Compatible Systems</div>
                  <div className="text-amber-500 font-extrabold text-xl mt-1">Android & iOS</div>
                </div>
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-900">
                  <div className="text-zinc-500 text-[10px] uppercase">Live Odds Speed</div>
                  <div className="text-amber-500 font-extrabold text-xl mt-1">Real-time</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Live Match Feed Preview */}
        <Reveal>
          <div className="glass-card rounded-2xl p-6 border border-zinc-850 mb-20">
            <h3 className="text-white font-serif font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              Live Match Feed (Demo Odds)
            </h3>
            <div className="divide-y divide-zinc-900">
              {activeMatches.map((m, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="text-xs text-amber-500 font-semibold uppercase">{m.type}</span>
                    <h4 className="text-white font-bold text-base mt-0.5">{m.match}</h4>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-zinc-400 font-mono text-sm">{m.odds}</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-amber-500 text-black text-xs font-bold rounded-lg hover:bg-amber-400 transition-colors uppercase">
                      Bet ID
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* App Features Grid */}
        <div className="mb-20">
          <Reveal>
            <h3 className="text-2xl font-serif font-bold text-white text-center mb-10">Premium App Features</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {appFeatures.map((feat, idx) => (
              <Reveal key={idx} yOffset={30} delay={idx * 0.1}>
                <div className="glass-card rounded-xl p-6 border border-zinc-850 hover:border-amber-500/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-sm mb-4">✓</div>
                  <h4 className="text-white font-semibold mb-2">{feat.title}</h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{feat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* How to install steps */}
        <Reveal>
          <div className="bg-[#070707] border border-zinc-850 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-serif font-bold text-white text-center mb-12">How to Install the App</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {installSteps.map((step, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center font-serif font-black text-lg">
                    {step.num}
                  </div>
                  <h4 className="text-white font-bold text-base">{step.title}</h4>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
