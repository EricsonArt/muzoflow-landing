'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, Tv2, Users } from 'lucide-react';

const achievements = [
  { icon: Music, value: '100%', label: 'pasji w każdej lekcji' },
  { icon: Tv2, value: '24/7', label: 'dostęp do materiałów' },
  { icon: Users, value: '1on1', label: 'konsultacje w planie VIP' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #8b5cf6, #a78bfa, #7c3aed, #8b5cf6)',
                  padding: '2px',
                  borderRadius: '50%',
                }}
                aria-hidden="true"
              />

              {/* Avatar circle */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#27272a] to-[#18181b] border border-[#3f3f46] overflow-hidden shadow-2xl shadow-[#8b5cf6]/15">
                {/* Profile image */}
                <img
                  src="/konrad-profile.jpg"
                  alt="Konrad Strzałkowski"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl bg-[#18181b] border border-[#8b5cf6]/30 shadow-lg shadow-black/30 whitespace-nowrap"
              >
                <span className="text-sm font-bold text-[#fafafa]">Konrad Strzałkowski</span>
                <span className="text-xs text-[#a1a1aa] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  Twórca kursu
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#8b5cf6] mb-4">
              O autorze
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-2 leading-tight">
              Konrad Strzałkowski
            </h2>
            <p className="text-[#8b5cf6] font-medium mb-6 text-sm">
              Twórca muzyczny i contentu
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <p className="text-[#a1a1aa] leading-relaxed">
                Cześć, jestem Konrad — twórca muzyczny, który kilka miesięcy temu sam siedział
                i zastanawiał się, czemu jego muzyka dociera do dwudziestu osób.
              </p>
              <p className="text-[#a1a1aa] leading-relaxed">
                Nie jestem guru z milionami obserwujących. Jestem kimś, kto wkurzył się na brak
                wyników i zaczął systematycznie analizować to, co działa — zamiast działać na wyczucie.
              </p>
              <p className="text-[#a1a1aa] leading-relaxed">
                MuzoFlow to system, który sam buduję i testuję na własnym profilu — zebrałem go
                w kurs, bo wiem, że takich konkretów brakowało mi na początku. Jeśli jesteś tam,
                gdzie ja byłem — ten kurs jest właśnie dla Ciebie.
              </p>
            </div>

            {/* Quote */}
            <div className="p-5 rounded-xl border-l-2 border-[#8b5cf6] bg-[#8b5cf6]/5 mb-6">
              <p className="text-[#fafafa] font-medium italic leading-relaxed text-sm">
                &ldquo;Muzyka bez widoczności to jak świetna książka zamknięta w szufladzie.
                MuzoFlow to klucz, żeby ją otworzyć.&rdquo;
              </p>
            </div>

            {/* Social link */}
            <p className="text-sm text-[#a1a1aa] mb-8">
              Śledź moją drogę na Instagramie:{' '}
              <a
                href="https://instagram.com/konrad.strzalkowski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a78bfa] hover:text-[#8b5cf6] font-medium transition-colors"
              >
                @konrad.strzalkowski
              </a>
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center text-center gap-1 p-4 rounded-xl bg-[#18181b] border border-[#3f3f46]/60"
                >
                  <item.icon className="w-4 h-4 text-[#8b5cf6] mb-1" />
                  <span className="text-lg font-bold text-[#fafafa]">{item.value}</span>
                  <span className="text-xs text-[#a1a1aa] leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
