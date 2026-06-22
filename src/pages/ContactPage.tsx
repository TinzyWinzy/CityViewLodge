import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/480110531_601771305942174_3590895036994663114_n.jpg"
          alt="Contact City View" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            Contact <span className="italic text-luxury-gold">Us</span>
          </h1>
          <p className="mt-4 text-sm text-luxury-cream/70 font-light max-w-xl">
            We're here to help you plan the perfect Harare stay.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
                  Reach Out
                </span>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-luxury-charcoal">
                  We'd Love to Hear From You
                </h2>
                <p className="text-xs text-luxury-slate/70 font-light mt-3 leading-relaxed">
                  Whether you have a question about our suites, want to book a group stay, or need airport transfer coordination — our team is ready to assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-[#F0EBE6] text-luxury-gold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-luxury-charcoal">Address</h4>
                    <p className="text-xs text-luxury-slate/70 font-light mt-1">
                      20 Sandhurst Way, Braeside,<br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-[#F0EBE6] text-luxury-gold shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-luxury-charcoal">Phone</h4>
                    <p className="text-xs text-luxury-slate/70 font-light mt-1">+263 78 009 6836</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-[#F0EBE6] text-luxury-gold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-luxury-charcoal">Email</h4>
                    <p className="text-xs text-luxury-slate/70 font-light mt-1">stay@cityviewguesthouse.co.zw</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-luxury-sand border border-[#F0EBE6] text-luxury-gold shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-luxury-charcoal">WhatsApp</h4>
                    <p className="text-xs text-luxury-slate/70 font-light mt-1">Fastest response — typically within minutes</p>
                    <a href="https://wa.me/263780096836" target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-2 px-5 py-2 bg-[#25D366] text-white text-[10px] font-mono uppercase tracking-wider font-bold hover:bg-[#128C7E] transition-all">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-luxury-border pt-6">
                <h4 className="font-serif text-sm font-medium text-luxury-charcoal mb-3">Check-in / Check-out</h4>
                <div className="font-mono text-[11px] text-luxury-slate/90 space-y-1">
                  <p><span className="text-luxury-gold">Check-in:</span> 14:00 (Flexible upon request)</p>
                  <p><span className="text-luxury-gold">Check-out:</span> 11:00 (Late check-out available)</p>
                </div>
              </div>
            </div>

            {/* Map / Visual */}
            <div className="lg:col-span-7">
              <div className="bg-luxury-cream border border-luxury-border h-[500px] flex items-center justify-center relative">
                <div className="text-center p-8">
                  <MapPin className="text-luxury-gold mx-auto" size={48} />
                  <h3 className="font-serif text-xl text-luxury-charcoal font-semibold mt-4">City View Guest House</h3>
                  <p className="font-mono text-[10px] text-luxury-gold mt-1">Braeside, Harare, Zimbabwe</p>
                  <div className="mt-6 space-y-2 font-mono text-[11px] text-luxury-slate/90 text-left max-w-xs mx-auto">
                    <div className="flex justify-between"><span>Harare CBD</span><span className="font-bold">10 min drive</span></div>
                    <div className="flex justify-between"><span>RGM International Airport</span><span className="font-bold">15 min drive</span></div>
                    <div className="flex justify-between"><span>Chapman Golf Club</span><span className="font-bold">8 min drive</span></div>
                    <div className="flex justify-between"><span>Eastgate Shopping Centre</span><span className="font-bold">9 min drive</span></div>
                  </div>
                  <a href="https://maps.google.com/?q=20+Sandhurst+Way+Braeside+Harare" target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 border border-luxury-charcoal text-[10px] font-mono uppercase tracking-wider hover:bg-luxury-charcoal hover:text-white transition-all">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-charcoal text-center px-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">Ready to Book Your Stay?</h2>
        <p className="text-xs text-gray-400 font-light mt-3 max-w-md mx-auto">
          Use our booking portal for instant WhatsApp confirmation, or contact us directly.
        </p>
        <a href="/"
          className="inline-block mt-6 px-8 py-3 bg-luxury-gold hover:bg-white text-white hover:text-luxury-charcoal font-mono text-[10px] uppercase tracking-widest font-semibold transition-all">
          Book Now
        </a>
      </section>
    </div>
  );
}
