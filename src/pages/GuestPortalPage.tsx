import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Wifi, Clock, Shield, Utensils, Plane, Phone, Star, ExternalLink } from "lucide-react";
import { useLang } from "../components/LanguageContext";

const VALID_CODES = ["CV-2024", "CV-SUNRISE", "CV-GARDEN", "CV-BIZ24", "CV-WEEKEND"];

export default function GuestPortalPage() {
  const { t } = useLang();
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = (e: FormEvent) => {
    e.preventDefault();
    if (VALID_CODES.includes(code.trim())) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Guest Portal | City View Guest House</title>
        <meta name="description" content="Guest portal for City View Guest House — WiFi access, house rules, check-in info, and local recommendations." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="relative h-[35vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/Hero.jpg" alt="City View Guest House"
          className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            {t("portal.title")}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            {t("portal.welcome")}
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-16 bg-luxury-cream min-h-[50vh]">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.div key="gate" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="bg-white border border-luxury-border p-8 sm:p-12 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-luxury-charcoal flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-luxury-gold" size={28} />
                  </div>
                  <h2 className="font-serif text-xl font-medium text-luxury-charcoal mb-4">{t("portal.gate-title")}</h2>
                  <p className="text-xs text-luxury-slate/60 font-light mb-8 leading-relaxed">{t("portal.gate-hint")}</p>
                  <form onSubmit={handleUnlock} className="space-y-4">
                    <input type="text" value={code} onChange={(e) => { setCode(e.target.value); setError(false); }}
                      placeholder="CV-2024"
                      className="w-full h-12 bg-luxury-sand border border-luxury-border focus:border-luxury-gold px-4 text-xs font-mono rounded-none outline-none text-center text-luxury-charcoal tracking-widest uppercase"
                      autoFocus />
                    {error && <p className="text-red-500 text-[10px] font-mono">{t("portal.gate-error")}</p>}
                    <button type="submit"
                      className="w-full py-3.5 bg-luxury-charcoal hover:bg-luxury-gold text-white font-mono text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer">
                      {t("portal.gate-submit")}
                    </button>
                  </form>
                  <p className="text-[9px] text-luxury-slate/40 font-mono mt-6">
                    Code provided at check-in. Contact host if lost.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div key="portal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                {/* WiFi */}
                <div className="bg-white border border-luxury-border p-6 flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-luxury-border text-luxury-gold shrink-0"><Wifi size={22} /></div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-luxury-charcoal">{t("portal.wifi-title")}</h2>
                    <p className="text-xs font-mono text-luxury-charcoal mt-2 bg-luxury-sand px-3 py-2 border border-luxury-border">
                      {t("portal.wifi-name")}
                    </p>
                    <p className="text-xs font-mono text-luxury-charcoal mt-1 bg-luxury-sand px-3 py-2 border border-luxury-border">
                      {t("portal.wifi-pass")}
                    </p>
                  </div>
                </div>

                {/* Check-in / Check-out */}
                <div className="bg-white border border-luxury-border p-6 flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-luxury-border text-luxury-gold shrink-0"><Clock size={22} /></div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-luxury-charcoal">{t("portal.checkin-title")}</h2>
                    <p className="text-xs text-luxury-slate/80 font-light mt-2">{t("portal.checkin-time")}</p>
                    <p className="text-xs text-luxury-slate/80 font-light mt-1">{t("portal.checkout-time")}</p>
                  </div>
                </div>

                {/* House Rules */}
                <div className="bg-white border border-luxury-border p-6 flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-luxury-border text-luxury-gold shrink-0"><Shield size={22} /></div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-luxury-charcoal">{t("portal.rules-title")}</h2>
                    <ul className="mt-2 space-y-1.5">
                      <li className="text-xs text-luxury-slate/80 font-light flex items-center gap-2">
                        <span className="w-1 h-1 bg-luxury-gold rounded-full" />{t("portal.rules-quiet")}
                      </li>
                      <li className="text-xs text-luxury-slate/80 font-light flex items-center gap-2">
                        <span className="w-1 h-1 bg-luxury-gold rounded-full" />{t("portal.rules-smoking")}
                      </li>
                      <li className="text-xs text-luxury-slate/80 font-light flex items-center gap-2">
                        <span className="w-1 h-1 bg-luxury-gold rounded-full" />{t("portal.rules-visitors")}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Local Food Delivery */}
                <div className="bg-white border border-luxury-border p-6 flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-luxury-border text-luxury-gold shrink-0"><Utensils size={22} /></div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-luxury-charcoal">{t("portal.food-title")}</h2>
                    <ul className="mt-2 space-y-1.5">
                      <li className="text-xs text-luxury-slate/80 font-light">{t("portal.food-1")}</li>
                      <li className="text-xs text-luxury-slate/80 font-light">{t("portal.food-2")}</li>
                      <li className="text-xs text-luxury-slate/80 font-light">{t("portal.food-3")}</li>
                    </ul>
                  </div>
                </div>

                {/* Airport Transfer */}
                <div className="bg-white border border-luxury-border p-6 flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-luxury-border text-luxury-gold shrink-0"><Plane size={22} /></div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-luxury-charcoal">{t("portal.transfer-title")}</h2>
                    <p className="text-xs text-luxury-slate/80 font-light mt-2">{t("portal.transfer-info")}</p>
                  </div>
                </div>

                {/* Emergency */}
                <div className="bg-white border border-luxury-border p-6 flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-luxury-border text-luxury-gold shrink-0"><Phone size={22} /></div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-luxury-charcoal">{t("portal.emergency-title")}</h2>
                    <p className="text-xs text-luxury-slate/80 font-light mt-2">{t("portal.emergency-host")}</p>
                  </div>
                </div>

                {/* Review CTA */}
                <div className="bg-luxury-charcoal text-white border border-luxury-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <div className="flex items-start gap-3">
                    <Star className="text-luxury-gold shrink-0 mt-1" size={22} />
                    <div>
                      <h2 className="font-serif text-lg font-medium">{t("portal.review-title")}</h2>
                      <p className="text-xs text-gray-400 font-light mt-1">Help other travelers discover City View Guest House.</p>
                    </div>
                  </div>
                  <a href="https://search.google.com/local/reviews?q=City+View+Guest+House+Braeside+Harare" target="_blank" rel="noopener noreferrer"
                    className="shrink-0 px-6 py-3 bg-luxury-gold hover:bg-white hover:text-luxury-charcoal text-white font-mono text-[10px] uppercase tracking-widest font-semibold transition-all flex items-center gap-2">
                    {t("portal.review-cta")} <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
