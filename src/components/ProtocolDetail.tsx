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
const renderLocalGraphic = (imageId: string) => {
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
    <div className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-150 rounded-2xl relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-blue-50/10 pointer-events-none" />
      <div className="relative z-10 my-1">
        {vector}
      </div>
    </div>
  );
};

interface ProtocolDetailProps {
  protocol: Protocol;
  onBack: () => void;
}

export const ProtocolDetail: React.FC<ProtocolDetailProps> = ({ protocol, onBack }) => {
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
    <div className="w-full flex flex-col min-h-screen bg-sky-50 pb-24 text-slate-950 font-sans">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-blue-100 px-4 py-3 shrink-0 shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            id="btn_back_to_list"
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-extrabold transition-colors py-2 px-1.5 select-none active:scale-95 cursor-pointer"
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
        <div className="bg-white border border-blue-100 rounded-3xl p-6 relative overflow-hidden shadow-sm text-slate-800">
          <div className="absolute top-5 right-5 animate-pulse opacity-20 pointer-events-none">
            {getIcon(protocol.icon)}
          </div>
          
          <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-1.5 font-mono select-none">
            {protocol.meta}
          </p>
          <h2 className="text-2xl font-black text-blue-950 leading-tight mb-2 select-all">
            {protocol.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-semibold">
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
        <div className="bg-white border border-blue-100 rounded-3xl p-6 space-y-5 shadow-sm text-slate-800">
          <h3 className="text-base font-black text-blue-950 flex items-center gap-2 border-b border-blue-50 pb-3">
            <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
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
                    isXabcde 
                      ? 'bg-blue-50/50 border-blue-150 shadow-xs' 
                      : 'bg-slate-50/50 border-slate-100'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-extrabold font-mono text-xs flex items-center justify-center shrink-0 select-none shadow-sm">
                    {index + 1}
                  </div>
                  <div className="text-slate-700 text-sm leading-relaxed font-bold">
                    {step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ❌ WHAT NOT TO DO (FORBIDDEN) */}
        <div className="bg-red-50/60 border border-red-150 rounded-3xl p-6 space-y-5 text-red-950 shadow-sm">
          <h3 className="text-base font-black text-red-800 flex items-center gap-2 border-b border-red-100 pb-3 select-none">
            <XOctagon className="w-5 h-5 text-red-600" />
            O que NÃO fazer (Contra-indicações Críticas)
          </h3>
          <ul className="space-y-3">
            {protocol.forbidden.map((forb, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full shrink-0 mt-1.5" />
                <span className="text-red-900 text-[13px] leading-relaxed font-semibold">{forb}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SPECIAL SYSTEM CATALOG: SNAKES OR TOXIC PLANTS */}
        {protocol.catalog && (
          <div className="bg-white border border-blue-100 rounded-3xl p-6 space-y-5 shadow-sm text-slate-850">
            <div className="border-b border-blue-50 pb-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <h3 className="text-base font-black text-blue-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                {protocol.catalogTitle || 'Catálogo de Consulta Offline'}
              </h3>
              
              {/* Internal search field for the offline catalog */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Pesquisar no catálogo..."
                  value={catalogSearch}
                  onChange={(e) => setCatalogSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-blue-100 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-medium"
                />
              </div>
            </div>

            {filteredCatalog && filteredCatalog.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4 font-bold">Nenhum espécime correspondente encontrado.</p>
            ) : (
              <div className="space-y-6">
                {filteredCatalog?.map((item) => (
                  <div key={item.id} className="bg-slate-50 border border-blue-100 rounded-3xl p-5 space-y-4 relative overflow-hidden shadow-xs">
                    {/* Danger Rating Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-blue-50 pb-2">
                      <div>
                        <h4 className="text-[15px] font-black text-slate-900">
                          {item.name}
                        </h4>
                        {item.scientificName && (
                          <p className="text-xs italic text-slate-500 font-serif font-medium">
                            {item.scientificName}
                          </p>
                        )}
                      </div>
                      
                      <span className={`text-[9px] uppercase font-mono tracking-wider font-extrabold py-0.5 px-2.5 rounded-full border ${
                        item.dangerLevel === 'high' 
                          ? 'bg-red-50 text-red-705 border-red-200' 
                          : item.dangerLevel === 'medium'
                            ? 'bg-amber-50 text-amber-705 border-amber-200'
                            : 'bg-emerald-50 text-emerald-805 border-emerald-250'
                      }`}>
                        Perigo: {item.dangerLevel === 'high' ? 'Alto' : item.dangerLevel === 'medium' ? 'Médio' : 'Baixo'}
                      </span>
                    </div>

                    {/* Local stored graphic loader */}
                    {item.image && renderLocalGraphic(item.image)}

                    {/* Interactive silhouette/pattern visual tag */}
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-start gap-2.5 shadow-xs">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0 mt-1" />
                      <p className="text-xs text-slate-700 leading-relaxed font-bold">
                        <strong className="text-blue-600 select-none">Identificador Visual:</strong> {item.visualIdentifier}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-widest font-mono select-none">Descrição Física</h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        {item.description}
                      </p>
                    </div>

                    {/* Symptoms */}
                    <div className="space-y-2 bg-red-50/40 p-4 rounded-xl border border-red-150">
                      <h5 className="text-[11px] font-black text-red-800 uppercase tracking-widest font-mono flex items-center gap-1 select-none">
                        <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                        Sintomas do Envenenamento / Contato
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-xs text-red-950 pl-1 font-semibold">
                        {item.symptoms.map((s, idx) => <li key={idx} className="leading-relaxed">{s}</li>)}
                      </ul>
                    </div>

                    {/* Official Treatment */}
                    <div className="space-y-2 bg-emerald-50/40 p-4 rounded-xl border border-emerald-150">
                      <h5 className="text-[11px] font-black text-emerald-800 uppercase tracking-widest font-mono flex items-center gap-1 select-none">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Conduta Clínica e Antídotos (Min. da Saúde)
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-xs text-emerald-950 pl-1 font-bold">
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
        <div className="bg-white border border-red-150 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 mt-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-black text-red-650 flex items-center gap-1.5 justify-center md:justify-start">
              <PhoneCall className="w-4 h-4" />
              O quadro agravou-se na cena?
            </h4>
            <p className="text-xs text-slate-500 font-medium max-w-sm leading-relaxed">
              Ligue imediatamente para o atendimento médico de emergência brasileiro de cobertura universal.
            </p>
          </div>
          
          <div className="flex gap-2.5 w-full md:w-auto shrink-0">
            <a
              href="tel:192"
              className="flex-1 md:flex-none py-3 px-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors select-none active:scale-[0.98] shadow-md shadow-red-200 cursor-pointer"
            >
              SAMU 192
            </a>
            <a
              href="tel:193"
              className="flex-1 md:flex-none py-3 px-5 bg-slate-900 hover:bg-black text-white font-black rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors select-none active:scale-[0.98] border border-slate-800 cursor-pointer"
            >
              BOMBEIROS 193
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
