import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { Countdown } from './Countdown';

export const Offer = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background glow for the offer section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
            A DECISÃO É <span className="text-brand-gold">SIMPLES</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300">
            Você pode continuar exatamente como está.<br/>
            Ou pode começar a mudar a forma como toma decisões a partir de hoje.<br/>
            Não existe transformação sem uma primeira decisão.
          </p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-1 shadow-2xl relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center -rotate-12 shadow-lg animate-pulse">
            <span className="text-slate-900 font-extrabold text-sm md:text-base text-center leading-tight uppercase">Oferta<br/>Única!</span>
          </div>

          <div className="bg-brand-dark-light rounded-[22px] p-6 sm:p-8 md:p-12 border border-white/5 relative overflow-hidden">
            {/* Top Security Banner */}
            <div className="flex items-center justify-center gap-2 mb-8 text-slate-400 text-sm font-medium uppercase tracking-wider">
              <Lock className="w-4 h-4" /> Pagamento 100% Seguro e Encriptado
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - What you get */}
              <div className="flex flex-col gap-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                  <img 
                    src="https://private-purple-7jwtyjj1.edgeone.app/fA%C3%87A_AGORA_NA_VERS%C3%83O_16.9_202606221649.jpeg" 
                    alt="Guia A Sabedoria da Abundância" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 mt-4">Guia <span className="text-brand-gold">A Sabedoria da Abundância</span></h3>
                  <p className="text-slate-400 mb-6 text-sm">Baseado no Método Próspera</p>
                  <ul className="space-y-4 mb-8">
                  {[
                    "Princípios de decisão e mentalidade",
                    "Exercícios de reflexão prática",
                    "Direção para reconstrução de hábitos",
                    "Aplicação dos 4 pilares do Método Próspera"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

              {/* Right Column - Price & CTA */}
              <div className="flex flex-col items-center sm:items-end text-center sm:text-right border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12">
                <Countdown className="mb-6 w-full" />
                <p className="text-slate-400 font-medium mb-2 uppercase text-sm">Valor Normal: <span className="line-through">R$ 97,00</span></p>
                <p className="text-slate-300 mb-1 text-lg">Leve hoje por</p>
                <div className="flex flex-row items-baseline justify-center sm:justify-end gap-2 mb-2 whitespace-nowrap">
                  <span className="text-xl md:text-2xl font-bold text-white">APENAS</span>
                  <span className="text-4xl md:text-6xl font-black text-brand-gold leading-none">R$ 17,90</span>
                </div>
                <p className="text-slate-300 mb-8 text-sm font-medium">(Ou 12x de R$ 1,79)</p>
                
                <CTAButton href="https://cupondesconto.com.br/d0ib" className="w-full text-sm md:text-lg">
                  QUERO ASSUMIR O COMANDO DO MEU FUTURO AGORA
                </CTAButton>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="mt-12 bg-slate-900/50 rounded-xl p-6 border border-white/5 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 shrink-0 bg-brand-dark rounded-full flex items-center justify-center border border-white/10">
                <ShieldCheck className="w-8 h-8 text-brand-gold" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-white mb-2 uppercase">Garantia</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Você pode acessar o conteúdo com segurança. Se não fizer sentido para você, existe uma garantia de 7 dias. Sem complicação.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-white mb-4 uppercase">Para Fim de Conversa</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed italic">
                  "Talvez o problema nunca tenha sido falta de esforço. Talvez você só nunca tenha tido um sistema claro para guiar suas decisões. E se isso for verdade… Então ainda existe caminho."
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
