import { motion } from 'motion/react';
import { AlertCircle, Brain, BatteryWarning, AlertTriangle, Users } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const Identification = () => {
  const painPoints = [
    {
      icon: <BatteryWarning className="w-8 h-8 text-brand-gold" />,
      title: "Ansiedade Constante com o Futuro",
      desc: 'Você trabalha, recebe, paga as contas, e o dinheiro some. A sensação é de correr em uma esteira sem nunca sair do lugar.'
    },
    {
      icon: <Brain className="w-8 h-8 text-brand-gold" />,
      title: "O Peso da Falta de Educação Financeira",
      desc: 'Ninguém nos ensinou a lidar com o dinheiro. Você tenta investir ou poupar, mas acaba cedendo a compras por impulso e sabotando seus próprios planos.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-brand-gold" />,
      title: "Sensação de Estar Preso na Própria Vida",
      desc: 'O tempo está passando. O pavor silencioso de envelhecer e não ter construído nada sólido para proteger você e sua família.'
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "A Frustração de Não Prover o Melhor",
      desc: 'O desejo ardente de segurança e liberdade, e a dor de não conseguir dar a vida que a sua família realmente merece porque você continua errando nas mesmas coisas.'
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
            VOCÊ ESTÁ PRESO EM UMA <span className="text-brand-gold border-b-4 border-brand-gold">PRISÃO INVISÍVEL?</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
            Vamos ser honestos por um momento. Se você olhar no fundo dos seus olhos no espelho hoje, você vai reconhecer a dor de viver com...
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
          <p className="text-base md:text-xl text-slate-300 font-medium relative z-10 leading-relaxed text-left mb-8">
            <strong className="text-white text-2xl uppercase mb-4 block">A Verdade Que Ninguém Te Conta</strong>
            A grande mídia e os gurus financeiros tentam te convencer de que você só precisa "cortar o cafezinho" ou investir em ações complexas. Isso é uma mentira.<br/><br/>
            O verdadeiro problema não é a economia, e muitas vezes não é o quanto você ganha. O seu verdadeiro inimigo é o seu "termostato financeiro" interno — uma programação mental silenciosa que faz você se sabotar, gastar o que não tem e perder o rumo sempre que parece que as coisas vão dar certo.
          </p>
          <div className="relative z-10">
            <CTAButton href="#oferta" className="max-w-md w-full">
              QUERO MUDAR MINHA PROGRAMAÇÃO MENTAL
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
