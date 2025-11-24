import React from 'react';
import { Globe, Mail, ArrowRight } from 'lucide-react';

export const HeroPoster: React.FC = () => {
  return (
    <div className="relative w-full h-auto bg-white overflow-hidden flex flex-col font-sans">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 right-0 w-[400px] h-[600px] bg-ireland-orange rounded-bl-[200px] z-0 translate-x-[120px] -translate-y-[100px] opacity-90 hidden md:block"></div>
      <div className="absolute top-0 right-0 w-[25%] h-full bg-deep-green z-0 hidden md:block translate-x-1/2 rounded-l-full mix-blend-multiply opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-deep-green z-0 rounded-tl-full translate-y-24 translate-x-24"></div>

      {/* Dotted Pattern Top Right */}
      <div className="absolute top-12 right-12 grid grid-cols-4 gap-3 z-10 hidden md:grid">
         {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-deep-green rounded-full"></div>
         ))}
      </div>
      
      {/* --- Main Content Container --- */}
      <div className="relative z-10 w-full px-6 py-8 md:px-16 md:py-16 flex flex-col max-w-7xl mx-auto">
        
        {/* Header / Logos */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-12 md:mb-16 border-b md:border-none pb-4 md:pb-0 border-gray-100">
            <div className="flex items-center gap-3">
                 {/* NSTC Logo Mockup */}
                 <div className="flex flex-col items-start leading-none group">
                    <div className="flex items-center">
                        <span className="text-3xl font-black text-blue-800 italic tracking-tighter group-hover:scale-105 transition-transform">NSTC</span>
                    </div>
                    <span className="text-[0.65rem] font-bold text-gray-800">國家科學及技術委員會</span>
                    <span className="text-[0.55rem] text-gray-500 origin-left">National Science and Technology Council</span>
                 </div>
            </div>

            <div className="hidden md:block h-10 w-px bg-gray-300 mx-2"></div>

            <div className="flex items-center gap-2">
                 {/* NTUS Logo Mockup */}
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-900 shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 border-[3px] border-blue-900 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="text-[0.6rem] text-center font-black text-blue-900 leading-none">NTUS<br/>體大</div>
                 </div>
            </div>

            <div className="hidden md:block h-10 w-px bg-gray-300 mx-2"></div>
            
             {/* 31 Logo Mockup - British Academy Style */}
            <div className="flex items-center gap-2">
                 <div className="font-serif italic text-4xl font-bold text-black flex items-center">
                    3<span className="text-black transform -scale-x-100 inline-block ml-0.5">\</span>
                </div>
                <div className="flex flex-col leading-none justify-center ml-1">
                    <span className="font-serif font-bold text-xs text-gray-900">The</span>
                    <span className="font-serif font-bold text-xs text-gray-900">British</span>
                    <span className="font-serif font-bold text-xs text-gray-900">Academy</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row">
            
            {/* Left Column Content */}
            <div className="w-full md:w-3/5 flex flex-col z-20 pr-0 md:pr-10">
                
                {/* Title Section */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2">愛爾蘭蓋爾運動與台灣研討會</h2>
                <h1 className="text-6xl md:text-[5.5rem] font-black text-deep-green tracking-tight mb-4 leading-none drop-shadow-sm">
                    SEMINAR
                </h1>
                <h2 className="text-ireland-orange font-bold text-xl md:text-2xl leading-snug mb-10 max-w-2xl">
                    INTERCULTURAL CONNECTIONS AND<br/>
                    CITIZEN DIPLOMACY BETWEEN TAIWAN<br/>
                    AND IRELAND THROUGH GAELIC GAMES
                </h2>

                {/* Agenda Points */}
                <ul className="space-y-4 mb-12 text-gray-600 font-medium text-lg md:text-xl uppercase tracking-wide">
                    <li className="flex items-start">
                        <span className="mt-2.5 mr-4 w-2 h-2 bg-ireland-green rounded-full flex-shrink-0"></span>
                        PANEL DISCUSSION
                    </li>
                    <li className="flex items-start">
                        <span className="mt-2.5 mr-4 w-2 h-2 bg-ireland-green rounded-full flex-shrink-0"></span>
                        <span>TAIWAN CELTS GAA: HISTORY,<br/>IDENTITY AND ACTIVITIES</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mt-2.5 mr-4 w-2 h-2 bg-ireland-green rounded-full flex-shrink-0"></span>
                        <span>GAELIC GAMES IN ASIA: SPORTS<br/>DIPLOMACY & INTERCULTURAL<br/>NETWORKS</span>
                    </li>
                </ul>

                {/* Speaker List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-12 text-deep-green border-l-4 border-gray-100 pl-6">
                    <div>
                        <p className="font-black text-sm uppercase tracking-wider">CHAIRMAN. KEVIN MCCOY</p>
                        <p className="text-xs uppercase font-semibold text-gray-500">TAIWAN CELTS GAA</p>
                    </div>
                    <div>
                        <p className="font-black text-sm uppercase tracking-wider">DR. JUNGWOO LEE</p>
                        <p className="text-xs uppercase font-semibold text-gray-500">THE UNIVERSITY OF EDINBURGH</p>
                    </div>
                    <div>
                        <p className="font-black text-sm uppercase tracking-wider">DR. REN-SHIANG JIANG</p>
                        <p className="text-xs uppercase font-semibold text-gray-500">NATIONAL TAIWAN UNIVERSITY OF SPORT</p>
                    </div>
                     <div>
                        <p className="font-black text-sm uppercase tracking-wider">DR. JUNJAY LIN</p>
                        <p className="text-xs uppercase font-semibold text-gray-500">NATIONAL TAIWAN SPORT UNIVERSITY</p>
                    </div>
                </div>

                {/* Date / Time / Action */}
                <div className="mb-8 p-6 bg-gray-50/80 rounded-2xl backdrop-blur-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
                         <div>
                            <div className="text-3xl text-gray-700 font-light mb-1">
                                30 NOV 2025
                            </div>
                            <div className="flex flex-col text-gray-500 font-medium text-lg">
                                <div className="flex items-center mb-1">
                                    <span className="bg-ireland-green text-white text-xs font-bold px-2 py-1 rounded mr-2">VENUE</span>
                                    <span>國立臺灣體育運動大學 (NTUS)</span>
                                </div>
                                <span className="text-sm pl-12 text-gray-400">National Taiwan University of Sport</span>
                            </div>
                         </div>
                         <div className="md:ml-auto">
                             <div className="text-[3.5rem] md:text-[4.5rem] font-black text-deep-green tracking-tighter leading-none">
                                10:00 AM
                            </div>
                         </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <a 
                            href="mailto:sky40301084@gmail.com?subject=Seminar Registration&body=Hi, I would like to join the seminar on Nov 30."
                            className="bg-ireland-orange hover:bg-orange-600 text-white text-xl font-black py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center group"
                        >
                            <span className="mr-2">立即報名</span>
                            <span className="font-light opacity-80 text-lg mr-2">/</span>
                            <span>JOIN NOW</span>
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex flex-col">
                            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-1">LIMITED SEATS. PLEASE CONTACT</p>
                            <a href="mailto:sky40301084@gmail.com" className="flex items-center font-bold text-lg text-deep-green hover:text-ireland-orange transition-colors">
                                <Mail className="w-5 h-5 mr-2 text-ireland-orange" />
                                sky40301084@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Footer Info */}
                <div className="pt-4 border-t border-gray-100 md:border-none w-full max-w-lg">
                     <p className="font-bold text-[0.6rem] uppercase text-gray-500 tracking-wider leading-relaxed">
                        SUPPORTED BY<br/>
                        <span className="text-gray-800">NSTC-BA (BRITISH ACADEMY/LEVERHULME) SMALL RESEARCH GRANTS</span>
                    </p>
                </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="w-full md:w-2/5 relative mt-12 md:mt-0 flex items-center justify-center pointer-events-none">
                 {/* Image Circle - Positioned to overlap */}
                 <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] md:absolute md:top-12 md:-left-32 lg:-left-24">
                     <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                        {/* Using a dynamic sports image to match the energy */}
                        <img 
                            src="https://images.unsplash.com/photo-1544698310-74ea9d188c1b?q=80&w=2070&auto=format&fit=crop" 
                            alt="Gaelic Football Action" 
                            className="w-full h-full object-cover transform scale-125 translate-y-4 translate-x-4 filter contrast-125 saturate-150"
                        />
                        {/* Color overlay to match poster aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 to-orange-500/20 mix-blend-multiply"></div>
                     </div>
                     {/* Decorative circle behind */}
                     <div className="absolute top-4 -right-4 w-full h-full rounded-full border-4 border-ireland-orange/30 -z-10"></div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};