'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, 
  TrendingUp, 
  Headphones, 
  Zap, 
  Check, 
  Star, 
  Lock, 
  Award, 
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Plus,
  Minus,
  Trophy,
  Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with competitive odds and real-time markets.", icon: "🏏" },
  { title: "Football Leagues", desc: "Bet on Premier League, Champions League, La Liga, and Indian Super League events.", icon: "⚽" },
  { title: "Live Casino", desc: "Enjoy live dealer streams of Teen Patti, Andar Bahar, Roulette, and Poker from home.", icon: "🃏" },
  { title: "Tennis Matches", desc: "Place real-time bets on Grand Slams, ATP tour, and WTA tour tournaments.", icon: "🎾" },
  { title: "Virtual Sports", desc: "Fast-paced digital cricket, football and racing simulations available 24 hours a day.", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, and local bank transfers with 256-bit encryption.", icon: Shield },
  { title: "Fast Payouts", desc: "Direct bank transfer withdrawals processed in 5-10 minutes flat.", icon: Zap },
  { title: "Data Insights", desc: "Free prediction models, player stats, and historical head-to-head analysis.", icon: TrendingUp },
  { title: "24/7 WhatsApp help", desc: "Dedicated personal relationship managers to assist you instantly.", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  {
    q: "What is Mahadev Book Online Betting ID?",
    a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience."
  },
  {
    q: "How does Mahadev Book work?",
    a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account."
  },
  {
    q: "How do I register for a new Online Betting ID?",
    a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes."
  },
  {
    q: "What games can I play with my Mahadev Book ID?",
    a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos."
  },
  {
    q: "How do I deposit money into my Mahadev Book account?",
    a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes."
  },
  {
    q: "Is Mahadev Book legal in India?",
    a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations."
  },
  {
    q: "Is Mahadev Book safe and trusted?",
    a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker."
  }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!",
  "🏆 USER_3294 WON ₹35,000 on Roulette!",
  "🔥 USER_1120 WON ₹2,50,000 on IPL Outright!",
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/917589045547";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-[#0d0a05] to-[#050505] pt-12 overflow-hidden">
        {/* Animated Gold Grid Overlay */}
        <div className="absolute inset-0 gold-grid opacity-30 z-0"></div>

        {/* Ambient floating light shapes */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none z-0 animate-float-delay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
          
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">India's #1 Trusted Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Mahadev Book – <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 gold-text-glow">India's Most Trusted</span> Online Betting ID
            </h1>
            
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              Welcome to <strong className="text-white">Mahadev Book</strong>, the online betting game-changer of all time. Betting isn't just about chance; it's about timing, strategy, and choosing the right platform. In India, the mahadevbook is your trusted gateway to a safe, authorized, and rewarding betting experience.
            </p>
            
            <p className="text-zinc-400 leading-relaxed font-light">
              Our platform ensures every user enjoys an outstanding experience with over <strong className="text-amber-400">60,000 live events</strong> per month, fast payouts, and fully encrypted transactions. Whether you're new or experienced, your verified ID gives you access to advanced tools and smart betting features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black font-extrabold text-base px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:-translate-y-1 transform"
              >
                <span>🎯</span> Get Your ID Now
              </a>
              <Link
                href="/mahadev-book-id"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-amber-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 text-xs text-zinc-400 hover:border-amber-500/20 transition-all duration-300">
                <Shield className="w-3.5 h-3.5 text-amber-500" /> Secure & Private
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 text-xs text-zinc-400 hover:border-amber-500/20 transition-all duration-300">
                <TrendingUp className="w-3.5 h-3.5 text-amber-500" /> Data-Driven Insights
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 text-xs text-zinc-400 hover:border-amber-500/20 transition-all duration-300">
                <Headphones className="w-3.5 h-3.5 text-amber-500" /> 24/7 Support
              </span>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-full max-w-md">
              {/* Premium Luxury Glowing Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              
              <div className="relative glass-card rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl p-8 flex flex-col items-center justify-center text-center gap-6 group hover:border-amber-500/50 transition-colors duration-500">
                
                {/* Crown Logo Badge */}
                <div className="w-64 h-24 flex items-center justify-center mb-2">
                  <img src="https://mahadevbook.game/wp-content/uploads/2025/04/mahadev-online-books-e1765948728912-1024x369.webp" alt="Mahadev Book" className="w-full h-full object-contain drop-shadow-xl" />
                </div>
                
                <div>
                  <h2 className="text-white font-serif font-bold text-2xl tracking-wide">Mahadev Book</h2>
                  <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mt-1">Official Betting Platform</p>
                </div>

                <p className="text-zinc-400 text-sm font-light">
                  Join 1.2M+ Indian players on the most trusted fantasy analytics and betting exchange dashboard.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-green-650/20 w-full justify-center transform hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Chat on WhatsApp
                </a>
                
                <div className="absolute -top-4 -right-4 bg-amber-500 text-black rounded-lg px-3 py-1 text-xs font-black shadow-lg animate-bounce">
                  60K+ Live Events
                </div>
                <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-amber-500/30 text-white rounded-lg px-3 py-1 text-xs shadow-lg">
                  <span className="text-amber-500 font-bold">1.2M+</span> Users
                </div>
              </div>
            </div>
            
            {/* Quick Stats Mini Cards */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 text-center hover:border-amber-500/25 transition-all duration-350">
                  <div className="text-amber-500 font-extrabold text-lg">{stat.value}</div>
                  <div className="text-zinc-400 text-xs font-semibold mt-0.5">{stat.label}</div>
                  <div className="text-zinc-650 text-[10px] mt-0.5 leading-tight">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Ticker Section - Dynamic Slider */}
      <div className="bg-[#0c0a06] border-y border-amber-500/10 py-3 relative overflow-hidden z-10">
        <div className="flex gap-10 items-center whitespace-nowrap animate-ticker">
          {tickerItems.map((item, idx) => (
            <span key={idx} className="text-xs uppercase tracking-wider font-bold text-zinc-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. What is Mahadev Book Section */}
      <section className="py-20 bg-black relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-4">
                What is <span className="text-amber-500">Mahadev Book?</span>
              </h2>
              <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal xOffset={-40}>
              <div className="space-y-6">
                <p className="text-zinc-300 text-lg leading-relaxed font-light">
                  <strong>Mahadev Book</strong> is one of India's most popular and trusted online betting platforms. It is known for its secure system, smooth user experience, and wide variety of games.
                </p>
                <p className="text-zinc-455 leading-relaxed font-light">
                  We bridge the gap between players and premier sportsbooks. With a verified Mahadev Book ID, you gain access to a unified hub for cricket predictions, live odds, and casino events, ensuring fair play and complete safety.
                </p>
                <div className="bg-gradient-to-br from-amber-500/10 to-transparent border-l-4 border-amber-500 rounded-r-xl p-6">
                  <h4 className="text-white font-bold text-lg flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" /> India's Most Trusted Betting Platform
                  </h4>
                  <p className="text-zinc-450 mt-2 font-light text-sm">Trusted by 1.2M+ users since 2018 with over 60M successful transactions. Payouts are instant and secured.</p>
                </div>
              </div>
            </Reveal>

            <Reveal xOffset={40}>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="glass-card rounded-xl p-5 border border-zinc-800/80 hover:border-amber-500/25 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                      <p className="text-zinc-550 text-xs font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Games Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0a06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-4">
                Games You Can <span className="text-amber-500">Play</span>
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
                Use your single verified ID to play all sports and classic live dealer casino games.
              </p>
              <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, idx) => (
              <Reveal key={idx} yOffset={40} delay={idx * 0.1}>
                <div className="glass-card glass-card-hover rounded-xl p-6 flex flex-col h-full group">
                  <div className="text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{game.icon}</div>
                  <h3 className="text-white font-serif font-semibold text-lg mb-2">{game.title}</h3>
                  <p className="text-zinc-450 text-sm font-light leading-relaxed mb-4 flex-grow">{game.desc}</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 font-semibold text-sm flex items-center gap-1.5 mt-auto">
                    Bet Live <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Betting ID Smart Guide */}
      <section className="py-20 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <Reveal xOffset={-50}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-black text-white leading-tight">
                  Get to Know Your <span className="text-amber-500">Betting ID</span>
                </h2>
                <div className="w-16 h-0.5 bg-amber-500 rounded-full"></div>
                <p className="text-zinc-300 font-light leading-relaxed">
                  Your <strong>Mahadev Book ID</strong> is a personal access key to India's trusted online betting ecosystem. With it, you can securely place bets on sports, casino games, and virtual matches within a single platform. Think of it as your secure digital passport.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center font-bold text-sm mt-0.5">1</span>
                    <div>
                      <h4 className="text-white font-semibold">Secure Account Access</h4>
                      <p className="text-zinc-500 text-sm font-light mt-0.5">Log in safely across all your devices using encrypted credentials.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center font-bold text-sm mt-0.5">2</span>
                    <div>
                      <h4 className="text-white font-semibold">Explore Betting Markets</h4>
                      <p className="text-zinc-500 text-sm font-light mt-0.5">Access hundreds of cricket and football leagues with one wallet.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center font-bold text-sm mt-0.5">3</span>
                    <div>
                      <h4 className="text-white font-semibold">Track and Manage Bets</h4>
                      <p className="text-zinc-500 text-sm font-light mt-0.5">Use your personal dashboard to review outcomes and withdraw instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal xOffset={50}>
              <div className="glass-card rounded-2xl p-8 border border-amber-500/20 space-y-6">
                <h3 className="text-white font-serif font-bold text-xl flex items-center gap-2">
                  <span>⚖️</span> Responsible Betting
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Your Mahadev Book ID unlocks exciting opportunities — but it's equally important to bet responsibly. We encourage you to:
                </p>
                <ul className="space-y-3 text-sm text-zinc-350">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check className="w-4 h-4 text-amber-500 flex-shrink-0" /> Set daily or weekly betting limits
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check className="w-4 h-4 text-amber-500 flex-shrink-0" /> Avoid chasing losses and play within your means
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check className="w-4 h-4 text-amber-500 flex-shrink-0" /> Take regular breaks to maintain balance
                  </li>
                </ul>
                <div className="border-t border-zinc-800 pt-6">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center block py-3 bg-zinc-900 border border-zinc-700 hover:border-amber-500 hover:text-amber-400 text-zinc-300 font-bold rounded-xl text-sm transition-all duration-300">
                    Consult Relationship Manager
                  </a>
                </div>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* 5. User Testimonials Section */}
      <section className="py-20 bg-[#070707] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-4">
                Our Users Speak For Us – <span className="text-amber-500">100% Payouts</span>
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
                Read real reviews from verified Mahadev Book players who enjoy our fast and trusted betting services.
              </p>
              <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <Reveal key={idx} yOffset={40} delay={idx * 0.05}>
                <div className="glass-card rounded-xl p-6 border border-zinc-850 flex flex-col justify-between h-full hover:border-amber-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-sm">
                          {rev.name[0]}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                          <p className="text-zinc-500 text-xs">{rev.location}</p>
                        </div>
                      </div>
                      <div className="flex text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-zinc-350 text-sm font-light italic leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs text-[#25D366]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    Verified WhatsApp Player
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Authority and SSL Trust Badges */}
      <section className="py-16 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={index} yOffset={30} delay={index * 0.1}>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-500 mx-auto">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-semibold font-serif text-base">{point.title}</h4>
                    <p className="text-zinc-550 text-xs font-light max-w-[200px] mx-auto leading-relaxed">{point.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Interactive FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#070707]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-4">
                Frequently Asked <span className="text-amber-500">Questions</span>
              </h2>
              <p className="text-zinc-400 text-sm font-light">
                Find answers to the most common queries about registering and betting with Mahadev Book.
              </p>
              <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index} yOffset={25} delay={index * 0.05}>
                  <div className="glass-card rounded-xl border border-zinc-850 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-white hover:text-amber-400 transition-colors"
                    >
                      <span className="font-semibold text-base font-serif flex items-center gap-2">
                        <HelpCircle className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-amber-500" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900 bg-zinc-950/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/10"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </a>
      </div>

    </div>
  );
}
