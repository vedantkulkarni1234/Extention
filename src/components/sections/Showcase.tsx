'use client';

import { extensions } from '@/data/extensions';
import ExtensionCard from '../ui/ExtensionCard';
import { motion } from 'framer-motion';
import { Filter, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Extensions' },
    { id: 'recon', label: 'Reconnaissance' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'exploit', label: 'Exploitation' },
    { id: 'workflow', label: 'Workflow' },
  ];

  const filteredExtensions = activeFilter === 'all' 
    ? extensions 
    : extensions.filter(ext => ext.category === activeFilter);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>Premium Tools</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6 leading-[1.1]">
              Tactical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-lg text-gray-400 font-sans leading-relaxed">
              Each tool is meticulously crafted to solve a specific, complex problem in the security research lifecycle. 
              From reconnaissance to final report generation, we've engineered excellence.
            </p>
          </motion.div>
          
          {/* Premium filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Filter className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'glass-effect border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Extensions grid with premium spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredExtensions.map((ext, index) => (
            <motion.div
              key={ext.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <ExtensionCard extension={ext} />
            </motion.div>
          ))}
        </div>

        {/* Premium CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-effect rounded-2xl p-12 border border-white/10 max-w-3xl">
            <h3 className="text-3xl font-bold font-heading mb-4">
              Need the Complete <span className="text-gradient">Arsenal</span>?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get all 17+ extensions in one premium bundle and save 40%. 
              Unlock unlimited potential for your security research.
            </p>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all hover:scale-105 uppercase tracking-wider text-sm overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Get Full Bundle</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Premium decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}
