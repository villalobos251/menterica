import { motion } from 'motion/react';
import { Zap, Shield, Target, Unlock, Compass, BrainCircuit, Activity, TreePine } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const Solution = () => {
  const steps = [
    {
      icon: <Target className="w-10 h-10 text-brand-gold" />,
      title: "1. Diagnóstico de Escassez",
      desc: 'Identifique os vazamentos invisíveis de tempo, energia e dinheiro que mantêm você preso no ciclo de sobrevivência.'
    },
    {
      icon: <Unlock className="w-10 h-10 text-brand-gold" />,
      title: "2. Desinstalação de Crenças",
      desc: 'Formate o seu "software mental" antigo. Cancele as crenças limitantes que te induzem a gastar o que não deve.'
    },
    {
      icon: <Compass className="w-10 h-10 text-brand-gold" />,
      title: "3. Clareza Absoluta",
      desc: 'Saia do piloto automático. Defina um foco inegociável e descubra exatamente qual é o próximo passo para enriquecer.'
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-brand-gold" />,
      title: "4. Instalação da Mente Rica",
      desc: 'Adote os exatos mesmos modelos mentais que as mentes mais prósperas do mundo usam para tomar decisões diárias.'
    },
    {
      icon: <Activity className="w-10 h-10 text-brand-gold" />,
      title: "5. Rotina Automática",
      desc: 'Pare de depender de motivação. Instale hábitos consistentes que fazem você terminar tudo o que começa sem esforço.'
    },
    {
      icon: <Shield className="w-10 h-10 text-brand-gold" />,
      title: "6. Blindagem Emocional",
      desc: 'Como resistir à ansiedade, compras por impulso e evitar decisões financeiras baseadas no desespero ou ego.'
    },
    {
      icon: <Zap className="w-10 h-10 text-brand-gold" />,
      title: "7. Alavancagem Prática",
      desc: 'Estratégias testadas para fazer muito mais com os recursos que você já possui hoje, maximizando seu retorno.'
    },
    {
      icon: <TreePine className="w-10 h-10 text-brand-gold" />,
      title: "8. Construção de Legado",
      desc: 'Da estabilidade ao crescimento real. Como pensar no longo prazo e garantir segurança para as próximas gerações.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark-light border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold font-bold tracking-wider text-sm mb-4 uppercase">
            O MECANISMO ÚNICO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Por que algumas pessoas prosperam enquanto outras <span className="text-brand-gold">permanecem presas?</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-4xl mx-auto mb-6 text-left">
            A resposta é brutalmente simples: pessoas ricas operam com um "sistema operacional" diferente. Elas não são mais espertas que você. Elas apenas aprenderam os princípios que governam o dinheiro e o comportamento humano.<br/><br/>
            O <strong>Método PROSPERA</strong> é o mapa exato de 8 etapas para instalar esse mesmo sistema na sua mente, blindar suas emoções e construir riqueza verdadeira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-brand-dark p-6 rounded-2xl border border-white/5 hover:border-brand-gold/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-xl bg-brand-dark-light inline-block group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mb-20">
          <CTAButton href="#oferta" className="max-w-md w-full">
            QUERO ACESSAR O MÉTODO COMPLETO
          </CTAButton>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-brand-dark p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-bold text-slate-400 uppercase mb-6">O SEU ANTES (A Dor)</h3>
              <ul className="space-y-4 text-slate-300 font-medium list-disc list-inside">
                <li>Ansiedade constante para pagar as contas.</li>
                <li>Sentimento de que não importa o esforço, você não cresce.</li>
                <li>Culpa por não conseguir poupar e viver com segurança.</li>
                <li>Decisões impulsivas baseadas em estresse.</li>
                <li>O tempo passando rápido e o medo do futuro.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-brand-dark-light p-8 md:p-12 rounded-2xl border border-brand-gold/20 relative overflow-hidden flex flex-col justify-center shadow-[0_0_50px_rgba(234,179,8,0.05)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-bold text-brand-gold uppercase mb-6">O SEU DEPOIS (A Transformação)</h3>
              <ul className="space-y-4 text-white font-medium list-disc list-inside">
                <li>Paz mental com um plano financeiro previsível.</li>
                <li>Crescimento contínuo: você vê o dinheiro sobrar e multiplicar.</li>
                <li>Orgulho de saber que está garantindo o futuro da sua família.</li>
                <li>Controle absoluto sobre emoções e decisões de consumo.</li>
                <li>Sensação de vitória e direção clara de vida.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
