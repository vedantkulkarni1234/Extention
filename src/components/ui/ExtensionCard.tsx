'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Extension } from '@/data/extensions';
import { Terminal, Shield, Zap, Target } from 'lucide-react';
import React from 'react';

const icons = {
  recon: Target,
  analysis: Zap,
  exploit: Shield,
  workflow: Terminal,
};

export default function ExtensionCard({ extension }: { extension: Extension }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

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
      className="relative h-96 w-full rounded-none bg-zinc-900 border border-white/10 group cursor-pointer"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 flex flex-col justify-between p-4 border border-white/5 bg-black/40 backdrop-blur-sm"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <Icon className="w-6 h-6 text-cyan-500" />
            <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-widest">
              {extension.category}
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-cyan-500 transition-colors uppercase">
            {extension.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-3">
            {extension.description}
          </p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {extension.features.slice(0, 2).map((f) => (
              <span key={f} className="px-2 py-0.5 border border-white/10 text-[10px] uppercase font-mono">
                {f}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xl font-bold font-mono text-cyan-500">
              ${extension.price}
            </span>
            <button className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase hover:bg-cyan-500 transition-colors">
              Add to Kit
            </button>
          </div>
        </div>
      </div>
      
      {/* Paradox background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
