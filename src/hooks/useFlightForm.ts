import { useState, useCallback } from 'react';
import { FlightOffersSearch } from '../types/flight-offers-request';

interface FlightFormState {
  origem: string;
  destino: string;
  dataInicio: Date | null;
  dataFim: Date | null;
  adultos: number;
  criancas: number;
  tipoVoo: 'IDA_VOLTA' | 'SO_IDA';
}

export const useFlightForm = () => {
  const [formState, setFormState] = useState<FlightFormState>({
    origem: '',
    destino: '',
    dataInicio: null,
    dataFim: null,
    adultos: 1,
    criancas: 0,
    tipoVoo: 'IDA_VOLTA',
  });

  const updateFormState = useCallback((updates: Partial<FlightFormState>) => {
    setFormState(prev => ({ ...prev, ...updates }));
  }, []);

  const convertToSearchData = useCallback((): FlightOffersSearch | null => {
    if (!formState.origem || !formState.destino || !formState.dataInicio) {
      return null;
    }

    if (formState.tipoVoo === 'IDA_VOLTA' && !formState.dataFim) {
      return null;
    }

    const formatDate = (date: Date) => date.toISOString().split('T')[0];
    const formatTime = (date: Date) => date.toTimeString().split(' ')[0];

    const originDestinations = [];


    originDestinations.push({
      id: '1',
      originLocationCode: formState.origem.toUpperCase(),
      destinationLocationCode: formState.destino.toUpperCase(),
      departureDateTimeRange: {
        date: formatDate(formState.dataInicio),
        time: formatTime(formState.dataInicio),
      },
    });


    if (formState.tipoVoo === 'IDA_VOLTA' && formState.dataFim) {
      originDestinations.push({
        id: '2',
        originLocationCode: formState.destino.toUpperCase(),
        destinationLocationCode: formState.origem.toUpperCase(),
        departureDateTimeRange: {
          date: formatDate(formState.dataFim),
          time: formatTime(formState.dataFim),
        },
      });
    }

    const travelers = [];


    for (let i = 0; i < formState.adultos; i++) {
      travelers.push({
        id: (i + 1).toString(),
        travelerType: 'ADULT' as const,
        fareOptions: ['STANDARD'],
      });
    }


    for (let i = 0; i < formState.criancas; i++) {
      travelers.push({
        id: (formState.adultos + i + 1).toString(),
        travelerType: 'CHILD' as const,
        fareOptions: ['STANDARD'],
      });
    }

    return {
      currencyCode: 'MZN',
      originDestinations,
      travelers,
      sources: ['GDS'],
      searchCriteria: {
        maxFlightOffers: 50,
        flightFilters: {

        },
      },
    };
  }, [formState]);

  return {
    formState,
    updateFormState,
    convertToSearchData,
  };
};