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
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-garden",
    name: "Deluxe Garden Suite",
    tagline: "Sanctuary of peace, styled with custom finishes",
    description: "Our signature suite, blending modern minimalist design with rich textures. This sanctuary offers private views of our quiet Braeside garden, an integrated workspace, and a rain shower designed to soothe.",
    size: "38 m²",
    capacity: "2 Adults",
    rate: "$95 / night",
    bedType: "1 Extra-Large Double Bed",
    image: IMAGES.roomDeluxe,
    amenities: ["Private Garden Entry", "Smart Workspace", "Rain Shower", "Mini Bar", "Fiber Wifi"]
  },
  {
    id: "master-executive",
    name: "Master Executive Room",
    tagline: "The pinnacle of comfort for discerning executives",
    description: "A spacious premier apartment suite with a dedicated lounge corner, bespoke oak wood panelling, and a luxurious workspace. Fully tailored for corporate travellers demanding total quietness and elegant utility.",
    size: "46 m²",
    capacity: "2 Adults",
    rate: "$120 / night",
    bedType: "1 King Bed",
    image: IMAGES.roomMaster,
    amenities: ["Integrated Lounge", "Nespresso Machine", "Premium Oak Desk", "Marshall Bluetooth Speaker", "Walk-in Wardrobe"]
  },
  {
    id: "double-twin",
    name: "Cozy Double / Twin Room",
    tagline: "Light-filled, serene, and exquisitely flexible",
    description: "Designed for colleagues or family, the Double Twin features custom configured orthopedic linens, neutral brass details, and high ceilings that welcome natural light. Quiet, secure, and impeccably furnished.",
    size: "32 m²",
    capacity: "2 Adults",
    rate: "$80 / night",
    bedType: "2 Single Beds or 1 Double Bed",
    image: IMAGES.roomTwin,
    amenities: ["Custom Orthopedic Bedding", "Premium USB Charging Ports", "Modern Walk-in Shower", "Blackout Drapes"]
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
