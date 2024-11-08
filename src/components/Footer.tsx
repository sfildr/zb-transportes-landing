import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Tel: (11) 99999-9999</p>
            <p>Email: contato@zbtransportes.com.br</p>
            <p>Av. das Transportadoras, 1000</p>
            <p>São Paulo - SP</p>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-zb-orange">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-zb-orange">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-zb-orange">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-zb-orange">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 12h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} ZB Transportes e Logística. &copy;André Pinheiro</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;