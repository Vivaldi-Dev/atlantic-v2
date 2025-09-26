import { useEffect, useState } from "react";
import { AmadeusFlightOffersService } from "../services/amadeusFlightOffersService";
import { FlightOffersRequest, FlightOffersResponse } from "../types/amadeus";

export function useFlightOffers(
  accessToken: string | null,
  request: FlightOffersRequest | null
) {
  const [data, setData] = useState<FlightOffersResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken || !request) return;

    setLoading(true);
    AmadeusFlightOffersService.searchFlightOffers(accessToken, request)
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [accessToken, request]);

  return { data, loading, error };
}
