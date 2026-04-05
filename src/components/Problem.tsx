'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { EarOff, TrendingDown, Clock } from 'lucide-react';

const problems = [
  {
    icon: EarOff,
    title: 'Algorytm cię ignoruje',
    description:
      'Wrzucasz nowy utwór, zerkasz co godzinę na statystyki i... nic. Twoja muzyka ginie wśród milionów postów, zanim ktokolwiek zdąży kliknąć play.',
    color: '#f87171',
  },
  {
    icon: TrendingDown,
    title: 'Nie wiesz co robisz źle',
    description:
      'Słyszysz innych twórców mówiących o "engagemencie" i "hookach", ale nikt nie pokazuje konkretnie: co zmienić, żeby ludzie zatrzymali się na Twoim materiale. Próbujesz na ślepo i wracasz do punktu zero.',
    color: '#fb923c',
  },
  {
    icon: Clock,
    title: 'Masz talent, ale brakuje Ci systemu',
    description:
      'Grasz, produkujesz, nagrywasz — i wiesz, że to co robisz ma wartość. Ale bez strategii nawet najlepsza muzyka nie przebije się przez szum social mediów. Czujesz, że Twój wysiłek się marnuje.',
    color: '#fbbf24',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="problem" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#8b5cf6] mb-4">
            Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-5 leading-tight">
            Tworzysz. Publikujesz. Cisza.
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto leading-relaxed">
            Większość twórców muzycznych utknęła w tym samym miejscu. Nie dlatego, że są
            nietalentowani — ale dlatego, że brakuje im systemu.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group relative flex flex-col gap-4 p-7 rounded-2xl bg-[#18181b] border border-[#3f3f46]/60 hover:border-[#3f3f46] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Subtle gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${problem.color}08 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${problem.color}15` }}
              >
                <problem.icon className="w-5 h-5" style={{ color: problem.color }} />
              </div>

              {/* Content */}
              <div className="relative flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#fafafa] leading-snug">
                  {problem.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="text-center text-[#a1a1aa] mt-12 text-base max-w-xl mx-auto"
        >
          Właśnie dlatego powstało MuzoFlow.{' '}
          <span className="text-[#a78bfa] font-medium">
            System, który zamienia frustrację w konkretne wyniki.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
