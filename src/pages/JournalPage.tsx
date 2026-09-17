import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Sparkles, BookOpen, ChevronRight } from "lucide-react";
import { journalArticles, JournalArticle } from "../data/journalData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema } from "../utils/seo";

export const JournalPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "The Essence Edit", url: "/the-essence-edit" },
  ]);

  return (
    <div className="py-12 sm:py-16 bg-studio-ivory animate-fadeIn">
      <SeoHead
        title="The Essence Edit | Beauty Guides & Hair Care | Dimapur"
        description="Educational beauty journal by Essence Hair and Makeup Studio on Church Road, Dimapur. Read expert comparisons on Hair Botox vs Nanoplastia, lash extension styles, and brow guides."
        keywords="the essence edit, beauty blog dimapur, hair botox vs nanoplastia, lash extension styles dimapur"
        canonicalPath="/the-essence-edit"
        jsonLd={breadcrumbsSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-champagne-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600">
              The Beauty Journal
            </span>
            <span className="w-6 h-px bg-champagne-500" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-studio-espresso font-medium tracking-tight">
            THE ESSENCE EDIT
          </h1>
          <p className="mt-4 text-sm sm:text-base text-studio-taupe leading-relaxed">
            Thoughtfully written guides, treatment comparisons, and aftercare advice curated by the stylists of Church Road, Dimapur.
          </p>
        </div>

        {/* Modal/Reader View if an article is clicked, or Grid view */}
        {selectedArticle ? (
          <div className="max-w-3xl mx-auto bg-white border border-studio-border p-6 sm:p-12 shadow-elevated mb-16">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-xs font-semibold uppercase tracking-luxury text-champagne-700 hover:text-studio-espresso mb-6 inline-flex items-center gap-1"
            >
              ← Back to All Articles
            </button>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-champagne-600 font-bold block">
                {selectedArticle.category} • {selectedArticle.readTime}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-studio-espresso font-medium leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-xs text-studio-muted">
                Published {selectedArticle.publishedDate} by Essence Hair & Makeup Studio
              </p>

              <div className="aspect-[16/9] overflow-hidden bg-studio-cream my-6">
                <img
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-stone max-w-none text-sm text-studio-charcoal leading-relaxed space-y-6">
                <p className="text-base text-studio-espresso font-medium italic">
                  {selectedArticle.content.intro}
                </p>

                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-serif text-xl text-studio-espresso font-semibold">
                      {sec.heading}
                    </h3>
                    <p className="whitespace-pre-line text-studio-taupe">
                      {sec.body}
                    </p>
                  </div>
                ))}

                <div className="p-5 bg-studio-cream/40 border-l-2 border-champagne-500 italic text-studio-taupe">
                  {selectedArticle.content.conclusion}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-studio-border flex items-center justify-between">
                <Link
                  to={`/services/${selectedArticle.relatedServiceSlug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-studio-espresso hover:text-champagne-600"
                >
                  <span>Explore Associated Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs uppercase tracking-wider text-studio-taupe hover:text-studio-espresso"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-studio-ivory border border-studio-border flex flex-col justify-between hover:border-champagne-500 transition-colors shadow-subtle"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-studio-cream border-b border-studio-border">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-studio-espresso/85 text-[10px] uppercase font-semibold tracking-widest text-champagne-300">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-studio-muted mb-2">
                      <Clock className="w-3.5 h-3.5 text-champagne-600" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-serif text-xl text-studio-espresso font-medium group-hover:text-champagne-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-studio-taupe leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-studio-border/60">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-2.5 bg-studio-cream/60 hover:bg-studio-espresso hover:text-studio-ivory text-studio-espresso text-xs font-semibold uppercase tracking-luxury transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
