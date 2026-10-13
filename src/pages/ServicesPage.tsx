import { Link } from "react-router-dom";
import { ArrowRight, Heart, Bone, Brain, Stethoscope, Scissors, Baby, Activity, Microscope, Dumbbell, User, Eye, Ear, Sparkles, type LucideIcon } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { specialities } from "@/data/hospitalData";
import { SEO } from "@/components/SEO";

const iconMap: Record<string, LucideIcon> = {
  Heart, Bone, Brain, Stethoscope, Scissors, User, Baby, Activity, Microscope, Dumbbell, Eye, Ear, Sparkles,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title="Our Medical Services" 
        description="Explore our specialized healthcare services at Jaipur Hospital, including Orthopedics, Cardiology, Gynecology, General Medicine, Neurology, ICU & Emergency care."
        canonical="/services"
      />
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-10 md:pb-14 bg-gradient-primary">
          <div className="container-width text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-3">
              Our Services
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3 md:mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              Jaipur Hospital provides expert care in cardiology, orthopedics, neurology, and emergency services with advanced technology.
            </p>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {specialities.map((spec) => {
                const Icon = iconMap[spec.icon] || Heart;
                return (
                  <Link
                    to={`/services/${spec.id}`}
                    key={spec.id}
                    aria-label={`View details for ${spec.name}`}
                    className="group bg-card rounded-xl md:rounded-2xl border border-border shadow-card overflow-hidden card-hover flex flex-col"
                  >
                    {/* Image */}
                    <div className="h-40 sm:h-48 overflow-hidden relative">
                      <img
                        src={spec.img}
                        alt={spec.name}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${spec.bg} flex items-center justify-center shadow-md`}>
                        <Icon className={`w-5 h-5 sm:w-[22px] sm:h-[22px] ${spec.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h1 className="font-display font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {spec.name}
                      </h1>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3 text-left sm:text-justify">
                        {spec.fullDesc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ServicesPage;
