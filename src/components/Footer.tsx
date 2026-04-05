import { Music2 } from 'lucide-react';

const footerLinks = [
  { label: 'Regulamin', href: '#' },
  { label: 'Polityka prywatności', href: '#' },
  { label: 'Kontakt', href: 'mailto:kontakt@muzoflow.pl' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#3f3f46]/40 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="MuzoFlow">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center shadow-md shadow-[#8b5cf6]/20">
              <Music2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-base font-bold bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              MuzoFlow
            </span>
          </a>

          {/* Links */}
          <nav aria-label="Linki stopki">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-[#71717a] whitespace-nowrap">
            &copy; 2026 MuzoFlow by Konrad Strzałkowski. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
