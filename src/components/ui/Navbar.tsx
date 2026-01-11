'use client';

import Link from 'next/link';
import { Shield, Terminal, ShoppingCart, User, Sparkles, Crown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Extensions', href: '/extensions' },
    { label: 'Bundles', href: '/bundles' },
    { label: 'Documentation', href: '/docs' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect-hover border-b border-white/10 py-4' 
            : 'glass-effect border-b border-white/5 py-5'
        }`}
        style={{
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)'
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Enhanced logo with advanced hover effects */}
          <Link href="/" className="group relative">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="relative p-3 bg-black/60 rounded-2xl border border-white/20 group-hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-xl"
                >
                  <Crown className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
              </div>
              
              <div className="relative">
                <span className="text-2xl font-bold tracking-tighter font-heading group-hover:text-gradient transition-all duration-500">
                  Elite <span className="text-gradient">Arsenal</span>
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </Link>
          
          {/* Enhanced desktop navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Link 
                  href={item.href} 
                  className="group relative px-4 py-2 rounded-xl transition-all duration-300"
                >
                  <span className="relative z-10 text-sm font-semibold tracking-wider uppercase text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced action buttons */}
          <div className="flex items-center space-x-4">
            <motion.button 
              className="p-3 hover:bg-white/10 rounded-xl transition-all hover:scale-110 group relative backdrop-blur-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
            
            <motion.button 
              className="relative p-3 hover:bg-white/10 rounded-xl transition-all hover:scale-110 group backdrop-blur-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-[10px] font-bold text-black shadow-lg"
              >
                2
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
            
            <motion.button 
              className="hidden sm:flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-xl text-sm font-bold text-black hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all group border-premium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <span>Begin Journey</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            {/* Mobile menu toggle */}
            <motion.button 
              className="p-3 hover:bg-white/10 rounded-xl transition-all hover:scale-110 group relative lg:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced mobile menu with premium animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-6 right-6 z-40 lg:hidden"
          >
            <div className="glass-effect rounded-2xl border border-white/10 p-6 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link 
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wider"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="pt-4 border-t border-white/10"
                >
                  <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-sm font-bold text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all">
                    <Sparkles className="w-4 h-4" />
                    <span>Begin Journey</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
