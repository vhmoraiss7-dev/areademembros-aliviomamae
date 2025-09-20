"use client"

import type React from "react"
import { useState } from "react"
import {
  HeartIcon,
  BookOpenIcon,
  SparklesIcon,
  MoonIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  BeakerIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid"

const modules = [
  {
    id: "massagens",
    title: "Massagens na Gestação",
    icon: HeartIcon,
    description: "Técnicas seguras por trimestre para alívio e bem-estar",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "pega",
    title: "Método P.E.G.A. Amamentação",
    icon: BookOpenIcon,
    description: "Passo a passo para amamentação sem dor e pega correta",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "pos-parto",
    title: "Recuperação Pós-Parto",
    icon: SparklesIcon,
    description: "Autoestima, bem-estar físico e mental completo",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "sono",
    title: "Sono Tranquilo do Bebê",
    icon: MoonIcon,
    description: "Rotinas e técnicas para noites tranquilas",
    color: "from-blue-500 to-indigo-600",
  },
]

const getModuleContent = (moduleId: string) => {
  const content = {
    massagens: `
      <h2>🤱 Massagens na Gestação</h2>
      <p><strong>Técnicas seguras e eficazes para cada trimestre da gestação</strong></p>
      
      <h3>🎯 Objetivo</h3>
      <p>Proporcionar alívio das tensões, melhorar a circulação e fortalecer a conexão mãe-bebê através de massagens seguras e terapêuticas.</p>
      
      <h3>✨ Benefícios</h3>
      <ul>
        <li>Reduz dores nas costas e pernas</li>
        <li>Melhora a qualidade do sono</li>
        <li>Diminui o inchaço e melhora a circulação</li>
        <li>Reduz o estresse e ansiedade</li>
        <li>Fortalece o vínculo com o bebê</li>
      </ul>
      
      <h3>🛠️ Materiais Necessários</h3>
      <ul>
        <li>Óleo de amêndoas ou coco (morno)</li>
        <li>Almofadas para apoio</li>
        <li>Ambiente tranquilo e aquecido</li>
        <li>Música relaxante (opcional)</li>
      </ul>
      
      <h3>📋 Passo a Passo por Trimestre</h3>
      
      <h4>1º Trimestre (1-12 semanas)</h4>
      <ol>
        <li><strong>Massagem nos pés:</strong> Movimentos circulares suaves na sola dos pés</li>
        <li><strong>Pescoço e ombros:</strong> Pressão leve com movimentos ascendentes</li>
        <li><strong>Mãos e braços:</strong> Deslizamentos suaves do punho ao ombro</li>
      </ol>
      
      <h4>2º Trimestre (13-27 semanas)</h4>
      <ol>
        <li><strong>Posição lateral:</strong> Deite de lado com almofadas de apoio</li>
        <li><strong>Costas:</strong> Movimentos longos e suaves ao longo da coluna</li>
        <li><strong>Quadris:</strong> Círculos suaves na região lombar</li>
        <li><strong>Pernas:</strong> Deslizamentos de baixo para cima</li>
      </ol>
      
      <h4>3º Trimestre (28-40 semanas)</h4>
      <ol>
        <li><strong>Posição sentada:</strong> Massagem nos ombros e pescoço</li>
        <li><strong>Pés e tornozelos:</strong> Movimentos circulares para reduzir inchaço</li>
        <li><strong>Barriga:</strong> Círculos muito suaves no sentido horário</li>
      </ol>
      
      <div style="background: #fef2f2; padding: 1rem; border-radius: 8px; border-left: 4px solid #ef4444; margin: 1rem 0;">
        <h4>⚠️ Precauções Importantes</h4>
        <ul>
          <li>Evite pressão forte no abdômen</li>
          <li>Não massageie pontos de acupuntura nos tornozelos</li>
          <li>Pare se sentir qualquer desconforto</li>
          <li>Consulte seu médico antes de iniciar</li>
        </ul>
      </div>
      
      <h3>💡 Dicas Rápidas</h3>
      <ul>
        <li>🕐 Melhor horário: final da tarde ou noite</li>
        <li>🌡️ Temperatura do óleo: morna, nunca quente</li>
        <li>⏱️ Duração ideal: 15-30 minutos</li>
        <li>🎵 Use música relaxante para potencializar o efeito</li>
      </ul>
    `,
    pega: `
      <h2>🤱 Método P.E.G.A. de Amamentação</h2>
      <p><strong>Passo a passo para uma amamentação sem dor e com pega correta</strong></p>
      
      <h3>🎯 O que é o Método P.E.G.A.?</h3>
      <p><strong>P</strong>osição - <strong>E</strong>ncaixe - <strong>G</strong>arrada - <strong>A</strong>poio</p>
      <p>Método desenvolvido para garantir uma amamentação eficaz e confortável para mãe e bebê.</p>
      
      <h3>📋 Passo a Passo Detalhado</h3>
      
      <h4>P - POSIÇÃO</h4>
      <ol>
        <li><strong>Sente-se confortavelmente</strong> com as costas apoiadas</li>
        <li><strong>Coloque o bebê de frente para você</strong> - barriga com barriga</li>
        <li><strong>A cabeça do bebê deve estar alinhada</strong> com o corpo</li>
        <li><strong>Use almofadas</strong> para apoiar seus braços e o bebê</li>
      </ol>
      
      <h4>E - ENCAIXE</h4>
      <ol>
        <li><strong>Toque o lábio inferior do bebê</strong> com o mamilo</li>
        <li><strong>Espere ele abrir bem a boca</strong> (como um bocejo)</li>
        <li><strong>Aproxime rapidamente</strong> o bebê ao seio</li>
        <li><strong>O queixo deve tocar o seio primeiro</strong></li>
      </ol>
      
      <h4>G - GARRADA (Pega Correta)</h4>
      <ul>
        <li>✅ <strong>Boca bem aberta</strong> abrangendo mamilo e aréola</li>
        <li>✅ <strong>Lábios virados para fora</strong> (como peixinho)</li>
        <li>✅ <strong>Queixo encostado no seio</strong></li>
        <li>✅ <strong>Nariz livre para respirar</strong></li>
        <li>✅ <strong>Bochechas arredondadas</strong> (não encovadas)</li>
      </ul>
      
      <h4>A - APOIO</h4>
      <ol>
        <li><strong>Apoie o seio</strong> com a mão em formato "C"</li>
        <li><strong>Dedos longe da aréola</strong> para não atrapalhar a pega</li>
        <li><strong>Sustente o peso do seio</strong> durante toda a mamada</li>
      </ol>
      
      <div style="background: #fef2f2; padding: 1rem; border-radius: 8px; border-left: 4px solid #ef4444; margin: 1rem 0;">
        <h4>🚨 Sinais de Pega Incorreta</h4>
        <ul>
          <li>Dor durante a amamentação</li>
          <li>Mamilo machucado ou rachado</li>
          <li>Bebê inquieto ou chorando muito</li>
          <li>Ruídos de "estalo" durante a sucção</li>
          <li>Bebê não ganha peso adequadamente</li>
        </ul>
      </div>
      
      <h3>🔧 Soluções para Dificuldades Comuns</h3>
      
      <h4>Bebê não consegue pegar o seio:</h4>
      <ul>
        <li>Experimente diferentes posições</li>
        <li>Estimule o reflexo de busca tocando a bochecha</li>
        <li>Tente quando o bebê estiver calmo, não muito faminto</li>
      </ul>
      
      <h4>Dor durante a amamentação:</h4>
      <ul>
        <li>Verifique a pega - retire e recoloque se necessário</li>
        <li>Use lanolina pura nos mamilos</li>
        <li>Varie as posições de amamentação</li>
      </ul>
      
      <h3>💡 Dicas Rápidas</h3>
      <ul>
        <li>🕐 Amamente em livre demanda</li>
        <li>💧 Mantenha-se hidratada</li>
        <li>🛌 Descanse sempre que possível</li>
        <li>🤱 Pratique pele a pele</li>
        <li>📞 Procure ajuda se tiver dificuldades</li>
      </ul>
    `,
    "pos-parto": `
      <h2>✨ Recuperação Pós-Parto</h2>
      <p><strong>Guia completo para recuperar autoestima, bem-estar físico e mental</strong></p>
      
      <h3>🎯 Objetivo</h3>
      <p>Apoiar a nova mãe em sua jornada de recuperação integral, cuidando do corpo, mente e autoestima no pós-parto.</p>
      
      <h3>⏰ Cronologia da Recuperação</h3>
      
      <h4>Primeiras 6 Semanas (Puerpério Imediato)</h4>
      <ul>
        <li><strong>Foco:</strong> Descanso e cicatrização</li>
        <li><strong>Prioridades:</strong> Alimentação, hidratação, sono</li>
        <li><strong>Atividades:</strong> Caminhadas leves, exercícios respiratórios</li>
      </ul>
      
      <h4>6 Semanas a 6 Meses</h4>
      <ul>
        <li><strong>Liberação médica</strong> para atividades normais</li>
        <li><strong>Retorno gradual</strong> aos exercícios</li>
        <li><strong>Foco na autoestima</strong> e bem-estar mental</li>
      </ul>
      
      <h3>💪 Recuperação Física</h3>
      
      <h4>Exercícios para o Assoalho Pélvico</h4>
      <ol>
        <li><strong>Kegel básico:</strong> Contraia por 5 segundos, relaxe por 5</li>
        <li><strong>Respiração diafragmática:</strong> Inspire expandindo a barriga</li>
        <li><strong>Ponte:</strong> Deite, dobre os joelhos, eleve o quadril</li>
        <li><strong>Agachamento na parede:</strong> Costas apoiadas, desça devagar</li>
      </ol>
      
      <h4>Cuidados com a Cicatrização</h4>
      <ul>
        <li><strong>Cesariana:</strong> Evite carregar peso, mantenha a incisão limpa</li>
        <li><strong>Parto normal:</strong> Banhos de assento com água morna</li>
        <li><strong>Episiotomia:</strong> Compressas frias nas primeiras 24h</li>
      </ul>
      
      <h3>🧠 Bem-estar Mental</h3>
      
      <h4>Lidando com as Mudanças Emocionais</h4>
      <ul>
        <li><strong>Baby blues (até 15 dias):</strong> Normal, passa naturalmente</li>
        <li><strong>Depressão pós-parto:</strong> Procure ajuda profissional</li>
        <li><strong>Ansiedade:</strong> Técnicas de respiração e mindfulness</li>
      </ul>
      
      <h4>Estratégias de Autocuidado</h4>
      <ol>
        <li><strong>Reserve tempo para si:</strong> Mesmo que sejam 10 minutos</li>
        <li><strong>Aceite ajuda:</strong> Delegue tarefas domésticas</li>
        <li><strong>Conecte-se:</strong> Converse com outras mães</li>
        <li><strong>Pratique gratidão:</strong> Anote 3 coisas boas do dia</li>
      </ol>
      
      <h3>💄 Recuperando a Autoestima</h3>
      
      <h4>Cuidados com o Corpo</h4>
      <ul>
        <li><strong>Hidratação da pele:</strong> Óleos naturais nas estrias</li>
        <li><strong>Alimentação nutritiva:</strong> Foque em nutrientes, não restrição</li>
        <li><strong>Roupas confortáveis:</strong> Que valorizem seu corpo atual</li>
        <li><strong>Exercícios graduais:</strong> Comece devagar, seja consistente</li>
      </ul>
      
      <h4>Reconectando com sua Feminilidade</h4>
      <ul>
        <li><strong>Ritual de beleza:</strong> Banho relaxante, hidratante, perfume</li>
        <li><strong>Roupas que te fazem sentir bem:</strong> Invista em peças confortáveis e bonitas</li>
        <li><strong>Tempo para hobbies:</strong> Retome atividades que te dão prazer</li>
      </ul>
      
      <h3>❤️ Vida Íntima e Libido</h3>
      
      <h4>Retorno da Intimidade</h4>
      <ul>
        <li><strong>Aguarde liberação médica</strong> (geralmente 6 semanas)</li>
        <li><strong>Comunique-se com o parceiro</strong> sobre medos e expectativas</li>
        <li><strong>Use lubrificante</strong> se necessário</li>
        <li><strong>Vá no seu ritmo</strong> - não há pressa</li>
      </ul>
      
      <h4>Recuperando a Libido</h4>
      <ul>
        <li><strong>Seja paciente:</strong> Hormônios levam tempo para se equilibrar</li>
        <li><strong>Foque na conexão:</strong> Intimidade vai além do físico</li>
        <li><strong>Cuide do sono:</strong> Descanso é fundamental para o desejo</li>
        <li><strong>Exercite-se:</strong> Melhora autoestima e circulação</li>
      </ul>
      
      <div style="background: #fef2f2; padding: 1rem; border-radius: 8px; border-left: 4px solid #ef4444; margin: 1rem 0;">
        <h4>🚨 Quando Procurar Ajuda</h4>
        <ul>
          <li>Tristeza profunda por mais de 2 semanas</li>
          <li>Pensamentos de machucar a si mesma ou o bebê</li>
          <li>Dificuldade extrema para cuidar do bebê</li>
          <li>Isolamento social completo</li>
          <li>Ataques de pânico frequentes</li>
        </ul>
      </div>
      
      <h3>💡 Dicas Rápidas</h3>
      <ul>
        <li>🌅 Exponha-se ao sol matinal (vitamina D)</li>
        <li>💧 Beba muita água (especialmente se amamentando)</li>
        <li>🥗 Priorize alimentos nutritivos e coloridos</li>
        <li>😴 Durma quando o bebê dormir</li>
        <li>🤗 Peça e aceite ajuda sem culpa</li>
        <li>📱 Limite redes sociais se causarem comparações</li>
      </ul>
    `,
    sono: `
      <h2>🌙 Sono Tranquilo do Bebê</h2>
      <p><strong>Técnicas e rotinas para estabelecer um sono saudável e noites tranquilas</strong></p>
      
      <h3>🎯 Objetivo</h3>
      <p>Estabelecer rotinas de sono saudáveis que promovam descanso adequado para o bebê e toda a família.</p>
      
      <h3>⏰ Entendendo o Sono do Bebê por Idade</h3>
      
      <h4>0-3 Meses (Recém-nascido)</h4>
      <ul>
        <li><strong>Sono total:</strong> 14-17 horas por dia</li>
        <li><strong>Padrão:</strong> Ciclos de 2-4 horas</li>
        <li><strong>Características:</strong> Sono irregular, mais sono REM</li>
      </ul>
      
      <h4>3-6 Meses</h4>
      <ul>
        <li><strong>Sono total:</strong> 12-15 horas por dia</li>
        <li><strong>Padrão:</strong> Começam a dormir períodos mais longos à noite</li>
        <li><strong>Desenvolvimento:</strong> Ritmo circadiano se estabelecendo</li>
      </ul>
      
      <h4>6-12 Meses</h4>
      <ul>
        <li><strong>Sono total:</strong> 12-14 horas por dia</li>
        <li><strong>Padrão:</strong> 2-3 sonecas durante o dia</li>
        <li><strong>Capacidade:</strong> Podem dormir a noite toda</li>
      </ul>
      
      <h3>🏠 Criando o Ambiente Ideal</h3>
      
      <h4>Quarto do Bebê</h4>
      <ul>
        <li><strong>Temperatura:</strong> 18-20°C (ideal)</li>
        <li><strong>Iluminação:</strong> Escuro à noite, luz natural durante o dia</li>
        <li><strong>Ruído:</strong> Ambiente silencioso ou ruído branco suave</li>
        <li><strong>Segurança:</strong> Berço vazio, colchão firme</li>
      </ul>
      
      <h4>Elementos que Ajudam</h4>
      <ul>
        <li><strong>Blackout:</strong> Cortinas que bloqueiam luz externa</li>
        <li><strong>Ruído branco:</strong> Som constante e suave</li>
        <li><strong>Umidificador:</strong> Se o ar estiver muito seco</li>
        <li><strong>Termômetro:</strong> Para monitorar temperatura</li>
      </ul>
      
      <h3>📋 Estabelecendo Rotinas</h3>
      
      <h4>Rotina Noturna (30-45 minutos antes de dormir)</h4>
      <ol>
        <li><strong>Banho morno:</strong> Relaxante e sinalizador de sono</li>
        <li><strong>Massagem suave:</strong> Com óleo morno, movimentos lentos</li>
        <li><strong>Roupas confortáveis:</strong> Pijama adequado à temperatura</li>
        <li><strong>Alimentação:</strong> Última mamada/mamadeira</li>
        <li><strong>Atividade calma:</strong> Música suave, leitura, conversa baixa</li>
        <li><strong>Colocar no berço:</strong> Ainda acordado, mas sonolento</li>
      </ol>
      
      <h4>Rotina Diurna</h4>
      <ul>
        <li><strong>Manhã:</strong> Exposição à luz natural</li>
        <li><strong>Sonecas:</strong> Em horários regulares</li>
        <li><strong>Atividades:</strong> Estimulação adequada à idade</li>
        <li><strong>Alimentação:</strong> Intervalos regulares</li>
      </ul>
      
      <h3>🛠️ Técnicas de Sono</h3>
      
      <h4>Método da Cadeira (Gradual)</h4>
      <ol>
        <li><strong>Semana 1:</strong> Cadeira ao lado do berço</li>
        <li><strong>Semana 2:</strong> Cadeira no meio do quarto</li>
        <li><strong>Semana 3:</strong> Cadeira na porta</li>
        <li><strong>Semana 4:</strong> Fora do quarto</li>
      </ol>
      
      <h4>Método Pick-up/Put-down</h4>
      <ol>
        <li><strong>Coloque o bebê no berço</strong> acordado</li>
        <li><strong>Se chorar:</strong> Pegue no colo até acalmar</li>
        <li><strong>Coloque de volta</strong> ainda acordado</li>
        <li><strong>Repita</strong> quantas vezes necessário</li>
      </ol>
      
      <h4>Técnica do Shush-Pat</h4>
      <ul>
        <li><strong>Shush:</strong> Som "shhh" constante e ritmado</li>
        <li><strong>Pat:</strong> Tapinhas suaves nas costas ou bumbum</li>
        <li><strong>Posição:</strong> Bebê de lado ou de bruços no seu colo</li>
        <li><strong>Transição:</strong> Para o berço quando relaxado</li>
      </ul>
      
      <h3>😴 Sinais de Sono</h3>
      
      <h4>Sinais Precoces (Hora de Iniciar Rotina)</h4>
      <ul>
        <li>Olhar fixo ou "vidrado"</li>
        <li>Movimentos mais lentos</li>
        <li>Menos interação social</li>
        <li>Bocejos ocasionais</li>
      </ul>
      
      <h4>Sinais Tardios (Bebê Muito Cansado)</h4>
      <ul>
        <li>Choro intenso</li>
        <li>Arquear as costas</li>
        <li>Esfregar os olhos</li>
        <li>Agitação extrema</li>
      </ul>
      
      <h3>🔧 Solucionando Problemas Comuns</h3>
      
      <h4>Bebê Acorda Muito à Noite</h4>
      <ul>
        <li>Verifique se está com fome, frio ou calor</li>
        <li>Avalie se a rotina diurna está adequada</li>
        <li>Considere salto de desenvolvimento</li>
        <li>Mantenha consistência na resposta</li>
      </ul>
      
      <h4>Dificuldade para Adormecer</h4>
      <ul>
        <li>Antecipe a rotina se bebê está muito cansado</li>
        <li>Verifique ambiente (temperatura, ruído, luz)</li>
        <li>Avalie se há estimulação excessiva durante o dia</li>
        <li>Seja paciente - pode levar tempo</li>
      </ul>
      
      <h4>Regressões do Sono</h4>
      <ul>
        <li><strong>4 meses:</strong> Mudança nos ciclos de sono</li>
        <li><strong>8-10 meses:</strong> Ansiedade de separação</li>
        <li><strong>12 meses:</strong> Transição para 1 soneca</li>
        <li><strong>18 meses:</strong> Desenvolvimento cognitivo</li>
      </ul>
      
      <div style="background: #fef2f2; padding: 1rem; border-radius: 8px; border-left: 4px solid #ef4444; margin: 1rem 0;">
        <h4>⚠️ Segurança do Sono</h4>
        <ul>
          <li>Sempre coloque o bebê de barriga para cima</li>
          <li>Berço vazio - sem travesseiros, cobertores soltos, brinquedos</li>
          <li>Colchão firme e bem ajustado</li>
          <li>Evite superaquecimento</li>
          <li>Não fume no ambiente</li>
        </ul>
      </div>
      
      <h3>💡 Dicas Rápidas</h3>
      <ul>
        <li>🕐 Consistência é fundamental - mantenha rotinas</li>
        <li>☀️ Luz natural durante o dia, escuridão à noite</li>
        <li>🤱 Amamente/alimente antes da rotina de sono</li>
        <li>📱 Evite telas 1 hora antes de dormir</li>
        <li>😌 Mantenha-se calma - bebês sentem nossa energia</li>
        <li>⏰ Seja paciente - mudanças levam 1-2 semanas</li>
      </ul>
    `,
  }

  return content[moduleId as keyof typeof content] || "<p>Conteúdo em desenvolvimento...</p>"
}

const MembersDashboard: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"welcome" | "modules" | "extras" | "support">("welcome")

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alívio Mamãe</h1>
                <p className="text-xs text-gray-500">Área de Membros</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
          <button
            onClick={() => setActiveTab("welcome")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "welcome"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab("modules")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "modules"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Módulos
          </button>
          <button
            onClick={() => setActiveTab("extras")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "extras"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Extras Premium
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "support"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Suporte
          </button>
        </div>

        {/* Welcome Tab */}
        {activeTab === "welcome" && (
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-6">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 text-balance">
                Bem-vinda ao{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Alívio Mamãe
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Você está prestes a embarcar em uma jornada transformadora. Aqui você encontrará tudo o que precisa para
                viver uma maternidade mais leve, consciente e cheia de amor.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Sua Jornada Começa Agora</h2>
                <p className="text-gray-600">
                  Cada módulo foi cuidadosamente desenvolvido para apoiar você em cada fase desta experiência única.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      setActiveModule(module.id)
                      setActiveTab("modules")
                    }}
                  >
                    <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{module.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab("modules")}
                  className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Começar Jornada
                </button>
                <button
                  onClick={() => setActiveTab("extras")}
                  className="px-8 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                >
                  Ver Extras Premium
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">💝 Uma Mensagem Especial para Você</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Lembre-se: você não está sozinha nesta jornada. Cada dúvida, cada desafio, cada pequena vitória -
                    tudo faz parte do processo de se tornar a mãe incrível que você já é. Confie em si mesma, seja
                    gentil consigo e celebre cada passo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modules Tab */}
        {activeTab === "modules" && (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Módulos</h2>
                <nav className="space-y-2">
                  {modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeModule === module.id
                          ? `bg-gradient-to-r ${module.color} text-white shadow-md`
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <module.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{module.title}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              {activeModule ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: getModuleContent(activeModule) }}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                  <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Selecione um Módulo</h3>
                  <p className="text-gray-600">
                    Escolha um dos módulos ao lado para começar sua jornada de aprendizado.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Extras Premium Tab */}
        {activeTab === "extras" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Extras Premium
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conteúdos exclusivos para potencializar sua jornada maternal
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Playlist Relaxante */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <MusicalNoteIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Playlist Relaxante</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Músicas cuidadosamente selecionadas para momentos de relaxamento, massagem e conexão com seu bebê.
                </p>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Ouvir no Spotify
                </a>
              </div>

              {/* Grupo VIP Telegram */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Grupo VIP</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Comunidade exclusiva para trocar experiências, tirar dúvidas e receber apoio de outras mamães.
                </p>
                <a
                  href="https://t.me/+vYO6vwiVGpo5ZjRh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Entrar no Telegram
                </a>
              </div>

              {/* Receitas de Chás */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <BeakerIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Chás Seguros</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Receitas de chás naturais seguros para gestantes e mães que amamentam.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-2">Receitas incluídas:</p>
                  <ul className="space-y-1">
                    <li>• Camomila para relaxamento</li>
                    <li>• Gengibre para enjoos</li>
                    <li>• Melissa para digestão</li>
                    <li>• Folha de framboesa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === "support" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Suporte
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Estamos aqui para apoiar você em cada passo da sua jornada
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <EnvelopeIcon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Entre em Contato</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      Tem alguma dúvida sobre o conteúdo? Precisa de ajuda técnica? Nossa equipe está pronta para ajudar
                      você.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
                    <h4 className="font-semibold text-gray-800 mb-3">📧 E-mail de Suporte</h4>
                    <a
                      href="mailto:suportealiviomamae@gmail.com"
                      className="text-rose-600 font-medium text-lg hover:text-rose-700 transition-colors"
                    >
                      suportealiviomamae@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Respondemos em até 24 horas úteis</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3">💬 Grupo VIP</h4>
                      <p className="text-blue-700 text-sm mb-3">Tire dúvidas rápidas e conecte-se com outras mamães</p>
                      <a
                        href="https://t.me/+vYO6vwiVGpo5ZjRh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Acessar Grupo
                      </a>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-3">⚠️ Emergências</h4>
                      <p className="text-amber-700 text-sm">
                        Para questões médicas urgentes, sempre procure seu obstetra ou serviço de emergência médica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { MembersDashboard }
export default MembersDashboard
