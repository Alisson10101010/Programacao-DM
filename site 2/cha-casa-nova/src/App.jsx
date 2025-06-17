import { useState } from 'react'
import { Calendar, Clock, Heart, MapPin, Gift, Check, ChefHat, Utensils, Sparkles, Bed, Bath, Home, Share2, Copy, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'
import heroImage from './assets/hero-champagne.jpg'
import { giftCategories } from './data/gifts.js'

function App() {
  const [selectedGifts, setSelectedGifts] = useState(new Set())
  const [formData, setFormData] = useState({
    name: '',
    companion: '',
    attending: '',
    gift: ''
  })

  const categoryIcons = {
    'cozinha': ChefHat,
    'sala-jantar': Utensils,
    'limpeza-lavanderia': Sparkles,
    'quarto': Bed,
    'banheiro': Bath,
    'gerais': Home
  }

  const handleGiftSelection = (giftId) => {
    const newSelected = new Set(selectedGifts)
    if (newSelected.has(giftId)) {
      newSelected.delete(giftId)
    } else {
      newSelected.add(giftId)
    }
    setSelectedGifts(newSelected)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.attending) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    try {
      const response = await fetch('http://localhost:5001/api/confirmations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          companion: formData.companion,
          attending: formData.attending,
          gifts: Array.from(selectedGifts)
        })
      })

      if (response.ok) {
        const result = await response.json()
        alert('Confirmação enviada com sucesso! Obrigado!')
        
        // Limpar formulário
        setFormData({
          name: '',
          companion: '',
          attending: '',
          gift: ''
        })
        setSelectedGifts(new Set())
      } else {
        const error = await response.json()
        alert(`Erro ao enviar confirmação: ${error.message || 'Erro desconhecido'}`)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar confirmação. Tente novamente.')
    }
  }

  const shareWhatsApp = () => {
    const message = encodeURIComponent(
      `🎉 Você está convidado para o Chá de Casa Nova do Alisson & Carol!\n\n📅 Data: 18 de junho de 2025\n⏰ Horário: 17:00\n\nConfirme sua presença: ${window.location.href}`
    )
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    } catch (error) {
      console.error('Erro ao copiar link:', error)
      alert('Erro ao copiar link. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-rose-50">
      {/* Header/Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-rose-900/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Heart className="w-16 h-16 mx-auto mb-6 text-rose-300 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Chá de Casa Nova
            </h1>
            <div className="text-3xl md:text-4xl font-light mb-8 text-rose-200">
              Alisson & Carol
            </div>
            <div className="text-xl md:text-2xl font-medium mb-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 inline-block">
              18 de junho, às 17h
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
              Depois de tantos planos, vamos começar nossa vida a dois e queremos muito celebrar com você!
            </p>
          </div>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('detalhes').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Detalhes do Evento
            </Button>
          </div>
        </div>
      </section>

      {/* Detalhes do Evento */}
      <section id="detalhes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Detalhes do Evento
            </h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Data</h3>
              <p className="text-xl text-gray-600">18 de junho de 2025</p>
              <p className="text-lg text-gray-500 mt-2">Quinta-feira</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Clock className="w-16 h-16 mx-auto mb-6 text-rose-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Horário</h3>
              <p className="text-xl text-gray-600">17:00</p>
              <p className="text-lg text-gray-500 mt-2">Início da festa</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Local</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Endereço será informado<br />
                após confirmação de presença
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Presentes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Gift className="w-16 h-16 mx-auto mb-6 text-rose-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa Lista de Presentes
            </h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha um ou mais presentes para nos ajudar a começar nossa nova vida juntos!
            </p>
          </div>

          {giftCategories.map((category) => {
            const IconComponent = categoryIcons[category.id]
            return (
              <div key={category.id} className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <IconComponent className={`w-8 h-8 mr-3 ${category.iconColor}`} />
                  <h3 className="text-3xl font-bold text-gray-800">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                        selectedGifts.has(item.id) ? 'ring-4 ring-rose-400' : ''
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        {selectedGifts.has(item.id) && (
                          <div className="absolute top-4 right-4 bg-rose-500 text-white rounded-full p-2">
                            <Check className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold text-gray-700">{item.price}</span>
                        </div>
                        
                        <Button
                          onClick={() => handleGiftSelection(item.id)}
                          className={`w-full transition-all duration-300 ${
                            selectedGifts.has(item.id)
                              ? 'bg-rose-500 hover:bg-rose-600 text-white'
                              : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300'
                          }`}
                        >
                          {selectedGifts.has(item.id) ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Selecionado
                            </>
                          ) : (
                            <>
                              <Gift className="w-4 h-4 mr-2" />
                              Escolher este presente
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {selectedGifts.size > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Presentes Selecionados ({selectedGifts.size})
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {Array.from(selectedGifts).map((giftId) => {
                  const gift = giftCategories
                    .flatMap(cat => cat.items)
                    .find(item => item.id === giftId)
                  return (
                    <span
                      key={giftId}
                      className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {gift?.name}
                    </span>
                  )
                })}
              </div>
              <div className="text-center mt-6">
                <Button
                  size="lg"
                  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full"
                  onClick={() => document.getElementById('confirmacao').scrollIntoView({ behavior: 'smooth' })}
                >
                  Confirmar Presença e Presentes
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Confirmação de Presença */}
      <section id="confirmacao" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Heart className="w-16 h-16 mx-auto mb-6 text-rose-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Confirmação de Presença
            </h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confirme sua presença e nos ajude a organizar melhor nossa festa!
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-rose-50 rounded-3xl shadow-xl p-8 md:p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Nome completo */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none transition-colors"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              {/* Nome do acompanhante */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Nome do Acompanhante (opcional)
                </label>
                <input
                  type="text"
                  value={formData.companion}
                  onChange={(e) => setFormData({...formData, companion: e.target.value})}
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none transition-colors"
                  placeholder="Nome do seu acompanhante"
                />
              </div>

              {/* Vai comparecer */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  Vai comparecer? *
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, attending: 'sim'})}
                    className={`flex-1 py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      formData.attending === 'sim'
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-400'
                    }`}
                  >
                    ✅ Sim, estarei lá!
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, attending: 'nao'})}
                    className={`flex-1 py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      formData.attending === 'nao'
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-400'
                    }`}
                  >
                    ❌ Não poderei ir
                  </button>
                </div>
              </div>

              {/* Presentes selecionados */}
              {selectedGifts.size > 0 && (
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    Presentes Escolhidos ({selectedGifts.size})
                  </label>
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {Array.from(selectedGifts).map((giftId) => {
                        const gift = giftCategories
                          .flatMap(cat => cat.items)
                          .find(item => item.id === giftId)
                        return (
                          <span
                            key={giftId}
                            className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                          >
                            <Gift className="w-4 h-4" />
                            {gift?.name}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Botão de envio */}
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  disabled={!formData.name || !formData.attending}
                >
                  <Heart className="w-6 h-6 mr-3" />
                  Confirmar Presença
                </Button>
                
                {(!formData.name || !formData.attending) && (
                  <p className="text-gray-500 mt-4 text-sm">
                    * Preencha os campos obrigatórios para confirmar
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                📍 Endereço será enviado após confirmação
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Após confirmar sua presença, enviaremos o endereço completo do evento por WhatsApp ou email.
                Em caso de dúvidas, entre em contato conosco!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Compartilhamento */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Share2 className="w-12 h-12 mx-auto mb-6 text-rose-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Compartilhe o Convite
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ajude-nos a espalhar a alegria! Compartilhe nosso convite com amigos e familiares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={shareWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Compartilhar no WhatsApp
            </Button>
            
            <Button
              onClick={copyLink}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Copy className="w-6 h-6" />
              Copiar Link
            </Button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-rose-400" />
          <p className="text-xl font-light">
            Alisson & Carol – Mal podemos esperar para compartilhar esse momento com você!
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

