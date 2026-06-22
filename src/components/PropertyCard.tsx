import { Star } from "lucide-react";

interface PropertyCardProps {
  roomType: {
    id: string;
    name: string;
    basePrice: string;
    rating: number;
    image: string;
  };
}

export default function PropertyCard({ roomType }: PropertyCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden border-none bg-white shadow-md hover:shadow-2xl hover:shadow-luxury-gold/10 transition-all duration-500 hover:-translate-y-1">
      <a href={`/properties/${roomType.id}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] sm:h-72 w-full overflow-hidden">
          <img
            src={roomType.image}
            alt={roomType.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-luxury-gold fill-luxury-gold" />
              <span className="text-xs font-bold">{roomType.rating?.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="flex-grow p-6 space-y-3">
          <h3 className="font-serif text-xl font-medium tracking-tight text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
            {roomType.name}
          </h3>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-luxury-charcoal/30">
            City View Guest House • Braeside
          </p>

          <div className="pt-3 flex items-center justify-between border-t border-luxury-border">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-luxury-charcoal">{roomType.basePrice}</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-luxury-charcoal/30">/ night</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              View &rarr;
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
