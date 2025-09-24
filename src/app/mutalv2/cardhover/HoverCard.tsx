"use client"

interface HoverCardProps {
    title: string;
    description: string;
}

const HoverCard = ({ title, description }: HoverCardProps) => {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4 rounded-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-center mb-2">{title}</h3>
            <p className="text-sm text-center">{description}</p>
            <button className="mt-3 bg-[#F7D007] text-black px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-600 transition duration-200">
                Ver Detalhes
            </button>
        </div>
    );
};