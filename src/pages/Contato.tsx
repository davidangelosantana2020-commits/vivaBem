import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Send, 
  MapPin, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE } from "../constants";

export default function Contato() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Contato</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-primary leading-tight">
              Estamos aqui <br /> <span className="text-secondary/80">para você.</span>
            </h1>
            <p className="text-xl font-light text-on-surface-variant leading-relaxed">
              Dúvidas, sugestões ou apenas um "oi"? Nossa equipe está pronta para te atender com todo o carinho e atenção que você merece.
            </p>
          </motion.div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-40">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h2 className="text-3xl font-serif italic text-primary">Canais de Atendimento</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary">E-mail</p>
                    <p className="text-lg font-light text-on-surface-variant">{CONTACT_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/10 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary">Telefone</p>
                    <p className="text-lg font-light text-on-surface-variant">{CONTACT_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary/5 flex items-center justify-center text-tertiary shrink-0 group-hover:bg-tertiary/10 transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary">WhatsApp</p>
                    <a 
                      href={WHATSAPP_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-light text-on-surface-variant hover:text-primary transition-colors"
                    >
                      Falar agora no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-serif italic text-primary">Horário de Atendimento</h2>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                  <Clock size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-light text-on-surface-variant">Segunda a Sexta: 09h às 18h</p>
                  <p className="text-sm font-light text-on-surface-variant/60 italic">Sábados, domingos e feriados: Fechado</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-3xl font-serif italic text-primary">Redes Sociais</h2>
              <div className="flex gap-6">
                <a href="#" className="w-14 h-14 rounded-full bg-white editorial-shadow flex items-center justify-center text-primary hover:text-secondary transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white editorial-shadow flex items-center justify-center text-primary hover:text-secondary transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-surface-container-low p-12 md:p-16 rounded-[4rem] border border-outline-variant/10 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif italic text-primary">Envie uma mensagem</h2>
              <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                Preencha os campos abaixo e entraremos em contato o mais breve possível.
              </p>
            </div>

            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome aqui" 
                  className="w-full bg-white border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm font-light focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="w-full bg-white border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm font-light focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Como podemos te ajudar?" 
                  className="w-full bg-white border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm font-light focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button 
                type="button"
                className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3"
              >
                Enviar Mensagem <Send size={20} />
              </button>
            </form>

            <div className="pt-6 flex items-center gap-3 text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold justify-center">
              <ShieldCheck size={14} className="text-secondary" />
              <span>Sua privacidade é nossa prioridade.</span>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
            Prefere um atendimento <br /> mais rápido?
          </h2>
          <div className="flex justify-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary px-12 py-5 text-lg flex items-center gap-3"
            >
              <MessageCircle size={20} /> Falar no WhatsApp agora
            </a>
          </div>
          <p className="text-xs font-light text-on-surface-variant/60 italic">
            "Pequenos cuidados diários para uma vida mais leve."
          </p>
        </div>
      </div>
    </div>
  );
}
