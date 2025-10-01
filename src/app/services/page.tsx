import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  items: string[];
  note?: string;
}

export default function Page() {
  const services: Service[] = [
    {
      id: 1,
      title: "Reservas de Viagens",
      description: "Mobilidade Garantida em Qualquer Destino.",
      items: [
        "Mobilidade Garantida em Qualquer Destino.",
        "Serviço de transfer aeroporto-hotel e vise-versa",
        "Transporte executivo com motoristas profissionais",
        "Autocarros de luxo para grupos e excursões",
        "Soluções de mobilidade para eventos",
        "Frota moderna e motoristas certificados para sua segurança!"
      ]
    },
    {
      id: 2,
      title: "Passagens Aéreas",
      description: "Nacionais e Internacionais com as Melhores Tarifas:",
      items: [
        "Emissão de bilhetes para voos domésticos e internacionais",
        "Acesso a tarifas promocionais exclusivas",
        "Reservas em classe económica, executiva e primeira classe"
      ]
    },
    {
      id: 3,
      title: "Regularize Seus Documentos com Facilidade:",
      description: "Nacionais e Internacionais com as Melhores Tarifas:",
      items: [
        "Emissão e renovação de passaportes",
        "Processamento de vistos para diversos países",
        "Obtenção de DIRE (Documento de Identificação e Residência Estrangeira)",
        "Assessoria completa em requisitos de imigração"
      ],
      note: "Taxa de aprovação superior a 95% em processos de visto!"
    },
    {
      id: 4,
      title: "Seguros de Viagem",
      description: "Proteção Completa para Sua Jornada",
      items: [
        "Cobertura para cancelamentos de viagem",
        "Assistência médica internacional",
        "Proteção contra extravio de bagagem",
        "Planos individuais e familiares"
      ],
      note: "Cobertura válida em mais de 150 países!"
    },
    {
      id: 5,
      title: "Experiências Memoráveis Sob Medida",
      description: "Nacionais e Internacionais com as Melhores Tarifas:",
      items: [
        "Criação de pacotes turísticos personalizados",
        "Roteiros culturais, de aventura ou relaxamento",
        "Excursões em grupo com guias especializados",
        "Programas temáticos (lua-de-mel, aniversários)"
      ],
      note: "Planejamos milhares de pacotes turísticos personalizados!"
    },
    {
      id: 6,
      title: "Hospedagem",
      description: "Encontre o Acomodação Perfeita",
      items: [
        "Reservas em hotéis, resorts e apartamentos",
        "Acesso a tarifas corporativas e descontos exclusivos",
        "Seleção de estabelecimentos por categoria e localização",
        "Reservas para grupos e eventos especiais"
      ],
      note: "Parcerias com mais de 300 estabelecimentos em todo o mundo!"
    },
    {
      id: 7,
      title: "Transfer",
      description: "• Mobilidade Garantida em Qualquer Destino.",
      items: [
        "Mobilidade Garantida em Qualquer Destino.",
        "Serviço de transfer aeroporto-hotel e vise-versa",
        "Transporte executivo com motoristas profissionais",
        "Autocarros de luxo para grupos e excursões",
        "Soluções de mobilidade para eventos"
      ],
      note: "• Frota moderna e motoristas certificados para sua segurança!"
    },
    {
      id: 8,
      title: "Serviços de Protocolo",
      description: "Check-in e Check-out com Excelência",
      items: [
        "Assistência em procedimentos de check-in/out",
        "Gestão de bagagens e despacho",
        "Acompanhamento em aeroportos",
        "Serviços VIP e lounge access"
      ],
      note: "Facilite seus processos aeroportuários com nosso serviço exclusivo!"
    },
    {
      id: 9,
      title: "Eventos Corporativos",
      description: "Soluções Completas para Seu Evento",
      items: [
        "Organização de seminários e workshops",
        "Logística para conferências e feiras",
        "Gestão de viagens corporativas",
        "Programas de incentivo para colaboradores"
      ]
    },
    {
      id: 10,
      title: "Rent-a-Car",
      description: "Liberdade para Explorar Seu Destino",
      items: [
        "Aluguel de veículos de diversas categorias",
        "Seguros completos inclusos",
        "Entrega e recolha em locais acordados",
        "Frota moderna e bem mantida"
      ],
      note: "Tarifas especiais para clientes Atlantic Travel!"
    },
    {
      id: 11,
      title: "Fretamento de Aeronaves",
      description: "Viagens Exclusivas e Sob Medida",
      items: [
        "Charter de aviões executivos e helicópteros",
        "Roteiros personalizados e horários flexíveis",
        "Soluções para emergências médicas"
      ],
      note: "Experiência em operações de fretamento há mais de 10 anos!"
    },
    {
      id: 12,
      title: "Eventos Corporativos",
      description: "Soluções Completas para Seu Evento",
      items: [
        "Organização de seminários e workshops",
        "Logística para conferências e feiras",
        "Gestão de viagens corporativas",
        "Programas de incentivo para colaboradores"
      ]
    }
  ];

  // Dividir os serviços em grupos de 3 para manter a estrutura de grid
  const chunkArray = (array: Service[], size: number): Service[][] => {
    const chunks: Service[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const serviceChunks = chunkArray(services, 3);

  return (
    <div>
      <div className="relative h-[400px] w-full flex justify-center items-center bg-[url('/images/servicos.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <div className='text-center text-white space-y-2'>
            <p className='Roboto text-6xl font-semibold'>Atlantic Travel Lda</p>
            <p className='Roboto text-2xl font-semibold'>Serviços Completos para Todas as Suas</p>
            <p className='Roboto text-2xl font-semibold'>Necessidades de Viagem</p>
          </div>
        </div>
      </div>

      <div className='text-center mt-5'>
        <p className='Roboto text-4xl font-semibold'>Nossos Serviços</p>
        <p className='text-sm'>Desde 2009, já facilitamos mais de 500.000 serviços turísticos, consolidando-nos como uma das agências mais experientes de Moçambique.</p>
      </div>

      <div className='2xl:max-w-[1640px] xl:max-w-7xl mx-auto py-10'>
        {serviceChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className='grid grid-cols-3 gap-5 mt-5'>
            {chunk.map((service) => (
              <div key={service.id} className="bg-[#F5F5F5] p-4 rounded-lg">
                <p className="font-roboto font-medium text-[#0A6BB2] mb-3">
                  {service.title}
                </p>
                <p>{service.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {service.note && <p className="mt-3">{service.note}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}