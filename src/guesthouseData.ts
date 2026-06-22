/**
 * Custom data configuration for City View Guest House.
 * This file keeps our visual-first layout clean and modular.
 */

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  capacity: string;
  rate: string;
  bedType: string;
  image: string;
  amenities: string[];
}

export interface Amenity {
  id: string;
  name: string;
  category: "General" | "Comfort" | "Utility";
  iconName: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

// Property photography — real photos of City View Guest House
export const IMAGES = {
  hero: "/assets/images/property/Hero.jpg",
  roomDeluxe: "/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg",
  roomMaster: "/assets/images/property/494700947_658807310238573_3674695008729771176_n.jpg",
  roomTwin: "/assets/images/property/480430306_601771529275485_4476888978896392227_n.jpg",
  roomCottage: "/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg",
  roomCBD: "/assets/images/property/480544491_608078168644821_6146713533311401747_n.jpg",
  roomAfrica: "/assets/images/property/480571412_609613575157947_8567039695977118964_n.jpg",
  roomFocal: "/assets/images/property/480629020_608078165311488_3750179112594770203_n.jpg",
  roomSmart: "/assets/images/property/480759217_608077961978175_5664803457437882050_n.jpg",
  roomZimbo: "/assets/images/property/480767547_608078098644828_6171409888252443646_n.jpg",
  roomHideout: "/assets/images/property/480970352_609613211824650_4960684750315596793_n.jpg",
  roomCoolcorn: "/assets/images/property/481050191_609613265157978_7058169074812533997_n.jpg",
  roomStopover: "/assets/images/property/481053713_609613231824648_8017419109924729747_n.jpg",
  roomTransit: "/assets/images/property/480430306_601771529275485_4476888978896392227_n.jpg",
};

export const ROOMS: Room[] = [
  {
    id: "self-catering-cottage",
    name: "Self Catering Cottage",
    tagline: "Full kitchen, private entrance, premium comfort",
    description: "Our most spacious option — a fully self-contained cottage with a private kitchen, dining area, and separate entrance. Ideal for families, extended stays, or guests who prefer to cook their own meals. Tastefully furnished with modern amenities and garden views.",
    size: "48 m²",
    capacity: "4 Adults",
    rate: "$60 / night",
    bedType: "1 Queen Bed + 1 Double Sofa Bed",
    image: IMAGES.roomCottage,
    amenities: ["Full Kitchen", "Private Entrance", "Dining Area", "Smart TV", "Fiber WiFi", "Garden View"]
  },
  {
    id: "cbd-room",
    name: "CBD Room",
    tagline: "Convenient comfort for city explorers",
    description: "A comfortable, well-appointed room designed for guests who need easy access to Harare's central business district. Clean lines, quality bedding, and a dedicated workspace make this ideal for short business trips.",
    size: "28 m²",
    capacity: "2 Adults",
    rate: "$45 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomCBD,
    amenities: ["Workspace Desk", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "Premium Bedding"]
  },
  {
    id: "africa-room",
    name: "Africa Room",
    tagline: "Warm tones, earthy elegance",
    description: "Inspired by African aesthetics, this room features warm earth tones, textured fabrics, and local artwork. A cozy retreat that celebrates Zimbabwean craftsmanship while offering modern comfort.",
    size: "26 m²",
    capacity: "2 Adults",
    rate: "$45 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomAfrica,
    amenities: ["African Art Décor", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "Work Desk"]
  },
  {
    id: "focal-point-room",
    name: "Focal Point Room",
    tagline: "Designed around you",
    description: "A thoughtfully designed room where every element serves a purpose. The focal point is your comfort — from the premium mattress to the carefully positioned desk and entertainment setup.",
    size: "26 m²",
    capacity: "2 Adults",
    rate: "$45 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomFocal,
    amenities: ["Premium Mattress", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "Mini Fridge"]
  },
  {
    id: "smart-world-room",
    name: "Smart World Room",
    tagline: "Modern tech meets cozy living",
    description: "Equipped with smart features for the modern traveler. USB charging ports, smart TV with streaming, and high-speed WiFi ensure you stay connected while enjoying a peaceful night's rest.",
    size: "24 m²",
    capacity: "2 Adults",
    rate: "$40 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomSmart,
    amenities: ["USB Charging Ports", "Smart TV with Streaming", "Fiber WiFi", "En-suite Bathroom", "Blackout Curtains"]
  },
  {
    id: "zimbo-room",
    name: "Zimbo Room",
    tagline: "Local spirit, global comfort",
    description: "A celebration of Zimbabwean hospitality. The Zimbo Room combines local charm with international standards of comfort. Warm, inviting, and thoughtfully equipped for both leisure and business travelers.",
    size: "24 m²",
    capacity: "2 Adults",
    rate: "$40 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomZimbo,
    amenities: ["Local Art", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "Work Desk"]
  },
  {
    id: "hide-out-room",
    name: "Hide Out Room",
    tagline: "Your secret sanctuary in the city",
    description: "Tucked away for maximum privacy, the Hide Out Room offers a quiet escape from the hustle. Perfect for solo travelers or couples seeking a peaceful, no-distraction environment.",
    size: "22 m²",
    capacity: "2 Adults",
    rate: "$40 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomHideout,
    amenities: ["Quiet Location", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "Premium Bedding"]
  },
  {
    id: "cool-corn-room",
    name: "Cool Corn Room",
    tagline: "Cool, calm, and collected",
    description: "A crisp, contemporary space with a cool color palette and clean design. The Cool Corn Room is all about simplicity and freshness — a breath of fresh air after a long day in Harare.",
    size: "22 m²",
    capacity: "2 Adults",
    rate: "$40 / night",
    bedType: "1 Double Bed",
    image: IMAGES.roomCoolcorn,
    amenities: ["Modern Décor", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "Mini Fridge"]
  },
  {
    id: "stop-over-room",
    name: "Stop Over Room",
    tagline: "Perfect for a quick overnight stay",
    description: "Designed for travelers in transit, the Stop Over Room offers everything you need for a comfortable night between journeys. Compact, efficient, and exceptionally comfortable.",
    size: "20 m²",
    capacity: "1 Adult",
    rate: "$40 / night",
    bedType: "1 Single Bed",
    image: IMAGES.roomStopover,
    amenities: ["Quick Stay Essentials", "Smart TV", "Fiber WiFi", "En-suite Bathroom", "24hr Check-in"]
  },
  {
    id: "transit-room",
    name: "Transit Room",
    tagline: "Budget-friendly, never basic",
    description: "Our most affordable option without compromising on cleanliness or comfort. The Transit Room features a single bed, essential amenities, and the same high standards of security and hospitality that define City View.",
    size: "16 m²",
    capacity: "1 Adult",
    rate: "$30 / night",
    bedType: "1 Single Bed",
    image: IMAGES.roomTransit,
    amenities: ["Essential Comfort", "Fiber WiFi", "En-suite Bathroom", "Shared Kitchen Access", "24hr Security"]
  }
];

export const LIFESTYLE_FEATURES = [
  {
    title: "Uncompromising Security",
    description: "Peace of mind is our utmost priority. Rest secure behind a solid perimeter, electric fencing, modern 24/7 CCTV surveillance, and a dedicated rapid response hookup, nestled in the secure suburbs of Harare.",
    badge: "24/7 Secure"
  },
  {
    title: "Borehole & Solar Infrastructure",
    description: "Enjoy uninterrupted warmth and high-speed stays. Fitted with clean deep security borehole water, powerful solar inverter systems, and backup generators to ensure zero power cuts or water worries.",
    badge: "Eco-Reliable"
  },
  {
    title: "Quiet Retreat in Braeside",
    description: "Located in the quiet, residential, green avenues of Braeside. Ideal for focused business trips, weekend writing, or tranquil relaxation, while maintaining 10-minute proximity to Harare CBD.",
    badge: "Harare Peace"
  }
];

export const GENERAL_AMENITIES: Amenity[] = [
  {
    id: "solar",
    name: "Continuous Solar Power & Inverter",
    category: "Utility",
    iconName: "Sun",
    description: "Zero downtime during Harare grid maintenance."
  },
  {
    id: "borehole",
    name: "Borehole Water & Direct Backups",
    category: "Utility",
    iconName: "Droplet",
    description: "Purified continuous supply across all luxury en-suites."
  },
  {
    id: "secured",
    name: "Rapid Secure Active Perimeter",
    category: "General",
    iconName: "ShieldCheck",
    description: "Electric fencing, automated gates, and CCTV monitoring."
  },
  {
    id: "wifi",
    name: "Uncapped High-Speed Fiber Wifi",
    category: "Comfort",
    iconName: "Wifi",
    description: "Optimized for high-bandwidth business video conferencing."
  },
  {
    id: "parking",
    name: "Complimentary Gated Parking",
    category: "General",
    iconName: "Car",
    description: "Spacious private brick-paved secure courtyard."
  },
  {
    id: "breakfast",
    name: "Bespoke Complimentary Breakfast",
    category: "Comfort",
    iconName: "Coffee",
    description: "Artisanal coffee, continental spreads, and freshly baked pastries."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Elena de Wet",
    location: "Cape Town, South Africa",
    rating: 5,
    text: "City View Guest House is an absolute oasis! The solar and borehole system means complete comfort without all the power and water cuts other properties face. Sleek, minimalist design, and the garden is stunning.",
    date: "June 2026"
  },
  {
    id: "rev-2",
    author: "Tinashe Makoni",
    location: "London, UK (Diaspora Visitor)",
    rating: 5,
    text: "Top tier hospitality in Harare. The Braeside location is beautifully quiet and central. Walking into the Deluxe Suites is like entering a high-end Cape Town boutique hotel. Highly recommended for business trips.",
    date: "May 2026"
  },
  {
    id: "rev-3",
    author: "Dr. Jean-Pierre",
    location: "Geneva, Switzerland",
    rating: 5,
    text: "Impeccably clean, high-speed wifi is incredibly fast and reliable, and 100% secure. The attention to detail in the minimalist interior design surpasses standard Harare hotels. Will stay here every year.",
    date: "April 2026"
  }
];

export const LOCAL_SEO_KEYWORDS = [
  "Boutique Guest House Braeside",
  "Luxury Self-Catering Harare Zimbabwe",
  "Harare Airport Business Stays",
  "Secure Accommodation Braeside Harare",
  "City View Guest House Bookings"
];
