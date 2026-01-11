'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll, useTransform as useScrollTransform } from 'framer-motion';
import { Extension } from '@/data/extensions';
import { Terminal, Shield, Zap, Target, ArrowUpRight, Sparkles, Crown, Star } from 'lucide-react';
import React, { useRef } from 'react';

const icons = {
  recon: Target,
  analysis: Zap,
  exploit: Shield,
  workflow: Terminal,
};

const categoryColors = {
  recon: 'from-cyan-500/20 to-blue-500/20',
  analysis: 'from-purple-500/20 to-pink-500/20',
  exploit: 'from-red-500/20 to-orange-500/20',
  workflow: 'from-green-500/20 to-emerald-500/20',
};

const categoryGlows = {
  recon: 'shadow-cyan-500/20',
  analysis: 'shadow-purple-500/20',
  exploit: 'shadow-red-500/20',
  workflow: 'shadow-green-500/20',
};

export default function ExtensionCard({ extension }: { extension: Extension }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = icons[extension.category];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-[480px] w-full rounded-3xl glass-effect-hover group cursor-pointer overflow-hidden border-premium"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Enhanced background with category-specific gradients */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${categoryColors[extension.category]} opacity-0 group-hover:opacity-100 transition-all duration-700`}
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
      />
      
      {/* Enhanced shimmer effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '100%', 
              opacity: 0 
            }}
            animate={{ 
              y: '-20px', 
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full flex flex-col justify-between p-8"
      >
        <div>
          {/* Enhanced header with premium icon container */}
          <div className="flex items-center justify-between mb-8">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative p-4 bg-black/60 rounded-2xl border border-white/20 group-hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-xl">
                <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </motion.div>
            
            {/* Enhanced category badge with premium styling */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="relative px-4 py-2 bg-black/80 border border-white/20 rounded-full text-xs font-mono text-cyan-300 uppercase tracking-widest group-hover:text-cyan-200 group-hover:border-cyan-500/50 transition-all">
                {extension.category}
              </span>
            </motion.div>
          </div>

          {/* Enhanced title with premium typography */}
          <motion.h3 
            className="text-3xl font-bold font-heading mb-4 leading-tight group-hover:text-gradient transition-all duration-500"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.1)'
            }}
          >
            {extension.name}
          </motion.h3>

          {/* Enhanced description with better readability */}
          <p className="text-sm text-gray-400 group-hover:text-gray-300 line-clamp-3 leading-relaxed mb-6 transition-colors duration-300">
            {extension.description}
          </p>
        </div>
        
        <div>
          {/* Enhanced features tags with staggered animations */}
          <div className="flex flex-wrap gap-3 mb-8">
            {extension.features.slice(0, 3).map((f, idx) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="px-4 py-2 glass-effect-hover border border-white/10 text-xs font-mono text-gray-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all rounded-lg hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                {f}
              </motion.span>
            ))}
          </div>

          {/* Enhanced price and CTA section */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
            <div className="flex flex-col items-start">
              <motion.div 
                className="flex items-baseline space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg text-gray-400 font-mono">$</span>
                <span className="text-4xl font-bold font-mono text-gradient group-hover:scale-110 transition-transform">
                  {extension.price}
                </span>
              </motion.div>
              <div className="flex items-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current opacity-60" />
                ))}
                <span className="text-xs text-gray-500 ml-2">(4.9)</span>
              </div>
            </div>
            
            <motion.button 
              className="group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black text-sm font-bold uppercase rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all overflow-hidden border-premium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <span>Add to Arsenal</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Enhanced premium border and glow effects */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 pointer-events-none" />
      <motion.div 
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 ${categoryGlows[extension.category]}`}
        style={{
          filter: 'blur(20px)',
        }}
      />
      
      {/* Premium corner decorations */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-500" />
      
      {/* Crown icon for premium feel */}
      <motion.div 
        className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ scale: 0, rotate: -180 }}
        whileHover={{ scale: 1, rotate: 0 }}
      >
        <Crown className="w-5 h-5 text-yellow-400" />
      </motion.div>
    </motion.div>
  );
}
