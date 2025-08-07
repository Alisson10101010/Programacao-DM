import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx';
import { Heart, ArrowUp, Share2 } from 'lucide-react';
import './App.css';

// Imagens dos presentes
import conjuntoTalheresInox from './assets/conjunto-talheres-inox.jpg';
import jogoCopoAmericano from './assets/jogo-copo-americano.webp';
import pratosPorcelanatoVerde from './assets/pratos-porcelanato-verde.webp';
import jogoCamaCasal from './assets/jogo-cama-casal.jpg';
import toalhasDeBanho from './assets/toalhas-de-banho.jpg';
import tapeteParaSala from './assets/tapete-para-sala.jpg';
import liquidificador from './assets/liquidificador.jpg';
import ferroDePassarRoupa from './assets/ferro-de-passar-roupa.jpg';
import robo from './assets/robo.jpg';
import pipoqueira from './assets/pipoqueira.jpg';
import microondas from './assets/microondas.jpg';
import pratos from './assets/pratos.jpg';
import mixer from './assets/Mixer.jpg';
import tabuaDeCorte from './assets/tabua-de-corte.jpg';
import frigideiraAntiaderente from './assets/frigideira-antiaderente.jpg';
import sanduicheira from './assets/sanduicheira.jpg';
import conjuntoDeXicaras from './assets/conjunto-de-xicaras.png';
import jogoAmericano from './assets/jogo-americano.jpg';
import balde from './assets/balde.jpg';
import jogoDeFacas from './assets/jogo-de-facas.jpg';
import torneira from './assets/torneira.jpg';
import towels from './assets/towels.jpg';
import lixeiraParaBanheiro from './assets/lixeira-para-banheiro.jpg';
import cooktop from './assets/cooktop.jpg';
import rodoEVassoura from './assets/rodo-e-vassoura.jpg';
import baldeComEsfregao from './assets/balde-com-esfregao.jpg';
import toalhaDeMesa from './assets/toalha-de-mesa.jpg';
import espelhoDeParede from './assets/espelho-de-parede.jpg';
import varal from './assets/varal.jpg';
import relogioDeParede from './assets/relogio-de-parede.jpg';
import portaTemperos from './assets/porta-temperos.jpg';
import cestoDeRoupaSuja from './assets/cesto-de-roupa-suja.jpg';
import cortinaParaSala from './assets/cortina-para-sala.jpg';
import cortinaParaQuarto from './assets/cortina-para-quarto.jpg';
import forno from './assets/forno.jpg';
import cestoOrganizador from './assets/cesto-organizador.jpg';
import jogoLencolCasalOuColcha from './assets/jogo-de-lencol-casal-ou-colcha.jpg';
import garrafaTermica from './assets/garrafa-termica.jpeg';
import talheres from './assets/talheres.jpg';
import tapeteParaCozinha from './assets/tapete-para-cozinha.jpg';
import lencol from './assets/lencol.jpg';
import jarraDeSuco from './assets/jarra-de-suco.jpg';
import jogoDeTravessas from './assets/jogo-de-travessas.jpg';
import tapeteDeBanheiro from './assets/tapete-de-banheiro.jpeg';
import depurador from './assets/depurador.jpg';
import climatizador from './assets/climatizador.jpg';
import hermeticos from './assets/hermeticos.jpg';
import lixeiraDePia from './assets/lixeira-de-pia.jpg';
import triturador from './assets/triturador.jpg';
import copos from './assets/copos.jpg';
import airFryer from "./assets/air-fryer.jpg";
import paneladepressao from "./assets/panela-de-pressao.jpg";
import almofadas from "./assets/almofadas.jpg";
import aspirador from "./assets/aspirador.jpg";
import assadeiras from "./assets/assadeiras.jpg";
import tapioqueira from "./assets/tapioqueira.jpg";
import chuveiro from "./assets/chuveiro.jpg";
import cafeteira from "./assets/cafeteira.jpg";
import caixaPrimeirosSocorros from "./assets/caixa-primeiros-socorros.jpg";
import churrasqueira from "./assets/churrasqueira.jpg";
import colcha from "./assets/colcha.jpg";
import coposJantar from "./assets/copos-jantar.jpg";
import cortinaQuarto from "./assets/cortina-quarto.jpg";
import escorredor from "./assets/escorredor.jpg";
import espelho from "./assets/espelho.jpg";
import espremedorFrutas from "./assets/espremedor-frutas.jpg";
import extensao from "./assets/extensao.jpg";
import filtro from "./assets/filtro.jpg";
import grill from "./assets/grill.jpg";
import kitbanheiro from "./assets/kitbanheiro.jpg"; 
import tigelas from "./assets/tigelas.jpg";
import pote from "./assets/pote.jpg"; 
import boleira from "./assets/boleira.jpg";
import tabua from "./assets/tabua.jpg";
import churrasco from "./assets/churrasco.jpg";



import cofrinho from "./assets/cofrinho.jpg"; 
const presentesIniciais = [
  { id: 1, nome: 'Conjunto de talheres inox', imagem: conjuntoTalheresInox },
  { id: 2, nome: 'Jogo de copo americano', imagem: jogoCopoAmericano },
  { id: 3, nome: 'Pratos de porcelanato verde', imagem: pratosPorcelanatoVerde },
  { id: 4, nome: 'Jogo de cama casal', imagem: jogoCamaCasal },
  { id: 5, nome: 'Toalhas de banho', imagem: toalhasDeBanho },
  { id: 6, nome: 'Tapete para sala', imagem: tapeteParaSala },
  { id: 7, nome: 'Liquidificador', imagem: liquidificador },
  { id: 8, nome: 'Ferro de passar roupa', imagem: ferroDePassarRoupa },
  { id: 9, nome: 'Robô Aspirador', imagem: robo },
  { id: 10, nome: 'Pipoqueira', imagem: pipoqueira },
  { id: 11, nome: 'Microondas', imagem: microondas },
  { id: 12, nome: 'Pratos jantar porcelanato', imagem: pratos },
  { id: 14, nome: 'Mixer 3 em 1', imagem: mixer },
  { id: 15, nome: 'Tábua de corte', imagem: tabuaDeCorte },
  { id: 16, nome: 'Frigideira antiaderente - Com Tampa', imagem: frigideiraAntiaderente },
  { id: 17, nome: 'Sanduicheira', imagem: sanduicheira },
  { id: 18, nome: 'Conjunto de xícaras', imagem: conjuntoDeXicaras },
  { id: 19, nome: 'Jogo americano', imagem: jogoAmericano },
  { id: 20, nome: 'Balde Retrátil', imagem: balde },
  { id: 21, nome: 'Jogo de facas', imagem: jogoDeFacas },
  { id: 23, nome: 'Torneira', imagem: torneira },
  { id: 24, nome: 'Toalhas', imagem: towels },
  { id: 25, nome: 'Lixeira para banheiro', imagem: lixeiraParaBanheiro },
  { id: 26, nome: 'Cooktop 05 Bocas', imagem: cooktop },
  { id: 27, nome: 'Rodo e vassoura', imagem: rodoEVassoura },
  { id: 28, nome: 'Mop', imagem: baldeComEsfregao },
  { id: 29, nome: 'Toalha de mesa', imagem: toalhaDeMesa },
  { id: 31, nome: 'Espelho de parede', imagem: espelhoDeParede },
  { id: 32, nome: 'Varal Retrátil de Parede', imagem: varal },
  { id: 34, nome: 'Relógio de parede', imagem: relogioDeParede },
  { id: 35, nome: 'Porta temperos', imagem: portaTemperos },
  { id: 38, nome: 'Cesto de roupa suja', imagem: cestoDeRoupaSuja },
  { id: 39, nome: 'Cortina para sala', imagem: cortinaParaSala },
  { id: 40, nome: 'Cortina para quarto', imagem: cortinaParaQuarto },
  { id: 41, nome: 'Forno Elétrico', imagem: forno },
  { id: 42, nome: 'Cesto organizador', imagem: cestoOrganizador },
  { id: 43, nome: 'Jogo de lençol ', imagem: jogoLencolCasalOuColcha },
  { id: 44, nome: 'Garrafa térmica', imagem: garrafaTermica },
  { id: 45, nome: 'Talheres Inox', imagem: talheres },
  { id: 46, nome: 'Tapete para cozinha', imagem: tapeteParaCozinha },
  { id: 48, nome: 'Jogo de lençol', imagem: lencol },
  { id: 50, nome: 'Jarra de suco', imagem: jarraDeSuco },
  { id: 53, nome: 'Jogo de Travessas', imagem: jogoDeTravessas },
  { id: 55, nome: 'Tapete de Banheiro', imagem: tapeteDeBanheiro },
  { id: 56, nome: 'Depurador de Cozinha', imagem: depurador },
  { id: 57, nome: 'Climatizador de Ar', imagem: climatizador },
  { id: 59, nome: 'Potes herméticos', imagem: hermeticos },
  { id: 60, nome: 'Lixeira de cozinha', imagem: lixeiraDePia },
  { id: 61, nome: 'Triturador de alimentos', imagem: triturador },
  { id: 62, nome: ' Copos almoço', imagem: copos },
  { id: 63, nome: "Air Fryer", imagem: airFryer },
  { id: 64, nome: "Panela de Pressão", imagem: paneladepressao },
  { id: 65, nome: "Almofadas", imagem: almofadas },
  { id: 66, nome: "Aspirador", imagem: aspirador },
  { id: 67, nome: "Assadeiras", imagem: assadeiras },
  { id: 68, nome: "Tapioqueira", imagem: tapioqueira },
  { id: 69, nome: "Chuveiro", imagem: chuveiro },
  { id: 70, nome: "Cafeteira", imagem: cafeteira },
  { id: 71, nome: "Caixa de Primeiros Socorros", imagem: caixaPrimeirosSocorros },
  { id: 72, nome: "Churrasqueira", imagem: churrasqueira },
  { id: 73, nome: "Colcha", imagem: colcha },
  { id: 74, nome: "Copos de Jantar", imagem: coposJantar },
  { id: 75, nome: "Cortina para Quarto", imagem: cortinaQuarto },
  { id: 76, nome: "Escorredor", imagem: escorredor },
  { id: 77, nome: "Espelho", imagem: espelho },
  { id: 78, nome: "Espremedor de Frutas", imagem: espremedorFrutas },
  { id: 79, nome: "Extensão", imagem: extensao },
  { id: 80, nome: "Purificador de Água", imagem: filtro },
  { id: 82, nome: "Grill", imagem: grill },
  { id: 84, nome: "Kit Banheiro Lavabo", imagem: kitbanheiro },
  { id: 85, nome: "Tigelas Bowl Bambu", imagem: tigelas },
  { id: 86, nome: "Pote de Vidro - Retangular 4 Travas  ", imagem: pote },
  { id: 88, nome: "Tábua de Passar Roupa", imagem: tabua },
  { id: 89, nome: "KIT Churrasco", imagem: churrasco },
  { id: 87, nome: "Boleira Bambu com Tampa em Acrílico", imagem: boleira }, 


  { id: 83, nome: "Vale Pix do Amor", imagem: cofrinho }, 
];

function App() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [confirmarPresenca, setConfirmarPresenca] = useState('');
  const [quantasPessoas, setQuantasPessoas] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [presentes, setPresentes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [senhaAdmin, setSenhaAdmin] = useState('');

  useEffect(() => {
    const salvos = localStorage.getItem('presentesEscolhidos');
    if (salvos) {
      setPresentes(JSON.parse(salvos));
    } else {
      // Para cada presente, se não for o "Vale Pix do Amor", inicialize com presenteadoPor: null
      // Se for o "Vale Pix do Amor", inicialize com um array vazio para guardar múltiplos nomes
      setPresentes(presentesIniciais.map(p => ({
        ...p,
        presenteadoPor: p.nome === 'Vale Pix do Amor' ? [] : null
      })));
    }

    const nomeSalvo = localStorage.getItem('nomeCompleto');
    if (nomeSalvo) setNomeCompleto(nomeSalvo);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleConfirmarPresenca = (e) => {
    e.preventDefault();
    if (nomeCompleto && confirmarPresenca && quantasPessoas) {
      localStorage.setItem('nomeCompleto', nomeCompleto);

      let convidados = localStorage.getItem('convidadosConfirmados');
      convidados = convidados ? JSON.parse(convidados) : [];

      const jaExiste = convidados.some(c => c.nome === nomeCompleto);
      if (!jaExiste) {
        convidados.push({
          nome: nomeCompleto,
          acompanhantes: quantasPessoas,
          resposta: confirmarPresenca,
        });
        localStorage.setItem('convidadosConfirmados', JSON.stringify(convidados));
      }

      alert(`Obrigado ${nomeCompleto}! Sua presença foi confirmada.`);
      setMostrarFormulario(false);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handlePresentear = (id) => {
    // Verifique se o nome completo está preenchido
    if (!nomeCompleto) {
      alert('Por favor, preencha seu nome completo antes de escolher um presente.');
      return;
    }

    const novos = presentes.map(p => {
      if (p.id === id) {
        // Se for o "Vale Pix do Amor", adiciona o nome à lista
        if (p.nome === 'Vale Pix do Amor') {
          // Verifica se o nome já está na lista para evitar duplicatas
          const presenteadoPorLista = Array.isArray(p.presenteadoPor) ? p.presenteadoPor : [];
          if (!presenteadoPorLista.includes(nomeCompleto)) {
            return { ...p, presenteadoPor: [...presenteadoPorLista, nomeCompleto] };
          }
          return p; // Não faz nada se o nome já presenteou
        } else {
          // Para outros presentes, se já foi presenteado por alguém, não faz nada
          if (p.presenteadoPor) {
            return p;
          }
          return { ...p, presenteadoPor: nomeCompleto };
        }
      }
      return p;
    });
    setPresentes(novos);
    localStorage.setItem('presentesEscolhidos', JSON.stringify(novos));
  };


  const compartilharWhatsApp = () => {
    const mensagem = `Você está convidado(a) para o nosso Chá de Casa Nova! 🏠✨\nDia 16/08 às 14h!\nConfirme sua presença e escolha um presente especial para nós:\n${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const nomesConfirmados = () => {
    let convidados = localStorage.getItem('convidadosConfirmados');
    return convidados ? JSON.parse(convidados) : [];
  };

  const handleLoginAdmin = (e) => {
    e.preventDefault();
    if (senhaAdmin === 'admin123') {
      setIsAdmin(true);
      setSenhaAdmin('');
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <header className="relative bg-white shadow-sm border-b border-pink-100 overflow-hidden min-h-64">
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🏠 Chá de Casa Nova</h1>
          <p className="text-gray-600 text-lg">Celebre conosco este momento especial!</p>
          <p className="text-pink-500 mt-2 font-semibold">📅 Dia 27 de Setembro às 13h</p>
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
              <CardDescription className="text-gray-600">
                Nós, Alisson & Carol, queremos você ao nosso lado nesse momento mágico, venha compartilhar essa alegria com a gente!
              </CardDescription>
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
                  const isValePixDoAmor = presente.nome === 'Vale Pix do Amor'; // ATENÇÃO: Nome verificado aqui!
                  const foiPresenteado = isValePixDoAmor ? presente.presenteadoPor && presente.presenteadoPor.length > 0 : !!presente.presenteadoPor;
                  const vocePresenteou = isValePixDoAmor ? (presente.presenteadoPor && presente.presenteadoPor.includes(nomeCompleto)) : (presente.presenteadoPor === nomeCompleto);

                  return (
                    <div key={presente.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img src={presente.imagem} alt={presente.nome} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-gray-800 mb-3">{presente.nome}</h3>
                        <Button
                          onClick={() => handlePresentear(presente.id)}
                          disabled={!isValePixDoAmor && foiPresenteado} // Desabilita apenas se NÃO for Vale Pix do Amor e já foi presenteado
                          className={`w-full py-2 text-white ${vocePresenteou ? 'bg-green-600' : (!isValePixDoAmor && foiPresenteado) ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'}`}
                        >
                          {vocePresenteou ? '🎉 Ótima escolha!' : (!isValePixDoAmor && foiPresenteado) ? '❌ Já presenteado' : '🎁 Quero Presentear'}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {isAdmin && (
          <Card className="shadow-lg border-green-200">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-xl text-green-700">📋 Lista de Convidados e Presentes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-2">🎉 Convidados Confirmados:</h3>
              <ul className="list-disc list-inside">
                {nomesConfirmados().map((c, index) => (
                  <li key={index}>{c.nome} - {c.acompanhantes} acompanhante(s) - Resposta: {c.resposta}</li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6 mb-2">🎁 Presentes já escolhidos:</h3>
              <ul className="list-disc list-inside">
                {presentes.filter(p => p.presenteadoPor && (Array.isArray(p.presenteadoPor) ? p.presenteadoPor.length > 0 : p.presenteadoPor)).map(p => (
                  <li key={p.id}>
                    {p.nome} - Presenteado por:
                    {Array.isArray(p.presenteadoPor) ? p.presenteadoPor.join(', ') : p.presenteadoPor}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
  );
}

export default App;