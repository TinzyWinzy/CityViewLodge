import { motion } from "motion/react";
import { ShieldCheck, Sun, Droplet, Wifi, Car, Coffee, Users, MapPin } from "lucide-react";
import { LIFESTYLE_FEATURES } from "../guesthouseData";

export default function LifestyleFeatures() {
  return (
    <section className="py-20 bg-luxury-cream px-6 lg:px-16 border-t border-b border-luxury-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Headline */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
            Uncompromising Quality Stays
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal max-w-2xl mx-auto leading-tight">
            The Harare Experience, Curated For Complete Rest
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Grid Layout mimicking UnikVilla's massive clean separation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {LIFESTYLE_FEATURES.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white border border-luxury-border p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-luxury-gold bg-luxury-sand border border-luxury-gold/25 px-2.5 py-1 inline-block mb-6">
                  {feature.badge}
                </span>
                <h3 className="font-serif text-xl font-medium tracking-tight text-luxury-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-xs text-luxury-slate/85 font-light leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
              {/* Visual Accent */}
              <div className="w-full h-[1px] bg-gray-100 mt-8 relative">
                <div className="absolute right-0 top-[-4px] w-2 h-2 rounded-full bg-luxury-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick statement on Boreholes / Power system (highly relevant local Harare factors) */}
        <div className="mt-16 bg-white p-6 sm:p-10 border border-luxury-border flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex gap-4 items-start max-w-2xl">
            <div className="p-3 bg-luxury-cream text-luxury-gold font-serif text-xl border border-luxury-border font-bold">
              Ø
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-luxury-charcoal">
                Uninterrupted Global Business Infrastructure
              </h4>
              <p className="text-xs text-luxury-slate/75 font-light leading-relaxed mt-1 font-sans">
                Unlike conventional Harare guest houses, City View features a specialized premium solar battery power grid configuration. We guarantee 100% active high-speed fiber Internet and secure en-suite hot showers at any hour, regardless of utility grid constraints.
              </p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 font-mono uppercase tracking-widest text-xs font-semibold text-luxury-gold hover:text-luxury-charcoal transition-colors border-b-2 border-luxury-gold py-1 cursor-pointer"
          >
            Secure dates &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
