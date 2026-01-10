'use client';

import { motion } from 'framer-motion';
import HeroScene from '../3d/HeroScene';
import { Terminal, ArrowRight, Star, Users, Shield as ShieldCheck } from 'lucide-react';
import GlitchText from '../ui/GlitchText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroScene />
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-0" />
      
      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 uppercase tracking-widest shimmer"
          >
            <Terminal className="w-4 h-4" />
            <span>Premium Security Arsenal</span>
            <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-full text-[10px] font-bold">NEW</span>
          </motion.div>
          
          {/* Main headline with premium spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading mb-8 tracking-tighter leading-[1.1]"
          >
            Master the{' '}
            <span className="block mt-2">
              <GlitchText className="text-gradient text-glow-cyan">Invisible</GlitchText>
            </span>
          </motion.h1>
          
          {/* Premium subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 font-sans leading-relaxed"
          >
            The ultimate arsenal for elite bug bounty hunters.{' '}
            <span className="text-white font-semibold">17+ premium browser extensions</span> designed 
            to expose vulnerabilities that others miss.
          </motion.p>
          
          {/* Premium CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all hover:scale-105 uppercase tracking-wider text-sm overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Arsenal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="group px-10 py-5 border-2 border-white/20 glass-effect text-white font-bold rounded-xl hover:border-cyan-500/50 transition-all hover:scale-105 uppercase tracking-wider text-sm backdrop-blur-xl">
              <span className="flex items-center space-x-2">
                <span>Full Bundle</span>
                <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded text-xs font-bold">Save 40%</span>
              </span>
            </button>
          </motion.div>

          {/* Trust indicators - Premium stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-black flex items-center justify-center text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-mono">12,000+ researchers</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm font-bold">50K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              <div className="text-left">
                <div className="text-sm font-bold">$2M+</div>
                <div className="text-xs text-gray-400">Bounties Earned</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium terminal logs */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-10 hidden lg:block glass-effect p-4 rounded-lg border border-white/10"
      >
        <div className="flex flex-col space-y-2 font-mono text-[11px] text-gray-400">
          <span className="text-cyan-500/50">> INITIALIZING_RECON_PROTOCOLS...</span>
          <span className="text-cyan-500/50">> SEARCHING_FOR_SINK_HOLES...</span>
          <span className="text-cyan-500/50">> BYPASSING_WAF_ENFORCEMENT...</span>
          <span className="text-cyan-400 font-bold animate-pulse flex items-center space-x-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>> ACCESS_GRANTED</span>
          </span>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] floating" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] floating" style={{ animationDelay: '3s' }} />
    </section>
  );
}
