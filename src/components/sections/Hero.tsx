'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroScene from '../3d/HeroScene';
import { Terminal, ArrowRight, Star, Users, Shield as ShieldCheck, Sparkles, Zap, Target } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const springConfig = { stiffness: 100, damping: 30, bounce: 100 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroScene />
      
      {/* Enhanced premium gradient overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black z-0"
      />
      
      {/* Dynamic background particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced premium badge with advanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect-hover border border-cyan-500/40 text-cyan-300 text-sm font-mono mb-12 uppercase tracking-[0.2em] shimmer backdrop-blur-xl hover-lift"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Terminal className="w-5 h-5" />
            </motion.div>
            <span className="font-semibold">Elite Security Arsenal</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-full text-xs font-bold"
            >
              PRO
            </motion.div>
          </motion.div>
          
          {/* Enhanced main headline with advanced typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative mb-12"
          >
            <motion.h1 
              className="text-6xl sm:text-8xl lg:text-9xl font-bold font-heading mb-6 tracking-tighter leading-[0.9] relative"
              style={{
                textShadow: '0 0 50px rgba(0, 255, 255, 0.3)'
              }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Dominate the
              </motion.span>
              <motion.span 
                className="block mt-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <GlitchText className="text-gradient text-glow-intense">Digital Battlefield</GlitchText>
              </motion.span>
            </motion.h1>
            
            {/* Enhanced decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-purple-500/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </motion.div>
          
          {/* Enhanced subheading with advanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed mb-6">
              The <span className="text-gradient font-semibold">ultimate arsenal</span> for elite security researchers
            </p>
            <p className="text-lg sm:text-xl text-gray-400 font-sans leading-relaxed">
              <span className="text-cyan-400 font-semibold">17+ premium extensions</span> engineered to expose 
              vulnerabilities others can't even imagine. Each tool a masterpiece of cybersecurity craftsmanship.
            </p>
          </motion.div>
          
          {/* Enhanced premium CTA buttons with advanced interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <motion.button 
              className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-black font-bold rounded-2xl hover:shadow-[0_0_60px_rgba(0,255,255,0.5)] transition-all hover:scale-105 uppercase tracking-wider text-sm overflow-hidden border-premium button-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
                <span>Command Arsenal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.button>
            
            <motion.button 
              className="group px-12 py-6 border-2 border-white/20 glass-effect-hover text-white font-bold rounded-2xl hover:border-cyan-500/60 transition-all hover:scale-105 uppercase tracking-wider text-sm backdrop-blur-xl hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Total Arsenal</span>
                <motion.span 
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-full text-xs font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Save 40%
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced trust indicators with premium animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
          >
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-black flex items-center justify-center text-sm font-bold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-300 font-mono font-semibold">25,000+ researchers</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Users className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div className="text-left">
                <motion.div 
                  className="text-2xl font-bold text-gradient"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  75K+
                </motion.div>
                <div className="text-sm text-gray-400 font-mono">Active Hunters</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ShieldCheck className="w-6 h-6 text-purple-400" />
              </motion.div>
              <div className="text-left">
                <motion.div 
                  className="text-2xl font-bold text-gradient"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                >
                  $5M+
                </motion.div>
                <div className="text-sm text-gray-400 font-mono">Bounties Earned</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced premium terminal logs with typing animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 hidden lg:block glass-effect p-6 rounded-xl border border-white/10 backdrop-blur-xl hover-lift"
      >
        <div className="flex flex-col space-y-3 font-mono text-xs text-gray-400">
          <motion.span 
            className="text-cyan-500/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            {`> INITIALIZING_QUANTUM_ENCRYPTION...`}
          </motion.span>
          <motion.span 
            className="text-cyan-500/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >
            {`> SCANNING_FOR_ZERO_DAYS...`}
          </motion.span>
          <motion.span 
            className="text-cyan-500/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.5 }}
          >
            {`> BYPASSING_ADVANCED_AI_WAF...`}
          </motion.span>
          <motion.div
            className="flex items-center space-x-2 text-cyan-400 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 3.6, duration: 1, repeat: Infinity }}
          >
            <motion.div 
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span>{`> DOMINATION_MODE_ACTIVATED`}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-purple-500/15 rounded-full blur-[120px] floating"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-cyan-500/15 rounded-full blur-[120px] floating"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ animationDelay: '3s' }}
      />
      
      {/* Additional ambient glow effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
