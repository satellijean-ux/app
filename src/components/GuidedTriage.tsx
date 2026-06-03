import React, { useState } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  PhoneCall, 
  AlertOctagon, 
  CheckCircle, 
  ShieldAlert,
  Info,
  ChevronRight,
  Flame,
  Activity,
  ThumbsUp,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { protocols } from '../data/protocols';
import { extraProtocols } from '../data/extraProtocols';
import { Protocol } from '../types';
import { TRIAGE_TREE, TriageNode } from '../data/triageFlow';

// Union list of all protocols
const allProtocols = [...protocols, ...extraProtocols];

interface GuidedTriageProps {
  onClose: () => void;
  onSelectProtocol: (protocolId: string) => void;
  isDarkMode?: boolean;
}

export const GuidedTriage: React.FC<GuidedTriageProps> = ({ onClose, onSelectProtocol, isDarkMode = false }) => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('q1');
  const [history, setHistory] = useState<string[]>([]);
  
  // Current active node in decision tree
  const currentNode = TRIAGE_TREE[currentNodeId];

  // Helper inside options to navigate either to sub-questions or resolve straight to terminal protocol detail
  const handleSelectOption = (nextNodeId: string) => {
    // If nextNodeId is a question node, keep going
    if (TRIAGE_TREE[nextNodeId]) {
      setHistory((prev) => [...prev, currentNodeId]);
      setCurrentNodeId(nextNodeId);
    } else {
      // It resolved to a terminal protocol! Run callbacks
      onSelectProtocol(nextNodeId);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevHistory = [...history];
      const previousNodeId = prevHistory.pop()!;
      setHistory(prevHistory);
      setCurrentNodeId(previousNodeId);
    } else {
      onClose();
    }
  };

  const handleRestart = () => {
    setCurrentNodeId('q1');
    setHistory([]);
  };

  // Resolve metadata for visual UI helper
  const isHighRiskStep = currentNode?.isHighRisk || currentNodeId === 'q2';

  return (
    <div className={`flex-1 flex flex-col transition-colors duration-300 min-h-screen relative pb-32 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-sky-50 text-slate-900'
    }`}>
      {/* Dynamic blink alert at top when risk of life is on-going */}
      {isHighRiskStep && (
        <div className="bg-red-600 animate-pulse text-white text-center py-2 text-[11px] font-black tracking-widest uppercase flex items-center justify-center gap-2 select-none shrink-0 shadow-md">
          <AlertOctagon className="w-4 h-4 animate-bounce" />
          Situação de Risco Iminente de Morte • Mantenha a Calma
        </div>
      )}

      {/* Embedded Action Bar Header */}
      <header className={`px-4 py-4 border-b backdrop-blur-md sticky top-0 z-20 flex items-center justify-between shrink-0 transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900/90 border-slate-850 text-white' : 'bg-white/95 border-blue-100 text-slate-900'
      }`}>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition active:scale-95 cursor-pointer ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-750 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-650'
            }`}
            title="Voltar"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div>
            <h3 className={`text-xs font-mono font-bold uppercase tracking-wider select-none ${isDarkMode ? 'text-red-400' : 'text-red-650'}`}>
              Médico Assistido
            </h3>
            <h2 className={`text-sm font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-blue-950'}`}>
              Atendimento Guiado
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {history.length > 0 && (
            <button
              type="button"
              onClick={handleRestart}
              className={`py-1.5 px-3 rounded-xl text-[11px] font-bold transition active:scale-95 flex items-center gap-1 cursor-pointer ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-750 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Resetar
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition active:scale-95 text-xs font-bold cursor-pointer ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-750 text-white/80 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            ✕
          </button>
        </div>
      </header>

      {/* Wizard Content Layout */}
      <main className="max-w-xl w-full mx-auto p-4 md:p-6 space-y-6 flex-1 flex flex-col justify-center">
        
        {/* Progress tracking indicator */}
        <div className="text-center">
          <span className={`text-[10px] font-mono tracking-widest font-extrabold uppercase px-3 py-1 rounded-full border ${
            isDarkMode 
              ? 'text-slate-400 bg-slate-900 border-slate-850' 
              : 'text-blue-700 bg-blue-50 border-blue-150'
          }`}>
            Passo Triage #{history.length + 1}
          </span>
        </div>

        {/* Dynamic visual slider frame card */}
        <div className={`rounded-[32px] p-6 space-y-6 shadow-2xl relative overflow-hidden border transition-all duration-300 ${
          isDarkMode ? 'bg-slate-905 border-slate-850' : 'bg-white border-blue-105'
        }`}>
          {/* Subtle decoration element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.01] rounded-full blur-2xl pointer-events-none" />

          {/* Alert Warnings panel */}
          {currentNode?.alert && (
            <div className={`p-4 rounded-2xl text-xs font-bold leading-relaxed flex items-start gap-3 shadow-inner border ${
              isDarkMode 
                ? 'bg-red-955 border-red-900/40 text-red-300' 
                : 'bg-red-50 border-red-200 text-red-950'
            }`}>
              <ShieldAlert className={`w-5 h-5 shrink-0 mt-0.5 ${isDarkMode ? 'text-red-400' : 'text-red-650'}`} />
              <p>{currentNode.alert}</p>
            </div>
          )}

          {/* Central Question Display */}
          <div className="space-y-2 text-center py-2">
            <h1 className={`text-xl md:text-2xl font-black leading-snug tracking-tight ${isDarkMode ? 'text-white' : 'text-blue-950'}`}>
              {currentNode?.question || 'Triage Finalizada.'}
            </h1>
          </div>

          {/* Options button lists */}
          <div className="space-y-3 pt-2">
            {currentNode?.options.map((opt, idx) => {
              let btnBorder = isDarkMode 
                ? 'border-slate-850 hover:border-slate-750 bg-slate-950/40 hover:bg-slate-850/50' 
                : 'border-blue-100 hover:border-blue-300 bg-slate-50/50 hover:bg-blue-50/30';
              let badgeColor = isDarkMode ? 'bg-slate-800 text-slate-350' : 'bg-slate-100 text-slate-700';
              
              if (opt.severity === 'critical') {
                btnBorder = isDarkMode
                  ? 'border-red-950 hover:border-red-600 bg-red-955/20 hover:bg-red-955/40'
                  : 'border-red-200 hover:border-red-450 bg-red-50/40 hover:bg-red-50/70';
                badgeColor = isDarkMode
                  ? 'bg-red-955 text-red-300 border border-red-900/40'
                  : 'bg-red-100 text-red-700 border border-red-200';
              } else if (opt.severity === 'urgent') {
                btnBorder = isDarkMode
                  ? 'border-amber-950 hover:border-amber-600 bg-amber-955/20 hover:bg-amber-955/40'
                  : 'border-amber-200 hover:border-amber-450 bg-amber-50/40 hover:bg-amber-50/70';
                badgeColor = isDarkMode
                  ? 'bg-amber-955 text-amber-300 border border-amber-900/40'
                  : 'bg-amber-100 text-amber-800 border border-amber-200';
              } else if (opt.severity === 'moderate') {
                btnBorder = isDarkMode
                  ? 'border-blue-900 hover:border-blue-600 bg-blue-955/20 hover:bg-blue-955/40'
                  : 'border-blue-150 hover:border-blue-350 bg-blue-50/20 hover:bg-blue-50/50';
                badgeColor = isDarkMode
                  ? 'bg-blue-955 text-blue-300 border border-blue-900/40'
                  : 'bg-blue-100 text-blue-800 border border-blue-200';
              }

              return (
                <button
                  id={`triage_opt_${currentNode.id}_${idx}`}
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(opt.nextNode)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-205 cursor-pointer active:scale-[0.98] group flex justify-between items-center gap-3 shadow-sm ${btnBorder}`}
                >
                  <div className="space-y-1">
                    <span className={`text-[15px] font-black block transition-colors leading-tight ${
                      isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-700'
                    }`}>
                      {opt.label}
                    </span>
                    {opt.description && (
                      <span className={`text-xs block transition-colors font-medium ${
                        isDarkMode ? 'text-slate-400 group-hover:text-slate-350' : 'text-slate-500 group-hover:text-slate-700'
                      }`}>
                        {opt.description}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {opt.severity && opt.severity !== 'normal' && (
                      <span className={`text-[8px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded ${badgeColor}`}>
                        {opt.severity === 'critical' ? 'Crítico' : opt.severity === 'urgent' ? 'Urgente' : 'Risco'}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-slate-450 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic tips bottom card */}
        <div className={`text-center font-semibold text-[11px] leading-relaxed max-w-sm mx-auto select-none rounded-2xl border p-3 shadow-md ${
          isDarkMode 
            ? 'bg-slate-900/20 border-slate-850 text-slate-505' 
            : 'bg-white/40 border-blue-100 text-slate-500'
        }`}>
          💡 Forneça respostas simples baseadas no cenário visual imediato. Não sinta culpa se não tiver certeza de alguma resposta, o sistema foi calibrado para ser seguro e conservador.
        </div>
      </main>

      {/* Floating Call Hotbar Footer - SAMU 192 (Fixed brasileiro) */}
      <footer className={`fixed bottom-0 left-0 right-0 py-4 px-5 border-t backdrop-blur-md z-30 shadow-2xl transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900/95 border-slate-850' : 'bg-white/95 border-blue-100'
      }`}>
        <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
          <div className="text-xs space-y-0.5">
            <p className={`font-extrabold flex items-center gap-1.5 select-none ${isDarkMode ? 'text-red-400' : 'text-red-650'}`}>
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0" />
              <PhoneCall className={`w-3.5 h-3.5 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
              Ligar para Emergência
            </p>
            <p className={`text-[10px] font-semibold select-none ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Central SAMU disponível 24 Horas</p>
          </div>
          
          <a
            href="tel:192"
            className={`py-2.5 px-6 bg-red-650 hover:bg-red-700 text-white text-xs font-black rounded-2xl flex items-center gap-1.5 transition-all select-none active:scale-95 shadow-lg ${
              isDarkMode ? 'shadow-red-955/40' : 'shadow-red-200'
            }`}
          >
            DISCAR SAMU 192
          </a>
        </div>
      </footer>
    </div>
  );
};
