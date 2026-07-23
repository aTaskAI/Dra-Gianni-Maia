import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, Scale } from 'lucide-react';
import { ASSETS } from '../config/assets';

export function Hero() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-32 lg:pt-40 pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 opacity-95 z-10" />
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-[120px] z-10 pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[100px] z-10 pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-20 w-full flex flex-col items-start mt-8 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%]"
          >
            <div className="inline-block py-1 px-3 border border-gold-500 text-gold-500 text-[10px] uppercase tracking-[0.3em] mb-6">
              Direito à Saúde
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6 text-balance">
              O plano de saúde <span className="text-gold-500 italic">negou ou está demorando</span> para liberar seu tratamento?
            </h1>
            
            <div className="text-lg md:text-xl text-slate-400 font-light mb-10 max-w-2xl leading-relaxed text-balance space-y-4">
              <p>
                Em muitos casos, a demora pode comprometer o tratamento. Cirurgias, medicamentos, terapias e internações não podem ser negados ou atrasados sem justificativa adequada.
              </p>
              <p>
                Atendemos pacientes, familiares e responsáveis que, em um momento delicado após o diagnóstico, enfrentam barreiras para acessar o tratamento adequado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="whatsapp-hero"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-[#0A1128] uppercase text-xs tracking-widest font-bold rounded-sm shadow-xl transition-all group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.56 5.338-11.891 11.903-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.411 0 6.56-5.339 11.892-11.903 11.892-2.003 0-3.96-.503-5.707-1.456l-6.279 1.664zm6.29-4.103c1.733.991 3.323 1.54 5.305 1.54 5.461 0 9.903-4.442 9.903-9.903 0-2.646-1.03-5.132-2.901-7.001-1.868-1.868-4.354-2.898-7.001-2.898-5.461 0-9.904 4.443-9.904 9.903 0 2.09.585 3.861 1.611 5.485l-1.066 3.89 4.053-1.016z"/></svg>
                Agendar Consulta via WhatsApp
              </a>
              <a 
                href="#areas"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-slate-700 hover:border-gold-500 text-white font-bold uppercase text-xs tracking-widest rounded-sm transition-colors"
              >
                Conhecer Áreas de Atuação
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end"
          >
            {ASSETS.logo.light ? (
              <motion.div 
                className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center"
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 10, -10, 0],
                  rotateX: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ perspective: 1000 }}
              >
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gold-500/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-blue-900/40 blur-[100px] rounded-full pointer-events-none translate-x-5 translate-y-5" />
                
                <img 
                  src={ASSETS.logo.light} 
                  alt="Gianni Maia Logo" 
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  style={{ transformStyle: 'preserve-3d' }}
                  width="400"
                  height="400"
                  fetchPriority="high"
                />
              </motion.div>
            ) : (
              <div className="relative w-full aspect-square max-w-lg rounded-sm border border-dashed border-slate-700 flex flex-col items-center justify-center text-slate-500 p-8 text-center bg-slate-800/30">
                <p className="mb-2">Espaço para Imagem da Seção Inicial (Hero)</p>
                <p className="text-sm">Envie a imagem no chat e atualize o ASSETS.hero.image</p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 pt-8 border-t border-white/10 w-full"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-gold-500" size={24} />
            </div>
            <div>
              <h2 className="text-white font-semibold mb-1 text-lg">Sigilo Absoluto</h2>
              <p className="text-sm text-slate-400">Garantia total de confidencialidade.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
              <Clock className="text-gold-500" size={24} />
            </div>
            <div>
              <h2 className="text-white font-semibold mb-1 text-lg">Atendimento Ágil</h2>
              <p className="text-sm text-slate-400">Respostas rápidas e estratégicas.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold mb-1 text-lg">Atuação Nacional</h2>
              <p className="text-sm text-slate-400">Consultivo online para todo o Brasil.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
