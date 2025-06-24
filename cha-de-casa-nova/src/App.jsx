import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Heart, ArrowUp, Share2 } from 'lucide-react'
import './App.css'

// Importar imagens dos presentes
import conjuntoCopos from './assets/conjunto-copos.jpg'
import jogoCama from './assets/jogo-cama.jpg'
import toalhaBanho from './assets/toalha-banho.jpg'
import kitChurrasco from './assets/kit-churrasco.jpg'
import panelaEletrica from './assets/panela-eletrica.jpg'
import travesseiros from './assets/travesseiros.jpg'
import talheres from './assets/talheres.jpg'
import tapeteSala from './assets/tapete-sala.jpg'
import lixeiraCozinha from './assets/lixeira-cozinha.jpg'
import portaTemperos from './assets/porta-temperos.jpg'

const presentes = [
  { id: 1, nome: 'Conjunto de copos', imagem: conjuntoCopos, presenteado: false },
  { id: 2, nome: 'Jogo de cama', imagem: jogoCama, presenteado: false },
  { id: 3, nome: 'Toalha de banho', imagem: toalhaBanho, presenteado: false },
  { id: 4, nome: 'Kit churrasco', imagem: kitChurrasco, presenteado: false },
  { id: 5, nome: 'Panela elétrica', imagem: panelaEletrica, presenteado: false },
  { id: 6, nome: 'Travesseiros', imagem: travesseiros, presenteado: false },
  { id: 7, nome: 'Talheres', imagem: talheres, presenteado: false },
  { id: 8, nome: 'Tapete para sala', imagem: tapeteSala, presenteado: false },
  { id: 9, nome: 'Lixeira para cozinha', imagem: lixeiraCozinha, presenteado: false },
  { id: 10, nome: 'Porta temperos', imagem: portaTemperos, presenteado: false },
]

function App() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [confirmarPresenca, setConfirmarPresenca] = useState('')
  const [quantasPessoas, setQuantasPessoas] = useState('')
  const [listaPresentes, setListaPresentes] = useState(presentes)
  const [mostrarFormulario, setMostrarFormulario] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Função para confirmar presença
  const handleConfirmarPresenca = (e) => {
    e.preventDefault()
    if (nomeCompleto && confirmarPresenca && quantasPessoas) {
      alert(`Obrigado ${nomeCompleto}! Sua presença foi confirmada.`)
      setMostrarFormulario(false)
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  // Função para presentear item
  const handlePresentear = (id) => {
    setListaPresentes(prev => 
      prev.map(presente => 
        presente.id === id 
          ? { ...presente, presenteado: true }
          : presente
      )
    )
  }

  // Função para compartilhar no WhatsApp
  const compartilharWhatsApp = () => {
    const mensagem = "Você está convidado(a) para o nosso Chá de Casa Nova! 🏠✨ Confirme sua presença e escolha um presente especial para nós. Acesse: " + window.location.href
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Detectar scroll para mostrar botão de voltar ao topo
  window.addEventListener('scroll', () => {
    setShowScrollTop(window.scrollY > 300)
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🏠 Chá de Casa Nova</h1>
          <p className="text-gray-600 text-lg">Celebre conosco este momento especial!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Formulário de Confirmação */}
        {mostrarFormulario && (
          <Card className="mb-8 shadow-lg border-pink-200">
            <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
              <CardTitle className="text-2xl text-pink-700 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Confirme sua Presença
              </CardTitle>
              <CardDescription className="text-gray-600">
                Queremos muito você conosco neste dia especial!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleConfirmarPresenca} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Confirmar presença
                  </Label>
                  <RadioGroup value={confirmarPresenca} onValueChange={setConfirmarPresenca}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sim" />
                      <Label htmlFor="sim">Sim, estarei presente! 🎉</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="nao" />
                      <Label htmlFor="nao">Não poderei comparecer 😢</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="pessoas" className="text-sm font-medium text-gray-700">
                    Quantas pessoas vão com você?
                  </Label>
                  <Input
                    id="pessoas"
                    type="number"
                    min="0"
                    max="10"
                    value={quantasPessoas}
                    onChange={(e) => setQuantasPessoas(e.target.value)}
                    placeholder="Ex: 2"
                    className="mt-1"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
                >
                  Confirmar Presença ✨
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Lista de Presentes */}
        <Card className="shadow-lg border-pink-200">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
            <CardTitle className="text-2xl text-purple-700 text-center">
              🎁 Lista de Presentes
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Escolha um presente especial para nos ajudar a montar nossa nova casa
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listaPresentes.map((presente) => (
                <div 
                  key={presente.id} 
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={presente.imagem} 
                      alt={presente.nome}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">
                      {presente.nome}
                    </h3>
                    <Button
                      onClick={() => handlePresentear(presente.id)}
                      disabled={presente.presenteado}
                      className={`w-full py-2 transition-colors ${
                        presente.presenteado
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
                      } text-white`}
                    >
                      {presente.presenteado ? '✅ Já presenteado' : '🎁 Quero Presentear'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Rodapé */}
      <footer className="bg-white border-t border-pink-100 mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="mb-4">
            <Button
              onClick={compartilharWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto"
            >
              <Share2 className="w-5 h-5" />
              Compartilhar Convite no WhatsApp
            </Button>
          </div>
          <p className="text-gray-600">
            Desenvolvido por <span className="font-semibold text-pink-600">Alisson Santos</span>
          </p>
        </div>
      </footer>

      {/* Botão fixo para rolar para o topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default App

