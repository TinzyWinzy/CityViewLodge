import { Helmet } from "react-helmet-async";
import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  return (
    <div>
      <Helmet>
        <title>Gallery | City View Guest House | Photos of Boutique Accommodation Harare</title>
        <meta name="description" content="Browse photos of City View Guest House in Braeside, Harare. View our luxury suites, gardens, solar infrastructure, and secure property." />
        <link rel="canonical" href="https://www.cityviewguesthouse.co.zw/gallery" />
        <meta property="og:title" content="Gallery | City View Guest House Harare" />
        <meta property="og:description" content="Photo tour of City View Guest House — luxury suites, gardens, solar-powered property in Braeside, Harare." />
        <meta property="og:url" content="https://www.cityviewguesthouse.co.zw/gallery" />
      </Helmet>
      {/* Page Header */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-luxury-charcoal">
        <img src="/assets/images/property/premium-amenities.jpg"
          alt="City View Guest House" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-3 font-bold">
            Visual Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-tight">
            Our <span className="italic text-luxury-gold">Gallery</span>
          </h1>
          <p className="mt-4 text-sm text-luxury-cream/70 font-light max-w-xl">
            Explore the spaces that make City View Guest House a sanctuary in Harare.
          </p>
        </div>
      </section>

      <GallerySection />
    </div>
  );
}
