import { motion } from 'motion/react';
import { Zap, Shield, Target, Unlock } from 'lucide-react';

export const Solution = () => {
  const cards = [
    {
      icon: <Zap className="w-10 h-10 text-brand-gold" />,
      title: "A Queda dos Gigantes",
      desc: 'O passo a passo para destronar as crenças de insuficiência instaladas em sua jornada e abraçar o seu verdadeiro valor.'
    },
    {
      icon: <Shield className="w-10 h-10 text-brand-gold" />,
      title: "Guardião do Legado",
      desc: 'Como blindar seu lar e inspirar as pessoas ao seu redor quando há resistência à transformação, liderando pelo exemplo.'
    },
    {
      icon: <Target className="w-10 h-10 text-brand-gold" />,
      title: "A Fome Escondida",
      desc: 'Identifique as fraquezas interiores que sequestram suas decisões nos momentos de estresse e roubam a sua paz.'
    },
    {
      icon: <Unlock className="w-10 h-10 text-brand-gold" />,
      title: "A Coroa do Merecimento",
      desc: 'Práticas diárias de gratidão e clareza para a sua mente aceitar a prosperidade e liderar o futuro sem culpa.'
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
            A Transformação Definitiva
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            O Despertar da Mentalidade:<br />Conheça os <span className="text-brand-gold">Princípios da Abundância</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Neste guia de sabedoria imersiva, você não vai encontrar planilhas frias de gestão. Você vai encontrar os <strong className="text-white">fundamentos eternos</strong> para arrancar a raiz da mentalidade de escassez.
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
      </div>
    </section>
  );
};
