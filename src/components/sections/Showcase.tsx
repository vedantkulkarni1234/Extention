'use client';

import { extensions } from '@/data/extensions';
import ExtensionCard from '../ui/ExtensionCard';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Filter, Sparkles, Crown, Zap, Target, Shield, Terminal } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const categories = [
    { 
      id: 'all', 
      label: 'All Extensions',
      icon: Crown,
      count: extensions.length
    },
    { 
      id: 'recon', 
      label: 'Reconnaissance',
      icon: Target,
      count: extensions.filter(ext => ext.category === 'recon').length
    },
    { 
      id: 'analysis', 
      label: 'Analysis',
      icon: Zap,
      count: extensions.filter(ext => ext.category === 'analysis').length
    },
    { 
      id: 'exploit', 
      label: 'Exploitation',
      icon: Shield,
      count: extensions.filter(ext => ext.category === 'exploit').length
    },
    { 
      id: 'workflow', 
      label: 'Workflow',
      icon: Terminal,
      count: extensions.filter(ext => ext.category === 'workflow').length
    },
  ];

  const filteredExtensions = activeFilter === 'all' 
    ? extensions 
    : extensions.filter(ext => ext.category === activeFilter);

  return (
    <section ref={containerRef} className="py-40 bg-black relative overflow-hidden">
      {/* Enhanced premium background effects */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,255,0.03),transparent_40%)]" />
      </motion.div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced section header with advanced animations */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Enhanced premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect-hover border border-green-500/30 text-green-300 text-sm font-mono mb-8 uppercase tracking-[0.2em] shimmer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span className="font-semibold">Elite Arsenal Collection</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-3 py-1 bg-gradient-to-r from-green-500 to-cyan-500 text-black rounded-full text-xs font-bold"
              >
                FREE
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-6xl md:text-8xl font-bold font-heading tracking-tighter mb-8 leading-[0.9] relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block">Precision</span>
              <span className="block text-gradient">Engineering</span>
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 border-2 border-cyan-500/30 rounded-full"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 font-sans leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Each tool represents the pinnacle of cybersecurity engineering. Meticulously crafted 
              to solve the most complex challenges in the security research lifecycle.
            </motion.p>
          </motion.div>
          
          {/* Enhanced premium filter buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex items-center space-x-3 text-sm text-gray-300 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Filter className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <span className="font-mono text-lg uppercase tracking-wider font-semibold">Elite Filters:</span>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-500 ${
                      activeFilter === cat.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 text-cyan-300 shadow-[0_0_30px_rgba(0,255,255,0.3)]'
                        : 'glass-effect-hover border border-white/10 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="relative">
                      <motion.div
                        animate={activeFilter === cat.id ? { rotate: 360 } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      {activeFilter === cat.id && (
                        <motion.div
                          className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm uppercase tracking-wider">{cat.label}</div>
                      <div className="text-xs opacity-60">{cat.count} tools</div>
                    </div>
                    
                    {activeFilter === cat.id && (
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Enhanced extensions grid with premium spacing and animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          layout
        >
          {filteredExtensions.map((ext, index) => (
            <motion.div
              key={ext.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <ExtensionCard extension={ext} />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced premium CTA section with advanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-32 text-center"
        >
          <motion.div 
            className="relative inline-block glass-effect rounded-3xl p-16 border border-white/10 max-w-4xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-cyan-500/5"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(139,92,246,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 40% 60%, rgba(0,255,255,0.1) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  initial={{ 
                    x: Math.random() * 100 + '%', 
                    y: '100%', 
                    opacity: 0 
                  }}
                  animate={{ 
                    y: '-10%', 
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl md:text-5xl font-bold font-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Command the <span className="text-gradient">Complete Arsenal</span>
              </motion.h3>
              <motion.p
                className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Unlock unlimited potential with all 17+ premium extensions.
                Completely free, no restrictions, lifetime access.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.button
                  className="group relative px-12 py-6 bg-gradient-to-r from-green-500 via-cyan-500 to-green-500 text-black font-bold rounded-2xl hover:shadow-[0_0_60px_rgba(0,255,255,0.5)] transition-all uppercase tracking-wider text-sm overflow-hidden border-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Crown className="w-6 h-6" />
                    </motion.div>
                    <span>Get All Extensions Free</span>
                    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-gradient">FREE</div>
                  <div className="text-xs text-green-400 font-mono">All extensions unlocked</div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Premium corner decorations */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-purple-500/30" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced premium decorative lines */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  );
}
