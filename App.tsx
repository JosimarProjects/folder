import React, { useState } from 'react';
import { FrontPage, BackPage } from './components/FolderPage';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-900 to-zinc-900"></div>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-4xl h-[85vh] md:h-[800px] perspective-2000 relative z-10 flex flex-col items-center justify-center">
        
        {/* Flip Card Container */}
        <div 
          className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* FRONT */}
          <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-zinc-700 bg-zinc-800">
             <FrontPage onFlip={handleFlip} />
          </div>

          {/* BACK */}
          <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-zinc-700 bg-zinc-800 rotate-y-180">
             <BackPage onFlip={handleFlip} />
          </div>
        </div>

        {/* Mobile instruction (only shows if strictly needed, mostly handled in component) */}
        <div className="mt-6 md:mt-8 flex gap-4">
             <button 
                onClick={handleFlip}
                className="bg-zinc-800 hover:bg-zinc-700 text-orange-500 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg border border-orange-500/20 transition-all active:scale-95"
             >
                {isFlipped ? 'Voltar' : 'Abrir Folder'}
             </button>
        </div>
      </main>

      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;