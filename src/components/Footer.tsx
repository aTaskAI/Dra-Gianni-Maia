import { MapPin, Phone, Mail, Instagram, Shield } from 'lucide-react';
import { ASSETS } from '../config/assets';

export function Footer() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  return (
    <footer id="contato" className="bg-[#070D1E] pt-20 pb-10 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              {ASSETS.logo.light && (
                <img src={ASSETS.logo.light} alt="Gianni Maia Logo" className="h-10 w-auto object-contain" />
              )}
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[26px] text-white tracking-wide">
                  Dr.<sup className="text-[0.5em] top-[-0.5em] relative">a</sup> Gianni Maia
                </span>
                <span className="text-[9px] tracking-[0.18em] text-white/90 uppercase mt-1">
                  Advocacia Especializada
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Defesa jurídica especializada na garantia do seu direito à saúde. Atuação ágil e humanizada contra negativas de tratamentos, cirurgias e medicamentos por planos de saúde e SUS.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/giannimaia_advocacia?igsh=ZzNvazZ5eTJnOGh5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-gold-500 transition-colors group">
                  <Phone size={18} className="mt-1 group-hover:text-gold-500 transition-colors" />
                  <div>
                    <p className="font-medium text-sm text-slate-300">WhatsApp / Telefone</p>
                    <p className="text-sm">+55 (35) 98713-5775</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin size={18} className="mt-1 text-slate-400 shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-slate-300">Endereço</p>
                    <p className="text-sm leading-relaxed">R. Artur Bernardes, 25 - Centro<br/>Campo Belo - MG<br/>37270-000</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navegação Rápida</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="text-slate-400 hover:text-gold-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-slate-400 hover:text-gold-500 transition-colors">Sobre</a></li>
              <li><a href="#areas" className="text-slate-400 hover:text-gold-500 transition-colors">Atuação</a></li>
              <li><a href="#diferenciais" className="text-slate-400 hover:text-gold-500 transition-colors">Análise</a></li>
              <li><a href="#depoimentos" className="text-slate-400 hover:text-gold-500 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Transparência</h4>
            <div className="bg-primary-800 p-4 rounded-lg border border-white/5 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={20} className="text-gold-500" />
                <span className="text-white font-semibold text-sm">Registro OAB</span>
              </div>
              <p className="text-slate-400 text-sm">Dra. Gianni Maia</p>
              <p className="text-slate-400 text-sm">OAB/MG 98958</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gianni Maia Advocacia. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
