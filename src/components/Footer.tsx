import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../constants";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { db, collection, addDoc, serverTimestamp } from "../firebase";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      await addDoc(collection(db, "newsletter"), {
        email: email,
        createdAt: serverTimestamp(),
      });
      setSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Erro ao salvar e-mail:", error);
      // Aqui poderíamos mostrar um erro amigável no UI
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-surface-container border-t border-outline-variant/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-20 p-10 md:p-16 bg-white rounded-[3rem] editorial-shadow border border-outline-variant/10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md space-y-4 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Newsletter</span>
            <h3 className="text-3xl md:text-4xl font-serif italic text-primary leading-tight">
              Dicas semanais de bem-estar na sua caixa de entrada.
            </h3>
            <p className="text-sm font-light text-on-surface-variant leading-relaxed">
              Receba conteúdos exclusivos sobre ativos naturais, ciência e saúde diretamente da nossa curadoria.
            </p>
          </div>

          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="relative group"
                >
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail" 
                    className="w-full pl-6 pr-32 py-5 bg-surface-container-low border border-outline-variant/20 rounded-full focus:outline-none focus:border-primary/30 font-sans text-sm transition-all"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-2 bottom-2 px-8 bg-tertiary text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
                  >
                    {isLoading ? "Enviando..." : (
                      <>Inscrever <Send size={14} /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif italic text-xl text-primary">Inscrição confirmada!</p>
                    <p className="text-sm font-light text-on-surface-variant">Obrigada por se juntar a nós. Em breve você receberá sua primeira dica.</p>
                  </div>
                  <button 
                    onClick={() => setSubscribed(false)}
                    className="text-[10px] uppercase tracking-widest font-bold text-secondary hover:underline"
                  >
                    Inscrever outro e-mail
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif italic text-primary">
              Viva Bem e Melhor
            </Link>
            <p className="text-sm font-light text-on-surface-variant leading-relaxed">
              Pequenos cuidados diários para uma vida mais leve. Nossa missão é apoiar sua jornada de bem-estar com praticidade e leveza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/proposta" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Proposta</Link>
              </li>
              <li>
                <Link to="/beneficios" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Benefícios</Link>
              </li>
              <li>
                <Link to="/produtos" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Produtos</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacidade" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Privacidade</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Cookies</Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Isenção de Responsabilidade</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-light text-on-surface-variant">
                <Mail size={16} className="text-secondary" />
                <span>{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm font-light text-on-surface-variant">
                <Phone size={16} className="text-secondary" />
                <span>{CONTACT_PHONE}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60">
            © {currentYear} Viva Bem e Melhor. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 italic">
            Beleza e bem-estar em cada detalhe.
          </p>
        </div>
      </div>
    </footer>
  );
}
