'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Calendar, Download, ArrowRight, Tag, Check } from 'lucide-react';

const changelog = [
  {
    version: '4.2.0',
    date: 'January 15, 2025',
    type: 'major',
    changes: [
      { type: 'feature', text: 'Added Workflow Orchestrator & Hotkey Commander extension' },
      { type: 'feature', text: 'New keyboard shortcut system across all extensions' },
      { type: 'improvement', text: 'Complete UI refresh with enhanced glassmorphism' },
      { type: 'improvement', text: '30% performance improvement across all extensions' },
      { type: 'fix', text: 'Fixed memory leak in JS Recon Radar' },
      { type: 'fix', text: 'Resolved extension conflicts in Firefox' },
    ],
  },
  {
    version: '4.1.5',
    date: 'January 8, 2025',
    type: 'patch',
    changes: [
      { type: 'fix', text: 'Security patch for AuthFlow Visualizer' },
      { type: 'fix', text: 'Fixed token refresh issue in OAuth flows' },
      { type: 'improvement', text: 'Updated dependency versions' },
    ],
  },
  {
    version: '4.1.0',
    date: 'December 20, 2024',
    type: 'minor',
    changes: [
      { type: 'feature', text: 'Added Firefox browser support' },
      { type: 'feature', text: 'New Recon Aggregator & Auto-Correlator extension' },
      { type: 'improvement', text: 'Enhanced endpoint detection algorithms' },
      { type: 'improvement', text: 'Better secret detection patterns' },
      { type: 'fix', text: 'Fixed export issues in Report Generator Pro' },
    ],
  },
  {
    version: '4.0.0',
    date: 'November 1, 2024',
    type: 'major',
    changes: [
      { type: 'feature', text: 'Complete rebranding to Hacker\'s Arsenal' },
      { type: 'feature', text: 'New unified dashboard for all extensions' },
      { type: 'feature', text: 'Added WebSocket & Real-Time Traffic Analyzer' },
      { type: 'feature', text: 'New glassmorphism design system' },
      { type: 'improvement', text: 'Migrated to React 19 and Next.js 16' },
      { type: 'improvement', text: 'New Framer Motion animations' },
    ],
  },
  {
    version: '3.5.0',
    date: 'September 15, 2024',
    type: 'minor',
    changes: [
      { type: 'feature', text: 'Added Access Control Matrix Builder' },
      { type: 'feature', text: 'New collaboration features for team usage' },
      { type: 'improvement', text: 'Enhanced parameter detection in ParamHawk' },
    ],
  },
  {
    version: '3.0.0',
    date: 'July 1, 2024',
    type: 'major',
    changes: [
      { type: 'feature', text: 'Added 6 new extensions to the arsenal' },
      { type: 'feature', text: 'Introduced Total Arsenal bundle' },
      { type: 'feature', text: 'New AI-powered vulnerability suggestions' },
      { type: 'improvement', text: 'Major performance optimizations' },
    ],
  },
];

const getChangeIcon = (type: string) => {
  switch (type) {
    case 'feature': return '✨';
    case 'improvement': return '⚡';
    case 'fix': return '🐛';
    default: return '•';
  }
};

const getChangeColor = (type: string) => {
  switch (type) {
    case 'feature': return 'text-cyan-400 bg-cyan-400/10';
    case 'improvement': return 'text-yellow-400 bg-yellow-400/10';
    case 'fix': return 'text-green-400 bg-green-400/10';
    default: return 'text-gray-400';
  }
};

const getVersionBadge = (type: string) => {
  switch (type) {
    case 'major': return { text: 'Major Release', class: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' };
    case 'minor': return { text: 'Minor Update', class: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' };
    case 'patch': return { text: 'Patch Fix', class: 'bg-green-500/20 text-green-400 border border-green-500/30' };
    default: return { text: 'Update', class: 'bg-gray-500/20 text-gray-400 border border-gray-500/30' };
  }
};

export default function ChangelogPage() {
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
              <Calendar className="w-4 h-4" />
              <span>Version History</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Changelog
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Track all the updates, improvements, and fixes we've made to keep your Arsenal 
              sharp and ready for the digital battlefield.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changelog Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {changelog.map((release, index) => {
              const badge = getVersionBadge(release.type);
              return (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="mb-12 last:mb-0"
                >
                  {/* Version Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <h2 className="text-3xl font-bold font-heading text-white">
                        v{release.version}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badge.class}`}>
                        {badge.text}
                      </span>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 font-mono">
                      {release.date}
                    </div>
                  </div>
                  
                  {/* Changes List */}
                  <div className="glass-effect rounded-2xl border border-white/10 overflow-hidden">
                    <div className="divide-y divide-white/5">
                      {release.changes.map((change, idx) => (
                        <div key={idx} className="flex items-start space-x-4 p-5 hover:bg-white/5 transition-colors">
                          <span className="text-xl shrink-0 mt-0.5">{getChangeIcon(change.type)}</span>
                          <div className="flex-1">
                            <p className="text-gray-300">{change.text}</p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-mono uppercase ${getChangeColor(change.type)}`}>
                            {change.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Download Button for Major Releases */}
                  {release.type === 'major' && (
                    <div className="mt-4 flex justify-end">
                      <button className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Download className="w-4 h-4" />
                        <span>Download Release Assets</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <Tag className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-heading mb-4">
                Stay <span className="text-gradient">Updated</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Get notified when we release new versions, features, or security patches.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/blog"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
                >
                  Subscribe to Updates
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
