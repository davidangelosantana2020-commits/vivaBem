import { Link, useLocation } from "react-router-dom";
import { WHATSAPP_URL } from "../constants";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl md:text-3xl font-serif italic text-primary">
          Viva Bem e Melhor
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-primary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors`}
          >
            Início
          </Link>
          <Link 
            to="/proposta" 
            className={`${isActive('/proposta') ? 'text-primary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors`}
          >
            Proposta
          </Link>
          <Link 
            to="/beneficios" 
            className={`${isActive('/beneficios') ? 'text-primary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors`}
          >
            Benefícios
          </Link>
          <Link 
            to="/produtos" 
            className={`${isActive('/produtos') ? 'text-primary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors`}
          >
            Produtos
          </Link>
          <Link 
            to="/blog" 
            className={`${isActive('/blog') ? 'text-primary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors`}
          >
            Blog
          </Link>
          <Link 
            to="/sobre" 
            className={`${isActive('/sobre') ? 'text-primary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors`}
          >
            Sobre
          </Link>
        </div>

        <a
          href={WHATSAPP_URL}
          className="bg-tertiary hover:bg-tertiary/90 text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all shadow-lg hover:shadow-xl"
        >
          Falar no WhatsApp
        </a>
      </div>
    </nav>
  );
}
