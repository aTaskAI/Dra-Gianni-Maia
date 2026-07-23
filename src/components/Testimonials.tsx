import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { ASSETS } from '../config/assets';
import { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Lorenzo G.',
    role: 'B. Horizonte/MG',
    text: 'Escritório de advocacia excelente!! Me ajudou muito e tem um acompanhamento e atendimento fora de série.',
  },
  {
    id: 2,
    name: 'Fernando de P.',
    role: 'Jundiaí/SP',
    text: 'Escritório excelente!!! Super recomendo!!!',
  },
  {
    id: 3,
    name: 'Maria M.',
    role: 'São Paulo/SP',
    text: 'Muito competentes e comprometidos.',
  },
  {
    id: 4,
    name: 'Etienne Ferreira',
    role: 'B. Horizonte',
    text: 'Excelentes profissionais, atenciosas e competentes. Resolveram meu problema de imediato.',
  },
  {
    id: 5,
    name: 'Marco Antonio',
    role: 'C. Belo',
    text: 'Ótimas profissionais !!',
  },
  {
    id: 6,
    name: 'Mayra M.',
    role: 'Belo Horizonte/MG',
    text: 'Escritório sério e com advogadas competentes! Desejo muito sucesso para as doutoras.',
  }
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-[#0A1128] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Como você, outros clientes passaram por problemas semelhantes. <br className="hidden md:block" />
            <span className="text-gold-500 italic">Veja como nos avaliaram:</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center lg:items-stretch">
          {/* Google Rating Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex flex-col items-center justify-center p-8 bg-primary-800/50 rounded-2xl border border-white/5 lg:w-1/3"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-6xl font-bold text-white font-serif">5,0</span>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">19 avaliações no Google</span>
              </div>
            </div>
          </motion.div>

          {/* Google Profile Snapshot Placeholder */}
          {ASSETS.reviews.googleProfile && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-2/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group"
            >
              <img 
                src={ASSETS.reviews.googleProfile} 
                alt="Perfil Google Meu Negócio" 
                className="w-full h-full object-cover" 
                width="600"
                height="400"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href="#" className="flex items-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-full font-semibold hover:bg-gold-500 transition-colors">
                  Ver perfil no Google <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile Slider (Auto-play with Dots) */}
        <div className="block md:hidden relative w-full mb-8">
          <div className="relative min-h-[300px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-primary-800/50 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col"
              >
                <Quote className="text-gold-500/10 absolute top-6 right-6 w-10 h-10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                
                <p className="text-slate-300 italic mb-6 relative z-10 leading-relaxed text-sm flex-grow">
                  "{TESTIMONIALS[currentSlide].text}"
                </p>
                
                <div className="mt-auto border-t border-white/5 pt-4">
                  <p className="text-white font-semibold text-sm">{TESTIMONIALS[currentSlide].name}</p>
                  <p className="text-gold-500 text-xs mt-1">{TESTIMONIALS[currentSlide].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-1 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentSlide(index)}
                className="w-10 h-10 flex items-center justify-center"
                aria-label={`Ver depoimento ${index + 1}`}
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-gold-500 w-6' : 'bg-white/20 w-2'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-800/50 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-gold-500/30 transition-colors"
            >
              <Quote className="text-gold-500/10 absolute top-6 right-6 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-sm flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto border-t border-white/5 pt-4">
                <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gold-500 text-xs mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            As avaliações refletem experiências individuais e não representam promessa de resultados. Cada caso exige avaliação.
           </p>
        </div>
      </div>
    </section>
  );
}
