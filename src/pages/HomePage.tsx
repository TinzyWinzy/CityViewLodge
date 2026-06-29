import { useState, useRef, useEffect, useMemo, type RefObject, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck, Sun, Droplet, Wifi, Coffee, Car, Calendar, Users, MapPin, Star,
  ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal, CalendarDays,
  Check, Phone, Mail, ArrowRight, Info, Clock, Shield, Utensils,
  Maximize2, Plane,
} from "lucide-react";
import { ROOMS, LIFESTYLE_FEATURES, GENERAL_AMENITIES, REVIEWS } from "../guesthouseData";
import { generateWhatsAppLink } from "../whatsappUtility";
import Hero from "../components/Hero";
import { useToast } from "../components/Layout";
import SeoSchema from "../components/SeoSchema";

export default function HomePage() {
  const { showToast } = useToast();
  const [activeCategory, setActiveCategory] = useState<"All" | "General" | "Comfort" | "Utility">("All");
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(ROOMS[0].id);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].name);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [customRequest, setCustomRequest] = useState("");
  const [includeShuttle, setIncludeShuttle] = useState(false);
  const [includeBreakfast, setIncludeBreakfast] = useState(false);

  const selectedRoomData = useMemo(() => ROOMS.find((r) => r.name === selectedRoom), [selectedRoom]);
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const s = new Date(checkIn), e = new Date(checkOut);
    const diff = Math.ceil((e.getTime() - s.getTime()) / 86400000);
    return Math.max(0, diff);
  }, [checkIn, checkOut]);

  const baseRate = useMemo(() => {
    if (!selectedRoomData) return 0;
    const match = selectedRoomData.rate.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  }, [selectedRoomData]);

  const shuttleTotal = includeShuttle ? 15 : 0;
  const breakfastTotal = includeBreakfast ? 8 * nights : 0;
  const totalEstimate = (baseRate * nights) + shuttleTotal + breakfastTotal;
  const bookingFormRef = useRef<HTMLDivElement>(null);
  const suitesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const amenitiesRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleReviewPrev = () => setActiveReviewIndex((p) => (p === 0 ? REVIEWS.length - 1 : p - 1));
  const handleReviewNext = () => setActiveReviewIndex((p) => (p === REVIEWS.length - 1 ? 0 : p + 1));

  const handleSelectRoomForBooking = (roomName: string) => {
    setSelectedRoom(roomName);
    scrollToSection(bookingFormRef);
    showToast(`Pre-selected: ${roomName}. Fill in your dates to instantly draft your WhatsApp request!`);
  };

  const submitBookingRequest = (e: FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    const extras: string[] = [];
    if (includeShuttle) extras.push("Airport shuttle ($15)");
    if (includeBreakfast) extras.push(`Breakfast × ${nights} nights ($${breakfastTotal})`);
    const extrasMsg = extras.length ? ` Add-ons: ${extras.join(", ")}.` : "";
    const link = generateWhatsAppLink({
      roomName: selectedRoom, checkIn, checkOut, guests,
      customMessage: `Estimated total: $${totalEstimate}.${extrasMsg}${customRequest ? ` Special request: ${customRequest}.` : ""}`,
      pageContext: "Interactive Checkout Draft",
    });
    window.open(link, "_blank", "noopener,noreferrer");
    showToast("WhatsApp Booking draft generated! Opening secure connection...");
  };

  const filteredAmenities = GENERAL_AMENITIES.filter((a) => activeCategory === "All" || a.category === activeCategory);

  return (
    <div>
      <Helmet>
        <title>City View Guest House | Boutique Accommodation Harare, Zimbabwe</title>
        <meta name="description" content="Luxury boutique guest house in Braeside, Harare. Solar-powered, secure, with WhatsApp direct booking. From $80/night. 10 minutes from CBD." />
        <link rel="canonical" href="https://www.cityviewguesthouse.co.zw/" />
        <meta property="og:title" content="City View Guest House | Boutique Accommodation Harare" />
        <meta property="og:description" content="Solar-powered luxury in Braeside, Harare. Secure, quiet, 10 minutes from CBD. Book direct on WhatsApp." />
        <meta property="og:url" content="https://www.cityviewguesthouse.co.zw/" />
      </Helmet>
      <SeoSchema />
      <Hero />

      {/* Booking Form */}
      <section id="booking-form" ref={bookingFormRef} className="relative py-12 lg:py-20 px-6 lg:px-16 -mt-16 z-30 max-w-6xl mx-auto">
        <div className="bg-white border border-luxury-border shadow-xl p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between border-b border-luxury-border pb-8 mb-8">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-luxury-gold font-bold block mb-1">Active Reservation Portal</span>
              <h2 className="font-serif text-3xl font-medium tracking-tight">Pre-Draft Your Harare Stay</h2>
              <p className="text-xs text-luxury-slate/70 font-light mt-1 max-w-lg">
                Enter your desired dates. The dynamic booking generator will compile your inquiry and securely deliver it to our booking desk via WhatsApp.
              </p>
            </div>
            <div className="bg-luxury-sand border border-luxury-border px-5 py-3 flex items-center gap-3">
              <CalendarDays className="text-luxury-gold shrink-0" size={18} />
              <div className="text-[11px] font-mono tracking-wide text-luxury-charcoal/80">
                <span className="font-bold text-luxury-gold">FREE BOREHOLE WATER</span> & SOLAR POWER
              </div>
            </div>
          </div>

          <form onSubmit={submitBookingRequest} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <SlidersHorizontal size={12} /> Select Suite
                </label>
                <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal">
                  {ROOMS.map((r) => <option key={r.id} value={r.name}>{r.name} ({r.rate})</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Calendar size={12} /> Check-In
                </label>
                <input type="date" required value={checkIn} min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal" />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Calendar size={12} /> Check-Out
                </label>
                <input type="date" required value={checkOut} min={checkIn || new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal" />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Users size={12} /> Guests
                </label>
                <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal">
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults (Executive Lounge Ext)</option>
                </select>
              </div>
            </div>

            {/* Rate Calculator */}
            <div className="border border-luxury-border bg-luxury-sand p-5">
              <span className="text-[10px] uppercase font-mono tracking-[0.15em] text-luxury-gold font-semibold block mb-3 flex items-center gap-2">
                <CalendarDays size={13} /> Rate Calculator
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-[10px] font-mono text-luxury-slate/60">Base Rate</p>
                  <p className="font-serif text-lg font-semibold text-luxury-charcoal">
                    {selectedRoomData ? selectedRoomData.rate : "$0"}{nights > 0 && <span className="text-xs font-mono text-luxury-slate/60 font-light"> × {nights} {nights === 1 ? "night" : "nights"}</span>}
                  </p>
                </div>
                <div className="text-right sm:text-right">
                  <p className="text-[10px] font-mono text-luxury-slate/60">Room Total</p>
                  <p className="font-serif text-2xl font-bold text-luxury-charcoal">
                    {nights > 0 ? `$${baseRate * nights}` : "—"}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-luxury-border pt-3 mb-3">
                <label className="flex items-center gap-2 text-[10px] font-mono text-luxury-slate/80 cursor-pointer bg-white border border-luxury-border px-3 py-2 hover:bg-luxury-cream transition-colors">
                  <input type="checkbox" checked={includeShuttle} onChange={() => setIncludeShuttle(!includeShuttle)}
                    className="accent-luxury-gold" />
                  <Plane size={12} className="text-luxury-gold" /> Airport Shuttle <span className="text-luxury-gold">($15)</span>
                </label>
                <label className="flex items-center gap-2 text-[10px] font-mono text-luxury-slate/80 cursor-pointer bg-white border border-luxury-border px-3 py-2 hover:bg-luxury-cream transition-colors">
                  <input type="checkbox" checked={includeBreakfast} onChange={() => setIncludeBreakfast(!includeBreakfast)}
                    className="accent-luxury-gold" />
                  <Coffee size={12} className="text-luxury-gold" /> Breakfast <span className="text-luxury-gold">($8/night)</span>
                </label>
              </div>

              {nights > 0 && (includeShuttle || includeBreakfast) && (
                <div className="border-t border-luxury-border pt-3 mb-3 text-[10px] font-mono text-luxury-slate/70 space-y-1">
                  {includeShuttle && <div className="flex justify-between"><span>Airport Shuttle</span><span>$15</span></div>}
                  {includeBreakfast && <div className="flex justify-between"><span>Breakfast × {nights} {nights === 1 ? "night" : "nights"}</span><span>${breakfastTotal}</span></div>}
                </div>
              )}

              {nights > 0 && (
                <div className="border-t-2 border-luxury-gold pt-3 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-luxury-gold font-bold">Total Estimate</span>
                  <span className="font-serif text-2xl font-bold text-luxury-charcoal">${totalEstimate}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2">
                Special Requests (Optional)
              </label>
              <input type="text" placeholder="e.g. Airport Shuttle, vegetarian breakfast, early check-in..."
                value={customRequest} onChange={(e) => setCustomRequest(e.target.value)}
                className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs rounded-none outline-none text-luxury-charcoal" />
            </div>

            <div className="p-4 bg-luxury-cream border-l-2 border-luxury-gold text-[11px] font-mono leading-relaxed border-t border-b border-r border-[#F0EBE6]">
              <span className="font-bold text-luxury-gold uppercase block mb-1">WhatsApp Draft Preview:</span>
              <p className="text-luxury-slate italic">
                "Hello City View Guest House, I am interested in booking the *{selectedRoom}*.
                {checkIn && <> Check-in: *{checkIn}*, Check-out: *{checkOut}*, Guests: *{guests}*.</>}
                {nights > 0 && <> Estimated total: *${totalEstimate}*.</>}
                {includeShuttle && <> Airport shuttle requested.</>}
                {includeBreakfast && <> Breakfast included.</>}
                {customRequest && <> Special request: *{customRequest}*.</>} Could you check dates?"
              </p>
            </div>

            <div className="flex justify-end">
              <button type="submit"
                className="w-full lg:w-auto px-10 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg">
                Draft on WhatsApp Booking Desk &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-8 flex items-center justify-between">
        <p className="text-[11px] text-luxury-slate/50 font-mono italic flex-1">
          City View Guest House in Braeside, Harare offers solar-powered boutique accommodation with 24/7 security, borehole water, and fiber WiFi. Rooms from $30/night. Book direct via WhatsApp.
        </p>
        <span className="text-[9px] text-luxury-gold/40 font-mono uppercase tracking-wider shrink-0 ml-4">Updated June 2026</span>
      </div>

      {/* Lifestyle Features */}
      <section ref={aboutRef} className="py-20 bg-luxury-sand px-6 lg:px-16 border-t border-b border-luxury-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">Uncompromising Quality Stays</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal max-w-2xl mx-auto leading-tight">
              The Harare Experience, Curated For Complete Rest
            </h2>
            <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {LIFESTYLE_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white border border-luxury-border p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-luxury-gold bg-luxury-sand border border-luxury-gold/25 px-2.5 py-1 inline-block mb-6">
                    {feature.badge}
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-luxury-charcoal mb-4">{feature.title}</h3>
                  <p className="text-xs text-luxury-slate/85 font-light leading-relaxed font-sans">{feature.description}</p>
                </div>
                <div className="w-full h-[1px] bg-gray-100 mt-8 relative">
                  <div className="absolute right-0 top-[-4px] w-2 h-2 rounded-full bg-luxury-gold" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-6 sm:p-10 border border-luxury-border flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-4 items-start max-w-2xl">
              <div className="p-3 bg-luxury-cream text-luxury-gold font-serif text-xl border border-luxury-border font-bold">Ø</div>
              <div>
                <h4 className="font-serif text-base font-semibold text-luxury-charcoal">Uninterrupted Global Business Infrastructure</h4>
                <p className="text-xs text-luxury-slate/75 font-light leading-relaxed mt-1 font-sans">
                  Unlike conventional Harare guest houses, City View features a specialized premium solar battery power grid configuration. We guarantee 100% active high-speed fiber Internet and secure en-suite hot showers at any hour.
                </p>
              </div>
            </div>
            <button onClick={() => scrollToSection(bookingFormRef)}
              className="shrink-0 font-mono uppercase tracking-widest text-xs font-semibold text-luxury-gold hover:text-luxury-charcoal transition-colors border-b-2 border-luxury-gold py-1 cursor-pointer">
              Secure dates &rarr;
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-4 flex items-center justify-between">
        <p className="text-[11px] text-luxury-slate/50 font-mono italic flex-1">
          City View Guest House offers 10 boutique suites and rooms in Braeside, Harare including the Self Catering Cottage ($60/night), CBD Room ($45/night), and Transit Room ($30/night). All rooms include fiber WiFi, en-suite bathrooms, and solar-backed power.
        </p>
        <span className="text-[9px] text-luxury-gold/40 font-mono uppercase tracking-wider shrink-0 ml-4">Updated June 2026</span>
      </div>

      {/* Suites Showcase */}
      <section ref={suitesRef} className="py-20 px-6 lg:px-16 bg-luxury-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">Accoutred With Fine Furnishings</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">Luxury Boutique Suites & Twin Layouts</h2>
            </div>
            <p className="text-xs text-luxury-slate/60 font-light max-w-sm mt-4 md:mt-0 font-sans leading-relaxed">
              Every detail is chosen meticulously. Featuring custom orthopedic linens, premium hardware, private security enclosures, and beautiful garden vistas.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-8 border-b border-luxury-border pb-4">
            {ROOMS.map((room) => (
              <button key={room.id} onClick={() => setSelectedSuiteId(room.id)}
                className={`px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  selectedSuiteId === room.id ? "bg-luxury-charcoal text-white" : "bg-transparent text-luxury-charcoal hover:bg-luxury-sand"
                }`}>
                {room.name}
              </button>
            ))}
          </div>

          <div className="bg-white border border-luxury-border overflow-hidden shadow-sm">
            {ROOMS.map((room) => {
              if (room.id !== selectedSuiteId) return null;
              return (
                <div key={room.id} className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-auto overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 bg-luxury-charcoal/95 backdrop-blur-md border border-luxury-border text-[#FDFCFB] px-5 py-3 font-mono text-center">
                      <span className="text-[9px] uppercase tracking-[0.15em] block text-luxury-gold mb-0.5">Rate From</span>
                      <span className="text-base font-serif font-bold">{room.rate}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#FDFCFB]">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-luxury-gold">Signature Suite Accommodation</span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-luxury-charcoal mt-1 mb-2">{room.name}</h3>
                      <p className="text-xs font-serif italic text-luxury-gold tracking-wide mb-6">"{room.tagline}"</p>
                      <p className="text-xs text-luxury-slate/85 font-light leading-relaxed mb-8">{room.description}</p>

                      <div className="grid grid-cols-2 gap-4 border-t border-b border-luxury-border py-5 mb-8 font-mono text-[11px] text-luxury-slate/90">
                        <div><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Room Dimensions</span><span className="font-bold">{room.size}</span></div>
                        <div><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Bedding</span><span className="font-bold">{room.bedType}</span></div>
                        <div className="mt-2"><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Occupancy</span><span className="font-bold">{room.capacity}</span></div>
                        <div className="mt-2"><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Solar Air-con</span><span className="font-bold text-emerald-700">Included Continuous</span></div>
                      </div>

                      <div className="mb-8">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block mb-3">Amenities</span>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((a, k) => (
                            <span key={k} className="bg-luxury-sand border border-[#F0EBE6] text-luxury-slate px-3 py-1 text-[10px] font-mono">✓ {a}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={() => handleSelectRoomForBooking(room.name)}
                        className="flex-1 px-6 py-3.5 bg-luxury-charcoal text-white hover:bg-luxury-gold uppercase font-mono text-[10px] tracking-widest font-semibold transition-all cursor-pointer text-center">
                        Book via Concierge Planner
                      </button>
                      <a href={generateWhatsAppLink({ roomName: room.name, pageContext: room.name })}
                        target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3.5 border border-emerald-500 hover:bg-emerald-50 text-emerald-600 uppercase font-mono text-[10px] tracking-widest font-bold transition-all text-center">
                        Instant WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={amenitiesRef} className="py-20 bg-luxury-cream px-6 lg:px-16 border-t border-luxury-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">Unrivaled On-Site Support</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">A Selection of Exquisite Amenities</h2>
            <p className="text-xs text-luxury-slate/60 font-light max-w-md mx-auto mt-2 leading-relaxed">
              Tailored meticulously to satisfy the dual requirements of international business and deeply relaxing travel.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {(["All", "Utility", "Comfort", "General"] as const).map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-mono text-[9px] uppercase tracking-[0.25em] border transition-all cursor-pointer rounded-none ${
                  activeCategory === cat ? "bg-luxury-charcoal text-[#FDFCFB] border-luxury-charcoal" : "bg-white text-luxury-charcoal border-[#F0EBE6] font-medium hover:border-luxury-gold"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAmenities.map((amenity) => (
                <motion.div layout key={amenity.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}
                  className="bg-white p-6 border border-luxury-border flex items-start gap-4 shadow-sm rounded-none">
                  <div className="p-3 bg-luxury-sand border border-[#F0EBE6] rounded-none text-luxury-gold shrink-0">
                    {amenity.iconName === "Sun" && <Sun size={20} />}
                    {amenity.iconName === "Droplet" && <Droplet size={20} />}
                    {amenity.iconName === "ShieldCheck" && <ShieldCheck size={20} />}
                    {amenity.iconName === "Wifi" && <Wifi size={20} />}
                    {amenity.iconName === "Car" && <Car size={20} />}
                    {amenity.iconName === "Coffee" && <Coffee size={20} />}
                    {amenity.iconName === "Sparkles" && <Sparkles size={20} />}
                    {amenity.iconName === "Clock" && <Clock size={20} />}
                    {amenity.iconName === "MapPin" && <MapPin size={20} />}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-luxury-charcoal">{amenity.name}</h4>
                    <p className="text-[11px] text-luxury-slate/60 font-light mt-1.5 leading-relaxed font-sans">{amenity.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-luxury-charcoal text-[#FCFAF6] relative overflow-hidden px-6 lg:px-16">
        <div className="absolute inset-0 bg-[#121413]/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold select-none">Guest Endorsements</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white mb-12">Trusted by Discriminating International Visitors</h2>
          <div className="relative min-h-[180px] sm:min-h-[140px] px-4 md:px-16 flex items-center justify-center">
            <button onClick={handleReviewPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 rounded-full text-white transition-all cursor-pointer"
              aria-label="Previous Review"><ChevronLeft size={16} /></button>
            <button onClick={handleReviewNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 rounded-full text-white transition-all cursor-pointer"
              aria-label="Next Review"><ChevronRight size={16} /></button>
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center gap-1 mb-4 text-luxury-gold">
                {[...Array(REVIEWS[activeReviewIndex].rating)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>
              <p className="font-serif text-sm sm:text-base italic leading-relaxed text-luxury-cream/90">"{REVIEWS[activeReviewIndex].text}"</p>
              <div className="mt-8 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="text-white font-bold">{REVIEWS[activeReviewIndex].author}</span>
                <span className="text-luxury-gold">•</span>
                <span className="text-gray-400 font-light">{REVIEWS[activeReviewIndex].location}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setActiveReviewIndex(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === activeReviewIndex ? "bg-luxury-gold w-6" : "bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 px-6 lg:px-16 bg-white border-t border-luxury-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block font-semibold">Strategic Harare Proximity</span>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-luxury-charcoal">Quiet residential sanctuary in Braeside</h2>
              <p className="text-xs text-luxury-slate/85 font-light leading-relaxed">
                City View Guest House is excellently positioned. Located in Harare's historic Braeside suburb, we offer travelers absolute silence and secure neighborhood strolls, completely separated from the noise of the main central business district.
              </p>
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
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Chapman Golf Club</span>
                  <span className="font-bold text-luxury-charcoal">8 Minutes Dr.</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Eastgate Shopping Centre</span>
                  <span className="font-bold text-luxury-charcoal">9 Minutes Dr.</span>
                </div>
              </div>
              <div className="p-5 bg-luxury-sand border border-[#F0EBE6] text-[11px] leading-relaxed rounded-none">
                <span className="font-bold text-luxury-gold block uppercase font-mono mb-1">Airport Transit Coordination</span>
                <p className="text-luxury-slate font-light text-[11px]">
                  Take advantage of our reliable private chauffeur. Specify your landing timetable when drafting your reservation, and our team will coordinate a seamless greeting at Harare Int Airport.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 h-[400px] overflow-hidden border border-luxury-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.25316234486!2d31.064021!3d-17.786294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a52db0ff5383%3A0x10ce2208732526e2!2s20%20Sandhurst%20Way%2C%20Braeside%2C%20Harare!5e0!3m2!1sen!2szw!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="City View Guest House location on map"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atomic Answer: Booking */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-4">
        <p className="text-[11px] text-luxury-slate/50 font-mono italic">
          Book City View Guest House directly via WhatsApp for the best rates. Check-in from 14:00, check-out by 11:00. Free cancellation up to 48 hours before arrival.
        </p>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-luxury-cream px-6 lg:px-16 border-t border-[#F0EBE6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">Stay Arrangements Explained</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-luxury-charcoal">Frequently Discussed Inquiries</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does the continuous solar power grid operate?",
                a: "Our system combines passive high-capacity solar arrays with durable hybrid inverters. This provides fully stable standard voltage power continuously to all power plugins, active internet modems, flat-screen entertainment systems, and individual suite water heating cylinders." },
              { q: "What security measures are active for peace of mind?",
                a: "The property features 10-foot boundary installations, active structural high-voltage fencing overlays, computerized automatic entrance control, and full-court evening floodlights. This is backed up with physical CCTV monitors and a secure communication hookup with Zimbabwe national rapid responder networks." },
              { q: "Can I coordinate check-in details directly through WhatsApp?",
                a: "Absolutely. In fact, booking directly via our secure concierge drafts (at the top of the portal) allows you to bypass middleman platform processing and coordinate directly with the resident house manager for flexible check-in timings." },
            ].map((faq, idx) => (
              <details key={idx} className="group border border-luxury-border bg-white p-5 cursor-pointer select-none transition-all duration-300 rounded-none">
                <summary className="flex items-center justify-between font-serif text-sm sm:text-base font-semibold text-luxury-charcoal pr-4">
                  <span>{faq.q}</span>
                  <span className="text-luxury-gold cursor-pointer transform transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-xs text-luxury-slate/80 leading-relaxed font-sans font-light pl-1 border-t border-luxury-border py-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
