"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useFlightOffers } from "@/hooks/useFlightOffers";
import { FlightOffersRequest } from "@/types/amadeus";
import { Plane } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";

export default function VoosPage() {
  const searchParams = useSearchParams();

  const request: FlightOffersRequest | null = useMemo(() => {
    const requestParam = searchParams.get("request");
    return requestParam ? JSON.parse(decodeURIComponent(requestParam)) : null;
  }, [searchParams]);

  const requestKey = useMemo(() => {
    return request ? JSON.stringify(request) : "dummy";
  }, [request]);

  const { data, loading, error } = useFlightOffers(requestKey, request);

  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!match) return duration;

    const hours = match[1] ? `${match[1]}h` : '';
    const minutes = match[2] ? `${match[2]}m` : '';
    return `${hours} ${minutes}`.trim();
  };

  const formatDateTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getCabinName = (cabin: string) => {
    const cabins: { [key: string]: string } = {
      'ECONOMY': 'Econômica',
      'PREMIUM_ECONOMY': 'Econômica Premium',
      'BUSINESS': 'Executiva',
      'FIRST': 'Primeira Classe'
    };
    return cabins[cabin] || cabin;
  };

  const getAirlineName = (carrierCode: string, dictionaries: any) => {
    return dictionaries?.carriers?.[carrierCode] || carrierCode;
  };

  const isDirectFlight = (segments: any[]) => {
    return segments.length === 1 && segments[0].numberOfStops === 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Buscando as melhores ofertas...</h2>
            <p className="text-gray-600 mt-2">Estamos encontrando voos para você</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-3">⚠️</div>
            <h2 className="text-xl font-bold text-red-800 mb-2">Erro na busca</h2>
            <p className="text-red-600">{error}</p>
            <button
              onClick={() => window.history.back()}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Voltar para a pesquisa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative space-y-20">
      <div className="flex items-center gap-4 p-8 w-full relative">
        <div className="bg-red-50 p-2 xl:w-80 2xl:w-90 absolute left-0">
          <p>Filtros de pesquisa</p>
          <div>
            <div className="flex items-center justify-between">
              <p>Escalas</p>
              <FiChevronDown className="text-gray-500" size={20} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full">
          <div>
            {!data?.data || data.data.length === 0 ? (
              <div className="text-center py-12 items-center justify-center flex">
                <div className="text-center">
                  <div className="text-6xl mb-4">✈️</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Nenhum voo encontrado</h2>
                  <p className="text-gray-600 mb-6">Tente ajustar os filtros da sua pesquisa</p>
                  <button
                    onClick={() => window.history.back()}
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Nova Pesquisa
                  </button>
                </div>
              </div>
            ) : (
              <div className="">
                {data.data.map((offer, index) => (
                  <div key={index} className="bg-[#EEEEEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow mb-5">
                    <div className="p-5">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1">
                          {/* Cabeçalho com informações da companhia aérea */}
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Plane size={24} className="text-blue-600" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {offer.validatingAirlineCodes.map(code => 
                                  getAirlineName(code, data.dictionaries)
                                ).join(' & ')}
                              </h3>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 bg-green-100 text-green-800">
                                {isDirectFlight(offer.itineraries[0].segments) ? 'Voo Direto' : 'Com Escalas'}
                              </span>
                            </div>
                          </div>

                          {/* Itinerários de ida e volta */}
                          <div className="mt-4 flex w-full items-start justify-between gap-8">
                            <div className="flex-1 border-r p-4">
                              {/* Ida */}
                              {offer.itineraries.map((itinerary, itineraryIndex) => (
                                <div key={itineraryIndex} className={itineraryIndex > 0 ? "mt-6 pt-6 border-t border-gray-200" : ""}>
                                  <div className="flex items-center justify-between">
                                    <div className="text-left">
                                      <div className="text-2xl font-bold text-gray-900">
                                        {formatTime(itinerary.segments[0].departure.at)}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {itinerary.segments[0].departure.iataCode}
                                      </div>
                                      <div className="text-xs text-gray-400">
                                        {formatDate(itinerary.segments[0].departure.at)}
                                      </div>
                                    </div>

                                    <div className="mx-4 flex-1 text-center">
                                      <div className="text-xs text-gray-500">
                                        {formatDuration(itinerary.duration)}
                                      </div>
                                      <div className="relative mt-1">
                                        <div className="border-t-2 border-gray-200 w-full"></div>
                                        <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-blue-500"></div>
                                        <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-blue-500"></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                          <Plane size={16} className="text-blue-500" />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="text-right">
                                      <div className="text-2xl font-bold text-gray-900">
                                        {formatTime(itinerary.segments[itinerary.segments.length - 1].arrival.at)}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {itinerary.segments[itinerary.segments.length - 1].arrival.iataCode}
                                      </div>
                                      <div className="text-xs text-gray-400">
                                        {formatDate(itinerary.segments[itinerary.segments.length - 1].arrival.at)}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-1 text-xs text-gray-500 text-center">
                                    {data.dictionaries?.locations?.[itinerary.segments[0].departure.iataCode]?.cityCode || itinerary.segments[0].departure.iataCode} →{' '}
                                    {data.dictionaries?.locations?.[itinerary.segments[itinerary.segments.length - 1].arrival.iataCode]?.cityCode || itinerary.segments[itinerary.segments.length - 1].arrival.iataCode}
                                  </div>

                                  {/* Informações de escalas */}
                                  {itinerary.segments.length > 1 && (
                                    <div className="mt-2 text-xs text-gray-500 text-center">
                                      {itinerary.segments.length - 1} escala{itinerary.segments.length - 1 > 1 ? 's' : ''}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Preço e botão de seleção */}
                            <div className="p-4 flex flex-col items-start justify-center">
                              <p>A partir de</p>
                              <p className="text-md text-[#0871B5] Roboto text-2xl font-bold">
                                {offer.price.currency} {parseFloat(offer.price.total).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </p>
                              <p className="text-sm">Preço por pessoa (incl. taxas e encargos)</p>

                              <button className="bg-[#0871B5] w-full p-4 rounded-2xl mt-4 text-white font-semibold">
                                Selecionar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Informações adicionais */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                          <span>Classe: {getCabinName(offer.travelerPricings[0].fareDetailsBySegment[0].cabin)}</span>
                          <span>Assentos disponíveis: {offer.numberOfBookableSeats}</span>
                          <span>Última data para emissão: {formatDate(offer.lastTicketingDate)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}