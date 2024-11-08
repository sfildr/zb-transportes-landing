import React from 'react';
import ContactButton from './ContactButton';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-semi-truck-driving-on-a-road-41537-large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      
      {/* Truck Image */}
      <img
        src="https://images.unsplash.com/photo-1586191582056-b7f0372a3c4a?auto=format&fit=crop&w=800"
        alt="ZB Transportes Truck"
        className="absolute bottom-0 right-0 w-1/3 h-auto object-contain z-10 animate-fade-in-right"
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-left">
          ZB Transportes e Logística
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-right">
          Conectando o Brasil com eficiência e segurança, entregando mais que cargas: entregando compromisso.
        </p>
        <ContactButton className="animate-fade-in-left" />
      </div>
    </div>
  );
};

export default HeroSection;