'use client';

import { Check, Shield, Zap, Target, Sparkles, Crown, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Single Tactical',
    price: '49',
    description: 'Perfect for specific task automation and focused security research.',
    features: ['One premium extension', 'Lifetime updates', 'Email support', 'Single browser license', '30-day money back'],
    icon: Target,
    gradient: 'from-gray-500 to-gray-700',
    iconColor: 'text-gray-400',
  },
  {
    name: 'Hunter Bundle',
    price: '199',
    description: 'The essentials for serious bug hunters seeking maximum flexibility.',
    features: ['5 extensions of your choice', 'Priority support', 'Beta access to new tools', 'Multi-browser license', 'Private community access', 'Quarterly updates'],
    icon: Zap,
    gradient: 'from-cyan-500 to-purple-500',
    iconColor: 'text-cyan-400',
    popular: true,
    badge: 'Most Popular',
  },
  {
    name: 'Total Arsenal',
    price: '499',
    description: 'Ultimate power for elite researchers and professional teams.',
    features: ['All 17+ extensions', '24/7 dedicated support', 'Private Discord access', 'Unlimited licenses', 'Custom integrations', 'Priority feature requests', 'Lifetime updates'],
    icon: Shield,
    gradient: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-400',
    badge: 'Best Value',
  },
];

export default function Pricing() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03),transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 uppercase tracking-widest">
            <Crown className="w-3 h-3" />
            <span>Premium Pricing</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6">
            Arsenal <span className="text-gradient">Access</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose your level of engagement. From single tools to the full elite toolkit. 
            One-time payment, lifetime access.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group ${plan.popular ? 'lg:scale-105 lg:-translate-y-2' : ''}`}
            >
              {/* Card */}
              <div className={`relative h-full p-10 rounded-3xl glass-effect border overflow-hidden ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-[0_0_60px_rgba(0,255,255,0.15)]' 
                  : 'border-white/10 hover:border-white/20'
              } transition-all duration-300`}>
                
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className={`px-5 py-2 bg-gradient-to-r ${plan.gradient} rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg flex items-center space-x-2`}>
                      <Sparkles className="w-3 h-3" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                {/* Premium gradient overlay on hover */}
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
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-4xl font-bold font-mono text-gray-400">$</span>
                    <span className={`text-6xl font-bold font-mono tracking-tighter ${plan.popular ? 'text-gradient' : 'text-white'}`}>
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
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-sm text-gray-300"
                      >
                        <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-br ${plan.gradient} shrink-0`}>
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`group/btn relative w-full py-5 font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 overflow-hidden rounded-xl ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
                  }`}>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      <span>Get Started</span>
                    </span>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    )}
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

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full border border-white/10">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">
              <span className="font-bold text-white">30-Day Money-Back Guarantee</span> · No questions asked
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
