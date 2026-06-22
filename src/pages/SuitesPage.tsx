import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ROOMS } from "../guesthouseData";

export default function SuitesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg"
          alt="Luxury Suites" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            Boutique Accommodation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            Our <span className="italic text-luxury-gold">Suites</span>
          </h1>
          <p className="mt-4 text-sm text-luxury-cream/70 font-light max-w-xl">
            Three distinctive spaces, each crafted for complete rest and productivity.
          </p>
        </div>
      </section>

      {/* Suite Cards Grid */}
      <section className="py-20 px-6 lg:px-16 bg-luxury-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
              Accoutred With Fine Furnishings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">
              Choose Your Sanctuary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <Link key={room.id} to={`/suites/${room.id}`}
                className="group flex flex-col bg-white border border-luxury-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  <img src={room.image} alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-black/5 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-luxury-gold fill-luxury-gold" />
                      <span className="text-xs font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-medium tracking-tight text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-luxury-charcoal/30 mt-1">
                    City View Guest House • Braeside
                  </p>
                  <p className="text-xs text-luxury-slate/70 font-light mt-3 flex-1 leading-relaxed">
                    {room.tagline}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-luxury-border mt-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-luxury-charcoal">{room.rate}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-luxury-gold opacity-0 group-hover:opacity-100 transition-all">
                      View Suite &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-charcoal text-center px-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">Not Sure Which Suite Suits You?</h2>
        <p className="text-xs text-gray-400 font-light mt-3 max-w-md mx-auto">
          Contact our concierge team for a personalized recommendation based on your needs.
        </p>
        <a href={`https://wa.me/263780096836?text=${encodeURIComponent("Hello City View Guest House, I need help choosing the right suite for my stay.")}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 bg-luxury-gold hover:bg-white text-white hover:text-luxury-charcoal font-mono text-[10px] uppercase tracking-widest font-semibold transition-all">
          Chat with Concierge
        </a>
      </section>
    </div>
  );
}
