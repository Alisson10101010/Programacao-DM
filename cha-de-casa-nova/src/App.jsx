import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Heart, ArrowUp, Share2 } from 'lucide-react'
import './App.css'

// Imagens dos presentes
import conjuntoTalheresInox from './assets/conjunto-talheres-inox.jpg'
import jogoCopoAmericano from './assets/jogo-copo-americano.webp'
import pratosPorcelanatoVerde from './assets/pratos-porcelanato-verde.webp'
import jogoCamaCasal from './assets/jogo-cama-casal.jpg'
import toalhasDeBanho from './assets/toalhas-de-banho.jpg'
import tapeteParaSala from './assets/tapete-para-sala.jpg'
import liquidificador from './assets/liquidificador.jpg'
import ferroDePassarRoupa from './assets/ferro-de-passar-roupa.jpg'
import conjuntoDePotes from './assets/conjunto-de-potes.jpg'
import pipoqueira from './assets/pipoqueira.jpg'
import raladorMultiuso from './assets/ralador-multiuso.jpg'
import escorredorDeArroz from './assets/escorredor-de-arroz.jpg'
import escorredorDeMarcarrao from './assets/escorredor-de-macarrao.jpg'
import batedeira from './assets/batedeira.webp'
import tabuaDeCorte from './assets/tabua-de-corte.jpg'
import frigideiraAntiaderente from './assets/frigideira-antiaderente.jpg'
import sanduicheira from './assets/sanduicheira.jpg'
import conjuntoDeXicaras from './assets/conjunto-de-xicaras.png'
import jogoAmericano from './assets/jogo-americano.jpg'
import baldeDeRoupa from './assets/balde-de-roupa.jpg'
import jogoDeFacas from './assets/jogo-de-facas.jpg'
import leiteira from './assets/leiteira.jpg'
import aventalDeCozinha from './assets/avental-de-cozinha.jpg'
import escovaSanitaria from './assets/escova-sanitaria.jpg'
import lixeiraParaBanheiro from './assets/lixeira-para-banheiro.jpg'
import kitOrganizadorDeArmario from './assets/kit-organizador-de-armario.jpeg'
import rodoEVassoura from './assets/rodo-e-vassoura.jpg'
import baldeComEsfregao from './assets/balde-com-esfregao.jpg'
import toalhaDeMesa from './assets/toalha-de-mesa.jpg'
import jogoDeTravesseiros from './assets/jogo-de-travesseiros.jpg'
import espelhoDeParede from './assets/espelho-de-parede.jpg'
import varalDeChao from './assets/varal-de-chao.jpg'
import cabidesDeMadeira from './assets/cabides-de-madeira.jpg'
import relogioDeParede from './assets/relogio-de-parede.jpg'
import portaTemperos from './assets/porta-temperos.jpg'
import saleiroEPimenteiro from './assets/saleiro-e-pimenteiro.jpg'
import panoDeChao from './assets/pano-de-chao.jpg'
import cestoDeRoupaSuja from './assets/cesto-de-roupa-suja.jpeg'
import cortinaParaSala from './assets/cortina-para-sala.jpg'
import cortinaParaQuarto from './assets/cortina-para-quarto.jpg'
import capaParaAlmofadas from './assets/capa-para-almofadas.png'
import cestoOrganizador from './assets/cesto-organizador.jpg'
import jogoLencolCasalOuColcha from './assets/jogo-de-lencol-casal-ou-colcha.jpg'
import garrafaTermica from './assets/garrafa-termica.jpeg'
import abridorDeGarrafa from './assets/abridor-de-garrafa.jpg'
import tapeteParaCozinha from './assets/tapete-para-cozinha.jpg'
import assadeira from './assets/assadeira.jpg'
import escumadeira from './assets/escumadeira.jpeg'
import pegadorDeMarcarrao from './assets/pegador-de-macarrao.jpg'
import jarraDeSuco from './assets/jarra-de-suco.jpg'
import panoDePia from './assets/pano-de-pia.jpg'
import conjuntoDeMedidores from './assets/conjunto-de-medidores.jpg'
import jogoDeTravessas from './assets/jogo-de-travessas.jpg'
import espremedorDeAlho from './assets/espremedor-de-alho.jpg'
import tapeteDeBanheiro from './assets/tapete-de-banheiro.jpeg'
import saboneteira from './assets/saboneteira.jpg'
import portaEscovaDeDentes from './assets/porta-escova-de-dentes.webp'
import suporteDePapelToalha from './assets/suporte-de-papel-toalha.jpg'
import portaDetergente from './assets/porta-detergente.jpg'
import lixeiraDePia from './assets/lixeira-de-pia.jpg'
import portaCopos from './assets/porta-copos.jpeg'
import tapeteParaPorta from './assets/tapete-para-porta.jpg'

const presentesIniciais = [
  { id: 1, nome: 'Conjunto de talheres inox', imagem: conjuntoTalheresInox },
  { id: 2, nome: 'Jogo de copo americano', imagem: jogoCopoAmericano },
  { id: 3, nome: 'Pratos de porcelanato verde', imagem: pratosPorcelanatoVerde },
  { id: 4, nome: 'Jogo de cama casal', imagem: jogoCamaCasal },
  { id: 5, nome: 'Toalhas de banho', imagem: toalhasDeBanho },
  { id: 6, nome: 'Tapete para sala', imagem: tapeteParaSala },
  { id: 7, nome: 'Liquidificador', imagem: liquidificador },
  { id: 8, nome: 'Ferro de passar roupa', imagem: ferroDePassarRoupa },
  { id: 9, nome: 'Conjunto de potes', imagem: conjuntoDePotes },
  { id: 10, nome: 'Pipoqueira', imagem: pipoqueira },
  { id: 11, nome: 'Ralador multiuso', imagem: raladorMultiuso },
  { id: 12, nome: 'Escorredor de arroz', imagem: escorredorDeArroz },
  { id: 13, nome: 'Escorredor de macarrão', imagem: escorredorDeMarcarrao },
  { id: 14, nome: 'Batedeira', imagem: batedeira },
  { id: 15, nome: 'Tábua de corte', imagem: tabuaDeCorte },
  { id: 16, nome: 'Frigideira antiaderente', imagem: frigideiraAntiaderente },
  { id: 17, nome: 'Sanduicheira', imagem: sanduicheira },
  { id: 18, nome: 'Conjunto de xícaras', imagem: conjuntoDeXicaras },
  { id: 19, nome: 'Jogo americano', imagem: jogoAmericano },
  { id: 20, nome: 'Balde de roupa', imagem: baldeDeRoupa },
  { id: 21, nome: 'Jogo de facas', imagem: jogoDeFacas },
  { id: 22, nome: 'Leiteira', imagem: leiteira },
  { id: 23, nome: 'Avental de cozinha', imagem: aventalDeCozinha },
  { id: 24, nome: 'Escova sanitária', imagem: escovaSanitaria },
  { id: 25, nome: 'Lixeira para banheiro', imagem: lixeiraParaBanheiro },
  { id: 26, nome: 'Kit organizador de armário', imagem: kitOrganizadorDeArmario },
  { id: 27, nome: 'Rodo e vassoura', imagem: rodoEVassoura },
  { id: 28, nome: 'Balde com esfregão', imagem: baldeComEsfregao },
  { id: 29, nome: 'Toalha de mesa', imagem: toalhaDeMesa },
  { id: 30, nome: 'Jogo de travesseiros', imagem: jogoDeTravesseiros },
  { id: 31, nome: 'Espelho de parede', imagem: espelhoDeParede },
  { id: 32, nome: 'Varal de chão', imagem: varalDeChao },
  { id: 33, nome: 'Cabides de madeira', imagem: cabidesDeMadeira },
  { id: 34, nome: 'Relógio de parede', imagem: relogioDeParede },
  { id: 35, nome: 'Porta temperos', imagem: portaTemperos },
  { id: 36, nome: 'Saleiro e pimenteiro', imagem: saleiroEPimenteiro },
  { id: 37, nome: 'Pano de chão', imagem: panoDeChao },
  { id: 38, nome: 'Cesto de roupa suja', imagem: cestoDeRoupaSuja },
  { id: 39, nome: 'Cortina para sala', imagem: cortinaParaSala },
  { id: 40, nome: 'Cortina para quarto', imagem: cortinaParaQuarto },
  { id: 41, nome: 'Capa para almofadas', imagem: capaParaAlmofadas },
  { id: 42, nome: 'Cesto organizador', imagem: cestoOrganizador },
  { id: 43, nome: 'Jogo de lençol casal ou colcha', imagem: jogoLencolCasalOuColcha },
  { id: 44, nome: 'Garrafa térmica', imagem: garrafaTermica },
  { id: 45, nome: 'Abridor de garrafa', imagem: abridorDeGarrafa },
  { id: 46, nome: 'Tapete para cozinha', imagem: tapeteParaCozinha },
  { id: 47, nome: 'Assadeira', imagem: assadeira },
  { id: 48, nome: 'Escumadeira', imagem: escumadeira },
  { id: 49, nome: 'Pegador de macarrão', imagem: pegadorDeMarcarrao },
  { id: 50, nome: 'Jarra de suco', imagem: jarraDeSuco },
  { id: 51, nome: 'Pano de pia', imagem: panoDePia },
  { id: 52, nome: 'Conjunto de medidores', imagem: conjuntoDeMedidores },
  { id: 53, nome: 'Jogo de travessas', imagem: jogoDeTravessas },
  { id: 54, nome: 'Espremedor de alho', imagem: espremedorDeAlho },
  { id: 55, nome: 'Tapete de banheiro', imagem: tapeteDeBanheiro },
  { id: 56, nome: 'Saboneteira', imagem: saboneteira },
  { id: 57, nome: 'Porta escova de dentes', imagem: portaEscovaDeDentes },
  { id: 58, nome: 'Suporte de papel toalha', imagem: suporteDePapelToalha },
  { id: 59, nome: 'Porta detergente', imagem: portaDetergente },
  { id: 60, nome: 'Lixeira de pia', imagem: lixeiraDePia },
  { id: 61, nome: 'Porta copos', imagem: portaCopos },
  { id: 62, nome: 'Tapete para porta', imagem: tapeteParaPorta },
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
      <header className="relative bg-white shadow-sm border-b border-pink-100 overflow-hidden min-h-64">
        {/* Conteúdo do header */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 text-pink-500">
        
            </div>
          </div>
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
              <CardDescription className="text-gray-600">Nós, Alisson & Carol, queremos você ao nosso lado nesse momento mágico, venha compartilhar essa alegria com a gente! </CardDescription>
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

        {isAdmin && (
          <>
            <Card className="mb-8 shadow-lg border-yellow-200">
              <CardHeader className="bg-yellow-100">
                <CardTitle className="text-xl text-yellow-700">🔐 Login Admin</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleLoginAdmin} className="space-y-4">
                  <Input type="password" placeholder="Senha admin" value={senhaAdmin} onChange={(e) => setSenhaAdmin(e.target.value)} required />
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Entrar</Button>
                  <Button variant="outline" className="w-full mt-2" onClick={() => setIsAdmin(false)}>Cancelar</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-green-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-xl text-green-700">🎁 Presentes Escolhidos</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Presentes já escolhidos:</h3>
                <ul className="list-disc list-inside">
                  {presentes.filter(p => p.presenteadoPor).map(p => (
                    <li key={p.id}>{p.nome} - Presenteado por: {p.presenteadoPor}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-gray-800 mt-4 mb-2">Presentes disponíveis:</h3>
                <ul className="list-disc list-inside">
                  {presentes.filter(p => !p.presenteadoPor).map(p => (
                    <li key={p.id}>{p.nome}</li>
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

