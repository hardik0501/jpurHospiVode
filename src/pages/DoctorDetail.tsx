import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Globe, GraduationCap, Award, ArrowLeft, Phone, MessageCircle, Banknote, ShieldAlert, Sparkles } from "lucide-react";
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
        <SEO title="Doctor Not Found | Jaipur Hospital" description="The doctor profile could not be found. Return to the doctor listing for Jaipur Hospital." canonical="/doctors" robots="noindex, nofollow" />
        <HospitalHeader />
        <main className="pt-32 pb-20">
          <div className="container-width text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Doctor Not Found</h1>
            <Link to="/doctors" className="text-primary font-semibold hover:underline">← Back to Doctors</Link>
          </div>
        </main>
        <ContactFooter />
      </div>
    );
  }

  const phoneNum = doctor.phone || "9257029901";
  const waNum = doctor.phone ? `91${doctor.phone}` : "919257029901";

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO
        title={`${doctor.name} - ${doctor.dept} Specialist | Jaipur Hospital`}
        description={`Book an appointment with ${doctor.name}, ${doctor.qual} in ${doctor.dept} at Jaipur Hospital. OPD Timings, consultation fee and contact details.`}
        canonical={`/doctors/${doctor.id}`}
      />
      <HospitalHeader />
      <main>
        {/* Breadcrumb */}
        <section className="pt-28 pb-4 bg-surface border-b border-border">
          <div className="container-width">
            <Link to="/doctors" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
              <ArrowLeft size={14} /> Back to All Doctors
            </Link>
          </div>
        </section>

        {/* Profile Section */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left - Photo & Quick Info */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden sticky top-28">
                  <div className="h-72 overflow-hidden bg-gradient-surface">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="font-display font-bold text-xl text-foreground mb-1">{doctor.name}</h1>
                    <p className="text-muted-foreground text-sm mb-1">{doctor.qual}</p>
                    {doctor.designation && (
                      <p className="text-primary text-xs font-semibold mb-2">{doctor.designation}</p>
                    )}
                    
                    <div className="flex flex-wrap justify-center items-center gap-1.5 my-3">
                      <span className="inline-block bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
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
                      {doctor.codeNumber && (
                        <span className="inline-block bg-muted text-foreground text-xs font-medium px-2.5 py-1 rounded-full border border-border">
                          Code: {doctor.codeNumber}
                        </span>
                      )}
                      {doctor.rghsCard && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200">
                          <ShieldAlert size={12} /> {doctor.rghsCard}
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-5">{doctor.exp} Experience</p>

                    <div className="flex flex-col gap-2">
                      <a
                        href="/book-appointment"
                        className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-xl py-3 hover:opacity-90 transition-opacity"
                      >
                        <Calendar size={16} /> Book Appointment
                      </a>
                      <a
                        href={`tel:+91${phoneNum}`}
                        className="flex items-center justify-center gap-2 border border-primary/30 text-primary font-semibold rounded-xl py-3 hover:bg-primary-light transition-colors"
                      >
                        <Phone size={16} /> {doctor.phone ? `Call Doctor (${doctor.phone})` : "Call Hospital"}
                      </a>
                      <a
                        href={`https://wa.me/${waNum}?text=Hello! I'd like to book an appointment with ${doctor.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-xl py-3 hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle size={16} /> WhatsApp Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">About {doctor.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                </div>

                {/* OPD Schedule */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-primary" /> OPD Schedule & Timings
                  </h2>
                  <div className="space-y-3">
                    {doctor.schedule.map((slot, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-surface rounded-xl px-5 py-3 border border-border/50">
                        <span className="font-medium text-foreground text-sm">{slot.day}</span>
                        <span className="text-primary font-bold text-sm bg-primary-light/50 px-3 py-1 rounded-lg">{slot.time}</span>
                      </div>
                    ))}
                    {doctor.otDays && (
                      <div className="flex items-center justify-between bg-blue-50/50 rounded-xl px-5 py-3 border border-blue-100">
                        <span className="font-medium text-blue-900 text-sm">Operation Theatre (OT) Days</span>
                        <span className="text-blue-700 font-bold text-sm">{doctor.otDays}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" /> Education & Qualifications
                  </h2>
                  <ul className="space-y-3">
                    {doctor.education.map((edu) => (
                      <li key={edu} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specializations */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Award size={20} className="text-primary" /> Areas of Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec) => (
                      <span key={spec} className="bg-primary-light text-primary text-sm font-medium px-4 py-2 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Globe size={20} className="text-primary" /> Languages Spoken
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang) => (
                      <span key={lang} className="bg-surface text-foreground text-sm font-medium px-4 py-2 rounded-full border border-border">
                        {lang}
                      </span>
                    ))}
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

export default DoctorDetail;
