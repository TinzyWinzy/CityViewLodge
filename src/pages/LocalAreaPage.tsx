import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { MapPin, Navigation, ShoppingBag, TreePine, Landmark, Plane } from "lucide-react";
import { LOCAL_ATTRACTIONS } from "../guesthouseData";

const categoryIcons: Record<string, typeof MapPin> = {
  "City Access": Navigation,
  Transit: Plane,
  Leisure: Landmark,
  Shopping: ShoppingBag,
  Nature: TreePine,
  Culture: Landmark,
};

const categoryGradients: Record<string, string> = {
  "City Access": "from-luxury-gold/10 to-transparent",
  Transit: "from-blue-50 to-transparent",
  Leisure: "from-emerald-50 to-transparent",
  Shopping: "from-luxury-sand to-transparent",
  Nature: "from-green-50 to-transparent",
  Culture: "from-amber-50 to-transparent",
};

export default function LocalAreaPage() {
  const grouped = LOCAL_ATTRACTIONS.reduce<Record<string, typeof LOCAL_ATTRACTIONS>>((acc, a) => {
    (acc[a.category] = acc[a.category] || []).push(a);
    return acc;
  }, {});

  return (
    <div>
      <Helmet>
        <title>Local Area | Braeside Harare | City View Guest House</title>
        <meta name="description" content="Explore everything around City View Guest House in Braeside, Harare. Shopping at Eastgate, Chapman Golf Club, National Botanic Gardens, airport access, and more." />
        <link rel="canonical" href="https://www.cityviewguesthouse.co.zw/local-area" />
        <meta property="og:title" content="Local Area Guide | Braeside, Harare" />
        <meta property="og:description" content="Discover Harare's best attractions near City View Guest House — golf, shopping, nature, dining, and transit. All within 8-18 minutes." />
        <meta property="og:url" content="https://www.cityviewguesthouse.co.zw/local-area" />
      </Helmet>

      <section className="relative h-[40vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/outsideview.jpg" alt="Braeside Harare neighborhood"
          className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            Discover Braeside
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            Your Local <span className="italic text-luxury-gold">Area Guide</span>
          </h1>
          <p className="mt-4 text-sm text-luxury-cream/70 font-light max-w-xl">
            Everything you need around City View Guest House — from golf to gardens, shopping to shuttles.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">Prime Location</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">
              Everything Within Reach
            </h2>
            <p className="text-xs text-luxury-slate/60 font-light max-w-md mx-auto mt-3 leading-relaxed">
              City View Guest House is strategically located in Braeside — a quiet residential suburb just minutes from everything Harare has to offer.
            </p>
          </div>

          <div className="bg-luxury-sand border border-luxury-border p-6 mb-12 flex flex-col sm:flex-row items-start gap-4">
            <MapPin className="text-luxury-gold shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-serif text-lg font-medium text-luxury-charcoal">20 Sandhurst Way, Braeside</h3>
              <p className="text-xs text-luxury-slate/70 font-light mt-1 leading-relaxed">
                Our Braeside location places you in Harare's most sought-after residential pocket — whisper-quiet at night, yet 10 minutes from the CBD and 15 minutes from the airport.
              </p>
            </div>
          </div>

          {Object.entries(grouped).map(([category, attractions]) => {
            const Icon = categoryIcons[category] || MapPin;
            return (
              <div key={category} className="mb-12">
                <div className={`flex items-center gap-3 mb-6 bg-gradient-to-r ${categoryGradients[category]} p-4 border-l-2 border-luxury-gold`}>
                  <Icon className="text-luxury-gold" size={20} />
                  <h3 className="font-serif text-xl font-medium text-luxury-charcoal">{category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attractions.map((attraction, idx) => (
                    <motion.div
                      key={attraction.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white border border-luxury-border p-5 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-semibold text-luxury-charcoal">{attraction.name}</h4>
                          <p className="text-[11px] text-luxury-slate/65 font-light mt-1.5 leading-relaxed">
                            {attraction.description}
                          </p>
                        </div>
                        <span className="shrink-0 bg-luxury-charcoal text-white font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 whitespace-nowrap">
                          {attraction.distance}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-luxury-charcoal text-center px-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">Ready to Explore Harare?</h2>
        <p className="text-xs text-gray-400 font-light mt-3 max-w-md mx-auto">
          Book your stay at City View Guest House and discover everything Braeside has to offer.
        </p>
        <a href="https://wa.me/263780096836" target="_blank" rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 bg-luxury-gold hover:bg-white text-white hover:text-luxury-charcoal font-mono text-[10px] uppercase tracking-widest font-semibold transition-all">
          Book via WhatsApp
        </a>
      </section>
    </div>
  );
}
