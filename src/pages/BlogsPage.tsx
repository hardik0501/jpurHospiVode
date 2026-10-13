import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { blogPosts, getRecentBlogs } from "@/data/blogData";

const BlogsPage = () => {
  const posts = getRecentBlogs(blogPosts.length);

  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        <section className="internal-hero-pt pb-12 sm:pb-16 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Blogs – Jaipur Hospital
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Health tips, patient information, and updates from our doctors and hospital.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blogs/${post.slug}`}
                  className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:border-primary/40 transition-colors flex flex-col"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-surface">
                    <img
                      src={post.img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary mb-2">{post.category}</span>
                    <h2 className="font-display font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default BlogsPage;
