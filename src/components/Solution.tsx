'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Play, BookOpen, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Play,
    number: '01',
    title: 'Kurs Video',
    subtitle: 'Krok po kroku z Konradem',
    description:
      'Konkretne lekcje wideo, w których Konrad pokazuje krok po kroku jak buduje muzykę i treści pod social media. Żadnej teorii dla teorii — tylko to, co faktycznie działa na TikToku, Instagramie i YouTube Shorts.',
    features: ['Produkcja od zera', 'Mixing i mastering', 'Strategia publikowania', 'Case studies'],
    gradient: 'from-[#8b5cf6] to-[#7c3aed]',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'E-book',
    subtitle: 'Strategie i gotowe szablony',
    description:
      'Skondensowany przewodnik z frameworkami, checklistami i schematami produkcji, które możesz mieć pod ręką podczas pracy. Twój "ściągawnik" na momenty, gdy siedzisz przy DAW i nie wiesz od czego zacząć.',
    features: ['120 stron wiedzy', 'Gotowe szablony postów', 'Kalendarze treści', 'Baza hashtagów'],
    gradient: 'from-[#a78bfa] to-[#8b5cf6]',
    glow: 'rgba(167,139,250,0.2)',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Narzędzia AI',
    subtitle: 'Twórz szybciej z pomocą AI',
    description:
      'Zestaw sprawdzonych narzędzi AI, które skracają czas produkcji i pomagają generować pomysły na content bez kryzysu twórczego. Gotowe prompty, szablony i workflow — od razu wdrażalne.',
    features: ['Generator opisów AI', 'Analiza trendów', 'Pomysły na posty', 'Optymalizacja SEO'],
    gradient: 'from-[#7c3aed] to-[#6d28d9]',
    glow: 'rgba(124,58,237,0.2)',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="solution" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)',
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
            Rozwiązanie
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-5 leading-tight">
            MuzoFlow —{' '}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              Twój kompletny system
            </span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto leading-relaxed">
            Trzy wzajemnie uzupełniające się elementy, które razem tworzą jeden spójny ekosystem
            dla twórcy muzycznego.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-[68px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(90deg, transparent, #8b5cf6 20%, #a78bfa 50%, #8b5cf6 80%, transparent)',
              opacity: 0.3,
            }}
          />

          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group relative flex flex-col p-7 rounded-2xl bg-[#18181b] border border-[#3f3f46]/60 hover:border-[#8b5cf6]/30 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: `0 0 0 0 ${pillar.glow}`,
              }}
              whileHover={{
                boxShadow: `0 20px 60px -10px ${pillar.glow}`,
              }}
            >
              {/* Number */}
              <span className="text-xs font-mono text-[#8b5cf6]/50 mb-4">{pillar.number}</span>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${pillar.gradient}`}
                style={{ boxShadow: `0 8px 24px -4px ${pillar.glow}` }}
              >
                <pillar.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#fafafa] mb-1">{pillar.title}</h3>
              <p className="text-xs font-medium text-[#8b5cf6] mb-4">{pillar.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">{pillar.description}</p>

              {/* Feature list */}
              <ul className="flex flex-col gap-2 mt-auto">
                {pillar.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-[#a1a1aa]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <div className="flex -space-x-2">
            {['#8b5cf6', '#a78bfa', '#7c3aed'].map((color, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#18181b]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-sm text-[#a1a1aa]">
            Wszystkie 3 elementy{' '}
            <span className="text-[#fafafa] font-medium">dostępne w każdym planie</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
