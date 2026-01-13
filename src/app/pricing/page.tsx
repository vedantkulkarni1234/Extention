'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { Coffee, Heart, Shield, Zap, Sparkles, Crown, Rocket, Star, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"/>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect border border-green-500/30 text-green-300 text-sm font-mono mb-8 uppercase tracking-[0.2em]">
              <Gift className="w-4 h-4" />
              <span>Free Access</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Arsenal <span className="text-gradient">Unlocked</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              All extensions are now completely free. No subscriptions, no payments, just pure security power at your fingertips.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Access Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-3xl border border-green-500/30 p-12 text-center relative overflow-hidden"
            >
              {/* Premium background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_70%)]"/>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]"/>
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-8 inline-block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="relative p-6 bg-black/50 rounded-3xl border border-green-500/30">
                    <Crown className="w-12 h-12 text-green-400" />
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                  Complete Arsenal <span className="text-gradient">Free</span>
                </h2>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  All 17+ premium extensions are now available at no cost. Unlock the full power of our elite security toolkit without any limitations.
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-10 text-left max-w-md mx-auto">
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
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start space-x-3 text-sm"
                    >
                      <div className="mt-0.5 p-1 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative w-full max-w-md mx-auto py-4 font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    <span>Get All Extensions Free</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Development Section - Very Subtle */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-effect border border-white/10 text-cyan-300 text-sm font-mono mb-8 uppercase tracking-[0.2em]">
              <Coffee className="w-4 h-4" />
              <span>Community Support</span>
            </div>

            <h2 className="text-3xl font-bold font-heading mb-6">
              <span className="text-gradient">Optional</span> Support
            </h2>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              While all extensions are completely free, you can optionally support our development efforts if you find value in these tools.
            </p>

            {/* Very subtle donation options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="#"
                className="group relative px-8 py-4 glass-effect border border-white/10 text-white hover:bg-white/5 hover:border-cyan-500/30 transition-all rounded-xl flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                title="Buy me a coffee"
              >
                <Coffee className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                <span className="font-medium">Buy a Coffee</span>
                <Heart className="w-4 h-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#"
                className="group relative px-8 py-4 glass-effect border border-white/10 text-white hover:bg-white/5 hover:border-purple-500/30 transition-all rounded-xl flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                title="Support development"
              >
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="font-medium">Support Project</span>
                <Star className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>

            <p className="text-sm text-gray-500 mt-6 italic">
              Your support helps us continue developing and maintaining these free security tools for the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: 'Are the extensions really completely free?',
                  answer: 'Yes! All extensions are 100% free with no hidden costs, subscriptions, or limitations. You get full access to all features without any restrictions.'
                },
                {
                  question: 'Do I need to create an account?',
                  answer: 'No account is required. You can download and use all extensions immediately without any signup process.'
                },
                {
                  question: 'How do I receive the extensions?',
                  answer: 'Simply click "Add to Arsenal" on any extension card and you can download it directly from the Chrome/Firefox web stores.'
                },
                {
                  question: 'Will there be updates?',
                  answer: 'Yes! All extensions receive lifetime updates completely free. We continuously improve and add new features.'
                },
                {
                  question: 'Can I use these for commercial work?',
                  answer: 'Absolutely! These tools are free for both personal and commercial use. No restrictions on how you use them.'
                },
                {
                  question: 'Why did you make them free?',
                  answer: 'We believe in empowering the security community. By making these tools free, we hope to help more researchers and contribute to a safer digital world.'
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl border border-white/10 overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-semibold text-white">{faq.question}</h3>
                      <span className="text-cyan-400 transform group-open:rotate-180 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass-effect rounded-full border border-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">
                <span className="font-bold text-white">Built by the Community, for the Community</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
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