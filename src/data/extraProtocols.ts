import { Protocol } from '../types';

export const extraProtocols: Protocol[] = [
  {
    id: 'inconsciente-respirando',
    title: 'Inconsciente com Respiração Presente',
    icon: 'Activity',
    severity: 'urgent',
    meta: 'Posição Lateral de Segurança (PLS)',
    shortDesc: 'Condutas seguras de proteção respiratória para pessoas que perderam os sentidos mas continuam respirando.',
    immediateAction: 'Vire a vítima de lado (Posição Lateral de Segurança) para manter as vias aéreas limpas e desobstruídas.',
    steps: [
      'Ajoelhe-se ao lado da vítima e certifique-se de que ambas as pernas estão esticadas.',
      'Pegue o braço da vítima que está mais próximo de você e coloque-o dobrado no cotovelo, com a palma da mão virada para cima.',
      'Pegue o outro braço da vítima, cruze-o sobre o peito e coloque as costas daquela mão contra a bochecha do lado oposto.',
      'Com a sua outra mão, pegue a perna mais distante da vítima (logo acima do joelho) e puxe-a para cima, dobrando o joelho.',
      'Use o joelho dobrado para puxar e rolar suavemente a vítima de lado para o seu lado.',
      'Ajuste a perna de cima para que o quadril e o joelho fiquem dobrados em ângulos retos, servindo de apoio para estabilidade.',
      'Incline a cabeça da vítima ligeiramente para trás para garantir que a via aérea permaneça bem aberta.',
      'Ligue para o SAMU (192) e monitore a respiração da vítima a cada 2 minutos até a chegada da ambulância.'
    ],
    forbidden: [
      'NÃO tente dar água, alimentos ou remédios de cheiro para a pessoa acordar (alto risco de asfixia grave).',
      'NÃO coloque travesseiros altos sob a cabeça se ela estiver de costas, pois isso pode dobrar o pescoço e fechar a passagem de ar.'
    ],
    voiceKeywords: ['inconsciente respirando', 'desfalecido', 'apagado', 'dormindo', 'desmaiado respirando', 'pls']
  },
  {
    id: 'engasgo-parcial',
    title: 'Engasgo Parcial',
    icon: 'AlertCircle',
    severity: 'moderate',
    meta: 'Obstrução Parcial de Vias Aéreas',
    shortDesc: 'Conduta inicial para vítimas que sofrem engasgo parcial, mantendo capacidade reflexa de tosse.',
    immediateAction: 'ESTIMULE A VÍTIMA A TOSSIR. A tosse espontânea é o mecanismo mais eficaz de desobstrução.',
    steps: [
      'Identifique se o engasgamento é apenas parcial: o paciente consegue respirar, falar com dificuldade ou emitir tosse barulhenta.',
      'Permanecer ao lado da vítima, transmitindo segurança e mantendo-a calma para não acelerar o ritmo respiratório.',
      'Incentive-a ativamente a tossir com força repetidas vezes.',
      'Não realize nenhuma manobra física de compressão ou tapotagem às costas se ela continuar tossindo vigorosamente.',
      'Monitore de perto os lábios e a cor do rosto: se ficarem roxos, ou se ela parar de tossir e não puder falar, o engasgo evoluiu para Total.',
      'Se o objeto não for expelido e a sensação de incômodo persistir por mais de 10 minutos, encaminhe a vítima a um pronto-socorro.'
    ],
    forbidden: [
      'NÃO dê palmadas ou tapas nas costas se a vítima conseguir tossir espontaneamente (isso pode deslocar o objeto de lugar e causar bloqueio total).',
      'NÃO force a ingestão de água, pão, banana ou outros alimentos sólidos para empurrar o objeto.'
    ],
    voiceKeywords: ['engasgo parcial', 'tosse', 'tossindo', 'engasgadinho', 'engasgada de leve']
  },
  {
    id: 'engasgo-total',
    title: 'Obstrução de Via Aérea (Engasgo Total)',
    icon: 'Flame',
    severity: 'critical',
    meta: 'Manobra de Heimlich de Emergência',
    shortDesc: 'Ações imediatas e vigorosas para desobstrução respiratória quando o ar não passa de forma alguma.',
    immediateAction: 'Realize compressões abdominais rápidas para dentro e para cima (Manobra de Heimlich) imediatamente!',
    steps: [
      'Posicione-se imediatamente atrás da vítima, se ela estiver consciente, e a abrace pela cintura.',
      'Feche um dos seus punhos em bola com o polegar virado para a barriga da vítima, posicionando-o logo acima do umbigo.',
      'Segure o seu punho com a outra mão e aperte fortemente para dentro e para cima num movimento rápido de gancho ("J").',
      'Repita o movimento continuamente de forma vigorosa até que o objeto seja ejetado ou o paciente desmaie.',
      'Para gestantes ou pessoas obesas, posicione as suas mãos no centro do peito (sobre o esterno) e faça compressões torácicas firmes.',
      'Se a vítima perder a consciência: coloque-a cuidadosamente deitada no chão de costas, ligue imediatamente para o SAMU (192) e comece o protocolo de Massagem Cardíaca (RCP).'
    ],
    forbidden: [
      'NÃO tente pinçar o objeto às cegas com os dedos dentro da rima bucal da vítima consciente, pois você poderá empurrar a obstrução para mais fundo.'
    ],
    voiceKeywords: ['manobra de heimlich', 'engasgo total', 'sufocação', 'não consegue respirar', 'asfixiado', 'tampa da glote']
  },
  {
    id: 'afogamento-resgate',
    title: 'Resgate Seguro em Afogamento',
    icon: 'Shield',
    severity: 'critical',
    meta: 'Segurança e Salvamento',
    shortDesc: 'Como remover com segurança uma vítima de afogamento sem colocar a vida do socorrista em risco.',
    immediateAction: 'Ofereça um apoio (boia, corda, galho) ou puxe a vítima de longe. NÃO salte na água se não possuir treino.',
    steps: [
      'Analise a cena aquática e a força da correnteza imediatamente.',
      'Se o afogado estiver próximo à margem, estenda um objeto longo (cabo de vassoura, galho plano), jogue uma corda ou um flutuador (boia, garrafa PET fechada).',
      'Não entre na água sob nenhuma circunstância se não souber nadar ou se não possuir técnicas profissionais de salvamento aquático.',
      'Se for absolutamente seguro entrar na água por ser rasa, aproxime-se da vítima sempre por trás para evitar ser agarrado e arrastado para o fundo.',
      'Mantenha a cabeça da vítima fora da água durante o reboque para a terra firme ou margem segura.'
    ],
    forbidden: [
      'NÃO salte na água de cabeça ou sem colete salva-vidas em rios com correnteza forte ou mar agitado.',
      'NÃO tente realizar resgates heroicos corpo a corpo se puder usar boias ou cordas de fora da água.'
    ],
    voiceKeywords: ['resgatar afogado', 'tirar da água', 'salvamento aquático', 'salvar afogado']
  },
  {
    id: 'afogamento-cuidados',
    title: 'Cuidados Pós-Afogamento',
    icon: 'Waves',
    severity: 'urgent',
    meta: 'Estabilização Pós-Resgate',
    shortDesc: 'Manejo clínico da vítima que ingeriu líquido mas está consciente após ser resgatada.',
    immediateAction: 'Mantenha a vítima deitada, aquecida sob cobertores e ampare as vias respiratórias inclinando-a de lado se tossir.',
    steps: [
      'Coloque a vítima deitada de lado (Posição Lateral de Segurança) para ajudar no escoamento de resíduos e impedir aspiração de vômito.',
      'Remova as roupas molhadas rapidamente para deter a queda de temperatura corporal generalizada.',
      'Cubra o paciente com mantas secas, toalhas ou roupas térmicas quentes.',
      'Monitore a respiração e a frequência de batimentos cardíacos a cada minuto.',
      'Ofereça suporte emocional, orientando-o a respirar com tranquilidade.',
      'Chame o SAMU (192) obrigatoriamente. Mesmo que a vítima pareça normal, a água absorvida pode causar edema pulmonar grave até 24 horas depois.'
    ],
    forbidden: [
      'NÃO tente apertar a barriga do paciente para forçar a saída de água engolida no estômago (isso induz vômito e sufocação).',
      'NÃO permita que a vítima vá embora sozinha ou dispense o hospital após o acidente.'
    ],
    voiceKeywords: ['bebeu agua', 'tirou da piscina', 'salvo da agua', 'afogamento leve']
  },
  {
    id: 'convulsao-ativa',
    title: 'Convulsão Ativa (Em andamento)',
    icon: 'AlertTriangle',
    severity: 'critical',
    meta: 'Crise Convulsiva Atual',
    shortDesc: 'Ações imediatas para proteger fisicamente o paciente durante as contrações musculares involuntárias brutas.',
    immediateAction: 'Proteja a cabeça da vítima com algo macio (blusa dobrada) e afaste todos os objetos duros que possam machucá-la.',
    steps: [
      'Mantenha a calma e anote mentalmente a hora de início da crise (tempo é crucial para os médicos).',
      'Nunca tente segurar os braços ou pernas da pessoa à força para forçar a imobilização.',
      'Apoie um casaco, almofada ou toalha macia dobrada sob a cabeça dela para atenuar as pancadas no chão.',
      'Remova óculos, afrouxe roupas apertadas ao redor do pescoço (colarinhos de camisas, gravatas).',
      'Afaste móveis, quinas, pedras ou qualquer obstáculo físico duro no entorno da cena.',
      'Vire delicadamente o corpo da vítima inteiramente de lado para evitar que ela sufoque com a salivação excessiva ou vômito.',
      'Fique ao lado dela até as contrações cessarem por completo (geralmente duram de 1 a 3 minutos).'
    ],
    forbidden: [
      'NÃO tente forçar a boca da vítima aberta e NUNCA insira os seus dedos ou qualquer objeto (colher, madeira) entre os dentes dela (risco de fraturar os dentes ou amputar dedos).',
      'NÃO administre remédios ou água enquanto a pessoa estiver se batendo.'
    ],
    voiceKeywords: ['batendo agora', 'tendo convulsao', 'epilepsia ativa', 'tendo ataque']
  },
  {
    id: 'convulsao-pos',
    title: 'Recuperação Pós-Convulsão',
    icon: 'CheckCircle',
    severity: 'moderate',
    meta: 'Estado Pós-Ictal',
    shortDesc: 'Manejo da sonolência, confusão mental e recuperação muscular após uma crise convulsiva.',
    immediateAction: 'Deixe a vítima deitada de lado na Posição Lateral de Segurança e permaneça monitorando sua respiração.',
    steps: [
      'Coloque o paciente na Posição Lateral de Segurança (PLS) se ainda não estiver, para que a saliva escorra livremente.',
      'Aguarde o retorno gradual da consciência, que pode demorar de 10 a 30 minutos. É normal que a pessoa acorde confusa e sonolenta.',
      'Tranquilize a vítima explicando calmamente o que aconteceu, pois ela estará desorientada ou assustada.',
      'Cheque se há ferimentos na língua, cabeça ou dentes causados pelas pancadas da crise.',
      'Permaneça com ela em ambiente calmo e silencioso.',
      'Ligue para o SAMU se a crise durar mais de 5 minutos, se houver febre persistente, ou se a vítima tiver crises repetidas seguidas.'
    ],
    forbidden: [
      'NÃO tente acordar a pessoa sacudindo-a bruscamente; o cérebro dela está em recuperação exaustiva.',
      'NÃO ofereça bebidas alcoólicas ou água fria na boca até ela estar 100% acordada e respondendo a comandos verbais.'
    ],
    voiceKeywords: ['acabou de convulsionar', 'dormindo pós convulsao', 'pos ictal', 'parou de bater']
  },
  {
    id: 'ferimentos-leves',
    title: 'Ferimentos e Cortes Leves',
    icon: 'Heart',
    severity: 'informative',
    meta: 'Traumatologia Leve',
    shortDesc: 'Higienização e condutas de cicatrização para cortes superficiais, escoriações ou arranhões.',
    immediateAction: 'Lave o local afetado vigorosamente apenas com água corrente limpa e sabão neutro.',
    steps: [
      'Lave bem as suas próprias mãos antes de tocar na ferida do acidentado.',
      'Coloque a região cortada sob água limpa corrente da torneira por 2 a 3 minutos para remover terra, areia e detritos superficiais.',
      'Use sabão comum ou sabonete neutro para limpar a pele ao redor da ferida. Enxágue completamente.',
      'Se houver um sangramento sutil, faça uma compressão suave por 2 minutos sobre o local usando gaze limpa ou pano macio seco.',
      'Cubra com um curativo do tipo Band-Aid ou gaze estéril seca fixada com esparadrapo para blindar contra bactérias.',
      'Oriente a vítima a monitorar sinais de infecção nas próximas 48 horas (dor local progressiva, calor, vermelhidão ou presença de pus).'
    ],
    forbidden: [
      'NÃO jogue álcool puro, mertiolate com ardor, pó de café ou fumo sobre machucados vivos cutâneos.',
      'NÃO tente remover cacos de vidro profundos no meio da ferida por conta própria (deixe o cirurgião fazer isso com as pinças esterilizadas).'
    ],
    voiceKeywords: ['feridinha', 'arranhou', 'esfolado', 'ralou', 'machucou leve', 'corte pequeno']
  },
  {
    id: 'lesao-coluna',
    title: 'Suspeita de Lesão de Coluna',
    icon: 'ShieldAlert',
    severity: 'critical',
    meta: 'Traumatismo Raquimedular',
    shortDesc: 'Estabilização neurológica em acidentes de alto impacto com risco de paralisia definitiva.',
    immediateAction: 'SEGURE A CABEÇA DA VÍTIMA COM AS DUAS MÃOS para mantê-la totalmente imóvel na posição neutra.',
    steps: [
      'Evite a todo custo movimentar a vítima ou permitir que ela movimente o pescoço ou o quadril.',
      'Ajoelhe-se logo atrás da cabeça do paciente (olhando para os pés dele) e segure firmemente as duas laterais da sua cabeça/orelhas com as suas mãos.',
      'Imobilize totalmente com os seus antebraços apoiados no chão para estabilizar qualquer torção cervical reflexa.',
      'Explique ao acidentado a importância de não mover os olhos ou girar a cabeça para falar com você.',
      'Monitore se a vítima mantém sensibilidade táctil e motora nos dedos das mãos e pés.',
      'Se a vítima começar a vomitar: coordene um giro em bloco unificado de 3 pessoas para deitá-la de lado sem desalinhar a cabeça em relação ao tronco.',
      'Aguarde o resgate médico profissional do SAMU (192) que implantará o colar cervical e a maca rígida.'
    ],
    forbidden: [
      'NÃO tente colocar a vítima de pé ou sentada sob nenhuma justificativa.',
      'NÃO levante as pernas da vítima de trauma de alta carga.'
    ],
    voiceKeywords: ['pescoço quebrado', 'dor nas costas queda', 'caiu do telhado', 'caiu da moto', 'pancada nas costas']
  },
  {
    id: 'queimadura-fogo',
    title: 'Queimadura por Fogo / Chamas',
    icon: 'Flame',
    severity: 'critical',
    meta: 'Queimadura Térmica Direta',
    shortDesc: 'Socorro imediato ao entrar em contato direto com chamas, fogo ou explosão térmica.',
    immediateAction: 'Resfrie imediatamente a área em água fria abundante por no mínimo 15 minutos e ligue para o 192.',
    steps: [
      'Se a vítima ainda estiver com as roupas em chamas: faça-a deitar no chão e rolar de um lado para o outro para abafar o fogo, ou cubra o corpo com cobertor pesado.',
      'Coloque a região queimada sob água limpa e corrente de torneira por pelo menos 15 a 20 minutos completos.',
      'Não tente puxar roupas queimadas e carbonizadas que estejam fundidas ou grudadas na ferida de pele viva.',
      'Remova com extremo cuidado anéis, relógios e sapatos antes de se iniciar o inchaço dos membros.',
      'Cubra a queimadura suavemente com plástico filme transparente de cozinha limpo para estancar o contato das terminações nervosas com o ar (isso reduz consideravelmente a dor).',
      'Mantenha a vítima bem aquecida nos membros não expostos.'
    ],
    forbidden: [
      'NÃO fure em hipótese alguma as bolhas térmicas.',
      'NÃO aplique fumo, manteiga, pasta dentária, pó de café ou clara de ovo que agridem severamente as camadas celulares cutâneas.'
    ],
    voiceKeywords: ['fogo chamas', 'queimadura de fogo', 'pegou fogo', 'incendio']
  },
  {
    id: 'queimadura-termica',
    title: 'Queimadura por Líquido Quente',
    icon: 'Flame',
    severity: 'urgent',
    meta: 'Queimadura por Escaldo',
    shortDesc: 'Resfriamento tecidual e proteção de escaldadura por água fervorosa, óleo de cozinha ou sopas quentes.',
    immediateAction: 'Coloque a região queimada sob água limpa corrente por 15 a 20 minutos sem aplicar pressão física.',
    steps: [
      'Inicie imediatamente a irrigação do local afetado com água limpa corrente abundante de torneira para conter a transmissão de calor profunda.',
      'Não utilize água com gelo ou pedra gelada (isso causará congelamento e morte cirúrgica das células expostas).',
      'Corte de leve as roupas ao redor do escaldo. Se houver óleo impregnando as roupas, retire as peças que não colaram.',
      'Cubra com gaze estéril levemente umedecida com soro fisiológico ou plástico filme transparente.',
      'Se a dor estiver intolerável, acione socorro médico ou rume ao hospital mantendo a compressa úmida fria.'
    ],
    forbidden: [
      'NÃO use compressas ásperas de toalha seca que podem arrancar a derme delicada.',
      'NÃO tente raspar a derme machucada ou estourar bolhas formadas.'
    ],
    voiceKeywords: ['oleo quente', 'agua fervente', 'sopas quentes', 'panela de pressao']
  },
  {
    id: 'queimadura-quimica',
    title: 'Queimadura por Produto Químico',
    icon: 'Shield',
    severity: 'critical',
    meta: 'Queimaduras Químicas',
    shortDesc: 'Manejo de acidentes com ácidos industriais, soda cáustica ou cloro concentrado.',
    immediateAction: 'Se for produto em pó: escove o pó seco para fora da pele ANTES de jogar água limpa.',
    steps: [
      'Se o agente químico nocivo for um pó granulado agressivo (cálcio, sementes ou pó de soda), remova-o escovando a pele seca com pano para que ele não reaja com água e queime ainda mais.',
      'Se for produto líquido: irrigue continuamente em água corrente fria por 20 a 30 minutos ininterruptos na torneira ou chuveiro.',
      'Remova correndo todas as vestimentas, calças, joias ou sapatos infectados pelo composto químico químico.',
      'Cuidado para que a água suja de lavagem não respingue em áreas sãs de pele ou atinja os olhos do paciente ou do socorrista.',
      'Mantenha uma irrigação constante e chame o SAMU informando exatamente o nome do produto químico correspondente.'
    ],
    forbidden: [
      'NÃO tente neutralizar ácidos com bases (ou vice-versa) jogando vinagre ou bicarbonato na ferida; a reação química secundária gera calor violento e destruição biológica.'
    ],
    voiceKeywords: ['acido quebrou', 'soda caustica', 'sulfurico', 'bateria de carro', 'cloro concentrado']
  },
  {
    id: 'queimadura-eletrica',
    title: 'Queimadura por Eletricidade',
    icon: 'Zap',
    severity: 'critical',
    meta: 'Eletropatologia',
    shortDesc: 'Atendimento estrito para lesões de entrada e saída decorrentes de descargas elétricas.',
    immediateAction: 'Monitore batimentos coronários e respiração da vítima. Ligue para o SAMU imediatamente (192).',
    steps: [
      'Verifique se a vítima já está 100% desprendida de qualquer corrente elétrica ativa.',
      'Monitore prontamente a consciência, presença de respiração normal e pulso radial (choques afetam diretamente o marcapasso cardíaco causando arritmias e PCR silenciosa).',
      'Localize os ferimentos de pele na zona de entrada da descarga (onde tocou o cabo) e saída (geralmente nos pés onde fez o terra).',
      'Lave os ferimentos cutâneos externos com água corrente limpa e cubra com gaze esterilizada úmida.',
      'Mantenha a vítima calma sob repouso estrito absoluto deitada até a ambulância médica atracar.'
    ],
    forbidden: [
      'NÃO dispense o paciente de avaliação em pronto-socorro mesmo que ele se sinta ótimo. A eletricidade causa fibrilação cardíaca tardia e necrose de órgãos internos.'
    ],
    voiceKeywords: ['choque queimou', 'lesao choque', 'queimou de tomada', 'alta tensao entrada']
  },
  {
    id: 'choque-cena',
    title: 'Segurança contra Choques Elétricos',
    icon: 'ZapOff',
    severity: 'critical',
    meta: 'Isolamento Elétrico de Cena',
    shortDesc: 'Interrupção urgente de conexões elétricas para evitar o contágio de descarga no socorrista.',
    immediateAction: 'Desligue imediatamente a chave geral ou disjuntor de energia do imóvel.',
    steps: [
      'Nunca toque em qualquer ponto do corpo da vítima se ela ainda estiver colada à fiação eletrizada ativa.',
      'Corra até o quadro de distribuição e derrube todas as chaves de disjuntores da tomada/imóvel.',
      'Se não for viável desligar o padrão: apoie-se estritamente sobre materiais isolantes de borracha grossa, tábua de madeira 100% seca ou pilhas de jornais.',
      'Use um cabo longo de madeira completamente seca (como um cabo de vassoura sem metal nas pontas) ou de plástico grosso para empurrar a fiação longe do acidentado.',
      'Mantenha-se distante de poças de água acumuladas que espalham a passagem de alta voltagem de rede no chão.'
    ],
    forbidden: [
      'NÃO utilize nenhum objeto metálico, molhado ou úmido para empurrar o cabo eletrizado.',
      'NÃO toque diretamente com as suas mãos limpas ou descalço na pele do paciente eletrocutado.'
    ],
    voiceKeywords: ['grudado na tomada', 'tomando choque', 'fio caido choque', 'cabo eletrizado']
  },
  {
    id: 'falta-ar-grave',
    title: 'Emergência Respiratória Grave',
    icon: 'Activity',
    severity: 'critical',
    meta: 'Doença Respiratória Descompensada',
    shortDesc: 'Suporte médico imediato a pessoas com sufocação grave, incapazes de terminar fala articulada.',
    immediateAction: 'Afrouxe as roupas da vítima e coloque-a sentada confortavelmente de tronco levemente inclinado para a frente.',
    steps: [
      'Ligue para o SAMU (192) prontamente e diga à telefonista que a vítima está com "Insuficiência Respiratória Grave".',
      'Posicione o paciente em uma cadeira confortável, sentado na cama ou de costas apoiadas em travesseiros com o tronco erguido (esta posição otimiza a expansão mecânica pulmonar).',
      'Mantenha o local totalmente arejado e ventilado, se desobstruindo de aglomerações e abrindo portas/janelas.',
      'Se a pessoa possuir bombinhas inalatórias de asma de uso pessoal já prescritas pelos médicos, auxilie-a na inalação das doses corretas.',
      'Tranquilize a vítima; a ansiedade eleva severamente o consumo orgânico de oxigênio corporal.'
    ],
    forbidden: [
      'NÃO tente deitar a vítima com as costas planas no chão (isso comprime o diafragma e acelera o asfixiamento da pessoa).'
    ],
    voiceKeywords: ['canseira forte', 'sufocando', 'bronquite asma', 'nao consegue falar ar']
  },
  {
    id: 'falta-ar-moderada',
    title: 'Falta de Ar Moderada (Dificuldade Respiratória)',
    icon: 'Activity',
    severity: 'urgent',
    meta: 'Insuficiência Respiratória Moderada',
    shortDesc: 'Apoio terapêutico passivo a episódios de asma controlada, cansaço físico ou cansaço moderado.',
    immediateAction: 'Estabeleça um repouso passivo e oriente-a a inspirar lentamente pelo nariz e expirar pela boca.',
    steps: [
      'Faça a pessoa parar com qualquer atividade física extenuante e sentar-se na sombra fresca ou banco.',
      'Ensine-a a respirar de forma cadenciada (puxar o ar contando até 3, manter 2, e soltar suavemente estufando a boca).',
      'Auxilie na limpeza de secreções nasais soprando o nariz.',
      'Verifique se a pessoa apresenta sibilos (chiado no peito) ou cansaço ao respirar.',
      'Permaneça acompanhando a melhora dos parâmetros nas próximas horas.'
    ],
    forbidden: [
      'NÃO force a realização de caminhadas ou hidratação rápida de água gelada se o peito continuar chiando.'
    ],
    voiceKeywords: ['peito chiando', 'cansadinho', 'falta de ar leve']
  },
  {
    id: 'dor-peito-grave',
    title: 'Suspeita de Infarto (Dor Torácica Coronária)',
    icon: 'Flame',
    severity: 'critical',
    meta: 'Síndrome Coronariana Aguda',
    shortDesc: 'Procedimento inicial urgente contra a interrupção do fluxo arterial miocárdico (Infarto).',
    immediateAction: 'LIGUE PARA O SAMU (192) E GARANTA REPOUSO ABSOLUTO. A vítima não deve caminhar nem fazer esforços físicos.',
    steps: [
      'Identifique se a dor é forte, em aperto ou queimação no centro do peito, podendo irradiar para o braço esquerdo, mandíbula ou costas por mais de 10 minutos.',
      'Coloque o paciente sentado ou recostado em posição semi-sentada (nunca deitado de costas plano).',
      'Não permita que ele caminhe até o carro ou suba lances de escadas (qualquer esforço acelera a necrose cardíaca).',
      'Se a vítima NÃO for alérgica a ácido acetilsalicílico, ofereça 2 comprimidos de AAS infantil ou 1 adulto (totalizando 200 a 300mg) para que ela mastigue bem e engula com um mínimo de água.',
      'Desabotoe botões, afrouxe cintos e golas para promover alívio físico.',
      'Prepare-se mentalmente para iniciar a Massagem Cardíaca (RCP) se o paciente repentinamente parar de responder e respirar.'
    ],
    forbidden: [
      'NÃO ofereça alimentos consistentes ou bebidas gasosas para o paciente.',
      'NÃO permita que o paciente dirija o próprio carro na tentativa de chegar ao pronto-socorro sozinho.'
    ],
    voiceKeywords: ['infarto dor braço', 'dor forte peito', 'aperto coraçao', 'morrendo dor peito']
  },
  {
    id: 'dor-peito-moderada',
    title: 'Dor no Peito Em Avaliação',
    icon: 'Activity',
    severity: 'informative',
    meta: 'Triagem Torácica Adicional',
    shortDesc: 'Investigação complementar de dores menores no tórax, como refluxo ou gases corporais.',
    immediateAction: 'Sente-se tranquilamente, descanse por 15 minutos e observe se a dor se altera ao respirar fundo.',
    steps: [
      'Mantenha a pessoa em observação atenta em local arejado.',
      'Observe se a dor é pontual (piora ao tocar com o dedo) ou se está amparada por queimação gástrica, arroto e gases.',
      'Se a dor desaparecer após um repouso simples e não estiver acompanhada de suores frios, náuseas ou cansaço, provavelmente não se trata de emergência imediata do marcapasso mecânico.',
      'Oriente a fazer uma consulta cardiológica clínica preventiva preventiva.'
    ],
    forbidden: [
      'NÃO tome analgésicos fortes que possam mascarar um quadro de dor coronária progressiva rápida.'
    ],
    voiceKeywords: ['dor peito leve', 'fisgada no peito', 'queimaçao estomago peito']
  },
  {
    id: 'anafilaxia',
    title: 'Reação Alérgica Grave (Anafilaxia)',
    icon: 'AlertTriangle',
    severity: 'critical',
    meta: 'Choque Anafilático',
    shortDesc: 'Reação imunitária sistêmica devastadora pós picadas de vespas ou ingestão de alérgenos.',
    immediateAction: 'Ligue para o SAMU (192) e ajude a vítima a injetar sua Caneta de Adrenalina se ela possuir.',
    steps: [
      'Reconheça sinais de choque anafilático: inchaço expressivo nos lábios e olhos, placas vermelhas espalhadas pela pele com coceira, chiado forte no peito e dificuldade severa de engolir.',
      'Se a vítima portar uma caneta auto-injetora de Adrenalina (epinefrina) prescrita devido a episódios anteriores, retire a trava de segurança, apoie no músculo externo da coxa dela e pressione firmemente por 10 segundos.',
      'Deite a vítima de barriga para cima e levante as duas pernas dela cerca de 30 cm do chão para combater o choque circulatório, desde que ela continue respirando sem angústias.',
      'Se houver falta de ar grave, mantenha-a semi-sentada apoiada.',
      'Monitore prontamente a respiração e os batimentos e ligue com extrema velocidade para o 192 correspondente.'
    ],
    forbidden: [
      'NÃO ofereça comprimidos antialérgicos orais se a vítima estiver com dificuldade extrema de engolir, pois ela poderá aspirar a dose direta para as vias aéreas.'
    ],
    voiceKeywords: ['anafilaxia', 'alergia grave', 'inchou glote', 'picada abelha alergia', 'comedor de amendoim']
  },
  {
    id: 'intoxicacao-ingestao',
    title: 'Intoxicação por Ingestão Oral',
    icon: 'Skull',
    severity: 'critical',
    meta: 'Ingestão de Toxinas',
    shortDesc: 'Manejo emergencial contra engolimento acidental de saneantes, venenos químicos ou remédios.',
    immediateAction: 'Ligue para o SAMU (192) ou ligue de graça para o CIT Nacional no 0800-722-6001.',
    steps: [
      'Busque recolher imediatamente a embalagem, cartela vazia de remédio ou frasco do elemento químico cáustico.',
      'Limpe a boca da pessoa suavemente retirando detritos remanescentes visíveis de pílulas ou folhas.',
      'Mantenha o paciente calmo com as vias respiratórias limpas e prontas.',
      'Não dê leite, azeite ou água morna sob hipótese alguma se não for instruído pelos médicos do telefone do CIT.',
      'Se a vítima perder a consciência e parar de respirar normalmente, comece a Massagem Cardíaca (RCP).'
    ],
    forbidden: [
      'NÃO induza o vômito de forma alguma, pois componentes cáusticos ácidofilos danificam a laringe duplamente e causam pneumonia química se inspirados.'
    ],
    voiceKeywords: ['bebeu veneno chumbinho', 'comprime demais', 'tomou cloro']
  },
  {
    id: 'intoxicacao-inalacao',
    title: 'Intoxicação por Gases Inalados',
    icon: 'Skull',
    severity: 'critical',
    meta: 'Inalação de Gases / Monóxido',
    shortDesc: 'Salvamento de intoxicações causadas por fumaça em incêndios ou respiração de gases em porões.',
    immediateAction: 'Mova imediatamente a vítima para uma área externa arejada com fluxo de ar fresco.',
    steps: [
      'Não ministre o seu resgate adentrando locais confinados fechados tomados por gases (use máscaras de ar comprimido se treinado).',
      'Leve a vítima correndo para a sombra ensolarada ao abrigo de correntes de ar puro.',
      'Deite a vítima no plano horizontal, afrouxe botões do colarinho e jaquetas.',
      'Inicie respiração de resgate se houver parada de ventilação, com massagens coronárias correspondentes.',
      'Chame o SAMU (192) pois o monóxido de carbono bloqueia irreversivelmente a hemoglobina sanguínea.'
    ],
    forbidden: [
      'NÃO permaneça no local confinado correndo risco de tontear ou desmaiar junto.'
    ],
    voiceKeywords: ['fumaça inalou', 'monoxido de carbono', 'vazamento de gas']
  },
  {
    id: 'intoxicacao-pele',
    title: 'Intoxicação por Contato na Pele',
    icon: 'Skull',
    severity: 'urgent',
    meta: 'Contaminação Cutânea Química',
    shortDesc: 'Eliminação mecânica de poeiras agrícolas, agrotóxicos líquidos ou venenos cutâneos.',
    immediateAction: 'Lave a região da pele exposta com água fria corrente em abundância por no mínimo 20 minutos.',
    steps: [
      'Leve o paciente para debaixo do chuveiro de lavagem ou jogue água de mangueira continuamente sobre as partes infectadas.',
      'Utilize sabão neutro delicadamente para dissolver compostos oleosos de pesticidas de agronegócio.',
      'Remova com tesouras todas as peças de roupas úmidas contaminadas sem esfregar na epiderme do tronco.',
      'Não se esqueça de esfregar com escovinha de cerdas macias debaixo das unhas da vítima onde os compostos de venenos se concentram.',
      'Se houver infecção ocular acidental, lave os globos oculares com fluxo lento de soro por no mínimo 20 minutos completos.'
    ],
    forbidden: [
      'NÃO esfregue o local ferido com buchas ásperas de banho que abrem as barreiras epidérmicas acelerando a absorção do agrotóxico.'
    ],
    voiceKeywords: ['agrotóxico na pele', 'contato quimico pele', 'veneno nos olhos']
  }
];
