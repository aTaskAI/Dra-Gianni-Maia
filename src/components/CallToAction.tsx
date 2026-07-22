import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { ASSETS } from '../config/assets';

export default function CallToAction() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de uma análise inicial sobre meu caso com o plano de saúde.";
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  return (
    <section className="relative py-24 bg-[#0A1128] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A1128] opacity-80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/80 to-transparent z-10" />
        <img 
          src={ASSETS.cta.background}
          alt="Equipe médica" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Seu direito à saúde <br className="hidden md:block" />
            <span className="text-white">NÃO pode esperar.</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Atuação estratégica e humanizada em Direito da Saúde para garantir tratamentos, medicamentos, cirurgia e atendimentos NEGADOS por planos de saúde e pelo poder público.
          </p>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="whatsapp-cta"
            className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 sm:px-10 py-4 sm:py-5 text-sm md:text-lg font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1 text-center"
          >
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-0" />
            <span>Falar agora com nossa equipe</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
