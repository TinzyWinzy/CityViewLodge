import { Helmet } from "react-helmet-async";
import { ROOMS, PROPERTY_INFO, REVIEWS, EXTENDED_REVIEWS } from "../guesthouseData";

const ALL_REVIEWS = [...REVIEWS, ...EXTENDED_REVIEWS];

const faqs = [
  { q: "How does the continuous solar power grid operate?", a: "Our system combines passive high-capacity solar arrays with durable hybrid inverters. This provides fully stable standard voltage power continuously to all power plugins, active internet modems, flat-screen entertainment systems, and individual suite water heating cylinders." },
  { q: "What security measures are active for peace of mind?", a: "The property features 10-foot boundary installations, active structural high-voltage fencing overlays, computerized automatic entrance control, and full-court evening floodlights. This is backed up with physical CCTV monitors and a secure communication hookup with Zimbabwe national rapid responder networks." },
  { q: "Can I coordinate check-in details directly through WhatsApp?", a: "Absolutely. Booking directly via our secure concierge drafts allows you to bypass middleman platform processing and coordinate directly with the resident house manager for flexible check-in timings." },
  { q: "Is there reliable WiFi for video conferencing?", a: "Yes. We provide uncapped high-speed fiber WiFi optimized specifically for high-bandwidth business video conferencing platforms like Zoom, Microsoft Teams, and Google Meet." },
  { q: "Do you offer airport pickup and drop-off?", a: "Yes. We offer reliable private chauffeur coordination for Harare International Airport. Simply specify your flight details when booking, and our team will ensure a seamless greeting." },
  { q: "What is your cancellation policy?", a: "We offer free cancellation up to 48 hours before check-in. Cancellations within 48 hours may incur a one-night charge. Please contact us directly for special circumstances." },
  { q: "Is breakfast included in the room rate?", a: "Yes. We serve a bespoke complimentary breakfast featuring artisanal coffee, continental spreads, and freshly baked pastries each morning." },
];

const roomSchema = ROOMS.map((room) => ({
  "@type": "HotelRoom",
  "name": room.name,
  "description": room.tagline,
  "image": `https://www.cityviewguesthouse.co.zw${room.image}`,
  "occupancy": {
    "@type": "QuantitativeValue",
    "maxValue": parseInt(room.capacity),
    "unitText": room.capacity
  },
  "size": room.size,
  "bed": {
    "@type": "BedDetails",
    "numberOfBeds": 1,
    "typeOfBed": room.bedType
  },
  "offers": {
    "@type": "Offer",
    "price": parseInt(room.rate.replace(/[^0-9]/g, "")),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}));

const reviewSchema = ALL_REVIEWS.map((r) => ({
  "@type": "Review",
  "author": { "@type": "Person", "name": r.author },
  "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
  "reviewBody": r.text,
  "datePublished": r.date
}));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.cityviewguesthouse.co.zw/#business",
      "name": "City View Guest House",
      "description": "Luxury boutique guest house in Braeside, Harare, Zimbabwe. Solar-powered, secure accommodation with WhatsApp direct booking.",
      "image": "https://www.cityviewguesthouse.co.zw/assets/images/property/Hero.jpg",
      "url": "https://www.cityviewguesthouse.co.zw/",
      "telephone": "+263780096836",
      "email": "stay@cityviewguesthouse.co.zw",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Sandhurst Way",
        "addressLocality": "Braeside, Harare",
        "addressCountry": "ZW"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": PROPERTY_INFO.rating,
        "reviewCount": PROPERTY_INFO.reviewCount,
        "bestRating": 5
      },
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "paymentAccepted": PROPERTY_INFO.payment.join(", "),
      "review": reviewSchema
    },
    {
      "@type": "Hotel",
      "@id": "https://www.cityviewguesthouse.co.zw/#hotel",
      "name": "City View Guest House",
      "url": "https://www.cityviewguesthouse.co.zw/",
      "telephone": "+263780096836",
      "image": "https://www.cityviewguesthouse.co.zw/assets/images/property/Hero.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Sandhurst Way",
        "addressLocality": "Braeside, Harare",
        "addressCountry": "ZW"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": PROPERTY_INFO.rating,
        "reviewCount": PROPERTY_INFO.reviewCount,
        "bestRating": 5
      },
      "priceRange": "$30 - $60 USD/night",
      "containsPlace": roomSchema,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Solar Power", "value": "Continuous solar battery backup" },
        { "@type": "LocationFeatureSpecification", "name": "Borehole Water", "value": "Deep security borehole water supply" },
        { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": "Uncapped fiber WiFi" },
        { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": "Gated electric perimeter with CCTV" },
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": "Complimentary gated parking" }
      ],
      "checkinTime": "14:00",
      "checkoutTime": "11:00"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cityviewguesthouse.co.zw/faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cityviewguesthouse.co.zw/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cityviewguesthouse.co.zw/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.cityviewguesthouse.co.zw/about" },
        { "@type": "ListItem", "position": 3, "name": "Suites", "item": "https://www.cityviewguesthouse.co.zw/suites" },
        { "@type": "ListItem", "position": 4, "name": "Gallery", "item": "https://www.cityviewguesthouse.co.zw/gallery" },
        { "@type": "ListItem", "position": 5, "name": "FAQ", "item": "https://www.cityviewguesthouse.co.zw/faq" },
        { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://www.cityviewguesthouse.co.zw/contact" },
        { "@type": "ListItem", "position": 7, "name": "Local Area", "item": "https://www.cityviewguesthouse.co.zw/local-area" }
      ]
    }
  ]
};

export default function SeoSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
