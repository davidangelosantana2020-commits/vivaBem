import { motion } from "motion/react";
import { ShieldCheck, Info, Settings, ExternalLink } from "lucide-react";

export default function Cookies() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-secondary/30" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Transparência Digital</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl text-primary mb-16 font-serif italic leading-[1.1] tracking-tight">
          Política de <br />
          <span className="text-secondary/80">Cookies</span>
        </h1>
        
        <div className="space-y-16 text-on-surface-variant leading-relaxed">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Info size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Essência e Propósito</h2>
            </div>
            <p className="font-light text-lg leading-relaxed text-on-surface-variant/80">
              Para que sua jornada em nosso ambiente digital seja fluida e personalizada, utilizamos <span className="text-primary font-medium italic">cookies</span>. Estes pequenos arquivos de dados nos permitem reconhecer suas preferências e oferecer uma experiência que ressoa com o seu estilo de vida.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <Settings size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Categorias de Experiência</h2>
            </div>
            
            <div className="grid gap-6">
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-8 bg-surface-container-low rounded-[2rem] border border-outline-variant/10 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-primary font-serif italic text-xl mb-3">Preferências de Navegação</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Estes cookies lembram suas escolhas individuais, como idioma ou região, garantindo que o site se comporte exatamente como você deseja em cada visita.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="p-8 bg-surface-container-low rounded-[2rem] border border-outline-variant/10 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-primary font-serif italic text-xl mb-3">Interação e Formulários</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Ao interagir com nossos formulários de contato ou consultoria, utilizamos cookies para facilitar preenchimentos futuros, tornando sua comunicação conosco mais ágil e humana.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <ShieldCheck size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Parcerias e Análise</h2>
            </div>
            <p className="font-light text-on-surface-variant/80">
              Contamos com ferramentas de análise de alta precisão, como o <span className="text-primary font-medium">Google Analytics</span>, para compreender como você navega. Isso nos permite otimizar conteúdos que realmente agregam valor à sua rotina de bem-estar.
            </p>
            <div className="pl-6 border-l border-secondary/20 space-y-4 py-2">
              <p className="text-sm font-light italic opacity-70">
                • Monitoramos o tempo de permanência e as páginas de maior interesse.
              </p>
              <p className="text-sm font-light italic opacity-70">
                • Testamos novas funcionalidades para garantir que sua experiência seja sempre premium e inovadora.
              </p>
            </div>
          </section>

          <section className="space-y-8 pt-12 border-t border-outline-variant/20">
            <div className="bg-primary/5 p-10 rounded-[2.5rem] space-y-6">
              <h2 className="text-primary font-serif italic text-2xl">Gestão de sua Privacidade</h2>
              <p className="font-light text-sm leading-relaxed opacity-80">
                Você possui total autonomia sobre seus dados. A desativação de cookies pode ser feita diretamente nas configurações do seu navegador. Contudo, ressaltamos que isso poderá limitar o acesso a certas funcionalidades elegantes e personalizadas de nosso portal.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="mailto:privacidade@vivabememelhor.com.br"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary transition-colors"
                >
                  Contatar DPO <ExternalLink size={12} />
                </a>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">
                Última atualização: Março de 2024 • Viva Bem e Melhor
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
