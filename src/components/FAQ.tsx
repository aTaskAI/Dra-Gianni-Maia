import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'O que fazer quando o plano de saúde nega uma cirurgia?',
    answer: 'O primeiro passo é solicitar a negativa por escrito e reunir o relatório médico que justifica a necessidade da cirurgia. Com esses documentos, é possível avaliar se a negativa do plano de saúde pode ser questionada juridicamente.'
  },
  {
    question: 'O plano de saúde pode limitar terapias para TEA?',
    answer: 'A limitação de terapias para TEA precisa ser analisada caso a caso. Quando há indicação médica ou profissional para terapias multidisciplinares, como psicologia, fonoaudiologia, terapia ocupacional ou outras abordagens necessárias ao tratamento, a restrição imposta pelo plano pode ser questionada juridicamente, especialmente quando compromete a continuidade do cuidado.'
  },
  {
    question: 'Preciso ter a negativa por escrito?',
    answer: 'A negativa por escrito é muito importante, porque mostra o motivo usado pelo convênio para recusar a cobertura. Se o plano não forneceu o documento, é recomendável solicitar formalmente.'
  },
  {
    question: 'É possível pedir liminar contra plano de saúde?',
    answer: 'Em casos urgentes, pode ser possível avaliar um pedido liminar contra o plano de saúde. A viabilidade depende da urgência médica, dos documentos apresentados e da análise jurídica do caso.'
  },
  {
    question: 'Quanto tempo demora uma ação contra plano de saúde?',
    answer: 'O tempo varia conforme o tipo de caso. Situações urgentes podem exigir medidas imediatas, enquanto casos como reajuste abusivo podem seguir outro ritmo processual. A análise inicial ajuda a entender o cenário provável.'
  },
  {
    question: 'Quais documentos devo enviar?',
    answer: 'É necessário pedido médico, negativa, protocolo de atendimento, carteirinha do plano de saúde, documentos pessoais e demais documentos que a equipe solicitar. A equipe indicará o que faltar.'
  },
  {
    question: 'O plano pode negar remédios prescrito pelo médico?',
    answer: 'A negativa precisa ser analisada caso a caso. Quando há prescrição médica e justificativa clínica, pode ser possível avaliar medidas jurídicas para questionar a recusa do plano de saúde.'
  },
  {
    question: 'O 1º atendimento é gratuito?',
    answer: 'Sim. O primeiro atendimento é gratuito para entender o problema com o plano de saúde, avaliar as informações iniciais e orientar sobre os possíveis próximos passos.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-primary-800 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Perguntas <span className="text-gold-500 italic">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-primary-900 border border-white/10 rounded-lg overflow-hidden transition-colors hover:border-gold-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-gold-500 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
