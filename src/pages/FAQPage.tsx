import { Link } from "react-router-dom";

const faqs = [
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
    a: "Absolutely. In fact, booking directly via our secure concierge drafts allows you to bypass middleman platform processing and coordinate directly with the resident house manager for flexible check-in timings."
  },
  {
    q: "Is there reliable WiFi for video conferencing?",
    a: "Yes. We provide uncapped high-speed fiber WiFi optimized specifically for high-bandwidth business video conferencing platforms like Zoom, Microsoft Teams, and Google Meet."
  },
  {
    q: "Do you offer airport pickup and drop-off?",
    a: "Yes. We offer reliable private chauffeur coordination for Harare International Airport. Simply specify your flight details when booking, and our team will ensure a seamless greeting."
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer free cancellation up to 48 hours before check-in. Cancellations within 48 hours may incur a one-night charge. Please contact us directly for special circumstances."
  },
  {
    q: "Is breakfast included in the room rate?",
    a: "Yes. We serve a bespoke complimentary breakfast featuring artisanal coffee, continental spreads, and freshly baked pastries each morning."
  },
];

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[35vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/494700947_658807310238573_3674695008729771176_n.jpg"
          alt="FAQ" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            Questions & Answers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            Frequently Asked <span className="italic text-luxury-gold">Questions</span>
          </h1>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 px-6 lg:px-16 bg-luxury-cream">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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

      {/* Policies */}
      <section className="py-20 px-6 lg:px-16 bg-white border-t border-luxury-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-2 font-bold">
              House Rules
            </span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-luxury-charcoal">
              Guest Policies
            </h2>
          </div>

          <div className="space-y-8 text-xs text-luxury-slate/85 font-light leading-relaxed font-sans">
            <div>
              <h3 className="font-serif text-base font-medium text-luxury-charcoal mb-2">Booking & Payment</h3>
              <p>All reservations require 50% deposit to confirm. Balance is payable on arrival via cash, EcoCash, or bank transfer. We accept USD and ZWL at the prevailing bank rate.</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-luxury-charcoal mb-2">Check-in / Check-out</h3>
              <p>Standard check-in is from 14:00. Standard check-out is by 11:00. Early check-in and late check-out are available upon request and subject to availability.</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-luxury-charcoal mb-2">Cancellation</h3>
              <p>Free cancellation up to 48 hours before arrival. Cancellations within 48 hours may incur a one-night charge. No-shows will be charged the full booking amount.</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-luxury-charcoal mb-2">House Rules</h3>
              <p>We maintain a quiet, respectful environment. Smoking is permitted in designated outdoor areas only. Visitors must be registered at reception. Quiet hours are from 22:00 to 07:00.</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-luxury-charcoal mb-2">Privacy</h3>
              <p>Your personal information is collected solely for the purpose of managing your booking and stay. We do not share your data with third parties except as required for payment processing or by law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-luxury-sand text-center px-6 border-t border-luxury-border">
        <h2 className="font-serif text-2xl text-luxury-charcoal font-medium">Still Have Questions?</h2>
        <p className="text-xs text-luxury-slate/70 font-light mt-2">Our team is ready to help.</p>
        <div className="flex gap-4 justify-center mt-6">
          <Link to="/contact"
            className="px-6 py-3 bg-luxury-charcoal text-white font-mono text-[10px] uppercase tracking-widest hover:bg-luxury-gold transition-all">
            Contact Us
          </Link>
          <a href="https://wa.me/263780096836" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-luxury-charcoal text-luxury-charcoal font-mono text-[10px] uppercase tracking-widest hover:bg-luxury-charcoal hover:text-white transition-all">
            WhatsApp Chat
          </a>
        </div>
      </section>
    </div>
  );
}
