import React from 'react';
import { Truck, Package, Warehouse } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Truck,
    title: "Transporte de Grãos",
    description: "Transporte especializado de grãos com frota moderna e rastreamento em tempo real.",
    imageUrl: "https://images.unsplash.com/photo-1586191582056-b7f0a8c3a3c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Package,
    title: "Cargas Fracionadas",
    description: "Distribuição eficiente de cargas fracionadas para todo o território nacional.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Warehouse,
    title: "Armazenagem",
    description: "Armazenagem segura com controle de temperatura e umidade para seus produtos.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Truck,
    title: "Transporte Dedicado",
    description: "Soluções personalizadas de transporte com frota exclusiva para sua empresa.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
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
              className={index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;