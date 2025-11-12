'use client'

import { Check, Sparkles, Crown, Zap, Home, Timer, TrendingUp, Award, Camera, Brain, Moon, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PricingPage() {
  const router = useRouter()

  const plans = [
    {
      name: 'Teste Grátis',
      price: 'R$ 0',
      period: '/7 dias',
      description: 'Experimente TUDO grátis e veja resultados reais em apenas 7 dias!',
      icon: Timer,
      color: 'from-orange-400 to-red-500',
      features: [
        '🔥 Acesso TOTAL por 7 dias',
        '⚡ Resultados visíveis em 7 dias',
        '🎯 Rotinas personalizadas completas',
        '💪 Todos os exercícios liberados',
        '🥗 Plano alimentar completo',
        '🧘 Meditações guiadas exclusivas',
        '📊 Acompanhamento de progresso',
        '🔔 Lembretes inteligentes'
      ],
      cta: 'COMEÇAR AGORA GRÁTIS',
      popular: false,
      trial: 'Cancele quando quiser',
      highlight: 'VEJA RESULTADOS EM 7 DIAS!',
      urgency: '⏰ Oferta por tempo limitado'
    },
    {
      name: 'Premium',
      price: 'R$ 19,90',
      period: '/mês',
      description: 'Continue sua transformação após o teste grátis',
      icon: Crown,
      color: 'from-purple-400 to-pink-500',
      features: [
        '✨ Tudo do plano gratuito',
        '🚀 Acesso ilimitado para sempre',
        '🎁 Conteúdo novo toda semana',
        '💬 Suporte prioritário 24/7',
        '🏆 Comunidade exclusiva',
        '📚 E-books e materiais extras',
        '🎓 Certificado de conclusão',
        '💰 Cancele quando quiser'
      ],
      cta: 'Assinar Premium',
      popular: true,
      trial: 'Após 7 dias grátis',
      highlight: 'MAIS ESCOLHIDO'
    },
    {
      name: 'Anual',
      price: 'R$ 159,90',
      period: '/ano',
      description: 'Economia máxima + benefícios VIP exclusivos',
      icon: Zap,
      color: 'from-emerald-400 to-teal-500',
      features: [
        '💎 Tudo do plano Premium',
        '💸 Economize 33% (R$ 13,32/mês)',
        '📸 Scanner Inteligente de Alimentos',
        '🧠 Detecta alimentos anti-ansiedade',
        '😴 Identifica alimentos para melhor sono',
        '❤️ Reconhece alimentos anti-estresse',
        '🎯 Sessões de coaching mensais',
        '👥 Acesso à comunidade VIP',
        '📖 Biblioteca completa de e-books',
        '🏅 Certificados exclusivos',
        '🔒 Acesso vitalício a atualizações',
        '✅ Garantia de 30 dias'
      ],
      cta: 'Assinar Anual',
      popular: false,
      trial: 'Após 7 dias grátis',
      savings: '💰 Economize R$ 78,90',
      highlight: 'MELHOR CUSTO-BENEFÍCIO',
      exclusive: '📸 EXCLUSIVO: Scanner Inteligente'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header com Urgência */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
              <Timer className="w-5 h-5" />
              ⏰ OFERTA ESPECIAL: 7 DIAS GRÁTIS + RESULTADOS GARANTIDOS
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-6">
              Transforme Sua Vida em 7 Dias!
            </h1>
            
            <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto mb-8 font-semibold">
              🔥 Experimente GRÁTIS e veja resultados REAIS em apenas 7 dias!
            </p>

            {/* Hero Image - Transformação */}
            <div className="max-w-5xl mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop"
                alt="Pessoa meditando em ambiente tranquilo ao amanhecer"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 px-6 py-3 rounded-full font-bold">
                <TrendingUp className="w-5 h-5" />
                85% redução de ansiedade
              </div>
              <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-6 py-3 rounded-full font-bold">
                <Award className="w-5 h-5" />
                +50.000 vidas transformadas
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ✅ Sem cartão de crédito • ✅ Cancele quando quiser • ✅ Acesso total imediato
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-purple-400 dark:ring-purple-500 transform scale-105' : ''
                  } ${index === 0 ? 'ring-4 ring-orange-400 dark:ring-orange-500' : ''} ${index === 2 ? 'ring-4 ring-emerald-400 dark:ring-emerald-500' : ''}`}
                >
                  {/* Highlight Badge */}
                  {plan.highlight && (
                    <div className={`absolute top-0 right-0 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                        : plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    } text-white px-4 py-2 text-xs font-bold rounded-bl-2xl`}>
                      {plan.highlight}
                    </div>
                  )}

                  {/* Exclusive Feature Badge */}
                  {plan.exclusive && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 text-xs font-bold rounded-br-2xl flex items-center gap-1 animate-pulse">
                      <Camera className="w-3 h-3" />
                      {plan.exclusive}
                    </div>
                  )}

                  {/* Urgency Badge */}
                  {plan.urgency && (
                    <div className="absolute top-12 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-2xl animate-pulse">
                      {plan.urgency}
                    </div>
                  )}

                  {/* Savings Badge */}
                  {plan.savings && !plan.exclusive && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 text-xs font-bold rounded-br-2xl">
                      {plan.savings}
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-2xl w-fit mb-4 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[60px] font-medium">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-6xl font-extrabold ${
                          index === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500' : 'text-gray-800 dark:text-gray-100'
                        }`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-lg">
                          {plan.period}
                        </span>
                      </div>
                      {plan.trial && (
                        <p className={`text-sm font-bold mt-3 ${
                          index === 0 ? 'text-orange-600 dark:text-orange-400' : 'text-emerald-600 dark:text-emerald-400'
                        }`}>
                          {index === 0 ? '🎁' : '✨'} {plan.trial}
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-5 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl mb-8 ${
                        index === 0
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 animate-pulse'
                          : plan.popular
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                            : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-lg">
                        ✨ O que você recebe:
                      </h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                            index === 0 ? 'text-orange-500' : index === 2 ? 'text-emerald-500' : 'text-purple-500'
                          }`} />
                          <span className="text-gray-700 dark:text-gray-200 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Scanner Inteligente Feature Highlight */}
          <div className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20 p-10 rounded-3xl mb-12 shadow-2xl border-4 border-blue-300 dark:border-blue-700">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-xl">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
                  📸 Scanner Inteligente de Alimentos
                </h3>
              </div>
              
              {/* Imagem demonstrativa do Scanner */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&h=600&fit=crop"
                  alt="Alimentos saudáveis variados sendo escaneados"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-center text-2xl text-gray-700 dark:text-gray-200 font-bold mb-8">
                🎯 EXCLUSIVO DO PLANO ANUAL - Focado em Bem-Estar Mental!
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Camera className="w-6 h-6 text-blue-500" />
                    Como Funciona
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">1.</span>
                      <span>Aponte a câmera do celular para qualquer alimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">2.</span>
                      <span>Nossa IA analisa instantaneamente a imagem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">3.</span>
                      <span>Identifica se o alimento ajuda com ansiedade, estresse ou sono</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">4.</span>
                      <span>Receba recomendações personalizadas para seu bem-estar</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-emerald-500" />
                    Alimentos Detectados
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    <li className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span><strong>Anti-Ansiedade:</strong> Chá verde, banana, aveia, nozes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      <span><strong>Anti-Estresse:</strong> Chocolate amargo, abacate, salmão</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Moon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span><strong>Melhora do Sono:</strong> Leite morno, kiwi, amêndoas, camomila</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Informações nutricionais completas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Sugestões de alternativas mais saudáveis</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 rounded-2xl text-center shadow-xl">
                <p className="text-white text-xl font-bold mb-4">
                  🧠 Descubra quais alimentos fazem bem para sua MENTE e CORPO!
                </p>
                <p className="text-white text-lg mb-6">
                  Nossa IA identifica automaticamente alimentos que combatem ansiedade, estresse e melhoram seu sono
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-white font-semibold">
                  <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Reduz Ansiedade
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Combate Estresse
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    Melhora o Sono
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Bem-Estar Total
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Proof Section */}
          <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-purple-900/20 p-10 rounded-3xl mb-12 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
                🔥 Resultados REAIS em 7 Dias!
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
                Veja o que acontece quando você experimenta nosso método comprovado
              </p>
            </div>

            {/* Imagem de Resultados */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1200&h=500&fit=crop"
                alt="Pessoa feliz e saudável praticando exercícios"
                width={1200}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
                <div className="text-5xl font-extrabold text-orange-500 mb-3">85%</div>
                <p className="text-gray-700 dark:text-gray-200 font-bold text-lg">
                  Redução de Ansiedade
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Em apenas 7 dias de uso
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
                <div className="text-5xl font-extrabold text-purple-500 mb-3">92%</div>
                <p className="text-gray-700 dark:text-gray-200 font-bold text-lg">
                  Melhora no Sono
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Durma melhor desde a primeira semana
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
                <div className="text-5xl font-extrabold text-emerald-500 mb-3">97%</div>
                <p className="text-gray-700 dark:text-gray-200 font-bold text-lg">
                  Mais Energia
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Sinta-se mais disposto todos os dias
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-4">
                ⚡ Comece AGORA e veja a diferença em 7 dias!
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg animate-pulse">
                QUERO MEUS 7 DIAS GRÁTIS AGORA!
              </button>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl mb-12 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
                💬 O Que Dizem Quem Já Testou
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Mais de 50.000 pessoas já transformaram suas vidas
              </p>
            </div>

            {/* Imagem de Comunidade */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop"
                alt="Grupo de pessoas felizes e saudáveis"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 dark:text-gray-100 mb-4 font-semibold text-lg">
                  "Em 7 dias minha ansiedade reduziu 80%! Não acreditei quando vi os resultados. Agora durmo melhor e acordo mais disposta!"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                  - Ana Carolina, 28 anos
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                  ✅ Resultado em 7 dias
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 dark:text-gray-100 mb-4 font-semibold text-lg">
                  "Testei grátis por 7 dias e fiquei impressionado! Minha produtividade triplicou e minha mente está muito mais calma."
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                  - Roberto Silva, 35 anos
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                  ✅ Resultado em 7 dias
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 dark:text-gray-100 mb-4 font-semibold text-lg">
                  "Melhor decisão que tomei! Em uma semana já sentia diferença na minha energia e disposição. Recomendo demais!"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                  - Mariana Costa, 22 anos
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                  ✅ Resultado em 7 dias
                </p>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-10 rounded-3xl text-center mb-12 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="bg-emerald-500 p-6 rounded-full w-fit mx-auto mb-6 shadow-xl">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
                🛡️ Garantia Total de Satisfação
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-6 font-semibold">
                Experimente por 7 dias GRÁTIS. Se não ver resultados, cancele sem pagar nada!
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                E se assinar e não gostar, devolvemos 100% do seu dinheiro em até 30 dias. Sem perguntas, sem burocracia.
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold">
                <Sparkles className="w-5 h-5" />
                Risco ZERO para você!
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              🚀 Pronto Para Transformar Sua Vida?
            </h3>
            <p className="text-2xl text-white mb-8 font-semibold">
              Comece AGORA seus 7 dias grátis e veja resultados REAIS!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push('/')}
                className="bg-white hover:bg-gray-100 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 font-extrabold py-6 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl"
              >
                COMEÇAR 7 DIAS GRÁTIS AGORA!
              </button>
              <button
                onClick={() => router.push('/')}
                className="bg-transparent hover:bg-white/10 text-white font-bold py-6 px-12 rounded-xl transition-all duration-300 shadow-xl border-2 border-white flex items-center gap-3 justify-center text-xl"
              >
                <Home className="w-6 h-6" />
                Voltar ao Início
              </button>
            </div>
            <p className="text-white mt-6 text-sm">
              ✅ Sem cartão de crédito • ✅ Cancele quando quiser • ✅ Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
