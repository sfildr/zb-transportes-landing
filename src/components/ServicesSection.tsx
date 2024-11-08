import React from 'react';
import { Truck, Package, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-12 h-12 text-zb-orange" />,
    title: "Transporte Rodoviário",
    description: "Transporte seguro e eficiente para todo o território nacional."
  },
  {
    icon: <Package className="w-12 h-12 text-zb-orange" />,
    title: "Armazenagem",
    description: "Estrutura completa para armazenamento e gestão de estoque."
  },
  {
    icon: <Clock className="w-12 h-12 text-zb-orange" />,
    title: "Entregas Expressas",
    description: "Soluções rápidas para cargas urgentes e prioritárias."
  },
  {
    icon: <Shield className="w-12 h-12 text-zb-orange" />,
    title: "Carga Segura",
    description: "Monitoramento 24h e seguro para todas as cargas."
  }
];

const ServicesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-all duration-300
                ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;