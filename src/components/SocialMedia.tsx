import { motion } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';
import { ASSETS } from '../config/assets';

export function SocialMedia() {
  return (
    <section className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gold-500/50" />
            <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold flex items-center gap-2">
              <Instagram size={14} /> Instagram
            </span>
            <div className="h-px w-8 bg-gold-500/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-white leading-tight"
          >
            Acesse nossas <span className="text-gold-500 italic">redes sociais</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Block 1: Button Left, Mockup Right */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12"
          >
            <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
              <h3 className="text-xl md:text-2xl font-serif text-white mb-2">@gianni_maia</h3>
              <p className="text-sm text-slate-400 mb-6 max-w-[250px]">
                Acompanhe o dia a dia, dicas e conteúdos exclusivos sobre direito do consumidor e saúde.
              </p>
              <a 
                href="https://www.instagram.com/gianni_maia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/20 hover:text-white font-bold uppercase text-xs tracking-widest rounded-sm transition-all group"
              >
                Conheça nossa rede social
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* iPhone Mockup */}
            <div className="relative mx-auto lg:mx-0 w-[240px] h-[490px] md:w-[280px] md:h-[570px] flex-shrink-0">
              <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden z-10 flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 md:h-7 bg-slate-800 rounded-b-3xl w-1/2 mx-auto z-20 flex justify-center items-end pb-1">
                    <div className="w-16 h-4 rounded-full bg-slate-950"></div>
                </div>
                {ASSETS.socialMedia.mockup1 ? (
                  <img src={ASSETS.socialMedia.mockup1} alt="Instagram @gianni_maia" className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem]" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 text-center p-6 border-2 border-dashed border-slate-700/50 m-2 rounded-[2rem] md:rounded-[2.5rem]">
                    <Instagram size={40} className="mb-4 opacity-50" />
                    <p className="text-xs">Espaço para o print do perfil @gianni_maia</p>
                  </div>
                )}
              </div>
              <div className="absolute -inset-4 bg-gold-500/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Block 2: Mockup Left, Button Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
          >
            {/* iPhone Mockup */}
            <div className="relative mx-auto lg:mx-0 w-[240px] h-[490px] md:w-[280px] md:h-[570px] flex-shrink-0">
              <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden z-10 flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 md:h-7 bg-slate-800 rounded-b-3xl w-1/2 mx-auto z-20 flex justify-center items-end pb-1">
                    <div className="w-16 h-4 rounded-full bg-slate-950"></div>
                </div>
                {ASSETS.socialMedia.mockup2 ? (
                  <img src={ASSETS.socialMedia.mockup2} alt="Instagram @giannimaia_advocacia" className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem]" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 text-center p-6 border-2 border-dashed border-slate-700/50 m-2 rounded-[2rem] md:rounded-[2.5rem]">
                    <Instagram size={40} className="mb-4 opacity-50" />
                    <p className="text-xs">Espaço para o print do perfil @giannimaia_advocacia</p>
                  </div>
                )}
              </div>
              <div className="absolute -inset-4 bg-gold-500/10 rounded-full blur-2xl -z-10" />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h3 className="text-xl md:text-2xl font-serif text-white mb-2">@giannimaia_advocacia</h3>
              <p className="text-sm text-slate-400 mb-6 max-w-[250px]">
                Acompanhe o perfil do escritório para atualizações jurídicas e atuação na área da saúde.
              </p>
              <a 
                href="https://www.instagram.com/giannimaia_advocacia?igsh=ZzNvazZ5eTJnOGh5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/20 hover:text-white font-bold uppercase text-xs tracking-widest rounded-sm transition-all group"
              >
                Conheça nossa rede social
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
