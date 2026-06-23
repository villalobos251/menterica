import { motion } from 'motion/react';
import { Zap, Shield, Target, Unlock } from 'lucide-react';

export const Solution = () => {
  const cards = [
    {
      icon: <Target className="w-10 h-10 text-brand-gold" />,
      title: "1. Clareza de Direção",
      desc: 'Saber exatamente para onde você está indo. Aprenda a sair do piloto automático, definir um foco inegociável e parar de desperdiçar energia em caminhos sem saída.'
    },
    {
      icon: <Shield className="w-10 h-10 text-brand-gold" />,
      title: "2. Disciplina Automática",
      desc: 'Pare de depender da motivação diária. Entenda como criar consistência sem esforço, instalando rotinas que fazem você terminar o que começa de forma natural.'
    },
    {
      icon: <Unlock className="w-10 h-10 text-brand-gold" />,
      title: "3. Limpeza Mental",
      desc: 'Cancele a autossabotagem antes que ela aconteça. Desarme as crenças que te induzem a gastar o que não deve e te bloqueiam de cobrar o que você merece.'
    },
    {
      icon: <Zap className="w-10 h-10 text-brand-gold" />,
      title: "4. Construção de Legado",
      desc: 'Da estabilidade ao crescimento. Traga previsibilidade para a sua vida, pensando a longo prazo e fazendo escolhas que acumulam resultados reais ano após ano.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark-light">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold font-bold tracking-wider text-sm mb-4 uppercase">
            O MÉTODO PRÓSPERA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Um sistema simples para <span className="text-brand-gold">reconstruir sua forma de pensar e decidir</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-4xl mx-auto mb-6 text-left">
            O Método Próspera não é motivação. Não é teoria. Não é promessa de mudança rápida. É um guia prático de princípios que reorganiza sua forma de tomar decisões no dia a dia.
            <br/><br/>
            Ele funciona em 4 pilares:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-xl bg-brand-dark-light inline-block group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-brand-dark p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-bold text-white uppercase mb-6">A Sua Vida Daqui Para Frente</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Imagine acordar com total clareza do que precisa ser feito, livre do peso da confusão e da estagnação. Com o método instalado, você vai:
              </p>
              <ul className="space-y-3 text-slate-300 font-medium list-disc list-inside">
                <li>Dizer 'não' para distrações com facilidade</li>
                <li>Ter um plano concreto e pacífico de execução</li>
                <li>Acumular progresso real semana após semana</li>
                <li>Olhar no espelho e ter orgulho da direção que assumiu</li>
              </ul>
              <p className="text-slate-300 mt-6 font-semibold italic text-brand-gold">
                Você finalmente no controle do seu próprio futuro.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-brand-dark p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-bold text-white uppercase mb-6">Para quem é este guia</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">Este guia é para você se:</p>
              <ul className="space-y-4 text-slate-300 list-disc list-inside font-medium">
                <li>Sente que está preso no mesmo lugar há anos</li>
                <li>Quer mais clareza sobre sua vida</li>
                <li>Está cansado de se sabotar</li>
                <li>Quer retomar o controle das suas decisões</li>
                <li>Sente que ainda existe algo melhor para sua vida</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
