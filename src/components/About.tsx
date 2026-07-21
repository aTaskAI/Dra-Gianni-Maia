import { motion } from 'motion/react';
import { Award, Briefcase, Users2 } from 'lucide-react';
import { ASSETS } from '../config/assets';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#070D1E] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0A1128] clip-path-slant z-0 hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-xl blur-xl" />
              <img 
                src={ASSETS.lawyer.portrait}
                alt="Dra. Gianni Maia" 
                className="relative z-10 rounded-xl shadow-2xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-8 bg-primary-900 p-6 rounded-lg shadow-2xl border border-white/10 z-20 hidden md:block">
                <p className="text-4xl font-serif text-gold-500 font-bold mb-1">20+</p>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">Anos de<br/>Experiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Seu direito, <span className="text-gold-500 italic">nosso dever</span>
            </h2>
            
            <div className="space-y-4 text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
              <p className="font-semibold text-white">
                Uma advogada especialista ao seu lado para proteger seus direitos.
              </p>
              <p>
                Sou a Dra. Gianni Maia, advogada inscrita na OAB/MG desde 2004, Mestre em Ciências Jurídicas, especialista e Mestra em Direito do Consumidor.
              </p>
              <p>
                Há mais de 20 anos dedico minha carreira à defesa dos direitos dos consumidores e à busca de soluções jurídicas seguras, eficientes e personalizadas.
              </p>
              <p>
                Ao longo da minha trajetória, atuei por mais de uma década como Coordenadora do PROCON de Campo Belo/MG, presidi a Comissão de Direito do Consumidor da OAB/MG – 15ª Subseção em dois mandatos, fui docente universitária na graduação em Direito na Unifenas, sou mestra em Ciências Jurídicas formada em Lisboa - Portugal e atualmente integro a Comissão Estadual de Defesa do Consumidor da OAB/MG.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-gold-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Alta Especialização</h4>
                  <p className="text-slate-400 text-sm mt-1">Mestrado em Lisboa - Portugal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-gold-500">
                  <Users2 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Direito do Consumidor</h4>
                  <p className="text-slate-400 text-sm mt-1">Fazendo o seu direito valer.</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gold-500 pl-6 py-2">
              <p className="text-xl font-serif text-white italic">
                "A verdadeira justiça começa com uma estratégia impecável."
              </p>
              <p className="text-slate-400 mt-2 font-medium">— Dra. Gianni Maia</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
