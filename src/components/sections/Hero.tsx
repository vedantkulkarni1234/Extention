'use client';

import { motion } from 'framer-motion';
import HeroScene from '../3d/HeroScene';
import { Terminal } from 'lucide-react';
import GlitchText from '../ui/GlitchText';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-xs font-mono mb-6 uppercase tracking-widest">
            <Terminal className="w-3 h-3" />
            <span>Connection Established // Secure Channel</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 tracking-tighter uppercase leading-none">
            Master the <GlitchText className="text-cyan-500">Invisible</GlitchText>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-sans">
            The ultimate arsenal for bug bounty hunters. 17+ browser extensions designed 
            to expose vulnerabilities that others miss. Surreal performance, paradoxical precision.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-none hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] uppercase tracking-widest text-sm">
              Explore Arsenal
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-none hover:bg-white/10 transition-all uppercase tracking-widest text-sm backdrop-blur-sm">
              Full Bundle (Save 40%)
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col space-y-2 font-mono text-[10px] text-gray-500">
          <span>> INITIALIZING_RECON_PROTOCOLS...</span>
          <span>> SEARCHING_FOR_SINK_HOLES...</span>
          <span>> BYPASSING_WAF_ENFORCEMENT...</span>
          <span className="text-cyan-500 animate-pulse">> ACCESS_GRANTED</span>
        </div>
      </div>
    </section>
  );
}
