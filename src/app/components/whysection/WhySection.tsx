'use client'
import Image from "next/image"

export default function WhySection() {

  const benefits = [
    {
      icon: '/icons/Headset.svg',
      title: 'Experiência',
      description: (
        <>
          <span className="font-semibold">Atendimento personalizado:</span> adaptado às necessidades de cada cliente, com suporte e orientação 24/7.
        </>
      )
    },
    {
      icon: '/icons/Handshake.svg',
      title: 'Segurança',
      description: (
        <>
          <span className="font-semibold">Robustez:</span> Parcerias com mais de 150 entidades (hotéis, companhias aéreas, rent-a-car).
        </>
      )
    },
    {
      icon: '/icons/coracao.svg',
      title: 'Flexibilidade',
      description: (
        <>
          <span className="font-semibold">Paixão pelo que fazemos:</span> Porque cada viagem é única!
        </>
      )
    },
    {
      icon: '/icons/time.svg',
      title: 'Atendimento',
      description: (
        <>
          <span className="font-semibold">Experiência:</span> Mais de 15 anos operando no mercado nacional e internacional.
        </>
      )
    },
    {
      icon: '/icons/cadeado.svg',
      title: 'Parcerias',
      description: (
        <>
          <span className="font-semibold">Segurança:</span> Parceiros verificados e assistência completa.
        </>
      )
    },
    {
      icon: '/icons/money.svg',
      title: 'Paixão',
      description: (
        <>
          <span className="font-semibold">Flexibilidade:</span> Pagamentos ajustados à sua realidade.
        </>
      )
    },
  ]



  return (
    <div className="max-w-[1640px] mx-auto py-10">
      <div className="grid grid-cols-1 px-4 space-y-5">
        <div className="h-52 w-52 rounded-full bg-blue-100 p-4 flex items-center justify-center text-center">
          <div className="text-black">
            <p className="Roboto text-2xl leading-6">Porquê escolher a</p>
            <p className="Roboto">Atlantic Travel?</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className='space-y-6'>
            {benefits.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 border border-[#0871B5] p-4 rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1  hover:border-blue-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='space-y-6'>
            {benefits.slice(3, 6).map((item, index) => (
              <div key={index}
                className="group flex items-center gap-2 border border-[#0871B5] p-4 rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1  hover:border-blue-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <div>
          <p className="Roboto text-5xl mb-10">Simulação de Orçamento</p>
          <p className="text-sm Roboto">Planeia a tua próxima viagem em minutos!</p>

          <button className="text-white p-3 rounded-xl bg-black mt-5">
            Simular Orçamento Agora
          </button>
        </div>
      </div>
    </div>
  )
}