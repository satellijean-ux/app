export interface TriageOption {
  label: string;
  description?: string;
  nextNode: string; // Dynamic path ID: sub-question (e.g. 'q2') or terminal protocol ID (e.g. 'parada-cardiorespiratoria')
  severity?: 'critical' | 'urgent' | 'moderate' | 'normal' | 'informative';
}

export interface TriageNode {
  id: string;
  question: string;
  alert?: string;
  isHighRisk?: boolean;
  options: TriageOption[];
}

export const TRIAGE_TREE: Record<string, TriageNode> = {
  q1: {
    id: 'q1',
    question: 'A vítima está acordada e responde quando você fala com ela?',
    options: [
      { 
        label: 'Sim', 
        description: 'Vítima consciente, reage, fala ou pisca', 
        nextNode: 'q3',
        severity: 'normal'
      },
      { 
        label: 'Não', 
        description: 'Inconsciente, sem respostas a estímulos', 
        nextNode: 'q2',
        severity: 'critical'
      },
      { 
        label: 'Não tenho certeza', 
        description: 'Parece confusa, desfalecida ou sonolenta', 
        nextNode: 'q2',
        severity: 'urgent'
      }
    ]
  },
  q2: {
    id: 'q2',
    question: 'A vítima está respirando normalmente?',
    alert: '⚠️ AVALIAÇÃO VITAL CRÍTICA. Aproxime o ouvido da boca e observe se o peito sobe por 5 a 10 segundos.',
    isHighRisk: true,
    options: [
      { 
        label: 'Sim, respira normalmente', 
        description: 'O peito sobe e desce, ouve-se a entrada de ar', 
        nextNode: 'inconsciente-respirando',
        severity: 'urgent'
      },
      { 
        label: 'Não, não respira ou tem espasmos', 
        description: 'Asfixia total, dentes travados ou parado', 
        nextNode: 'parada-cardiorespiratoria',
        severity: 'critical'
      },
      { 
        label: 'Não sei reconhecer', 
        description: 'Na dúvida, assuma gravidade máxima!', 
        nextNode: 'parada-cardiorespiratoria',
        severity: 'critical'
      }
    ]
  },
  q3: {
    id: 'q3',
    question: 'Qual destas situações parece mais próxima do que está acontecendo com a vítima?',
    options: [
      { label: 'Está engasgada', description: 'Obstrução física por alimentos ou objetos', nextNode: 'q_engasgo' },
      { label: 'Está se afogando', description: 'Acidente na água, piscina ou mar', nextNode: 'q_afogamento' },
      { label: 'Está convulsionando', description: 'Crise de tremores, batendo os dentes ou espasmos', nextNode: 'q_convulsao' },
      { label: 'Está sangrando muito', description: 'Corte exposto ou sangramento jorrando ativo', nextNode: 'q_sangramento' },
      { label: 'Sofreu queda ou acidente', description: 'Traumatismos de ossos ou acidentes automobilísticos', nextNode: 'q_trauma' },
      { label: 'Sofreu queimadura', description: 'Água fervente, fogo, eletricidade ou química', nextNode: 'q_queimadura' },
      { label: 'Levou choque elétrico', description: 'Contato físico com tomadas ou fiação viva', nextNode: 'q_choque' },
      { label: 'Está com falta de ar', description: 'Respiração rápida, cansaço ou chiando', nextNode: 'q_falta_ar' },
      { label: 'Está com dor forte no peito', description: 'Dor ou aperto no centro do tórax ou esquerdo', nextNode: 'q_dor_peito' },
      { label: 'Passando mal após picada ou mordida', description: 'Cobra, aranha, escorpião ou abelha', nextNode: 'q_picada' },
      { label: 'Tomou veneno ou remédio demais', description: 'Ingestão de substâncias químicas tóxicas', nextNode: 'q_intoxicacao' },
      { label: 'Outro problema', description: 'Dores de dente, plantas e avaliação geral adicional', nextNode: 'q_outro' }
    ]
  },
  q_engasgo: {
    id: 'q_engasgo',
    question: 'A vítima consegue tossir ou falar?',
    options: [
      { 
        label: 'Sim (Consegue tossir ou emitir sons)', 
        description: 'Engasgo parcial. Via aérea parcialmente liberta', 
        nextNode: 'engasgo-parcial',
        severity: 'moderate'
      },
      { 
        label: 'Não (Sufocando sem voz ou gemidos)', 
        description: 'Engasgo total e severo. Perigo de paragem cerebral rápida', 
        nextNode: 'engasgo-total',
        severity: 'critical'
      }
    ]
  },
  q_afogamento: {
    id: 'q_afogamento',
    question: 'A vítima já foi retirada da água?',
    options: [
      { 
        label: 'Não (Ainda está na água ou em perigo)', 
        description: 'Orientações imediatas para salvamento e resgate', 
        nextNode: 'afogamento-resgate',
        severity: 'critical'
      },
      { 
        label: 'Sim (Já está em terra firme ou margem)', 
        description: 'Passar às condutas médicas de aquecimento e ventilação', 
        nextNode: 'q_afogamento_terra',
        severity: 'urgent'
      }
    ]
  },
  q_afogamento_terra: {
    id: 'q_afogamento_terra',
    question: 'Em terra firme, a vítima respira normalmente?',
    options: [
      { 
        label: 'Sim, respira', 
        description: 'Cuidados pós-afogamento (posição lateral e aquecer)', 
        nextNode: 'afogamento-cuidados',
        severity: 'urgent'
      },
      { 
        label: 'Não, não respira', 
        description: 'Iniciar Reanimação Cardiopulmonar (RCP) urgente!', 
        nextNode: 'parada-cardiorespiratoria',
        severity: 'critical'
      }
    ]
  },
  q_convulsao: {
    id: 'q_convulsao',
    question: 'A convulsão está acontecendo agora?',
    options: [
      { 
        label: 'Sim (Se debatendo ou tremendo neste instante)', 
        nextNode: 'convulsao-ativa',
        severity: 'critical'
      },
      { 
        label: 'Não (Teve a crise, mas já parou e está dormindo/mole)', 
        nextNode: 'convulsao-pos',
        severity: 'moderate'
      }
    ]
  },
  q_sangramento: {
    id: 'q_sangramento',
    question: 'O sangramento é intenso ou não para?',
    alert: '⚠️ HEMORRAGIA ATIVA EXANGUINANTE. Uma perda massiva de sangue gera parada cardíaca rápida.',
    isHighRisk: true,
    options: [
      { 
        label: 'Sim, jorra ou mancha roupas pesadamente', 
        description: 'Aplicação imediata de pressão direta e torniquetes se braço/perna', 
        nextNode: 'controle-hemorragias',
        severity: 'critical'
      },
      { 
        label: 'Não, sob controle', 
        description: 'Arranhões leves ou sangramento sutil localizado', 
        nextNode: 'ferimentos-leves',
        severity: 'moderate'
      }
    ]
  },
  q_trauma: {
    id: 'q_trauma',
    question: 'A vítima consegue mover braços e pernas normalmente?',
    options: [
      { 
        label: 'Não (Sente dor extrema na coluna, formigamento ou incapacidade)', 
        description: 'Absoluto risco de lesão medular permanente!', 
        nextNode: 'lesao-coluna',
        severity: 'critical'
      },
      { 
        label: 'Sim (Consegue se movimentar ou sente membros)', 
        description: 'Ferimentos associados a fraturas ou torções locais de ossos', 
        nextNode: 'fraturas-imobilizacoes',
        severity: 'urgent'
      }
    ]
  },
  q_queimadura: {
    id: 'q_queimadura',
    question: 'O que causou a queimadura?',
    options: [
      { label: 'Fogo ou chamas diretas', nextNode: 'queimadura-fogo', severity: 'critical' },
      { label: 'Líquido quente (óleo, vapor ou água fervendo)', nextNode: 'queimadura-termica', severity: 'urgent' },
      { label: 'Produto químico nocivo (ácidos ou soda)', nextNode: 'queimadura-quimica', severity: 'critical' },
      { label: 'Eletricidade (choques de tomadas ou fiação)', nextNode: 'queimadura-eletrica', severity: 'critical' }
    ]
  },
  q_choque: {
    id: 'q_choque',
    question: 'A vítima ainda está em contato físico com a fonte elétrica ativa?',
    alert: '⚠️ PERIGO DE ELETROCUSSÃO. Não toque na vítima se ela estiver enlaçada no cabo ativo!',
    isHighRisk: true,
    options: [
      { 
        label: 'Sim (Ainda sob tensão ou presa na fiação)', 
        nextNode: 'choque-cena',
        severity: 'critical'
      },
      { 
        label: 'Não (Livre da fiação ou disjuntor desligado)', 
        nextNode: 'q_choque_livre',
        severity: 'urgent'
      }
    ]
  },
  q_choque_livre: {
    id: 'q_choque_livre',
    question: 'O acidentado responde e respira normalmente?',
    options: [
      { 
        label: 'Não respira/Está desacordado', 
        nextNode: 'parada-cardiorespiratoria',
        severity: 'critical'
      },
      { 
        label: 'Sim, respira e está acordado', 
        description: 'Cuidados de queimaduras elétricas nas bases de contato', 
        nextNode: 'queimadura-eletrica',
        severity: 'urgent'
      }
    ]
  },
  q_falta_ar: {
    id: 'q_falta_ar',
    question: 'A vítima consegue falar uma frase completa sem parar para respirar?',
    options: [
      { 
        label: 'Não (Impossibilitada de falar 3 palavras seguidas)', 
        nextNode: 'falta-ar-grave',
        severity: 'critical'
      },
      { 
        label: 'Sim (Apresenta cansaço ou chiado mas fala)', 
        nextNode: 'falta-ar-moderada',
        severity: 'urgent'
      }
    ]
  },
  q_dor_peito: {
    id: 'q_dor_peito',
    question: 'A dor no peito começou de repente e é forte/aperto?',
    alert: '⚠️ SUSPEITA ELEVADA DE INFARTO AGUDO DO MIOCÁRDIO.',
    isHighRisk: true,
    options: [
      { 
        label: 'Sim (Forte, em aperto ou queimação pesada)', 
        nextNode: 'dor-peito-grave',
        severity: 'critical'
      },
      { 
        label: 'Não (Pequena dor localizada ou fisgada menor)', 
        nextNode: 'dor-peito-moderada',
        severity: 'moderate'
      }
    ]
  },
  q_picada: {
    id: 'q_picada',
    question: 'A vítima apresenta dificuldade para respirar, inchaço geral de lábios ou desmaio?',
    alert: '⚠️ RISCO HISTÓRICO DE CHOQUE ANAFILÁTICO (RELAÇÃO ALÉRGICA SEVERA).',
    isHighRisk: true,
    options: [
      { 
        label: 'Sim (Inchaço severo no rosto ou asfixia)', 
        nextNode: 'anafilaxia',
        severity: 'critical'
      },
      { 
        label: 'Não (Apenas dor no local da picada, vermelhidão ou febre local)', 
        nextNode: 'animais-peconhentos',
        severity: 'urgent'
      }
    ]
  },
  q_intoxicacao: {
    id: 'q_intoxicacao',
    question: 'Como ocorreu o contato com a substância tóxica?',
    options: [
      { label: 'Ingeriu o produto ou remédios pela boca', nextNode: 'intoxicacao-ingestao', severity: 'critical' },
      { label: 'Inalou fumaça, vapores ou gás tóxico', nextNode: 'intoxicacao-inalacao', severity: 'critical' },
      { label: 'Entrou em contato direto na pele ou olhos', nextNode: 'intoxicacao-pele', severity: 'urgent' }
    ]
  },
  q_outro: {
    id: 'q_outro',
    question: 'Qual outra área melhor descreve o evento?',
    options: [
      { label: 'Problemas odontológicos (Dente arrancado em impacto)', nextNode: 'avulsao-dentaria', severity: 'moderate' },
      { label: 'Ingestão ou ferimento com plantas de casa', nextNode: 'plantas-toxicas', severity: 'moderate' },
      { label: 'Sangramento no nariz', nextNode: 'sangramento-nasal', severity: 'moderate' },
      { label: 'Violento sangramento do ouvido interno', nextNode: 'sangramento-ouvido', severity: 'critical' }
    ]
  }
};
