import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="ZB Transportes" className="h-8" />
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-zb-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="text-gray-800 hover:text-zb-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos" 
                className="text-gray-800 hover:text-zb-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossos Serviços
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-800 hover:text-zb-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;