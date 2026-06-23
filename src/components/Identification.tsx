import { motion } from 'motion/react';
import { AlertCircle, Brain, BatteryWarning, AlertTriangle, Users } from 'lucide-react';

export const Identification = () => {
  const painPoints = [
    {
      icon: <BatteryWarning className="w-8 h-8 text-brand-gold" />,
      title: "“Eu trabalho muito, mas não saio do lugar.”",
      desc: 'O dinheiro entra e sai rápido. Parece que nunca sobra.'
    },
    {
      icon: <Brain className="w-8 h-8 text-brand-gold" />,
      title: "“Eu não sei exatamente o que estou fazendo com a minha vida.”",
      desc: 'Tudo parece confuso, automático, sem direção.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-brand-gold" />,
      title: "“Eu começo, mas não termino.”",
      desc: 'Projetos, promessas, mudanças… e tudo volta ao mesmo ponto.'
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "“Tenho medo de estar ficando para trás.”",
      desc: 'E de um dia olhar para trás e perceber que poderia ter sido diferente.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark-light border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-12 h-12 text-brand-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            QUANDO A VIDA <span className="text-brand-gold border-b-4 border-brand-gold">COMEÇA A PESAR</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
            Talvez você se reconheça em alguns pontos:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-brand-dark p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <p className="text-base md:text-xl text-slate-300 font-medium relative z-10 leading-relaxed text-left">
            <strong className="text-white text-2xl uppercase mb-4 block">A Grande Armadilha</strong>
            Esses ciclos repetitivos não são má sorte. Eles acontecem porque você está caindo sempre no mesmo erro central: tentar resolver a vida na intuição, deixando suas decisões serem guiadas por urgência, medo e antigos hábitos.
            <br/><br/>
            Você se esforça ao máximo, mas sem um norte. É como acelerar um carro na direção errada. Enquanto você não trocar a emoção do momento por princípios sólidos, continuará refazendo os mesmos caminhos, colhendo as mesmas frustrações.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
