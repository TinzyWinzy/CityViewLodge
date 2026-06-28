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
    name: "Continental Breakfast Available",
    category: "Comfort",
    iconName: "Coffee",
    description: "Artisanal coffee, continental spreads, and fresh pastries (extra charge)."
  },
  {
    id: "laundry",
    name: "Full-Service Laundry",
    category: "General",
    iconName: "Sparkles",
    description: "Daily housekeeping with full-service and self-service laundry options."
  },
  {
    id: "pets",
    name: "Pet-Friendly Accommodation",
    category: "Comfort",
    iconName: "ShieldCheck",
    description: "Dogs and cats welcome (extra charge). Your furry friends stay too."
  },
  {
    id: "reception",
    name: "24-Hour Front Desk",
    category: "General",
    iconName: "Clock",
    description: "Baggage storage, grocery shop, and always-on concierge assistance."
  },
  {
    id: "accessible",
    name: "Accessible Parking & Entry",
    category: "General",
    iconName: "MapPin",
    description: "Accessible parking spaces and ground-floor rooms available."
  }
];

export const PROPERTY_INFO = {
  rating: 4.4,
  reviewCount: 40,
  host: "Holyfield (Mr H. Moyo)",
  checkIn: "14:00",
  checkOut: "11:00",
  address: "20 Sandhurst Way, Braeside, Harare, Zimbabwe",
  phone: "+263 78 009 6836",
  email: "stay@cityviewguesthouse.co.zw",
  languages: ["English"],
  payment: ["Cash", "EcoCash", "Bank Transfer"],
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Trevor Brooklyn",
    location: "Harare, Zimbabwe",
    rating: 5,
    text: "Smart and affordable. The rooms are well kept, the service is excellent, and the location in Braeside is quiet and peaceful. Highly recommended for anyone visiting Harare.",
    date: "March 2026"
  },
  {
    id: "rev-2",
    author: "Evangelist Lauras Basinskas",
    location: "Harare, Zimbabwe",
    rating: 5,
    text: "Simple, clean, friendly, safe and affordable. Everything you need for a comfortable stay in Harare. The host Holyfield goes above and beyond to make sure guests are well taken care of.",
    date: "October 2025"
  },
  {
    id: "rev-3",
    author: "Brian Mahove",
    location: "Harare, Zimbabwe",
    rating: 5,
    text: "This place is beautiful. Excellent service! Definite must go place in Harare. Stunning view, extremely well maintained. The attention to detail and the peaceful environment make it a true gem in Braeside.",
    date: "August 2024"
  },
  {
    id: "rev-4",
    author: "Sharon Wendy",
    location: "Harare, Zimbabwe",
    rating: 4,
    text: "Its a very neat African'ny place, its really a breather. Its so near to town, but out of it — so quiet. They designed the place with so much art you could just immerse in it while being outside.",
    date: "June 2024"
  },
  {
    id: "rev-5",
    author: "Bobby Jackson",
    location: "Harare, Zimbabwe",
    rating: 5,
    text: "Never been treated better, felt like I was at my grandma's house, spoilt. Had my room cleaned on demand, my car wiped down daily, my visitors were treated like royalty. If you ever need a place to rest better than home, this is it.",
    date: "March 2023"
  },
  {
    id: "rev-6",
    author: "Western Cape Explorer",
    location: "Cape Town, South Africa",
    rating: 5,
    text: "Beautiful view of the Harare CBD. Quiet neighbourhood. The host Holyfield provided excellent service throughout our stay. A wonderful home away from home experience in a secure, peaceful setting.",
    date: "January 2024"
  }
];

export interface LocalAttraction {
  name: string;
  description: string;
  distance: string;
  category: string;
}

export const LOCAL_ATTRACTIONS: LocalAttraction[] = [
  { name: "Harare Central Business District", description: "Commercial hub with banks, restaurants, shops, and government offices.", distance: "10 min drive", category: "City Access" },
  { name: "Robert Gabriel Mugabe International Airport", description: "Harare's main international airport with connections to Johannesburg, Nairobi, Dubai, and Addis Ababa.", distance: "15 min drive", category: "Transit" },
  { name: "Chapman Golf Club", description: "Prestigious 18-hole golf course with well-maintained greens and a clubhouse.", distance: "8 min drive", category: "Leisure" },
  { name: "Eastgate Shopping Centre", description: "Major shopping mall with supermarkets, retail stores, cinemas, and food court.", distance: "9 min drive", category: "Shopping" },
  { name: "Sam Levy's Village", description: "Upscale shopping and dining precinct in Borrowdale with boutiques and restaurants.", distance: "15 min drive", category: "Shopping" },
  { name: "National Botanic Gardens", description: "Tranquil 58-hectare garden showcasing Zimbabwe's diverse indigenous plant life.", distance: "12 min drive", category: "Nature" },
  { name: "Mukuvisi Woodlands", description: "Conservation area with walking trails, birdwatching, and wildlife viewing.", distance: "10 min drive", category: "Nature" },
  { name: "Avondale Flea Market", description: "Popular weekend market for local crafts, art, fresh produce, and second-hand goods.", distance: "8 min drive", category: "Shopping" },
  { name: "Zimbabwe Museum of Human Sciences", description: "Museum featuring archaeological exhibits including the famous Lemba artifacts.", distance: "12 min drive", category: "Culture" },
  { name: "Borrowdale Racecourse", description: "Horse racing venue and social hub hosting events and gatherings.", distance: "18 min drive", category: "Leisure" },
];

export const EXTENDED_REVIEWS: Review[] = [
  {
    id: "rev-g1",
    author: "Tawonga Tamirepi",
    location: "Google Reviews",
    rating: 5,
    text: "Great value for money. The host Holyfield provided excellent service throughout our stay. Highly recommended for business travelers.",
    date: "June 2026"
  },
  {
    id: "rev-g2",
    author: "Blessing Kanyande",
    location: "Google Reviews",
    rating: 5,
    text: "Amazing place. Clean rooms, friendly staff, and a peaceful environment. The solar backup means no load shedding interruptions at all.",
    date: "April 2026"
  },
  {
    id: "rev-g3",
    author: "Warerwa Mutongerwa",
    location: "Google Reviews",
    rating: 5,
    text: "Luxury stay with a great view of the Harare skyline. The quiet Braeside location is perfect for rest after a long day.",
    date: "December 2025"
  },
  {
    id: "rev-g4",
    author: "Kundai Teswa",
    location: "Google Reviews",
    rating: 5,
    text: "Excellent service and well-maintained property. The attention to detail in the rooms is impressive.",
    date: "November 2025"
  },
  {
    id: "rev-g5",
    author: "Leonard Zambwi",
    location: "Google Reviews",
    rating: 5,
    text: "Very nice rooms and close to Harare airport for air travellers. Convenient location with easy access to the city.",
    date: "July 2024"
  },
  {
    id: "rev-g6",
    author: "Adrian Mandibaya",
    location: "Google Reviews",
    rating: 5,
    text: "Excellent place to stay in Harare. The security is top-notch and the staff are incredibly helpful.",
    date: "September 2025"
  },
];

export const LOCAL_SEO_KEYWORDS = [
  "Boutique Guest House Braeside",
  "Luxury Self-Catering Harare Zimbabwe",
  "Harare Airport Business Stays",
  "Secure Accommodation Braeside Harare",
  "City View Guest House Bookings"
];
