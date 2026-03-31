import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Blog from "./pages/Blog";
import Proposta from "./pages/Proposta";
import Beneficios from "./pages/Beneficios";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Disclaimer from "./pages/Disclaimer";
import Cookies from "./pages/Cookies";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col scroll-smooth">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Loja />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/proposta" element={<Proposta />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
