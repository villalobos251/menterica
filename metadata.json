import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      age: "42 anos",
      text: "Eu sempre trabalhei muito, mas sentia que estava correndo em uma esteira. O dinheiro entrava e saía, e a exaustão era constante. O Método Próspera não me deu uma 'dica financeira', ele quebrou a trava invisível que me fazia sabotar meu próprio crescimento. Pela primeira vez na vida, tenho clareza de direção e um controle real sobre meu futuro."
    },
    {
      name: "Camila Farias",
      age: "36 anos",
      text: "Minha maior dor era começar projetos e desistir no meio. Eu me sentia culpada por procrastinar. A leitura deste guia mudou minha identidade. Eu entendi como instalar uma disciplina inegociável sem depender de motivação. Hoje, o orgulho que sinto ao olhar no espelho não tem preço."
    },
    {
      name: "Roberto Almeida",
      age: "55 anos",
      text: "Aos 55, o medo de não ter construído nada sólido me assombrava. Eu achava que era tarde demais. Os princípios que a Helena apresenta são atemporais. Reconstruí minha mentalidade do zero e, em meses, recuperei a autoestima e a estabilidade que passei décadas tentando alcançar."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark-light relative overflow-hidden" id="depoimentos">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold font-bold tracking-wider text-sm mb-4 uppercase">
            A Transformação na Prática
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Pessoas Que Decidiram <span className="text-brand-gold">Reescrever Sua História</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
            Esses são os resultados de quem parou de lutar contra os próprios padrões e decidiu aplicar os princípios eternos da prosperidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-brand-dark p-8 rounded-2xl border border-white/5 relative group hover:border-brand-gold/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto border-t border-white/5 pt-6">
                <p className="text-white font-bold text-lg">{testimonial.name}</p>
                <p className="text-brand-gold/80 text-sm">{testimonial.age}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
