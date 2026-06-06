'use client';

import React, { useState } from 'react';
import Reveal from '../../components/UI/Reveal';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const fullFaqs = [
  {
    q: "What is Mahadev Book Online Betting ID?",
    a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience."
  },
  {
    q: "How does Mahadev Book work?",
    a: "Mahadev Book is an online gateway. After contacting an agent via WhatsApp, we create a secure account for you on the official betting exchange. You deposit funds via convenient channels (UPI, IMPS, GPay, Paytm) and chips are added to your ID. You place your bets, and upon win, request payouts that land directly in your bank account."
  },
  {
    q: "How do I join Mahadev Book?",
    a: "You join by clicking on our WhatsApp contact link. Our team is available 24/7. Simply send a message requesting a new ID registration. They will guide you through creating your credentials."
  },
  {
    q: "How do I register for a new Online Betting ID?",
    a: "Registering requires just a WhatsApp message. No long sign-up forms are needed. Send your name, choose a username prefix, and make your first secure deposit. Your official login link and credentials will be sent to you in minutes."
  },
  {
    q: "How can I get a Mahadev Book franchise?",
    a: "To obtain a franchise or master ID and start operating as a bookmaker partner under the Mahadev Book brand, contact our corporate compliance desk through WhatsApp and ask for 'Franchise/Master ID details'. A verification agent will review your request."
  },
  {
    q: "What games can I play with my Mahadev Book ID?",
    a: "You can place bets on live cricket (IPL, ODIs, Test matches), football tournaments, tennis matches, kabaddi, e-sports, and live virtual simulations. Additionally, casino classics like Teen Patti, Andar Bahar, Poker, Baccarat, and Roulette are supported."
  },
  {
    q: "How do I deposit money into my Mahadev Book account?",
    a: "Text your support manager on WhatsApp. They will provide the active UPI details or bank transfer numbers. Make the payment, share the transaction receipt/screenshot, and your betting chips will be updated on your screen within minutes."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are simple. Send a message to your WhatsApp agent with your username and the cashout amount. Provide your UPI address or bank account numbers. The funds will be credited to you in 5 to 10 minutes."
  },
  {
    q: "Is Mahadev Book legal in India?",
    a: "Online sports insights are constitutionally protected as games of skill in India. Real-money betting itself is regulated by individual states. Some states explicitly ban it, while others allow it. Verify your local state guidelines before playing."
  },
  {
    q: "Is Mahadev Book safe and trusted?",
    a: "Yes. We use advanced SSL encryption and certified fair-play engines. We have supported over 1.2M active users since 2018 with a solid track record of processing withdrawals without any delays."
  },
  {
    q: "Is my personal information secure with Mahadev Book?",
    a: "Yes, absolute privacy is guaranteed. We store customer profiles on highly secure servers and never share your registration details or contact information with third-party networks."
  },
  {
    q: "Can I use Mahadev Book on my mobile phone?",
    a: "Absolutely! The platform is designed to work smoothly on mobile browsers. You can also download our official Android and iOS applications by contacting our support desk."
  },
  {
    q: "Is Mahadev Book genuine or fake?",
    a: "Mahadev Book is 100% genuine. We are India's oldest sports ID aggregator. Beware of copycat websites and phishing links; only use official routes sent by our verified WhatsApp agents."
  },
  {
    q: "What is the Mahadev Book contact number?",
    a: "The official contact is provided via our WhatsApp buttons. Our active verified support number is +91 88721 89728. Always verify that you are chatting with our official business profile."
  }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Questions</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
              Clear answers to the most common queries about Mahadev Book account registration, rules, and withdrawals.
            </p>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
        </Reveal>

        {/* FAQs */}
        <div className="space-y-4">
          {fullFaqs.map((faq, index) => {
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
                    <div className="px-6 pb-6 pt-1 text-zinc-405 text-sm font-light leading-relaxed border-t border-zinc-900 bg-zinc-950/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </div>
  );
}
