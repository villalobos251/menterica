import { CTAButton } from './CTAButton';
import { motion } from 'motion/react';
import { BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 px-4 sm:px-6 lg:px-8 bg-brand-dark overflow-hidden">
      {/* Background radial gradient to give a spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-dark-light/50 via-brand-dark to-brand-dark"></div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-gold font-semibold tracking-wider text-xs md:text-sm mb-6 uppercase">
            DESCUBRA O MÉTODO PROSPERA
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Por que pessoas que trabalham menos <span className="text-brand-gold">enriquecem mais</span> do que você?
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            <strong className="text-white block mb-2">MENTE RICA, VIDA RICA</strong>
            O Método PROSPERA: o sistema de reprogramação mental que ajuda pessoas comuns a desenvolver hábitos, decisões e comportamentos que constroem prosperidade real. Descubra a chave para quebrar o ciclo de sobrevivência financeira e construir um patrimônio inabalável.
          </p>
          <div className="flex flex-col items-center lg:items-start w-full gap-4">
            <CTAButton href="#oferta" className="text-sm md:text-base px-8 py-4">
              QUERO REPROGRAMAR MINHA MENTE AGORA
            </CTAButton>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-gold" /> Compra 100% Segura</span>
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-brand-gold" /> Acesso Imediato</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-5/12 relative flex justify-center perspective-1000"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[200px] md:max-w-[250px] mx-auto aspect-auto hover:-translate-y-2 transition-transform duration-700">
            <img 
              src="https://zealous-emerald-nraw84qs.edgeone.app/LIVRO%2035.png" 
              alt="Guia A Sabedoria da Abundância" 
              fetchPriority="high"
              decoding="async"
              width="250"
              height="350"
              className="w-full h-auto drop-shadow-2xl object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.15)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
