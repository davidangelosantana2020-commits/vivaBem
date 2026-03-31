import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Zap, 
  Clock, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle 
} from "lucide-react";
import { WHATSAPP_URL } from "../constants";

export default function Beneficios() {
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Benefícios</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-primary leading-tight">
              O impacto da <br /> <span className="text-secondary/80">leveza real.</span>
            </h1>
            <p className="text-xl font-light text-on-surface-variant leading-relaxed">
              Descubra como pequenos hábitos diários podem transformar sua disposição, confiança e bem-estar geral.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
          {[
            {
              title: "Disposição Natural",
              desc: "Sinta-se com mais energia para encarar o dia, sem os picos e quedas de soluções artificiais.",
              icon: <Zap size={32} />,
              color: "bg-primary/5 text-primary",
              image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Equilíbrio Emocional",
              desc: "O autocuidado ajuda a reduzir o estresse e promove uma sensação de calma e controle.",
              icon: <Heart size={32} />,
              color: "bg-secondary/5 text-secondary",
              image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Rotina Prática",
              desc: "Nossas sugestões são pensadas para quem não tem tempo a perder, integrando-se facilmente ao seu dia.",
              icon: <Clock size={32} />,
              color: "bg-tertiary/5 text-tertiary",
              image: "https://images.unsplash.com/photo-1545208393-216c7f20c436?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Confiança Renovada",
              desc: "Cuidar de si mesma reflete na forma como você se vê e se apresenta ao mundo.",
              icon: <Sparkles size={32} />,
              color: "bg-primary/5 text-primary",
              image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
            }
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3rem] overflow-hidden editorial-shadow border border-outline-variant/10 flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-12 space-y-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-3xl font-serif italic text-primary">{benefit.title}</h3>
                <p className="text-lg font-light text-on-surface-variant leading-relaxed opacity-80">
                  {benefit.desc}
                </p>
                <div className="pt-4 flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors cursor-pointer group/link">
                  Saiba mais <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-surface-container-low p-12 md:p-24 rounded-[4rem] border border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Por Que Escolher</span>
                <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
                  Bem-estar com <br /> responsabilidade.
                </h2>
              </div>
              <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                Nossa abordagem prioriza a saúde integral e a ética na comunicação. Queremos que você se sinta segura e bem informada em cada etapa da sua jornada.
              </p>
              <ul className="space-y-6">
                {[
                  "Linguagem ética e transparente",
                  "Foco na saúde e bem-estar real",
                  "Apoio humanizado e personalizado",
                  "Respeito total à sua privacidade"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck size={14} className="text-primary" />
                    </div>
                    <span className="font-light text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-[2rem] overflow-hidden editorial-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600" 
                  alt="Trust" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden editorial-shadow pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Trust" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-40 text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
            Experimente a leveza <br /> no seu dia a dia.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-12 py-5 text-lg flex items-center gap-3"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
            <Link to="/proposta" className="btn-secondary px-12 py-5 text-lg">
              Conheça nossa proposta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
