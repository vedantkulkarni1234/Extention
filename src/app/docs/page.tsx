'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { BookOpen, Search, Terminal, Shield, Zap, ChevronRight, ExternalLink, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const docsSections = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Installation Guide', description: 'How to install and configure extensions' },
      { name: 'Quick Start Tutorial', description: 'Your first 5 minutes with the Arsenal' },
      { name: 'Browser Compatibility', description: 'Supported browsers and versions' },
      { name: 'License Activation', description: 'Activating your product licenses' },
    ],
    icon: BookOpen,
  },
  {
    title: 'Reconnaissance',
    items: [
      { name: 'JS Recon Radar', description: 'JavaScript analysis and endpoint discovery' },
      { name: 'ParamHawk', description: 'Parameter tracking and fuzzing' },
      { name: 'Tech Stack Deep Profiler', description: 'Technology fingerprinting' },
      { name: 'Recon Aggregator', description: 'Unifying recon data' },
    ],
    icon: Search,
  },
  {
    title: 'Analysis',
    items: [
      { name: 'AuthFlow Visualizer', description: 'Authentication flow mapping' },
      { name: 'Response Anomaly Detector', description: 'Statistical response analysis' },
      { name: 'Smart Diff Engine', description: 'Intelligent comparison tools' },
      { name: 'API Schema Reconstructor', description: 'Reverse engineering APIs' },
    ],
    icon: Terminal,
  },
  {
    title: 'Exploitation',
    items: [
      { name: 'DOM Sink Tracker', description: 'XSS and DOM vulnerability tracking' },
      { name: 'Request Mutator Lab', description: 'Request manipulation' },
      { name: 'Blind Interaction Tracker', description: 'OOB interaction monitoring' },
      { name: 'Access Control Matrix', description: 'Permission testing' },
    ],
    icon: Shield,
  },
];

const quickLinks = [
  { title: 'API Reference', href: '/docs/api' },
  { title: 'Extension Configuration', href: '/docs/config' },
  { title: 'Keyboard Shortcuts', href: '/docs/shortcuts' },
  { title: 'Troubleshooting', href: '/docs/troubleshooting' },
  { title: 'Changelog', href: '/changelog' },
  { title: 'Release Notes', href: '/docs/releases' },
];

export default function DocsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
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
              <BookOpen className="w-4 h-4" />
              <span>Knowledge Base</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Documentation
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Comprehensive guides, tutorials, and API references for all extensions in your Arsenal.
            </p>
            
            {/* Search Bar */}
            <div className="mt-10 max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all pl-14"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {docsSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-effect rounded-2xl border border-white/10 p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={`/docs/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between group p-4 rounded-xl hover:bg-white/5 transition-all"
                        >
                          <div>
                            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Quick <span className="text-gradient">Links</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 glass-effect rounded-xl border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                >
                  <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition-colors">
                    {link.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <span className="font-mono text-sm text-gray-400">Quick Installation</span>
                <button
                  onClick={() => copyToClipboard('npm install @hackers-arsenal/cli', 'install-cmd')}
                  className="flex items-center space-x-2 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedId === 'install-cmd' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>{`# Install the Arsenal CLI globally
npm install -g @hackers-arsenal/cli

# Initialize your workspace
arsenal init

# Activate your license
arsenal activate --key YOUR_LICENSE_KEY

# Start the dashboard
arsenal dashboard`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-heading mb-3">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-400 mb-6">
                Our documentation is constantly evolving. Contact support for personalized assistance.
              </p>
              <a
                href="/support"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
              >
                <span>Contact Support</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
