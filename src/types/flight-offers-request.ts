
export interface FlightOffersSearch {
  currencyCode: string;
  originDestinations: OriginDestination[];
  travelers: Traveler[];
  sources: string[];
  searchCriteria: SearchCriteria;
}

export interface OriginDestination {
  id: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDateTimeRange: DateTimeRange;
}

export interface DateTimeRange {
  date: string; 
  time: string; 
}

export interface Traveler {
  id: string;
  travelerType: "ADULT" | "CHILD" | "SENIOR" | "YOUNG" | "HELD_INFANT" | "SEATED_INFANT" | "STUDENT";
  fareOptions: string[];
}

export interface SearchCriteria {
  maxFlightOffers: number;
  flightFilters: FlightFilters;
}

export interface FlightFilters {
  cabinRestrictions?: CabinRestriction[];
  carrierRestrictions?: CarrierRestrictions;
}

export interface CabinRestriction {
  cabin: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
  coverage: "MOST_SEGMENTS" | "AT_LEAST_ONE_SEGMENT" | "ALL_SEGMENTS";
  originDestinationIds: string[];
}

export interface CarrierRestrictions {
  excludedCarrierCodes?: string[];
  includedCarrierCodes?: string[];
  preferredCarrierCodes?: string[];
}