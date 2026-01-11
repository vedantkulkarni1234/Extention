'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { Users, Award, Shield, Zap, Target, Globe, Cpu, Lock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '17+', label: 'Premium Extensions', icon: Target },
  { value: '50K+', label: 'Active Researchers', icon: Users },
  { value: '$5M+', label: 'Bounties Earned', icon: Award },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Developer',
    bio: 'Former security researcher at Google, 10+ years in cybersecurity.',
    avatar: 'AC',
  },
  {
    name: 'Sarah Rivera',
    role: 'Head of Engineering',
    bio: 'Full-stack developer specializing in browser extensions and security tools.',
    avatar: 'SR',
  },
  {
    name: 'Marcus Webb',
    role: 'Security Architect',
    bio: 'Bug bounty hunter with $2M+ in confirmed findings.',
    avatar: 'MW',
  },
  {
    name: 'Elena Kovač',
    role: 'Product Designer',
    bio: 'Creating intuitive interfaces for complex security workflows.',
    avatar: 'EK',
  },
];

const values = [
  {
    icon: Lock,
    title: 'Security First',
    description: 'Every extension is built with security as the foundation, not an afterthought.',
  },
  {
    icon: Zap,
    title: 'Performance Driven',
    description: 'Optimized for speed and efficiency, never compromising your workflow.',
  },
  {
    icon: Target,
    title: 'Researcher Owned',
    description: 'Built by bug bounty hunters, for bug bounty hunters. We understand your needs.',
  },
  {
    icon: Globe,
    title: 'Open Philosophy',
    description: 'Transparent development, community feedback, and continuous improvement.',
  },
];

export default function AboutPage() {
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
              <Cpu className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Built by <span className="text-gradient">Researchers</span>,<br />
              For Researchers
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              We're a team of professional bug bounty hunters and security researchers who got tired 
              of mediocre tools. We built the Arsenal we wished we had.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold font-heading text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold font-heading mb-8 text-center">
              Our <span className="text-gradient">Story</span>
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
                <h3 className="text-xl font-bold font-heading text-white mb-4">
                  The Problem We Solved
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  In 2021, our founder Alex Chen was spending hours manually analyzing JavaScript files 
                  during bug bounty hunts. Existing tools were slow, unreliable, or missing critical features. 
                  He realized that many successful researchers were using fragmented toolchains or relying 
                  on outdated extensions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Instead of complaining, he built JS Recon Radar - what would become the first extension 
                  in the Arsenal. Within months, it helped find over $500K in bounties for early users.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold font-heading text-white mb-4">
                  The Arsenal Was Born
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Following the success of JS Recon Radar, we surveyed 500+ bug bounty hunters to 
                  understand their biggest pain points. The results were clear: researchers needed 
                  integrated tools that worked seamlessly together, with an emphasis on performance 
                  and usability.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Today, the Arsenal includes 17+ premium extensions used by 50,000+ security researchers 
                  worldwide. Our tools have contributed to over $5 million in confirmed bug bounty payouts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold font-heading mb-12 text-center">
              Our <span className="text-gradient">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-6 p-6 glass-effect rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold font-heading mb-12 text-center">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mx-auto">
                      {member.avatar}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/50 to-purple-500/50 rounded-2xl blur-md opacity-50" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-heading mb-4">
                Join the Elite Ranks
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                50,000+ security researchers trust our tools. Become part of a community 
                dedicated to making the internet a safer place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/extensions"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
                >
                  Browse Extensions
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
                >
                  Read Documentation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
