import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Heart, Leaf, Sparkles, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../constants";

export default function Proposta() {
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Nossa Proposta</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-primary leading-tight">
              Um convite à <br /> <span className="text-secondary/80">vida leve.</span>
            </h1>
            <p className="text-xl font-light text-on-surface-variant leading-relaxed">
              Não acreditamos em fórmulas mágicas, mas no poder transformador da constância e do autocuidado gentil.
            </p>
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="space-y-32">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif italic text-primary">Autocuidado sem pressão.</h2>
              <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                Muitas vezes, a busca pelo bem-estar se torna mais uma tarefa estressante na lista. Nossa proposta é o oposto: queremos que o cuidado com você mesma seja o momento mais relaxante e esperado do seu dia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Rotinas de 5 minutos",
                  "Hábitos sustentáveis",
                  "Foco no progresso real",
                  "Respeito ao seu ritmo"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    <span className="text-sm font-light text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden editorial-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" 
                  alt="Meditação e calma" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden editorial-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Chá e relaxamento" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif italic text-primary">A força da constância.</h2>
              <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                Resultados duradouros não vêm da intensidade de um dia, mas da repetição de pequenos atos. No Viva Bem e Melhor, celebramos cada dia que você escolhe se priorizar, construindo uma base sólida para sua saúde e felicidade.
              </p>
              <blockquote className="border-l-4 border-secondary/30 pl-6 py-2 italic text-primary/70 font-serif text-xl">
                "O bem-estar é uma jornada, não um destino final."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-40 p-12 md:p-20 bg-surface-container-low rounded-[4rem] text-center space-y-10 border border-outline-variant/10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif italic text-primary">Pronta para abraçar essa nova rotina?</h2>
            <p className="text-lg font-light text-on-surface-variant leading-relaxed">
              Estamos aqui para apoiar cada passo do seu caminho rumo a uma vida mais leve e equilibrada.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-12 py-5 text-lg flex items-center gap-3"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
            <Link to="/contato" className="btn-secondary px-12 py-5 text-lg">
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
