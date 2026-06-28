import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { MapPin } from "lucide-react";
import { LIFESTYLE_FEATURES } from "../guesthouseData";

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About | City View Guest House | Boutique Accommodation Braeside, Harare</title>
        <meta name="description" content="Discover City View Guest House in Braeside, Harare. Solar-powered, secure boutique accommodation with continuous power, borehole water, and fiber WiFi. 10min from CBD." />
        <link rel="canonical" href="https://www.cityviewguesthouse.co.zw/about" />
        <meta property="og:title" content="About City View Guest House | Braeside, Harare" />
        <meta property="og:description" content="Experience solar-powered luxury boutique accommodation in Braeside, Harare. 24/7 security, borehole water, high-speed fiber WiFi. Book direct." />
        <meta property="og:url" content="https://www.cityviewguesthouse.co.zw/about" />
      </Helmet>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/Hero.jpg" alt="City View Guest House"
          className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            Our Story
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            A Sanctuary in <span className="italic text-luxury-gold">Braeside</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-luxury-cream/70 font-light max-w-xl">
            Where premium security meets continuous solar power. Experience the pristine quiet of our boutique gardens.
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-16 pt-8 flex items-center justify-between">
        <p className="text-[11px] text-luxury-slate/50 font-mono italic flex-1">
          City View Guest House is a boutique guest house located at 20 Sandhurst Way, Braeside, Harare, Zimbabwe. The property features solar power backup, deep borehole water supply, 24/7 gated security, and high-speed fiber WiFi — just 10 minutes from Harare CBD.
        </p>
        <span className="text-[9px] text-luxury-gold/40 font-mono uppercase tracking-wider shrink-0 ml-4">Updated June 2026</span>
      </div>

      {/* About Content */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">Welcome to City View</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal">
              Your Home Away From Home in Harare
            </h2>
          </div>
          <div className="space-y-6 text-xs text-luxury-slate/85 font-light leading-relaxed font-sans">
            <p>
              Nestled in the historic Braeside suburb of Harare, City View Guest House offers an intimate boutique experience
              defined by meticulous design, uncompromising security, and genuine Zimbabwean hospitality.
            </p>
            <p>
              Our property features three distinct accommodation options, each crafted with premium materials and thoughtful
              attention to detail. From the Deluxe Garden Suite with private garden entry to the Master Executive Room
              with dedicated lounge corner, every space is designed for rest and productivity.
            </p>
            <p>
              What sets us apart is our infrastructure: continuous solar power backup, deep borehole water supply, high-speed
              fiber WiFi, and 24/7 gated security. In a city where utility reliability varies, we guarantee uninterrupted comfort.
            </p>
            <p>
              Located just 10 minutes from Harare CBD and 15 minutes from Robert Gabriel Mugabe International Airport,
              City View is perfectly positioned for both business travelers and discerning tourists.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 bg-luxury-cream px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[400px] overflow-hidden">
              <img src="/assets/images/property/480110531_601771305942174_3590895036994663114_n.jpg"
                alt="City View Guest House exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="h-[400px] overflow-hidden">
              <img src="/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg"
                alt="Deluxe Garden Suite interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="h-[400px] overflow-hidden">
              <img src="/assets/images/property/494700947_658807310238573_3674695008729771176_n.jpg"
                alt="Garden and patio" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="h-[400px] overflow-hidden">
              <img src="/assets/images/property/480430306_601771529275485_4476888978896392227_n.jpg"
                alt="Twin room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Features */}
      <section className="py-20 bg-luxury-sand px-6 lg:px-16 border-t border-b border-luxury-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">The City View Difference</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal max-w-2xl mx-auto leading-tight">
              Why Travelers Choose Us
            </h2>
            <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {LIFESTYLE_FEATURES.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white border border-luxury-border p-8 hover:shadow-xl transition-all duration-300">
                <span className="text-[9px] font-mono uppercase tracking-widest text-luxury-gold bg-luxury-sand border border-luxury-gold/25 px-2.5 py-1 inline-block mb-6">
                  {feature.badge}
                </span>
                <h3 className="font-serif text-xl font-medium tracking-tight text-luxury-charcoal mb-4">{feature.title}</h3>
                <p className="text-xs text-luxury-slate/85 font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Distances */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block font-semibold">Prime Location</span>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-luxury-charcoal">20 Sandhurst Way, Braeside</h2>
              <div className="border-t border-luxury-border pt-6 space-y-3 font-mono text-[11px] text-luxury-slate/90">
                <div className="flex justify-between items-center py-1">
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> Harare CBD</span>
                  <span className="font-bold text-luxury-charcoal">10 Minutes Dr.</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-luxury-gold" /> RGM International Airport</span>
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
            </div>
            <div className="lg:col-span-6 h-[400px] overflow-hidden border border-luxury-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.25316234486!2d31.064021!3d-17.786294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a52db0ff5383%3A0x10ce2208732526e2!2s20%20Sandhurst%20Way%2C%20Braeside%2C%20Harare!5e0!3m2!1sen!2szw!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="City View Guest House location in Braeside, Harare"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
