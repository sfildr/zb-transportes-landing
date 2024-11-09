import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main className="pt-32">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;