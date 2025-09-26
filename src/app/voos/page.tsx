"use client";

import { useSearchParams } from "next/navigation";
import { useFlightOffers } from "@/hooks/useFlightOffers";
import { FlightOffersRequest } from "@/types/amadeus";

export default function VoosPage() {
  const searchParams = useSearchParams();
  const requestParam = searchParams.get("request");

  const request: FlightOffersRequest | null = requestParam
    ? JSON.parse(decodeURIComponent(requestParam))
    : null;

  const { data, loading, error } = useFlightOffers("dummy", request);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Resultados da Pesquisa</h1>

      {loading && <p className="text-blue-600">Buscando voos...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {data?.data && data.data.length > 0 ? (
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
      )}
    </div>
  );
}
