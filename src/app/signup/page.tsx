'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { Github, ArrowRight, Sparkles, Shield, Terminal, Lock, Mail, Eye, EyeOff, ArrowLeft, User, Zap, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) strength++;
    return strength;
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordStrength(calculatePasswordStrength(value));
  };

  const handleGitHubSignUp = async () => {
    setIsLoading(true);
    try {
      await signIn('github', { callbackUrl: '/dashboard' });
    } catch (error) {
      setError('Failed to sign up with GitHub');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }

    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // In a real app, you would call a registration API here
      // For now, we'll redirect to sign in
      window.location.href = '/signin';
    } catch (error) {
      setError('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Zap, text: 'Access to 17+ Premium Extensions', color: 'text-cyan-400' },
    { icon: Shield, text: 'Priority Support Access', color: 'text-purple-400' },
    { icon: Terminal, text: 'Early Access to New Tools', color: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-black flex overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[100px]"
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
              Join the Elite{' '}
              <span className="text-gradient">Community</span>
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Create your account and unlock powerful tools that will transform your bug bounty workflow.
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
        {/* Right panel - Sign up form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="glass-effect rounded-3xl border border-white/10 p-8 lg:p-10 backdrop-blur-2xl relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none opacity-30" />
            
            {/* Glow effect on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[60px]" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                    Create Account
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Join thousands of elite security researchers
                </p>
              </motion.div>

              <form onSubmit={handleEmailSignUp} className="mt-8 space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block ml-1">
                      Full Name
                    </label>
                    <div className="relative group">
                      <motion.div
                        className={`absolute -inset-0.5 rounded-xl blur-sm transition-all duration-500 ${
                          errors.name ? 'bg-red-500/50 opacity-100' : 'bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                      <div className="relative flex items-center bg-black/50 border border-white/10 rounded-xl overflow-hidden transition-colors group-hover:border-white/20">
                        <User className="w-5 h-5 text-gray-500 ml-4" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border-0 px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-0"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center space-x-2 text-red-400 text-xs mt-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block ml-1">
                      Email Address
                    </label>
                    <div className="relative group">
                      <motion.div
                        className={`absolute -inset-0.5 rounded-xl blur-sm transition-all duration-500 ${
                          errors.email ? 'bg-red-500/50 opacity-100' : 'bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                      <div className="relative flex items-center bg-black/50 border border-white/10 rounded-xl overflow-hidden transition-colors group-hover:border-white/20">
                        <Mail className="w-5 h-5 text-gray-500 ml-4" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-0 px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-0"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center space-x-2 text-red-400 text-xs mt-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block ml-1">
                      Password
                    </label>
                    <div className="relative group">
                      <motion.div
                        className={`absolute -inset-0.5 rounded-xl blur-sm transition-all duration-500 ${
                          errors.password ? 'bg-red-500/50 opacity-100' : 'bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                      <div className="relative flex items-center bg-black/50 border border-white/10 rounded-xl overflow-hidden transition-colors group-hover:border-white/20">
                        <Lock className="w-5 h-5 text-gray-500 ml-4" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => handlePasswordChange(e.target.value)}
                          className="w-full bg-transparent border-0 px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-0"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="px-4 text-gray-500 hover:text-cyan-400 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {/* Password strength indicator */}
                      <div className="mt-2 space-y-1">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={i}
                              className="h-1 flex-1 rounded-full"
                              initial={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                              animate={{
                                backgroundColor:
                                  passwordStrength >= i
                                    ? passwordStrength <= 2
                                      ? 'rgba(239, 68, 68, 0.8)'
                                      : passwordStrength <= 3
                                      ? 'rgba(234, 179, 8, 0.8)'
                                      : 'rgba(34, 197, 94, 0.8)'
                                    : 'rgba(255,255,255,0.1)',
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">
                          {passwordStrength === 0 && 'Enter a password'}
                          {passwordStrength === 1 && 'Weak password'}
                          {passwordStrength === 2 && 'Fair password'}
                          {passwordStrength === 3 && 'Good password'}
                          {passwordStrength >= 4 && 'Strong password'}
                        </p>
                      </div>
                      <AnimatePresence>
                        {errors.password && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center space-x-2 text-red-400 text-xs mt-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.password}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Confirm Password field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block ml-1">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <motion.div
                        className={`absolute -inset-0.5 rounded-xl blur-sm transition-all duration-500 ${
                          errors.confirmPassword ? 'bg-red-500/50 opacity-100' : 'bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                      <div className="relative flex items-center bg-black/50 border border-white/10 rounded-xl overflow-hidden transition-colors group-hover:border-white/20">
                        <Lock className="w-5 h-5 text-gray-500 ml-4" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full bg-transparent border-0 px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-0"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="px-4 text-gray-500 hover:text-cyan-400 transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <AnimatePresence>
                        {errors.confirmPassword && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center space-x-2 text-red-400 text-xs mt-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.confirmPassword}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-start space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setAgreeTerms(!agreeTerms)}
                      className="relative mt-0.5"
                    >
                      <motion.div
                        className={`w-5 h-5 border-2 rounded-lg transition-colors ${
                          agreeTerms
                            ? 'border-cyan-500 bg-cyan-500/20'
                            : errors.terms
                            ? 'border-red-500'
                            : 'border-white/20'
                        }`}
                        whileTap={{ scale: 0.9 }}
                      >
                        <AnimatePresence>
                          {agreeTerms && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </button>
                    <label className="text-sm text-gray-400 leading-relaxed cursor-pointer">
                      I agree to the{' '}
                      <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <AnimatePresence>
                    {errors.terms && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center space-x-2 text-red-400 text-xs ml-8"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.terms}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

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

                  {/* Sign up button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-all relative overflow-hidden border-premium disabled:opacity-50 disabled:cursor-not-allowed button-glow"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          />
                          <span>Creating account...</span>
                        </>
                      ) : (
                        <>
                          <span>Create Account</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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

              {/* GitHub Sign Up */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                onClick={handleGitHubSignUp}
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

              {/* Sign in link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 text-center text-gray-400"
              >
                Already have an account?{' '}
                <Link
                  href="/signin"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center space-x-1 group"
                >
                  <span>Sign in</span>
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
