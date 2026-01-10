'use client';

import { Check, Shield, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Single Tactical',
    price: '49',
    description: 'Perfect for specific task automation.',
    features: ['One premium extension', 'Lifetime updates', 'Standard support', 'Single browser license'],
    icon: Target,
    color: 'white',
  },
  {
    name: 'Hunter Bundle',
    price: '199',
    description: 'The essentials for serious bug hunting.',
    features: ['5 extensions of your choice', 'Priority support', 'Beta access to new tools', 'Multi-browser license'],
    icon: Zap,
    color: 'cyan-500',
    popular: true,
  },
  {
    name: 'Total Arsenal',
    price: '499',
    description: 'Ultimate power for the elite researcher.',
    features: ['All 17+ extensions', '24/7 dedicated support', 'Private Discord access', 'Unlimited licenses'],
    icon: Shield,
    color: 'purple-500',
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4">
            Arsenal <span className="text-cyan-500">Access</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose your level of engagement. From single tools to the full elite toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 bg-black border ${plan.popular ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(0,255,255,0.1)]' : 'border-white/10'} relative flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <plan.icon className={`w-10 h-10 text-${plan.color} mb-6`} />
                <h3 className="text-xl font-bold font-heading uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold font-mono">$</span>
                  <span className="text-5xl font-bold font-mono tracking-tighter">{plan.price}</span>
                  <span className="text-gray-500 text-sm font-mono uppercase">/one-time</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                plan.popular ? 'bg-cyan-500 text-black hover:bg-white' : 'bg-white text-black hover:bg-cyan-500'
              }`}>
                Deploy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
