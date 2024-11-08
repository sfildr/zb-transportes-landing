import React from 'react';
import ContactButton from './ContactButton';

const LocationSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl font-bold mb-6">Como nos Encontrar</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Endereço:</strong><br />
                Av. das Transportadoras, 1000<br />
                São Paulo - SP
              </p>
              <p>
                <strong>Telefone:</strong><br />
                (11) 99999-9999
              </p>
              <p>
                <strong>Email:</strong><br />
                contato@zbtransportes.com.br
              </p>
              <div className="pt-6">
                <ContactButton />
              </div>
            </div>
          </div>
          
          <div className="h-[400px] animate-fade-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870299253!2d-46.6522702!3d-23.5645229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9d5d52c6bf3f!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709669136981!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;