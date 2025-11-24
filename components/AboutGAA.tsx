import React, { useState } from 'react';
import { RuleCard } from '../types';
import { Trophy, Move, Layout, Youtube, Facebook, Instagram, Play } from 'lucide-react';

interface BilingualRuleCard extends Omit<RuleCard, 'title' | 'description'> {
    titleZH: string;
    descriptionZH: string;
    descriptionEN: string;
}

const rules: BilingualRuleCard[] = [
  {
    titleZH: "得分 Scoring",
    descriptionZH: "進球 Goal (3分): 踢入球門網內（綠旗）。得分 Point (1分): 踢過橫樑上方（白旗）。",
    descriptionEN: "Goal (3 pts): Kick into the net. Point (1 pt): Kick over the crossbar.",
    icon: <Trophy className="w-8 h-8 text-ireland-orange" />
  },
  {
    titleZH: "移動 Movement",
    descriptionZH: "持球可跑動，但每四步必須進行一次「拍球」或「腳挑球」。注意：不可連續兩次拍球！",
    descriptionEN: "Players can run with the ball but must bounce or 'solo' (toe-tap) every 4 steps. No two consecutive bounces allowed!",
    icon: <Move className="w-8 h-8 text-ireland-green" />
  },
  {
    titleZH: "場地 The Pitch",
    descriptionZH: "每隊15人。球場比標準足球場大，球門呈H型。",
    descriptionEN: "15 players per side. The pitch is larger than a standard soccer field, featuring H-shaped goalposts.",
    icon: <Layout className="w-8 h-8 text-blue-600" />
  }
];

export const AboutGAA: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="space-y-8">
      
      {/* Intro Section */}
      <div className="bg-soft-bg p-8 rounded-2xl border-l-8 border-ireland-green shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-deep-green flex items-center">
            <span className="text-3xl mr-3">🏐</span> 關於蓋爾式足球 (About Gaelic Football)
        </h3>
        <p className="text-gray-800 leading-relaxed text-lg font-medium mb-3">
          「蓋爾式運動」（Gaelic Games）是愛爾蘭本土體育的總稱。其中，蓋爾式足球（Gaelic Football）與板棍球（Hurling）並列為愛爾蘭的兩大民族運動，由蓋爾運動協會（GAA）主導。
          這項運動融合了<strong>足球、籃球和橄欖球</strong>的元素，歷史可追溯至14世紀。
        </p>
        <p className="text-gray-500 leading-relaxed text-sm">
          Gaelic Games are the traditional sports played in Ireland, with Gaelic Football and Hurling being the most popular.
          Gaelic Football combines elements of soccer, basketball, and rugby. It is fast-paced, high-scoring, and physically demanding.
        </p>
      </div>

      {/* Video Embed */}
      <div 
        className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black relative group cursor-pointer"
        onClick={() => setVideoPlaying(true)}
      >
         <div className="aspect-video w-full relative">
            {!videoPlaying ? (
                <>
                    <img 
                        src="https://img.youtube.com/vi/IL7hTZ8C3MY/maxresdefault.jpg" 
                        alt="Gaelic Football" 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-14 bg-black/70 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 border border-white/20">
                            <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                    </div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h4 className="text-white font-bold text-xl mb-1">Gaelic Football Introduction</h4>
                        <p className="text-gray-200 text-sm flex items-center">
                            <Youtube className="w-4 h-4 mr-2 text-red-500" />
                            Watch the basics of the game
                        </p>
                     </div>
                </>
            ) : (
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/IL7hTZ8C3MY?autoplay=1" 
                    title="Gaelic Football Introduction" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            )}
         </div>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rules.map((rule, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
              {rule.icon}
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">{rule.titleZH}</h4>
            <p className="text-gray-800 mb-2 font-medium">{rule.descriptionZH}</p>
            <p className="text-xs text-gray-500 border-t border-gray-100 pt-2">{rule.descriptionEN}</p>
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-ireland-green transition-colors flex flex-col">
            <h4 className="font-bold text-lg mb-4 flex items-center text-deep-green">
                <span className="mr-2 text-2xl">🇹🇼</span> Taiwan Celts GAA
            </h4>
            <p className="text-gray-800 mb-2 font-medium">
                Taiwan Celts (est. 1995) 是國際 GAA 正式會員，致力於在台推廣愛爾蘭體育、文化與社群精神。
            </p>
             <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                Established in 1995, Taiwan Celts is a full member of the International GAA. We are dedicated to promoting Irish sports, culture, and community spirit in Taiwan.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100">
                 <div className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-semibold uppercase tracking-wide mr-auto self-center">
                    Est. 1995
                </div>
                <a 
                    href="https://www.facebook.com/TaiwanCeltsGAA/?locale=zh_TW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1877F2] hover:bg-[#1465d1] text-white rounded-lg text-sm font-bold transition-colors shadow-sm"
                >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                </a>
                <a 
                    href="https://www.instagram.com/taiwanceltsgaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white rounded-lg text-sm font-bold transition-opacity shadow-sm"
                >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                </a>
            </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-ireland-green transition-colors">
            <h4 className="font-bold text-lg mb-4 text-deep-green">Supported By</h4>
             <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-ireland-orange rounded-full mt-1.5 mr-2"></div>
                    NSTC (National Science and Technology Council)
                </li>
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-ireland-orange rounded-full mt-1.5 mr-2"></div>
                    The British Academy
                </li>
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-ireland-orange rounded-full mt-1.5 mr-2"></div>
                    National Taiwan University of Sport (NTUS)
                </li>
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-ireland-orange rounded-full mt-1.5 mr-2"></div>
                    University of Edinburgh
                </li>
            </ul>
        </div>
      </div>

    </div>
  );
};