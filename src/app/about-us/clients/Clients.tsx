'use client'
import Image from "next/image"
export default function Clients() {

    const clients: string[] = [
        '/images/img82.png', '/images/img56.png', '/images/img58.png', '/images/img59.png',
        '/images/img80.png', '/images/img60.png', '/images/Frames16.png', '/images/img62.png',
        '/images/img63.png', '/images/img64.png', '/images/img66.png', '/images/img75.png',
        '/images/img77.png', '/images/img78.jpg', '/images/img76.png', '/images/img79.png',
        '/images/img81.png', '/images/img22.png'
    ];

    const carouselImages: string[][] = [
        clients.slice(0, 6),
        clients.slice(6, 12),
        clients.slice(12, 18)
    ];

    return (
        <div className="grid grid-cols-2 max-w-[1640px] px-4 mx-auto items-center">
            <div className="text-center">
                <p className="Roboto text-5xl">Nossos Clientes</p>
            </div>

            <div className="space-y-8">
                {carouselImages.map((imageGroup, groupIndex) => (
                    <TrainStationCarousel
                        key={groupIndex}
                        images={imageGroup}
                        direction={groupIndex % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </div>
    );
}

interface TrainStationCarouselProps {
    images: string[];
    direction: "left" | "right";
}

function TrainStationCarousel({ images, direction }: TrainStationCarouselProps) {
    return (
        <div className="overflow-hidden relative w-full">
            <div
                className={`
                    flex gap-6 w-max 
                    ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
                `}>
                {[...images, ...images].map((client, index) => (
                    <Image
                        width={200}
                        height={200}
                        key={index}
                        src={client}
                        alt={`Client ${index + 1}`}
                        className="h-20 w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    />
                ))}
            </div>
        </div>
    );
}