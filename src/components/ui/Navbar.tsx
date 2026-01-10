'use client';

import Link from 'next/link';
import { Shield, Terminal, ShoppingCart, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 glass-effect border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-3 group">
        <div className="relative">
          <Shield className="w-9 h-9 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <span className="text-xl font-bold tracking-tighter font-heading">
          Hacker's <span className="text-gradient">Arsenal</span>
        </span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider">
        <Link href="/extensions" className="relative group">
          <span className="hover:text-cyan-400 transition-colors">Extensions</span>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link href="/bundles" className="relative group">
          <span className="hover:text-cyan-400 transition-colors">Bundles</span>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link href="/docs" className="relative group">
          <span className="hover:text-cyan-400 transition-colors">Documentation</span>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </div>

      <div className="flex items-center space-x-3">
        <button className="p-2.5 hover:bg-white/10 rounded-lg transition-all hover:scale-110 group relative">
          <Terminal className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        <button className="p-2.5 hover:bg-white/10 rounded-lg transition-all hover:scale-110 group relative">
          <ShoppingCart className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full text-[10px] flex items-center justify-center font-bold">2</div>
          <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        <button className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-bold text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105 group">
          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span>Get Started</span>
        </button>
        <button className="p-2.5 hover:bg-white/10 rounded-lg transition-all hover:scale-110 group relative sm:hidden">
          <User className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
        </button>
      </div>
    </motion.nav>
  );
}
