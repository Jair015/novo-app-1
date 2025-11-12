'use client'

import { useState } from 'react'
import { Heart, Brain, Smile, Sun, Moon, Activity, CheckCircle, ArrowRight, RefreshCw, Home, Calendar, Dumbbell, Shield, Users, Clock, Coffee, Bed, BookOpen, Phone, AlertTriangle, X, ChevronRight, Star, Quote, Apple, Fish, Leaf, Carrot, CreditCard } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Question {
  id: number
  text: string
  options: { text: string; value: number }[]
}

interface Result {
  level: string
  color: string
  icon: any
  title: string
  description: string
  recommendations: string[]
}

interface Testimonial {
  id: number
  name: string
  age: number
  location: string
  rating: number
  title: string
  content: string
  improvement: string
  timeUsing: string
  avatar: string
}

interface HealthyFood {
  category: string
  icon: any
  color: string
  foods: {
    name: string
    benefits: string
    bestTime: string
    howToConsume: string
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "Como você tem se sentido na maior parte dos dias nas últimas duas semanas?",
    options: [
      { text: "Muito bem, com energia e motivação", value: 0 },
      { text: "Bem na maior parte do tempo", value: 1 },
      { text: "Nem bem nem mal, neutro", value: 2 },
      { text: "Triste ou desanimado frequentemente", value: 3 },
      { text: "Muito triste, sem esperança", value: 4 }
    ]
  },
  {
    id: 2,
    text: "Com que frequência você se sente ansioso ou preocupado?",
    options: [
      { text: "Raramente ou nunca", value: 0 },
      { text: "Às vezes, mas consigo lidar bem", value: 1 },
      { text: "Frequentemente, mas ainda funcional", value: 2 },
      { text: "Quase sempre, interfere no meu dia", value: 3 },
      { text: "Constantemente, é muito difícil lidar", value: 4 }
    ]
  },
  {
    id: 3,
    text: "Como está sua qualidade de sono?",
    options: [
      { text: "Durmo muito bem, acordo descansado", value: 0 },
      { text: "Geralmente durmo bem", value: 1 },
      { text: "Às vezes tenho dificuldade para dormir", value: 2 },
      { text: "Frequentemente tenho insônia", value: 3 },
      { text: "Raramente consigo dormir bem", value: 4 }
    ]
  },
  {
    id: 4,
    text: "Como está seu interesse em atividades que antes gostava?",
    options: [
      { text: "Mantenho o mesmo interesse e prazer", value: 0 },
      { text: "Ainda tenho interesse na maioria das coisas", value: 1 },
      { text: "Perdi interesse em algumas atividades", value: 2 },
      { text: "Perdi interesse na maioria das atividades", value: 3 },
      { text: "Não sinto prazer em quase nada", value: 4 }
    ]
  },
  {
    id: 5,
    text: "Como você avalia sua capacidade de concentração?",
    options: [
      { text: "Consigo me concentrar normalmente", value: 0 },
      { text: "Às vezes tenho dificuldade, mas é manejável", value: 1 },
      { text: "Frequentemente tenho dificuldade de foco", value: 2 },
      { text: "É muito difícil me concentrar", value: 3 },
      { text: "Quase não consigo me concentrar", value: 4 }
    ]
  },
  {
    id: 6,
    text: "Como você se sente em relação ao futuro?",
    options: [
      { text: "Otimista e esperançoso", value: 0 },
      { text: "Geralmente positivo sobre o futuro", value: 1 },
      { text: "Neutro, nem otimista nem pessimista", value: 2 },
      { text: "Frequentemente pessimista", value: 3 },
      { text: "Sem esperança, muito pessimista", value: 4 }
    ]
  }
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Carolina",
    age: 28,
    location: "São Paulo, SP",
    rating: 5,
    title: "Transformou minha vida completamente",
    content: "Há 6 meses eu não conseguia nem sair de casa por causa da ansiedade. Depois que comecei a usar o app e seguir as rotinas diárias, minha vida mudou 180 graus. Hoje consigo trabalhar, me relacionar e até fazer coisas que antes me davam pânico.",
    improvement: "Redução de 90% nos ataques de pânico",
    timeUsing: "8 meses",
    avatar: "AC"
  },
  {
    id: 2,
    name: "Roberto Silva",
    age: 35,
    location: "Rio de Janeiro, RJ",
    rating: 5,
    title: "Finalmente encontrei paz interior",
    content: "Como executivo, vivia estressado 24h. O app me ensinou técnicas de respiração e mindfulness que uso até nas reuniões. Minha pressão arterial normalizou e meu relacionamento com a família melhorou muito. Não consigo mais viver sem essas práticas.",
    improvement: "Stress reduzido em 85%",
    timeUsing: "1 ano e 2 meses",
    avatar: "RS"
  },
  {
    id: 3,
    name: "Mariana Costa",
    age: 22,
    location: "Belo Horizonte, MG",
    rating: 5,
    title: "Superou minha depressão pós-pandemia",
    content: "A pandemia me deixou muito deprimida. Perdi o emprego, me isolei de todos. O quiz do app me ajudou a entender meu estado mental e as recomendações foram certeiras. Hoje tenho um novo emprego e voltei a sorrir de verdade.",
    improvement: "Saiu da depressão severa para bem-estar",
    timeUsing: "10 meses",
    avatar: "MC"
  },
  {
    id: 4,
    name: "João Pedro",
    age: 19,
    location: "Brasília, DF",
    rating: 5,
    title: "Me salvou na faculdade",
    content: "Estava quase desistindo do curso por causa da ansiedade social. O app me deu ferramentas práticas que uso todos os dias. Aprendi a controlar minha respiração antes das apresentações e hoje até faço parte do centro acadêmico!",
    improvement: "Ansiedade social controlada",
    timeUsing: "6 meses",
    avatar: "JP"
  },
  {
    id: 5,
    name: "Fernanda Oliveira",
    age: 42,
    location: "Porto Alegre, RS",
    rating: 5,
    title: "Equilibrou minha vida de mãe e profissional",
    content: "Mãe de 3 filhos e trabalhando home office, eu estava no limite. O app me ajudou a criar uma rotina de autocuidado mesmo com pouco tempo. Os exercícios de 5 minutos fazem toda diferença no meu dia. Meus filhos até comentam que mamãe está mais calma.",
    improvement: "Burnout materno superado",
    timeUsing: "7 meses",
    avatar: "FO"
  },
  {
    id: 6,
    name: "Carlos Eduardo",
    age: 55,
    location: "Salvador, BA",
    rating: 5,
    title: "Nunca é tarde para cuidar da mente",
    content: "Depois dos 50, pensei que era tarde para mudar. Estava com depressão após a aposentadoria. O app me mostrou que posso ter uma vida plena em qualquer idade. Hoje faço caminhadas conscientes, medito e até voltei a tocar violão.",
    improvement: "Redescobriu o prazer de viver",
    timeUsing: "1 ano",
    avatar: "CE"
  }
]

const dailyRoutines = [
  {
    time: "07:00",
    icon: Sun,
    title: "Despertar Consciente",
    description: "Acorde devagar, respire fundo 3 vezes antes de levantar",
    color: "from-yellow-400 to-orange-500"
  },
  {
    time: "07:30",
    icon: Coffee,
    title: "Hidratação e Gratidão",
    description: "Beba um copo de água e pense em 3 coisas pelas quais é grato",
    color: "from-blue-400 to-cyan-500"
  },
  {
    time: "08:00",
    icon: Activity,
    title: "Movimento Matinal",
    description: "10-15 minutos de alongamento ou caminhada leve",
    color: "from-green-400 to-emerald-500"
  },
  {
    time: "12:00",
    icon: Heart,
    title: "Pausa Mindful",
    description: "5 minutos de respiração consciente ou meditação",
    color: "from-purple-400 to-pink-500"
  },
  {
    time: "18:00",
    icon: BookOpen,
    title: "Reflexão do Dia",
    description: "Anote 3 momentos positivos do seu dia",
    color: "from-indigo-400 to-purple-500"
  },
  {
    time: "21:00",
    icon: Bed,
    title: "Preparação para o Sono",
    description: "Desligue eletrônicos, tome um banho relaxante",
    color: "from-slate-400 to-slate-600"
  }
]

const homeExercises = [
  {
    title: "Respiração 4-7-8",
    duration: "5 min",
    description: "Inspire por 4, segure por 7, expire por 8. Reduz ansiedade instantaneamente.",
    steps: ["Sente-se confortavelmente", "Inspire pelo nariz contando até 4", "Segure a respiração por 7", "Expire pela boca por 8", "Repita 4 ciclos"]
  },
  {
    title: "Alongamento Relaxante",
    duration: "10 min",
    description: "Movimentos suaves para liberar tensão muscular e mental.",
    steps: ["Alongue pescoço e ombros", "Torção suave da coluna", "Alongamento de braços", "Flexão lateral", "Respiração profunda"]
  },
  {
    title: "Meditação Guiada",
    duration: "15 min",
    description: "Prática de mindfulness para acalmar a mente.",
    steps: ["Encontre um local silencioso", "Sente-se com coluna ereta", "Feche os olhos suavemente", "Foque na respiração", "Observe pensamentos sem julgamento"]
  },
  {
    title: "Caminhada Consciente",
    duration: "20 min",
    description: "Caminhe prestando atenção aos seus passos e ao ambiente.",
    steps: ["Escolha um percurso seguro", "Caminhe em ritmo moderado", "Observe a natureza ao redor", "Sinta os pés tocando o chão", "Respire o ar fresco"]
  }
]

const gymExercises = [
  {
    title: "Cardio Leve",
    duration: "20-30 min",
    description: "Esteira ou bicicleta em ritmo confortável. Libera endorfinas naturais.",
    benefits: ["Melhora humor", "Reduz estresse", "Aumenta energia"]
  },
  {
    title: "Musculação Moderada",
    duration: "30-40 min",
    description: "Exercícios com pesos leves a moderados, focando na forma.",
    benefits: ["Fortalece corpo", "Melhora autoestima", "Reduz ansiedade"]
  },
  {
    title: "Yoga ou Pilates",
    duration: "45-60 min",
    description: "Aulas que combinam movimento, respiração e mindfulness.",
    benefits: ["Flexibilidade", "Equilíbrio mental", "Reduz tensão"]
  },
  {
    title: "Natação",
    duration: "30-45 min",
    description: "Exercício completo e relaxante, excelente para ansiedade.",
    benefits: ["Baixo impacto", "Muito relaxante", "Exercício completo"]
  }
]

const newsToAvoid = [
  {
    type: "Notícias Sensacionalistas",
    description: "Manchetes exageradas que geram medo e ansiedade desnecessários",
    icon: AlertTriangle,
    color: "text-red-500"
  },
  {
    type: "Tragédias em Excesso",
    description: "Consumo excessivo de notícias sobre desastres e violência",
    icon: X,
    color: "text-red-500"
  },
  {
    type: "Redes Sociais Tóxicas",
    description: "Perfis que promovem comparação, inveja ou negatividade",
    icon: X,
    color: "text-red-500"
  },
  {
    type: "Notícias Antes de Dormir",
    description: "Informações pesadas que podem afetar a qualidade do sono",
    icon: Moon,
    color: "text-red-500"
  }
]

const healthyContacts = [
  {
    type: "Profissionais de Saúde Mental",
    contacts: [
      { name: "Psicólogo/Psiquiatra", phone: "Consulte seu plano de saúde", description: "Acompanhamento profissional regular" },
      { name: "CVV - Centro de Valorização da Vida", phone: "188", description: "Apoio emocional 24h, gratuito" },
      { name: "CAPS - Centro de Atenção Psicossocial", phone: "Consulte sua cidade", description: "Atendimento público de saúde mental" }
    ],
    icon: Heart,
    color: "from-red-400 to-pink-500"
  },
  {
    type: "Rede de Apoio Pessoal",
    contacts: [
      { name: "Familiares próximos", phone: "Seus contatos", description: "Pessoas que te conhecem e apoiam" },
      { name: "Amigos de confiança", phone: "Seus contatos", description: "Relacionamentos positivos e saudáveis" },
      { name: "Grupos de apoio", phone: "Procure em sua cidade", description: "Pessoas com experiências similares" }
    ],
    icon: Users,
    color: "from-blue-400 to-cyan-500"
  },
  {
    type: "Emergências",
    contacts: [
      { name: "SAMU", phone: "192", description: "Emergências médicas" },
      { name: "Polícia Militar", phone: "190", description: "Situações de risco" },
      { name: "Bombeiros", phone: "193", description: "Emergências gerais" }
    ],
    icon: Phone,
    color: "from-orange-400 to-red-500"
  }
]

const healthyFoods: HealthyFood[] = [
  {
    category: "Alimentos Ricos em Ômega-3",
    icon: Fish,
    color: "from-blue-400 to-cyan-500",
    foods: [
      {
        name: "Salmão, Sardinha e Atum",
        benefits: "Reduzem inflamação cerebral e melhoram o humor. Essenciais para produção de serotonina.",
        bestTime: "Almoço ou jantar",
        howToConsume: "2-3 porções por semana, grelhados ou assados"
      },
      {
        name: "Nozes e Castanhas",
        benefits: "Fonte vegetal de ômega-3, melhoram função cognitiva e reduzem ansiedade.",
        bestTime: "Lanche da manhã ou tarde",
        howToConsume: "1 punhado (30g) por dia, sem sal"
      },
      {
        name: "Sementes de Chia e Linhaça",
        benefits: "Regulam neurotransmissores e promovem sensação de bem-estar.",
        bestTime: "Café da manhã",
        howToConsume: "1 colher de sopa em vitaminas, iogurtes ou saladas"
      }
    ]
  },
  {
    category: "Alimentos Ricos em Triptofano",
    icon: Apple,
    color: "from-purple-400 to-pink-500",
    foods: [
      {
        name: "Banana",
        benefits: "Precursor da serotonina, melhora humor e qualidade do sono.",
        bestTime: "Lanche da tarde ou antes de dormir",
        howToConsume: "1-2 bananas por dia, pura ou em vitaminas"
      },
      {
        name: "Aveia",
        benefits: "Libera serotonina gradualmente, mantém humor estável durante o dia.",
        bestTime: "Café da manhã",
        howToConsume: "40-50g em mingau, vitaminas ou overnight oats"
      },
      {
        name: "Leite e Derivados",
        benefits: "Contém triptofano e cálcio, promovem relaxamento e melhor sono.",
        bestTime: "Noite, antes de dormir",
        howToConsume: "1 copo de leite morno ou iogurte natural"
      }
    ]
  },
  {
    category: "Antioxidantes Naturais",
    icon: Leaf,
    color: "from-green-400 to-emerald-500",
    foods: [
      {
        name: "Frutas Vermelhas",
        benefits: "Combatem estresse oxidativo no cérebro, melhoram memória e concentração.",
        bestTime: "Café da manhã ou lanche",
        howToConsume: "1 xícara de morangos, mirtilos ou framboesas por dia"
      },
      {
        name: "Chocolate Amargo (70% cacau)",
        benefits: "Libera endorfinas, reduz cortisol e melhora humor instantaneamente.",
        bestTime: "Lanche da tarde",
        howToConsume: "20-30g por dia, 2-3 quadradinhos"
      },
      {
        name: "Chá Verde",
        benefits: "L-teanina promove relaxamento sem sonolência, reduz ansiedade.",
        bestTime: "Manhã ou tarde",
        howToConsume: "2-3 xícaras por dia, longe das refeições"
      }
    ]
  },
  {
    category: "Vegetais e Folhas Verdes",
    icon: Carrot,
    color: "from-orange-400 to-red-500",
    foods: [
      {
        name: "Espinafre e Couve",
        benefits: "Ricos em folato, essencial para produção de dopamina e serotonina.",
        bestTime: "Almoço ou jantar",
        howToConsume: "Saladas, refogados ou sucos verdes diariamente"
      },
      {
        name: "Abacate",
        benefits: "Gorduras boas para o cérebro, vitaminas B que combatem depressão.",
        bestTime: "Café da manhã ou lanche",
        howToConsume: "1/2 abacate por dia em vitaminas ou saladas"
      },
      {
        name: "Batata Doce",
        benefits: "Carboidrato complexo que estabiliza açúcar no sangue e humor.",
        bestTime: "Almoço",
        howToConsume: "150-200g assada ou cozida, 3-4x por semana"
      }
    ]
  }
]

const getResult = (score: number): Result => {
  if (score <= 6) {
    return {
      level: 'excellent',
      color: 'from-emerald-400 to-teal-600',
      icon: Sun,
      title: 'Estado Mental Excelente',
      description: 'Você está em um ótimo momento! Continue cuidando da sua saúde mental.',
      recommendations: [
        'Mantenha suas rotinas saudáveis atuais',
        'Continue praticando atividades que te dão prazer',
        'Considere ajudar outras pessoas - isso pode aumentar ainda mais seu bem-estar',
        'Pratique gratidão diariamente',
        'Mantenha conexões sociais positivas'
      ]
    }
  } else if (score <= 12) {
    return {
      level: 'good',
      color: 'from-blue-400 to-cyan-600',
      icon: Smile,
      title: 'Estado Mental Bom',
      description: 'Você está bem, mas há espaço para melhorias no seu bem-estar.',
      recommendations: [
        'Estabeleça uma rotina de exercícios leves',
        'Pratique técnicas de respiração e mindfulness',
        'Mantenha um diário de gratidão',
        'Busque atividades que te tragam alegria',
        'Converse com amigos e familiares regularmente'
      ]
    }
  } else if (score <= 18) {
    return {
      level: 'moderate',
      color: 'from-yellow-400 to-orange-500',
      icon: Activity,
      title: 'Atenção Necessária',
      description: 'Você pode estar passando por um período desafiador. É importante cuidar mais de si mesmo.',
      recommendations: [
        'Estabeleça uma rotina diária estruturada',
        'Pratique exercícios físicos regularmente',
        'Limite o consumo de notícias negativas',
        'Busque atividades relaxantes como meditação',
        'Considere conversar com um profissional de saúde mental',
        'Mantenha contato com pessoas queridas'
      ]
    }
  } else {
    return {
      level: 'concerning',
      color: 'from-rose-400 to-pink-600',
      icon: Heart,
      title: 'Busque Apoio Profissional',
      description: 'Você pode estar enfrentando sintomas significativos. É importante buscar ajuda profissional.',
      recommendations: [
        'Procure um psicólogo ou psiquiatra o quanto antes',
        'Converse com pessoas de confiança sobre como se sente',
        'Mantenha rotinas básicas: alimentação, sono e higiene',
        'Evite tomar decisões importantes neste momento',
        'Lembre-se: buscar ajuda é um sinal de força, não fraqueza',
        'Em emergências, procure o CVV: 188 ou chat.cvv.org.br'
      ]
    }
  }
}

export default function MentalHealthApp() {
  const router = useRouter()
  const [currentScreen, setCurrentScreen] = useState<'home' | 'quiz' | 'result' | 'routine' | 'exercises' | 'wellness' | 'testimonials' | 'nutrition'>('home')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<Result | null>(null)

  const handleStartQuiz = () => {
    setCurrentScreen('quiz')
    setCurrentQuestion(0)
    setAnswers([])
  }

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calcular resultado
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0)
      const finalResult = getResult(totalScore)
      setResult(finalResult)
      setCurrentScreen('result')
    }
  }

  const resetQuiz = () => {
    setCurrentScreen('home')
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
  }

  const NutritionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full">
                <Apple className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Alimentação para Saúde Mental
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubra alimentos que comprovadamente melhoram o humor, reduzem ansiedade e promovem bem-estar mental
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl mb-12 border border-green-200 dark:border-green-800">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">
              🧠 Como a alimentação afeta sua mente:
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-green-700 dark:text-green-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">90%</div>
                <div className="text-sm">da serotonina é produzida no intestino</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">70%</div>
                <div className="text-sm">melhora no humor com dieta balanceada</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">3-4</div>
                <div className="text-sm">semanas para sentir os benefícios</div>
              </div>
            </div>
          </div>

          {/* Food Categories */}
          <div className="space-y-8 mb-12">
            {healthyFoods.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div key={categoryIndex} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {category.category}
                    </h2>
                  </div>

                  {/* Foods Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.foods.map((food, foodIndex) => (
                      <div key={foodIndex} className="bg-gray-50 dark:bg-slate-700 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                          {food.name}
                        </h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                              💡 Benefícios:
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-200">
                              {food.benefits}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                              ⏰ Melhor horário:
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-200">
                              {food.bestTime}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                              🍽️ Como consumir:
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-200">
                              {food.howToConsume}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Daily Meal Plan */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              🍽️ Exemplo de Dia Alimentar para Bem-estar Mental
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  ☀️ Café da Manhã
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Aveia com frutas vermelhas</li>
                  <li>• 1 banana</li>
                  <li>• Chá verde</li>
                  <li>• Nozes (1 punhado)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                  🌞 Almoço
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Salmão grelhado</li>
                  <li>• Salada de espinafre</li>
                  <li>• Batata doce assada</li>
                  <li>• Abacate em fatias</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  🌅 Lanche
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Iogurte natural</li>
                  <li>• Sementes de chia</li>
                  <li>• Chocolate amargo (2 quadradinhos)</li>
                  <li>• Castanhas</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  🌙 Jantar
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Sardinha com salada</li>
                  <li>• Couve refogada</li>
                  <li>• Leite morno (antes de dormir)</li>
                  <li>• Camomila</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Foods to Avoid */}
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl mb-8 border border-red-200 dark:border-red-800">
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-4">
              ⚠️ Alimentos que podem piorar ansiedade e depressão:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Evite ou reduza:</h4>
                <ul className="space-y-1 text-red-600 dark:text-red-400 text-sm">
                  <li>• Açúcar refinado e doces em excesso</li>
                  <li>• Cafeína em excesso (mais de 3 xícaras/dia)</li>
                  <li>• Álcool (depressor do sistema nervoso)</li>
                  <li>• Alimentos ultraprocessados</li>
                  <li>• Refrigerantes e bebidas açucaradas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Por que evitar:</h4>
                <ul className="space-y-1 text-red-600 dark:text-red-400 text-sm">
                  <li>• Causam picos e quedas de açúcar no sangue</li>
                  <li>• Aumentam cortisol (hormônio do estresse)</li>
                  <li>• Interferem na qualidade do sono</li>
                  <li>• Reduzem absorção de nutrientes importantes</li>
                  <li>• Podem causar inflamação cerebral</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              💡 Dicas práticas para implementar:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Comece mudando 1-2 alimentos por semana</li>
                <li>• Prepare lanches saudáveis com antecedência</li>
                <li>• Mantenha nozes e frutas sempre à mão</li>
                <li>• Beba água regularmente (desidratação afeta o humor)</li>
              </ul>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Cozinhe em casa sempre que possível</li>
                <li>• Faça refeições regulares (não pule)</li>
                <li>• Mastigue devagar e com atenção plena</li>
                <li>• Consulte um nutricionista para plano personalizado</li>
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('home')}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const TestimonialsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-4 rounded-full">
                <Star className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Histórias de Transformação
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pessoas reais que superaram ansiedade e depressão usando nosso app. 
              Suas histórias podem inspirar sua jornada de bem-estar.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">94%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Relatam melhora significativa</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Redução na ansiedade</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Melhor qualidade do sono</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Avaliação média</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                        {testimonial.name}, {testimonial.age} anos
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-purple-400 mb-4" />

                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  "{testimonial.title}"
                </h4>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Metrics */}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        Melhoria:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.improvement}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Usando há:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.timeUsing}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Sua história de transformação começa agora
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Milhares de pessoas já transformaram suas vidas. Você pode ser a próxima história de sucesso.
            </p>
            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              Começar Minha Jornada
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('home')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const HomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Cuidando da Sua Mente
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Um espaço completo para cuidar da sua saúde mental com rotinas, exercícios e orientações personalizadas
            </p>
          </div>

          {/* Pricing Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl mb-8 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500 p-3 rounded-full">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">
                    🎁 Experimente 7 dias grátis do plano Premium
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-300">
                    Acesso completo a todas as funcionalidades por apenas R$ 19,90/mês
                  </p>
                </div>
              </div>
              <button
                onClick={() => router.push('/quiz-pricing')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Ver Planos
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Success Stories Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-2xl mb-8 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500 p-3 rounded-full">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-200">
                    +50.000 pessoas já transformaram suas vidas
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-300">
                    94% relatam melhora significativa na ansiedade e depressão
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCurrentScreen('testimonials')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                Ver Histórias
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <button
              onClick={handleStartQuiz}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
            >
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full w-fit mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Avaliação Mental
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Descubra seu estado atual e receba orientações personalizadas
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-700">
                <span className="text-sm font-medium">Iniciar Quiz</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => setCurrentScreen('routine')}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
            >
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-full w-fit mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Rotina Diária
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Estruture seu dia com hábitos saudáveis para a mente
              </p>
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700">
                <span className="text-sm font-medium">Ver Rotina</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => setCurrentScreen('exercises')}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
            >
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-3 rounded-full w-fit mb-4">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Exercícios
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Atividades para casa e academia que melhoram o humor
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700">
                <span className="text-sm font-medium">Ver Exercícios</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => setCurrentScreen('wellness')}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
            >
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-full w-fit mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Bem-estar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Orientações sobre mídia e contatos para sua saúde mental
              </p>
              <div className="flex items-center text-orange-600 dark:text-orange-400 group-hover:text-orange-700">
                <span className="text-sm font-medium">Ver Dicas</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => setCurrentScreen('nutrition')}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
            >
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-full w-fit mb-4">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Alimentação
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Alimentos que melhoram humor e reduzem ansiedade
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 group-hover:text-green-700">
                <span className="text-sm font-medium">Ver Alimentos</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>

            <button
              onClick={() => setCurrentScreen('testimonials')}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full w-fit mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Histórias Reais
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pessoas que superaram ansiedade e depressão
              </p>
              <div className="flex items-center text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700">
                <span className="text-sm font-medium">Ver Depoimentos</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>
          </div>

          {/* Quick Start */}
          <div className="text-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Como você está se sentindo hoje?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comece com nossa avaliação personalizada e descubra ferramentas específicas para o seu bem-estar.
              </p>
              <button
                onClick={handleStartQuiz}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
              >
                Começar Avaliação
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              <strong>Importante:</strong> Esta ferramenta não substitui o acompanhamento profissional. 
              Se você está enfrentando dificuldades significativas, procure ajuda de um psicólogo ou psiquiatra.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const RoutineScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-4 rounded-full">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Sua Rotina de Bem-estar
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Uma estrutura diária pensada para cuidar da sua saúde mental
            </p>
          </div>

          {/* Daily Routine */}
          <div className="space-y-6 mb-8">
            {dailyRoutines.map((routine, index) => {
              const IconComponent = routine.icon
              return (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className={`bg-gradient-to-r ${routine.color} p-3 rounded-full`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
                          {routine.time}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {routine.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {routine.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              💡 Dicas para manter a rotina:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>• Comece com apenas 2-3 atividades por dia</li>
              <li>• Seja flexível - adapte os horários à sua realidade</li>
              <li>• Use lembretes no celular para criar o hábito</li>
              <li>• Celebre pequenas conquistas diárias</li>
              <li>• Não se cobre se perder um dia - retome no próximo</li>
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('home')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const ExercisesScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-full">
                <Dumbbell className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Exercícios para Saúde Mental
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Atividades físicas e mentais que comprovadamente melhoram o humor e reduzem ansiedade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Home Exercises */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Exercícios em Casa
              </h2>
              <div className="space-y-6">
                {homeExercises.map((exercise, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {exercise.title}
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exercise.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exercise.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Passos:</h4>
                      <ul className="space-y-1">
                        {exercise.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-blue-500 font-bold">{stepIndex + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gym Exercises */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Dumbbell className="w-6 h-6" />
                Exercícios na Academia
              </h2>
              <div className="space-y-6">
                {gymExercises.map((exercise, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {exercise.title}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exercise.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exercise.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Benefícios:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exercise.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              🏃‍♀️ Lembre-se:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>• Comece devagar e aumente gradualmente a intensidade</li>
              <li>• Escolha atividades que você goste - isso aumenta a adesão</li>
              <li>• Exercícios regulares são mais eficazes que sessões intensas esporádicas</li>
              <li>• Consulte um médico antes de iniciar novos exercícios físicos</li>
              <li>• O importante é se mover - qualquer atividade é melhor que nenhuma</li>
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('home')}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const WellnessScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Protegendo Seu Bem-estar
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Orientações sobre o que evitar e contatos importantes para sua saúde mental
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* News to Avoid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Conteúdo a Evitar
              </h2>
              <div className="space-y-4 mb-6">
                {newsToAvoid.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-red-400">
                      <div className="flex items-start gap-4">
                        <IconComponent className={`w-6 h-6 ${item.color} flex-shrink-0 mt-1`} />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            {item.type}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Healthy Media Tips */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                  ✅ Alternativas Saudáveis:
                </h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>• Limite o tempo de notícias a 15-30 min por dia</li>
                  <li>• Escolha fontes confiáveis e equilibradas</li>
                  <li>• Prefira conteúdo educativo e inspirador</li>
                  <li>• Siga perfis que promovem positividade</li>
                  <li>• Faça pausas regulares das redes sociais</li>
                  <li>• Consuma conteúdo relaxante antes de dormir</li>
                </ul>
              </div>
            </div>

            {/* Healthy Contacts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Contatos Importantes
              </h2>
              <div className="space-y-6">
                {healthyContacts.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`bg-gradient-to-r ${category.color} p-2 rounded-full`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {category.type}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {category.contacts.map((contact, contactIndex) => (
                          <div key={contactIndex} className="border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-medium text-gray-800 dark:text-gray-100">
                                {contact.name}
                              </h4>
                              <span className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">
                                {contact.phone}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {contact.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
              🆘 Em Situação de Crise
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-red-700 dark:text-red-300">
              <div>
                <p className="font-semibold mb-2">Se você está pensando em se machucar:</p>
                <ul className="space-y-1 text-sm">
                  <li>• CVV: <strong>188</strong> (24h, gratuito)</li>
                  <li>• Chat: <strong>chat.cvv.org.br</strong></li>
                  <li>• SAMU: <strong>192</strong></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Você não está sozinho:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Converse com alguém de confiança</li>
                  <li>• Procure um local seguro</li>
                  <li>• Busque ajuda profissional imediatamente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('home')}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const QuizScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Pergunta {currentQuestion + 1} de {questions.length}
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
              {questions[currentQuestion].text}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500 group-hover:border-purple-500 transition-colors" />
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ResultScreen = () => {
    if (!result) return null

    const IconComponent = result.icon

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Result Header */}
            <div className="text-center mb-8">
              <div className={`bg-gradient-to-r ${result.color} p-6 rounded-full w-fit mx-auto mb-6`}>
                <IconComponent className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {result.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {result.description}
              </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Recomendações para você:
              </h3>
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-200">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access to Tools */}
            <div className="grid md:grid-cols-5 gap-6 mb-8">
              <button
                onClick={() => setCurrentScreen('routine')}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Calendar className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Ver Rotina</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Estruture seu dia</p>
              </button>

              <button
                onClick={() => setCurrentScreen('exercises')}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Dumbbell className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Exercícios</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Melhore seu humor</p>
              </button>

              <button
                onClick={() => setCurrentScreen('wellness')}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Shield className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Bem-estar</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Proteja sua mente</p>
              </button>

              <button
                onClick={() => setCurrentScreen('nutrition')}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Apple className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Alimentação</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Nutra sua mente</p>
              </button>

              <button
                onClick={() => setCurrentScreen('testimonials')}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Histórias</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Inspire-se</p>
              </button>
            </div>

            {/* Emergency Contact */}
            {result.level === 'concerning' && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-2xl mb-8">
                <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                  🆘 Precisa de ajuda imediata?
                </h4>
                <p className="text-red-700 dark:text-red-300 mb-3">
                  Se você está pensando em se machucar ou está em crise, procure ajuda imediatamente:
                </p>
                <div className="space-y-2 text-red-700 dark:text-red-300">
                  <p><strong>CVV:</strong> 188 (24h, gratuito)</p>
                  <p><strong>Chat CVV:</strong> chat.cvv.org.br</p>
                  <p><strong>SAMU:</strong> 192</p>
                  <p><strong>Emergência:</strong> 190</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center"
              >
                <Home className="w-5 h-5" />
                Voltar ao Início
              </button>
              <button
                onClick={() => {
                  setCurrentScreen('quiz')
                  setCurrentQuestion(0)
                  setAnswers([])
                }}
                className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-2 justify-center"
              >
                <RefreshCw className="w-5 h-5" />
                Refazer Avaliação
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'quiz' && <QuizScreen />}
      {currentScreen === 'result' && <ResultScreen />}
      {currentScreen === 'routine' && <RoutineScreen />}
      {currentScreen === 'exercises' && <ExercisesScreen />}
      {currentScreen === 'wellness' && <WellnessScreen />}
      {currentScreen === 'testimonials' && <TestimonialsScreen />}
      {currentScreen === 'nutrition' && <NutritionScreen />}
    </>
  )
}
