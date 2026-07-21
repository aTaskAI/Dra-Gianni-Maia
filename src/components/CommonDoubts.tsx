import { motion } from 'motion/react';
import { ASSETS } from '../config/assets';

const DOUBTS = [
  {
    question: '“Tenho medo de pagar e não resolver”',
    answer: 'Essa é uma preocupação comum, principalmente quando o paciente já está lidando com custos médicos, mensalidade do plano e insegurança sobre o tratamento. Por isso, o primeiro atendimento é gratuito. Antes de qualquer decisão, você pode explicar o caso e entender se existe possibilidade de análise jurídica.'
  },
  {
    question: '“Quanto tempo demora?”',
    answer: 'O tempo depende do tipo de caso, da urgência médica, dos documentos disponíveis e da análise do Judiciário. Casos urgentes, como negativa de cirurgia, medicamento ou internação, podem permitir avaliação de medidas mais rápidas. Já situações como reajuste abusivo podem ter uma jornada diferente. O mais importante é começar pela análise correta para entender o cenário real do seu caso.'
  },
  {
    question: '“E se o plano disser que não tem cobertura?”',
    answer: 'A justificativa do plano precisa ser analisada. Em alguns casos, a negativa pode estar baseada em cláusulas contratuais, rol de procedimentos, carência, exclusão de cobertura ou interpretação da operadora. A análise jurídica serve justamente para verificar se a negativa pode ser questionada.'
  }
];

export default function CommonDoubts() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block border border-gold-500/30 text-gold-600 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider mb-6">
                <span className="mr-2 text-gold-500">•</span> ANTES DE AGIR
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-10 leading-tight">
                Dúvidas comuns de quem precisa <span className="text-gold-500">agir contra o plano de saúde</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-grow rounded-2xl overflow-hidden min-h-[300px] lg:min-h-0 mt-auto"
            >
              {ASSETS.commonDoubts.image ? (
                <>
                  <img 
                    src={ASSETS.commonDoubts.image}
                    alt="Estetoscópio" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
                </>
              ) : (
                <div className="absolute inset-0 bg-slate-100 border border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-slate-500 font-medium mb-2">Espaço para Imagem (Dúvidas Comuns)</p>
                  <p className="text-slate-400 text-sm">Envie a imagem no chat e atualize o ASSETS.commonDoubts.image</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 justify-center">
            {DOUBTS.map((doubt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#FAFAFA] border border-gold-500/20 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                  {doubt.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {doubt.answer}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
