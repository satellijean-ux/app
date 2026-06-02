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
