import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroPoster } from './components/HeroPoster';
import { Agenda } from './components/Agenda';
import { AboutGAA } from './components/AboutGAA';
import { Footer } from './components/Footer';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('poster');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden min-h-[800px] transition-all duration-300">
          {activeTab === 'poster' ? (
            <div className="animate-fade-in">
              <HeroPoster />
            </div>
          ) : (
            <div className="animate-fade-in p-6 md:p-10 space-y-12">
              <section>
                <div className="border-l-4 border-ireland-orange pl-4 mb-6">
                  <h2 className="text-3xl font-bold text-ireland-green">Detailed Agenda</h2>
                  <p className="text-gray-600 mt-1">Full schedule of the seminar and panel discussions.</p>
                </div>
                <Agenda />
              </section>
              
              <section className="pt-8 border-t border-gray-100">
                 <div className="border-l-4 border-ireland-orange pl-4 mb-6">
                  <h2 className="text-3xl font-bold text-ireland-green">About Gaelic Games</h2>
                  <p className="text-gray-600 mt-1">Learn the rules, history, and culture behind the sport.</p>
                </div>
                <AboutGAA />
              </section>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;