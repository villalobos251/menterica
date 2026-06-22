import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const QAItem = ({ q, a }: { q: string; a: string; key?: number | string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-brand-dark overflow-hidden transition-colors hover:border-white/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-white font-semibold text-lg">{q}</span>
        <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      q: "Como recebo o guia?",
      a: "Assim que sua inscrição for aprovada (imediato no cartão ou PIX), você receberá um e-mail com acesso exclusivo para baixar a biblioteca de sabedoria na nossa área segura."
    },
    {
      q: "Funciona no celular?",
      a: "Sim. O desenho da leitura foi projetado para imersão perfeita, proporcionando uma experiência de clareza tanto em celulares quanto em tablets ou computadores."
    },
    {
      q: "Por que custa apenas R$ 19,90?",
      a: "Minha missão é plantar sementes de liberdade no maior número possível de lares. R$ 19,90 é um valor acessível, construído intencionalmente para separar quem valoriza o aprendizado profundo dos meros curiosos."
    },
    {
      q: "Existe garantia?",
      a: "Absoluta. Você tem 7 dias de Garantia Incondicional. Se a sabedoria não transformar completamente a forma como você enxerga as decisões da sua vida, basta um único e-mail para seu investimento ser devolvido."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark-light border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">Restou alguma dúvida? Veja as respostas abaixo.</p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <QAItem key={index} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
