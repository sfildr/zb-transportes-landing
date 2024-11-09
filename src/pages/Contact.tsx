import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main className="pt-32">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;