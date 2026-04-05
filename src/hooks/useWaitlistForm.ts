'use client';

import { useState, useRef, useEffect } from 'react';

export function useWaitlistForm() {
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Listen for plan selection from Pricing component
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setSelectedPlan(detail);
    };
    window.addEventListener('muzoflow:select-plan', handler);
    return () => window.removeEventListener('muzoflow:select-plan', handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      inputRef.current?.focus();
      return;
    }
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, package: selectedPlan }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || 'Coś poszło nie tak. Spróbuj ponownie.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setEmail('');
      setSelectedPlan(null);
    } catch {
      setErrorMessage('Błąd sieci. Sprawdź połączenie i spróbuj ponownie.');
      setStatus('error');
    }
  };

  return { email, setEmail, selectedPlan, status, errorMessage, inputRef, handleSubmit };
}
