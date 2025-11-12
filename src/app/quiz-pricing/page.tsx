'use client'

import { useState } from 'react'
import { Brain, Heart, Moon, Activity, TrendingUp, ArrowRight, Check, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface QuizQuestion {
  id: number
  question: string
  options: {
    text: string
    value: string
    icon: any
  }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o seu principal objetivo?',
    options: [
      { text: 'Reduzir ansiedade e estresse', value: 'anxiety', icon: Brain },
      { text: 'Melhorar qualidade do sono', value: 'sleep', icon: Moon },
      { text: 'Aumentar energia e disposição', value: 'energy', icon: Activity },
      { text: 'Melhorar saúde mental geral', value: 'general', icon: Heart }
    ]
  },
  {
    id: 2,
    question: 'Como você descreveria seu nível de estresse atual?',
    options: [
      { text: 'Muito alto - preciso de ajuda urgente', value: 'high', icon: TrendingUp },
      { text: 'Alto - afeta meu dia a dia', value: 'medium-high', icon: TrendingUp },
      { text: 'Moderado - consigo lidar', value: 'medium', icon: Activity },
      { text: 'Baixo - só quero prevenir', value: 'low', icon: Check }
    ]
  },
  {
    id: 3,
    question: 'Quanto tempo você pode dedicar por dia?',
    options: [
      { text: '5-10 minutos', value: '5-10', icon: Activity },
      { text: '15-20 minutos', value: '15-20', icon: Activity },
      { text: '30 minutos ou mais', value: '30+', icon: Activity },
      { text: 'Quanto for necessário', value: 'flexible', icon: Sparkles }
    ]
  },
  {
    id: 4,
    question: 'O que mais te atrai em um programa de bem-estar?',
    options: [
      { text: 'Rotinas personalizadas', value: 'routines', icon: Check },
      { text: 'Exercícios e meditações', value: 'exercises', icon: Activity },
      { text: 'Orientação alimentar', value: 'nutrition', icon: Heart },
      { text: 'Tudo junto e completo', value: 'complete', icon: Sparkles }
    ]
  }
]

export default function QuizPricingPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getRecommendation = () => {
    // Análise simples baseada nas respostas
    const hasHighStress = answers.includes('high') || answers.includes('medium-high')
    const wantsComplete = answers.includes('complete')
    const hasTimeCommitment = answers.includes('30+') || answers.includes('flexible')

    if (hasHighStress || wantsComplete || hasTimeCommitment) {
      return {
        plan: 'Plano Anual',
        reason: 'Baseado nas suas respostas, você precisa de um programa completo e estruturado. O Plano Anual oferece todas as ferramentas necessárias, incluindo o Scanner Inteligente de Alimentos que identifica alimentos que combatem ansiedade, estresse e melhoram o sono.',
        highlight: 'anual'
      }
    } else if (answers.includes('anxiety') || answers.includes('sleep')) {
      return {
        plan: 'Plano Premium',
        reason: 'Você precisa de acompanhamento contínuo para seus objetivos específicos. O Plano Premium oferece acesso ilimitado a todas as rotinas e exercícios personalizados.',
        highlight: 'premium'
      }
    } else {
      return {
        plan: 'Teste Grátis de 7 Dias',
        reason: 'Comece experimentando gratuitamente! Você terá acesso total por 7 dias para descobrir como nosso programa pode transformar sua vida.',
        highlight: 'free'
      }
    }
  }

  const ResultScreen = () => {
    const recommendation = getRecommendation()

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Success Animation */}
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 rounded-full w-fit mx-auto mb-6 animate-bounce">
                <Check className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-4">
                Análise Completa!
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
                Encontramos o plano perfeito para você
              </p>
            </div>

            {/* Recommendation Card */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-purple-500" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Recomendação Personalizada
                </h2>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🎯 {recommendation.plan}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  {recommendation.reason}
                </p>
              </div>

              {/* Benefits Summary */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Seus Objetivos
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    {answers.includes('anxiety') && <li>• Reduzir ansiedade</li>}
                    {answers.includes('sleep') && <li>• Melhorar sono</li>}
                    {answers.includes('energy') && <li>• Aumentar energia</li>}
                    {answers.includes('general') && <li>• Saúde mental geral</li>}
                    {answers.includes('complete') && <li>• Programa completo</li>}
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Seu Compromisso
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    {answers.includes('5-10') && <li>• 5-10 min/dia</li>}
                    {answers.includes('15-20') && <li>• 15-20 min/dia</li>}
                    {answers.includes('30+') && <li>• 30+ min/dia</li>}
                    {answers.includes('flexible') && <li>• Tempo flexível</li>}
                    <li>• Dedicação consistente</li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => router.push('/pricing')}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl flex items-center justify-center gap-3 animate-pulse"
              >
                Ver Planos e Começar Agora
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                <div className="text-gray-600 dark:text-gray-300">Redução de ansiedade</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
                <div className="text-gray-600 dark:text-gray-300">Melhora no sono</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">50k+</div>
                <div className="text-gray-600 dark:text-gray-300">Vidas transformadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    return <ResultScreen />
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-fit mx-auto mb-6">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-4">
              Encontre Seu Plano Ideal
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
              Responda 4 perguntas rápidas para uma recomendação personalizada
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Pergunta {currentQuestion + 1} de {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
              {question.question}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {question.options.map((option, index) => {
                const IconComponent = option.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                          {option.text}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-6 h-6 text-purple-500" />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ✅ Mais de 50.000 pessoas já encontraram seu plano ideal
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
