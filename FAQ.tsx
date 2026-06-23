import { ReactNode } from 'react';

export const CTAButton = ({ children, onClick, href, className = '' }: { children: ReactNode; onClick?: () => void; href?: string; className?: string }) => {
  const baseClasses = `relative group overflow-hidden bg-brand-gold hover:bg-brand-gold-hover text-slate-900 font-bold text-center rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.7)] px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 w-full md:w-auto text-sm sm:text-base md:text-lg uppercase tracking-wide leading-snug block ${className}`;
  
  const innerContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_ease-out_infinite]" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {innerContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
};
