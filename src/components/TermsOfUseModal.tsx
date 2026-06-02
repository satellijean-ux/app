import React from 'react';
import { ShieldAlert, CheckCircle, XCircle, Phone } from 'lucide-react';

interface TermsOfUseModalProps {
  onAccept: () => void;
  onDecline: () => void;
  isDeclined: boolean;
  onReset: () => void;
}

export const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({
  onAccept,
  onDecline,
  isDeclined,
  onReset,
}) => {
  if (isDeclined) {
    return (
      <div className="fixed inset-0 bg-slate-900/65 z-50 flex flex-col items-center justify-center p-6 text-center backdrop-blur-md">
        <div className="max-w-md w-full bg-white border border-red-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-slate-800">
          {/* Subtle background emergency pulses */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="w-16 h-16 bg-red-100 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-8 h-8 text-red-600 animate-pulse" />
          </div>

          <h2 className="text-2xl font-bold text-red-900 mb-3 tracking-tight">
            Acesso Restrito / Negado
          </h2>

          <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
            Você recusou os Termos de Uso e Responsabilidade. Para sua segurança e conformidade legal, as instruções operacionais de APH offline não podem ser exibidas sem o seu consentimento prévio.
          </p>

          <p className="text-slate-500 text-xs leading-relaxed mb-6 bg-red-50/50 p-4 rounded-2xl border border-red-100">
            <strong className="text-red-950">AVISO DE EMERGÊNCIA:</strong> Se você estiver presenciando uma situação de emergência real com risco de vida, ligue imediatamente para os números oficiais de atendimento médico.
          </p>

          <div className="space-y-3">
            <a
              href="tel:192"
              className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 fill-white/10" />
              Ligar para o SAMU (192)
            </a>
            
            <button
              onClick={onReset}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-2xl transition-colors text-sm"
            >
              Voltar e Aceitar o Termo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white border border-blue-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col text-slate-800">
        {/* Decorative lighting */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 border-b border-blue-50 pb-5 mb-5 shrink-0">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-900 tracking-tight">Termos de Uso</h1>
            <p className="text-xs text-slate-400 font-medium">Atendimento Pré-Hospitalar Emergencial</p>
          </div>
        </div>

        <div className="overflow-y-auto pr-1 flex-1 py-1 text-slate-600 text-sm space-y-4 font-normal leading-relaxed">
          <p className="bg-blue-50 text-blue-950 border border-blue-100 p-4 rounded-2xl font-semibold text-[15px] leading-relaxed">
            O aplicativo é apenas demonstrativo e o conteúdo não substitui, em hipótese alguma, um parecer médico ou o acionamento dos serviços de emergência oficiais.
          </p>
          
          <p className="text-slate-600">
            Ao utilizar este sistema de Atendimento de APH offline, você reconhece e concorda que:
          </p>

          <ol className="list-decimal list-inside space-y-2.5 text-slate-500 pl-1 text-[13px]">
            <li>As diretrizes estão alinhadas com manuais públicos, mas servem exclusivamente como material educativo complementar ou apoio conceitual rápido.</li>
            <li>Qualquer intervenção de primeiros socorros deve ser idealmente supervisionada ou orientada por profissionais de saúde credenciados através de canais como o <strong className="text-blue-900">SAMU (192)</strong> ou <strong className="text-blue-900">Bombeiros (193)</strong>.</li>
            <li>O usuário assume toda a responsabilidade pelas ações voluntárias tomadas com base nas informações consultadas neste utilitário offline.</li>
          </ol>

          <p className="border-t border-blue-50 pt-4 text-[11px] text-slate-400 text-center font-medium">
            Este aplicativo cumpre diretrizes de utilidade pública simplificada offline.
          </p>
        </div>

        <div className="mt-6 border-t border-blue-50 pt-5 flex gap-4 shrink-0">
          <button
            id="btn_decline_terms"
            onClick={onDecline}
            className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <XCircle className="w-4 h-4" />
            Não
          </button>
          
          <button
            id="btn_accept_terms"
            onClick={onAccept}
            className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer select-none active:scale-[0.98]"
          >
            <CheckCircle className="w-4 h-4" />
            Sim (Aceito)
          </button>
        </div>
      </div>
    </div>
  );
};
