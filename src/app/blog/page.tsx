'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    slug: 'advanced-xss-detection-techniques',
    title: 'Advanced XSS Detection Techniques with DOM Sink Tracker',
    excerpt: 'Learn how to leverage our new DOM Sink Tracker to identify and exploit complex XSS vulnerabilities that traditional scanners miss.',
    author: 'Marcus Webb',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    category: 'Exploitation',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    slug: 'mastering-javascript-reconnaissance',
    title: 'Mastering JavaScript Reconnaissance: A Deep Dive',
    excerpt: 'Comprehensive guide to extracting endpoints, secrets, and vulnerabilities from JavaScript files using JS Recon Radar.',
    author: 'Alex Chen',
    date: 'Jan 10, 2025',
    readTime: '12 min read',
    category: 'Reconnaissance',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'automating-bug-bounty-workflows',
    title: 'Automating Your Bug Bounty Workflows',
    excerpt: 'How to use the new Workflow Orchestrator to create custom automation pipelines that save hours of manual work.',
    author: 'Sarah Rivera',
    date: 'Jan 5, 2025',
    readTime: '10 min read',
    category: 'Workflow',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    slug: 'api-security-testing-guide',
    title: 'Complete Guide to API Security Testing',
    excerpt: 'From authentication bypass to IDOR vulnerabilities - learn how to systematically test APIs using our comprehensive toolset.',
    author: 'Marcus Webb',
    date: 'Dec 28, 2024',
    readTime: '15 min read',
    category: 'Analysis',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'maximizing-bounty-earnings',
    title: 'Maximizing Your Bounty Earnings: A Strategic Approach',
    excerpt: 'Time management, scope selection, and workflow optimization strategies from top-earning bug bounty hunters.',
    author: 'Alex Chen',
    date: 'Dec 20, 2024',
    readTime: '7 min read',
    category: 'Strategy',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    slug: 'understanding-authentication-flows',
    title: 'Understanding Complex Authentication Flows',
    excerpt: 'Visualize and analyze OAuth, JWT, and session-based authentication mechanisms with AuthFlow Visualizer.',
    author: 'Sarah Rivera',
    date: 'Dec 15, 2024',
    readTime: '9 min read',
    category: 'Analysis',
    gradient: 'from-indigo-500 to-violet-500',
  },
];

const categories = [
  { name: 'All Posts', count: 24 },
  { name: 'Reconnaissance', count: 8 },
  { name: 'Exploitation', count: 6 },
  { name: 'Analysis', count: 5 },
  { name: 'Workflow', count: 3 },
  { name: 'Strategy', count: 2 },
];

export default function BlogPage() {
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
              <Tag className="w-4 h-4" />
              <span>Security Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Security <span className="text-gradient">Blog</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Expert guides, techniques, and insights from our team of veteran security researchers 
              to help you level up your bug bounty game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                    : 'glass-effect border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30'
                }`}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-60">({cat.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 -z-10" />
                
                <div className="h-full p-8 rounded-3xl glass-effect border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl font-bold font-heading mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{post.author}</div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={`/blog/${post.slug}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-heading mb-4">
                Stay in the <span className="text-gradient">Loop</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Subscribe to get the latest security research techniques, tool updates, 
                and exclusive content delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all font-mono text-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
