// ==========================
// REQUEST
// ==========================

export interface FlightOffersRequest {
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
  departureDateTimeRange: {
    date: string;
    time?: string;
  };
}

export interface Traveler {
  id: string;
  travelerType: "ADULT" | "CHILD" | "SENIOR";
  fareOptions: string[];
}

export interface SearchCriteria {
  maxFlightOffers: number;
  flightFilters?: FlightFilters;
}

export interface FlightFilters {
  cabinRestrictions?: CabinRestriction[];
  carrierRestrictions?: {
    excludedCarrierCodes: string[];
  };
}

export interface CabinRestriction {
  cabin: string;
  coverage: string;
  originDestinationIds: string[];
}

// ==========================
// RESPONSE
// ==========================

export interface FlightOffersResponse {
  meta: {
    count: number;
  };
  data: FlightOffer[];
  dictionaries: Dictionaries;
}

export interface FlightOffer {
  type: "flight-offer";
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  isUpsellOffer: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  numberOfBookableSeats: number;
  itineraries: Itinerary[];
  price: Price;
  pricingOptions: PricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: TravelerPricing[];
}

export interface Itinerary {
  duration: string;
  segments: Segment[];
}

export interface Segment {
  departure: LocationInfo;
  arrival: LocationInfo;
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
}

export interface LocationInfo {
  iataCode: string;
  terminal?: string;
  at: string;
}

export interface Price {
  currency: string;
  total: string;
  base: string;
  fees?: { amount: string; type: string }[];
  grandTotal: string;
}

export interface PricingOptions {
  fareType: string[];
  includedCheckedBagsOnly: boolean;
}

export interface TravelerPricing {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: {
    currency: string;
    total: string;
    base: string;
  };
  fareDetailsBySegment: FareDetail[];
}

export interface FareDetail {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  class: string;
  includedCheckedBags?: {
    weight?: number;
    quantity?: number;
    weightUnit?: string;
  };
  includedCabinBags?: {
    weight?: number;
    weightUnit?: string;
  };
}

export interface Dictionaries {
  locations: Record<string, { cityCode: string; countryCode: string }>;
  aircraft: Record<string, string>;
  currencies: Record<string, string>;
  carriers: Record<string, string>;
}
