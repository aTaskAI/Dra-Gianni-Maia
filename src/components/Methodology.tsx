import { motion } from 'motion/react';
import { MessageCircle, Search, Video, Milestone } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Entre em contato pelo WhatsApp',
    description: 'Envie sua dúvida pelo WhatsApp de forma rápida e segura. Nossa equipe fará o primeiro atendimento e entenderá sua necessidade.'
  },
  {
    icon: Search,
    title: 'Análise inicial do seu caso',
    description: 'Nossa equipe ouvirá atentamente sua situação e solicitará apenas os documentos necessários para uma avaliação completa.'
  },
  {
    icon: Video,
    title: 'Análise jurídica especializada',
    description: 'Através de uma ligação por vídeo, você conversará diretamente com a Dra. Gianni Maia que analisará com atenção e estratégia, identificando os seus direitos e as melhores alternativas jurídicas para a solução do problema.'
  },
  {
    icon: Milestone,
    title: 'Orientação sobre os próximos passos',
    description: 'Após a análise, você receberá uma orientação clara sobre as medidas recomendadas, esclarecendo todas as dúvidas antes do início da atuação.'
  }
];

export function Methodology() {
  return (
    <section id="diferenciais" className="py-24 bg-primary-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Assim funciona nossa <span className="text-gold-500 italic">análise jurídica</span> do seu caso.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Um processo de trabalho desenhado para proporcionar previsibilidade, transparência e os melhores resultados.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
          {/* Connecting line for mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-primary-800 border-4 border-primary-900 flex items-center justify-center mb-6 shadow-xl relative group-hover:bg-gold-500 transition-colors duration-500">
                  <step.icon className="text-gold-500 group-hover:text-primary-900 transition-colors duration-500" size={32} />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-sm border-2 border-primary-900">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex justify-center relative z-10"
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="whatsapp-analise"
              className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-gold-500 hover:bg-gold-400 text-primary-900 px-6 sm:px-10 py-4 sm:py-5 text-sm md:text-lg font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg hover:shadow-gold-500/20 hover:-translate-y-1 text-center"
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-0" />
              <span>Falar agora com nossa equipe</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
