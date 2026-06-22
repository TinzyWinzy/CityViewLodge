import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Users, SlidersHorizontal, Star, ArrowLeft } from "lucide-react";
import { ROOMS, IMAGES } from "../guesthouseData";
import { generateWhatsAppLink } from "../whatsappUtility";
import { useToast } from "../components/Layout";

const roomImages: Record<string, string> = {
  "deluxe-garden": IMAGES.roomDeluxe,
  "master-executive": IMAGES.roomMaster,
  "double-twin": IMAGES.roomTwin,
};

const roomGallery: Record<string, string[]> = {
  "deluxe-garden": [
    "/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg",
    "/assets/images/property/480110531_601771305942174_3590895036994663114_n.jpg",
    "/assets/images/property/494787926_658807510238553_2158675956903400196_n.jpg",
  ],
  "master-executive": [
    "/assets/images/property/494700947_658807310238573_3674695008729771176_n.jpg",
    "/assets/images/property/494475561_658807623571875_5750875893493548613_n.jpg",
    "/assets/images/property/480197809_601771535942151_1459793074888622424_n.jpg",
  ],
  "double-twin": [
    "/assets/images/property/480430306_601771529275485_4476888978896392227_n.jpg",
    "/assets/images/property/480110531_601771305942174_3590895036994663114_n.jpg",
    "/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg",
  ],
};

export default function SuiteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { showToast } = useToast();
  const room = ROOMS.find((r) => r.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  if (!room) {
    return (
      <div className="py-32 text-center px-6">
        <h1 className="font-serif text-3xl text-luxury-charcoal">Suite Not Found</h1>
        <p className="text-xs text-luxury-slate/70 mt-2">The suite you're looking for doesn't exist.</p>
        <Link to="/suites" className="inline-block mt-6 text-luxury-gold font-mono text-xs uppercase tracking-wider hover:underline">
          &larr; View All Suites
        </Link>
      </div>
    );
  }

  const images = roomGallery[room.id] || [roomImages[room.id] || room.image];

  const handleQuickBook = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    const link = generateWhatsAppLink({ roomName: room.name, checkIn, checkOut, guests, pageContext: "Suite Detail" });
    window.open(link, "_blank", "noopener,noreferrer");
    showToast("Booking draft generated! Opening WhatsApp...");
  };

  return (
    <div>
      {/* Gallery Carousel */}
      <section className="relative h-[50vh] lg:h-[65vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src={images[currentImage]} alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent" />
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentImage ? "bg-luxury-gold w-6" : "bg-white/40 hover:bg-white/60"}`} />
            ))}
          </div>
        )}
        <div className="absolute top-6 left-6 z-10">
          <Link to="/suites"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-white text-[10px] font-mono uppercase tracking-wider hover:bg-white/20 transition-all">
            <ArrowLeft size={14} /> All Suites
          </Link>
        </div>
        <div className="absolute bottom-8 left-8 z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2">Signature Suite</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium">{room.name}</h1>
          <p className="mt-2 text-sm text-luxury-cream/70 font-light italic">"{room.tagline}"</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-medium text-luxury-charcoal">The Experience</h2>
              <p className="text-xs text-luxury-slate/85 font-light leading-relaxed mt-4">{room.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-b border-luxury-border py-6 font-mono text-[11px] text-luxury-slate/90">
              <div><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Size</span><span className="font-bold">{room.size}</span></div>
              <div><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Bed</span><span className="font-bold">{room.bedType}</span></div>
              <div><span className="text-[9px] text-[#A69177]/60 block uppercase mb-1">Capacity</span><span className="font-bold">{room.capacity}</span></div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-medium text-luxury-charcoal mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((a, i) => (
                  <span key={i} className="bg-luxury-sand border border-[#F0EBE6] text-luxury-slate px-3 py-1 text-[10px] font-mono">✓ {a}</span>
                ))}
              </div>
            </div>

            <div className="bg-luxury-sand border border-luxury-border p-6">
              <div className="flex items-center gap-2 text-luxury-gold mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs text-luxury-slate/85 font-light italic leading-relaxed">
                "An absolute oasis! The solar and borehole system means complete comfort without power and water cuts. Sleek, minimalist design, and the garden is stunning."
              </p>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-luxury-gold">
                — Elena de Wet, Cape Town
              </div>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-luxury-border shadow-xl p-8 sticky top-32">
              <span className="text-[10px] uppercase font-mono tracking-widest text-luxury-gold font-bold block mb-1">Rate From</span>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-extrabold text-luxury-charcoal">{room.rate}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                    <Calendar size={12} /> Check-In
                  </label>
                  <input type="date" value={checkIn} min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                    <Calendar size={12} /> Check-Out
                  </label>
                  <input type="date" value={checkOut} min={checkIn || new Date().toISOString().split("T")[0]}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none cursor-pointer text-luxury-charcoal" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#A69177] font-semibold mb-2 flex items-center gap-1">
                    <Users size={12} /> Guests
                  </label>
                  <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full h-12 bg-[#F5F2EF] border border-[#F0EBE6] focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none appearance-none cursor-pointer text-luxury-charcoal">
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults</option>
                  </select>
                </div>
              </div>

              <button onClick={handleQuickBook}
                className="w-full mt-6 py-4 bg-luxury-charcoal hover:bg-luxury-gold text-white font-mono font-bold uppercase text-[11px] tracking-widest transition-all cursor-pointer">
                Confirm Reservation
              </button>

              <div className="mt-4 text-center">
                <a href={generateWhatsAppLink({ roomName: room.name, pageContext: "Suite Detail Quick" })}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 hover:text-emerald-700 underline">
                  Or ask a question via WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-luxury-border text-[10px] text-luxury-slate/60 font-light leading-relaxed text-center">
                <span className="block">✓ Solar backup guaranteed</span>
                <span className="block">✓ Borehole water supply</span>
                <span className="block">✓ Free high-speed fiber WiFi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
