'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Kiedy dostanę dostęp?',
    answer:
      'Lista oczekujących oznacza, że jesteś pierwszy w kolejce — i dostajesz dostęp w dniu premiery kursu. Osoby z listy są informowane mailowo z co najmniej 48-godzinnym wyprzedzeniem i mają zagwarantowaną niższą cenę startową.',
  },
  {
    question: 'Czy muszę mieć doświadczenie w tworzeniu muzyki?',
    answer:
      'Nie musisz być producentem z dziesięcioletnim stażem — ale kurs zakłada, że już coś tworzysz lub nagrywasz i chcesz, żeby to trafiało do ludzi. Jeśli dopiero zaczynasz od zera ze sprzętem i DAW, polecam najpierw zdobyć podstawy produkcji, a potem wrócić do MuzoFlow.',
  },
  {
    question: 'Co jeśli mi się nie spodoba?',
    answer:
      'Daję 14-dniową gwarancję satysfakcji. Jeśli po przejściu kursu uznasz, że to nie dla Ciebie — napisz na maila i zwracam kasę bez zbędnych pytań. Nie chcę Twojej kasy za coś, co Ci nie pomogło.',
  },
  {
    question: 'Jak działają narzędzia AI?',
    answer:
      'To gotowy zestaw narzędzi (głównie bazujących na ChatGPT i kilku innych platformach), wraz z moimi sprawdzonymi promptami i schematami użycia. Nie potrzebujesz wiedzy technicznej — pokazuję dokładnie jak ich używam do generowania pomysłów, opisów i struktury contentu. Dostęp masz od razu po zakupie pakietu Pro lub VIP.',
  },
  {
    question: 'Czy to zadziała dla mojego gatunku muzyki?',
    answer:
      'Tak — system jest gatunkowo agnostyczny. Analizowałem hity z hip-hopu, elektroniki, popu, lo-fi i rocka i zasady budowania uwagi w social media są uniwersalne. Oczywiście każdy gatunek ma swoją specyfikę — w kursie omawiam jak adaptować framework do różnych brzmień.',
  },
  {
    question: 'Ile czasu potrzebuję na kurs?',
    answer:
      'Kurs jest zaprojektowany tak, żebyś mógł go przejść w jeden intensywny weekend albo rozłożyć na 2-3 tygodnie po godzinie dziennie. Lekcje są krótkie i konkretne — bez 40-minutowych wstępów i dygresji. Dostęp masz na zawsze, więc możesz wracać kiedy chcesz.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="border border-[#3f3f46]/60 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#18181b] hover:bg-[#27272a]/60 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-[#a78bfa]' : 'text-[#fafafa] group-hover:text-[#a78bfa]'
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
            isOpen
              ? 'bg-[#8b5cf6]/20 text-[#a78bfa]'
              : 'bg-[#27272a] text-[#a1a1aa] group-hover:bg-[#8b5cf6]/10 group-hover:text-[#a78bfa]'
          }`}
        >
          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 bg-[#18181b] border-t border-[#3f3f46]/40">
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
          ref={ref}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#8b5cf6] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-5 leading-tight">
            Masz pytania?
          </h2>
          <p className="text-[#a1a1aa] text-lg leading-relaxed">
            Zebraliśmy najczęstsze pytania od osób zainteresowanych MuzoFlow.
            Nie znalazłeś odpowiedzi? Napisz do nas.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[#a1a1aa] text-sm">
            Masz inne pytanie?{' '}
            <a
              href="mailto:kontakt@muzoflow.pl"
              className="text-[#a78bfa] hover:text-[#8b5cf6] transition-colors font-medium underline underline-offset-2"
            >
              Napisz do nas
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
