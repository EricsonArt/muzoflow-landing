'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';

export default function FinalCTA() {
  const { email, setEmail, status, errorMessage, inputRef, handleSubmit } = useWaitlistForm();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 40%, #a78bfa 70%, #7c3aed 100%)',
          opacity: 0.12,
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #8b5cf6, #a78bfa, #8b5cf6, transparent)',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a78bfa] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            Zapisz się przed premierą
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#fafafa] leading-[1.1] tracking-tight mb-6">
            Gotowy na{' '}
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
              pierwszy krok?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#a1a1aa] text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Zapisz się już teraz — to nic nie kosztuje, a gwarantujesz sobie
            najniższą cenę w dniu premiery i pierwszeństwo dostępu.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/30 max-w-sm mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                <span className="text-[#22c55e] text-2xl">✓</span>
              </div>
              <div>
                <p className="text-[#fafafa] font-bold text-lg">Witaj na pokładzie!</p>
                <p className="text-[#a1a1aa] text-sm mt-1">
                  Dostaniesz wiadomość, gdy MuzoFlow ruszy. Trzymaj się blisko.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="twoj@email.com"
                required
                disabled={status === 'loading'}
                className="flex-1 px-5 py-4 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#fafafa] placeholder-[#71717a] text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all disabled:opacity-60"
                aria-label="Adres e-mail"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-bold text-sm hover:from-[#a78bfa] hover:to-[#8b5cf6] transition-all duration-200 shadow-xl shadow-[#8b5cf6]/40 hover:shadow-[#8b5cf6]/60 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Zapisuję się — chcę być pierwszy
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Error */}
          {status === 'error' && errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-sm text-red-400 text-center"
            >
              {errorMessage}
            </motion.p>
          )}

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-[#71717a]">
              <Shield className="w-3.5 h-3.5 text-[#22c55e]" />
              14-dniowa gwarancja zwrotu
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#71717a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71717a]" />
              Brak spamu
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#71717a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71717a]" />
              Wypisz się w każdej chwili
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
