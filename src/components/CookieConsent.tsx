import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const CONSENT_KEY = "cv-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-luxury-charcoal border-t border-luxury-border/10 p-4 md:p-5"
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-[11px] text-gray-400 font-light leading-relaxed flex-1">
              This site uses cookies for analytics via Google Tag Manager. By clicking "Accept", you consent to this.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2 border border-luxury-border text-[10px] tracking-widest uppercase text-gray-400 hover:text-white transition-all cursor-pointer bg-transparent"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 bg-luxury-gold text-luxury-charcoal text-[10px] tracking-widest uppercase font-bold hover:bg-white transition-all cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
