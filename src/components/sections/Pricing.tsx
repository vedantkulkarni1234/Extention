'use client';

import { Coffee, Heart, Shield, Zap, Sparkles, Crown, Rocket, Star, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03),transparent_70%)]"/>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]"/>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]"/>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-green-500/20 text-green-400 text-xs font-mono mb-6 uppercase tracking-widest">
            <Gift className="w-3 h-3" />
            <span>Free Access</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6">
            Arsenal <span className="text-gradient">Unlocked</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            All 17+ premium extensions are now completely free. Unlock unlimited power without any restrictions.
          </p>
        </motion.div>

        {/* Free pricing card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative group lg:scale-105"
          >
            {/* Card */}
            <div className="relative h-full p-10 rounded-3xl glass-effect border overflow-hidden border-green-500/50 shadow-[0_0_60px_rgba(0,255,255,0.15)] transition-all duration-300">
              
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="px-5 py-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg flex items-center space-x-2">
                  <Sparkles className="w-3 h-3" />
                  <span>100% Free</span>
                </div>
              </div>

              {/* Premium gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute -inset-3 bg-gradient-to-br from-green-500/20 to-cyan-500/20 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative p-4 bg-black/50 rounded-2xl border border-green-500/30">
                      <Crown className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                </div>

                {/* Plan name */}
                <h3 className="text-2xl font-bold font-heading mb-2">
                  Complete Arsenal Access
                </h3>

                {/* Price - FREE */}
                <div className="flex items-baseline justify-center space-x-2 mb-6">
                  <span className="text-6xl font-bold font-mono tracking-tighter text-gradient">
                    FREE
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-8 leading-relaxed text-center">
                  All 17+ premium extensions unlocked. Lifetime updates. Unlimited licenses. No restrictions.
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {[
                    'All 17+ extensions included',
                    'Lifetime updates forever',
                    'Unlimited browser licenses',
                    'Full feature access',
                    'No restrictions or limitations',
                    'Premium support included'
                  ].map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-sm text-gray-300"
                    >
                      <div className="mt-0.5 p-1 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative w-full py-5 font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    <span>Get All Extensions Free</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                  />
                </motion.button>

                {/* Subtle support link */}
                <div className="mt-6 text-center">
                  <motion.a
                    href="#"
                    className="flex items-center justify-center space-x-1 text-xs text-gray-500 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    title="Support development"
                  >
                    <Coffee className="w-3 h-3" />
                    <span className="font-mono">Support our work</span>
                  </motion.a>
                </div>
              </div>

              {/* Premium border glow */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 opacity-30 blur-xl group-hover:opacity-50 transition-opacity -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Support section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full border border-white/10">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm text-gray-300">
              <span className="font-bold text-white">Optional Support</span> · Help us continue developing free tools
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Check icon for features
function Check({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M4 12l6 6L20 6" />
    </svg>
  );
}