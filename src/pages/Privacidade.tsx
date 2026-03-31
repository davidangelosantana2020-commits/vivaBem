import { motion } from "motion/react";
import { Lock, Eye, UserCheck, Mail, ShieldAlert } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-secondary/30" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Segurança de Dados</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl text-primary mb-16 font-serif italic leading-[1.1] tracking-tight">
          Política de <br />
          <span className="text-secondary/80">Privacidade</span>
        </h1>
        
        <div className="space-y-16 text-on-surface-variant leading-relaxed">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <UserCheck size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Compromisso com o Cuidado</h2>
            </div>
            <p className="font-light text-lg leading-relaxed text-on-surface-variant/80 italic">
              "No Viva Bem e Melhor, acreditamos que o cuidado começa com o respeito. Sua privacidade não é apenas uma obrigação legal, mas uma extensão do nosso compromisso com o seu bem-estar."
            </p>
            <p className="font-light">
              Esta política detalha como coletamos, protegemos e utilizamos suas informações em nosso ambiente digital, garantindo total transparência em cada etapa de sua jornada conosco.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <Eye size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Coleta Consciente</h2>
            </div>
            
            <div className="grid gap-8">
              <div className="space-y-4">
                <h3 className="text-primary font-serif italic text-xl">Dados de Identificação</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Coletamos informações como nome, e-mail e telefone apenas quando você os fornece voluntariamente — seja para receber nossa newsletter, solicitar uma consultoria ou adquirir nossos produtos.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-primary font-serif italic text-xl">Dados de Navegação</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Utilizamos tecnologias como cookies para entender suas preferências de navegação e oferecer conteúdos que realmente façam sentido para sua rotina de autocuidado.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Lock size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Proteção e Retenção</h2>
            </div>
            <p className="font-light text-on-surface-variant/80">
              Seus dados são armazenados em ambientes seguros e protegidos por protocolos de criptografia modernos. Retemos suas informações apenas pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido por lei.
            </p>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex items-start gap-4">
              <ShieldAlert size={20} className="text-secondary shrink-0 mt-1" />
              <p className="text-sm font-light italic opacity-70">
                Nunca compartilhamos suas informações pessoais publicamente ou com terceiros para fins comerciais, exceto quando estritamente necessário para a prestação de nossos serviços ou por determinação legal.
              </p>
            </div>
          </section>

          <section className="space-y-8 pt-12 border-t border-outline-variant/20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Mail size={18} className="text-secondary" />
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Seus Direitos e Contato</h2>
              </div>
              <p className="font-light text-sm leading-relaxed opacity-80">
                Você possui o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento. Para exercer esses direitos ou esclarecer dúvidas, nossa equipe de privacidade está à disposição.
              </p>
              
              <div className="pt-4">
                <p className="text-sm font-medium text-primary">
                  Canal Direto de Privacidade:
                </p>
                <a 
                  href="mailto:privacidade@vivabememelhor.com.br"
                  className="text-lg font-serif italic text-secondary hover:text-primary transition-colors"
                >
                  privacidade@vivabememelhor.com.br
                </a>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">
                Vigência: Março de 2024 • Viva Bem e Melhor • São Paulo, Brasil
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
