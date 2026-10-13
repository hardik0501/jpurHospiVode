import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Globe,
  GraduationCap,
  Award,
  ArrowLeft,
  Phone,
  MessageCircle,
  Banknote,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { getDoctorById } from "@/data/hospitalData";

const DoctorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = getDoctorById(id || "");

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <SEO
          title="Doctor Not Found | Jaipur Hospital"
          description="The doctor profile could not be found. Return to the doctor listing for Jaipur Hospital."
          canonical="/doctors"
          robots="noindex, nofollow"
        />
        <HospitalHeader />
        <main className="pt-32 pb-20">
          <div className="container-width text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Doctor Not Found</h1>
            <Link to="/doctors" className="text-primary font-semibold hover:underline">
              ← Back to Doctors
            </Link>
          </div>
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Map department to speciality page slug if applicable
  const deptServiceSlug =
    doctor.dept.toLowerCase().includes("ortho")
      ? "orthopaedics"
      : doctor.dept.toLowerCase().includes("cardio")
      ? "cardiology"
      : doctor.dept.toLowerCase().includes("gyn")
      ? "gynaecology"
      : doctor.dept.toLowerCase().includes("ent")
      ? "ent"
      : doctor.dept.toLowerCase().includes("pediat")
      ? "pediatrics"
      : doctor.dept.toLowerCase().includes("physio")
      ? "physiotherapy"
      : doctor.dept.toLowerCase().includes("dent")
      ? "dentistry"
      : null;

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO
        title={`${doctor.name} - ${doctor.designation || doctor.dept} | Jaipur Hospital`}
        description={`Book appointment with ${doctor.name}, ${doctor.qual} in ${doctor.dept} at Jaipur Hospital. OPD Timings: ${
          doctor.schedule?.[0] ? `${doctor.schedule[0].day} ${doctor.schedule[0].time}` : "10:00 AM - 5:00 PM"
        }.`}
        canonical={`/doctors/${doctor.id}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": doctor.name,
          "image": doctor.img.startsWith("http") ? doctor.img : `https://jaipurhospital.co.in${doctor.img}`,
          "jobTitle": doctor.designation || doctor.qual,
          "medicalSpecialty": doctor.dept,
          "description": doctor.bio,
          "availableService": doctor.specializations,
          "hospitalAffiliation": {
            "@type": "Hospital",
            "name": "Jaipur Hospital",
            "url": "https://jaipurhospital.co.in",
          },
        }}
      />
      <HospitalHeader />
      <main>
        {/* Breadcrumb Navigation */}
        <section className="pt-28 pb-4 bg-surface border-b border-border">
          <div className="container-width flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/doctors" className="hover:text-primary transition-colors">
                Doctors
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground font-semibold">{doctor.name}</span>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold hover:underline"
            >
              <ArrowLeft size={13} /> Back to All Doctors
            </Link>
          </div>
        </section>

        {/* Profile Section */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left - Photo & Quick Info Card */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden sticky top-28">
                  <div className="h-80 sm:h-96 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center relative">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-border/80 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 text-[11px] font-bold text-primary">
                      <ShieldCheck size={14} className="text-primary" />
                      Verified Specialist
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h1 className="font-display font-bold text-2xl text-foreground mb-1">{doctor.name}</h1>
                    <p className="text-muted-foreground text-sm font-medium mb-1.5">{doctor.qual}</p>
                    {doctor.designation && (
                      <p className="text-primary text-sm font-semibold mb-3">{doctor.designation}</p>
                    )}

                    <div className="flex flex-wrap justify-center items-center gap-1.5 my-3">
                      <span className="inline-block bg-primary-light text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {doctor.dept}
                      </span>
                      {doctor.fees && (
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                          <Banknote size={13} /> Fee: {doctor.fees}
                        </span>
                      )}
                      {doctor.extension && (
                        <span className="inline-block bg-muted text-foreground text-xs font-medium px-2.5 py-1 rounded-full border border-border">
                          Ext: {doctor.extension}
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-xs mb-5 font-medium">{doctor.exp} Experience</p>

                    <div className="flex flex-col gap-2.5">
                      <a
                        href="/book-appointment"
                        className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold rounded-xl py-3.5 hover:opacity-95 shadow-md hover:shadow-lg transition-all text-sm"
                      >
                        <Calendar size={16} /> Book Appointment
                      </a>
                      <a
                        href="tel:+919257029901"
                        className="flex items-center justify-center gap-2 border border-primary/30 text-primary font-bold rounded-xl py-3 hover:bg-primary-light transition-colors text-sm"
                      >
                        <Phone size={16} /> Call (+91 92570 29901)
                      </a>
                      <a
                        href={`https://wa.me/919257029901?text=${encodeURIComponent(
                          `Hello Jaipur Hospital! I would like to book an appointment with ${doctor.name} (${doctor.dept}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-xl py-3 hover:bg-green-600 transition-colors text-sm shadow-sm"
                      >
                        <MessageCircle size={16} /> WhatsApp Consultation
                      </a>
                    </div>

                    {deptServiceSlug && (
                      <div className="mt-5 pt-4 border-t border-border">
                        <Link
                          to={`/services/${deptServiceSlug}`}
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary font-medium transition-colors"
                        >
                          <Building2 size={13} /> View {doctor.dept} Department
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right - Profile Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Bio */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
                    About {doctor.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base">{doctor.bio}</p>
                </div>

                {/* OPD Schedule */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-primary" /> OPD Schedule & Timings
                  </h2>
                  <div className="space-y-3">
                    {doctor.schedule.map((slot, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface rounded-xl px-5 py-3.5 border border-border/60 gap-2"
                      >
                        <span className="font-semibold text-foreground text-sm">{slot.day}</span>
                        <span className="text-primary font-bold text-sm bg-primary-light px-3.5 py-1 rounded-lg w-fit">
                          {slot.time}
                        </span>
                      </div>
                    ))}
                    {doctor.otDays && (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50/60 rounded-xl px-5 py-3.5 border border-blue-100 gap-2">
                        <span className="font-semibold text-blue-900 text-sm">
                          Operation Theatre (OT) Days
                        </span>
                        <span className="text-blue-700 font-bold text-sm">{doctor.otDays}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Areas of Expertise */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Award size={20} className="text-primary" /> Areas of Expertise & Clinical Focus
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {doctor.specializations.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-surface border border-border/70 hover:border-primary/40 transition-colors"
                      >
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm font-medium leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" /> Education & Qualifications
                  </h2>
                  <ul className="space-y-3">
                    {doctor.education.map((edu) => (
                      <li key={edu} className="flex items-center gap-3 text-foreground font-medium text-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages Spoken */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Globe size={20} className="text-primary" /> Languages Spoken
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-surface text-foreground text-sm font-semibold px-4 py-2 rounded-full border border-border"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Consultation Callout */}
                <div className="bg-gradient-to-r from-primary/10 via-primary-light to-transparent rounded-2xl border border-primary/20 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      Need a consultation with {doctor.name}?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Walk-in consultations during OPD hours (10 AM – 5 PM) or book your priority slot in advance.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/919257029901?text=${encodeURIComponent(
                      `Hello Jaipur Hospital! I would like to book a priority consultation with ${doctor.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-all text-sm shadow-md"
                  >
                    Book Priority OPD
                  </a>
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

export default DoctorDetail;

