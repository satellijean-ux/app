import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, AlertCircle } from 'lucide-react';
import { Protocol } from '../types';

interface VoiceSearchButtonProps {
  protocols: Protocol[];
  onMatchFound: (protocolId: string) => void;
  onTranscriptReceived?: (text: string) => void;
}

export const VoiceSearchButton: React.FC<VoiceSearchButtonProps> = ({
  protocols,
  onMatchFound,
  onTranscriptReceived,
}) => {
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [matchedProtocolName, setMatchedProtocolName] = useState<string>('');
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check Web Speech API support
    const SpeechRecognition = 
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition;
      
    if (!SpeechRecognition) {
      setIsSupported(false);
    } else {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.lang = 'pt-BR';
      rec.interimResults = false;
      
      rec.onstart = () => {
        setIsListening(true);
        setTranscript('');
        setErrorMessage('');
        setMatchedProtocolName('');
      };

      rec.onresult = (event: any) => {
        const text = event.results[0][0].transcript || '';
        setTranscript(text);
        if (onTranscriptReceived) {
          onTranscriptReceived(text);
        }
        
        // Find match inside our protocols keywords
        matchVoiceCommand(text);
      };

      rec.onerror = (event: any) => {
        console.error('Erro no reconhecimento de voz:', event);
        if (event.error === 'not-allowed') {
          setErrorMessage('Permissão do microfone negada.');
        } else if (event.error === 'no-speech') {
          setErrorMessage('Nenhuma fala foi detectada.');
        } else {
          setErrorMessage('Não consegui ouvir. Tente novamente.');
        }
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, [protocols]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  const startListening = () => {
    if (!isSupported) return;
    
    setErrorMessage('');
    setMatchedProtocolName('');
    
    try {
      recognitionRef.current.start();
    } catch (e) {
      console.warn('Recognition already started or error occurred:', e);
      try {
        recognitionRef.current.stop();
      } catch (err) {}
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
  };

  const matchVoiceCommand = (spokenText: string) => {
    const textLower = spokenText.toLowerCase().trim();
    
    // Find closest match or direct keyword overlap
    let bestMatch: Protocol | null = null;
    let maxOverlapCount = 0;

    for (const protocol of protocols) {
      // Direct title match
      if (textLower.includes(protocol.title.toLowerCase()) || protocol.title.toLowerCase().includes(textLower)) {
        bestMatch = protocol;
        break;
      }
      
      // Keyword matching
      let overlap = 0;
      for (const keyword of protocol.voiceKeywords) {
        if (textLower.includes(keyword.toLowerCase())) {
          overlap += 1;
        }
      }
      
      if (overlap > maxOverlapCount) {
        maxOverlapCount = overlap;
        bestMatch = protocol;
      }
    }

    if (bestMatch && (maxOverlapCount > 0 || textLower.includes(bestMatch.title.toLowerCase()))) {
      setMatchedProtocolName(bestMatch.title);
      const matchedId = bestMatch.id;
      // Small timeout to let user see what was matching
      setTimeout(() => {
        onMatchFound(matchedId);
        setMatchedProtocolName('');
      }, 1200);
    } else {
      setErrorMessage('Nenhum protocolo correspondente encontrado para sua fala.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-white/60 border border-blue-100 rounded-3xl relative overflow-hidden shadow-sm">
      {/* Absolute glow effects */}
      {isListening && (
        <span className="absolute inset-0 bg-blue-500/5 animate-pulse pointer-events-none" />
      )}

      <div className="flex flex-col items-center gap-4">
        <div className="relative group">
          {isListening && (
            <div className="absolute -inset-4 bg-red-400/20 rounded-full blur-xl animate-ping"></div>
          )}
          {!isListening && (
            <div className="absolute -inset-4 bg-blue-400/15 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-300"></div>
          )}
          <button
            id="btn_mic_action"
            type="button"
            onClick={isListening ? stopListening : startListening}
            disabled={!isSupported}
            className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-350 select-none border-4 border-white shadow-xl ${
              !isSupported 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : isListening
                  ? 'bg-red-600 text-white scale-105'
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 active:scale-95 cursor-pointer'
            }`}
            title={isListening ? "Parar Transmissão" : "Ativar Pesquisa por Voz"}
          >
            {isListening ? (
              <Mic className="w-8 h-8 animate-bounce" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </button>
        </div>

        <div className="text-center space-y-1">
          <p className="text-sm font-bold select-none">
            {isListening ? (
              <span className="text-red-600 flex items-center gap-1.5 justify-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                Ouvindo... Peça socorro ou fale o acidente
              </span>
            ) : (
              <span className="text-blue-900 font-extrabold uppercase tracking-wide text-xs">Fale o comando de voz</span>
            )}
          </p>
          <p className="text-xs text-slate-500 max-w-xs mx-auto select-none leading-relaxed">
            Exemplo: <span className="text-blue-600 font-semibold font-mono bg-blue-50 px-1.5 py-0.5 rounded">"parada cardíaca"</span> ou <span className="text-blue-600 font-semibold font-mono bg-blue-50 px-1.5 py-0.5 rounded">"fratura"</span>
          </p>
        </div>
      </div>

      {/* Visual audio waves when listening */}
      {isListening && (
        <div className="flex items-center gap-1 mt-4 h-6">
          <div className="w-1 bg-red-500 rounded-full h-2 animate-[pulse_0.4s_infinite_alternate]" />
          <div className="w-1 bg-red-400 rounded-full h-4 animate-[pulse_0.6s_infinite_alternate]" />
          <div className="w-1 bg-red-500 rounded-full h-3 animate-[pulse_0.3s_infinite_alternate]" />
          <div className="w-1 bg-red-400 rounded-full h-5 animate-[pulse_0.5s_infinite_alternate]" />
          <div className="w-1 bg-red-500 rounded-full h-2 animate-[pulse_0.7s_infinite_alternate]" />
        </div>
      )}

      {/* Understood text or status message */}
      {transcript && (
        <div className="mt-4 py-2 px-4 bg-blue-50/80 border border-blue-100 text-blue-950 rounded-xl text-xs max-w-sm text-center font-medium leading-relaxed shadow-sm">
          <span className="text-slate-500 font-semibold">Entendendo:</span> <span className="text-blue-700 font-extrabold font-mono">"{transcript}"</span>
        </div>
      )}

      {matchedProtocolName && (
        <div className="mt-4 py-2 px-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs text-center flex items-center justify-center gap-2 animate-bounce shadow-sm font-bold">
          <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Redirecionando para: {matchedProtocolName}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 py-2 px-4 bg-red-50 border border-red-150 text-red-800 rounded-xl text-xs flex items-center gap-2 max-w-sm shadow-sm">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span className="font-semibold">{errorMessage}</span>
        </div>
      )}

      {!isSupported && (
        <div className="mt-4 text-center text-[11px] text-slate-400 border-t border-slate-100 pt-3 w-full">
          <MicOff className="w-4 h-4 mx-auto mb-1 opacity-40 text-slate-500" />
          Pesquisa por voz indisponível neste navegador. Use a caixa de texto.
        </div>
      )}
    </div>
  );
};
