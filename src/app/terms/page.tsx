'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Shield, Check, ArrowRight } from 'lucide-react';

export default function TermsPage() {
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
              <span>Legal Agreement</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Last updated: January 1, 2025
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  By accessing or using Hacker's Arsenal extensions and services, you accept and agree to be bound 
                  by the terms and conditions of this agreement. If you do not agree to these terms, please do 
                  not use our products or services.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">2. License and Usage</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Hacker's Arsenal grants you a limited, non-exclusive, non-transferable license to use our 
                  extensions for legitimate security research and bug bounty hunting purposes.
                </p>
                <ul className="space-y-3 text-gray-400">
                  {[
                    'Free Access: Unlimited usage of all extensions',
                    'No restrictions on browsers or devices',
                    'Lifetime access to all tools and future updates',
                    'Full feature access with no limitations',
                    'Community support and documentation included',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">3. Acceptable Use</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You agree to use our tools only for:
                </p>
                <ul className="space-y-3 text-gray-400">
                  {[
                    'Authorized security testing with proper scope permissions',
                    'Bug bounty hunting on programs you have explicit authorization for',
                    'Security research and vulnerability discovery',
                    'Educational purposes in controlled environments',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">4. Prohibited Activities</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You must NOT use our tools for:
                </p>
                <ul className="space-y-3 text-gray-400">
                  {[
                    'Unauthorized access to systems or data',
                    'Any illegal activities or malicious purposes',
                    'Attacking targets without proper authorization',
                    'Selling, redistributing, or sublicensing our tools',
                    'Reverse engineering or attempting to circumvent protections',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">5. Free Access Model</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  All Hacker's Arsenal extensions are provided completely free of charge. No payment is required, 
                  no subscription fees, and no limitations on usage. You have unlimited access to all tools and features.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  While our tools are free, we encourage voluntary support through optional donations to help 
                  fund continued development and maintenance of these security research tools.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">6. Disclaimer</h2>
                <p className="text-gray-400 leading-relaxed">
                  Hacker's Arsenal tools are provided "as is" for security research purposes. We are not 
                  responsible for any misuse of our tools or any damages resulting from such use. Users 
                  are solely responsible for ensuring they have proper authorization before testing any target.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold font-heading text-white mb-4">7. Contact</h2>
                <p className="text-gray-400 leading-relaxed">
                  For questions about these terms, contact us at{' '}
                  <a href="mailto:legal@hackersarsenal.com" className="text-cyan-400 hover:underline">
                    legal@hackersarsenal.com
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
