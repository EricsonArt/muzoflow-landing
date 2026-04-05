'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'MuzoFlow Start',
    price: '47',
    description: 'Solidna baza do działania',
    badge: null,
    highlighted: false,
    features: [
      'Pełny kurs video',
      'E-book "System MuzoFlow"',
      'Dostęp dożywotni do materiałów',
      'Aktualizacje kursu bez dodatkowych opłat',
    ],
    notIncluded: ['Narzędzia AI i gotowe prompty', 'Szablony hitów', 'Konsultacja 1on1'],
    cta: 'Chcę Start — zapisuję się',
    ctaStyle: 'border',
  },
  {
    name: 'MuzoFlow Pro',
    price: '97',
    description: 'Najpopularniejszy wybór wśród twórców',
    badge: 'Najpopularniejszy',
    highlighted: true,
    features: [
      'Pełny kurs video',
      'E-book "System MuzoFlow"',
      'Pakiet narzędzi AI + gotowe prompty',
      'Szablony hitów (schematy hookowe, struktury tracków)',
      'Dostęp dożywotni do materiałów',
      'Aktualizacje kursu bez dodatkowych opłat',
    ],
    notIncluded: ['Konsultacja 1on1 z Konradem'],
    cta: 'Chcę Pro — to mój wybór',
    ctaStyle: 'gradient',
  },
  {
    name: 'MuzoFlow VIP',
    price: '197',
    description: 'Wszystko + praca bezpośrednio z Konradem',
    badge: 'Limitowane miejsca',
    highlighted: false,
    features: [
      'Pełny kurs video',
      'E-book "System MuzoFlow"',
      'Pakiet narzędzi AI + gotowe prompty',
      'Szablony hitów (schematy hookowe, struktury tracków)',
      'Konsultacja 1on1 z Konradem (45 min, Zoom)',
      'Dostęp dożywotni do materiałów',
      'Aktualizacje kursu bez dodatkowych opłat',
    ],
    notIncluded: [],
    cta: 'Chcę VIP — pracuję z Konradem',
    ctaStyle: 'border',
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

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToWaitlist = (planName: string) => {
    window.dispatchEvent(new CustomEvent('muzoflow:select-plan', { detail: planName }));
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#8b5cf6] mb-4">
            Cennik
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-5 leading-tight">
            Wybierz swój plan
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto leading-relaxed">
            Zapisz się teraz, aby otrzymać cenę przedsprzedażową.
            Ceny wzrosną po oficjalnym uruchomieniu.
          </p>

          {/* Early bird banner */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-sm font-medium">
            <Zap className="w-3.5 h-3.5" />
            Ceny przedsprzedażowe — dostępne tylko przed premierą
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#18181b] border-2 border-[#8b5cf6] shadow-2xl shadow-[#8b5cf6]/20 md:-mt-4 md:-mb-4'
                  : 'bg-[#18181b] border border-[#3f3f46]/60 hover:border-[#3f3f46]'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-xs font-semibold whitespace-nowrap shadow-lg shadow-[#8b5cf6]/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Glow for highlighted */}
              {plan.highlighted && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 60%)',
                  }}
                />
              )}

              {/* Plan info */}
              <div className="relative">
                <h3 className="text-base font-bold text-[#fafafa] mb-1">{plan.name}</h3>
                <p className="text-xs text-[#a1a1aa] mb-5">{plan.description}</p>

                {/* Price */}
                <div className="flex items-end gap-1.5 mb-6">
                  <span className="text-4xl font-extrabold text-[#fafafa]">{plan.price}</span>
                  <span className="text-lg font-semibold text-[#a1a1aa] mb-1">zł</span>
                  <span className="text-xs text-[#71717a] mb-1.5">jednorazowo</span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollToWaitlist(plan.name)}
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 mb-7 ${
                    plan.ctaStyle === 'gradient'
                      ? 'bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white hover:from-[#a78bfa] hover:to-[#8b5cf6] shadow-lg shadow-[#8b5cf6]/30 hover:shadow-[#8b5cf6]/50 hover:-translate-y-0.5 active:translate-y-0'
                      : 'border border-[#3f3f46] text-[#fafafa] hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/5'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Divider */}
                <div className="h-px bg-[#3f3f46]/60 mb-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span className="text-[#a1a1aa]">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <li key={`no-${j}`} className="flex items-start gap-3 text-sm opacity-40">
                      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-3 h-px bg-[#71717a] block" />
                      </span>
                      <span className="text-[#71717a] line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="text-center text-xs text-[#71717a] mt-8"
        >
          Wszystkie ceny zawierają podatek VAT. Jednorazowa opłata — brak subskrypcji.
          14-dniowa gwarancja satysfakcji.
        </motion.p>
      </div>
    </section>
  );
}
