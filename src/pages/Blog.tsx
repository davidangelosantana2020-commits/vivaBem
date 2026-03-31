import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Search, Clock, User, MessageCircle, Loader2 } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  collection, 
  onSnapshot, 
  query, 
  orderBy, 
  doc,
  getDoc
} from "firebase/firestore";
import { db } from "../firebase";
import { WHATSAPP_URL } from "../constants";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  img: string;
  createdAt?: any;
}

export default function Blog() {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribePosts = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
      setPosts(fetchedPosts);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao buscar posts:", error);
      setLoading(false);
    });

    return () => {
      unsubscribePosts();
    };
  }, []);

  useEffect(() => {
    if (id) {
      const fetchSinglePost = async () => {
        setLoading(true);
        try {
          const docRef = doc(db, "posts", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentPost({ id: docSnap.id, ...docSnap.data() } as Post);
          } else {
            setCurrentPost(null);
          }
        } catch (error) {
          console.error("Erro ao buscar post:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSinglePost();
    } else {
      setCurrentPost(null);
    }
  }, [id]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && !posts.length) {
    return (
      <div className="pt-32 pb-24 bg-surface min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  if (id && currentPost) {
    return (
      <div className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-secondary mb-12 hover:underline">
            <ArrowRight size={14} className="rotate-180" /> Voltar ao Blog
          </Link>
          
          <article className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-secondary">
                <span>{currentPost.category}</span>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <span>{currentPost.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
                {currentPost.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <User size={14} /> {currentPost.author}
              </div>
            </div>

            <div className="aspect-video rounded-[2rem] overflow-hidden editorial-shadow">
              <img 
                src={currentPost.img} 
                alt={currentPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="font-sans text-lg md:text-xl font-light leading-relaxed text-on-surface-variant space-y-6">
              <p>{currentPost.content}</p>
              <p>Para saber mais sobre como aplicar esses conhecimentos no seu dia a dia, consulte nossa equipe especializada via WhatsApp.</p>
            </div>

            <div className="pt-12 border-t border-outline-variant/20">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                <MessageCircle size={20} /> Consultar Especialista
              </a>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header do Blog */}
        <header className="mb-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold italic">Conteúdo & Ciência</span>
              <h1 className="text-5xl md:text-6xl font-serif italic text-primary">Dicas e Curiosidades</h1>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Barra de Busca */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={18} />
                <input 
                  type="text" 
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-full focus:outline-none focus:border-primary/30 font-sans text-sm"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Grade de Posts */}
        <div className="min-h-[400px]">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={post.id} 
                  className="group bg-white rounded-[2rem] overflow-hidden editorial-shadow border border-outline-variant/10 flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-secondary">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif italic text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm font-light text-on-surface-variant leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                      <span className="flex items-center gap-2 text-[10px] font-medium text-on-surface-variant">
                        <User size={12} /> {post.author}
                      </span>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                        Ler mais <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-6">
              <div className="space-y-2">
                <p className="text-2xl font-serif italic text-primary">O Blog ainda está vazio.</p>
                <p className="text-sm font-light text-on-surface-variant max-w-md mx-auto">
                  Estamos preparando conteúdos incríveis para você. Volte em breve!
                </p>
              </div>
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="text-secondary font-bold hover:underline">Limpar busca</button>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
