import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                A ZB Transportes é uma empresa líder no setor de transportes e logística,
                com anos de experiência em entregas seguras e pontuais por todo o Brasil.
              </p>
              <p className="text-lg">
                Nossa missão é fornecer soluções logísticas eficientes e confiáveis,
                sempre priorizando a satisfação dos nossos clientes e a segurança da carga.
              </p>
              <p className="text-lg">
                Contamos com uma equipe altamente qualificada e uma frota moderna,
                garantindo a excelência em todos os nossos serviços.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Nossa Empresa"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;