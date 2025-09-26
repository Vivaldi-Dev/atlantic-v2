"use client";

import { useSearchParams } from "next/navigation";
import { useFlightOffers } from "@/hooks/useFlightOffers";
import { FlightOffersRequest } from "@/types/amadeus";
import FlyBanner from "./components/banner/FlyBanner";
import { FiChevronDown } from "react-icons/fi";
import { ChevronLeft, ChevronRight, ChevronDown, Sliders, X, Plane } from 'lucide-react';

export default function VoosPage() {
  const searchParams = useSearchParams();
  const requestParam = searchParams.get("request");

  const request: FlightOffersRequest | null = requestParam
    ? JSON.parse(decodeURIComponent(requestParam))
    : null;

  const { data, loading, error } = useFlightOffers("dummy", request);

  return (
    <div className=" space-y-20  ">
      <h1 className="text-2xl font-bold">Resultados da Pesquisa</h1>

      {loading && <p className="text-blue-600">Buscando voos...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* {data?.data && data.data.length > 0 ? (
        <div className="grid gap-4">
          {data.data.map((offer, i) => (
            <div key={i} className="p-4 border rounded-lg shadow bg-white">
              <h2 className="font-semibold">Oferta #{i + 1}</h2>
              <pre className="text-sm text-gray-700">
                {JSON.stringify(offer, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>Nenhum voo encontrado.</p>
      )} */}


      {/* <div>
        <FlyBanner />
      </div> */}


      <div className="flex items-center gap-4 p-8 w-full">
        <div className="xl:w-60 2xl:w-80">
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
            <div className="">

              <div className="bg-[#EEEEEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Plane size={24} className="text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Airlink & LAM Mozambique
                          </h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 bg-green-100 text-green-800">
                            Voo Direto
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex w-full items-center relative">

                        <div className="2xl:w-5xl xl:w-4xl border-r p-4 ">
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="text-2xl font-bold text-gray-900">15:45</div>
                              <div className="text-xs text-gray-500">MPM</div>
                              <div className="text-xs text-gray-400">27 Set 2025</div>
                            </div>

                            <div className="mx-4 flex-1 text-center">
                              <div className="text-xs text-gray-500">1h 05min</div>
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
                              <div className="text-2xl font-bold text-gray-900">16:50</div>
                              <div className="text-xs text-gray-500">JNB</div>
                              <div className="text-xs text-gray-400">27 Set 2025</div>
                            </div>
                          </div>

                          <div className="mt-1 text-xs text-gray-500 text-center">
                            Maputo, Moçambique → Johannesburg, África do Sul
                          </div>

                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="text-left">
                                <div className="text-2xl font-bold text-gray-900">17:35</div>
                                <div className="text-xs text-gray-500">MPM</div>
                                <div className="text-xs text-gray-400">30 Set 2025</div>
                              </div>

                              <div className="mx-4 flex-1 text-center">
                                <div className="text-xs text-gray-500">1h 10min</div>
                                <div className="relative mt-1">
                                  <div className="border-t-2 border-gray-200 w-full"></div>
                                  <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-green-500"></div>
                                  <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-green-500"></div>
                                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Plane size={16} className="text-green-500" />
                                  </div>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">18:45</div>
                                <div className="text-xs text-gray-500">JNB</div>
                                <div className="text-xs text-gray-400">30 Set 2025</div>
                              </div>
                            </div>

                            <div className="mt-1 text-xs text-gray-500 text-center">
                              Maputo, Moçambique → Johannesburg, África do Sul
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-0 xl:right-0 2xl:right-20 p-8">
                          <p>A partir de</p>
                          <p className="text-md">MNZ 185,000</p>
                          <button>Selcionar</button>
                        </div>


                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}
