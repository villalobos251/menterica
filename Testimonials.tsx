import { motion } from 'motion/react';
import { Tablet, Smartphone, Headphones, BookOpen, CheckCircle2, Lock } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const Bonus = () => {
  const bonuses = [
    {
      icon: <Tablet className="w-16 h-16 text-slate-300 stroke-1" />,
      image: "https://private-purple-7jwtyjj1.edgeone.app/BONUS%201.jpeg",
      title: "BÔNUS 1 — Construção de Riqueza a Dois",
      desc: "Como o ambiente familiar influencia diretamente suas decisões e resultados.",
      oldPrice: "97,00"
    },
    {
      icon: <Smartphone className="w-16 h-16 text-slate-300 stroke-1" />,
      image: "https://private-purple-7jwtyjj1.edgeone.app/BONUS%202.jpeg",
      title: "BÔNUS 2 — Código da Primeira Hora",
      desc: "Como estruturar suas manhãs para aumentar clareza e disciplina.",
      oldPrice: "67,00"
    },
    {
      icon: <Headphones className="w-16 h-16 text-slate-300 stroke-1" />,
      image: "https://private-purple-7jwtyjj1.edgeone.app/BONUS%203.jpeg",
      title: "BÔNUS 3 — Clareza Interior",
      desc: "Ferramentas para reduzir ansiedade e ruído mental.",
      oldPrice: "47,00"
    },
    {
      icon: <BookOpen className="w-16 h-16 text-slate-300 stroke-1" />,
      image: "https://private-purple-7jwtyjj1.edgeone.app/BONUS%204.jpeg",
      title: "BÔNUS 4 — Matemática da Multiplicação",
      desc: "Como identificar e desenvolver habilidades esquecidas.",
      oldPrice: "67,00"
    }
  ];

  const stackItems = [
    { name: "Guia A Sabedoria da Abundância", price: "R$ 197,00" },
    { name: "Bônus 1: Construção de Riqueza a Dois", price: "R$ 97,00" },
    { name: "Bônus 2: Código da Primeira Hora", price: "R$ 67,00" },
    { name: "Bônus 3: Clareza Interior", price: "R$ 47,00" },
    { name: "Bônus 4: Matemática da Multiplicação", price: "R$ 67,00" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-black relative border-y border-white/5 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Para garantir que você <span className="text-brand-gold">não desista</span>. <br className="hidden md:block" />
            As ferramentas de apoio fundamentais.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Construir prosperidade sozinho pode ser exaustivo. Por isso, juntei <strong className="text-white">4 materiais de aprofundamento prático</strong> ao Método Próspera. Eles não são simples bônus; são ferramentas essenciais para garantir que sua jornada de disciplina e abundância não pare na primeira dificuldade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {bonuses.map((bonus, index) => (
            <motion.div 
              key={index}
              className="bg-brand-dark-light/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-6 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="shrink-0 flex justify-center items-start w-full md:w-auto mb-4 md:mb-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                   {bonus.image ? (
                     <img src={bonus.image} alt={bonus.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                   ) : (
                     <>
                       {/* Gloss reflection */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none"></div>
                       {bonus.icon}
                     </>
                   )}
                </div>
              </div>
              
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight tracking-wide">{bonus.title}</h3>
                <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed flex-grow">{bonus.desc}</p>
                <div className="bg-black/40 rounded-lg p-4 border border-white/5 inline-block w-full sm:w-auto self-start mt-auto">
                  <span className="text-slate-500 font-medium text-sm line-through block mb-1">
                    Valor Real: R$ {bonus.oldPrice}
                  </span>
                  <span className="text-emerald-400 font-bold text-lg uppercase tracking-wider block">
                    HOJE: R$ 0,00
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack Offer - Ticket Visual */}
        <motion.div 
          id="oferta"
          className="max-w-3xl mx-auto scroll-mt-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-b from-brand-gold to-yellow-600 rounded-3xl p-[2px] shadow-[0_0_50px_rgba(234,179,8,0.2)]">
            <div className="bg-brand-dark rounded-[22px] overflow-hidden relative border border-black">
              {/* Ticket jagged edge effect simulation via radial gradients at sides could be complex, keeping it sleek premium card */}
              <div className="absolute top-0 opacity-20 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
              
              <div className="bg-brand-dark-light/80 p-6 border-b border-white/5 text-center relative z-10">
                <Lock className="w-6 h-6 text-emerald-400 mx-auto mb-2 opacity-80" />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">Resumo do Seu Arsenal</h3>
              </div>
              
              <div className="p-6 md:p-10 relative z-10">
                <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://private-purple-7jwtyjj1.edgeone.app/fA%C3%87A_AGORA_NA_VERS%C3%83O_16.9_202606221649.jpeg" 
                    alt="Resumo do Arsenal" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <ul className="space-y-4 mb-8 border-b border-white/10 pb-8">
                  {stackItems.map((item, i) => (
                     <li key={i} className="flex items-center justify-between gap-4">
                       <div className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                         <span className="text-slate-200 font-medium text-sm md:text-base">{item.name}</span>
                       </div>
                       <span className="text-slate-400 font-mono text-sm">{item.price}</span>
                     </li>
                  ))}
                </ul>

                <div className="flex flex-col items-center justify-center text-center mb-8">
                  <p className="text-slate-500 font-medium mb-1 uppercase tracking-widest text-sm">Total Real:</p>
                  <p className="text-3xl text-red-500/80 font-mono line-through decoration-red-500/50 mb-6">R$ 475,00</p>
                  
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 md:px-8 py-4 rounded-2xl w-full max-w-sm mb-8 animate-pulse shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-1">Oferta de Hoje:</p>
                    <div className="flex flex-row items-baseline justify-center gap-2 mb-2 whitespace-nowrap">
                      <span className="text-xl md:text-2xl font-bold text-white">APENAS</span>
                      <span className="text-4xl md:text-5xl font-black text-brand-gold leading-none">R$ 17,90</span>
                    </div>
                    <p className="text-slate-300 text-sm font-medium">(Ou 12x de R$ 1,79)</p>
                  </div>

                  <CTAButton href="https://cupondesconto.com.br/d0ib" className="w-full text-sm md:text-lg animate-bounce">
                    QUERO ASSUMIR O COMANDO DO MEU FUTURO AGORA
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
