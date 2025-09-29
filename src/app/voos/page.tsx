"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useFlightOffers } from "@/hooks/useFlightOffers";
import { FlightOffersRequest, FlightOffer, Dictionaries } from "@/types/amadeus";
import { Plane } from "lucide-react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FilterState {
  scales: string[];
  airlines: string[];
  maxPrice: number;
  departureTime: string[];
  flightDuration: string[];
}

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

  const [filters, setFilters] = useState<FilterState>({
    scales: [],
    airlines: [],
    maxPrice: 0,
    departureTime: [],
    flightDuration: []
  });

  const [expandedFilters, setExpandedFilters] = useState({
    scales: false,
    airlines: false,
    price: false,
    departureTime: false,
    duration: false
  });

  const toggleFilter = (filter: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const handleScaleFilter = (scale: string) => {
    setFilters(prev => ({
      ...prev,
      scales: prev.scales.includes(scale)
        ? prev.scales.filter(s => s !== scale)
        : [...prev.scales, scale]
    }));
  };

  const handleAirlineFilter = (airline: string) => {
    setFilters(prev => ({
      ...prev,
      airlines: prev.airlines.includes(airline)
        ? prev.airlines.filter(a => a !== airline)
        : [...prev.airlines, airline]
    }));
  };

  const handlePriceFilter = (price: number) => {
    setFilters(prev => ({ ...prev, maxPrice: price }));
  };

  const handleDepartureTimeFilter = (time: string) => {
    setFilters(prev => ({
      ...prev,
      departureTime: prev.departureTime.includes(time)
        ? prev.departureTime.filter(t => t !== time)
        : [...prev.departureTime, time]
    }));
  };

  const handleDurationFilter = (duration: string) => {
    setFilters(prev => ({
      ...prev,
      flightDuration: prev.flightDuration.includes(duration)
        ? prev.flightDuration.filter(d => d !== duration)
        : [...prev.flightDuration, duration]
    }));
  };

  const filteredOffers = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((offer: FlightOffer) => {
      if (filters.scales.length > 0) {
        const hasDirectFlight = filters.scales.includes("direct") && 
          offer.itineraries.every(itinerary => 
            itinerary.segments.length === 1 && itinerary.segments[0].numberOfStops === 0
          );
        
        const hasOneStop = filters.scales.includes("1stop") && 
          offer.itineraries.some(itinerary => 
            itinerary.segments.some(segment => segment.numberOfStops === 1)
          );

        const hasMultipleStops = filters.scales.includes("2+stops") && 
          offer.itineraries.some(itinerary => 
            itinerary.segments.some(segment => segment.numberOfStops >= 2)
          );

        if (!hasDirectFlight && !hasOneStop && !hasMultipleStops) return false;
      }

      if (filters.airlines.length > 0) {
        const offerAirlines = offer.validatingAirlineCodes;
        if (!filters.airlines.some(airline => offerAirlines.includes(airline))) {
          return false;
        }
      }

      if (filters.maxPrice > 0) {
        const totalPrice = parseFloat(offer.price.total);
        if (totalPrice > filters.maxPrice) return false;
      }

      if (filters.departureTime.length > 0) {
        const departureHours = offer.itineraries.map(itinerary => {
          const departureTime = new Date(itinerary.segments[0].departure.at);
          return departureTime.getHours();
        });

        const matchesTimeFilter = filters.departureTime.some(time => {
          if (time === "morning") return departureHours.some(h => h >= 6 && h < 12);
          if (time === "afternoon") return departureHours.some(h => h >= 12 && h < 18);
          if (time === "evening") return departureHours.some(h => h >= 18 && h < 24);
          if (time === "night") return departureHours.some(h => h >= 0 && h < 6);
          return false;
        });

        if (!matchesTimeFilter) return false;
      }

      if (filters.flightDuration.length > 0) {
        const durations = offer.itineraries.map(itinerary => {
          const durationMatch = itinerary.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
          const hours = durationMatch?.[1] ? parseInt(durationMatch[1]) : 0;
          const minutes = durationMatch?.[2] ? parseInt(durationMatch[2]) : 0;
          return hours * 60 + minutes;
        });

        const matchesDurationFilter = filters.flightDuration.some(duration => {
          if (duration === "short" && durations.every(d => d <= 180)) return true;
          if (duration === "medium" && durations.every(d => d > 180 && d <= 360)) return true;
          if (duration === "long" && durations.every(d => d > 360)) return true;
          return false;
        });

        if (!matchesDurationFilter) return false;
      }

      return true;
    });
  }, [data?.data, filters]);

  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!match) return duration;

    const hours = match[1] ? `${match[1]}h` : '';
    const minutes = match[2] ? `${match[2]}m` : '';
    return `${hours} ${minutes}`.trim();
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

  const getAirlineName = (carrierCode: string, dictionaries: Dictionaries) => {
    return dictionaries?.carriers?.[carrierCode] || carrierCode;
  };

  const isDirectFlight = (segments: any[]) => {
    return segments.length === 1 && segments[0].numberOfStops === 0;
  };

  const uniqueAirlines = useMemo(() => {
    if (!data?.data) return [];
    const airlines = new Set<string>();
    data.data.forEach((offer: FlightOffer) => {
      offer.validatingAirlineCodes.forEach(code => airlines.add(code));
    });
    return Array.from(airlines);
  }, [data?.data]);

  const maxPrice = useMemo(() => {
    if (!data?.data) return 0;
    return Math.max(...data.data.map((offer: FlightOffer) => parseFloat(offer.price.total)));
  }, [data?.data]);

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
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Voltar para a pesquisa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex gap-8 p-8 max-w-[1640px] mt-30 mx-auto">
        

        <div className="w-80 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24 h-fit max-h-[calc(100vh-120px)] overflow-hidden">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros de pesquisa</h2>
            
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                onClick={() => toggleFilter('scales')}>
                <span className="text-sm font-medium text-gray-700">Escalas</span>
                {expandedFilters.scales ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </div>
              {expandedFilters.scales && (
                <div className="mt-2 space-y-2 pl-2">
                  {[
                    { value: "direct", label: "Voo Direto" },
                    { value: "1stop", label: "1 Escala" },
                    { value: "2+stops", label: "2+ Escalas" }
                  ].map(scale => (
                    <label key={scale.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.scales.includes(scale.value)}
                        onChange={() => handleScaleFilter(scale.value)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{scale.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                onClick={() => toggleFilter('airlines')}>
                <span className="text-sm font-medium text-gray-700">Companhias Aéreas</span>
                {expandedFilters.airlines ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </div>
              {expandedFilters.airlines && (
                <div className="mt-2 space-y-2 pl-2 max-h-40 overflow-y-auto">
                  {uniqueAirlines.map(airlineCode => (
                    <label key={airlineCode} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.airlines.includes(airlineCode)}
                        onChange={() => handleAirlineFilter(airlineCode)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {getAirlineName(airlineCode, data!.dictionaries)}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                onClick={() => toggleFilter('price')}>
                <span className="text-sm font-medium text-gray-700">Preço Máximo</span>
                {expandedFilters.price ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </div>
              {expandedFilters.price && (
                <div className="mt-2 pl-2">
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={filters.maxPrice}
                    onChange={(e) => handlePriceFilter(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>R$ 0</span>
                    <span>R$ {filters.maxPrice.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                onClick={() => toggleFilter('departureTime')}>
                <span className="text-sm font-medium text-gray-700">Horário de Partida</span>
                {expandedFilters.departureTime ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </div>
              {expandedFilters.departureTime && (
                <div className="mt-2 space-y-2 pl-2">
                  {[
                    { value: "morning", label: "Manhã (06:00 - 12:00)" },
                    { value: "afternoon", label: "Tarde (12:00 - 18:00)" },
                    { value: "evening", label: "Noite (18:00 - 24:00)" },
                    { value: "night", label: "Madrugada (00:00 - 06:00)" }
                  ].map(time => (
                    <label key={time.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.departureTime.includes(time.value)}
                        onChange={() => handleDepartureTimeFilter(time.value)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{time.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div 
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                onClick={() => toggleFilter('duration')}>
                <span className="text-sm font-medium text-gray-700">Duração do Voo</span>
                {expandedFilters.duration ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </div>
              {expandedFilters.duration && (
                <div className="mt-2 space-y-2 pl-2">
                  {[
                    { value: "short", label: "Curto (até 3h)" },
                    { value: "medium", label: "Médio (3h - 6h)" },
                    { value: "long", label: "Longo (acima de 6h)" }
                  ].map(duration => (
                    <label key={duration.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.flightDuration.includes(duration.value)}
                        onChange={() => handleDurationFilter(duration.value)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{duration.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {(filters.scales.length > 0 || filters.airlines.length > 0 || filters.maxPrice > 0 || 
              filters.departureTime.length > 0 || filters.flightDuration.length > 0) && (
              <button
                onClick={() => setFilters({
                  scales: [],
                  airlines: [],
                  maxPrice: 0,
                  departureTime: [],
                  flightDuration: []
                })}
                className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                Limpar Filtros
              </button>
            )}
          </div>
        </div>

        {/* Conteúdo Principal dos Voos - COM SCROLL */}
        <div className="flex-1 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Voos Encontrados <span className="text-gray-600">({filteredOffers.length})</span>
            </h1>
          </div>

          {filteredOffers.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✈️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Nenhum voo encontrado</h2>
              <p className="text-gray-600 mb-6">Tente ajustar os filtros da sua pesquisa</p>
              <button
                onClick={() => window.history.back()}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Nova Pesquisa
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOffers.map((offer: FlightOffer, index: number) => (
                <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Plane size={20} className="text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {offer.validatingAirlineCodes.map(code => 
                              getAirlineName(code, data!.dictionaries)
                            ).join(' & ')}
                          </h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                            isDirectFlight(offer.itineraries[0].segments) 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {isDirectFlight(offer.itineraries[0].segments) ? 'Voo Direto' : 'Com Escalas'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-600">A partir de</p>
                        <p className="text-2xl font-bold text-[#0871B5]">
                          {offer.price.currency} {parseFloat(offer.price.total).toLocaleString('pt-BR', { 
                            minimumFractionDigits: 2, 
                            maximumFractionDigits: 2 
                          })}
                        </p>
                        <p className="text-xs text-gray-500">por pessoa</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {offer.itineraries.map((itinerary, itineraryIndex) => (
                        <div key={itineraryIndex} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-900">
                                {formatTime(itinerary.segments[0].departure.at)}
                              </div>
                              <div className="text-sm font-medium text-gray-700">
                                {itinerary.segments[0].departure.iataCode}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatDate(itinerary.segments[0].departure.at)}
                              </div>
                            </div>

                            <div className="flex-1 mx-6">
                              <div className="text-center text-sm text-gray-600 mb-2">
                                {formatDuration(itinerary.duration)}
                                {itinerary.segments.length > 1 && (
                                  <span className="ml-2 text-xs text-gray-500">
                                    ({itinerary.segments.length - 1} escala{itinerary.segments.length - 1 > 1 ? 's' : ''})
                                  </span>
                                )}
                              </div>
                              <div className="relative">
                                <div className="border-t-2 border-gray-300 w-full"></div>
                                <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-blue-500"></div>
                                <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <Plane size={16} className="text-gray-600" />
                                </div>
                              </div>
                            </div>

                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-900">
                                {formatTime(itinerary.segments[itinerary.segments.length - 1].arrival.at)}
                              </div>
                              <div className="text-sm font-medium text-gray-700">
                                {itinerary.segments[itinerary.segments.length - 1].arrival.iataCode}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatDate(itinerary.segments[itinerary.segments.length - 1].arrival.at)}
                              </div>
                            </div>
                          </div>

                          <div className="text-center text-xs text-gray-500 mt-2">
                            {data!.dictionaries?.locations?.[itinerary.segments[0].departure.iataCode]?.cityCode || itinerary.segments[0].departure.iataCode} 
                            → 
                            {data!.dictionaries?.locations?.[itinerary.segments[itinerary.segments.length - 1].arrival.iataCode]?.cityCode || itinerary.segments[itinerary.segments.length - 1].arrival.iataCode}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex gap-4 text-xs text-gray-600">
                        <span>Classe: {getCabinName(offer.travelerPricings[0].fareDetailsBySegment[0].cabin)}</span>
                        <span>Assentos: {offer.numberOfBookableSeats}</span>
                        <span>Emissão até: {formatDate(offer.lastTicketingDate)}</span>
                      </div>
                      
                      <button className="bg-[#0871B5] text-white px-6 py-3 rounded-lg hover:bg-[#075c9c] transition-colors font-medium">
                        Selecionar Voo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}