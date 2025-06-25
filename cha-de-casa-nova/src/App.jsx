import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Heart, ArrowUp, Share2 } from 'lucide-react'
import './App.css'

// Imagens
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


const presentesIniciais = [
  { id: 1, nome: 'Conjunto de copos', imagem: conjuntoCopos },
  { id: 2, nome: 'Jogo de cama', imagem: jogoCama },
  { id: 3, nome: 'Toalha de banho', imagem: toalhaBanho },
  { id: 4, nome: 'Kit churrasco', imagem: kitChurrasco },
  { id: 5, nome: 'Panela elétrica', imagem: panelaEletrica },
  { id: 6, nome: 'Travesseiros', imagem: travesseiros },
  { id: 7, nome: 'Talheres', imagem: talheres },
  { id: 8, nome: 'Tapete para sala', imagem: tapeteSala },
  { id: 9, nome: 'Lixeira para cozinha', imagem: lixeiraCozinha },
  { id: 10, nome: 'Porta temperos', imagem: portaTemperos },
]

function App() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [confirmarPresenca, setConfirmarPresenca] = useState('')
  const [quantasPessoas, setQuantasPessoas] = useState('')
  const [mostrarFormulario, setMostrarFormulario] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [presentes, setPresentes] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [senhaAdmin, setSenhaAdmin] = useState('')

  useEffect(() => {
    const salvos = localStorage.getItem('presentesEscolhidos')
    if (salvos) {
      setPresentes(JSON.parse(salvos))
    } else {
      setPresentes(presentesIniciais.map(p => ({ ...p, presenteadoPor: null })))
    }
    const nomeSalvo = localStorage.getItem('nomeCompleto')
    if (nomeSalvo) setNomeCompleto(nomeSalvo)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleConfirmarPresenca = (e) => {
    e.preventDefault()
    if (nomeCompleto && confirmarPresenca && quantasPessoas) {
      localStorage.setItem('nomeCompleto', nomeCompleto)
      let convidados = localStorage.getItem('convidadosConfirmados')
      convidados = convidados ? JSON.parse(convidados) : []
      const jaExiste = convidados.some(c => c.nome === nomeCompleto)
      if (!jaExiste) {
        convidados.push({ nome: nomeCompleto, acompanhantes: quantasPessoas })
        localStorage.setItem('convidadosConfirmados', JSON.stringify(convidados))
      }
      alert(`Obrigado ${nomeCompleto}! Sua presença foi confirmada.`)
      setMostrarFormulario(false)
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  const handlePresentear = (id) => {
    const novos = presentes.map(p =>
      p.id === id ? { ...p, presenteadoPor: nomeCompleto } : p
    )
    setPresentes(novos)
    localStorage.setItem('presentesEscolhidos', JSON.stringify(novos))
  }

  const compartilharWhatsApp = () => {
    const mensagem = `Você está convidado(a) para o nosso Chá de Casa Nova! 🏠✨\nDia 16/08 às 14h!\nConfirme sua presença e escolha um presente especial para nós:\n${window.location.href}`
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const nomesConfirmados = () => {
    let convidados = localStorage.getItem('convidadosConfirmados')
    return convidados ? JSON.parse(convidados) : []
  }

  const handleLoginAdmin = (e) => {
    e.preventDefault()
    if (senhaAdmin === 'admin123') {
      setIsAdmin(true)
      setSenhaAdmin('')
    } else {
      alert('Senha incorreta!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🏠 Chá de Casa Nova</h1>
          <p className="text-gray-600 text-lg">Celebre conosco este momento especial!</p>
          <p className="text-pink-500 mt-2 font-semibold">📅 Dia 16 de Agosto às 14h</p>
          {!isAdmin && (
            <Button variant="outline" size="sm" className="mt-4" onClick={() => setIsAdmin('login')}>
              Acesso Admin
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 pt-16 pb-8 max-w-4xl">
        {isAdmin === 'login' && (
          <Card className="mb-8 shadow-lg border-pink-200 max-w-md mx-auto">
            <CardHeader className="bg-yellow-100">
              <CardTitle className="text-xl text-yellow-700">🔐 Login Admin</CardTitle>
              <CardDescription className="text-gray-600">Insira a senha para acessar o relatório de confirmações</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleLoginAdmin} className="space-y-4">
                <Input type="password" placeholder="Senha admin" value={senhaAdmin} onChange={(e) => setSenhaAdmin(e.target.value)} required />
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Entrar</Button>
                <Button variant="outline" className="w-full mt-2" onClick={() => setIsAdmin(false)}>Cancelar</Button>
              </form>
            </CardContent>
          </Card>
        )}

        {!isAdmin && mostrarFormulario && (
          <Card className="mb-8 shadow-lg border-pink-200">
            <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
              <CardTitle className="text-2xl text-pink-700 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Confirme sua Presença
              </CardTitle>
              <CardDescription className="text-gray-600">Queremos muito você conosco neste dia especial!</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleConfirmarPresenca} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome completo:</Label>
                  <Input id="nome" type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />
                </div>
                <div>
                  <Label>Confirmar presença:</Label>
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
                  <Label htmlFor="pessoas">Quantas pessoas vão com você?:</Label>
                  <Input id="pessoas" type="number" min="0" max="10" value={quantasPessoas} onChange={(e) => setQuantasPessoas(e.target.value)} required />
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg" type="submit">Confirmar Presença ✨</Button>
              </form>
            </CardContent>
          </Card>
        )}

        {!isAdmin && (
          <Card className="shadow-lg border-pink-200">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 text-center">
              <CardTitle className="text-2xl text-purple-700">🎁 Lista de Presentes</CardTitle>
              <CardDescription className="text-gray-600">Escolha um presente especial para nos ajudar a montar nossa nova casa</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {presentes.map((presente) => {
                  const foiPresenteado = !!presente.presenteadoPor
                  const vocePresenteou = presente.presenteadoPor === nomeCompleto
                  return (
                    <div key={presente.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img src={presente.imagem} alt={presente.nome} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-gray-800 mb-3">{presente.nome}</h3>
                        <Button onClick={() => handlePresentear(presente.id)} disabled={foiPresenteado} className={`w-full py-2 text-white ${vocePresenteou ? 'bg-green-600' : foiPresenteado ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'}`}>
                          {vocePresenteou ? '🎉 Ótima escolha!' : foiPresenteado ? '❌ Já presenteado' : '🎁 Quero Presentear'}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {isAdmin === true && (
          <>
            <Card className="mt-8 shadow-lg border-pink-200 max-w-md mx-auto">
              <CardHeader className="bg-yellow-100 flex justify-between items-center">
                <CardTitle className="text-xl text-yellow-700">📋 Relatório de Presença Confirmada</CardTitle>
                <Button variant="outline" size="sm" onClick={() => setIsAdmin(false)}>Sair do modo Admin</Button>
              </CardHeader>
              <CardContent className="p-6">
                {nomesConfirmados().length > 0 ? (
                  <ul className="list-disc list-inside space-y-1">
                    {nomesConfirmados().map(({ nome, acompanhantes }, i) => (
                      <li key={i}>{nome} - {acompanhantes} {acompanhantes === '1' ? 'pessoa' : 'pessoas'}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhuma confirmação registrada ainda.</p>
                )}
              </CardContent>
            </Card>

            <Card className="mt-8 shadow-lg border-pink-200 max-w-3xl mx-auto">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-xl text-yellow-700">🎁 Presentes Escolhidos</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-1">
                  {presentes.filter((p) => p.presenteadoPor).map((p, i) => (
                    <li key={i}>{p.nome} — presenteado por <span className="font-semibold">{p.presenteadoPor}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </>
        )}
      </main>

      <footer className="bg-white border-t border-pink-100 mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <Button onClick={compartilharWhatsApp} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
            <Share2 className="w-5 h-5" />
            Compartilhar Convite no WhatsApp
          </Button>
          <p className="text-gray-600 mt-4">Desenvolvido por <span className="font-semibold text-pink-600">Alisson Santos</span></p>
        </div>
      </footer>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg z-50" aria-label="Voltar ao topo">
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default App;
