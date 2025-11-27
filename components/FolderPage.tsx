import React from 'react';
import { FOLDER_CONTENT } from '../constants';
import { OrangeSplash1, OrangeSplash2, PageCorner } from './Decorations';

interface PageProps {
  onFlip: () => void;
}

export const FrontPage: React.FC<PageProps> = ({ onFlip }) => {
  return (
    <div 
      onClick={onFlip}
      className="w-full h-full relative overflow-hidden cursor-pointer shadow-2xl"
    >
      <img 
        src="/1.png" 
        alt="Página Frontal - Viva! A Vida é uma Festa" 
        className="w-full h-full object-contain bg-[#1a1a1a]"
      />
    </div>
  );
};

export const BackPage: React.FC<PageProps> = ({ onFlip }) => {
  return (
    <div 
      onClick={onFlip}
      className="w-full h-full relative overflow-hidden cursor-pointer shadow-2xl"
    >
      <img 
        src="/2.png" 
        alt="Página Traseira - Viva! A Vida é uma Festa" 
        className="w-full h-full object-contain bg-[#1a1a1a]"
      />
    </div>
  );
};