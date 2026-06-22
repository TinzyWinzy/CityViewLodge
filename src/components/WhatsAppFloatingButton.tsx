import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { generateWhatsAppLink } from "../whatsappUtility";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds for high conversion
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (roomName?: string) => {
    const link = generateWhatsAppLink({
      roomName,
      pageContext: "Floating Desk Widget",
    });
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Dynamic Interactive Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-luxury-gold/20 shadow-2xl overflow-hidden p-0 animate-fade-in"
          >
            {/* Header */}
            <div className="bg-luxury-charcoal text-white p-5 relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-mono flex items-center gap-1.5 mb-1">
                <Sparkles size={8} className="text-luxury-gold" /> Boutique Retreat
              </span>
              <h4 className="font-serif text-lg font-medium">City View Concierge</h4>
              <p className="text-xs text-gray-400 font-sans mt-1 font-light leading-relaxed">
                Typically replies in minutes. How can we help you plan your exquisite stay?
              </p>
            </div>

            {/* Quick Messages Options */}
            <div className="p-4 space-y-2.5 bg-luxury-cream text-luxury-charcoal">
              <div className="text-[11px] uppercase tracking-wider text-luxury-slate/60 font-mono font-medium mb-1">
                Popular Inquiries
              </div>
              <button
                onClick={() => handleLinkClick("Deluxe Garden Suite")}
                className="w-full text-left p-3 rounded-xl border border-gray-100 hover:border-luxury-gold hover:bg-white transition-all text-xs flex justify-between items-center group cursor-pointer"
              >
                <div>
                  <div className="font-medium text-luxury-charcoal">Inquire: Deluxe Garden Suite</div>
                  <div className="text-[10px] text-luxury-slate/60 mt-0.5">Most popular for business & luxury</div>
                </div>
                <div className="text-luxury-gold font-mono">&rarr;</div>
              </button>
              <button
                onClick={() => handleLinkClick("Master Executive Room")}
                className="w-full text-left p-3 rounded-xl border border-gray-100 hover:border-luxury-gold hover:bg-white transition-all text-xs flex justify-between items-center group cursor-pointer"
              >
                <div>
                  <div className="font-medium text-luxury-charcoal">Inquire: Master Executive Room</div>
                  <div className="text-[10px] text-luxury-slate/60 mt-0.5">Premium size with city garden views</div>
                </div>
                <div className="text-luxury-gold font-mono">&rarr;</div>
              </button>
              <button
                onClick={() => handleLinkClick()}
                className="w-full text-center py-2.5 rounded-xl bg-luxury-gold hover:bg-luxury-bronze text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Open General Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-16 top-3 shrink-0 whitespace-nowrap bg-luxury-charcoal text-white px-3.5 py-1.5 rounded-lg text-[11px] font-sans font-medium tracking-wide shadow-xl border border-luxury-gold/30"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Book direct & receive complimentary breakfast</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="ml-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <X size={10} />
              </button>
            </div>
            {/* Arrow */}
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-luxury-charcoal rotate-45 border-r border-t border-luxury-gold/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl relative z-10 transition-colors focus:outline-none cursor-pointer group"
        aria-label="Contact Concierge"
      >
        <span className="absolute -inset-0.5 rounded-full bg-emerald-500/30 animate-ping group-hover:block hidden" />
        <MessageCircle size={26} className="text-white" />
      </motion.button>
    </div>
  );
}
