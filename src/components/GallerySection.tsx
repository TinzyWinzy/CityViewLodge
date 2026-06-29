import { motion } from "motion/react";
import ImageLightbox from "./ImageLightbox";

// Gallery data with the 40 property images
const galleryData = {
  indoor: [
    {
      src: "/assets/images/property/master-executive-room.jpg",
      title: "Master Executive Room",
      description: "The pinnacle of comfort for discerning executives with bespoke oak wood panelling and luxurious workspace.",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "/assets/images/property/deluxe-garden-suite.jpg",
      title: "Deluxe Garden Suite",
      description: "Sanctuary of peace, styled with custom finishes and private garden views.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/cozy-twin-room.jpg",
      title: "Cozy Double / Twin Room",
      description: "Light-filled, serene, and exquisitely flexible for colleagues or family.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/premium-amenities.jpg",
      title: "Premium Amenities",
      description: "Custom orthopedic linens, premium hardware, and beautiful garden vistas.",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      src: "/assets/images/property/integrated-lounge.jpg",
      title: "Integrated Lounge",
      description: "Dedicated lounge corner with Marshall Bluetooth Speaker.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/smart-workspace.jpg",
      title: "Smart Workspace",
      description: "Integrated workspace with fiber WiFi and modern amenities.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/rain-shower.jpg",
      title: "Rain Shower",
      description: "Rain shower designed to soothe and refresh.",
      span: "md:col-span-1 md:row-span-1"
    }
  ],
  outdoor: [
    {
      src: "/assets/images/property/premium-amenities.jpg",
      title: "Garden Retreat",
      description: "Peaceful outdoor space surrounded by boutique gardens.",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "/assets/images/property/solar-infrastructure.jpg",
      title: "Solar Infrastructure",
      description: "Powerful solar inverter systems guaranteeing zero power cuts.",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      src: "/assets/images/property/secure-perimeter.jpg",
      title: "Secure Perimeter",
      description: "Electric fencing, automated gates, and CCTV monitoring.",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      src: "/assets/images/property/borehole-water.jpg",
      title: "Borehole Water",
      description: "Purified continuous supply across all luxury en-suites.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/fiber-wifi.jpg",
      title: "Fiber WiFi",
      description: "Optimized for high-bandwidth business video conferencing.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/airport-shuttle.jpg",
      title: "Airport Shuttle",
      description: "Reliable private chauffeur coordination for Harare Int Airport.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/assets/images/property/garden-details.jpg",
      title: "Garden Details",
      description: "Beautiful garden vistas and serene surroundings.",
      span: "md:col-span-2 md:row-span-1"
    }
  ]
};

export default function GallerySection() {
  return (
    <div className="space-y-32 py-32 bg-luxury-cream">
      {/* Indoor Experience */}
      <section id="indoor-gallery" className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold"
          >
            Inside City View
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-luxury-charcoal mt-4"
          >
            Luxury Boutique <span className="italic text-luxury-gold">Suites</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[350px] grid-flow-dense">
          {galleryData.indoor.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Immersive Mid-Break (Gold) */}
      <section className="bg-luxury-sand py-20 md:py-32 text-luxury-charcoal overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-serif text-3xl md:text-5xl font-semibold max-w-5xl mx-auto leading-tight"
          >
            Where premium security meets continuous solar power. Experience the pristine quiet of our boutique gardens.
          </motion.h3>
        </div>
      </section>

      {/* Outdoor Experience */}
      <section id="outdoor-gallery" className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="mb-12 md:mb-16 text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold"
          >
            The Surroundings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-luxury-charcoal mt-4"
          >
            Harare <span className="italic text-luxury-gold">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px] md:auto-rows-[400px] grid-flow-dense">
          {galleryData.outdoor.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function GalleryCard({ item, index }: { key?: string; item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={item.span}
    >
      <ImageLightbox src={item.src} alt={item.title}>
        <div className="group relative h-full w-full overflow-hidden border border-luxury-border bg-white shadow-sm hover:shadow-xl transition-all duration-700">
          <img
            src={item.src}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
            <h3 className="font-serif text-xl font-medium text-white leading-none">{item.title}</h3>
            <div className="mt-2 h-0.5 w-12 bg-luxury-gold" />
            <p className="mt-3 text-xs text-gray-200 font-light max-w-xs leading-relaxed">{item.description}</p>
          </div>
        </div>
      </ImageLightbox>
    </motion.div>
  );
}
