import { motion } from 'motion/react';
import { HeartPulse, Brain, Activity, Stethoscope, Pill, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const AREAS = [
  {
    id: 'saude',
    title: 'Direito da Saúde',
    icon: HeartPulse,
    description: 'Assessoria jurídica contra planos de saúde e SUS para garantir acesso a tratamentos e medicamentos.',
    details: [
      'Defesa de beneficiários de planos de saúde',
      'Atuação contra o Sistema Único de Saúde (SUS)',
      'Garantia de tratamentos e procedimentos',
      'Cumprimento das normas da ANS'
    ]
  },
  {
    id: 'tea',
    title: 'Direito da Pessoa com Autismo (TEA)',
    icon: Brain,
    description: 'Defesa especializada para garantir acesso contínuo a terapias e direitos assegurados a pessoas com TEA.',
    details: [
      'Acesso a terapias multidisciplinares',
      'Combate à interrupção de tratamentos',
      'Obrigação de cobertura por planos de saúde',
      'Responsabilização do Poder Público'
    ]
  },
  {
    id: 'bariatrica',
    title: 'Cirurgia Bariátrica e Reparadora',
    icon: Activity,
    description: 'Atuação para superar obstáculos de planos de saúde, garantindo autorização para cirurgias bariátricas e reparadoras.',
    details: [
      'Autorização de cirurgia bariátrica',
      'Liberação de cirurgias reparadoras',
      'Garantia de tratamento integral prescrito',
      'Reversão de negativas abusivas'
    ]
  },
  {
    id: 'cirurgias',
    title: 'Cirurgias Urgentes e Eletivas',
    icon: Stethoscope,
    description: 'Agilidade técnica com pedidos de liminar para garantir custeio de cirurgias, próteses, internações em UTI e materiais.',
    details: [
      'Pedidos de liminar de urgência',
      'Liberação de próteses, órteses e stents',
      'Garantia de internações em UTI',
      'Custeio integral pelo plano de saúde'
    ]
  },
  {
    id: 'medicamentos',
    title: 'Medicamentos de Alto Custo',
    icon: Pill,
    description: 'Garantia de acesso rápido a medicamentos e tratamentos essenciais de alto custo negados por planos ou SUS.',
    details: [
      'Acesso a medicamentos prescritos',
      'Defesa contra negativas de planos de saúde',
      'Cobrança de fornecimento pelo Poder Público',
      'Garantia de continuidade do tratamento'
    ]
  }
];

export function PracticeAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  return (
    <section id="areas" className="py-24 bg-[#0A1128] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Saiba como podemos lhe <span className="text-gold-500 italic">ajudar</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Atuação jurídica combativa e preventiva, com foco em resultados concretos para garantir o seu direito à saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
              onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
              className={`relative overflow-hidden p-8 rounded-xl border transition-all duration-500 cursor-pointer lg:cursor-default flex flex-col h-full
                ${activeArea === area.id 
                  ? 'bg-primary-800 border-gold-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -translate-y-2' 
                  : 'bg-primary-900/50 border-white/5 hover:border-white/10'}`}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className={`p-4 rounded-lg transition-colors duration-500 ${activeArea === area.id ? 'bg-gold-500 text-primary-900' : 'bg-white/5 text-gold-500'}`}>
                  <area.icon size={28} />
                </div>
                <div className={`transition-opacity duration-300 ${activeArea === area.id ? 'opacity-100' : 'opacity-0'}`}>
                  <ArrowUpRight className="text-gold-500" size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-white mb-3">{area.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{area.description}</p>
              
              <div className={`overflow-hidden transition-all duration-500 ${activeArea === area.id ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-2 pb-6">
                  {area.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtm="whatsapp-areas-atuacao"
                  className="inline-flex items-center gap-2 text-gold-500 text-sm font-semibold hover:text-gold-400 transition-colors uppercase tracking-wider"
                >
                  Falar sobre seu caso
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
