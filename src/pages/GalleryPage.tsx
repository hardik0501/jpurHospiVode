import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileSearch, Image as ImageIcon } from "lucide-react";

// NOTE: Images are expected in public/Gallery with these filenames.
// Paths below use the public URL: /Gallery/<filename>
const galleryImages = [
  "/Gallery/1.jpg",
  "/Gallery/2.jpg",
  "/Gallery/3.jpg",
  "/Gallery/4.jpg",
  "/Gallery/5.jpg",
  "/Gallery/6.jpg",
  "/Gallery/7-1.jpg",
  "/Gallery/8-1.jpg",
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Gallery
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A glimpse of Jaipur Hospital&apos;s facilities, care environment and infrastructure.
            </p>
          </div>
        </section>

        {/* Search (static UI) */}
        <section className="bg-surface border-b border-border">
          <div className="container-width max-w-4xl py-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileSearch className="w-4 h-4 text-primary" />
                <span>Write search keyword &amp; press Enter</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image grid */}
        <section className="section-padding bg-surface">
          <div className="container-width max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <div className="aspect-[4/3] bg-gradient-surface">
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                      <ImageIcon className="w-4 h-4" />
                      Jaipur Hospital Gallery
                    </span>
                  </div>
                </div>
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

export default GalleryPage;

