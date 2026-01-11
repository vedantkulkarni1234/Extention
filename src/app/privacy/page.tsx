'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Check, ArrowRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-mono mb-8 uppercase tracking-[0.2em]">
              <Shield className="w-4 h-4" />
              <span>Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Last updated: January 1, 2025
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Lock className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold font-heading text-white m-0">Data We Collect</h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We believe in minimal data collection. Here's what we collect and why:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Account Information:</strong> Email, license key, and purchase history</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Usage Analytics:</strong> Anonymous extension usage statistics (opt-out available)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span><strong>Support Communications:</strong> When you contact us for help</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Eye className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold font-heading text-white m-0">What We DON'T Collect</h2>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {[
                    'Your bug bounty targets or findings',
                    'Personal browsing data',
                    'Scan results or vulnerability data',
                    'Any data processed by our extensions',
                    'Financial information (processed by Stripe)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-green-400 font-bold text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Server className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold font-heading text-white m-0">Data Storage & Security</h2>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  All data is encrypted at rest and in transit using industry-standard encryption (AES-256, TLS 1.3). 
                  We use secure cloud infrastructure with regular security audits. Your data is never sold to third parties.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">Your Rights</h2>
                <ul className="space-y-3 text-gray-400">
                  {[
                    'Access your data at any time',
                    'Request data deletion',
                    'Export your data',
                    'Opt-out of analytics',
                    'Update your account information',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">Contact Us</h2>
                <p className="text-gray-400 leading-relaxed">
                  For privacy-related inquiries or to exercise your rights, contact our privacy team at{' '}
                  <a href="mailto:privacy@hackersarsenal.com" className="text-cyan-400 hover:underline">
                    privacy@hackersarsenal.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
