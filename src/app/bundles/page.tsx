'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { Sparkles, Crown, Zap, Shield, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const bundles = [
  {
    name: 'Reconnaissance Bundle',
    description: 'Master the art of discovery with our complete recon toolkit.',
    extensions: ['JS Recon Radar', 'ParamHawk', 'Tech Stack Deep Profiler', 'Recon Aggregator & Auto-Correlator'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🎯',
    free: true,
  },
  {
    name: 'Analysis Bundle',
    description: 'Deep-dive into applications with comprehensive analysis tools.',
    extensions: ['AuthFlow Visualizer', 'Response Anomaly Detector (RAD)', 'Smart Diff Engine', 'API Schema Reconstructor', 'WebSocket & Real-Time Traffic Analyzer'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '🔍',
    popular: true,
    free: true,
  },
  {
    name: 'Exploitation Bundle',
    description: 'Take your findings to the next level with advanced exploitation tools.',
    extensions: ['DOM Sink Tracker', 'Request Mutator Lab', 'Blind Interaction Tracker (BIT)', 'Access Control Matrix Builder'],
    gradient: 'from-red-500 to-orange-500',
    icon: '⚔️',
    free: true,
  },
  {
    name: 'Workflow Bundle',
    description: 'Streamline your workflow with productivity-focused extensions.',
    extensions: ['Scope Guardian + Program Intel Hub', "Hunter's Second Brain", 'Report Generator Pro', 'Workflow Orchestrator & Hotkey Commander'],
    gradient: 'from-green-500 to-emerald-500',
    icon: '⚡',
    free: true,
  },
];

export default function BundlesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-mono mb-8 uppercase tracking-[0.2em]">
              <Crown className="w-4 h-4" />
              <span>Curated Collections</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Tactical <span className="text-gradient">Bundles</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover expertly curated extension collections. 
              All bundles are now completely free - choose your specialization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative group ${bundle.popular ? 'lg:scale-105' : ''}`}
              >
                {bundle.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-5 py-2 bg-gradient-to-r ${bundle.gradient} rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg flex items-center space-x-2`}>
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="relative h-full p-8 rounded-3xl glass-effect border border-white/10 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bundle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl">{bundle.icon}</div>
                      <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${bundle.gradient} text-black text-xs font-bold uppercase`}>
                        {bundle.free ? 'FREE' : 'Premium'}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading mb-3">{bundle.name}</h3>
                    <p className="text-gray-400 mb-6">{bundle.description}</p>
                    
                    {/* Extensions List */}
                    <ul className="space-y-3 mb-8">
                      {bundle.extensions.map((ext) => (
                        <li key={ext} className="flex items-center space-x-3 text-sm">
                          <Check className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-300">{ext}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div>
                        <div className="text-3xl font-bold font-mono text-gradient">FREE</div>
                        <div className="text-sm text-green-400 font-mono">Complete bundle unlocked</div>
                      </div>
                      
                      <Link
                        href="/extensions"
                        className={`px-6 py-3 bg-gradient-to-r ${bundle.gradient} text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105 flex items-center space-x-2`}
                      >
                        <span>Get Bundle</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Bundle CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-heading mb-4">
                Need <span className="text-gradient">Individual</span> Extensions?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Browse our complete collection of free extensions. Mix and match to create your perfect security toolkit.
              </p>
              <Link
                href="/extensions"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all"
              >
                <Zap className="w-5 h-5" />
                <span>Browse All Extensions</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
