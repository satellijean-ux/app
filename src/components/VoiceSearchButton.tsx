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
    // Detect Web Speech API support
    const SpeechRecognition = 
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

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
    const SpeechRecognition = 
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setErrorMessage('Este navegador não oferece suporte para reconhecimento de voz.');
      return;
    }
    
    setErrorMessage('');
    setMatchedProtocolName('');
    setTranscript('');
    
    // Stop any active previous session
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (err) {}
    }

    try {
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
          setErrorMessage('Permissão do microfone negada. Verifique se o microfone está ativo ou se liberou o acesso nas configurações do aparelho.');
        } else if (event.error === 'no-speech') {
          setErrorMessage('Nenhuma fala foi detectada. Por favor, tente falar novamente pertinho do microfone.');
        } else {
          setErrorMessage(`Não consegui ouvir (Código: ${event.error}). Por favor, tente falar de novo.`);
        }
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (e) {
      console.error('Falha ao iniciar SpeechRecognition:', e);
      setErrorMessage('Falha ao acessar o microfone do dispositivo.');
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsListening(false);
  };

  const matchVoiceCommand = (spokenText: string) => {
    const textLower = spokenText.toLowerCase().trim();
    
    // ------------------------------------------------------------------------
    // Mapeamento de Sinônimos Oficiais do Usuário (Primeiros Socorros Offline)
    // ------------------------------------------------------------------------
    // Na ponte nativa do app Android, o SpeechRecognizer é instanciado offline via:
    //      val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH)
    //      intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "pt-BR")
    //      intent.putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, true) // Forcar offline nativo
    // No ambiente web/híbrido atual, emulamos esse fluxo com mapeamento local de sinônimos:
    // ------------------------------------------------------------------------
    const synonymMap: { keywords: string[]; protocolId: string }[] = [
      { keywords: ['comigo ninguem pode', 'comigo ninguém pode', 'comeu folha', 'planta'], protocolId: 'plantas-toxicas' },
      { keywords: ['bolsa estourou', 'gravida', 'grávida', 'nascer', 'parto'], protocolId: 'parto-urgencia' },
      { keywords: ['escorpiao', 'escorpião', 'aranha', 'picada', 'cobra'], protocolId: 'animais-peconhentos' },
      { keywords: ['caiu dente', 'quebrou dente', 'dente'], protocolId: 'avulsao-dentaria' },
      { keywords: ['reanimar', 'infarto', 'coracao', 'coração', 'parada'], protocolId: 'parada-cardiorespiratoria' },
      { keywords: ['perna', 'braço', 'braco', 'osso', 'quebrou'], protocolId: 'fraturas-imobilizacoes' },
      { keywords: ['água quente', 'agua quente', 'fogo', 'queimou'], protocolId: 'queimaduras' },
      { keywords: ['tremendo', 'ataque', 'convulsao', 'convulsão'], protocolId: 'convulsao' },
      { keywords: ['sangrando', 'nasal', 'nariz'], protocolId: 'sangramento-nasal' },
      { keywords: ['hemorragia', 'cortou', 'sangue'], protocolId: 'controle-hemorragias' },
      { keywords: ['ouvido', 'orelha'], protocolId: 'sangramento-ouvido' },
      { keywords: ['apagou', 'desmaiou', 'desmaio'], protocolId: 'desmaio' },
      { keywords: ['remédio', 'remedio', 'bebeu', 'veneno'], protocolId: 'intoxicacao' },
      { keywords: ['agua', 'água', 'afogou'], protocolId: 'afogamento' }
    ];

    let matchedId: string | null = null;

    // Scan using the priority synonym maps
    for (const item of synonymMap) {
      for (const kw of item.keywords) {
        if (textLower.includes(kw)) {
          matchedId = item.protocolId;
          break;
        }
      }
      if (matchedId) break;
    }

    // Fallback if no synonym list matched
    if (!matchedId) {
      let bestMatch: Protocol | null = null;
      let maxOverlapCount = 0;

      for (const protocol of protocols) {
        // Direct title match
        if (textLower.includes(protocol.title.toLowerCase()) || protocol.title.toLowerCase().includes(textLower)) {
          matchedId = protocol.id;
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

      if (!matchedId && bestMatch && maxOverlapCount > 0) {
        matchedId = bestMatch.id;
      }
    }

    if (matchedId) {
      const finalProtocol = protocols.find(p => p.id === matchedId);
      if (finalProtocol) {
        setMatchedProtocolName(finalProtocol.title);
        setTimeout(() => {
          onMatchFound(finalProtocol.id);
          setMatchedProtocolName('');
        }, 1200);
        return;
      }
    }
    
    setErrorMessage('Nenhum protocolo correspondente encontrado na base offline.');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-white/70 border border-blue-100 rounded-3xl relative overflow-hidden shadow-sm space-y-5">
      {/* Absolute glow effects */}
      {isListening && (
        <span className="absolute inset-0 bg-blue-500/5 animate-pulse pointer-events-none" />
      )}

      <div className="flex flex-col items-center gap-4">
        <div className="relative group">
          {isListening && (
            <div className="absolute -inset-4 bg-red-400/20 rounded-full blur-xl animate-ping px-1"></div>
          )}
          {!isListening && (
            <div className="absolute -inset-4 bg-blue-400/15 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-300"></div>
          )}
          <button
            id="btn_mic_action"
            type="button"
            onClick={isListening ? stopListening : startListening}
            className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-350 select-none border-4 border-white shadow-xl ${
              isListening
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
        <div className="flex items-center gap-1 h-6">
          <div className="w-1 bg-red-500 rounded-full h-2 animate-[pulse_0.4s_infinite_alternate]" />
          <div className="w-1 bg-red-400 rounded-full h-4 animate-[pulse_0.6s_infinite_alternate]" />
          <div className="w-1 bg-red-500 rounded-full h-3 animate-[pulse_0.3s_infinite_alternate]" />
          <div className="w-1 bg-red-400 rounded-full h-5 animate-[pulse_0.5s_infinite_alternate]" />
          <div className="w-1 bg-red-500 rounded-full h-2 animate-[pulse_0.7s_infinite_alternate]" />
        </div>
      )}

      {/* Understood text or status message */}
      {transcript && (
        <div className="py-2 px-4 bg-blue-50/80 border border-blue-100 text-blue-950 rounded-xl text-xs max-w-sm text-center font-medium leading-relaxed shadow-sm">
          <span className="text-slate-500 font-semibold">Entendendo:</span> <span className="text-blue-700 font-extrabold font-mono">"{transcript}"</span>
        </div>
      )}

      {matchedProtocolName && (
        <div className="py-2 px-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs text-center flex items-center justify-center gap-2 animate-bounce shadow-sm font-bold">
          <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Redirecionando para: {matchedProtocolName}</span>
        </div>
      )}

      {errorMessage && (
        <div className="py-2 px-4 bg-red-50 border border-red-150 text-red-800 rounded-xl text-xs flex items-center gap-2 max-w-sm shadow-sm transition-all">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span className="font-semibold leading-relaxed">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
