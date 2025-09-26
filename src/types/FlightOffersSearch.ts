interface FlightOffersSearch {
  currencyCode: string;
  originDestinations: OriginDestination[];
  travelers: Traveler[];
  sources: string[];
  searchCriteria: SearchCriteria;
}

interface OriginDestination {
  id: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDateTimeRange: DateTimeRange;
}

interface DateTimeRange {
  date: string; 
  time: string; 
}

interface Traveler {
  id: string;
  travelerType: "ADULT" | "CHILD" | "SENIOR" | "YOUNG" | "HELD_INFANT" | "SEATED_INFANT" | "STUDENT";
  fareOptions: string[];
}

interface SearchCriteria {
  maxFlightOffers: number;
  flightFilters: FlightFilters;
}

interface FlightFilters {
  cabinRestrictions?: CabinRestriction[];
  carrierRestrictions?: CarrierRestrictions;
}

interface CabinRestriction {
  cabin: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
  coverage: "MOST_SEGMENTS" | "AT_LEAST_ONE_SEGMENT" | "ALL_SEGMENTS";
  originDestinationIds: string[];
}

interface CarrierRestrictions {
  excludedCarrierCodes?: string[];
  includedCarrierCodes?: string[];
  preferredCarrierCodes?: string[];
}