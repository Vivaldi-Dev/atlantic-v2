
import axios from 'axios';
import { FlightOffersSearch } from '../types/flight-offers-request';
import { FlightOffersResponse } from '../types/flight-offers-response';

const API_BASE_URL = 'http://localhost:4000/api/amadeus';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, 
});


api.interceptors.request.use(
  (config) => {
    console.log('Enviando requisição:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('Resposta recebida:', response.status);
    return response;
  },
  (error) => {
    console.error('Erro na resposta:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export class FlightOffersService {

  async searchFlights(searchData: FlightOffersSearch): Promise<FlightOffersResponse> {
    try {
      const response = await api.post<FlightOffersResponse>('/flights/offers', searchData);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }


  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      switch (status) {
        case 400:
          throw new Error(`Dados inválidos: ${message}`);
        case 404:
          throw new Error(`Endpoint não encontrado: ${message}`);
        case 500:
          throw new Error(`Erro interno do servidor: ${message}`);
        case 503:
          throw new Error(`Serviço indisponível: ${message}`);
        default:
          throw new Error(`Erro na requisição: ${message}`);
      }
    }
    
    throw new Error('Erro desconhecido ao buscar ofertas de voos');
  }
}


export const flightOffersService = new FlightOffersService();