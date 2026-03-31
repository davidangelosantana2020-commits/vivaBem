import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../constants";

export default function Sobre() {
  return (
    <div className="pt-32 pb-24 bg-surface text-on-surface">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Transparência</span>
            <h1 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight border-b border-outline-variant/30 pb-6">
              Sobre o Viva Bem e Melhor
            </h1>
          </motion.div>
        </header>

        {/* Conteúdo Principal - O seu texto exatamente como solicitado */}
        <article className="font-sans text-lg md:text-xl font-light leading-relaxed space-y-10">
          
          <p>
            Este espaço foi criado com um foco objetivo: selecionar e disponibilizar <strong>produtos naturais</strong> que realmente entregam o que prometem. No mercado de saúde e bem-estar, a seleção criteriosa é o nosso principal diferencial.
          </p>

          <p>
            Trabalhamos em duas frentes. Primeiro, na oferta de produtos com procedência garantida. Segundo, na produção de conteúdo prático, trazendo <strong>dicas e curiosidades</strong> para quem busca entender melhor o que consome.
          </p>

          <p>
            Não usamos clichês de "atendimento humanizado". Nosso foco é <strong>eficiência e resultado</strong>: o produto certo e a informação que funciona para quem busca uma vida mais saudável.
          </p>

        </article>

        {/* CTA Final */}
        <footer className="mt-20 pt-12 border-t border-outline-variant/30 text-center space-y-10">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-12 py-4 text-lg flex items-center gap-3"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
            <Link to="/produtos" className="group flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
              Ver Catálogo de Produtos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
