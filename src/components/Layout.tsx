import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Sun, Menu, X, Star, MapPin, Phone, Mail } from "lucide-react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import { LOCAL_SEO_KEYWORDS } from "../guesthouseData";

interface ToastContextType {
  showToast: (msg: string) => void;
}
const ToastContext = createContext<ToastContextType>({ showToast: () => {} });
export const useToast = () => useContext(ToastContext);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Suites", path: "/suites" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (msg: string) => setToastMessage(msg);

  const scrollToBooking = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold selection:text-white antialiased font-sans">
        {/* Toast */}
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

        {/* Announcement Bar */}
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

        {/* Header */}
        <header className="sticky top-0 z-40 bg-luxury-cream/95 backdrop-blur-md px-8 lg:px-16 py-6 flex items-center justify-between border-b border-luxury-border">
          <Link to="/" className="group flex flex-col cursor-pointer">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.25em] uppercase text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
              City View
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.45em] text-luxury-gold mt-1 ml-0.5">
              Guest House • Braeside
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-charcoal/80">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-luxury-gold transition-colors py-1 border-b border-transparent hover:border-luxury-gold ${
                  location.pathname === link.path ? "text-luxury-gold border-luxury-gold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToBooking}
              className="hidden lg:block px-6 py-2.5 border border-luxury-charcoal text-[10px] tracking-widest uppercase hover:bg-luxury-charcoal hover:text-white transition-all duration-300 font-medium cursor-pointer bg-transparent"
            >
              Book Direct
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden cursor-pointer text-luxury-charcoal"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed top-[88px] left-0 right-0 z-50 bg-luxury-cream/98 backdrop-blur-md border-b border-luxury-border overflow-hidden"
            >
              <div className="px-8 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm uppercase tracking-[0.2em] font-medium py-2 border-b border-luxury-border/50 ${
                      location.pathname === link.path ? "text-luxury-gold" : "text-luxury-charcoal/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setMobileMenuOpen(false); scrollToBooking(); }}
                  className="mt-2 px-6 py-3 bg-luxury-charcoal text-white text-[10px] tracking-widest uppercase font-medium text-center"
                >
                  Book Direct
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="bg-luxury-charcoal text-[#FDFCFB]/90 border-t border-luxury-border/10 py-16 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
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
                <div className="flex items-center gap-2 text-luxury-gold pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest ml-1">Rated 5.0 Stars Direct</span>
                </div>
              </div>

              <div className="md:col-span-4 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-gold font-bold block">
                  Contact
                </span>
                <div className="space-y-2.5 text-xs text-gray-400 font-sans">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="text-luxury-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">20 Sandhurst Way, Braeside,<br />Harare, Zimbabwe</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone size={14} className="text-luxury-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">+263 78 009 6836</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={14} className="text-luxury-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">stay@cityviewguesthouse.co.zw</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-gold font-bold block">
                  Quick Links
                </span>
                <div className="flex flex-col gap-2 text-xs text-gray-400 font-sans">
                  {navLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="hover:text-luxury-gold transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-500 font-mono uppercase tracking-wider">
              <span>&copy; {new Date().getFullYear()} City View Guest House. All rights reserved.</span>
              <div className="flex gap-4">
                {LOCAL_SEO_KEYWORDS.slice(0, 3).map((kw, i) => (
                  <span key={i} className="text-luxury-gold/50">{kw}</span>
                ))}
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppFloatingButton />
      </div>
    </ToastContext.Provider>
  );
}
