import React, { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Sun,
  Droplet,
  Wifi,
  Coffee,
  Car,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Check,
  Star,
  ArrowRight,
  Info,
  CalendarDays,
  Utensils,
  Maximize2,
  Clock,
  Phone,
  Mail,
  Shield,
  SlidersHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ROOMS, LIFESTYLE_FEATURES, GENERAL_AMENITIES, REVIEWS, LOCAL_SEO_KEYWORDS, IMAGES } from "./guesthouseData";
import { generateWhatsAppLink } from "./whatsappUtility";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Hero from "./components/Hero";
import GallerySection from "./components/GallerySection";
import LifestyleFeatures from "./components/LifestyleFeatures";
import LocationMap from "./components/LocationMap";

export default function App() {
  // Navigation / Filter States
  const [activeCategory, setActiveCategory] = useState<"All" | "General" | "Comfort" | "Utility">("All");
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>("deluxe-garden");
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Dynamic Booking Form Draft States
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].name);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [customRequest, setCustomRequest] = useState("");
  const [formInjected, setFormInjected] = useState(false);

  // Visual Interactive state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // References
  const bookingFormRef = useRef<HTMLDivElement>(null);
  const suitesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const amenitiesRef = useRef<HTMLElement>(null);

  // Auto scroll feedback timer
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleReviewPrev = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleReviewNext = () => {
    setActiveReviewIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Pre-fill parameters and focus booking engine
  const handleSelectRoomForBooking = (roomName: string) => {
    setSelectedRoom(roomName);
    scrollToSection(bookingFormRef);
    setToastMessage(`Pre-selected: ${roomName}. Fill in your dates to instantly draft your WhatsApp request!`);
  };

  // Triggers the customized wa.me link containing exact dates and details
  const submitBookingRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates to generate your custom luxury booking draft.");
      return;
    }

    const whatsappLink = generateWhatsAppLink({
      roomName: selectedRoom,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
      customMessage: customRequest ? `Special request: ${customRequest}.` : undefined,
      pageContext: "Interactive Checkout Draft"
    });

    // Elegant redirect in new tab
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    setToastMessage("WhatsApp Booking draft generated! Opening secure connection...");
  };

  // Filtered Amenities
  const filteredAmenities = GENERAL_AMENITIES.filter((amenity) => {
    if (activeCategory === "All") return true;
    return amenity.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold selection:text-white antialiased font-sans">
      
      {/* Dynamic Toast Feedback Overlay */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-luxury-charcoal border border-luxury-border text-white px-6 py-3.5 shadow-xl text-xs font-mono flex items-center justify-center gap-3 w-[90%] max-w-lg"
          >
            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-ping" />
            <span className="flex-1">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LUXURY TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-luxury-charcoal text-[#FDFCFB]/90 py-2.5 px-4 border-b border-luxury-border/10 text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-[10px] uppercase tracking-[0.2em] font-mono">
        <span className="flex items-center gap-1.5 font-light">
          <ShieldCheck size={13} className="text-luxury-gold" />
          24/7 Gated Security Suburb
        </span>
        <span className="hidden md:inline text-luxury-gold/50">•</span>
        <span className="flex items-center gap-1.5 font-light">
          <Sun size={13} className="text-luxury-gold" />
          Full Solar Battery Backup & Borehole Water
        </span>
        <span className="hidden md:inline text-luxury-gold/50">•</span>
        <span className="font-semibold text-luxury-gold animate-pulse">
          Book Direct on WhatsApp & Save 15%
        </span>
      </div>

      {/* ELEGANT MINIMAL HEADER */}
      <header className="sticky top-0 z-40 bg-luxury-cream/95 backdrop-blur-md px-8 lg:px-16 py-6 flex items-center justify-between border-b border-luxury-border">
        <a href="/" className="group flex flex-col cursor-pointer">
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.25em] uppercase text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
            City View
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.45em] text-luxury-gold mt-1 ml-0.5">
            Guest House • Braeside
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-charcoal/80">
          <button onClick={() => scrollToSection(suitesRef)} className="hover:text-luxury-gold transition-colors cursor-pointer py-1 border-b border-transparent hover:border-luxury-gold">
            The Suites
          </button>
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-luxury-gold transition-colors cursor-pointer py-1 border-b border-transparent hover:border-luxury-gold">
            The Experience
          </button>
          <button onClick={() => scrollToSection(amenitiesRef)} className="hover:text-luxury-gold transition-colors cursor-pointer py-1 border-b border-transparent hover:border-luxury-gold">
            Bespoke Services
          </button>
          <a href="#location" className="hover:text-luxury-gold transition-colors cursor-pointer py-1 border-b border-transparent hover:border-luxury-gold">
            Harare Guide
          </a>
        </nav>

        {/* Primary CTA Direct Link */}
        <div>
          <button
            onClick={() => scrollToSection(bookingFormRef)}
            className="px-6 py-2.5 border border-luxury-charcoal text-[10px] tracking-widest uppercase hover:bg-luxury-charcoal hover:text-white transition-all duration-300 font-medium cursor-pointer bg-transparent"
          >
            Book Direct
          </button>
        </div>
      </header>

      {/* HERO SECTION: ATMOSPHERIC DENSE LUXURY */}
      <Hero />

      {/* BOOKING ENGINE DRAFTING HUB */}
      <section ref={bookingFormRef} className="relative py-12 lg:py-20 px-6 lg:px-16 -mt-16 z-30 max-w-6xl mx-auto">
        <div className="bg-white border border-luxury-border shadow-xl p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between border-b border-luxury-border pb-8 mb-8">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-luxury-gold font-bold block mb-1">
                Active Reservation Portal
              </span>
              <h2 className="font-serif text-3xl font-medium tracking-tight">
                Pre-Draft Your Harare Stay
              </h2>
              <p className="text-xs text-luxury-slate/70 font-light mt-1 max-w-lg">
                Enter your desired dates. The dynamic booking generator will compile your inquiry and securely deliver it to our booking desk via WhatsApp.
              </p>
            </div>
            <div className="bg-luxury-sand border border-luxury-border px-5 py-3 flex items-center gap-3">
              <CalendarDays className="text-luxury-gold shrink-0" size={18} />
              <div className="text-[11px] font-mono tracking-wide text-luxury-charcoal/80">
                <span className="font-bold text-luxury-gold">FREE BOREHOLE WATER</span> & ELECTRIC SHUTTLE
              </div>
            </div>
          </div>

          <form onSubmit={submitBookingRequest} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Suite Selection */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <SlidersHorizontal size={12} /> Select Suite or Room
                </label>
                <div className="relative">
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal"
                  >
                    {ROOMS.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} ({room.rate})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Check-In Date */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Calendar size={12} /> Check-In
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal"
                />
              </div>

              {/* Check-Out Date */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Calendar size={12} /> Check-Out
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  min={checkIn ? checkIn : new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal"
                />
              </div>

              {/* Guests Count */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Users size={12} /> Accompanied Guests
                </label>
                <div className="relative">
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults (Executive Lounge Ext)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold text-xs">
                    ▼
                  </div>
                </div>
              </div>

            </div>

            {/* Special Request Optional Field */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2">
                Special Requests or Airport Pickup Arrangements (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Harare Int Airport Shuttle, vegetarian breakfast package, early check-in inquiry..."
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs rounded-none outline-none text-luxury-charcoal"
              />
            </div>

            {/* Dynamic preview block */}
            <div className="p-4 bg-luxury-cream border-l-2 border-luxury-gold text-[11px] font-mono leading-relaxed border-t border-b border-r border-[#F0EBE6]">
              <span className="font-bold text-luxury-gold uppercase block mb-1">WhatsApp Draft Message Preview:</span>
              <p className="text-luxury-slate italic">
                "Hello City View Guest House, I am interested in booking the *{selectedRoom}*. 
                {checkIn && <> Check-in: *{checkIn}*, Check-out: *{checkOut}*, Guests: *{guests}*.</>}
                {customRequest && <> Special request: *{customRequest}*.</>} Could you please check dates?"
              </p>
            </div>

            {/* Submission triggers dynamic WhatsApp redirect */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full lg:w-auto px-10 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-emerald-200"
              >
                Draft on WhatsApp Booking Desk &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* BOOKING ENGINE DRAFTING HUB */}
      <section ref={bookingFormRef} className="relative py-12 lg:py-20 px-6 lg:px-16 -mt-16 z-30 max-w-6xl mx-auto">
        <div className="bg-white border border-luxury-border shadow-xl p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between border-b border-luxury-border pb-8 mb-8">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-luxury-gold font-bold block mb-1">
                Active Reservation Portal
              </span>
              <h2 className="font-serif text-3xl font-medium tracking-tight">
                Pre-Draft Your Harare Stay
              </h2>
              <p className="text-xs text-luxury-slate/70 font-light mt-1 max-w-lg">
                Enter your desired dates. The dynamic booking generator will compile your inquiry and securely deliver it to our booking desk via WhatsApp.
              </p>
            </div>
            <div className="bg-luxury-sand border border-luxury-border px-5 py-3 flex items-center gap-3">
              <CalendarDays className="text-luxury-gold shrink-0" size={18} />
              <div className="text-[11px] font-mono tracking-wide text-luxury-charcoal/80">
                <span className="font-bold text-luxury-gold">FREE BOREHOLE WATER</span> & ELECTRIC SHUTTLE
              </div>
            </div>
          </div>

          <form onSubmit={submitBookingRequest} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Suite Selection */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <SlidersHorizontal size={12} /> Select Suite or Room
                </label>
                <div className="relative">
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal"
                  >
                    {ROOMS.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} ({room.rate})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Check-In Date */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Calendar size={12} /> Check-In
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal"
                />
              </div>

              {/* Check-Out Date */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Calendar size={12} /> Check-Out
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  min={checkIn ? checkIn : new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal"
                />
              </div>

              {/* Guests Count */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                  <Users size={12} /> Accompanied Guests
                </label>
                <div className="relative">
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults (Executive Lounge Ext)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold text-xs">
                    ▼
                  </div>
                </div>
              </div>

            </div>

            {/* Special Request Optional Field */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2">
                Special Requests or Airport Pickup Arrangements (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Harare Int Airport Shuttle, vegetarian breakfast package, early check-in inquiry..."
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs rounded-none outline-none text-luxury-charcoal"
              />
            </div>

            {/* Dynamic preview block */}
            <div className="p-4 bg-luxury-cream border-l-2 border-luxury-gold text-[11px] font-mono leading-relaxed border-t border-b border-r border-[#F0EBE6]">
              <span className="font-bold text-luxury-gold uppercase block mb-1">WhatsApp Draft Message Preview:</span>
              <p className="text-luxury-slate italic">
                "Hello City View Guest House, I am interested in booking the *{selectedRoom}*. 
                {checkIn && <> Check-in: *{checkIn}*, Check-out: *{checkOut}*, Guests: *{guests}*.</>}
                {customRequest && <> Special request: *{customRequest}*.</>} Could you check dates?"
              </p>
            </div>

            {/* Submission triggers dynamic WhatsApp redirect */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full lg:w-auto px-10 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-emerald-200"
              >
                Draft on WhatsApp Booking Desk &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CORE LIFESTYLE RETREAT: SEGREGATED SECURITY, ENVIRONMENT, UTILITY */}
      <section ref={aboutRef} className="py-20 bg-luxury-sand px-6 lg:px-16 border-t border-b border-luxury-border">
        <div className="max-w-6xl mx-auto">
          {/* Section Headline */}
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
              <div 
                key={idx}
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
              </div>
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
              onClick={() => scrollToSection(bookingFormRef)}
              className="shrink-0 font-mono uppercase tracking-widest text-xs font-semibold text-luxury-gold hover:text-luxury-charcoal transition-colors border-b-2 border-luxury-gold py-1 cursor-pointer"
            >
              Secure dates &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* LUXURY ROOM SHOWCASE SECTION */}
      <section ref={suitesRef} className="py-20 px-6 lg:px-16 bg-luxury-cream">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
                Accoutred With Fine Furnishings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">
                Luxury Boutique Suites & Twin Layouts
              </h2>
            </div>
            <p className="text-xs text-luxury-slate/60 font-light max-w-sm mt-4 md:mt-0 font-sans leading-relaxed">
              Every detail is chosen meticulously. Featuring custom orthopedic linens, premium hardware, private security enclosures, and beautiful garden vistas.
            </p>
          </div>

          {/* Interactive Selection Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8 border-b border-luxury-border pb-4">
            {ROOMS.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedSuiteId(room.id)}
                className={`px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  selectedSuiteId === room.id
                    ? "bg-luxury-charcoal text-white"
                    : "bg-transparent text-luxury-charcoal hover:bg-luxury-sand"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Interactive Selected Suite Display Container */}
          <div className="bg-white border border-luxury-border overflow-hidden shadow-sm">
            {ROOMS.map((room) => {
              if (room.id !== selectedSuiteId) return null;
              return (
                <div key={room.id} className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Visual Image with Parallax & Badge overlay */}
                  <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-auto overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {/* Floating Price Tag */}
                    <div className="absolute top-6 left-6 bg-luxury-charcoal/95 backdrop-blur-md border border-luxury-border text-[#FDFCFB] px-5 py-3 font-mono text-center">
                      <span className="text-[9px] uppercase tracking-[0.15em] block text-luxury-gold mb-0.5">Rate From</span>
                      <span className="text-base font-serif font-bold">{room.rate}</span>
                    </div>
                  </div>

                  {/* Right Column: Premium Text & Parameters */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#FDFCFB]">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-luxury-gold">
                        Signature Suite Accommodation
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-luxury-charcoal mt-1 mb-2">
                        {room.name}
                      </h3>
                      <p className="text-xs font-serif italic text-luxury-gold tracking-wide mb-6">
                        "{room.tagline}"
                      </p>
                      
                      <p className="text-xs text-luxury-slate/85 font-light leading-relaxed mb-8">
                        {room.description}
                      </p>

                      {/* Suite Parameters Table */}
                      <div className="grid grid-cols-2 gap-4 border-t border-b border-luxury-border py-5 mb-8 font-mono text-[11px] text-luxury-slate/90">
                        <div>
                          <span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Room Dimensions</span>
                          <span className="font-bold">{room.size}</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Luxurious Bedding</span>
                          <span className="font-bold">{room.bedType}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Occupancy Limit</span>
                          <span className="font-bold">{room.capacity}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Solar Air-con / Warmth</span>
                          <span className="font-bold text-emerald-700">Included Continuous</span>
                        </div>
                      </div>

                      {/* Suite Features List */}
                      <div className="mb-8">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block mb-3">Included Utilities</span>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, key) => (
                            <span
                              key={key}
                              className="bg-luxury-sand border border-[#F0EBE6] text-luxury-slate px-3 py-1 text-[10px] font-mono"
                            >
                              ✓ {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick WhatsApp conversion buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleSelectRoomForBooking(room.name)}
                        className="flex-1 px-6 py-3.5 bg-luxury-charcoal text-white hover:bg-luxury-gold hover:text-white uppercase font-mono text-[10px] tracking-widest font-semibold transition-all cursor-pointer text-center"
                      >
                        Book via Concierge Planner
                      </button>
                      <a
                        href={generateWhatsAppLink({ roomName: room.name, pageContext: room.name })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 border border-emerald-500 hover:bg-emerald-50 text-emerald-600 uppercase font-mono text-[10px] tracking-widest font-bold transition-all text-center"
                      >
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

      {/* AMENITIES SECTION: THE BESPOKE HOSPITALITY CHECKLIST */}
      <section ref={amenitiesRef} className="py-20 bg-luxury-cream px-6 lg:px-16 border-t border-luxury-gold/10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Headline */}
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
              Unrivaled On-Site Support
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">
              A Selection of Exquisite Amenities
            </h2>
            <p className="text-xs text-luxury-slate/60 font-light max-w-md mx-auto mt-2 leading-relaxed">
              Tailored meticulously to satisfy the dual requirements of international business and deeply relaxing travel.
            </p>
          </div>

          {/* Interactive visual filters */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {(["All", "Utility", "Comfort", "General"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-mono text-[9px] uppercase tracking-[0.25em] border transition-all cursor-pointer rounded-none ${
                  activeCategory === cat
                    ? "bg-luxury-charcoal text-[#FDFCFB] border-luxury-charcoal"
                    : "bg-white text-luxury-charcoal border-[#F0EBE6] font-medium hover:border-luxury-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Amenities Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAmenities.map((amenity) => {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={amenity.id}
                    className="bg-white p-6 border border-luxury-border flex items-start gap-4 shadow-sm rounded-none"
                  >
                    <div className="p-3 bg-luxury-sand border border-[#F0EBE6] rounded-none text-luxury-gold shrink-0">
                      {/* Dynamically match icons */}
                      {amenity.iconName === "Sun" && <Sun size={20} />}
                      {amenity.iconName === "Droplet" && <Droplet size={20} />}
                      {amenity.iconName === "ShieldCheck" && <ShieldCheck size={20} />}
                      {amenity.iconName === "Wifi" && <Wifi size={20} />}
                      {amenity.iconName === "Car" && <Car size={20} />}
                      {amenity.iconName === "Coffee" && <Coffee size={20} />}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-medium text-luxury-charcoal">
                        {amenity.name}
                      </h4>
                      <p className="text-[11px] text-luxury-slate/60 font-light mt-1.5 leading-relaxed font-sans">
                        {amenity.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* REVIEWS COMPONENT: THE MINIMAL LUXURY SLIDER */}
      <section className="py-20 bg-luxury-charcoal text-[#FCFAF6] relative overflow-hidden px-6 lg:px-16">
        <div className="absolute inset-0 bg-[#121413]/50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold select-none">
            Guest Endorsements & Stories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white mb-12">
            Trusted by Discriminating International Visitors
          </h2>

          <div className="relative min-h-[180px] sm:min-h-[140px] px-4 md:px-16 flex items-center justify-center">
            {/* Nav Arrows */}
            <button
              onClick={handleReviewPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 rounded-full text-white transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleReviewNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 rounded-full text-white transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight size={16} />
            </button>

            {/* Testimonial Active Display with Staggered animations */}
            <div className="max-w-2xl mx-auto">
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-4 text-luxury-gold">
                {[...Array(REVIEWS[activeReviewIndex].rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              
              <p className="font-serif text-sm sm:text-base italic leading-relaxed text-luxury-cream/90">
                "{REVIEWS[activeReviewIndex].text}"
              </p>

              <div className="mt-8 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="text-white font-bold">{REVIEWS[activeReviewIndex].author}</span>
                <span className="text-luxury-gold">•</span>
                <span className="text-gray-400 font-light">{REVIEWS[activeReviewIndex].location}</span>
              </div>
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReviewIndex(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === activeReviewIndex ? "bg-luxury-gold w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* BRAESIDE & HARARE LOCATION GUIDE SECTION */}
      <section id="location" className="py-20 px-6 lg:px-16 bg-white border-t border-luxury-border">
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

      {/* LIFESTYLE FEATURES SECTION */}
      <LifestyleFeatures />

      {/* LOCATION & MAP SECTION */}
      <LocationMap />

      {/* FAQ ACCORDION SECTION */}
      <section className="py-20 bg-luxury-cream px-6 lg:px-16 border-t border-[#F0EBE6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
              Stay Arrangements Explained
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-luxury-charcoal">
              Frequently Discussed Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does the continuous solar power grid operate?",
                a: "Our system combines passive high-capacity solar arrays with durable hybrid inverters. This provides fully stable standard voltage power continuously to all power plugins, active internet modems, flat-screen entertainment systems, and individual suite water heating cylinders."
              },
              {
                q: "What security measures are active for peace of mind?",
                a: "The property features 10-foot boundary installations, active structural high-voltage fencing overlays, computerized automatic entrance control, and full-court evening floodlights. This is backed up with physical CCTV monitors and a secure communication hookup with Zimbabwe national rapid responder networks."
              },
              {
                q: "Can I coordinate check-in details directly through WhatsApp?",
                a: "Absolutely. In fact, booking directly via our secure concierge drafts (at the top of the portal) allows you to bypass middleman platform processing and coordinate directly with the resident house manager for flexible check-in timings."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group border border-luxury-border bg-white p-5 cursor-pointer select-none transition-all duration-300 rounded-none"
              >
                <summary className="flex items-center justify-between font-serif text-sm sm:text-base font-semibold text-luxury-charcoal pr-4">
                  <span>{faq.q}</span>
                  <span className="text-luxury-gold cursor-pointer transform transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-xs text-luxury-slate/80 leading-relaxed font-sans font-light pl-1 border-t border-luxury-border py-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER: MAPS COMPATIBLE LOCAL SEO NAP DETAILS */}
      <footer className="bg-luxury-charcoal text-[#FDFCFB]/90 border-t border-luxury-border/10 py-16 px-6 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase text-white block">
                CITY VIEW
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.45em] text-luxury-gold block">
                Boutique Guest House • Harare
              </span>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed max-w-sm mt-3">
                Exquisite minimalism meets premium security backups in Zimbabwean boutique hospitality. Experience quiet luxury, solar reliability, and pristine borehole water services in Harare.
              </p>
              
              {/* Star Badging */}
              <div className="flex items-center gap-2 text-luxury-gold pt-2">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest ml-1">Rated 5.0 Stars Direct</span>
              </div>
            </div>

            {/* Local SEO NAP and Contact Column */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-gold font-bold block">
                Contact & Local SEO NAP
              </span>
              <div className="space-y-2.5 text-xs text-gray-400 font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-luxury-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>City View Guest House</strong><br />
                    12 General Avenue, Braeside,<br />
                    Harare, Zimbabwe
                  </span>
                </div>
                <div className="flex items-center gap-2.5 pt-1">
                  <Phone size={14} className="text-luxury-gold" />
                  <span>+263 77 212 3456</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-luxury-gold" />
                  <span>concierge@cityviewguesthouse.co.zw</span>
                </div>
              </div>
            </div>

            {/* Quick SEO Links Column */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-gold font-bold block">
                Harare Search Targets
              </span>
              <ul className="text-[10px] font-mono text-gray-400 space-y-2 uppercase tracking-wider">
                {LOCAL_SEO_KEYWORDS.slice(0, 4).map((keyword, key) => (
                  <li key={key} className="hover:text-white transition-colors cursor-default">
                    # {keyword}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Solid separator */}
          <div className="w-full h-[1px] bg-white/10 my-8" />

          {/* Legal Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 font-mono tracking-widest uppercase">
            <span>&copy; {new Date().getFullYear()} City View Guest House. All Rights Reserved.</span>
            <span className="mt-4 sm:mt-0 text-[9px] text-luxury-gold flex items-center gap-1.5 font-light">
              <Shield size={10} /> Harare Secure Accommodations Registry
            </span>
          </div>

        </div>
      </footer>

      {/* THE CONCIERGE WHATSAPP FLOATING BUTTON */}
      <WhatsAppFloatingButton />

    </div>
  );
}
