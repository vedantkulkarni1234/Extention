'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Check, Zap, Server, FileLock } from 'lucide-react';

export default function SecurityPage() {
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
              <span>Security Practices</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Security <span className="text-gradient">Commitment</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              As security researchers ourselves, we understand the importance of protecting your data 
              and tools. Here's how we keep you safe.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Lock,
                  title: 'Encryption',
                  description: 'All data encrypted at rest and in transit with AES-256 and TLS 1.3',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: Key,
                  title: 'Access Control',
                  description: 'Role-based access, MFA required for all admin operations',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Server,
                  title: 'Infrastructure',
                  description: 'SOC 2 compliant cloud infrastructure with regular audits',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  icon: FileLock,
                  title: 'Data Privacy',
                  description: 'GDPR compliant, minimal data collection, never sold',
                  gradient: 'from-yellow-500 to-orange-500',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold font-heading text-white mb-6">Security Measures</h2>
              <ul className="space-y-4 text-gray-400">
                {[
                  'All extensions are code-signed and verified',
                  'Regular penetration testing by third parties',
                  'Bug bounty program for our own tools',
                  'Automated vulnerability scanning',
                  '24/7 monitoring and incident response',
                  'Secure software development lifecycle',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold font-heading text-white mb-4">Report a Vulnerability</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                If you believe you've found a security vulnerability in our tools or services, 
                we encourage you to report it responsibly.
              </p>
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-400 font-medium">
                  <Zap className="w-5 h-5 inline mr-2" />
                  Email: security@hackersarsenal.com
                </p>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold font-heading text-white mb-4">Compliance</h2>
              <p className="text-gray-400 leading-relaxed">
                Our infrastructure and practices comply with industry standards including SOC 2, GDPR, 
                and CCPA. For enterprise compliance documentation, contact our security team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
