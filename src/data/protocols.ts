import { Protocol } from '../types';

export const protocols: Protocol[] = [
  {
    id: 'avaliacao-cena',
    title: 'Avaliação da Cena',
    icon: 'Shield',
    severity: 'informative',
    meta: 'Passo 01 • Segurança',
    shortDesc: 'Garanta a segurança e evite tornar-se uma nova vítima antes de se aproximar.',
    immediateAction: 'NÃO SE APROXIME se houver riscos iminentes de explosão, desabamento ou eletrocussão.',
    steps: [
      'Pare e analise todo o cenário de longe por 5 segundos.',
      'Identifique perigos visíveis: cabos elétricos caídos, tráfego ativo de veículos, fogo, fumaça, colapso de estruturas ou presença de produtos químicos.',
      'Utilize equipamentos de proteção individual (EPI) se disponíveis, como luvas de látex de proteção.',
      'Avalie o número total de vítimas na cena para relatar ao serviço de emergência.',
      'Ligue para o SAMU (192) ou Bombeiros (193) imediatamente, repassando o tipo de ocorrência, perigos locais e quantidade de envolvidos.'
    ],
    forbidden: [
      'Não toque na vítima ou entre na zona quente se a eletricidade ainda não tiver sido desligada.',
      'Não realize tentativas heroicas sem ferramentas ou treinamento de segurança de cena.',
      'Não estacione o seu veículo de forma a obstruir a via ou a passagem das ambulâncias.'
    ],
    voiceKeywords: ['cena', 'segurança', 'local', 'ambiente', 'perigo', 'risco', 'ao redor']
  },
  {
    id: 'avaliacao-vitima2',
    title: 'Avaliação da Vítima (XABCDE)',
    icon: 'Activity',
    severity: 'urgent',
    meta: 'Passo 02 • Triagem',
    shortDesc: 'Abordagem sistemática para identificar lesões de risco iminente de morte.',
    immediateAction: 'Verifique se a vítima responde e respira adequadamente em até 10 segundos.',
    steps: [
      'Aproxime-se de frente (de onde ela possa te ver) para evitar que gire o pescoço e agrave lesões de coluna.',
      'Abaixe-se ao lado da vítima, apoie suavemente as mãos nos ombros dela e chame em voz alta: "Senhor / Senhora, você me ouve?"',
      'X - Hemorragia Exanguinante: Se houver sangramento arterial jorrando, trate-o imediatamente antes de tudo.',
      'A - Vias Aéreas e Coluna: Cheque se há obstrução na boca e estabilize manualmente a coluna cervical.',
      'B - Respiração (Boa Ventilação): Aproxime o ouvido da boca da vítima, olhando para o peito dela (ver, ouvir e sentir) por 5 a 10 segundos. Veja se o tórax expande.',
      'C - Circulação: Cheque pulso radial ou carotídeo, temperatura e cor da pele (fria, suada, pálida).',
      'D - Disfunção Neurológica: Avalie o nível de consciência (está desperto, responde a estímulos verbais, reage apenas à dor ou está totalmente inconsciente?).',
      'E - Exposição e Controle de Hipotermia: Examine outras lesões, cobrindo a vítima em seguida para evitar resfriamento.'
    ],
    forbidden: [
      'Não mude a vítima de posição bruscamente sem estabilizar a coluna cervical.',
      'Não force a sustentação do pescoço em ângulos não naturais se houver resistência física.'
    ],
    voiceKeywords: ['vítima', 'avaliação', 'consciência', 'desperto', 'acordar', 'reage', 'pulso', 'respiração']
  },
  {
    id: 'controle-hemorragias',
    title: 'Controle de Hemorragias',
    icon: 'Droplet',
    severity: 'critical',
    meta: 'Protocolo de Trauma',
    shortDesc: 'Métodos definitivos para cessar perdas severas de sangue antes da chegada do resgate.',
    immediateAction: 'Aplique pressão direta firme sobre o ponto do sangramento com pano limpo ou gaze.',
    steps: [
      'Coloque um pano limpo, compressas ou gaze diretamente no ferimento e pressione fortemente com as duas mãos.',
      'Se o sangue encharcar o primeiro pano, NÃO o remova (isso remove os coágulos formados). Coloque um segundo pano por cima e continue pressionando.',
      'Se a hemorragia for severa, em braço ou perna, e a pressão direta não funcionar: use um Torniquete comercial (ou improvisado de faixa larga) posicionado 5 a 7 centímetros ACIMA da ferida (nunca sobre articulação).',
      'Gire o torniquete até que o sangramento pare por completo e o pulso distal suma. Prenda-o firmemente.',
      'ANOTE a hora exata da aplicação do torniquete na testa da vítima ou no próprio dispositivo (ex: "TQ 15:45").',
      'Mantenha a vítima deitada e aquecida sob um cobertor ou casaco para diminuir o risco de choque hipovolêmico.'
    ],
    forbidden: [
      'Nunca retire o primeiro pano que entrou em contato direto com a ferida.',
      'Não use arames, cordas finas ou fivelas estreitas para improvisar torniquetes (risco de amputação do membro).',
      'Nunca desaperte o torniquete depois de aplicado, isso só é feito pelo cirurgião no hospital.'
    ],
    voiceKeywords: ['sangue', 'sangrando', 'hemorragia', 'cortou', 'corte', 'torniquete', 'ferimento', 'veia', 'artéria']
  },
  {
    id: 'sangramento-nasal',
    title: 'Sangramento Nasal',
    icon: 'HeartOff',
    severity: 'moderate',
    meta: 'Epistaxe',
    shortDesc: 'Como estancar sangramentos na mucosa do nariz de forma segura e rápida.',
    immediateAction: 'Incline a cabeça da vítima levemente para a FRENTE. Nunca deite a vítima de costas.',
    steps: [
      'Faça a vítima sentar de cabeça ligeiramente inclinada para frente (isso evita que ela engula sangue e sofra náuseas ou asfixia).',
      'Faça uma pressão contínua, usando o polegar e o indicador para fechar/apertar as narinas (fazer pinça) durante 10 minutos diretos.',
      'Peça para a vítima respirar exclusivamente pela boca durante este período.',
      'Aplique compressas frias ou gelo envolto em um pano na ponte do nariz para causar vasoconstricção.',
      'Após 10 minutos, alivie a pressão suavemente. Se o sangramento continuar, repita o processo por mais 10 minutos.',
      'Oriente a não assoar o nariz ou fazer esforços nas próximas duas horas após a interrupção.'
    ],
    forbidden: [
      'Nunca incline a cabeça para trás, pois isso direciona o sangue para a garganta, estômago ou pulmões.',
      'Não introduza algodão, papel higiênico ou gazes dentro das narinas de forma profunda.'
    ],
    voiceKeywords: ['nariz', 'nasal', 'sangue no nariz', 'sangramento nasal', 'sangrar nariz', 'epistaxe']
  },
  {
    id: 'sangramento-ouvido',
    title: 'Sangramento no Ouvido',
    icon: 'VolumeX',
    severity: 'urgent',
    meta: 'Otorragia • Risco TCE',
    shortDesc: 'Manejo de sangramentos otológicos, frequentemente associados a traumatismos craniais.',
    immediateAction: 'NÃO tampe ou bloqueie o sangramento do ouvido interno. Deixe o fluido sair livremente.',
    steps: [
      'Se o sangramento ocorrer após uma queda ou pancada na cabeça, suspeite de fratura de base de crânio e imobilize imediatamente o pescoço da vítima.',
      'Deite a vítima mantendo o ouvido sangrante virado do lado PARA BAIXO (isso facilita a saída do sangue, reduzindo a pressão intracraniana).',
      'Coloque uma gaze ou pano limpo e solto apenas por fora da orelha para absorver o sangue, sem pressionar para dentro.',
      'Avalie se há saída de líquido claro misturado ao sangue (líquor), sinal forte de trauma grave.',
      'Monitore o nível de resposta, tamanho das pupilas e possíveis sinais de confusão mental e convulsão.',
      'Aguarde o socorro especializado urgência (SAMU - 192) mantendo a estabilização cervical.'
    ],
    forbidden: [
      'Não insira cotonetes, gazes, algodão de forma profunda ou qualquer tipo de tampão no canal auditivo.',
      'Não tente deitar a vítima com o ouvido ferido virado para cima (o acúmulo de sangue pode aumentar riscos intracranianos).'
    ],
    voiceKeywords: ['ouvido', 'orelha', 'otorragia', 'cabeça', 'pancada na cabeça', 'sangue no ouvido']
  },
  {
    id: 'fraturas-imobilizacoes',
    title: 'Fraturas e Imobilizações',
    icon: 'Bone',
    severity: 'urgent',
    meta: 'Traumatologia',
    shortDesc: 'Estabilização de lesões ósseas e articulares em membros para evitar agravamento nervoso ou vascular.',
    immediateAction: 'NÃO tente recolocar o osso quebrado ou torto de volta no lugar.',
    steps: [
      'Examine o local sem tocar excessivamente. Verifique se há fratura exposta (presença de osso visível ou ferimento próximo).',
      'Se houver ferimento/fratura exposta: cubra a área com compressa estéril ou pano limpo úmido. Nunca empurre o osso para dentro. Coloque pressão nas BORDAS do corte se houver sangramento.',
      'Imobilize o membro na posição EXATA em que ele foi encontrado, sem mexer na angulação.',
      'A imobilização deve incluir obrigatoriamente a articulação ACIMA e a articulação ABAIXO do ponto de suspeita de fratura.',
      'Use talas improvisadas rígidas (papelão resistente dobrado, revistas grossas, madeira leve, galhos planos) acolchoadas com toalhas ou panos macios.',
      'Prenda a tala com ataduras, fitas ou tiras de tecido de forma firme, mas sem apertar a ponto de bloquear a circulação sanguínea.',
      'Mantenha as pontas dos dedos expostas para checar se continuam quentes e rosadas (tempo de enchimento capilar menor que 2 segundos).'
    ],
    forbidden: [
      'Nunca tente recolocar o osso no lugar ou tracionar o membro por conta própria.',
      'Não aperte as amarras direto sobre a fratura (faça-as acima e abaixo da fratura).',
      'Não permita que a vítima ande ou force o membro fraturado.'
    ],
    voiceKeywords: ['osso', 'fratura', 'quebrou', 'quebrado', 'perna torta', 'braço torto', 'exposta', 'tala', 'imobilizar']
  },
  {
    id: 'transporte-seguro',
    title: 'Transporte Seguro',
    icon: 'Truck',
    severity: 'moderate',
    meta: 'Remoção / Alinhamento',
    shortDesc: 'Indicações estritas para mover vítimas preservando o alinhamento da coluna.',
    immediateAction: 'Mantenha a vítima imóvel. Só a movimente em caso de perigo de morte iminente (explosão, fogo, afogamento).',
    steps: [
      'Aguarde o SAMU (192) que possui macas e colares cervicais ideais para o transporte seguro.',
      'Se for obrigatório retirar a vítima da via por risco imediato, coordene o rolamento em bloco (idealmente com 3 ou 4 socorristas).',
      'O Líder fica na cabeça da vítima, segurando firmemente as laterais do pescoço, e comanda o ritmo do movimento.',
      'Os outros socorristas posicionam as mãos ao longo dos quadris, ombros e pernas da vítima para virá-la harmonicamente de lado em um único bloco, sem torções na coluna.',
      'Deslize uma superfície rígida (como uma tábua larga de madeira ou porta retirada) sob as costas da vítima e devolva-a à posição plana.',
      'Amarre o tronco e pernas na superfície rígida usando faixas ou lençóis, e apoie toalhas enroladas nas laterais da cabeça para evitar que oscile durante o transporte.'
    ],
    forbidden: [
      'Nunca puxe a vítima pelos braços ou pernas de forma desordenada.',
      'Não dobre a coluna, pescoço ou quadris da vítima de trauma durante a remoção.',
      'Não transporte vítimas em carros de passeio sem imobilização adequada, exceto em cenários de impossibilidade de resgate oficial.'
    ],
    voiceKeywords: ['transporte', 'mudar', 'carregar', 'arrastar', 'mover', 'maca', 'ambulância', 'coluna']
  },
  {
    id: 'parada-cardiorespiratoria',
    title: 'Parada Cardiorrespiratória (PCR)',
    icon: 'FlameKindling',
    severity: 'critical',
    meta: 'SUPORTE BÁSICO DE VIDA',
    shortDesc: 'Reanimação Cardiopulmonar (RCP) imediata para preservar a oxigenação cerebral.',
    immediateAction: 'Ligue para o 192 e comece compressões torácicas firmes e rápidas no centro do peito imediatamente!',
    steps: [
      'Posicione a vítima totalmente deitada de costas sobre uma superfície plana e dura (chão).',
      'Ajoelhe-se ao lado do peito da vítima, mantenha suas coxas perpendiculares ao solo.',
      'Coloque o calcanhar da sua mão dominante exatamente no centro do peito da vítima (entre os mamilos, sobre o osso esterno).',
      'Entrelace os dedos da outra mão por cima da primeira, mantendo as pontas dos dedos afastadas das costelas.',
      'Mantenha seus braços completamente esticados e bloqueados no cotovelo, sem dobrá-los.',
      'Utilize o peso do seu próprio tronco para comprimir o tórax, descendo de 5 a 6 centímetros de profundidade.',
      'A velocidade deve ser de 100 a 120 compressões por minuto (ritmo da música "Stayin\' Alive"). Permita o retorno total do tórax após cada compressão.',
      'Se você tiver treinamento oficial de APH: realize 30 compressões seguidas por 2 ventilações usando máscara protetora. Se você for leigo: faça compressões contínuas sem parar até o socorro chegar (RCP Hands-Only).',
      'Se houver um DEA (Desfibrilador Externo Automático) no local, peça para alguém buscar, ligue-o e siga rigorosamente as instruções de voz do aparelho.'
    ],
    forbidden: [
      'Não interrompa as compressões por mais de 10 segundos.',
      'Não faça compressões em colchão macio ou sofás (sua força será perdida no amortecimento).',
      'Não dobre os cotovelos durante as compressões, pois isso cansará o socorrista em poucos segundos.'
    ],
    voiceKeywords: ['parada', 'cardíaca', 'coração', 'parou', 'massagem', 'rcp', 'respira', 'ressuscitar', 'reanimar', 'dea']
  },
  {
    id: 'desengasgo',
    title: 'Desengasgo (Manobra de Heimlich)',
    icon: 'Activity',
    severity: 'critical',
    meta: 'Manobra de Heimlich • OVACE',
    shortDesc: 'Ações imediatas para desobstruir as vias aéreas de adultos, crianças e bebês engasgados.',
    immediateAction: 'Identifique se o engasgamento é parcial (vítima tosse com força) ou total (não consegue falar ou respirar).',
    steps: [
      'Adultos e Crianças (Conscientes - Engasgo Total): Posicione-se por trás da vítima e abrace-a ao redor da cintura.',
      'Feche uma das mãos em punho e coloque o polegar diretamente na linha média do abdômen, logo acima do umbigo (boca do estômago).',
      'Segure o punho com a outra mão e realize compressões rápidas e vigorosas para DENTRO e para CIMA (movimento em "J").',
      'Repita o movimento continuamente até que o corpo estranho seja expelido ou a vítima perca a consciência.',
      'Bebês menores de 1 ano (Conscientes): Deite o bebê de bruços sobre o seu antebraço, inclinando a cabeça dele ligeiramente para baixo.',
      'Aplique 5 palmadas firmes no meio das costas (entre as escápulas) usando o calcanhar da sua mão.',
      'Vire o bebê de frente (barriga para cima) no outro braço e faça 5 compressões rápidas no peito com dois dedos (no centro do tórax).',
      'Vítima Inconsciente (Qualquer idade): Se o paciente desfalecer, posicione-o de costas no chão, ligue para o SAMU (192) e inicie imediatamente as compressões do protocolo de Parada Cardiorrespiratória (PCR). Olhe a boca antes de tentar ventilar.'
    ],
    forbidden: [
      'NÃO tente pinçar ou puxar o objeto às cegas com os dedos dentro da garganta da vítima (risco de empurrar o objeto ainda mais para baixo).',
      'NÃO dê sacudidas na vítima e nem dê tapas nas costas se ela estiver tossindo espontaneamente.',
      'NÃO faça a manobra de Heimlich abdominal clássica em gestantes ou pessoas muito obesas (faça compressões no centro do peito/esterno).'
    ],
    voiceKeywords: ['desengasgo', 'engasgo', 'engasgado', 'heimlich', 'asfixia', 'ovace', 'sufocado', 'sufocando', 'garganta', 'engasgou', 'desengasgar', 'sufocar']
  },
  {
    id: 'avulsao-dentaria',
    title: 'Avulsão Dentária (Dente que caiu)',
    icon: 'Smile',
    severity: 'moderate',
    meta: 'Odontologia de Urgência',
    shortDesc: 'Procedimento imediato para salvar dentes permanentes que saíram totalmente da gengiva em batidas.',
    immediateAction: 'Segure o dente exclusivamente pela COROA. Nunca toque na raiz do dente para não destruir fibras vitais.',
    steps: [
      'Localize o dente expelido o quanto antes no chão.',
      'Se o dente estiver sujo, lave-o muito delicadamente sob um fio de soro fisiológico ou leite frio por no máximo 10 segundos. Nunca esfregue.',
      'Se o acidente ocorreu com adultos, tente com cuidado reinserir o dente limpo de volta na cavidade da gengiva (alvéolo) e peça para o paciente morder de leve um pedaço de pano limpo para segurá-lo.',
      'Se o reimplante imediato não for viável: mergulhe o dente em um copo com Leite Frio, Soro Fisiológico ou, em último caso, em um recipiente com a própria saliva do acidentado.',
      'Procure atendimento urgente de um Cirurgião-Dentista o mais rápido possível (idealmente antes de completar 60 minutos do trauma).'
    ],
    forbidden: [
      'Nunca raspe, escove ou use desinfetantes ou álcool para limpar a raiz do dente.',
      'Não tente recolocar o dente na boca de crianças pequenas devido ao alto risco de engasgo ou aspiração do dente pelos pulmões.'
    ],
    voiceKeywords: ['dente', 'boca', 'gengiva', 'caiu dente', 'quebrou dente', 'avulsão', 'dentário']
  },
  {
    id: 'queimaduras',
    title: 'Queimaduras',
    icon: 'Flame',
    severity: 'critical',
    meta: 'Termologia',
    shortDesc: 'Resfriamento e proteção de tecidos cutâneos agredidos por calor, eletricidade ou química.',
    immediateAction: 'Resfrie a área afetada com água fria corrente em abundância por no mínimo 15 minutos.',
    steps: [
      'Coloque a região queimada sob água limpa corrente em temperatura ambiente (não gelada) por 15 a 20 minutos para conter a progressão do calor nos tecidos.',
      'Remova anéis, pulseiras, cintos e calçados antes que a região comece a inchar, evitando garroteamento do fluxo.',
      'Se as roupas estiverem coladas na queimadura profunda, corte o tecido ao redor com tesoura, mas nunca puxe o pano que estiver grudado na pele viva.',
      'Cubra a área queimada delicadamente com plástico filme de cozinha limpo (excelente pois não gruda na ferida) ou panos úmidos estéreis.',
      'Forneça água em pequenos goles para a vítima hidratar-se por via oral, desde que esteja completamente desperta e sem náuseas.'
    ],
    forbidden: [
      'Nunca passe pomadas caseiras, manteiga, pasta de dente, clara de ovo, óleo ou qualquer receita popular no local.',
      'Nunca fure as bolhas (flictenas) que se formarem, pois elas servem como barreira natural estéril contra infecções.',
      'Não aplique gelo diretamente na ferida, pois o frio extremo causa ainda mais destruição tecidual.'
    ],
    voiceKeywords: ['fogo', 'queimou', 'queimadura', 'quente', 'fervente', 'água quente', 'eletricidade', 'bolha']
  },
  {
    id: 'convulsao',
    title: 'Convulsão',
    icon: 'AlertTriangle',
    severity: 'urgent',
    meta: 'Neurologia',
    shortDesc: 'Cuidado passivo para proteger a cabeça e manter vias respiratórias livres durante crises epiléticas.',
    immediateAction: 'Afaste objetos duros do entorno e ampare a cabeça da vítima com algo macio.',
    steps: [
      'Não tente conter as sacudidas da vítima orquestradas pela crise física; apenas garanta que ela não bata com violência em quinas ou paredes.',
      'Coloque um casaco ou travesseiro macio sob a cabeça dela para amparar os movimentos convulsivos reflexos.',
      'Vire o corpo da vítima suavemente DE LADO (Posição Lateral de Segurança) assim que possível, permitindo que as secreções salivares ou vômito drenem para fora das vias aéreas preventivamente.',
      'Afrouxe o colarinho de camisas, gravatas e cintos apertados.',
      'Após a crise passar, a vítima entrará em um sono profundo de recuperação (período pós-ictal). Monitore a respiração e permaneça lá até que recupere totalmente a consciência.'
    ],
    forbidden: [
      'Nunca tente abrir a boca da vítima à força ou introduzir dedos, colheres, pedaços de madeira ou panos entre os dentes dela.',
      'Não jogue água fria no rosto da vítima e não dê líquidos para beber enquanto ela estiver desorientada.',
      'Não tente conter as contrações de braços e pernas com força física desproporcional.'
    ],
    voiceKeywords: ['convulsão', 'convulsionando', 'crise', 'espasmo', 'babando', 'epilepsia', 'batendo cabeça']
  },
  {
    id: 'desmaio',
    title: 'Desmaio (Síncope)',
    icon: 'Accessibility',
    severity: 'moderate',
    meta: 'Perda de Consciência',
    shortDesc: 'Restabelecimento do fluxo sanguíneo cerebral em episódios rápidos de perda dos sentidos.',
    immediateAction: 'Deite a vítima de barriga para cima e eleve as pernas cerca de 30 centímetros.',
    steps: [
      'Ajude a deitar a vítima em local plano e macio se ela der sinais prévios de tontura (fraqueza, visão embaçada, palidez, suor frio).',
      'Eleve as duas pernas da vítima paralelas entre 30 e 40 cm do chão (isso faz o sangue fluir com gravidade de volta ao cérebro de forma passiva).',
      'Afrouxe as roupas, gravatas, botões de camisa e cintos do paciente.',
      'Janelas e portas devem estar abertas para permitir boa ventilação e ar fresco.',
      'Chame a vítima pelo nome em voz média. Geralmente a recuperação total ocorre em menos de 2 minutos.',
      'Ao acordar, oriente a vítima a permanecer deitada por mais 5 minutos e só levantar de forma lenta, sentando primeiro.'
    ],
    forbidden: [
      'Não tente forçar a vítima a se levantar às pressas enquanto ela estiver pálida ou tonta.',
      'Não dê nada para cheirar (como álcool ou amônia) e nunca jogue copos d\'água no rosto.',
      'Não ministre sal nem açúcar na boca da vítima desmaiada devido ao alto risco de engasgo.'
    ],
    voiceKeywords: ['desmaio', 'desmaiou', 'tontura', 'caiu sem sentidos', 'apagou', 'apagando', 'síncope']
  },
  {
    id: 'intoxicacao',
    title: 'Intoxicação por Substâncias',
    icon: 'Skull',
    severity: 'urgent',
    meta: 'Toxicologia',
    shortDesc: 'Socorro contra a metabolização de agentes venenosos, químicos ou medicamentos em excesso.',
    immediateAction: 'Ligue imediatamente para o CIT Nacional (0800-722-6001) ou SAMU (192) com a embalagem do produto em mãos.',
    steps: [
      'Determine de forma rápida a substância causadora (medicamento, veneno de rato, produto de limpeza ácido/alcalino, agrotóxico).',
      'Se foi ingerido por via oral: NÃO provoque o vômito, pois produtos cáusticos queimam a garganta na descida e na subida, agravando o trato respiratório.',
      'Se foi por contato com a pele ou olhos: irrigue imediatamente a região afetada com água morna ou fria corrente por no mínimo 20 minutos.',
      'Se por inalação (gás/vazamento): mova a vítima imediatamente para uma área livre e ventilada com ar fresco puro e afrouxe roupas.',
      'Guarde e recolha o frasco, rótulo do produto ou restos da planta ingerida para levar e apresentar aos médicos no pronto-socorro.'
    ],
    forbidden: [
      'Nunca provoque o vômito na vítima que ingeriu ácidos, bases, derivados de petróleo (querosene, gasolina) ou substâncias desconhecidas.',
      'Não dê leite, água com sal ou carvão ativado sem a orientação de um toxicologista do telefone de emergência.'
    ],
    voiceKeywords: ['veneno', 'intoxicação', 'remedio demais', 'quimico', 'chumbinho', 'bebeu cloro', 'ácido', 'gás']
  },
  {
    id: 'afogamento',
    title: 'Afogamento',
    icon: 'Waves',
    severity: 'critical',
    meta: 'Salvamento Aquático',
    shortDesc: 'Resgate de vias aéreas inundadas por líquidos, priorizando a oxigenação sistêmica.',
    immediateAction: 'Primeira prioridade: Se o paciente não respira, realize 5 ventilações boca-a-boca imediatas.',
    steps: [
      'Retire a vítima da água de forma segura. Não tente o resgate nadando se você não possuir treinamento de salvamento aquático (use boias ou cordas).',
      'Coloque a vítima deitada em um plano firme. Limpe o rosto se houver resíduos na boca.',
      'Verifique se ela respira. Se NÃO estiver respirando, inicie imediatamente 5 ventilações de resgate (sopros boca-a-boca), o pulmão precisa de oxigênio de urgência.',
      'Se ainda não houver sinais de respiração normal, inicie as compressões cardíacas no padrão de 30 compressões para cada 2 ventilações.',
      'Previna a hipotermia acelerada: remova as roupas molhadas o mais rápido possível e cubra totalmente o corpo da vítima com toalhas ou mantas secas.',
      'Chame socorro profissional mesmo que a vítima se recupere rapidamente na cena, pois o afogamento tardio pode causar edema pulmonar horas depois.'
    ],
    forbidden: [
      'Não tente "espremer" ou chacoalhar a barriga da vítima de ponta-cabeça para expelir a água dos pulmões (método perigoso e ineficaz).',
      'Não negligencie o aquecimento corporal após a saída d\'água.'
    ],
    voiceKeywords: ['afogamento', 'água', 'piscina', 'mar', 'rio', 'afogou', 'bebeu água', 'engoliu água']
  },
  {
    id: 'animais-peconhentos',
    title: 'Animais Peçonhentos',
    icon: 'Bug',
    severity: 'urgent',
    meta: 'Epidemiologia: Região Norte & Rondônia',
    shortDesc: 'Tratamento de acidentes ofídicos com foco epidemiológico no Estado de Rondônia e Região Norte, alinhado 100% às diretrizes do Ministério da Saúde.',
    immediateAction: 'Mantenha a vítima deitada, em repouso absoluto e calma. Evite qualquer movimentação para que o veneno não se espalhe rapidamente pelo sistema circulatório.',
    steps: [
      'Mantenha a vítima deitada em posição confortável e em repouso absoluto.',
      'Mantenha a vítima hidratada, oferecendo água em pequenos goles se ela estiver consciente.',
      'Lave o local da picada imediatamente e de forma abundante apenas com água corrente e sabão neutro.',
      'Retire anéis, pulseiras, relógios ou calçados apertados no membro afetado antes que se inicie o inchaço severo.',
      'Busque atendimento médico urgente para aplicação do soro antiofídico específico (Soro Antibotrópico, Antilaquético, Anticrotálico ou Antielapídico) o mais rápido possível.',
      'Se possível e seguro, memorize ou tire uma foto da serpente para ajudar na identificação epidemiológica do gênero pela equipe médica.'
    ],
    forbidden: [
      'NÃO faça torniquete ou garrote de forma alguma no braço ou perna picados (concentra o veneno e acelera a necrose e perda de membros).',
      'NÃO corte o local da picada e NÃO sugue o veneno com a boca.',
      'NÃO aplique fumo, borra de café, urina, ervas, terra ou pomadas caseiras sobre a ferida para evitar infecções secundárias graves.',
      'NÃO ofereça bebidas alcoólicas, querosene ou medicamentos estimulantes à vítima.'
    ],
    catalogTitle: 'Catálogo de Serpentes de Interesse Médico (Ministério da Saúde - Brasil)',
    catalog: [
      {
        id: 'jararaca',
        name: 'Jararaca (Gênero Bothrops)',
        scientificName: 'Bothrops spp.',
        dangerLevel: 'high',
        symptoms: ['Dor intensa e imediata no local da picada', 'Inchaço acentuado com vermelhidão e calor', 'Manchas roxas de sangramento interno', 'Sangramentos subsequentes pelas gengivas e nariz.'],
        treatment: ['Soro Antibotrópico (aplicado exclusivamente em ambiente hospitalar).'],
        description: 'Responsável por cerca de 90% dos acidentes ofídicos no Brasil. Possui padrão de desenhos em forma de "V" invertido ao longo do dorso e fosseta loreal.',
        visualIdentifier: 'Desenhos geométricos em tons de cinza, marrom e preto. Fosseta loreal evidente (orifício entre o olho e a narina).',
        image: 'img_jararaca'
      },
      {
        id: 'cascavel',
        name: 'Cascavel (Gênero Crotalus)',
        scientificName: 'Crotalus durissus',
        dangerLevel: 'high',
        symptoms: ['Dor discreta local ou quase nula na picada', 'Instalação de pálpebras caídas (fácies miastênica / olhar de sono) em poucas horas', 'Visão dupla ou turva', 'Falta de ar', 'Urina com coloração marrom-escura ou avermelhada.'],
        treatment: ['Soro Anticrotálico (essencial para evitar falência renal severa).'],
        description: 'Possui cauda modificada com um guizo / chocalho característico na ponta. Habita regiões secas, campos abertos e áreas pedregosas.',
        visualIdentifier: 'Presença nítida de chocalho na ponta da cauda. Padrão de losangos escuros em todo o dorso.',
        image: 'img_cascavel'
      },
      {
        id: 'surucucu',
        name: 'Surucucu-pico-de-jaca (Gênero Lachesis)',
        scientificName: 'Lachesis muta',
        dangerLevel: 'high',
        symptoms: ['Dor extrema local com inchaço progressivo', 'Diarreia e fortes cólicas intestinais minutos após o acidente', 'Diminuição expressiva da frequência cardíaca', 'Náuseas e sangramentos.'],
        treatment: ['Soro Antilaquético ou Soro Antibotrópico-Laquético.'],
        description: 'A maior cobra peçonhenta das Américas (pode passar de 3 metros). Suas escamas são altamente salientes, lembrando a casca rugosa de uma jaca.',
        visualIdentifier: 'Escamas marrons ou amareladas espessas com manchas pretas em formato de losangos romboides ao longo do corpo.',
        image: 'img_surucucu'
      },
      {
        id: 'coral',
        name: 'Coral-Veradeira (Gênero Micrurus)',
        scientificName: 'Micrurus spp.',
        dangerLevel: 'high',
        symptoms: ['Praticamente nenhuma reação local visível', 'Fraqueza muscular generalizada progressiva rápida', 'Visão dupla e salivação excessiva', 'Parada muscular respiratória grave (asfixia neurotóxica) em poucas horas.'],
        treatment: ['Soro Antielapídico urgente (necessita isolamento de suporte respiratório).'],
        description: 'Cobra de padrão estético marcante extremamente venenosa que não possui fosseta loreal. Prefere ambientes semi-subterrâneos sob folhas e troncos.',
        visualIdentifier: 'Anéis coloridos vermelhos, pretos, e amarelos/brancos contornando todo o corpo longitudinalmente.',
        image: 'img_coral'
      }
    ],
    voiceKeywords: ['cobra', 'serpente', 'picada de cobra', 'peçonhento', 'aranha', 'escorpião', 'jararaca', 'cascavel', 'surucucu', 'coral', 'picou', 'ferrão']
  },
  {
    id: 'parto-urgencia',
    title: 'Parto de Urgência',
    icon: 'Baby',
    severity: 'critical',
    meta: 'Obstetrícia Emergencial',
    shortDesc: 'Apoio passivo e higiênico durante o nascimento inevitável fora do ambiente hospitalar.',
    immediateAction: 'Chame o socorro médico imediatamente e garanta um ambiente limpo, reservado e aquecido.',
    steps: [
      'Prepare um local seguro, confortável e limpo (use lençóis secos e limpos embaixo e por cima). Garanta a privacidade da gestante.',
      'Deite a gestante de costas com os joelhos dobrados e as coxas abertas. Mantenha o ambiente bem aquecido, pois os recém-nascidos perdem calor corporal muito rápido.',
      'Lave as mãos criteriosamente com água e sabonete.',
      'Incentive a mãe a respirar de forma profunda e compassiva durante as contrações. Apoie emocionalmente.',
      'Quando o topo da cabeça do bebê começar a coroar (aparecer na saída do canal de parto), apoie-a com as duas mãos abertas muito suavemente para orientar a descida. NÃO puxe o bebê de forma alguma!',
      'Peça para a mãe parar de fazer força assim que a cabeça sair totalmente. Verifique sutilmente se o cordão umbilical está enrolado ao redor do pescoço do bebê; se estiver, deslize-o levemente por cima da cabeça antes que os ombros avancem.',
      'Segure o bebê debaixo dos ombros enquanto escorrega o corpinho úmido. Coloque-o IMEDIATAMENTE deitado de bruços no peito da mãe (contato pele a pele direto no tronco dela). Cubra o bebê com lençol seco e limpo.',
      'Limpe o nariz e rosto do bebê se houver excesso de fluidos.',
      'Não corte o cordão umbilical a menos que estejam em isolamento severo sem resgate por mais de 3 horas. Se for estritamente obrigado a fazê-lo: amarre-o bem firme com duas tiras ou barbantes lavados (o primeiro a 15 cm do bebê e o segundo a 20 cm) e corte a fita umbilical EXATAMENTE entre os dois nós usando uma lâmina virgem limpa esterilizada.'
    ],
    forbidden: [
      'Nunca aperte ou pressione o abdômen da mãe para acelerar a descida.',
      'Não puxe ou tracione a cabeça ou os membros do bebê durante o parto.',
      'Não jogue água fria no bebê e não suspenda-o de cabeça para baixo batendo no bumbum como em filmes antigos.'
    ],
    voiceKeywords: ['parto', 'nascimento', 'bebe', 'bebê', 'grávida', 'ganhar neném', 'bolsa estourou', 'contrações', 'gestante']
  },
  {
    id: 'plantas-toxicas',
    title: 'Plantas Tóxicas',
    icon: 'Leaf',
    severity: 'informative',
    meta: 'Botânica de Urgência',
    shortDesc: 'Identificação offline completa de vegetais nocivos comuns em arranjos e jardins brasileiros.',
    immediateAction: 'NÃO induza o vômito em caso de ingestão. Remova pedaços restantes da boca e ligue pro CIT.',
    steps: [
      'Se a pessoa mastigou ou engoliu alguma planta suspeita, remova os resíduos visíveis que ainda estão soltos na cavidade bucal.',
      'Lave a boca excessivamente com água corrente gelada para reduzir a irritação tópica mecânica.',
      'Consulte a nossa base catalogada abaixo para identificar a espécie vegetal ingerida.',
      'Ligue para o Centro de Informações Toxicológicas (CIT) no 0800-722-6001 para saber a conduta específica para a toxina correspondente.',
      'Se a pele ou olhos entraram em contato com a seiva leitosa ou pelos das plantas, irrigue imediatamente com água corrente abundante por 20 minutos.'
    ],
    forbidden: [
      'NÃO induza o vômito, especialmente com plantas irritantes mucosas (Comigo-ninguém-pode) ou oleosas, pois isso gera lesão redobrada asfixiante.',
      'Não tente neutralizar ingerindo vinagre, carvão comum ou limão.'
    ],
    catalogTitle: 'Catálogo de Plantas Tóxicas Comuns (Brasil)',
    catalog: [
      {
        id: 'comigo-ninguem-pode',
        name: 'Comigo-ninguém-pode',
        scientificName: 'Dieffenbachia picta',
        dangerLevel: 'high',
        symptoms: ['Dor em queimação violenta imediata na boca, língua e lábios', 'Inchaço (edema) de tecidos orais dificultando fonação', 'Salivação abundante de saliva', 'Risco severo de bloqueio respiratório por edema de glote.'],
        treatment: ['Lavar intensamente com água limpa', 'Dar leite gelado em pequenos goles para acalentar', 'NÃO provocar vômitos', 'Procurar atendimento hospitalar de urgência.'],
        description: 'Planta ornamental clássica doméstica de folhas grandes verdes ovaladas com manchas brancas/amareladas centrais.',
        visualIdentifier: 'Folhas grandes verdes brilhantes com textura manchada de branco/creme ao centro.',
        image: 'img_comigo_ninguem_pode'
      },
      {
        id: 'mamona',
        name: 'Mamona (Carrapateira)',
        scientificName: 'Ricinus communis',
        dangerLevel: 'high',
        symptoms: ['Surgimento tardio de náuseas graves com vômitos', 'Cólicas abdominais intensas', 'Diarreia sanguinolenta contínua', 'Desidratação fulminante', 'Toxicidade celular renal por ingestão das sementes.'],
        treatment: ['Internação hospitalar imediata para hidratação venosa e carvão ativado nos primeiros minutos.'],
        description: 'Arbusto muito comum em terrenos baldios brasileiros. Produz frutos espinhosos amarelos/vermelhos contendo sementes rajadas extremamente tóxicas (Ricina).',
        visualIdentifier: 'Folhas recortadas em formato de estrela. Frutos redondos com espinhos moles contendo sementes parecidas com carrapatos.',
        image: 'img_mamona'
      },
      {
        id: 'copo-de-leite',
        name: 'Copo-de-leite',
        scientificName: 'Zantedeschia aethiopica',
        dangerLevel: 'medium',
        symptoms: ['Salivação abundante', 'Queimação extrema em toda a cavidade oral', 'Dificuldade de deglutição', 'Inchaço da glote', 'Vômitos.'],
        treatment: ['Administração de analgésicos sob prescrição médica', 'Lavagem mecânica exaustiva das mucosas', 'Compressas de gelo externas no pescoço.'],
        description: 'Flor branca elegante no formato de cálice com um espádice amarelo central.',
        visualIdentifier: 'Inflorescência branca característica em forma de copo com bastão amarelo central.',
        image: 'img_copo_de_leite'
      },
      {
        id: 'espada-sao-jorge',
        name: 'Espada-de-São-Jorge',
        scientificName: 'Sansevieria trifasciata',
        dangerLevel: 'low',
        symptoms: ['Irritação leve de mucosas', 'Salivação excessiva', 'Náuseas leves', 'Distúrbios digestivos transitórios se ingerida em grande volume.'],
        treatment: ['Oferecer água fria e monitorar sintomas digestivos.', 'Lavar mucosas afetadas.'],
        description: 'Planta de folhas verticais pontiagudas rígidas, bicolor de verde escuro e amarelado.',
        visualIdentifier: 'Folhas em formato de espadas pontiagudas crescendo direto do solo com margens amarelas.',
        image: 'img_espada_de_sao_jorge'
      },
      {
        id: 'bico-de-papagaio',
        name: 'Bico-de-papagaio (Poinsétia)',
        scientificName: 'Euphorbia pulcherrima',
        dangerLevel: 'medium',
        symptoms: ['Irritação cutânea com vermelhidão extrema ao contato da seiva leitosa', 'Queimação de conjuntivas e dor nos olhos', 'Náuseas se engolida.'],
        treatment: ['Lavar abundantemente com água fria corrente por no mínimo 15 minutos.'],
        description: 'Arbusto ornamental natalino muito popular, caracterizado pelas folhas superiores vermelhas intensas que lembram flores.',
        visualIdentifier: 'Folhas superiores que mudam de cor para vermelho vivo e produz seiva leitosa espessa ao quebrar o caule.',
        image: 'img_bico_de_papagaio'
      },
      {
        id: 'coroa-de-cristo',
        name: 'Coroa-de-cristo',
        scientificName: 'Euphorbia milii',
        dangerLevel: 'medium',
        symptoms: ['Dor local intensa', 'Inflamação dermatológica agressiva no contato com seiva', 'Sensação de cegueira transitória se atingir os olhos.'],
        treatment: ['Lavagem imediata d\'água abundante. Colírios lubrificantes e analgésicos se em contato ocular.'],
        description: 'Planta espinhosa de pequeno porte com flores avermelhadas e seiva láctica muito irritante.',
        visualIdentifier: 'Caules repletos de espinhos pretos pontiagudos com pequenas flores ovadas vermelhas de duas pétalas.',
        image: 'img_coroa_de_cristo'
      }
    ],
    voiceKeywords: ['planta', 'flor', 'folha', 'comer planta', 'plantas', 'tóxica', 'comigo ninguem pode', 'mamona', 'matogrosso', 'venenosa', 'ingestão de planta']
  }
];
