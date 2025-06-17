// Lista de presentes para o chá de casa nova
import coposImg from '../assets/copos.jpg'
import panelaImg from '../assets/panela.jpg'
import talheresImg from '../assets/talheres.jpg'

export const giftCategories = [
  {
    id: 'cozinha',
    name: 'Cozinha',
    color: 'from-orange-50 to-orange-100',
    iconColor: 'text-orange-600',
    items: [
      {
        id: 'copos-6x',
        name: 'Conjunto de Copos (6x)',
        description: 'Copos de vidro transparente para água e sucos',
        price: 'R$ 80-120',
        image: coposImg,
        selected: false
      },
      {
        id: 'tacas-vinho',
        name: 'Taças de Vinho',
        description: 'Conjunto de taças elegantes para vinho',
        price: 'R$ 100-150',
        image: coposImg,
        selected: false
      },
      {
        id: 'conjunto-facas',
        name: 'Conjunto de Facas',
        description: 'Kit completo de facas para cozinha',
        price: 'R$ 150-250',
        image: talheresImg,
        selected: false
      },
      {
        id: 'tabua-churrasco',
        name: 'Tábua de Churrasco',
        description: 'Tábua grande de madeira para churrasco',
        price: 'R$ 80-150',
        image: panelaImg,
        selected: false
      },
      {
        id: 'espremedor-frutas',
        name: 'Espremedor de Frutas',
        description: 'Espremedor manual para frutas cítricas',
        price: 'R$ 60-100',
        image: panelaImg,
        selected: false
      },
      {
        id: 'liquidificador',
        name: 'Liquidificador',
        description: 'Liquidificador potente para uso diário',
        price: 'R$ 150-250',
        image: panelaImg,
        selected: false
      },
      {
        id: 'potes-hermeticos',
        name: 'Conjunto de Potes Herméticos',
        description: 'Kit de potes para armazenamento',
        price: 'R$ 80-150',
        image: panelaImg,
        selected: false
      }
    ]
  },
  {
    id: 'sala-jantar',
    name: 'Sala de Jantar / Servir',
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    items: [
      {
        id: 'jogo-americano',
        name: 'Jogo Americano (4-6 peças)',
        description: 'Conjunto de jogos americanos elegantes',
        price: 'R$ 60-120',
        image: talheresImg,
        selected: false
      },
      {
        id: 'conjunto-pratos',
        name: 'Conjunto de Pratos (6 peças)',
        description: 'Pratos de porcelana ou cerâmica',
        price: 'R$ 150-250',
        image: coposImg,
        selected: false
      },
      {
        id: 'talheres-24-pecas',
        name: 'Talheres (24 peças)',
        description: 'Faqueiro completo em aço inox',
        price: 'R$ 200-300',
        image: talheresImg,
        selected: false
      },
      {
        id: 'jarra-suco-agua',
        name: 'Jarra de Suco/Água',
        description: 'Jarra de vidro para servir bebidas',
        price: 'R$ 80-150',
        image: coposImg,
        selected: false
      },
      {
        id: 'travessas-fruteira',
        name: 'Travessas e Fruteira',
        description: 'Conjunto para servir e decorar',
        price: 'R$ 100-200',
        image: coposImg,
        selected: false
      },
      {
        id: 'suporte-bolo',
        name: 'Suporte para Bolo',
        description: 'Suporte elegante para bolos e doces',
        price: 'R$ 80-150',
        image: coposImg,
        selected: false
      }
    ]
  },
  {
    id: 'limpeza-lavanderia',
    name: 'Limpeza & Lavanderia',
    color: 'from-green-50 to-green-100',
    iconColor: 'text-green-600',
    items: [
      {
        id: 'balde-espremedor',
        name: 'Balde com Espremedor',
        description: 'Balde com sistema de espremedor',
        price: 'R$ 80-150',
        image: panelaImg,
        selected: false
      },
      {
        id: 'rodo-vassoura-pa',
        name: 'Rodo, Vassoura e Pá',
        description: 'Kit básico de limpeza',
        price: 'R$ 60-120',
        image: panelaImg,
        selected: false
      },
      {
        id: 'panos-chao-escovas',
        name: 'Panos de Chão e Escovas',
        description: 'Kit de panos e escovas para limpeza',
        price: 'R$ 50-100',
        image: panelaImg,
        selected: false
      },
      {
        id: 'cesto-roupas-cabides',
        name: 'Cesto de Roupas e Cabides',
        description: 'Organização para lavanderia',
        price: 'R$ 80-150',
        image: panelaImg,
        selected: false
      },
      {
        id: 'kit-limpeza-mop',
        name: 'Kit de Limpeza com Mop',
        description: 'Kit completo com mop e produtos',
        price: 'R$ 100-200',
        image: panelaImg,
        selected: false
      }
    ]
  },
  {
    id: 'quarto',
    name: 'Quarto',
    color: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600',
    items: [
      {
        id: 'jogo-cama-casal',
        name: 'Jogo de Cama Casal',
        description: 'Jogo de cama completo para casal',
        price: 'R$ 150-300',
        image: coposImg,
        selected: false
      },
      {
        id: 'protetor-colchao',
        name: 'Protetor de Colchão',
        description: 'Protetor impermeável para colchão',
        price: 'R$ 80-150',
        image: coposImg,
        selected: false
      },
      {
        id: 'travesseiros-2-uni',
        name: 'Travesseiros (2 unidades)',
        description: 'Par de travesseiros confortáveis',
        price: 'R$ 100-200',
        image: coposImg,
        selected: false
      },
      {
        id: 'edredom-manta',
        name: 'Edredom ou Manta Leve',
        description: 'Cobertor leve para todas as estações',
        price: 'R$ 150-250',
        image: coposImg,
        selected: false
      },
      {
        id: 'almofadas-decorativas',
        name: 'Almofadas Decorativas',
        description: 'Conjunto de almofadas para decoração',
        price: 'R$ 80-150',
        image: coposImg,
        selected: false
      },
      {
        id: 'luminaria-cabeceira',
        name: 'Luminária de Cabeceira',
        description: 'Luminária moderna para quarto',
        price: 'R$ 100-200',
        image: coposImg,
        selected: false
      }
    ]
  },
  {
    id: 'banheiro',
    name: 'Banheiro',
    color: 'from-cyan-50 to-cyan-100',
    iconColor: 'text-cyan-600',
    items: [
      {
        id: 'toalhas-banho-rosto',
        name: 'Toalhas de Banho e Rosto',
        description: 'Conjunto de toalhas macias',
        price: 'R$ 100-200',
        image: coposImg,
        selected: false
      },
      {
        id: 'tapete-banheiro',
        name: 'Tapete de Banheiro',
        description: 'Tapete antiderrapante para banheiro',
        price: 'R$ 50-100',
        image: coposImg,
        selected: false
      },
      {
        id: 'lixeira-suporte-escova',
        name: 'Lixeira e Suporte de Escova',
        description: 'Kit de acessórios para banheiro',
        price: 'R$ 80-150',
        image: coposImg,
        selected: false
      },
      {
        id: 'saboneteira-liquida',
        name: 'Saboneteira Líquida',
        description: 'Dispenser elegante para sabonete',
        price: 'R$ 60-120',
        image: coposImg,
        selected: false
      },
      {
        id: 'kit-higiene-basico',
        name: 'Kit de Higiene Básico',
        description: 'Cesto com produtos de higiene',
        price: 'R$ 100-200',
        image: coposImg,
        selected: false
      }
    ]
  },
  {
    id: 'gerais',
    name: 'Itens Gerais',
    color: 'from-rose-50 to-rose-100',
    iconColor: 'text-rose-600',
    items: [
      {
        id: 'relogio-parede',
        name: 'Relógio de Parede',
        description: 'Relógio decorativo para casa',
        price: 'R$ 80-150',
        image: coposImg,
        selected: false
      },
      {
        id: 'quadro-decorativo',
        name: 'Quadro Decorativo',
        description: 'Quadro para decoração da casa',
        price: 'R$ 100-200',
        image: coposImg,
        selected: false
      },
      {
        id: 'extensao-eletrica',
        name: 'Extensão Elétrica',
        description: 'Extensão com múltiplas tomadas',
        price: 'R$ 50-100',
        image: panelaImg,
        selected: false
      },
      {
        id: 'lampadas-led',
        name: 'Lâmpadas LED',
        description: 'Kit de lâmpadas LED econômicas',
        price: 'R$ 60-120',
        image: panelaImg,
        selected: false
      },
      {
        id: 'kit-ferramentas',
        name: 'Kit de Ferramentas Básico',
        description: 'Ferramentas essenciais para casa',
        price: 'R$ 100-200',
        image: panelaImg,
        selected: false
      },
      {
        id: 'vela-aromatica',
        name: 'Vela Aromática ou Difusor',
        description: 'Aromatizador para ambiente',
        price: 'R$ 60-120',
        image: coposImg,
        selected: false
      },
      {
        id: 'caixa-organizadora',
        name: 'Caixa Organizadora',
        description: 'Caixas para organização',
        price: 'R$ 50-100',
        image: coposImg,
        selected: false
      }
    ]
  }
]

