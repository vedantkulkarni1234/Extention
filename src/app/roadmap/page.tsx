'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Calendar, Download, ArrowRight, Check, Zap, Target, Shield } from 'lucide-react';

const roadmapItems = [
  {
    quarter: 'Q1 2025',
    status: 'completed',
    items: [
      { name: 'Workflow Orchestrator & Hotkey Commander', type: 'extension', icon: Zap },
      { name: 'Enhanced keyboard shortcuts system', type: 'feature', icon: Target },
      { name: 'Performance optimization for all extensions', type: 'improvement', icon: Shield },
      { name: 'Firefox extension support', type: 'platform', icon: Target },
    ],
  },
  {
    quarter: 'Q2 2025',
    status: 'in-progress',
    items: [
      { name: 'AI-powered vulnerability suggestions', type: 'feature', icon: Zap },
      { name: 'Cloud sync for Hunter\'s Second Brain', type: 'feature', icon: Shield },
      { name: 'Collaborative reporting features', type: 'feature', icon: Target },
      { name: 'Mobile companion app (iOS/Android)', type: 'platform', icon: Target },
    ],
  },
  {
    quarter: 'Q3 2025',
    status: 'planned',
    items: [
      { name: 'API Security Testing Suite', type: 'extension', icon: Zap },
      { name: 'GraphQL Analyzer', type: 'extension', icon: Target },
      { name: 'Automated recon workflows', type: 'feature', icon: Shield },
      { name: 'Team collaboration hub', type: 'platform', icon: Target },
    ],
  },
  {
    quarter: 'Q4 2025',
    status: 'planned',
    items: [
      { name: 'Enterprise SSO integration', type: 'feature', icon: Shield },
      { name: 'Custom rule engine', type: 'feature', icon: Zap },
      { name: 'CI/CD pipeline integration', type: 'platform', icon: Target },
      { name: 'Bug bounty program management', type: 'extension', icon: Target },
    ],
  },
];

const recentReleases = [
  { version: '4.2.0', date: 'Jan 15, 2025', changes: 'Major UI refresh, new Workflow Orchestrator' },
  { version: '4.1.5', date: 'Jan 8, 2025', changes: 'Security fixes, performance improvements' },
  { version: '4.1.0', date: 'Dec 20, 2024', changes: 'Added Firefox support, new Recon Aggregator' },
  { version: '4.0.0', date: 'Nov 1, 2024', changes: 'Complete overhaul, new branding' },
];

export default function RoadmapPage() {
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
              <span>Product Roadmap</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              The Future of <span className="text-gradient">Your Arsenal</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              We're constantly improving our tools based on researcher feedback. 
              Here's what's coming next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {roadmapItems.map((quarter, index) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <h2 className="text-2xl font-bold font-heading">{quarter.quarter}</h2>
                  <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    quarter.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : quarter.status === 'in-progress'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {quarter.status === 'completed' ? 'Completed' : quarter.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </div>
                </div>
                
                <div className="glass-effect rounded-2xl border border-white/10 overflow-hidden">
                  <div className="divide-y divide-white/5">
                    {quarter.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.name} className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              item.type === 'extension' 
                                ? 'bg-cyan-500/20' 
                                : item.type === 'feature'
                                ? 'bg-purple-500/20'
                                : 'bg-gray-500/20'
                            }`}>
                              <Icon className={`w-5 h-5 ${
                                item.type === 'extension' 
                                  ? 'text-cyan-400' 
                                  : item.type === 'feature'
                                  ? 'text-purple-400'
                                  : 'text-gray-400'
                              }`} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white">{item.name}</h3>
                              <span className="text-xs text-gray-500 uppercase tracking-wider">{item.type}</span>
                            </div>
                          </div>
                          
                          {quarter.status === 'completed' ? (
                            <Check className="w-6 h-6 text-green-400" />
                          ) : (
                            <ArrowRight className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Releases */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Recent <span className="text-gradient">Releases</span>
            </h2>
            
            <div className="space-y-4">
              {recentReleases.map((release, index) => (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 glass-effect rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold font-mono text-cyan-400">{release.version}</div>
                      <div className="text-xs text-gray-500">{release.date}</div>
                    </div>
                    <div className="border-l border-white/10 pl-6">
                      <p className="text-gray-300 group-hover:text-white transition-colors">{release.changes}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('/extensions', '_blank')}
                    className="p-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="/changelog" className="text-cyan-400 hover:underline inline-flex items-center space-x-2">
                <span>View full changelog</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Request Feature */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-heading mb-4">
                Have a <span className="text-gradient">Feature Request</span>?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                We're always listening to the community. Let us know what features 
                would make your bug hunting workflow even better.
              </p>
              <a
                href="/support"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
              >
                <span>Submit Feedback</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
