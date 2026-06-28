import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>404 - Page Not Found | City View Guest House</title>
        <meta name="description" content="The page you are looking for does not exist. Return to City View Guest House homepage." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative h-[60vh] w-full overflow-hidden bg-luxury-charcoal flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/60 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold block mb-4 font-bold">Error 404</span>
          <h1 className="font-serif text-5xl sm:text-7xl text-white font-medium tracking-tight leading-tight mb-4">
            Page Not <span className="italic text-luxury-gold">Found</span>
          </h1>
          <p className="text-sm text-luxury-cream/70 font-light max-w-md mx-auto mb-8">
            The page you are looking for has moved or does not exist.
          </p>
          <Link to="/"
            className="inline-block px-8 py-3 bg-luxury-gold hover:bg-white text-white hover:text-luxury-charcoal font-mono text-[10px] uppercase tracking-widest font-semibold transition-all">
            Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}
