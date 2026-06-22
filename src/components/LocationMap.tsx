import { motion } from "motion/react";
import { MapPin, Phone, Mail, CalendarDays } from "lucide-react";

export default function LocationMap() {
  return (
    <section id="location" className="py-20 bg-white border-t border-luxury-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Guide Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block font-semibold">
              Strategic Harare Proximity
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-luxury-charcoal">
              Quiet residential sanctuary in Braeside
            </h2>
            <p className="text-xs text-luxury-slate/85 font-light leading-relaxed">
              City View Guest House is excellently positioned. Located in Harare's historic Braeside suburb, we offer travelers absolute silence and secure neighborhood strolls, completely separated from the noise of the main central business district.
            </p>

            {/* Distances List */}
            <div className="border-t border-luxury-border pt-6 space-y-3 font-mono text-[11px] text-luxury-slate/90">
              <div className="flex justify-between items-center py-1">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Harare Central Business District</span>
                <span className="font-bold text-luxury-charcoal">10 Minutes Dr.</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Robert Gabriel Mugabe Int Airport</span>
                <span className="font-bold text-luxury-charcoal">15 Minutes Dr.</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Chapman Golf Club (Pristine Fairways)</span>
                <span className="font-bold text-luxury-charcoal">8 Minutes Dr.</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Eastgate Shopping Centre & Retail</span>
                <span className="font-bold text-luxury-charcoal">9 Minutes Dr.</span>
              </div>
            </div>

            {/* Shuttle Promotion card */}
            <div className="p-5 bg-luxury-sand border border-[#F0EBE6] text-[11px] leading-relaxed rounded-none">
              <span className="font-bold text-luxury-gold block uppercase font-mono mb-1">Airport Transit Coordination</span>
              <p className="text-luxury-slate font-light text-[11px]">
                Take advantage of our reliable private chauffeur. Specify your landing timetable when drafting your reservation, and our team will coordinate a seamless greeting at Harare Int Airport.
              </p>
            </div>
          </div>

          {/* Virtual Map / High-End Design block */}
          <div className="lg:col-span-6 bg-luxury-cream border border-luxury-border p-8 relative flex flex-col justify-between h-[400px]">
            <div className="absolute inset-0 bg-[#F5F2EF] rounded-none overflow-hidden flex flex-col p-6 text-center justify-center items-center">
              <div className="absolute top-4 left-4 z-10 bg-luxury-charcoal text-[#FDFCFB] px-3 py-1 font-mono text-[9px] tracking-widest uppercase">
                Harare Suburbs Map
              </div>
              {/* Clean wire representation */}
              <div className="w-16 h-16 rounded-none bg-white flex items-center justify-center mb-4 border border-[#F0EBE6]">
                <MapPin className="text-luxury-gold" size={28} />
              </div>
              <span className="font-serif text-lg text-luxury-charcoal font-semibold tracking-tight">City View Boutique Guest House</span>
              <span className="font-mono text-[10px] text-luxury-gold mt-1">Braeside, Harare, Zimbabwe</span>
              <p className="text-[11px] text-luxury-slate/60 font-light max-w-sm mt-3 font-sans leading-relaxed">
                Highly accessible, safe, and peaceful residential neighborhood layout. Closed parameters. Premium concierge gated checkpoint.
              </p>
              <div className="mt-6 flex gap-3">
                <span className="text-[10px] bg-white border border-[#F0EBE6] text-[11px] text-luxury-slate px-3 py-1 font-mono">Quiet Zone</span>
                <span className="text-[10px] bg-white border border-[#F0EBE6] text-[11px] text-luxury-slate px-3 py-1 font-mono">Level 4 Security</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
