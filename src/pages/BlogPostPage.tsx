import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { BLOG_ARTICLES } from "../guesthouseData";
import SeoSchema from "../components/SeoSchema";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const article = BLOG_ARTICLES.find((a) => a.id === id);

  if (!article) {
    return (
      <main className="container mx-auto px-6 lg:px-16 max-w-3xl py-24 text-center">
        <h1 className="font-serif text-3xl font-semibold text-luxury-charcoal">Article not found</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-luxury-gold mt-6 hover:underline">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | City View Guest House Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} | City View Guest House Blog`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://www.cityviewguesthouse.co.zw/blog/${article.id}`} />
        <link rel="canonical" href={`https://www.cityviewguesthouse.co.zw/blog/${article.id}`} />
      </Helmet>
      <SeoSchema />

      <main className="container mx-auto px-6 lg:px-16 max-w-3xl py-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-luxury-gold hover:text-luxury-charcoal transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-luxury-charcoal/50 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={12} />
              {article.author}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-luxury-charcoal mb-8">
            {article.title}
          </h1>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 sm:h-80 object-cover mb-12"
          />

          <div className="prose prose-sm sm:prose-base max-w-none text-luxury-charcoal/80 leading-relaxed space-y-4">
            {article.content.split("\n\n").map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <h2 key={i} className="font-serif text-xl font-semibold text-luxury-charcoal pt-4">
                    {trimmed.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1">
                    {trimmed.split("\n").map((line, j) => (
                      <li key={j}>{line.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-sm sm:text-base">{trimmed}</p>;
            })}
          </div>
        </motion.article>

        <div className="mt-16 pt-12 border-t border-luxury-border">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-luxury-gold hover:text-luxury-charcoal transition-colors">
            <ArrowLeft size={14} /> Back to all articles
          </Link>
        </div>
      </main>
    </>
  );
}
