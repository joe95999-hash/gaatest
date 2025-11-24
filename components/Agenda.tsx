import React from 'react';
import { AgendaItem } from '../types';
import { Coffee, Clock } from 'lucide-react';

// Extended type for bilingual display inside the component
interface BilingualAgendaItem extends Omit<AgendaItem, 'topic' | 'subTopic' | 'speaker'> {
  topicZH: string;
  topicEN: string;
  speakerZH?: string;
  speakerEN?: string;
}

const agendaItems: BilingualAgendaItem[] = [
  {
    time: "10.00 - 10.10",
    topicZH: "歡迎與介紹",
    topicEN: "Welcome and Introductions",
    speakerZH: "Jung Woo Lee & Ren-Shiang Jiang",
    speakerEN: "",
    type: "session"
  },
  {
    time: "10.10 - 10.30",
    topicZH: "台灣蓋爾運動俱樂部：歷史與認同",
    topicEN: "Taiwan Celt GAA: History, Identity and Activities",
    speakerZH: "Kevin McCoy",
    speakerEN: "Taiwan Celts GAA",
    type: "session"
  },
  {
    time: "10.30 - 10.50",
    topicZH: "亞洲的蓋爾運動：體育外交與跨文化網絡",
    topicEN: "Gaelic Games in Asia: Sports Diplomacy and Intercultural Networks",
    speakerZH: "Dr. Jung Woo Lee",
    speakerEN: "University of Edinburgh",
    type: "session"
  },
  {
    time: "10.50 - 11.05",
    topicZH: "來自台灣的觀察",
    topicEN: "Observations from Taiwan",
    speakerZH: "Dr. Ren-Shiang Jiang",
    speakerEN: "National Taiwan University of Sport",
    type: "session"
  },
  {
    time: "11.05 - 11.20",
    topicZH: "中場休息",
    topicEN: "Coffee Break",
    type: "break"
  },
  {
    time: "11.20 - 11.40",
    topicZH: "專題座談",
    topicEN: "Panel Discussion",
    speakerZH: "主持人: Junjay Lin",
    speakerEN: "Panelists: Kevin, R.S. Jiang, J.W. Lee",
    type: "session"
  },
  {
    time: "11.40 - 11.50",
    topicZH: "問答時間",
    topicEN: "Q & A",
    speakerZH: "全體參與者",
    speakerEN: "All Participants",
    type: "session"
  }
];

export const Agenda: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-lg">
      <div className="bg-deep-green px-6 py-4 border-b border-green-800 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg flex items-center">
             <Clock className="w-5 h-5 mr-2 text-ireland-orange" />
             詳細議程 Programme
          </h3>
          <span className="text-green-200 text-sm font-medium">2025年11月30日 (週日)</span>
      </div>
      <table className="min-w-full divide-y divide-gray-100">
        <thead className="bg-soft-bg">
          <tr>
            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[15%]">
              Time
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[50%]">
              Topic
            </th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[35%]">
              Speaker
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {agendaItems.map((item, index) => {
            const isBreak = item.type === 'break';
            return (
              <tr 
                key={index} 
                className={`transition-colors duration-200 ${isBreak ? 'bg-orange-50/50 hover:bg-orange-100/50' : 'hover:bg-green-50/50'}`}
              >
                <td className="px-6 py-5 whitespace-nowrap text-sm font-semibold text-ireland-green align-top">
                   <div className="flex items-center">
                        {isBreak && <Coffee className="w-4 h-4 mr-2 text-ireland-orange flex-shrink-0" />}
                        <span className={isBreak ? "text-ireland-orange" : ""}>{item.time}</span>
                   </div>
                </td>
                <td className="px-6 py-5 align-top">
                  <div className={`font-bold text-lg mb-1 ${isBreak ? 'text-ireland-orange' : 'text-gray-900'}`}>
                    {item.topicZH}
                  </div>
                  <div className="text-gray-500 text-sm font-medium">{item.topicEN}</div>
                </td>
                <td className="px-6 py-5 align-top">
                  {item.speakerZH ? (
                      <div className="flex flex-col">
                          <span className="font-bold text-gray-800 text-sm">{item.speakerZH}</span>
                          {item.speakerEN && (
                             <span className="text-gray-500 text-xs mt-0.5">{item.speakerEN}</span>
                          )}
                      </div>
                  ) : (
                      <span className="text-gray-300">-</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};