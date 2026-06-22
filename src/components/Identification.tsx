import { motion } from 'motion/react';
import { AlertCircle, Brain, BatteryWarning, AlertTriangle, Users } from 'lucide-react';

export const Identification = () => {
  const painPoints = [
    {
      icon: <BatteryWarning className="w-8 h-8 text-brand-gold" />,
      title: "A Fortaleza Quebrada",
      desc: '"Toda vez que o cenário começa a prosperar, um imprevisto inexplicável drena recursos. Parece que não tenho o direito de acumular."'
    },
    {
      icon: <Brain className="w-8 h-8 text-brand-gold" />,
      title: "O Deserto Infindável",
      desc: '"Eu percebo pessoas com menos capacidade conquistando reinos, enquanto meus medos internos paralisam minhas decisões."'
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "O Peso da Origem",
      desc: '"No fundo, existe uma lealdade invisível à escassez da minha família. Prosperar parece uma traição às minhas raízes."'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-brand-gold" />,
      title: "A Semente da Ilusão",
      desc: '"A pressa por resolver o futuro me faz tomar decisões desesperadas. Acabo sabotando as sementes que poderiam crescer com sabedoria."'
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
            A exaustão de carregar as <span className="text-brand-gold border-b-4 border-brand-gold">heranças invisíveis</span> da escassez.
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A verdadeira barreira para o seu legado não está lá fora, mas nas fundações da sua mentalidade. Reconhece alguns destes padrões?
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
              <p className="text-slate-400 leading-relaxed italic">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-brand-dark p-8 rounded-2xl border-l-4 border-brand-gold relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <p className="text-lg md:text-xl text-slate-300 font-medium relative z-10">
            Se você se identificou com essas barreiras, <span className="text-white font-bold">o peso não começou com você</span>. Mas a responsabilidade de quebrar esse ciclo e plantar uma nova história é <span className="text-brand-gold font-bold">inteiramente sua</span>. E a sabedoria tem o caminho.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
