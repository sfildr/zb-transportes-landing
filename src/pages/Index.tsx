import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import LocationSection from '../components/LocationSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <LocationSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;