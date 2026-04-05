'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Users, Star, Zap } from 'lucide-react';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
};

const stats = [
  { icon: Users, value: 'Darmowy', label: 'zapis' },
  { icon: Star, value: 'Niższa cena', label: 'tylko przed premierą' },
  { icon: Zap, value: '14 dni', label: 'gwarancja satysfakcji' },
];

export default function Hero() {
  const { email, setEmail, selectedPlan, status, errorMessage, inputRef, handleSubmit } = useWaitlistForm();

  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Main orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #7c3aed 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Secondary orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          Wkrótce — dołącz już dziś
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-[#fafafa] mb-6"
        >
          Twórz muzykę,{' '}
          <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
            która podbija
          </span>{' '}
          social media
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          System, który sprawił, że przestałem tworzyć do szuflady — i zacząłem budować
          prawdziwą widownię w social media. Kurs video, e-book i narzędzia AI dla polskich
          twórców muzycznych.
        </motion.p>

        {/* Waitlist form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="max-w-md mx-auto mb-4"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/30"
            >
              <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                <span className="text-[#22c55e] text-xl">✓</span>
              </div>
              <div>
                <p className="text-[#fafafa] font-semibold">Jesteś na liście!</p>
                <p className="text-[#a1a1aa] text-sm mt-1">
                  Poinformujemy Cię jako pierwszego o starcie MuzoFlow.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="twoj@email.com"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-5 py-3.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#fafafa] placeholder-[#71717a] text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all disabled:opacity-60"
                  aria-label="Adres e-mail do waitlisty"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold text-sm hover:from-[#a78bfa] hover:to-[#8b5cf6] transition-all duration-200 shadow-lg shadow-[#8b5cf6]/30 hover:shadow-[#8b5cf6]/50 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Dołącz teraz
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Error message */}
          {status === 'error' && errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-sm text-red-400 text-center"
            >
              {errorMessage}
            </motion.p>
          )}

          {selectedPlan && (
            <p className="text-xs text-[#a78bfa] mt-3 text-center font-medium">
              Wybrany plan: {selectedPlan}
            </p>
          )}
          <p className="text-xs text-[#71717a] mt-2 text-center">
            Bez spamu. Powiadomimy Cię tylko o ważnych aktualizacjach.
          </p>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20"
      >
        <div className="grid grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-[#18181b]/80 border border-[#3f3f46]/60 backdrop-blur-sm">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-1">
              <stat.icon className="w-4 h-4 text-[#8b5cf6] mb-1" />
              <span className="text-lg sm:text-2xl font-bold text-[#fafafa]">{stat.value}</span>
              <span className="text-xs text-[#a1a1aa] leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#3f3f46] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#8b5cf6]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
