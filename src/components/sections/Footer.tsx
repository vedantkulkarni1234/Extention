'use client';

import { Shield, Github, Twitter, MessageSquare, Mail, Send, Award, Lock, Coffee, Heart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/10 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.03),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="max-w-2xl mx-auto glass-effect rounded-2xl p-10 border border-white/10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 uppercase tracking-widest">
              <Mail className="w-3 h-3" />
              <span>Stay Updated</span>
            </div>
            <h3 className="text-3xl font-bold font-heading mb-4">
              Join the Elite <span className="text-gradient">Community</span>
            </h3>
            <p className="text-gray-400 mb-8">
              Get exclusive security research tips, new extension releases, and premium content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all font-mono text-sm"
              />
              <button
                type="submit"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Shield className="w-10 h-10 text-cyan-500 group-hover:scale-110 transition-transform" />
                <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl font-bold tracking-tighter font-heading">
                Hacker's <span className="text-gradient">Arsenal</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
              Free browser extensions for professional bug bounty hunters and security researchers.
              Elite toolset trusted by thousands, now available to everyone.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-3 glass-effect rounded-xl border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all hover:scale-110 group"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 glass-effect rounded-xl border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all hover:scale-110 group"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 glass-effect rounded-xl border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all hover:scale-110 group"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation columns */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/extensions" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"><span>All Extensions</span></Link></li>
              <li><Link href="/bundles" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"><span>Bundles</span></Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"><span>Pricing</span></Link></li>
              <li><Link href="/roadmap" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"><span>Roadmap</span></Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Security Blog</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">Support</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-cyan-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 py-8 border-y border-white/5">
         <div className="flex items-center space-x-2 text-gray-400">
           <Award className="w-5 h-5 text-cyan-400" />
           <span className="text-sm font-mono">50K+ Active Users</span>
         </div>
         <div className="flex items-center space-x-2 text-gray-400">
           <Shield className="w-5 h-5 text-purple-400" />
           <span className="text-sm font-mono">Industry Leading Security</span>
         </div>
         <div className="flex items-center space-x-2 text-gray-400">
           <Lock className="w-5 h-5 text-green-400" />
           <span className="text-sm font-mono">256-bit Encryption</span>
         </div>
        </div>

        {/* Very subtle support section */}
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mb-12 text-center"
        >
         <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect border border-white/10 text-cyan-300 text-sm font-mono mb-4 uppercase tracking-[0.2em]">
           <Coffee className="w-4 h-4" />
           <span>Support Our Mission</span>
         </div>

         <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
           All extensions are completely free. If you find value in these tools, consider supporting our development efforts.
         </p>

         {/* Very subtle donation options */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <motion.a
             href="#"
             className="group relative px-6 py-3 glass-effect border border-white/10 text-white hover:bg-white/5 hover:border-cyan-500/30 transition-all rounded-xl flex items-center space-x-2 text-sm"
             whileHover={{ scale: 1.05 }}
             title="Buy me a coffee"
           >
             <Coffee className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
             <span className="font-medium">Buy a Coffee</span>
             <Heart className="w-3 h-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
           </motion.a>

           <motion.a
             href="#"
             className="group relative px-6 py-3 glass-effect border border-white/10 text-white hover:bg-white/5 hover:border-purple-500/30 transition-all rounded-xl flex items-center space-x-2 text-sm"
             whileHover={{ scale: 1.05 }}
             title="Support development"
           >
             <Shield className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
             <span className="font-medium">Support Project</span>
             <Heart className="w-3 h-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
           </motion.a>
         </div>

         <p className="text-xs text-gray-500 mt-4 italic">
           Your support helps us continue developing and maintaining these free security tools for the community.
         </p>
        </motion.div>
        
        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} HACKER'S ARSENAL. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center space-x-6 text-xs text-gray-500 font-mono">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </span>
            <span className="uppercase tracking-widest">Protocol v4.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
