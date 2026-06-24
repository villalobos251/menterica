import { motion } from 'motion/react';
import { Award, GraduationCap, LineChart } from 'lucide-react';

export const Authority = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div 
          className="w-full lg:w-5/12 relative flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 w-full max-w-sm lg:max-w-none aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-4 border-white/5 shadow-2xl">
            <img 
              src="https://private-purple-7jwtyjj1.edgeone.app/DR%20LENDO%20OLHANDO%20PARA%20CAMERA.jpeg" 
              alt="Helena Valença" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
            />
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent pointer-events-none z-10 opacity-80"></div>
            {/* Elegant Name Tag overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/80 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20">
              <h4 className="text-xl font-bold text-white uppercase">Helena Valença</h4>
              <p className="text-brand-gold text-sm font-medium uppercase tracking-wider">Pesquisadora de Comportamento Humano</p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -z-10"></div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-7/12 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 leading-tight w-full">
            Pesquisadora de Comportamento Humano e Criadora do <span className="text-brand-gold">Método Próspera</span>
          </h2>
          
          <div className="space-y-5 text-base md:text-lg text-slate-300 leading-relaxed mb-10 w-full">
            <p className="pl-4 border-l-2 border-brand-gold italic mb-6">
              "Passei anos tentando entender por que algumas pessoas conseguem construir uma vida de crescimento, estabilidade e realização, enquanto outras permanecem presas aos mesmos ciclos de escassez, autossabotagem e frustração."
            </p>
            <p>
              Sou Helena Valença, pesquisadora dedicada ao estudo do comportamento humano, da tomada de decisões e dos princípios que influenciam a prosperidade ao longo da vida.
            </p>
            <p>
              Sou também a criadora do <strong className="text-white">Método Próspera</strong>, um sistema estruturado que organiza os princípios essenciais que moldam decisões, hábitos e resultados ao longo do tempo.
            </p>
            <p>
              Durante minha trajetória, percebi algo que mudou completamente minha visão: a maioria das pessoas acredita que seus resultados são determinados apenas pelo esforço, quando na verdade eles são profundamente influenciados pelos padrões mentais, hábitos e crenças que carregam desde cedo.
            </p>
            <p>
              Ao analisar estudos sobre comportamento, desenvolvimento pessoal e os princípios observados em grandes líderes e construtores de legado ao longo da história, identifiquei padrões que se repetem geração após geração.
            </p>
            <p>
              Foi dessa investigação que nasceu o Método Próspera.
            </p>
            <p>
              Um sistema criado para ajudar pessoas comuns a desenvolver clareza, disciplina, responsabilidade e uma mentalidade capaz de sustentar crescimento duradouro, sem depender de motivação passageira ou promessas irreais.
            </p>
            <p>
              Acredito que prosperidade não começa no dinheiro. Ela começa nas decisões. E decisões melhores são construídas sobre princípios sólidos.
            </p>
            <p>
              Foi para compartilhar esses princípios de forma prática e acessível que desenvolvi o Livro <strong className="text-brand-gold">Mente Rica, Vida Rica</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full">
            {[
              { icon: <GraduationCap className="w-6 h-6 text-brand-gold" />, text: "Comportamento Humano" },
              { icon: <Award className="w-6 h-6 text-brand-gold" />, text: "Princípios Validados" },
              { icon: <LineChart className="w-6 h-6 text-brand-gold" />, text: "+10.000 Vidas Transformadas" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start text-left gap-3">
                <div className="p-3 rounded-full bg-brand-dark-light border border-white/5 inline-block">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-slate-200 uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
