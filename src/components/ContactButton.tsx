import React from 'react';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className = "" }) => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-8 py-3 font-bold text-white rounded-full 
        bg-gradient-to-r from-zb-orange to-zb-orange-light 
        hover:scale-105 transition-all duration-300
        shadow-[0_10px_20px_rgba(255,107,0,0.3)]
        ${className}`}
    >
      Entre em Contato
    </a>
  );
};

export default ContactButton;