'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Security Researcher @ HackerOne',
    image: '1',
    rating: 5,
    text: 'These extensions have completely transformed my bug bounty workflow. The JS Recon Radar alone has helped me find vulnerabilities that would have taken days to discover manually. Worth every penny.',
  },
  {
    name: 'Sarah Chen',
    role: 'Penetration Tester @ CyberSec Corp',
    image: '2',
    rating: 5,
    text: 'The attention to detail in these tools is incredible. The DOM Sink Tracker has become an essential part of my XSS hunting toolkit. Professional-grade quality at an unbeatable price.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Bug Bounty Hunter',
    image: '3',
    rating: 5,
    text: "I've earned over $50K in bounties since using the Total Arsenal bundle. The Hunter's Second Brain alone has 10x'd my productivity. This is the real deal for serious researchers.",
  },
  {
    name: 'Elena Volkov',
    role: 'AppSec Engineer @ TechStart',
    image: '4',
    rating: 5,
    text: 'Finally, security tools built by security professionals who understand the workflow. The API Schema Reconstructor has saved me countless hours on reverse engineering APIs.',
  },
  {
    name: 'David Park',
    role: 'Freelance Security Consultant',
    image: '5',
    rating: 5,
    text: 'The build quality and UX of these extensions rivals anything from major security vendors, but at a fraction of the cost. The Access Control Matrix Builder is pure genius.',
  },
  {
    name: 'Lisa Martinez',
    role: 'Senior Security Analyst',
    image: '6',
    rating: 5,
    text: 'As someone who tests web applications daily, these extensions have become indispensable. The Response Anomaly Detector catches edge cases that automated scanners miss entirely.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-purple-500/20 text-purple-400 text-xs font-mono mb-6 uppercase tracking-widest">
            <Star className="w-3 h-3 fill-current" />
            <span>Trusted by Elite Researchers</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6">
            What Security <span className="text-gradient">Experts Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have elevated their security research with our premium tools.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative h-full p-8 rounded-2xl glass-effect border border-white/10 hover:border-purple-500/30 transition-all duration-300 group premium-card-hover">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-purple-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Premium border glow */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Join 50,000+ security researchers who trust our tools
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center -space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-black flex items-center justify-center text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left ml-4">
              <div className="flex items-center space-x-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400 font-mono">
                4.9/5 from 12,000+ reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}
