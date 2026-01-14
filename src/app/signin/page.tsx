'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { Github, ArrowRight, Sparkles, Shield, Terminal, Lock, Mail, Eye, EyeOff, ArrowLeft, Zap, CheckCircle2, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGitHubSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('github', { callbackUrl: '/dashboard' });
    } catch (error) {
      setError('Failed to sign in with GitHub');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: '/dashboard',
      });
      if (result?.error) {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Zap, text: '17+ Premium Extensions', color: 'text-cyan-400' },
    { icon: Shield, text: 'Enterprise-Grade Security', color: 'text-purple-400' },
    { icon: Terminal, text: 'Advanced Recon Tools', color: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-black flex overflow-hidden relative">
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

      {/* Back to home button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center space-x-2 px-4 py-2 glass-effect border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 transition-all hover:scale-105 hover-lift"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div className="flex-1 lg:flex-none lg:w-1/2 relative z-10 flex items-center justify-center p-8 lg:p-16">
        {/* Left panel - Visual elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10"
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <span className="text-xl font-bold text-gradient font-heading tracking-tight">
                Hacker's Arsenal
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-heading tracking-tight">
              Elite Tools for{' '}
              <span className="text-gradient">Elite Hunters</span>
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Join thousands of security researchers dominating bug bounty programs with our premium extension arsenal.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-3 glass-effect p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover-lift"
                >
                  <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg">
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit.text}</span>
                  <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="text-center glass-effect p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-gradient font-mono">17+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Extensions</div>
            </div>
            <div className="text-center glass-effect p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-gradient font-mono">75K+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Researchers</div>
            </div>
            <div className="text-center glass-effect p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-gradient font-mono">$5M+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Bounties</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider line */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:block w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
      />

      <div className="flex-1 lg:flex-none lg:w-1/2 relative z-10 flex items-center justify-center p-8 lg:p-16">
        {/* Right panel - Sign in form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="glass-effect rounded-3xl border border-white/10 p-8 lg:p-10 backdrop-blur-2xl relative overflow-hidden shadow-2xl shadow-black/50">
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none opacity-20" />

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
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Lock className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                    Welcome Back
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Sign in to access your elite arsenal
                </p>
              </motion.div>

              <form onSubmit={handleEmailSignIn} className="mt-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-5"
                >
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block ml-1 flex items-center gap-2">
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
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block ml-1 flex items-center gap-2">
                      Password
                    </label>
                    <div className="relative group">
                      <motion.div
                        className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm"
                      />
                      <div className="relative flex items-center bg-black/60 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-focus-within:border-cyan-500/50">
                        <motion.div
                          animate={{
                            color: password ? '#22d3ee' : '#6b7280'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Lock className="w-5 h-5 ml-4" />
                        </motion.div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-transparent border-0 px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-0 transition-all duration-300"
                          placeholder="••••••••"
                          required
                          autoComplete="current-password"
                        />
                        <motion.button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="px-4 text-gray-500 hover:text-cyan-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Remember me & Forgot password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                        />
                        <motion.div
                          className="w-5 h-5 bg-black/60 border-2 border-white/20 rounded-lg transition-all duration-300 peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10"
                          whileTap={{ scale: 0.95 }}
                        />
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 0, opacity: 0 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute inset-0 flex items-center justify-center peer-checked:animate-in peer-checked:fade-in peer-checked:zoom-in"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        </motion.div>
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium hover:underline underline-offset-4 decoration-cyan-400/50"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Sign in button */}
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
                          <span>Authenticating...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In</span>
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
                </motion.div>
              </form>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="my-8 flex items-center"
              >
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="px-4 text-sm text-gray-500 font-medium">OR CONTINUE WITH</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>

              {/* GitHub Sign In */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                onClick={handleGitHubSignIn}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 glass-effect border-2 border-white/10 hover:border-cyan-500/50 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed hover-lift group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </motion.button>

              {/* Sign up link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 text-center text-gray-400"
              >
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center space-x-1 group"
                >
                  <span>Create account</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.p>
            </div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex items-center justify-center space-x-6 text-gray-500 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Secure</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Private</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>Professional</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
