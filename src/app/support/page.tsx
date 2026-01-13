'use client';

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, HelpCircle, BookOpen, Zap, Shield, ExternalLink } from 'lucide-react';

const supportOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email within 24 hours',
    action: 'Send Email',
    href: 'mailto:support@hackersarsenal.com',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MessageSquare,
    title: 'Discord Community',
    description: 'Join 5,000+ researchers on our Discord',
    action: 'Join Discord',
    href: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Browse our comprehensive knowledge base',
    action: 'View Docs',
    href: '/docs',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team in real-time',
    action: 'Start Chat',
    href: '#',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

const faqs = [
  {
    question: 'How do I download and install the extensions?',
    answer: 'All extensions are completely free. Simply browse our extension collection, click on any tool you want, and you\'ll be directed to install it directly from your browser\'s extension store. No payment or registration required.',
  },
  {
    question: 'Can I use extensions on multiple browsers?',
    answer: 'Yes! All extensions work across Chrome, Firefox, and other supported browsers. There are no restrictions on browser choice or device limitations.',
  },
  {
    question: 'What if an extension isn\'t working correctly?',
    answer: 'First, try clearing your browser cache and restarting the extension. If issues persist, check our troubleshooting guide in the documentation or contact support with details about the problem.',
  },
  {
    question: 'Do you accept donations or support?',
    answer: 'While all our tools are completely free, we appreciate voluntary donations to help fund continued development. You can support our work through the donation options in our footer or support sections.',
  },
  {
    question: 'How do I report a security vulnerability in your tools?',
    answer: 'We take security seriously. If you believe you\'ve found a vulnerability in our extensions, please email security@hackersarsenal.com with detailed information.',
  },
  {
    question: 'Can I request a new feature?',
    answer: 'Absolutely! We love hearing from our users. Submit feature requests through our support channel or vote on existing requests in our public roadmap.',
  },
];

const contactInfo = [
  { label: 'Sales Inquiries', value: 'sales@hackersarsenal.com', icon: Mail },
  { label: 'Support', value: 'support@hackersarsenal.com', icon: Mail },
  { label: 'Security', value: 'security@hackersarsenal.com', icon: Shield },
  { label: 'Response Time', value: '< 24 hours', icon: Clock },
];

export default function SupportPage() {
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
              <HelpCircle className="w-4 h-4" />
              <span>We're Here to Help</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">
              Customer <span className="text-gradient">Support</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Our team of veteran security researchers is available to help you get the most 
              out of your Arsenal. Choose the support option that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={option.title}
                  href={option.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative p-8 glass-effect rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading mb-3">{option.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{option.description}</p>
                    
                    <span className="inline-flex items-center space-x-2 text-cyan-400 font-medium text-sm group-hover:underline">
                      <span>{option.action}</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-12">
              Contact <span className="text-gradient">Information</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-6 glass-effect rounded-xl border border-white/10"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
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

      {/* Emergency Support */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-effect rounded-3xl p-12 border border-red-500/20 bg-red-500/5">
              <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-heading text-center mb-4">
                Critical Security Issues
              </h2>
              <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
                If you believe you've found a security vulnerability in our tools or services, 
                please contact our security team immediately.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:security@hackersarsenal.com"
                  className="px-8 py-4 bg-red-500/20 border border-red-500/50 text-red-400 font-bold rounded-xl hover:bg-red-500/30 transition-all flex items-center space-x-3"
                >
                  <Zap className="w-5 h-5" />
                  <span>Report Security Issue</span>
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
