import { motion } from "motion/react";
import { ShieldAlert, HeartPulse, UserCheck, Activity, ExternalLink } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-secondary/30" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Aviso de Responsabilidade</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl text-primary mb-16 font-serif italic leading-[1.1] tracking-tight">
          Isenção de <br />
          <span className="text-secondary/80">Responsabilidade</span>
        </h1>
        
        <div className="space-y-16 text-on-surface-variant leading-relaxed">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <ShieldAlert size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Propósito Informativo</h2>
            </div>
            <p className="font-light text-lg leading-relaxed text-on-surface-variant/80">
              As informações compartilhadas no <span className="text-primary font-medium italic">Viva Bem e Melhor</span> são destinadas exclusivamente a fins educativos e inspiracionais. Elas não constituem aconselhamento médico, diagnóstico ou prescrição de qualquer natureza.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <Activity size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Individualidade e Resultados</h2>
            </div>
            <p className="font-light">
              Cada corpo é um universo único. Os resultados de rotinas de bem-estar e suplementação natural variam conforme a genética, estilo de vida e condições pré-existentes.
            </p>
            <div className="p-8 bg-secondary/5 rounded-[2rem] border border-secondary/10">
              <p className="text-primary font-serif italic text-xl mb-2">Não garantimos resultados específicos.</p>
              <p className="text-sm font-light leading-relaxed opacity-80">
                Nossas sugestões visam apoiar sua jornada de saúde, mas não prometemos curas ou transformações milagrosas. O progresso é um caminho individual e contínuo.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <HeartPulse size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Aconselhamento Profissional</h2>
            </div>
            <div className="grid gap-6">
              <div className="space-y-4">
                <h3 className="text-primary font-serif italic text-xl">Consulte seu Médico</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Antes de iniciar qualquer nova prática, dieta ou uso de suplementos, é fundamental consultar um profissional de saúde qualificado. Nunca ignore orientações médicas profissionais devido a conteúdos lidos em nosso portal.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary font-serif italic text-xl">Grupos Específicos</h3>
                <p className="text-sm font-light leading-relaxed opacity-80">
                  Gestantes, lactantes, crianças e pessoas com condições crônicas devem ter cautela redobrada e acompanhamento médico rigoroso ao introduzir novos elementos em sua rotina.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <UserCheck size={18} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Suplementação Natural</h2>
            </div>
            <p className="font-light text-on-surface-variant/80">
              Nossos produtos são classificados como suplementos alimentares e não como medicamentos. Eles visam complementar sua nutrição e apoiar o equilíbrio do organismo, não substituindo terapias médicas convencionais.
            </p>
          </section>

          <section className="space-y-8 pt-12 border-t border-outline-variant/20">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Links e Referências Externas</h2>
              <p className="font-light text-sm leading-relaxed opacity-80">
                Eventuais links para sites externos são fornecidos para sua conveniência. Não possuímos controle sobre o conteúdo ou práticas de privacidade desses ambientes de terceiros.
              </p>
              
              <div className="pt-4">
                <a 
                  href="/contato"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary transition-colors"
                >
                  Falar com nossa equipe <ExternalLink size={12} />
                </a>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">
                Viva Bem e Melhor • Informação com Responsabilidade • 2024
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
