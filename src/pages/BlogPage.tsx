import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BLOG_ARTICLES } from "../guesthouseData";
import SeoSchema from "../components/SeoSchema";
import { useLang } from "../components/LanguageContext";

export default function BlogPage() {
  const { t } = useLang();

  return (
    <>
      <Helmet>
        <title>Blog | City View Guest House | Harare Travel Tips & Guides</title>
        <meta name="description" content="Travel tips, local guides, and updates from City View Guest House in Braeside, Harare. Learn about getting around Harare and exploring Zimbabwe." />
        <meta property="og:title" content="Blog | City View Guest House | Harare Travel Tips" />
        <meta property="og:description" content="Travel tips, local guides, and updates from City View Guest House in Braeside, Harare." />
        <meta property="og:url" content="https://www.cityviewguesthouse.co.zw/blog" />
        <link rel="canonical" href="https://www.cityviewguesthouse.co.zw/blog" />
      </Helmet>
      <SeoSchema />

      <main className="container mx-auto px-6 lg:px-16 max-w-5xl py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">
            City View Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-luxury-charcoal mt-4">
            Travel Guides &<br /><span className="italic text-luxury-gold">Local Insights</span>
          </h1>
          <p className="text-sm text-luxury-charcoal/60 mt-4 max-w-xl leading-relaxed font-light">
            Tips, guides, and stories to help you make the most of your stay in Harare.
          </p>
        </motion.div>

        <div className="space-y-12">
          {BLOG_ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group grid md:grid-cols-5 gap-8 items-start border-b border-luxury-border pb-12 last:border-0"
            >
              <div className="md:col-span-2 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 md:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-3 space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-luxury-charcoal/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={12} />
                    {article.author}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-luxury-charcoal/60 leading-relaxed font-light">
                  {article.excerpt}
                </p>
                <Link
                  to={`/blog/${article.id}`}
                  className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-luxury-gold hover:text-luxury-charcoal transition-colors pt-1"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </>
  );
}
