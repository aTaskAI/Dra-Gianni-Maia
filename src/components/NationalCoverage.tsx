import { motion } from 'motion/react';
import { MapPin, MessageCircle, Headset } from 'lucide-react';
import { ASSETS } from '../config/assets';

export default function NationalCoverage() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de um atendimento. Sou de outro estado/cidade e vi que vocês atendem todo o Brasil.";
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-600 px-4 py-2 rounded-sm text-sm font-semibold mb-6">
              <Headset size={18} />
              Atendemos em todo o Brasil!
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-8 leading-tight">
              Não importa sua localização, estamos prontos para te ajudar!
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                O escritório Gianni Maia, advocacia especializada atende clientes em todo o Brasil, com atuação nos 27 estados da federação.
              </p>
              
              <p>
                Graças aos processos eletrônicos e ao atendimento digital, conseguimos ingressar com as ações no seu município, acompanhando cada etapa com transparência, agilidade e comunicação constante. Você recebe suporte jurídico especializado sem sair de casa.
              </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Falar agora com nossa equipe
            </a>
          </motion.div>

          {/* Map Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
              {/* Brazil Map Placeholder / stylized elements */}
              <div className="absolute inset-0 bg-[url('/brazil.svg')] bg-no-repeat bg-center bg-contain opacity-70" />
              
              {/* Animated Map Pins */}
              {[
                { top: '30%', left: '40%', delay: 0.1 },
                { top: '45%', left: '60%', delay: 0.3 },
                { top: '60%', left: '45%', delay: 0.5 },
                { top: '25%', left: '70%', delay: 0.2 },
                { top: '55%', left: '30%', delay: 0.4 },
                { top: '75%', left: '55%', delay: 0.6 },
                { top: '35%', left: '50%', delay: 0.7 },
                { top: '65%', left: '75%', delay: 0.8 },
                { top: '40%', left: '25%', delay: 0.9 },
                { top: '50%', left: '80%', delay: 1.0 },
              ].map((pin, index) => (
                <motion.div
                  key={index}
                  className="absolute text-gold-500"
                  style={{ top: pin.top, left: pin.left }}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: pin.delay,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  <MapPin size={24} className="fill-gold-500/20" />
                  <motion.div 
                    className="absolute -inset-2 bg-gold-500 rounded-full opacity-20 z-[-1]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: pin.delay }}
                  />
                </motion.div>
              ))}

              {/* Google Badge Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-600 font-bold text-2xl">5.0</span>
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-600 font-medium">Avaliações no Google</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
