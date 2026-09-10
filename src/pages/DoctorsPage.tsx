import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronDown, ArrowRight, Clock, Banknote } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { doctors, DOCTOR_DEPARTMENTS } from "@/data/hospitalData";
import { SEO } from "@/components/SEO";

const DoctorsPage = () => {
  const [selected, setSelected] = useState("All Departments");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered = selected === "All Departments"
    ? doctors
    : doctors.filter((d) => d.dept === selected);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO title="Our Expert Doctors | OPD Schedule & Specialists" description="Meet our team of specialist doctors across Orthopaedics, Cardiology, General Medicine, Gynaecology, ENT, Ophthalmology and more in Jaipur Hospital." canonical="/doctors" />
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Expert Doctors & OPD Schedule
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Meet our team of experienced doctors and specialists providing compassionate, world-class healthcare.
            </p>
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            {/* Filter */}
            <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
              <div className="text-muted-foreground text-sm font-medium">
                Showing <span className="text-foreground font-bold">{filtered.length}</span> doctors
              </div>
              <div className="relative w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto flex justify-between sm:justify-start items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 text-sm font-medium text-foreground shadow-sm hover:border-primary transition-colors"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {selected}
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-full sm:w-56 bg-card border border-border rounded-xl shadow-lg z-30 max-h-80 overflow-y-auto">
                    {DOCTOR_DEPARTMENTS.map((dept) => (
                      <button
                        key={dept}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary-light transition-colors ${selected === dept ? "text-primary font-semibold bg-primary-light" : "text-foreground"
                          }`}
                        onClick={() => { setSelected(dept); setDropdownOpen(false); }}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Doctor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((doc) => (
                <Link
                  to={`/doctors/${doc.id}`}
                  key={doc.id}
                  className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-4 p-5">
                      <div className="w-24 h-28 sm:w-28 sm:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-surface border border-border/50">
                        <img
                          src={doc.img}
                          alt={doc.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-bold text-foreground text-base mb-1 truncate">{doc.name}</div>
                        <div className="text-muted-foreground text-xs line-clamp-2 mb-2">{doc.qual}</div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          <span className="inline-block bg-primary-light text-primary text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                            {doc.dept}
                          </span>
                          {doc.fees && (
                            <span className="inline-flex items-center gap-0.5 bg-green-50 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-green-200">
                              <Banknote size={11} /> {doc.fees}
                            </span>
                          )}
                        </div>
                        {doc.extension && (
                          <div className="text-muted-foreground text-[11px]">Room / Ext: <span className="font-medium text-foreground">{doc.extension}</span></div>
                        )}
                      </div>
                    </div>

                    {/* Schedule Pill */}
                    {doc.schedule && doc.schedule.length > 0 && (
                      <div className="mx-5 mb-4 p-2.5 rounded-xl bg-surface border border-border/60 flex items-center gap-2 text-xs">
                        <Clock size={14} className="text-primary flex-shrink-0" />
                        <div className="truncate text-foreground font-medium">
                          <span className="text-muted-foreground">{doc.schedule[0].day}:</span> {doc.schedule[0].time}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-5 py-3 bg-muted/30 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{doc.exp} Experience</span>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-bold group-hover:gap-2 transition-all">
                      View Profile <ArrowRight size={13} />
                    </span>
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

export default DoctorsPage;
