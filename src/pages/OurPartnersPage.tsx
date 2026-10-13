import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileSearch, ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Indus Jaipur Ortho-Care Foundation",
    description:
      "A dedicated orthopaedic foundation working closely with Jaipur Hospital to advance joint replacement, trauma care and academic activities in orthopaedics.",
  },
  {
    name: "Jaipur Heart Institute",
    description:
      "A focused cardiac care initiative associated with Jaipur Hospital, supporting comprehensive cardiology and cardiac surgery services for patients across Rajasthan.",
  },
  {
    name: "Jaipur Hospital College of Nursing & Physiotherapy",
    description:
      "The academic wing of Jaipur Hospital offering nursing and physiotherapy education, clinical postings and hands-on training within the hospital environment.",
  },
];

const OurPartnersPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Partners
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Jaipur Hospital collaborates with trusted institutions in orthopaedics, cardiology and healthcare
              education to deliver better outcomes for patients and learners.
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

        {/* Partner cards */}
        <section className="section-padding bg-surface">
          <div className="container-width max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-card rounded-2xl border border-border shadow-card overflow-hidden flex flex-col"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                    {/* Placeholder image area – replace with real image later */}
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Partner Image
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-display font-semibold text-foreground mb-2 text-sm md:text-base">
                      {partner.name}
                    </h2>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1">
                      {partner.description}
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-60 cursor-default"
                    >
                      View details coming soon
                      <ArrowRight className="w-3 h-3" />
                    </button>
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

export default OurPartnersPage;

