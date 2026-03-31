import { motion } from "motion/react";
import { FileText, Scale, Copyright, AlertCircle, HelpCircle } from "lucide-react";

export default function Termos() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-secondary/30" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Acordo de Utilização</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl text-primary mb-16 font-serif italic leading-[1.1] tracking-tight">
          Termos de <br />
          <span className="text-secondary/80">Uso</span>
        </h1>
        
        <div className="space-y-16 text-on-surface-variant leading-relaxed">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <FileText size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Aceitação e Escopo</h2>
            </div>
            <p className="font-light text-lg leading-relaxed text-on-surface-variant/80">
              Ao navegar e utilizar o ecossistema digital do <span className="text-primary font-medium italic">Viva Bem e Melhor</span>, você concorda em cumprir estes termos, que visam garantir uma convivência harmônica e segura para todos os nossos membros.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <Scale size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Natureza Informativa</h2>
            </div>
            <p className="font-light">
              Todo o conteúdo disponibilizado — incluindo artigos, guias e sugestões de rotina — possui caráter estritamente informativo. Nosso objetivo é inspirar seu autocuidado, mas não substituímos o acompanhamento de profissionais de saúde qualificados.
            </p>
            <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
              <p className="text-sm font-light italic opacity-70">
                O uso das informações aqui contidas é de sua inteira responsabilidade. Recomendamos sempre a consulta médica antes de iniciar novas práticas de bem-estar.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <Copyright size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Propriedade Intelectual</h2>
            </div>
            <div className="grid gap-6">
              <div className="space-y-4">
                <h3 className="text-primary font-serif italic text-xl">Direitos Autorais</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  A identidade visual, textos, fotografias e marcas registradas são de propriedade exclusiva do Viva Bem e Melhor. A reprodução, modificação ou distribuição sem autorização prévia é estritamente proibida.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary font-serif italic text-xl">Licença de Uso Pessoal</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Concedemos a você uma licença limitada para visualizar e baixar materiais apenas para uso pessoal e não comercial, mantendo intactas todas as notas de propriedade.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <AlertCircle size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Limitações de Responsabilidade</h2>
            </div>
            <p className="font-light text-on-surface-variant/80">
              Embora busquemos a excelência e a precisão técnica, não garantimos que os materiais sejam isentos de erros ou que os resultados sejam idênticos para todos os usuários, dada a individualidade biológica de cada ser humano.
            </p>
          </section>

          <section className="space-y-8 pt-12 border-t border-outline-variant/20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <HelpCircle size={18} className="text-secondary" />
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Dúvidas e Atualizações</h2>
              </div>
              <p className="font-light text-sm leading-relaxed opacity-80">
                Reservamo-nos o direito de atualizar estes termos periodicamente para refletir melhorias em nossos serviços. Recomendamos a leitura regular desta página.
              </p>
              
              <div className="pt-4">
                <p className="text-sm font-medium text-primary">
                  Para esclarecimentos jurídicos:
                </p>
                <a 
                  href="mailto:contato@vivabememelhor.com.br"
                  className="text-lg font-serif italic text-secondary hover:text-primary transition-colors"
                >
                  contato@vivabememelhor.com.br
                </a>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">
                Atualizado em: Março de 2024 • Viva Bem e Melhor • Brasil
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
