import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input placeholder="Nome" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input placeholder="Assunto" />
            </div>
            <div>
              <Textarea placeholder="Mensagem" className="min-h-[150px]" />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-zb-orange to-zb-orange-light hover:opacity-90 transition-opacity shadow-lg"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;