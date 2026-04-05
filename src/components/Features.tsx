'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Zbudujesz hook w pierwszych 3 sekundach',
    description:
      'Nauczysz się zatrzymywać przewijanie — niezależnie od gatunku muzycznego.',
  },
  {
    title: 'Stworzysz spójną strategię publikacji',
    description:
      'Strategia, która sprawia, że algorytm zaczyna Cię polecać zamiast ignorować.',
  },
  {
    title: 'Nauczysz się analizować popularne utwory',
    description:
      'Wyciągaj wzorce z hitów i adaptuj je do swojego stylu — zamiast kopiować na ślepo.',
  },
  {
    title: 'Przygotujesz profesjonalne reelsy i snippety',
    description:
      'Bez drogiego sprzętu ani agencji graficznej — z narzędziami, które już masz.',
  },
  {
    title: 'Opanujesz szybki workflow produkcji treści',
    description:
      'Proces, który zajmuje godziny, nie całe tygodnie. Więcej tworzenia, mniej chaosu.',
  },
  {
    title: 'Opisy, hashtagi i CTA, które działają',
    description:
      'Zrozumiesz, jak pisać tak, żeby generować obserwujących — nie tylko lajki.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#8b5cf6] mb-4">
              Czego się nauczysz
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] leading-tight mb-6">
              Konkretne umiejętności,{' '}
              <span className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
                mierzalne efekty
              </span>
            </h2>
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
              MuzoFlow to nie teoria. To praktyczny system, który daje Ci narzędzia do
              prawdziwego działania — od pierwszego dnia.
            </p>

            {/* Content preview */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-[#18181b] border border-[#3f3f46]/60">
              <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/15 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <div>
                <p className="text-[#fafafa] font-semibold mb-1">
                  Konkretne lekcje, nie motywacyjny bełkot
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  Każda lekcja kończy się zadaniem do wykonania. Wychodzisz z kursem i gotowym
                  materiałem do publikacji — nie z notatkami, które nigdy nie ujrzą światła dziennego.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: feature grid */}
          <div ref={ref}>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="group flex flex-col gap-2 p-5 rounded-xl bg-[#18181b] border border-[#3f3f46]/60 hover:border-[#8b5cf6]/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-[#fafafa] leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed pl-6">
                    {feature.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
