import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, MessageCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { WHATSAPP_URL } from "../constants";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
}

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "posts"), 
      orderBy("createdAt", "desc"), 
      limit(3)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        excerpt: doc.data().excerpt,
        category: doc.data().category,
      })) as Post[];
      setRecentPosts(fetchedPosts);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar posts recentes:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col bg-surface text-on-surface">
      
      {/* 1. HERO - DIRETO AO PONTO */}
      <section className="pt-32 pb-20 px-6 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Seleção Especializada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-primary leading-[1.1]">
              Onde o produto <br /> encontra a ciência.
            </h1>
            <p className="text-xl font-light text-on-surface-variant max-w-md leading-relaxed">
              Uma seleção rigorosa de produtos naturais aliada a dicas e curiosidades para quem busca eficiência e resultados reais.
            </p>
            <div className="flex gap-4">
              <Link to="/blog" className="btn-primary flex items-center gap-2">
                Ver Dicas & Blog <BookOpen size={18} />
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-video rounded-[2rem] overflow-hidden editorial-shadow">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Saúde e Valor" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VITRINE HÍBRIDA (PRODUTO + EXPLICAÇÃO) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12 border-b border-outline-variant/30 pb-6">
          <div>
            <h2 className="text-3xl font-serif italic text-primary">Destaques da Curadoria</h2>
            <p className="text-on-surface-variant font-light mt-2">O produto certo com a informação que funciona.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Exemplo de Bloco Híbrido 1 */}
          <div className="group space-y-6">
            <div className="aspect-square bg-surface-container-low rounded-[2.5rem] overflow-hidden border border-outline-variant/20 relative">
               <img 
                 src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                 alt="Produto" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                 referrerPolicy="no-referrer"
               />
               <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">Dica de Uso</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif italic text-primary">Óleos Essenciais & Cognição</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                Mais do que aroma, uma ferramenta para o foco. Descubra como a pureza do óleo influencia diretamente no resultado terapêutico que você busca.
              </p>
              <Link to="/blog/2" className="inline-flex items-center gap-2 font-medium text-secondary hover:underline underline-offset-4">
                Ler Artigo Técnico <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Exemplo de Bloco Híbrido 2 */}
          <div className="group space-y-6">
            <div className="aspect-square bg-surface-container-low rounded-[2.5rem] overflow-hidden border border-outline-variant/20 relative">
               <img 
                 src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
                 alt="Produto" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                 referrerPolicy="no-referrer"
               />
               <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">Curiosidade Técnica</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif italic text-primary">Suplementação Consciente</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                Por que a procedência garantida evita o desperdício? Entenda como ativos naturais de alta qualidade são absorvidos de forma mais eficiente pelo organismo.
              </p>
              <Link to="/blog/3" className="inline-flex items-center gap-2 font-medium text-secondary hover:underline underline-offset-4">
                Ver Curiosidade <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO BLOG / ÚLTIMAS DICAS */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Conteúdo & Ciência</span>
            <h2 className="text-4xl font-serif italic text-primary">Blog: Dicas e Curiosidades</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full flex justify-center py-12">
                <Loader2 className="animate-spin text-primary" size={32} />
              </div>
            ) : recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <div key={post.id} className="bg-white p-8 rounded-[2rem] editorial-shadow border border-outline-variant/10 hover:translate-y-[-5px] transition-transform">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{post.category}</span>
                  <h4 className="text-xl font-serif italic text-primary mt-4 mb-3">{post.title}</h4>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-primary group">
                    Ler artigo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-on-surface-variant/60 italic">
                Nenhum artigo disponível no momento.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL (FOCO EM CONSULTORIA/WHATSAPP) */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Atendimento Personalizado</span>
          <h2 className="text-4xl font-serif italic text-primary">
            Dúvidas sobre qual produto escolher? <br /> 
            Fale com nossa equipe especializada.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-4 flex items-center gap-3">
            <MessageCircle size={20} /> Consultar via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
