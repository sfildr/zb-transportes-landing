import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import NumberCounter from './NumberCounter';

const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Fev', value: 2000 },
  { name: 'Mar', value: 1800 },
  { name: 'Abr', value: 2800 },
  { name: 'Mai', value: 3000 },
  { name: 'Jun', value: 3500 },
];

const StatsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Crescimento Constante
        </h2>
        
        <div className="mb-20 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#FF6B00" 
                strokeWidth={2}
                dot={{ fill: '#FF6B00' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <NumberCounter end={1000} suffix="+" prefix="" />
            <p className="text-gray-600 mt-2">Viagens Realizadas</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <NumberCounter end={50} suffix="M" prefix="" />
            <p className="text-gray-600 mt-2">Quilômetros Rodados</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <NumberCounter end={500} suffix="+" prefix="" />
            <p className="text-gray-600 mt-2">Clientes Satisfeitos</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <NumberCounter end={98} suffix="%" prefix="" />
            <p className="text-gray-600 mt-2">Entregas no Prazo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;