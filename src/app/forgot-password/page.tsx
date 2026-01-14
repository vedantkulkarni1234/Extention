'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      setError('Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle mesh grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        {/* Primary gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 120, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-cyan-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.35, 0.2, 0.35],
            rotate: [120, 0, 120],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-purple-500/20 rounded-full blur-[120px]"
        />

        {/* Secondary accent glow */}
        <motion.div
          animate={{
            x: ['-10%', '110%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rounded-full blur-[150px]"
        />

        {/* Floating particles with enhanced variety */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-cyan-400/30' : i % 3 === 1 ? 'bg-purple-400/30' : 'bg-white/20'
            }`}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0.15, 0.7, 0.15],
              scale: [1, Math.random() * 1.5 + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Back to sign-in button */}
      <Link
        href="/signin"
        className="absolute top-6 left-6 flex items-center space-x-2 px-4 py-2 glass-effect border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 transition-all hover:scale-105 hover-lift"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-effect rounded-3xl border border-white/10 p-8 lg:p-10 backdrop-blur-2xl relative overflow-hidden shadow-2xl shadow-black/50">
          {/* Enhanced glow effects */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[80px]"
          />

          {/* Subtle border gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 mb-6 mx-auto">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white font-heading tracking-tight text-center mb-2">
                Reset Password
              </h2>
              <p className="text-gray-400 text-center text-sm">
                Enter your email to receive a reset link
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-8 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check Your Email</h3>
                <p className="text-gray-400 text-sm mb-6">
                  We've sent a password reset link to your email address. Please check your inbox.
                </p>
                <Link
                  href="/signin"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                >
                  <span>Back to sign in</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label className="text-sm font-medium text-gray-300 block ml-1 mb-2">
                      Email Address
                    </label>
                    <div className="relative group">
                      <motion.div
                        className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm"
                      />
                      <div className="relative flex items-center bg-black/60 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-focus-within:border-cyan-500/50">
                        <motion.div
                          animate={{
                            color: email ? '#22d3ee' : '#6b7280'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Mail className="w-5 h-5 ml-4" />
                        </motion.div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-0 px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-0 transition-all duration-300"
                          placeholder="you@example.com"
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] text-black font-bold rounded-xl hover:bg-[position:100%_0] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all duration-500 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Reset Link</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 translate-x-[-100%]"
                      whileHover={{ translateX: ['0%', '200%'] }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </motion.button>
                </form>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-8 text-center text-gray-400"
                >
                  Remember your password?{' '}
                  <Link
                    href="/signin"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors hover:underline underline-offset-4 decoration-cyan-400/50"
                  >
                    Sign in
                  </Link>
                </motion.p>
              </>
            )}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 flex items-center justify-center space-x-6 text-gray-500 text-sm"
        >
          <div className="flex items-center space-x-2">
            <span>Secure</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <div className="flex items-center space-x-2">
            <span>Private</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <div className="flex items-center space-x-2">
            <span>Professional</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
