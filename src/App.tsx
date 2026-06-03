import { useState } from 'react';
import { 
  Search, 
  PhoneCall, 
  Compass, 
  Flame, 
  Award, 
  HelpCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { protocols as originalProtocols } from './data/protocols';
import { extraProtocols } from './data/extraProtocols';
import { Protocol } from './types';
import { TermsOfUseModal } from './components/TermsOfUseModal';
import { ProtocolDetail } from './components/ProtocolDetail';
import { GuidedTriage } from './components/GuidedTriage';
import * as Icons from 'lucide-react';

const protocols: Protocol[] = [...originalProtocols, ...extraProtocols];

export default function App() {
  // Navigation & User Flow States
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [termsDeclined, setTermsDeclined] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProtocolId, setSelectedProtocolId] = useState<string | null>(null);
  const [triageActive, setTriageActive] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('aph_dark_mode') === 'true';
  });

  // Filter protocols offline
  const filteredProtocols = protocols.filter((protocol) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      protocol.title.toLowerCase().includes(query) ||
      protocol.shortDesc.toLowerCase().includes(query) ||
      protocol.voiceKeywords.some((keyword) => keyword.toLowerCase().includes(query))
    );
  });

  // Safe Dynamic Icon Renderer
  const renderProtocolIcon = (iconName: string, severity: string) => {
    const LucideIcon = (Icons as any)[iconName];
    const isCritical = severity === 'critical';
    const isUrgent = severity === 'urgent';
    
    let colorClass = isDarkMode ? 'text-blue-400' : 'text-blue-650';
    if (isCritical) colorClass = isDarkMode ? 'text-red-400' : 'text-red-650';
    if (isUrgent) colorClass = isDarkMode ? 'text-amber-400' : 'text-amber-600';

    if (LucideIcon) {
      return <LucideIcon className={`w-5 h-5 ${colorClass}`} />;
    }
    return <Compass className={`w-5 h-5 ${colorClass}`} />;
  };

  // Safe Dynamic Color Ring for Severity Badges
  const getSeverityBadgeClass = (severity: string) => {
    if (isDarkMode) {
      switch (severity) {
        case 'critical':
          return 'bg-red-955 text-red-300 border border-red-900/60';
        case 'urgent':
          return 'bg-amber-955 text-amber-300 border border-amber-900/40';
        case 'moderate':
          return 'bg-blue-955 text-blue-305 border border-blue-900/50';
        case 'informative':
        default:
          return 'bg-slate-800 text-slate-300 border border-slate-755';
      }
    } else {
      switch (severity) {
        case 'critical':
          return 'bg-red-50 text-red-700 border border-red-200';
        case 'urgent':
          return 'bg-amber-50 text-amber-800 border border-amber-250';
        case 'moderate':
          return 'bg-blue-50 text-blue-800 border border-blue-200';
        case 'informative':
        default:
          return 'bg-slate-50 text-slate-700 border border-slate-200';
      }
    }
  };

  const handleResetTerms = () => {
    setTermsDeclined(false);
    setTermsAccepted(false);
  };

  // State when a specific protocol is being viewed:
  const activeProtocol = protocols.find((p) => p.id === selectedProtocolId);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-sky-50 text-slate-900'} flex flex-col font-sans select-none selection:bg-blue-500/10 relative overflow-x-hidden`}>
      
      {/* ⚠️ Mandatory Screen Terms Modal Flow */}
      {!termsAccepted && (
        <TermsOfUseModal
          onAccept={() => setTermsAccepted(true)}
          onDecline={() => setTermsDeclined(true)}
          isDeclined={termsDeclined}
          onReset={handleResetTerms}
          isDarkMode={isDarkMode}
        />
      )}

      {/* Render detailed protocol if selected */}
      {activeProtocol ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProtocol.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            <ProtocolDetail
              protocol={activeProtocol}
              isDarkMode={isDarkMode}
              onBack={() => {
                setSelectedProtocolId(null);
                setSearchQuery('');
              }}
            />
          </motion.div>
        </AnimatePresence>
      ) : triageActive ? (
        /* Render Guided Emergency Triage interface screen */
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full"
          >
            <GuidedTriage 
              onClose={() => setTriageActive(false)}
              onSelectProtocol={(id) => setSelectedProtocolId(id)}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        /* Render Primary Medical Panel / Menu Screen */
        <div className="flex-1 flex flex-col pb-28 pt-4">
          
          {/* Quick Upper Bar with Dark Mode Toggle */}
          <div className="w-full max-w-2xl mx-auto px-4 flex justify-end">
            <button
              type="button"
              onClick={() => {
                const nextDark = !isDarkMode;
                setIsDarkMode(nextDark);
                localStorage.setItem('aph_dark_mode', String(nextDark));
              }}
              className={`p-2 rounded-full border transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-yellow-405 hover:bg-slate-850 hover:border-slate-700' 
                  : 'bg-white border-blue-100 text-slate-500 hover:bg-slate-50 hover:border-blue-200'
              }`}
              title={isDarkMode ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
            >
              {isDarkMode ? (
                <Icons.Sun className="w-4.5 h-4.5 text-yellow-500 fill-yellow-500/10" />
              ) : (
                <Icons.Moon className="w-4.5 h-4.5 text-blue-600 fill-blue-50" />
              )}
            </button>
          </div>

          {/* Central Main Section */}
          <main className="max-w-2xl w-full mx-auto p-4 space-y-6 flex-1">
            
            {/* Prominent Question & Prompt */}
            <div className="text-center py-4 space-y-1">
              <span className={`text-[11px] uppercase tracking-widest font-mono font-black block select-none ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                ATENDIMENTO DE EMERGÊNCIA
              </span>
              <h2 className={`text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-blue-950'}`}>
                Qual a sua emergência?
              </h2>
              <p className={`text-xs max-w-sm mx-auto font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Busque as instruções abaixo instantaneamente ou use o Atendimento Guiado para triagem imediata.
              </p>
            </div>

            {/* 🚨 EMERGÊNCIA - Atendimento Guiado Highlighted Button with Extra Prominence */}
            <div className="px-1">
              <button
                id="btn_guided_triage_trigger"
                type="button"
                onClick={() => setTriageActive(true)}
                className="w-full py-7 px-8 rounded-[32px] bg-gradient-to-br from-red-600 via-rose-600 to-red-800 hover:from-red-700 hover:to-rose-850 font-extrabold text-white text-base flex flex-col items-center justify-center gap-2 transition-all outline-none hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-red-500/40 cursor-pointer text-center relative overflow-hidden group border-2 border-red-400 ring-8 ring-red-500/10 hover:ring-red-500/25"
              >
                {/* Visual glow backgrounds inside */}
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
                  </span>
                  <span className="tracking-wider uppercase text-[17px] font-black drop-shadow-sm">
                    🚨 INICIAR ATENDIMENTO GUIADO DE EMERGÊNCIA
                  </span>
                </div>
                
                <span className="text-xs text-rose-100 font-bold uppercase tracking-widest opacity-95">
                  Triagem inteligente e rápida por perguntas interativas
                </span>
                
                <div className="mt-1 px-4 py-1 rounded-full bg-black/15 text-[10px] text-white/90 font-mono tracking-wider uppercase border border-white/5 font-extrabold">
                  ⚠️ Ideal para decisões sob estresse • Recomendado
                </div>
              </button>
            </div>

            {/* Alternative Search Autocomplete Input */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                id="emergency_protocol_search"
                type="text"
                placeholder="Pesquisar por sintoma, planta ou acidente..."
                value={searchQuery}
                aria-label="Procurar protocolo"
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-11 pr-10 py-3 rounded-2xl text-[14px] transition-all shadow-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-600 focus:ring-blue-600' 
                    : 'bg-white border border-blue-150 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3.5 top-3 text-xs font-bold hover:scale-105 active:scale-95 rounded-xl px-2.5 py-1 transition-all ${
                    isDarkMode ? 'bg-slate-800 hover:bg-slate-705 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Protocol Listing Directory */}
            <div className="space-y-3">
              <div className={`flex items-center justify-between border-b pb-2 ${isDarkMode ? 'border-slate-850' : 'border-blue-50'}`}>
                <h3 className={`text-xs font-bold uppercase tracking-wider select-none ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  Protocolos Disponíveis ({filteredProtocols.length})
                </h3>
                {searchQuery && (
                  <span className={`text-[10px] font-bold font-mono ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Filtrado por "<strong>{searchQuery}</strong>"
                  </span>
                )}
              </div>

              {filteredProtocols.length === 0 ? (
                <div className={`border rounded-3xl p-8 text-center space-y-2 shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-blue-100'}`}>
                  <AlertCircle className="w-8 h-8 text-slate-350 mx-auto animate-pulse" />
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Nenhum protocolo corresponde à sua busca.</p>
                  <p className="text-[11px] text-slate-500">Tente buscar palavras-chave mais simples como "sangue", "cobra" ou "parada".</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                  {filteredProtocols.map((protocol) => {
                    const isCritical = protocol.severity === 'critical';
                    
                    return (
                      <button
                        id={`btn_protocol_${protocol.id}`}
                        key={protocol.id}
                        type="button"
                        onClick={() => setSelectedProtocolId(protocol.id)}
                        className={`text-left p-5 rounded-3xl border transition-all relative overflow-hidden flex flex-col justify-between group cursor-pointer active:scale-[0.98] shadow-sm ${
                          isDarkMode
                            ? isCritical
                              ? 'bg-slate-900 border-red-950 hover:bg-red-950/15 hover:border-red-600'
                              : 'bg-slate-905 border-slate-850 hover:bg-slate-900 hover:border-blue-600'
                            : isCritical
                              ? 'bg-white border-red-200 hover:bg-red-50/10 hover:border-red-400 font-extrabold'
                              : 'bg-white border-blue-100 hover:bg-blue-50/50 hover:border-blue-400'
                        }`}
                      >
                        {/* Interactive dynamic background lighting */}
                        <span className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.01] group-hover:bg-blue-400/[0.03] transition-colors rounded-full blur-2xl pointer-events-none" />

                        {/* Top Line Icon + Severity */}
                        <div className="flex items-start justify-between gap-3 w-full mb-1">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
                            isCritical 
                              ? isDarkMode ? 'bg-red-955 border-red-900/50' : 'bg-red-50 border-red-100' 
                              : isDarkMode ? 'bg-slate-850 border-slate-800' : 'bg-blue-50 border-blue-100'
                          }`}>
                            {renderProtocolIcon(protocol.icon, protocol.severity)}
                          </div>
                          
                          <span className={`text-[8px] uppercase tracking-wider font-mono font-black py-0.5 px-2 rounded-full ${getSeverityBadgeClass(protocol.severity)}`}>
                            {protocol.severity === 'critical' ? 'Crítico' : protocol.severity === 'urgent' ? 'Urgente' : protocol.severity === 'moderate' ? 'Moderado' : 'Info'}
                          </span>
                        </div>

                        {/* Body Text */}
                        <div className="mt-3 space-y-1">
                          <h4 className={`text-[14px] font-extrabold transition-colors ${isDarkMode ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-900'}`}>
                            {protocol.title}
                          </h4>
                          <p className={`text-xs line-clamp-2 leading-relaxed font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {protocol.shortDesc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* Disclaimer and Reference Info footnote */}
            <div className={`border rounded-2xl p-4 space-y-2 text-[11px] select-none shadow-sm ${
              isDarkMode ? 'bg-slate-900 border-slate-850 text-slate-400' : 'bg-white border-blue-100 text-slate-500'
            }`}>
              <div className="flex items-start gap-2.5">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium">
                  <strong>Referência das Diretrizes:</strong> Baseado em manuais de primeiros socorros oficiais brasileiros (Ministério da Saúde, Portarias de APH e diretrizes SAMU). O aplicativo funciona inteiramente em modo offline no seu celular/browser para garantir disponibilidade imediata.
                </p>
              </div>
            </div>
          </main>

          {/* Quick Universal Floating Call Dial Bar */}
          <footer className={`fixed bottom-0 left-0 right-0 py-4 px-5 border-t backdrop-blur-md z-30 shrink-0 shadow-lg ${
            isDarkMode ? 'bg-slate-900/95 border-slate-850' : 'bg-white/95 border-blue-100'
          }`}>
            <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
              <div className="text-xs space-y-0.5">
                <p className={`font-extrabold flex items-center gap-1.5 select-none ${isDarkMode ? 'text-slate-205' : 'text-blue-950'}`}>
                  <PhoneCall className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  Ligar para Emergência
                </p>
                <p className={`text-[10px] font-medium select-none ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Linhas de discagem rápida universal brasileira</p>
              </div>
              
              <div className="flex gap-2">
                <a
                  href="tel:192"
                  className={`py-2.5 px-5 bg-red-650 hover:bg-red-700 text-white text-xs font-black rounded-2xl flex items-center gap-1.5 transition-all select-none active:scale-95 shadow-md ${
                    isDarkMode ? 'shadow-red-950/20' : 'shadow-red-100'
                  }`}
                >
                  SAMU 192
                </a>
                <a
                  href="tel:193"
                  className={`py-2.5 px-5 text-white text-xs font-black rounded-2xl flex items-center gap-1.5 transition-all select-none active:scale-95 ${
                    isDarkMode ? 'bg-slate-800 hover:bg-slate-750 border border-slate-700' : 'bg-slate-900 hover:bg-black border border-slate-800'
                  }`}
                >
                  BOMBEIROS 193
                </a>
              </div>
            </div>
          </footer>

        </div>
      )}
    </div>
  );
}
