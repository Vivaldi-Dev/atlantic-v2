"use client";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { MapPin, PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import { FlightOffersRequest } from "@/types/amadeus"; 

type FormValues = {
  origem: string;
  destino: string;
  dataInicio: Date | null;
  dataFim: Date | null;
  adultos: number;
  criancas: number;
  idaEVolta: boolean;
  soIda: boolean;
};

export default function Voo() {
  const { register, handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      origem: "",
      destino: "",
      dataInicio: null,
      dataFim: null,
      adultos: 1,
      criancas: 0,
      idaEVolta: true,
      soIda: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    const request: FlightOffersRequest = {
      currencyCode: "EUR",
      originDestinations: [
        {
          id: "1",
          originLocationCode: data.origem.toUpperCase(),
          destinationLocationCode: data.destino.toUpperCase(),
          departureDateTimeRange: {
            date: data.dataInicio
              ? data.dataInicio.toISOString().split("T")[0]
              : "",
          },
        },
        ...(data.idaEVolta && data.dataFim
          ? [
              {
                id: "2",
                originLocationCode: data.destino.toUpperCase(),
                destinationLocationCode: data.origem.toUpperCase(),
                departureDateTimeRange: {
                  date: data.dataFim.toISOString().split("T")[0],
                },
              },
            ]
          : []),
      ],
      travelers: [
        ...Array.from({ length: data.adultos }).map((_, i) => ({
          id: `${i + 1}`,
          travelerType: "ADULT" as const,
          fareOptions: ["STANDARD"],
        })),
        ...Array.from({ length: data.criancas }).map((_, i) => ({
          id: `${data.adultos + i + 1}`,
          travelerType: "CHILD" as const,
          fareOptions: ["STANDARD"],
        })),
      ],
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 10,
      },
    };

    console.log("Payload Amadeus:", request);
    // aqui você pode chamar o hook useFlightOffers(accessToken, request)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md sm:grid-cols-4 items-start rounded-lg p-2 md:p-6 gap-5">

      <div className="space-y-4">
        <div className="relative">
          <label
            className="block text-black font-medium text-start mb-2"
            htmlFor="origem">
            Origem
          </label>
          <MapPin className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-400" size={20}/>
          <input
            id="origem"
            type="text"
            placeholder="Origem (ex: LIS)"
            {...register("origem", { required: true })}
            className="pl-10 px-4 py-3 w-full rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#0871B5] transition-all"
          />
        </div>

        <div className="relative">
          <PlaneTakeoff
            className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400"
            size={20}/>
          <input
            id="destino"
            type="text"
            placeholder="Destino (ex: PAR)"
            {...register("destino", { required: true })}
            className="pl-10 px-4 py-3 w-full rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#0871B5] transition-all"
          />
        </div>
      </div>


      <div className="space-y-4">
        <div>
          <label className="block text-black font-medium text-start mb-2">
            Data de Início
          </label>
          <div className="relative flex items-center bg-white border border-gray-300 rounded-lg w-full">
            <span className="absolute left-3 text-gray-500">
              <FaCalendarAlt />
            </span>
            <Controller
              control={control}
              name="dataInicio"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Data de início"
                  className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
          </div>
        </div>

        <div>
          <div className="relative flex items-center bg-white border border-gray-300 rounded-lg w-full">
            <span className="absolute left-3 text-gray-500">
              <FaCalendarAlt />
            </span>
            <Controller
              control={control}
              name="dataFim"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Data do fim"
                  className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                  dateFormat="dd/MM/yyyy"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
          </div>
        </div>
      </div>


      <div className="space-y-4">
        <div>
          <label className="block text-black font-medium text-start mb-2">
            Passageiros
          </label>

          <div className="relative flex items-center bg-white border border-gray-300 rounded-lg mb-3">
            <span className="absolute left-3 text-gray-600">
              <Image
                src="/icons/adulto.png"
                alt="Adulto"
                width={16}
                height={16}/>
            </span>
            <input
              type="number"
              min={1}
              placeholder="Adultos"
              {...register("adultos", { valueAsNumber: true })}
              className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
            />
          </div>

          <div className="relative flex items-center bg-white border border-gray-300 rounded-lg">
            <span className="absolute left-3 text-gray-600">
              <Image
                src="/icons/person.png"
                alt="Criança"
                width={16}
                height={16}/>
            </span>
            <input
              type="number"
              min={0}
              placeholder="Crianças"
              {...register("criancas", { valueAsNumber: true })}
              className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
            />
          </div>
        </div>
      </div>


      <div>
        <div className="md:mt-7 md:mb-3">
          <label className="flex items-center gap-3 text-sm font-medium text-gray-700  rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              {...register("idaEVolta")}
              className="accent-[#0871B5] h-4 w-4"
            />
            <span>Ida e Volta</span>
          </label>
        </div>

        <div className="md:mb-4">
          <label className="flex items-center gap-3 text-sm font-medium text-gray-700  rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              {...register("soIda")}
              className="accent-[#0871B5] h-4 w-4"
            />
            <span>Só Ida</span>
          </label>
        </div>

        <button type="submit"
          className="py-2 px-2 md:px-6 md:py-3 bg-[#0871B5] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Pesquisar Voos
        </button>
      </div>
    </form>
  );
}
