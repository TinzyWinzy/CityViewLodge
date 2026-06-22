import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/assets/images/property/Hero.jpg",
    alt: "City View Guest House exterior facade",
    title: "Welcome to City View Guest House",
    description: "Affordable boutique accommodation in Braeside, Harare"
  },
  {
    src: "/assets/images/property/cityview.jpg",
    alt: "City View Guest House building and entrance",
    title: "Your Home Away From Home",
    description: "Peaceful secure retreat in the heart of Braeside"
  },
  {
    src: "/assets/images/property/outsideview.jpg",
    alt: "City View Guest House exterior and garden",
    title: "Quiet Residential Sanctuary",
    description: "Beautiful garden surroundings with premium security"
  },
  {
    src: "/assets/images/property/outsideview2.jpg",
    alt: "City View Guest House outdoor spaces",
    title: "Outdoor Relaxation",
    description: "Spacious grounds for rest and reflection"
  },
  {
    src: "/assets/images/property/hero2.jpg",
    alt: "City View Guest House room interior",
    title: "Comfortable Living Spaces",
    description: "Clean, modern rooms at affordable rates"
  },
  {
    src: "/assets/images/property/hero3.jpg",
    alt: "City View Guest House suite",
    title: "Affordable Luxury",
    description: "From $30 to $60 per night for every traveler"
  }
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(true);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(true);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(true);
  };

  return (
    <section className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/80 via-transparent to-luxury-charcoal/30 z-10" />
      </div>

      {/* Content Centered on White & Gold Typography */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-16 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-luxury-gold font-mono text-xs uppercase tracking-wider">
              Affordable Accommodation in Braeside, Harare
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-[1.1] max-w-3xl mx-auto"
          >
            Clean & Cozy Accommodation in <span className="italic font-light text-luxury-gold">Braeside</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-sm sm:text-base text-luxury-cream/80 font-light max-w-xl mx-auto leading-relaxed"
          >
            From $30 to $60 per night. Premium security, solar power, and borehole water — only 10 minutes from central Harare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-10 py-4 bg-luxury-gold hover:bg-white text-white hover:text-luxury-charcoal transition-all duration-300 font-mono uppercase text-[12px] tracking-widest font-semibold border border-luxury-gold hover:border-white shadow-lg cursor-pointer"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => navigate('/suites')}
              className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/10 text-white font-mono uppercase text-[12px] tracking-widest font-semibold border border-white/60 hover:border-white transition-all cursor-pointer"
            >
              View Our Rooms
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${index === currentImageIndex 
                ? 'bg-luxury-gold w-8' 
                : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-luxury-gold to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
}
