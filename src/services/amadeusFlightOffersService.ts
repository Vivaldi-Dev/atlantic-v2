import axios, { AxiosError } from "axios";
import { FlightOffersRequest, FlightOffersResponse } from "../types/amadeus";

export class AmadeusFlightOffersService {
  static async searchFlightOffers(
    accessToken: string,
    body: FlightOffersRequest
  ): Promise<FlightOffersResponse> {
    try {
      const response = await axios.post<FlightOffersResponse>(
        `/api/amadeus/flights/offers`,
        body
      );

      return response.data; 
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;

      console.error(
        "Erro ao buscar Flight Offers (POST):",
        err.response?.data || err.message
      );

      throw new Error("Falha ao buscar ofertas de voo (POST)");
    }
  }
}
