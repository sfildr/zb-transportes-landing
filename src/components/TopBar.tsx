import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="w-full bg-black/90 text-white py-2">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Mail size={14} />
            <span>contato@zbtransportes.com.br</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;