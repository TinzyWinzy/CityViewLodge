import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/assets/images/property/Hero.jpg",
    alt: "City View Guest House exterior facade",
    title: "Welcome to City View",
    description: "Affordable boutique accommodation in Braeside, Harare",
  },
  {
    src: "/assets/images/property/cityview.jpg",
    alt: "City View Guest House building and entrance",
    title: "Your Home Away From Home",
    description: "Peaceful secure retreat in the heart of Braeside",
  },
  {
    src: "/assets/images/property/outsideview.jpg",
    alt: "City View Guest House exterior and garden",
    title: "Quiet Residential Sanctuary",
    description: "Beautiful garden surroundings with premium security",
  },
  {
    src: "/assets/images/property/outsideview2.jpg",
    alt: "City View Guest House outdoor spaces",
    title: "Outdoor Relaxation",
    description: "Spacious grounds for rest and reflection",
  },
  {
    src: "/assets/images/property/hero2.jpg",
    alt: "City View Guest House room interior",
    title: "Comfortable Living Spaces",
    description: "Clean, modern rooms at affordable rates",
  },
  {
    src: "/assets/images/property/hero3.jpg",
    alt: "City View Guest House suite",
    title: "Affordable Luxury",
    description: "From $30 to $60 per night for every traveler",
  },
];

const containerVariants = {
  enter: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const childVariants = {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
  };

  useEffect(() => {
    if (!isPaused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused]);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % heroImages.length;
    const img = new Image();
    img.src = heroImages[nextIndex].src;
  }, [currentIndex]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    if (!isPaused) startTimer();
  };

  const goToNext = () => goTo((currentIndex + 1) % heroImages.length);
  const goToPrevious = () => goTo((currentIndex - 1 + heroImages.length) % heroImages.length);

  const { title, description, src, alt } = heroImages[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes kenburns { 0% { transform: scale(1); } 100% { transform: scale(1.12); } }
        .kb { animation: kenburns 10s ease-out forwards; }
      `}</style>

      {/* Image layer with seamless crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 kb"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/90 via-luxury-charcoal/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/60 via-transparent to-luxury-charcoal/20 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#1a1a1a_100%)] z-10" />

      {/* Progress bar — thin gold line growing across the bottom */}
      <motion.div
        key={`bar-${currentIndex}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 8, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-luxury-gold z-30 origin-left"
      />

      {/* Content with parallax */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 w-full h-full flex flex-col justify-center px-6 lg:px-16"
      >
        <div className="max-w-4xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              variants={containerVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-center"
            >
              <motion.span variants={childVariants} className="inline-block text-luxury-gold font-mono text-xs uppercase tracking-[0.2em] mb-6">
                Affordable Accommodation in Braeside, Harare
              </motion.span>

              <motion.h1 variants={childVariants} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1] max-w-4xl mx-auto">
                {title}
              </motion.h1>

              <motion.p variants={childVariants} className="mt-6 text-sm sm:text-base md:text-lg text-luxury-cream/70 font-light max-w-2xl mx-auto leading-relaxed">
                {description}
              </motion.p>

              <motion.p variants={childVariants} className="mt-3 text-xs sm:text-sm text-luxury-gold/80 font-mono tracking-wide">
                From $30 to $60 per night — Premium security • Solar power • Borehole water
              </motion.p>

              <motion.div variants={childVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
                <button
                  onClick={() => navigate('/')}
                  className="w-full sm:w-auto px-10 py-4 bg-luxury-gold hover:bg-white text-white hover:text-luxury-charcoal transition-all duration-300 font-mono uppercase text-[12px] tracking-widest font-semibold border border-luxury-gold hover:border-white shadow-lg cursor-pointer"
                >
                  Book Your Stay
                </button>
                <button
                  onClick={() => navigate('/suites')}
                  className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/10 text-white font-mono uppercase text-[12px] tracking-widest font-semibold border border-white/60 hover:border-white transition-all cursor-pointer backdrop-blur-sm"
                >
                  View Our Rooms
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation — arrows with glass-morphism, expanding dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-5">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/25 hover:scale-105 transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2.5">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`rounded-full transition-all duration-500 cursor-pointer ${
                index === currentIndex
                  ? 'w-8 h-2 bg-luxury-gold'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/25 hover:scale-105 transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-luxury-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
