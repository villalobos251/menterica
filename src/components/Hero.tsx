import { CTAButton } from './CTAButton';
import { motion } from 'motion/react';
import { BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 px-4 sm:px-6 lg:px-8 bg-brand-dark overflow-hidden">
      {/* Background radial gradient to give a spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-dark-light/50 via-brand-dark to-brand-dark"></div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-gold font-semibold tracking-wider text-xs md:text-sm mb-6 uppercase">
            SABEDORIA PARA HOJE. PRINCÍPIOS PARA TODA A VIDA.
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Trabalhar mais não vai mudar sua vida. Aprender a <span className="text-brand-gold">decidir melhor, sim.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Existe um momento em que a realidade bate à porta: de que adianta tanto esforço se você continua no mesmo lugar? O problema não é o seu suor. É a falta de um sistema claro para tomar decisões que realmente destravem o seu progresso.
          </p>
          <div className="flex flex-col items-center lg:items-start w-full gap-4">
            <CTAButton href="#oferta">
              QUERO ACESSAR O MÉTODO PRÓSPERA
            </CTAButton>
            <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-gold" /> Compra 100% Segura</span>
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-brand-gold" /> Acesso Imediato</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 relative flex justify-center perspective-1000"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm md:max-w-md mx-auto aspect-auto hover:-translate-y-2 transition-transform duration-700">
            <img 
              src="https://private-purple-7jwtyjj1.edgeone.app/LIVRO%203D.png" 
              alt="Guia A Sabedoria da Abundância" 
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto drop-shadow-2xl object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.15)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
