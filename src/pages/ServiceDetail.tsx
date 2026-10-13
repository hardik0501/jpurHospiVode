import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft, ArrowRight, Calendar, Check, Heart, Bone, Brain, Stethoscope, Scissors, Baby, Activity, Microscope, Dumbbell, User, Eye, Ear, Sparkles, Phone, type LucideIcon } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { getSpecialityById, getDoctorsForSpeciality, specialities, HOSPITAL_CONTACT } from "@/data/hospitalData";

const iconMap: Record<string, LucideIcon> = {
  Heart, Bone, Brain, Stethoscope, Scissors, User, Baby, Activity, Microscope, Dumbbell, Eye, Ear, Sparkles,
};

const extractConsultationBlock = (html?: string) => {
  if (!html) return { mainHtml: "", consultationHtml: "" };
  
  const markers = [
    "<h2>Book ",
    "<h2>Health Checkup ",
    "<h2>Contact ",
    "<p><strong>Location:</strong>",
    "<p>For accurate, fast, and reliable",
    "<p>Don't let pain or stiffness"
  ];
  
  let splitIndex = -1;
  
  for (const marker of markers) {
    const idx = html.indexOf(marker);
    if (idx !== -1 && (splitIndex === -1 || idx < splitIndex)) {
      splitIndex = idx;
    }
  }
  
  let mainHtml = html;
  let consultationHtml = "";
  
  if (splitIndex !== -1) {
    mainHtml = html.substring(0, splitIndex).trim();
    consultationHtml = html.substring(splitIndex).trim();
  }
  
  return {
    mainHtml,
    consultationHtml
  };
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const speciality = getSpecialityById(id || "");
  const associatedDoctors = getDoctorsForSpeciality(id || "");

  if (!speciality) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <HospitalHeader />
        <main className="internal-hero-pt pb-20">
          <div className="container-width text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary font-semibold hover:underline">← Back to Services</Link>
          </div>
        </main>
        <ContactFooter />
      </div>
    );
  }

  const { mainHtml, consultationHtml } = extractConsultationBlock(speciality.htmlContent);

  // Determine if a custom heading should be prepended
  let customHeading = "";
  if (consultationHtml && !consultationHtml.includes("<h1") && !consultationHtml.includes("<h2")) {
    if (speciality.id === "pediatrics") {
      customHeading = "<h2>Book a Pediatrics Consultation</h2>";
    } else if (speciality.id === "diagnostics") {
      customHeading = "<h2>Book a Diagnostics & Imaging Consultation</h2>";
    } else if (speciality.id === "physiotherapy") {
      customHeading = "<h2>Book a Physiotherapy & Rehabilitation Consultation</h2>";
    } else {
      customHeading = "<h2>Book a Consultation</h2>";
    }
  }

  const Icon = iconMap[speciality.icon] || Heart;
  const otherServices = specialities.filter((s) => s.id !== id).slice(0, 5);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={speciality.metaTitle || `${speciality.name} Services`}
        description={speciality.metaDescription || speciality.shortDesc}
        canonical={`/services/${speciality.id}`}
      />
      <HospitalHeader />
      <main>
        {/* Breadcrumb */}
        <section className="internal-breadcrumb-pt pb-3 md:pb-4 bg-surface border-b border-border">
          <div className="container-width flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors flex-shrink-0">Home</Link>
            <span className="flex-shrink-0">/</span>
            <Link to="/services" className="hover:text-primary transition-colors flex-shrink-0">Services</Link>
            <span className="flex-shrink-0">/</span>
            <span className="text-foreground font-medium truncate max-w-full">{speciality.name}</span>
          </div>
        </section>

        {/* Hero */}
        <section className="relative h-64 sm:h-72 md:h-96 overflow-hidden">
          <img src={speciality.img} alt={speciality.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-width">
              <div className="max-w-2xl">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${speciality.bg} flex items-center justify-center mb-4 md:mb-5 shadow-lg`}>
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 ${speciality.color}`} />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-2 md:mb-3">{speciality.name}</h1>
                <p className="text-white/80 text-base md:text-xl">{speciality.shortDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                {/* About */}
                {speciality.htmlContent ? (
                  <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-card p-5 md:p-8 prose prose-sm sm:prose-base prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-justify prose-li:text-muted-foreground prose-strong:text-foreground">
                    <div dangerouslySetInnerHTML={{ __html: mainHtml }} />
                  </div>
                ) : (
                  <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-card p-5 md:p-8">
                    <h1 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3 md:mb-4">About {speciality.name}</h1>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">{speciality.fullDesc}</p>
                  </div>
                )}

                {/* Treatments */}
                <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-card p-5 md:p-8">
                  <h1 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 md:mb-6">Treatments & Procedures</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                    {speciality.treatments.map((treatment) => (
                      <div key={treatment} className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3 md:py-3.5 border border-border/50">
                        <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full ${speciality.bg} flex items-center justify-center flex-shrink-0`}>
                          <Check className={`w-3 h-3 md:w-3.5 md:h-3.5 ${speciality.color}`} />
                        </div>
                        <span className="text-foreground text-sm font-medium">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Associated Doctors */}
                {associatedDoctors.length > 0 && (
                  <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-card p-5 md:p-8">
                    <h1 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 md:mb-6">Our Specialists</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {associatedDoctors.map((doc) => (
                        <Link
                          to={`/doctors/${doc.id}`}
                          key={doc.id}
                          className="group flex flex-row items-center gap-3 md:gap-4 bg-surface rounded-xl md:rounded-2xl p-3 md:p-4 border border-border hover:border-primary hover:shadow-md transition-all text-left"
                        >
                          <img
                        src={doc.img}
                        alt={doc.name}
                        loading="lazy"
                        decoding="async"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover object-top flex-shrink-0"
                      />
                          <div className="flex-1 min-w-0">
                            <div className="font-display font-bold text-sm md:text-base text-foreground truncate">{doc.name}</div>
                            <div className="text-muted-foreground text-[11px] md:text-xs mb-0.5 md:mb-1 truncate">{doc.qual}</div>
                            <div className="text-muted-foreground text-[11px] md:text-xs mb-1.5 md:mb-2 truncate">{doc.exp} Experience</div>
                            <span className="inline-flex items-center justify-start gap-1 text-primary text-xs font-semibold group-hover:gap-1.5 transition-all">
                              View Profile <ArrowRight size={10} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Consultation Info Block */}
                {consultationHtml && (
                  <div className="rounded-xl md:rounded-2xl border-2 border-primary/20 shadow-card p-5 md:p-8 prose prose-sm sm:prose-base prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-justify prose-li:text-muted-foreground prose-strong:text-foreground bg-gradient-to-br from-primary/5 to-transparent">
                    <div dangerouslySetInnerHTML={{ __html: customHeading + consultationHtml }} />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Book Appointment CTA */}
                <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-card p-5 md:p-6 sticky top-24 md:top-28">
                  <h1 className="font-display font-bold text-base md:text-lg text-foreground mb-2 md:mb-3">Need an Appointment?</h1>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-5">
                    Book a consultation with our {speciality.name} specialist today.
                  </p>
                  <a
                    href="/#appointment"
                    className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-xl py-2.5 md:py-3 text-sm md:text-base hover:opacity-90 transition-opacity mb-3 w-full"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" /> Book Appointment
                  </a>
                  <a
                    href={`tel:${HOSPITAL_CONTACT.primaryPhone}`}
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold rounded-xl py-2.5 md:py-3 text-sm md:text-base hover:bg-primary-light transition-colors mb-3 w-full"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${HOSPITAL_CONTACT.whatsapp}?text=Hello! I'd like to consult a ${speciality.name} specialist.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-xl py-2.5 md:py-3 text-sm md:text-base hover:bg-green-600 transition-colors w-full"
                  >
                    WhatsApp Us
                  </a>
                </div>

                {/* Other Specialities */}
                <div className="bg-card rounded-xl md:rounded-2xl border border-border shadow-card p-5 md:p-6">
                  <h1 className="font-display font-bold text-base md:text-lg text-foreground mb-3 md:mb-4">Other Services</h1>
                  <div className="space-y-2">
                    {otherServices.map((s) => {
                      const SIcon = iconMap[s.icon] || Heart;
                      return (
                        <Link
                          to={`/services/${s.id}`}
                          key={s.id}
                          className="flex items-center gap-3 px-3 py-2 md:py-2.5 rounded-xl hover:bg-surface transition-colors group"
                        >
                          <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg ${s.bg} flex items-center justify-center flex-shrink-0`}>
                            <SIcon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${s.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-foreground text-[13px] md:text-sm font-medium block truncate">{s.name}</span>
                            <span className="text-muted-foreground text-[11px] md:text-xs truncate block">{s.shortDesc}</span>
                          </div>
                          <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
