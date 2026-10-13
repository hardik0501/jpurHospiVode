import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { getBlogBySlug, getRecentBlogs } from "@/data/blogData";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || "");
  const recent = getRecentBlogs(5).filter((p) => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <SEO title="Blog Not Found | Jaipur Hospital" description="The requested blog could not be found. Return to the Jaipur Hospital blog listing." canonical="/blogs" robots="noindex, nofollow" />
        <HospitalHeader />
        <main className="internal-hero-pt pb-20">
          <div className="container-width text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Blog Not Found</h1>
            <Link to="/blogs" className="text-primary font-semibold hover:underline">← Back to Blogs</Link>
          </div>
        </main>
        <ContactFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO
        title={`${post.title} | Jaipur Hospital Blog`}
        description={post.excerpt}
        canonical={`/blogs/${post.slug}`}
      />
      <HospitalHeader />
      <main>
        <section className="internal-breadcrumb-pt pb-4 bg-surface border-b border-border">
          <div className="container-width flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </div>
        </section>

        <article className="section-padding bg-surface">
          <div className="container-width max-w-4xl">
            <div className="mb-6">
              <span className="inline-block text-primary font-semibold text-sm mb-2">{post.category}</span>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={16} />
                  {post.author}
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-card mb-8">
              <img
                src={post.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full aspect-video object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
              />
            </div>

            <div className="prose prose-neutral max-w-none">
              {post.content.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:underline"
            >
              <ArrowLeft size={18} /> Back to all blogs
            </Link>
          </div>
        </article>

        {recent.length > 0 && (
          <section className="py-12 bg-background border-t border-border">
            <div className="container-width max-w-4xl">
              <h2 className="text-xl font-display font-bold text-foreground mb-6">More from our blog</h2>
              <ul className="space-y-3">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blogs/${p.slug}`}
                      className="text-foreground hover:text-primary font-medium transition-colors"
                    >
                      {p.title}
                    </Link>
                    <span className="text-muted-foreground text-sm ml-2">
                      — {new Date(p.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default BlogDetailPage;
