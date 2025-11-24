import React from 'react';
import { TabType } from '../types';
import { Menu, Info, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-ireland-green text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <div className="flex items-center space-x-2">
          <span className="text-2xl mr-2">☘️</span>
          <div>
            <h1 className="font-bold text-lg md:text-xl leading-tight">愛爾蘭蓋爾運動與台灣研討會</h1>
            <p className="text-xs text-green-100 hidden sm:block">Taiwan-Ireland Gaelic Games Seminar</p>
          </div>
        </div>

        <nav className="flex space-x-2 md:space-x-4">
          <button
            onClick={() => setActiveTab('poster')}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'poster'
                ? 'bg-white text-ireland-green shadow-lg'
                : 'bg-green-800/50 hover:bg-green-700 text-white'
            }`}
          >
            <Menu className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">海報 Poster</span>
            <span className="sm:hidden">Poster</span>
          </button>
          
          <button
            onClick={() => setActiveTab('details')}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'details'
                ? 'bg-white text-ireland-green shadow-lg'
                : 'bg-green-800/50 hover:bg-green-700 text-white'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">議程 Agenda</span>
            <span className="sm:hidden">Agenda</span>
          </button>
        </nav>
      </div>
    </header>
  );
};