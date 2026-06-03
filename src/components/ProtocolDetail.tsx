import React, { useState } from 'react';
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  XOctagon, 
  ShieldAlert, 
  PhoneCall, 
  Search,
  BookOpen,
  Info
} from 'lucide-react';
import { Protocol } from '../types';
import * as Icons from 'lucide-react';
// @ts-ignore
import imgComigoNinguemPode from '../assets/images/assets/.aistudio/input_file_0.png';
// @ts-ignore
import imgMamona from '../assets/images/mamona_plant_1780453551721.png';
// @ts-ignore
import imgCopoDeLeite from '../assets/images/copo_de_leite_plant_1780453770674.png';
// @ts-ignore
import imgEspadaDeSaoJorge from '../assets/images/espada_de_sao_jorge_1780453932681.png';
// @ts-ignore
import imgBicoDePapagaio from '../assets/images/bico_de_papagaio_1780454078038.png';
// @ts-ignore
import imgCoroaDeCristo from '../assets/images/coroa_de_cristo_plant_1780454392238.png';
// @ts-ignore
import imgJararaca from '../assets/images/jararaca_snake_1780454592855.png';
// @ts-ignore
import imgCascavel from '../assets/images/cascavel_snake_1780454753376.png';
// @ts-ignore
import imgSurucucu from '../assets/images/surucucu_snake_1780454942695.png';
// @ts-ignore
import imgCoral from '../assets/images/coral_snake_1780455147922.png';

// Placeholders associated with local resources (res/drawable)
const renderLocalGraphic = (imageId: string, isDarkMode: boolean = false) => {
  if (imageId === 'img_comigo_ninguem_pode') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgComigoNinguemPode} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Comigo-ninguém-pode" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_mamona') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgMamona} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Mamona (Carrapateira)" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_copo_de_leite') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgCopoDeLeite} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Copo-de-leite" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_espada_de_sao_jorge') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgEspadaDeSaoJorge} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Espada-de-São-Jorge" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_bico_de_papagaio') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgBicoDePapagaio} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Bico-de-papagaio (Poinsétia)" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_coroa_de_cristo') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgCoroaDeCristo} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Coroa-de-cristo" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_jararaca') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgJararaca} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Jararaca" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_cascavel') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgCascavel} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Cascavel" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_surucucu') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgSurucucu} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Surucucu-pico-de-jaca" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  if (imageId === 'img_coral') {
    return (
      <div className="flex flex-col items-center justify-center py-2 select-none w-full">
        <img 
          src={imgCoral} 
          className="w-full h-auto max-w-sm rounded-[24px] object-cover shadow-md border-4 border-white bg-white" 
          alt="Coral-verdadeira" 
          referrerPolicy="no-referrer" 
        />
      </div>
    );
  }

  const renderVector = () => {
    switch (imageId) {
      case 'img_jararaca':
        return (
          <svg className="w-24 h-24 text-amber-850 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M 50,85 C 90,85 90,55 70,55 C 50,55 30,35 55,20 C 65,15 70,25 70,30" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="50" cy="20" r="3" fill="currentColor"/>
            <path d="M 45,21 L 40,23" stroke="currentColor" strokeWidth="1.5"/>
            <polygon points="46,16 54,16 50,26" fill="currentColor"/>
          </svg>
        );
      case 'img_cascavel':
        return (
          <svg className="w-24 h-24 text-amber-600 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M 30,85 C 10,80 15,50 35,50 C 60,50 75,30 55,15 C 45,8 35,15 40,25" strokeWidth="4" strokeLinecap="round" />
            <polygon points="36,22 44,22 40,32" fill="currentColor"/>
            <rect x="25" y="80" width="8" height="10" rx="2" fill="currentColor" opacity="0.8"/>
            <rect x="33" y="78" width="8" height="14" rx="3" fill="currentColor" opacity="0.6"/>
            <circle cx="40" cy="25" r="2.5" fill="black"/>
          </svg>
        );
      case 'img_surucucu':
        return (
          <svg className="w-24 h-24 text-amber-900 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M 20,75 C 40,95 80,95 80,65 C 80,45 40,35 60,15 C 65,10 75,12 70,25" strokeWidth="5.5" strokeLinecap="round"/>
            <polygon points="56,12 64,12 60,22" fill="currentColor"/>
            <circle cx="45" cy="75" r="2.5" fill="black" opacity="0.5"/>
            <circle cx="65" cy="65" r="2.5" fill="black" opacity="0.5"/>
            <path d="M 75,60 L 78,57 M 78,65 L 81,63" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'img_coral':
        return (
          <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100" fill="none" strokeWidth="2">
            <path d="M 15,50 C 40,20 60,80 85,50" stroke="red" strokeWidth="8" strokeLinecap="round" />
            <path d="M 25,48 L 29,46 M 45,43 L 49,46 M 70,55 L 75,52" stroke="black" strokeWidth="9" />
            <path d="M 35,42 L 39,43 M 55,50 L 59,53 M 62,56 L 66,57" stroke="yellow" strokeWidth="8" />
            <polygon points="80,46 88,46 84,54" fill="black"/>
          </svg>
        );
      case 'img_mamona':
        return (
          <svg className="w-24 h-24 text-emerald-750 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M 50,55 L 50,15 M 50,55 L 85,35 M 50,55 L 75,75 M 50,55 L 25,75 M 50,55 L 15,35" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="50,15 65,22 85,35 70,50 75,75 50,60 25,75 30,50 15,35 35,22" fill="currentColor" fillOpacity="0.1" />
            <circle cx="80" cy="75" r="8" fill="brown" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 80,65 L 80,62 M 70,75 L 67,75 M 90,75 L 93,75" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  const vector = renderVector();
  if (!vector) return null;

  return (
    <div className={`flex flex-col items-center justify-center p-3 rounded-2xl relative overflow-hidden select-none border transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-150'
    }`}>
      <div className={`absolute inset-0 pointer-events-none ${isDarkMode ? 'bg-blue-950/5' : 'bg-blue-50/10'}`} />
      <div className="relative z-10 my-1">
        {vector}
      </div>
    </div>
  );
};

interface ProtocolDetailProps {
  protocol: Protocol;
  onBack: () => void;
  isDarkMode?: boolean;
}

export const ProtocolDetail: React.FC<ProtocolDetailProps> = ({ protocol, onBack, isDarkMode = false }) => {
  const [catalogSearch, setCatalogSearch] = useState<string>('');

  // Map Lucide icons safely
  const getIcon = (name: string) => {
    const LucideIcon = (Icons as any)[name];
    if (LucideIcon) {
      return <LucideIcon className="w-6 h-6 text-blue-600" />;
    }
    return <BookOpen className="w-6 h-6 text-blue-600" />;
  };

  // Severity style configuration
  const getSeverityStyle = (severity: string) => {
    if (isDarkMode) {
      switch (severity) {
        case 'critical':
          return {
            bg: 'bg-slate-900 border-red-900/60 shadow-sm text-slate-100',
            badge: 'bg-red-650 text-white shadow-md shadow-red-955/25 font-bold',
            badgeText: 'Emergência Crítica (Risco de Morte)',
            immediateBg: 'bg-red-955 border-l-4 border-red-650 text-red-105 font-semibold border-t border-r border-b border-red-950'
          };
        case 'urgent':
          return {
            bg: 'bg-slate-900 border-amber-900/40 shadow-sm text-slate-100',
            badge: 'bg-amber-600 text-slate-950 shadow-md shadow-amber-955/15 font-black',
            badgeText: 'Urgência Médica',
            immediateBg: 'bg-amber-955 border-l-4 border-amber-500 text-amber-105 font-semibold border-t border-r border-b border-amber-955'
          };
        case 'moderate':
          return {
            bg: 'bg-slate-900 border-blue-900/50 shadow-sm text-slate-100',
            badge: 'bg-blue-600 text-white shadow-md shadow-blue-955/15' + ' font-bold',
            badgeText: 'Intervenção Moderada',
            immediateBg: 'bg-blue-955 border-l-4 border-blue-600 text-blue-105 font-semibold border-t border-r border-b border-blue-950'
          };
        case 'informative':
        default:
          return {
            bg: 'bg-slate-900 border-slate-800 shadow-sm text-slate-100',
            badge: 'bg-slate-700 text-white font-bold',
            badgeText: 'Suporte Informativo',
            immediateBg: 'bg-slate-850 text-slate-100 border-l-4 border-blue-600 font-semibold border-t border-r border-b border-slate-800'
          };
      }
    } else {
      switch (severity) {
        case 'critical':
          return {
            bg: 'bg-white border-red-200 shadow-sm',
            badge: 'bg-red-650 text-white shadow-md shadow-red-100 font-bold',
            badgeText: 'Emergência Crítica (Risco de Morte)',
            immediateBg: 'bg-red-50 border-l-4 border-red-600 text-red-950 font-semibold'
          };
        case 'urgent':
          return {
            bg: 'bg-white border-amber-200 shadow-sm',
            badge: 'bg-amber-500 text-slate-950 shadow-md shadow-amber-100 font-black',
            badgeText: 'Urgência Médica',
            immediateBg: 'bg-amber-50 border-l-4 border-amber-500 text-slate-805 font-semibold'
          };
        case 'moderate':
          return {
            bg: 'bg-white border-blue-100 shadow-sm',
            badge: 'bg-blue-600 text-white shadow-md shadow-blue-105 font-bold',
            badgeText: 'Intervenção Moderada',
            immediateBg: 'bg-blue-50 border-l-4 border-blue-600 text-blue-950 font-semibold'
          };
        case 'informative':
        default:
          return {
            bg: 'bg-white border-slate-200 shadow-sm',
            badge: 'bg-slate-700 text-white font-bold',
            badgeText: 'Suporte Informativo',
            immediateBg: 'bg-slate-50 text-slate-900 border-l-4 border-blue-600 font-semibold'
          };
      }
    }
  };

  const currentStyles = getSeverityStyle(protocol.severity);

  // Filter Catalog database for snakes or plants if available
  const filteredCatalog = protocol.catalog?.filter((item) => {
    const query = catalogSearch.toLowerCase().trim();
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      (item.scientificName && item.scientificName.toLowerCase().includes(query)) ||
      item.description.toLowerCase().includes(query) ||
      item.symptoms.some((s) => s.toLowerCase().includes(query))
    );
  });

  return (
    <div className={`w-full flex flex-col min-h-screen pb-24 font-sans transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-sky-50 text-slate-950'
    }`}>
      {/* Dynamic Header */}
      <header className={`sticky top-0 z-30 px-4 py-3 shrink-0 shadow-sm border-b transition-colors duration-300 backdrop-blur-md ${
        isDarkMode ? 'bg-slate-900/95 border-slate-850' : 'bg-white/95 border-blue-105'
      }`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            id="btn_back_to_list"
            onClick={onBack}
            className={`flex items-center gap-1.5 text-xs font-extrabold transition-colors py-2 px-1.5 select-none active:scale-95 cursor-pointer ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao menu
          </button>
          
          <div className="flex items-center gap-2">
            <span className={`text-[9px] uppercase font-mono tracking-wider font-extrabold py-1 px-3 rounded-full shadow-sm ${currentStyles.badge}`}>
              {currentStyles.badgeText}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-2xl w-full mx-auto p-4 space-y-6 flex-1">
        {/* Title & Short Description */}
        <div className={`border rounded-3xl p-6 relative overflow-hidden shadow-sm ${
          isDarkMode ? 'bg-slate-900 border-slate-850 text-slate-100' : 'bg-white border-blue-100 text-slate-800'
        }`}>
          <div className="absolute top-5 right-5 animate-pulse opacity-20 pointer-events-none">
            {getIcon(protocol.icon)}
          </div>
          
          <p className={`text-[11px] font-black uppercase tracking-widest mb-1.5 font-mono select-none ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {protocol.meta}
          </p>
          <h2 className={`text-2xl font-black leading-tight mb-2 select-all ${
            isDarkMode ? 'text-white' : 'text-blue-950'
          }`}>
            {protocol.title}
          </h2>
          <p className={`text-sm leading-relaxed font-semibold ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {protocol.shortDesc}
          </p>
        </div>

        {/* 🚨 CRITICAL IMMEDIATE ACTION CALLOUT */}
        <div className={`p-5 rounded-2xl border shadow-sm ${currentStyles.immediateBg} relative overflow-hidden flex flex-col gap-2`}>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h3 className="font-extrabold text-[13px] uppercase tracking-wider font-mono select-none">Ação Imediata (5 Primeiros Segundos)</h3>
          </div>
          <p className="text-[15px] md:text-[17px] font-black leading-relaxed">
            {protocol.immediateAction}
          </p>
        </div>

        {/* STEP BY STEP PROTOCOLS */}
        <div className={`rounded-3xl p-6 space-y-5 shadow-sm border ${
          isDarkMode ? 'bg-slate-900 border-slate-850 text-slate-100' : 'bg-white border-blue-100 text-slate-800'
        }`}>
          <h3 className={`text-base font-black flex items-center gap-2 border-b pb-3 ${
            isDarkMode ? 'text-white border-slate-800' : 'text-blue-950 border-blue-50'
          }`}>
            <span className={`w-1.5 h-4 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`} />
            Guia Passo a Passo Offline
          </h3>
          
          <div className="space-y-3.5">
            {protocol.steps.map((step, index) => {
              // Highlight code items inside steps
              const isSubStepX = step.startsWith('X -');
              const isSubStepA = step.startsWith('A -');
              const isSubStepB = step.startsWith('B -');
              const isSubStepC = step.startsWith('C -');
              const isSubStepD = step.startsWith('D -');
              const isSubStepE = step.startsWith('E -');
              const isXabcde = isSubStepX || isSubStepA || isSubStepB || isSubStepC || isSubStepD || isSubStepE;

              return (
                <div 
                  key={index} 
                  className={`flex gap-3.5 items-start p-4 rounded-2xl border transition-all ${
                    isDarkMode 
                      ? isXabcde 
                        ? 'bg-blue-955/20 border-blue-900/40 shadow-xs' 
                        : 'bg-slate-950/20 border-slate-855'
                      : isXabcde 
                        ? 'bg-blue-50/50 border-blue-150 shadow-xs' 
                        : 'bg-slate-50/50 border-slate-100'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full text-white font-extrabold font-mono text-xs flex items-center justify-center shrink-0 select-none shadow-sm ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className={`text-sm leading-relaxed font-bold ${
                    isDarkMode ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    {step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ❌ WHAT NOT TO DO (FORBIDDEN) */}
        <div className={`rounded-3xl p-6 space-y-5 shadow-sm border ${
          isDarkMode 
            ? 'bg-red-955/10 border-red-900/40 text-red-100' 
            : 'bg-red-50/60 border-red-150 text-red-955'
        }`}>
          <h3 className={`text-base font-black flex items-center gap-2 border-b pb-3 select-none ${
            isDarkMode ? 'text-red-300 border-red-950' : 'text-red-800 border-red-100'
          }`}>
            <XOctagon className={`w-5 h-5 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
            O que NÃO fazer (Contra-indicações Críticas)
          </h3>
          <ul className="space-y-3">
            {protocol.forbidden.map((forb, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full shrink-0 mt-1.5" />
                <span className={`text-[13px] leading-relaxed font-semibold ${
                  isDarkMode ? 'text-red-200/90' : 'text-red-900'
                }`}>{forb}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SPECIAL SYSTEM CATALOG: SNAKES OR TOXIC PLANTS */}
        {protocol.catalog && (
          <div className={`rounded-3xl p-6 space-y-5 shadow-sm border ${
            isDarkMode ? 'bg-slate-905 border-slate-850 text-slate-200' : 'bg-white border-blue-100 text-slate-850'
          }`}>
            <div className={`pb-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b ${
              isDarkMode ? 'border-slate-800' : 'border-blue-50'
            }`}>
              <h3 className={`text-base font-black flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-blue-900'
              }`}>
                <BookOpen className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                {protocol.catalogTitle || 'Catálogo de Consulta Offline'}
              </h3>
              
              {/* Internal search field for the offline catalog */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Pesquisar no catálogo..."
                  value={catalogSearch}
                  onChange={(e) => setCatalogSearch(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors font-medium ${
                    isDarkMode 
                      ? 'bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-600 focus:ring-blue-600' 
                      : 'bg-slate-50 border border-blue-100 text-slate-800 placeholder-slate-400 focus:border-blue-500'
                  }`}
                />
              </div>
            </div>

            {filteredCatalog && filteredCatalog.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4 font-bold">Nenhum espécime correspondente encontrado.</p>
            ) : (
              <div className="space-y-6">
                {filteredCatalog?.map((item) => (
                  <div key={item.id} className={`rounded-3xl p-5 space-y-4 relative overflow-hidden shadow-xs border ${
                    isDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-55 border-blue-100'
                  }`}>
                    {/* Danger Rating Badge */}
                    <div className={`flex items-center justify-between gap-2 border-b pb-2 ${
                      isDarkMode ? 'border-slate-850' : 'border-blue-50'
                    }`}>
                      <div>
                        <h4 className={`text-[15px] font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          {item.name}
                        </h4>
                        {item.scientificName && (
                          <p className={`text-xs italic font-serif font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {item.scientificName}
                          </p>
                        )}
                      </div>
                      
                      <span className={`text-[9px] uppercase font-mono tracking-wider font-extrabold py-0.5 px-2.5 rounded-full border ${
                        isDarkMode
                          ? item.dangerLevel === 'high'
                            ? 'bg-red-955 text-red-300 border-red-900/60'
                            : item.dangerLevel === 'medium'
                              ? 'bg-amber-955 text-amber-300 border-amber-900/60'
                              : 'bg-emerald-955 text-emerald-300 border-emerald-900/60'
                          : item.dangerLevel === 'high' 
                            ? 'bg-red-50 text-red-700 border-red-200' 
                            : item.dangerLevel === 'medium'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-250'
                      }`}>
                        Perigo: {item.dangerLevel === 'high' ? 'Alto' : item.dangerLevel === 'medium' ? 'Médio' : 'Baixo'}
                      </span>
                    </div>

                    {/* Local stored graphic loader */}
                    {item.image && renderLocalGraphic(item.image, isDarkMode)}

                    {/* Interactive silhouette/pattern visual tag */}
                    <div className={`p-4 rounded-xl border flex items-start gap-2.5 shadow-xs ${
                      isDarkMode ? 'bg-blue-955/20 border-blue-900/40' : 'bg-blue-50/50 border-blue-100'
                    }`}>
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
                      <p className={`text-xs leading-relaxed font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        <strong className={`select-none ${isDarkMode ? 'text-blue-400' : 'text-blue-650'}`}>Identificador Visual:</strong> {item.visualIdentifier}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h5 className={`text-[11px] font-black uppercase tracking-widest font-mono select-none ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Descrição Física</h5>
                      <p className={`text-xs leading-relaxed font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Symptoms */}
                    <div className={`space-y-2 p-4 rounded-xl border ${
                      isDarkMode ? 'bg-red-955/15 border-red-900/40' : 'bg-red-50/40 border-red-150'
                    }`}>
                      <h5 className={`text-[11px] font-black uppercase tracking-widest font-mono flex items-center gap-1 select-none ${isDarkMode ? 'text-red-300' : 'text-red-800'}`}>
                        <AlertCircle className={`w-3.5 h-3.5 ${isDarkMode ? 'text-red-405' : 'text-red-600'}`} />
                        Sintomas do Envenenamento / Contato
                      </h5>
                      <ul className={`list-disc list-inside space-y-1 text-xs pl-1 font-semibold ${isDarkMode ? 'text-red-200' : 'text-red-955'}`}>
                        {item.symptoms.map((s, idx) => <li key={idx} className="leading-relaxed">{s}</li>)}
                      </ul>
                    </div>

                    {/* Official Treatment */}
                    <div className={`space-y-2 p-4 rounded-xl border ${
                      isDarkMode ? 'bg-emerald-955/15 border-emerald-900/40' : 'bg-emerald-50/40 border-emerald-150'
                    }`}>
                      <h5 className={`text-[11px] font-black uppercase tracking-widest font-mono flex items-center gap-1 select-none ${isDarkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isDarkMode ? 'text-emerald-405' : 'text-emerald-600'}`} />
                        Conduta Clínica e Antídotos (Min. da Saúde)
                      </h5>
                      <ul className={`list-disc list-inside space-y-1 text-xs pl-1 font-bold ${isDarkMode ? 'text-emerald-250' : 'text-emerald-955'}`}>
                        {item.treatment.map((t, idx) => <li key={idx} className="leading-relaxed font-black">{t}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Emergency Call Box */}
        <div className={`border rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 mt-6 shadow-sm ${
          isDarkMode ? 'bg-slate-905 border-red-950/40' : 'bg-white border-red-150'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h4 className={`text-sm font-black flex items-center gap-1.5 justify-center md:justify-start ${
              isDarkMode ? 'text-red-400' : 'text-red-650'
            }`}>
              <PhoneCall className="w-4 h-4" />
              O quadro agravou-se na cena?
            </h4>
            <p className={`text-xs font-medium max-w-sm leading-relaxed ${isDarkMode ? 'text-slate-450' : 'text-slate-500'}`}>
              Ligue imediatamente para o atendimento médico de emergência brasileiro de cobertura universal.
            </p>
          </div>
          
          <div className="flex gap-2.5 w-full md:w-auto shrink-0">
            <a
              href="tel:192"
              className={`flex-1 md:flex-none py-3 px-5 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-all select-none active:scale-[0.98] shadow-md cursor-pointer ${
                isDarkMode ? 'bg-red-650 hover:bg-red-700 shadow-red-950/50' : 'bg-red-600 hover:bg-red-700 shadow-red-200'
              }`}
            >
              SAMU 192
            </a>
            <a
              href="tel:193"
              className={`flex-1 md:flex-none py-3 px-5 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-all select-none active:scale-[0.98] cursor-pointer border ${
                isDarkMode ? 'bg-slate-900 border-slate-750 hover:bg-slate-850' : 'bg-slate-900 hover:bg-black border-slate-800'
              }`}
            >
              BOMBEIROS 193
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
