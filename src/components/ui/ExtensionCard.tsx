'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Extension } from '@/data/extensions';
import { Terminal, Shield, Zap, Target, ArrowUpRight, Sparkles } from 'lucide-react';
import React from 'react';

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

export default function ExtensionCard({ extension }: { extension: Extension }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-[420px] w-full rounded-2xl glass-effect group cursor-pointer premium-card-hover overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[extension.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full flex flex-col justify-between p-6"
      >
        <div>
          {/* Header with icon and category */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-3 bg-black/50 rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-[10px] font-mono text-cyan-400/70 uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
              {extension.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-gradient transition-all duration-300 leading-tight">
            {extension.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 group-hover:text-gray-300 line-clamp-3 leading-relaxed transition-colors">
            {extension.description}
          </p>
        </div>
        
        <div>
          {/* Features tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {extension.features.slice(0, 2).map((f, idx) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="px-3 py-1.5 glass-effect border border-white/10 text-[11px] font-mono text-gray-300 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all rounded-lg"
              >
                {f}
              </motion.span>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10 group-hover:border-white/20 transition-colors">
            <div className="flex items-baseline space-x-1">
              <span className="text-sm text-gray-400 font-mono">$</span>
              <span className="text-3xl font-bold font-mono text-gradient">
                {extension.price}
              </span>
            </div>
            <button className="group/btn relative px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-black text-xs font-bold uppercase rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-1">
                <Sparkles className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                <span>Add to Kit</span>
                <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Premium border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors pointer-events-none" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
    </motion.div>
  );
}
