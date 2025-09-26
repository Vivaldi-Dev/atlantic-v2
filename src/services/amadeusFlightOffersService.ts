import axios from "axios";
import { FlightOffersRequest, FlightOffersResponse } from "../types/amadeus";

export class AmadeusFlightOffersService {

  static async searchFlightOffers(accessToken: string,body: FlightOffersRequest): Promise<FlightOffersResponse> {
    try {
      const response = await axios.post<FlightOffersResponse>( `/api/amadeus/flights/offers`,
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/vnd.amadeus+json",
            "X-HTTP-Method-Override": "POST",
          },
        }
      );

      return {
        ...response.data,
        data: response.data.data ? [response.data.data[0]] : [],
      };
    } catch (error: any) {
      console.error(
        "Erro ao buscar Flight Offers (POST):",
        error.response?.data || error.message
      );
      throw new Error("Falha ao buscar ofertas de voo (POST)");
    }
  }
}
