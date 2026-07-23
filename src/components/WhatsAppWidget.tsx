import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  useEffect(() => {
    const playNotificationSound = () => {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        
        const audioCtx = new AudioContext();
        
        // Soft notification chime
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = 'sine';
        
        // Play a soft high-pitched "ding"
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
        osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1); // Up to A6
        
        // Envelope: quick fade in, slow fade out
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        // Ignore if audio context fails (e.g. browser autoplay policies)
      }
    };

    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
        playNotificationSound();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasOpened]);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 w-72 origin-bottom-right"
          >
            <div className="bg-[#0A1128] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-semibold text-sm">Atendimento Online</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="p-5 bg-slate-50">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-slate-700 text-sm mb-4 border border-slate-100">
                Olá. Estou aqui para te ajudar. Vamos iniciar?
              </div>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="whatsapp-widget-balao"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#25D366]/20"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={18} />
                Iniciar conversa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        data-gtm="whatsapp-widget-botao"
        className="flex items-center bg-transparent sm:bg-white sm:text-[#0A1128] sm:px-4 sm:py-3 sm:rounded-full sm:shadow-2xl sm:space-x-3 cursor-pointer sm:border-2 sm:border-[#25D366] hover:scale-105 transition-transform outline-none"
        aria-label="Falar pelo WhatsApp"
      >
        <div className="w-14 h-14 sm:w-8 sm:h-8 bg-[#25D366] rounded-full flex items-center justify-center relative shadow-lg sm:shadow-none">
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
          <svg className="w-7 h-7 sm:w-4 sm:h-4 fill-white relative z-10" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.56 5.338-11.891 11.903-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.411 0 6.56-5.339 11.892-11.903 11.892-2.003 0-3.96-.503-5.707-1.456l-6.279 1.664zm6.29-4.103c1.733.991 3.323 1.54 5.305 1.54 5.461 0 9.903-4.442 9.903-9.903 0-2.646-1.03-5.132-2.901-7.001-1.868-1.868-4.354-2.898-7.001-2.898-5.461 0-9.904 4.443-9.904 9.903 0 2.09.585 3.861 1.611 5.485l-1.066 3.89 4.053-1.016z"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline-block">Atendimento Imediato</span>
      </motion.button>
    </div>
  );
}
