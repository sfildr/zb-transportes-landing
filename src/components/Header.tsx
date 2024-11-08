import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="ZB Transportes" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-zb-orange transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-gray-800 hover:text-zb-orange transition-colors">
              Sobre Nós
            </Link>
            <Link to="/servicos" className="text-gray-800 hover:text-zb-orange transition-colors">
              Nossos Serviços
            </Link>
            <Link to="/contato" className="text-gray-800 hover:text-zb-orange transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;