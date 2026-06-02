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
import { protocols } from './data/protocols';
import { Protocol } from './types';
import { TermsOfUseModal } from './components/TermsOfUseModal';
import { VoiceSearchButton } from './components/VoiceSearchButton';
import { ProtocolDetail } from './components/ProtocolDetail';
import * as Icons from 'lucide-react';

export default function App() {
  // Navigation & User Flow States
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [termsDeclined, setTermsDeclined] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProtocolId, setSelectedProtocolId] = useState<string | null>(null);

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
    
    let colorClass = 'text-blue-600';
    if (isCritical) colorClass = 'text-red-650';
    if (isUrgent) colorClass = 'text-amber-600';

    if (LucideIcon) {
      return <LucideIcon className={`w-5 h-5 ${colorClass}`} />;
    }
    return <Compass className={`w-5 h-5 ${colorClass}`} />;
  };

  // Safe Dynamic Color Ring for Severity Badges
  const getSeverityBadgeClass = (severity: string) => {
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
  };

  const handleVoiceMatch = (protocolId: string) => {
    // Navigate straight to the matched protocol
    setSelectedProtocolId(protocolId);
  };

  const handleResetTerms = () => {
    setTermsDeclined(false);
    setTermsAccepted(false);
  };

  // State when a specific protocol is being viewed:
  const activeProtocol = protocols.find((p) => p.id === selectedProtocolId);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 flex flex-col font-sans select-none selection:bg-blue-500/10 relative overflow-x-hidden">
      
      {/* ⚠️ Mandatory Screen Terms Modal Flow */}
      {!termsAccepted && (
        <TermsOfUseModal
          onAccept={() => setTermsAccepted(true)}
          onDecline={() => setTermsDeclined(true)}
          isDeclined={termsDeclined}
          onReset={handleResetTerms}
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
              onBack={() => {
                setSelectedProtocolId(null);
                setSearchQuery('');
              }}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        /* Render Primary Medical Panel / Menu Screen */
        <div className="flex-1 flex flex-col pb-28">
                 {/* Header Area */}
          <header className="px-4 py-4 border-b border-blue-100 bg-white sticky top-0 z-20 backdrop-blur-md shrink-0 shadow-sm">
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {/* Estrela da Vida / Dynamic Blue Caduceus Glow Icon */}
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center relative overflow-hidden shadow-inner shrink-0">
                  <Flame className="w-5 h-5 text-blue-600 animate-pulse" />
                  <span className="absolute inset-0 bg-blue-500/5 animate-ping duration-1000 animate-duration-[3s]" />
                </div>
                <div>
                  <h1 className="text-sm font-black text-blue-900 tracking-tight flex items-center gap-1">
                    APH Primeiros Socorros
                  </h1>
                  <span className="block text-[10px] text-slate-400 select-none uppercase font-mono font-bold tracking-wider">
                    Suporte 100% Offline
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-250 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] uppercase font-mono text-emerald-800 font-bold select-none">
                  Pronto
                </span>
              </div>
            </div>
          </header>

          {/* Central Main Section */}
          <main className="max-w-2xl w-full mx-auto p-4 space-y-6 flex-1">
            
            {/* Prominent Question & Prompt */}
            <div className="text-center py-4 space-y-1">
              <span className="text-[11px] text-blue-600 uppercase tracking-widest font-mono font-black block select-none">
                ATENDIMENTO DE EMERGÊNCIA
              </span>
              <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
                Qual a sua emergência?
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium leading-relaxed">
                Fale perto do microfone ou busque as instruções abaixo instantaneamente.
              </p>
            </div>

            {/* 🎙️ VOICE RECOGNITION MECHANISM */}
            <VoiceSearchButton 
              protocols={protocols} 
              onMatchFound={handleVoiceMatch} 
              onTranscriptReceived={(text) => setSearchQuery(text)}
            />

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
                className="w-full pl-11 pr-10 py-3 bg-white border border-blue-150 rounded-2xl text-[14px] placeholder-slate-400 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-xs text-slate-500 hover:text-slate-950 font-bold hover:scale-105 active:scale-95 bg-slate-100 rounded-xl px-2 py-1 transition-all"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Protocol Listing Directory */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-blue-50 pb-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider select-none">
                  Protocolos Disponíveis ({filteredProtocols.length})
                </h3>
                {searchQuery && (
                  <span className="text-[10px] text-blue-600 font-bold font-mono">
                    Filtrado por "<strong>{searchQuery}</strong>"
                  </span>
                )}
              </div>

              {filteredProtocols.length === 0 ? (
                <div className="bg-white border border-blue-100 rounded-3xl p-8 text-center space-y-2 shadow-sm">
                  <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-slate-600 text-xs font-bold">Nenhum protocolo corresponde à sua busca.</p>
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
                          isCritical
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
                              ? 'bg-red-50 border-red-100' 
                              : 'bg-blue-50 border-blue-100'
                          }`}>
                            {renderProtocolIcon(protocol.icon, protocol.severity)}
                          </div>
                          
                          <span className={`text-[8px] uppercase tracking-wider font-mono font-black py-0.5 px-2 rounded-full ${getSeverityBadgeClass(protocol.severity)}`}>
                            {protocol.severity === 'critical' ? 'Crítico' : protocol.severity === 'urgent' ? 'Urgente' : protocol.severity === 'moderate' ? 'Moderado' : 'Info'}
                          </span>
                        </div>

                        {/* Body Text */}
                        <div className="mt-3 space-y-1">
                          <h4 className="text-[14px] font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors">
                            {protocol.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-semibold">
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
            <div className="bg-white border border-blue-100 rounded-2xl p-4 space-y-2 text-[11px] text-slate-500 select-none shadow-sm">
              <div className="flex items-start gap-2.5">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium">
                  <strong>Referência das Diretrizes:</strong> Baseado em manuais de primeiros socorros oficiais brasileiros (Ministério da Saúde, Portarias de APH e diretrizes SAMU). O aplicativo funciona inteiramente em modo offline no seu celular/browser para garantir disponibilidade imediata.
                </p>
              </div>
            </div>
          </main>

          {/* Quick Universal Floating Call Dial Bar */}
          <footer className="fixed bottom-0 left-0 right-0 py-4 px-5 border-t border-blue-100 bg-white/95 backdrop-blur-md z-30 shrink-0 shadow-lg">
            <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
              <div className="text-xs space-y-0.5">
                <p className="font-extrabold text-blue-950 flex items-center gap-1 select-none">
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  Ligar para Emergência
                </p>
                <p className="text-[10px] text-slate-400 font-medium select-none">Linhas de discagem rápida universal brasileira</p>
              </div>
              
              <div className="flex gap-2">
                <a
                  href="tel:192"
                  className="py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white text-xs font-black rounded-2xl flex items-center gap-1.5 transition-all select-none active:scale-95 shadow-md shadow-red-200"
                >
                  SAMU 192
                </a>
                <a
                  href="tel:193"
                  className="py-2.5 px-5 bg-slate-900 hover:bg-black text-white text-xs font-black rounded-2xl flex items-center gap-1.5 transition-all select-none active:scale-95 border border-slate-800"
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
