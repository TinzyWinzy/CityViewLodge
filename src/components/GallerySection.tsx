import { motion } from "motion/react";

// Gallery data with the 40 property images
const galleryData = {
  indoor: [
    {
      src: "/src/assets/images/property/494700947_658807310238573_3674695008729771176_n.jpg",
      title: "Master Executive Room",
      description: "The pinnacle of comfort for discerning executives with bespoke oak wood panelling and luxurious workspace.",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "/src/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg",
      title: "Deluxe Garden Suite",
      description: "Sanctuary of peace, styled with custom finishes and private garden views.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/480430306_601771529275485_4476888978896392227_n.jpg",
      title: "Cozy Double / Twin Room",
      description: "Light-filled, serene, and exquisitely flexible for colleagues or family.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/480110531_601771305942174_3590895036994663114_n.jpg",
      title: "Premium Amenities",
      description: "Custom orthopedic linens, premium hardware, and beautiful garden vistas.",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      src: "/src/assets/images/property/494787926_658807510238553_2158675956903400196_n.jpg",
      title: "Integrated Lounge",
      description: "Dedicated lounge corner with Marshall Bluetooth Speaker.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/494475561_658807623571875_5750875893493548613_n.jpg",
      title: "Smart Workspace",
      description: "Integrated workspace with fiber WiFi and modern amenities.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/480197809_601771535942151_1459793074888622424_n.jpg",
      title: "Rain Shower",
      description: "Rain shower designed to soothe and refresh.",
      span: "md:col-span-1 md:row-span-1"
    }
  ],
  outdoor: [
    {
      src: "/src/assets/images/property/480110531_601771305942174_3590895036994663114_n.jpg",
      title: "Garden Retreat",
      description: "Peaceful outdoor space surrounded by boutique gardens.",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "/src/assets/images/property/494696291_658807453571892_794067846801859362_n.jpg",
      title: "Solar Infrastructure",
      description: "Powerful solar inverter systems guaranteeing zero power cuts.",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      src: "/src/assets/images/property/494644278_658807153571922_3810868783847758030_n.jpg",
      title: "Secure Perimeter",
      description: "Electric fencing, automated gates, and CCTV monitoring.",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/494299425_658807570238547_6180186370053329533_n.jpg",
      title: "Borehole Water",
      description: "Purified continuous supply across all luxury en-suites.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/494724131_658807136905257_2111670750698127600_n.jpg",
      title: "Fiber WiFi",
      description: "Optimized for high-bandwidth business video conferencing.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/479700198_601771295942175_7609058518878752270_n.jpg",
      title: "Airport Shuttle",
      description: "Reliable private chauffeur coordination for Harare Int Airport.",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "/src/assets/images/property/474983885_586759654110006_1062893083761206121_n.jpg",
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
      <div className="group relative h-full w-full overflow-hidden border border-luxury-border bg-white shadow-sm hover:shadow-xl transition-all duration-700">
        <img
          src={item.src}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <h3 className="font-serif text-xl font-medium text-white leading-none">{item.title}</h3>
          <div className="mt-2 h-0.5 w-12 bg-luxury-gold" />
          <p className="mt-3 text-xs text-gray-200 font-light max-w-xs leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
