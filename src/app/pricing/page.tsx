'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { Check, Shield, Zap, Sparkles, Crown, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Single Tactical',
    price: '49',
    description: 'Perfect for specific task automation and focused security research.',
    features: [
      'One premium extension of choice',
      'Lifetime updates',
      'Email support',
      'Single browser license',
      '30-day money-back guarantee',
    ],
    icon: Zap,
    gradient: 'from-gray-500 to-gray-700',
    iconColor: 'text-gray-400',
  },
  {
    name: 'Hunter Bundle',
    price: '199',
    description: 'The essentials for serious bug hunters seeking maximum flexibility.',
    features: [
      '5 extensions of your choice',
      'Priority email support',
      'Beta access to new tools',
      'Multi-browser license (Chrome, Firefox)',
      'Private Discord community access',
      'Quarterly new tool additions',
    ],
    icon: Sparkles,
    gradient: 'from-cyan-500 to-purple-500',
    iconColor: 'text-cyan-400',
    popular: true,
    badge: 'Most Popular',
  },
  {
    name: 'Total Arsenal',
    price: '499',
    description: 'Ultimate power for elite researchers and professional teams.',
    features: [
      'All 17+ extensions included',
      '24/7 dedicated priority support',
      'Private Discord channel',
      'Unlimited browser licenses',
      'Custom integration requests',
      'Priority feature development input',
      'Lifetime updates forever',
    ],
    icon: Crown,
    gradient: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-400',
    badge: 'Best Value',
  },
];

const faqs = [
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade from Single Tactical to Hunter Bundle or Total Arsenal at any time. We\'ll credit your account for your previous purchase.',
  },
  {
    question: 'Do you offer team licenses?',
    answer: 'Yes! Contact our sales team for custom enterprise packages. We offer volume discounts for teams of 5+ researchers.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and cryptocurrency (BTC, ETH) for privacy-focused customers.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer a 30-day money-back guarantee on all purchases. If you\'re not satisfied, we\'ll refund you no questions asked.',
  },
  {
    question: 'How do I receive my extensions?',
    answer: 'After purchase, you\'ll receive a license key and download links via email. Extensions are installed directly from the Chrome/Firefox web stores.',
  },
  {
    question: 'Do extensions work offline?',
    answer: 'Yes! Once installed, all extensions work fully offline. Some features may require an internet connection for optimal performance.',
  },
];

export default function PricingPage() {
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
              <Crown className="w-4 h-4" />
              <span>Simple Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Arsenal <span className="text-gradient">Access</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              One-time payment, lifetime access. No subscriptions, no hidden fees. 
              Choose the level of power you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative group ${plan.popular ? 'lg:scale-105 lg:-translate-y-4' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-5 py-2 bg-gradient-to-r ${plan.gradient} rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg flex items-center space-x-2`}>
                      <Sparkles className="w-3 h-3" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}
                
                <div className={`relative h-full p-8 rounded-3xl glass-effect border overflow-hidden ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-[0_0_60px_rgba(0,255,255,0.15)]' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all duration-300`}>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="relative inline-block">
                        <div className={`absolute -inset-3 bg-gradient-to-br ${plan.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300`} />
                        <div className={`relative p-4 bg-black/50 rounded-2xl border ${plan.popular ? 'border-cyan-500/30' : 'border-white/10'}`}>
                          <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                        </div>
                      </div>
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>

                    {/* Price */}
                    <div className="flex items-baseline space-x-1 mb-6">
                      <span className="text-3xl font-bold font-mono text-gray-400">$</span>
                      <span className={`text-5xl font-bold font-mono tracking-tighter ${plan.popular ? 'text-gradient' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-sm font-mono uppercase">/one-time</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="flex items-start space-x-3 text-sm"
                        >
                          <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-br ${plan.gradient} shrink-0`}>
                            <Check className="w-3 h-3 text-black" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`group/btn relative w-full py-4 font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 overflow-hidden rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
                    }`}>
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        <span>Get Started</span>
                      </span>
                    </button>
                  </div>

                  {/* Premium border glow */}
                  {plan.popular && (
                    <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-30 blur-xl group-hover:opacity-50 transition-opacity -z-10`} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Feature <span className="text-gradient">Comparison</span>
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-6 text-white font-bold">Single</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-bold">Bundle</th>
                    <th className="text-center py-4 px-6 text-purple-400 font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Extensions', '1', '5', '17+'],
                    ['Browser Licenses', '1', '2', 'Unlimited'],
                    ['Updates', 'Lifetime', 'Lifetime', 'Lifetime'],
                    ['Priority Support', 'Standard', 'Priority', '24/7 Dedicated'],
                    ['Beta Access', 'No', 'Yes', 'Yes'],
                    ['Private Community', 'No', 'Yes', 'Yes'],
                    ['Custom Integrations', 'No', 'No', 'Yes'],
                  ].map(([feature, single, bundle, total], idx) => (
                    <tr key={feature} className="border-b border-white/5">
                      <td className="py-4 px-6 text-gray-300">{feature}</td>
                      <td className="text-center py-4 px-6 text-gray-400">{single}</td>
                      <td className="text-center py-4 px-6 text-cyan-400 font-medium">{bundle}</td>
                      <td className="text-center py-4 px-6 text-purple-400 font-medium">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              {faqs.map((faq, index) => (
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

      {/* Money Back Guarantee */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass-effect rounded-full border border-green-500/20">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">
                <span className="font-bold text-white">30-Day Money-Back Guarantee</span>
                {' '}&middot;{' '}No questions asked
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
