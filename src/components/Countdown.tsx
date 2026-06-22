import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  initialMinutes?: number;
  className?: string;
  isBanner?: boolean;
}

export const Countdown = ({ initialMinutes = 15, className = "", isBanner = false }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    // Optionally use localStorage to persist the timer per session
    const savedTime = localStorage.getItem('countdownTime');
    if (savedTime && parseInt(savedTime) > 0) {
      setTimeLeft(parseInt(savedTime));
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev > 0 ? prev - 1 : 0;
        localStorage.setItem('countdownTime', newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return {
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0')
    };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  if (isBanner) {
    return (
      <div className={`bg-brand-gold text-slate-900 py-2 sm:py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full z-50 text-sm sm:text-base font-bold ${className}`}>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="uppercase tracking-wider text-center">Atenção: A condição especial se encerra em:</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 text-brand-gold px-3 py-1 rounded-md shadow-inner">
          <span className="font-mono text-lg">{minutes}</span>
          <span className="animate-pulse">:</span>
          <span className="font-mono text-lg">{seconds}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center p-4 bg-slate-900/50 border border-brand-gold/30 rounded-xl backdrop-blur-sm ${className}`}>
      <div className="flex items-center gap-2 text-brand-gold mb-2">
        <Clock className="w-5 h-5" />
        <span className="font-semibold uppercase tracking-wider text-sm">Oferta expira em:</span>
      </div>
      <div className="flex items-center gap-2 text-3xl md:text-4xl font-black text-white font-mono">
        <div className="bg-slate-950 px-4 py-2 rounded-lg shadow-inner border border-white/5">
          {minutes}
        </div>
        <span className="text-brand-gold animate-pulse">:</span>
        <div className="bg-slate-950 px-4 py-2 rounded-lg shadow-inner border border-white/5">
          {seconds}
        </div>
      </div>
    </div>
  );
};
