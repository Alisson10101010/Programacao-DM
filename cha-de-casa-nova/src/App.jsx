import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { ArrowUp, Share2 } from 'lucide-react';
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


// Lista de presentes com os já escolhidos preenchidos
const presentesIniciais = [
  { id: 1, nome: 'Conjunto de talheres inox', imagem: conjuntoTalheresInox, presenteadoPor: null },
  { id: 2, nome: 'Jogo de copo americano', imagem: jogoCopoAmericano, presenteadoPor: 'Michelle Lays' },
  { id: 3, nome: 'Pratos de porcelanato verde', imagem: pratosPorcelanatoVerde, presenteadoPor: null },
  { id: 4, nome: 'Jogo de cama casal', imagem: jogoCamaCasal, presenteadoPor: null },
  { id: 5, nome: 'Toalhas de banho', imagem: toalhasDeBanho, presenteadoPor: null },
  { id: 6, nome: 'Tapete para sala', imagem: tapeteParaSala, presenteadoPor: null },
  { id: 7, nome: 'Liquidificador', imagem: liquidificador, presenteadoPor: 'Zilda' },
  { id: 8, nome: 'Ferro de passar roupa', imagem: ferroDePassarRoupa, presenteadoPor: 'Luis (icesp)' },
  { id: 9, nome: 'Robô Aspirador', imagem: robo, presenteadoPor: null },
  { id: 10, nome: 'Pipoqueira', imagem: pipoqueira, presenteadoPor: 'Mãe da Josi' },
  { id: 11, nome: 'Microondas', imagem: microondas, presenteadoPor: 'Jaqueline' },
  { id: 12, nome: 'Pratos jantar porcelanato', imagem: pratos, presenteadoPor: 'Vanessa (CASSI)' },
  { id: 14, nome: 'Mixer 3 em 1', imagem: mixer, presenteadoPor: null },
  { id: 15, nome: 'Tábua de corte', imagem: tabuaDeCorte, presenteadoPor: null },
  { id: 16, nome: 'Frigideira antiaderente - Com Tampa', imagem: frigideiraAntiaderente, presenteadoPor: 'Filipi' },
  { id: 17, nome: 'Sanduicheira', imagem: sanduicheira, presenteadoPor: 'Amanda' },
  { id: 18, nome: 'Conjunto de xícaras', imagem: conjuntoDeXicaras, presenteadoPor: null },
  { id: 19, nome: 'Jogo americano', imagem: jogoAmericano, presenteadoPor: null },
  { id: 20, nome: 'Balde Retrátil', imagem: balde, presenteadoPor: null },
  { id: 21, nome: 'Jogo de facas', imagem: jogoDeFacas, presenteadoPor: 'Alanna' },
  { id: 23, nome: 'Torneira', imagem: torneira, presenteadoPor: null },
  { id: 24, nome: 'Toalhas', imagem: towels, presenteadoPor: null },
  { id: 25, nome: 'Lixeira para banheiro', imagem: lixeiraParaBanheiro, presenteadoPor: null },
  { id: 26, nome: 'Cooktop 05 Bocas', imagem: cooktop, presenteadoPor: 'Daniel (família)' },
  { id: 27, nome: 'Rodo e vassoura', imagem: rodoEVassoura, presenteadoPor: null },
  { id: 28, nome: 'Mop', imagem: baldeComEsfregao, presenteadoPor: null },
  { id: 29, nome: 'Toalha de mesa', imagem: toalhaDeMesa, presenteadoPor: null },
  { id: 31, nome: 'Espelho de parede', imagem: espelhoDeParede, presenteadoPor: null },
  { id: 32, nome: 'Varal Retrátil de Parede', imagem: varal, presenteadoPor: null },
  { id: 34, nome: 'Relógio de parede', imagem: relogioDeParede, presenteadoPor: null },
  { id: 35, nome: 'Porta temperos', imagem: portaTemperos, presenteadoPor: 'Caroline' },
  { id: 38, nome: 'Cesto de roupa suja', imagem: cestoDeRoupaSuja, presenteadoPor: null },
  { id: 39, nome: 'Cortina para sala', imagem: cortinaParaSala, presenteadoPor: null },
  { id: 40, nome: 'Cortina para quarto', imagem: cortinaParaQuarto, presenteadoPor: null },
  { id: 41, nome: 'Forno Elétrico', imagem: forno, presenteadoPor: null },
  { id: 42, nome: 'Cesto organizador', imagem: cestoOrganizador, presenteadoPor: null },
  { id: 43, nome: 'Jogo de lençol ', imagem: jogoLencolCasalOuColcha, presenteadoPor: null },
  { id: 44, nome: 'Garrafa térmica', imagem: garrafaTermica, presenteadoPor: null },
  { id: 45, nome: 'Talheres Inox', imagem: talheres, presenteadoPor: 'Alanna' },
  { id: 46, nome: 'Tapete para cozinha', imagem: tapeteParaCozinha, presenteadoPor: null },
  { id: 48, nome: 'Jogo de lençol', imagem: lencol, presenteadoPor: null },
  { id: 50, nome: 'Jarra de suco', imagem: jarraDeSuco, presenteadoPor: 'Dein' },
  { id: 53, nome: 'Jogo de Travessas', imagem: jogoDeTravessas, presenteadoPor: null },
  { id: 55, nome: 'Tapete de Banheiro', imagem: tapeteDeBanheiro, presenteadoPor: null },
  { id: 56, nome: 'Depurador de Cozinha', imagem: depurador, presenteadoPor: null },
  { id: 57, nome: 'Climatizador de Ar', imagem: climatizador, presenteadoPor: null },
  { id: 59, nome: 'Potes herméticos', imagem: hermeticos, presenteadoPor: null },
  { id: 60, nome: 'Lixeira de cozinha', imagem: lixeiraDePia, presenteadoPor: null },
  { id: 61, nome: 'Triturador de alimentos', imagem: triturador, presenteadoPor: 'Amanda' },
  { id: 62, nome: ' Copos almoço', imagem: copos, presenteadoPor: 'Thais' },
  { id: 63, nome: "Air Fryer", imagem: airFryer, presenteadoPor: 'Josi' },
  { id: 64, nome: "Panela de Pressão", imagem: paneladepressao, presenteadoPor: 'Victor' },
  { id: 65, nome: "Almofadas", imagem: almofadas, presenteadoPor: null },
  { id: 66, nome: "Aspirador", imagem: aspirador, presenteadoPor: 'Thaísa' },
  { id: 67, nome: "Assadeiras", imagem: assadeiras, presenteadoPor: null },
  { id: 68, nome: "Tapioqueira", imagem: tapioqueira, presenteadoPor: null },
  { id: 69, nome: "Chuveiro", imagem: chuveiro, presenteadoPor: 'Jaqueline' },
  { id: 70, nome: "Cafeteira", imagem: cafeteira, presenteadoPor: null },
  { id: 71, nome: "Caixa de Primeiros Socorros", imagem: caixaPrimeirosSocorros, presenteadoPor: null },
  { id: 72, nome: "Churrasqueira", imagem: churrasqueira, presenteadoPor: 'Guilherme' },
  { id: 73, nome: "Colcha", imagem: colcha, presenteadoPor: null },
  { id: 74, nome: "Copos de Jantar", imagem: coposJantar, presenteadoPor: 'Dein' },
  { id: 75, nome: "Cortina para Quarto", imagem: cortinaQuarto, presenteadoPor: null },
  { id: 76, nome: "Escorredor", imagem: escorredor, presenteadoPor: null },
  { id: 77, nome: "Espelho", imagem: espelho, presenteadoPor: null },
  { id: 78, nome: "Espremedor de Frutas", imagem: espremedorFrutas, presenteadoPor: null },
  { id: 79, nome: "Extensão", imagem: extensao, presenteadoPor: null },
  { id: 80, nome: "Purificador de Água", imagem: filtro, presenteadoPor: null },
  { id: 82, nome: "Grill", imagem: grill, presenteadoPor: null },
  { id: 84, nome: "Kit Banheiro Lavabo", imagem: kitbanheiro, presenteadoPor: null },
  { id: 85, nome: "Tigelas Bowl Bambu", imagem: tigelas, presenteadoPor: null },
  { id: 86, nome: "Pote de Vidro - Retangular 4 Travas ", imagem: pote, presenteadoPor: null },
  { id: 88, nome: "Tábua de Passar Roupa", imagem: tabua, presenteadoPor: null },
  { id: 89, nome: "KIT Churrasco", imagem: churrasco, presenteadoPor: 'Filipi' },
  { id: 87, nome: "Boleira Bambu com Tampa em Acrílico", imagem: boleira, presenteadoPor: null },
  { id: 83, nome: "Vale Pix do Amor", imagem: cofrinho, presenteadoPor: [] },
];

function App() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [presentes, setPresentes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [senhaAdmin, setSenhaAdmin] = useState('');

  useEffect(() => {
    const salvos = localStorage.getItem('presentesEscolhidos');
    if (salvos) {
      setPresentes(JSON.parse(salvos));
    } else {
      setPresentes(presentesIniciais); // Usar a nova lista já preenchida
    }

    const nomeSalvo = localStorage.getItem('nomeCompleto');
    if (nomeSalvo) setNomeCompleto(nomeSalvo);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handlePresentear = (id) => {
    if (!nomeCompleto) {
      alert('Por favor, preencha seu nome completo antes de escolher um presente.');
      return;
    }

    const novos = presentes.map(p => {
      if (p.id === id) {
        if (p.nome === 'Vale Pix do Amor') {
          const presenteadoPorLista = Array.isArray(p.presenteadoPor) ? p.presenteadoPor : [];
          if (!presenteadoPorLista.includes(nomeCompleto)) {
            return { ...p, presenteadoPor: [...presenteadoPorLista, nomeCompleto] };
          }
          return p;
        } else {
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
    const mensagem = `Você está convidado(a) para o nosso Chá de Casa Nova! 🏠✨\nDia 27 de Setembro às 13h!\nConfirme sua presença e escolha um presente especial para nós:\n${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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

        {/* Novo texto adicionado no lugar do formulário */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">🎁 "Escolha seu presente no catálogo e fale com o casal para confirmar a disponibilidade."</h2>
        </div>

        {!isAdmin && (
          <Card className="shadow-lg border-pink-200">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 text-center">
              <CardTitle className="text-2xl text-purple-700">🎁 Lista de Presentes</CardTitle>
              <CardDescription className="text-gray-600">Escolha um presente especial para nos ajudar a montar nossa nova casa</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {presentes.map((presente) => {
                  const isValePixDoAmor = presente.nome === 'Vale Pix do Amor';
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
                          disabled={!isValePixDoAmor && foiPresenteado}
                          className={`w-full py-2 text-white ${vocePresenteou ? 'bg-green-600' : (!isValePixDoAmor && foiPresenteado) ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'}`}
                        >
                          {vocePresenteou ? '🎉 Ótima escolha!' : (!isValePixDoAmor && foiPresenteado) ? '❌ Já Presenteado' : '🎁 Quero Presentear'}
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
              <CardTitle className="text-xl text-green-700">📋 Lista de Presentes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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