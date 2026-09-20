import { useState } from "react";
import { Building2, Wifi, Shield, Clock, Thermometer, Heart, Baby, Microscope, Stethoscope, Bed, Syringe, Ambulance } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import icuImg from "@/assets/facility-icu.jpg";
import otImg from "@/assets/facility-ot.jpg";
import roomImg from "@/assets/facility-room.jpg";
import waitingImg from "@/assets/facility-waiting.jpg";
import labImg from "@/assets/facility-lab.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";
import heartImg from "@/assets/service-heart.jpg";
import pathImg from "@/assets/service-pathology.jpg";
import cathLabImg from "@/assets/facility-cath-lab.png";
import dialysisImg from "@/assets/facility-dialysis.png";
import canteenImg from "@/assets/facility-canteen.png";

const facilities = [
  {
    category: "critical-care",
    img: icuImg,
    title: "MICU (Medical Intensive Care Unit)",
    desc: "A fully integrated Medical Intensive Care Unit (MICU) dedicated to managing acute critical illnesses, severe respiratory disorders, multi-organ dysfunction, and metabolic emergencies under continuous intensivist supervision.",
    icon: Heart,
    features: ["Advanced Ventilator Therapy", "Continuous Multichannel Monitoring", "Dedicated ICU Specialists 24/7", "Bedside Hemodialysis Access"],
  },
  {
    category: "critical-care",
    img: heartImg,
    title: "CCU (Cardiac Care Unit)",
    desc: "Specialized Coronary Care Unit configured for real-time telemetry, acute cardiac emergency responses, heart failures, acute coronary syndromes, and critical cardiac event recoveries.",
    icon: Heart,
    features: ["Continuous Telemetry Monitoring", "Emergency Defibrillators & Pacers", "Thrombolytic Therapy Services", "Cardiac ICU Trained Nursing staff"],
  },
  {
    category: "critical-care",
    img: icuImg,
    title: "CRR (Cardiac Thoracic Recovery Room)",
    desc: "High-dependency recovery suite specializing in the safe transition and intensive therapeutic management of post-operative cardiac and thoracic surgical patients.",
    icon: Shield,
    features: ["Post-Surgical Triage Support", "Hemodynamic Invasive Care", "Vasoactive Drug Infusion Management", "Immediate Specialist Cover"],
  },
  {
    category: "surgical",
    img: cathLabImg,
    title: "Cath Lab (Cardiac Catheterization)",
    desc: "Advanced intervention suite equipped with high-definition digital angiography systems, enabling precise coronary angioplasty, diagnostic catheterizations, stenting, and pacemaker implants.",
    icon: Shield,
    features: ["Coronary Angiography", "Primary & Complex Angioplasty", "Pacemaker System Implants", "Digital Flat Panel Angiography"],
  },
  {
    category: "surgical",
    img: otImg,
    title: "Modular Operation Theatres",
    desc: "State-of-the-art modular OTs designed with clinical-grade HEPA filters, laminar airflows, and high-tech surgical pendants to maximize sterility and support advanced orthopaedic, neuro, and general procedures.",
    icon: Syringe,
    features: ["HEPA Filtration & Sterility Control", "Laminar Airflow Control System", "High-Resolution C-Arm Imaging", "Specialized Laparoscopic Towers"],
  },
  {
    category: "critical-care",
    img: dialysisImg,
    title: "Dialysis Unit",
    desc: "A dedicated dialysis center offering advanced hemodialysis therapies under direct nephrologist supervision, utilizing modern sterilization and treatment equipment.",
    icon: Thermometer,
    features: ["High-Efficiency Hemodialysis", "Nephrologist-Led Cover", "Patient Comfort Recliners", "Sterilization & Cross-Infection Controls"],
  },
  {
    category: "diagnostics",
    img: pathImg,
    title: "Pathology Laboratory",
    desc: "NABL-calibrated fully automated laboratory providing round-the-clock testing across clinical biochemistry, hematology, serology, and microbiology disciplines.",
    icon: Microscope,
    features: ["NABL Quality Protocols", "Automated Clinical Analyzers", "Rapid Report Turnarounds", "24/7 Specimen Counter"],
  },
  {
    category: "diagnostics",
    img: labImg,
    title: "Radiology & Imaging Services",
    desc: "Comprehensive diagnostic imaging division offering high-resolution CT scans, digital X-rays, multi-dimensional ultrasound, and color Doppler scanning services.",
    icon: Microscope,
    features: ["Multi-slice CT Scan Integration", "Low-Radiation Digital X-Rays", "Ultrasound & Color Doppler", "Certified Radiologist Reporting"],
  },
  {
    category: "amenities",
    img: waitingImg,
    title: "Reception & Waiting Area",
    desc: "Spacious, comfortable, and well-organized reception lobby with welcoming lounges, registration desks, digital token displays, and help desk assistants.",
    icon: Building2,
    features: ["Help Desk Guidance", "Digital Token Navigation System", "Spacious Lounge Seating", "Wheelchair-Accessible Layout"],
  },
  {
    category: "amenities",
    img: canteenImg,
    title: "In-house Canteen",
    desc: "Hygienic and strictly audited food cafeteria delivering balanced, doctor-approved therapeutic meal plans for patients and clean, nutritious options for family attendants.",
    icon: Building2,
    features: ["Therapeutic Patient Meal Plans", "Nutritional Audit & Cleanness", "Patient Meal Tray Distribution", "Attendant & Visitor Cafeteria"],
  },
  {
    category: "amenities",
    img: roomImg,
    title: "Patient Rooms & Suites",
    desc: "Comfortable recovery settings including premium private suites, semi-private rooms, and general wards, all fitted with patient-nurse call networks and climate control.",
    icon: Bed,
    features: ["Deluxe Private AC Suites", "Nurse Call Response Network", "Attendant Bedding Accommodations", "Clean En-Suite Washrooms"],
  },
  {
    category: "amenities",
    img: emergencyImg,
    title: "24/7 Emergency & Trauma Care",
    desc: "Fully equipped emergency department prepared for rapid triage, cardiac resuscitations, trauma care, and backed by a 24/7 fleet of Advanced Life Support (ALS) ambulances.",
    icon: Ambulance,
    features: ["Trauma Resuscitation Bays", "Advanced Life Support Fleet", "Board-Certified Trauma Physicians", "24/7 Dispatch Coordination"],
  },
];

const categories = [
  { id: "all", label: "All Facilities" },
  { id: "critical-care", label: "Critical Care & ICU" },
  { id: "surgical", label: "Surgical & Intervention" },
  { id: "diagnostics", label: "Diagnostics & Labs" },
  { id: "amenities", label: "Patient Care & Amenities" },
];

const highlights = [
  { icon: Bed, label: "100+ Beds", desc: "Multi-speciality capacity" },
  { icon: Shield, label: "NABH Standards", desc: "Quality accredited care" },
  { icon: Clock, label: "24/7 Emergency", desc: "Round the clock services" },
  { icon: Wifi, label: "Digital Records", desc: "EMR & paperless workflow" },
  { icon: Thermometer, label: "Central AC", desc: "Climate controlled facility" },
  { icon: Stethoscope, label: "OPD Clinics", desc: "Multi-speciality consultations" },
  { icon: Baby, label: "NICU", desc: "Neonatal intensive care" },
  { icon: Microscope, label: "In-House Lab", desc: "Advanced diagnostics" },
];


const FacilitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFacilities = selectedCategory === "all"
    ? facilities
    : facilities.filter((f) => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-14 bg-gradient-primary">
          <div className="container-width text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest mb-3">
              Hospital Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Facilities
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              World-class medical infrastructure designed for clinical excellence and patient comfort at Jaipur Hospital.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container-width">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 bg-surface rounded-xl p-4 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <h.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-sm">{h.label}</div>
                    <div className="text-muted-foreground text-xs">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Detail */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Explore Our Infrastructure
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Every facility is built with the latest medical technology, designed for patient safety and comfort.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                      : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredFacilities.map((facility, idx) => {
                const FIcon = facility.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={facility.title}
                    className={`group bg-card rounded-2xl border border-border shadow-card overflow-hidden flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div className="md:w-1/2 h-64 md:h-auto min-h-72 overflow-hidden relative">
                      <img
                        src={facility.img}
                        alt={facility.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                          <FIcon size={24} className="text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground">{facility.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{facility.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {facility.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-center">
          <div className="container-width">
            <h2 className="text-3xl font-display font-bold text-navy-foreground mb-4">
              Experience World-Class Healthcare
            </h2>
            <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">
              Visit Jaipur Hospital to see our advanced infrastructure firsthand. Book an appointment or contact us today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/book-appointment"
                className="bg-gradient-primary text-primary-foreground font-semibold rounded-full px-8 py-3 hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </a>
              <a
                href="/contact"
                className="border-2 border-navy-foreground/30 text-navy-foreground font-semibold rounded-full px-8 py-3 hover:border-primary-glow hover:text-primary-glow transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default FacilitiesPage;
