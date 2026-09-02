import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Heart, Activity, UserCheck } from "lucide-react";
import { HEALTH_PACKAGES } from "@/data/healthPackagesData";

const iconMap: Record<string, typeof Heart> = {
  "basic-cardiac": Heart,
  "advance-cardiac": Heart,
  "premium-cardiac": Heart,
  "wellness-package": Activity,
  "senior-citizen-wellness-pack": UserCheck,
  "whole-body-checkup": Activity,
  "diabetic-health-checkup": Sparkles,
};

const HealthPackages = () => {
  // Showcase top 3 representative packages on homepage
  const featuredIds = ["advance-cardiac", "whole-body-checkup", "diabetic-health-checkup"];
  const featured = HEALTH_PACKAGES.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="section-padding bg-surface">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Specialized Health Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Affordable Preventive Health Checkups in Jaipur
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Early screening saves lives. Benefit from up to 62% cash discounts on complete cardiac, whole body, diabetic, and senior citizen wellness packages.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featured.map((pkg) => {
            const Icon = iconMap[pkg.id] || Activity;
            const isHighlight = pkg.id === "whole-body-checkup";

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-card shadow-card card-hover overflow-hidden ${
                  isHighlight
                    ? "border-primary ring-2 ring-primary/20 shadow-lg-blue"
                    : "border-border"
                }`}
              >
                <div>
                  {isHighlight && (
                    <div className="bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-2">
                      ⭐ Most Comprehensive Master Checkup
                    </div>
                  )}
                  <div className="p-7">
                    <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-5">
                      <Icon size={28} />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        {pkg.categoryLabel}
                      </span>
                      <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">
                        {pkg.discountPercent}% OFF
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2 leading-snug">
                      {pkg.title}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-foreground font-display">
                        ₹{pkg.offerPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-muted-foreground line-through text-xs">
                        ₹{pkg.totalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 ml-auto">
                        Save ₹{pkg.savings}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                      {pkg.tagline}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wide text-foreground/80">
                        Includes {pkg.testsCount} Tests & Consultations:
                      </div>
                      {pkg.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <Check size={12} />
                          </div>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7">
                  <Link
                    to="/health-packages"
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-all hover:opacity-90 ${
                      isHighlight
                        ? "bg-gradient-primary text-primary-foreground shadow-md-blue"
                        : "bg-primary-light text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    View Package Details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All CTA Banner */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 text-center max-w-3xl mx-auto shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display font-bold text-lg text-foreground">
              Looking for Cardiac, Senior Citizen, or Basic Wellness Packs?
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              Explore all 7 specialized health packages with full test breakdowns and comparison.
            </p>
          </div>
          <Link
            to="/health-packages"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl text-xs md:text-sm whitespace-nowrap shadow-md flex items-center gap-2"
          >
            Explore All 7 Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
