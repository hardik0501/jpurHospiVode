import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { SEO } from "@/components/SEO";
import {
  HEALTH_PACKAGES,
  GENERAL_INSTRUCTIONS,
  SPECIAL_BENEFITS,
  PACKAGE_FAQS,
  HealthPackage,
} from "@/data/healthPackagesData";
import {
  Heart,
  Activity,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  AlertCircle,
  Percent,
  Building2,
  FileText,
  UserCheck,
  HelpCircle,
  ArrowRight,
  Layers,
  Info,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { HOSPITAL_CONTACT } from "@/data/hospitalData";

const HealthPackagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);
  const [bookingPackage, setBookingPackage] = useState<HealthPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Filter packages based on category tab & search query
  const filteredPackages = useMemo(() => {
    return HEALTH_PACKAGES.filter((pkg) => {
      const matchesCategory =
        selectedCategory === "all" || pkg.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.tests.some((t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenBooking = (pkg: HealthPackage) => {
    setBookingPackage(pkg);
    setBookingSubmitted(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    // WhatsApp direct message composition
    const message = encodeURIComponent(
      `Hello Jaipur Hospital,\n\nI would like to book a Health Checkup Package:\n*Package:* ${bookingPackage?.title} (Offer Price: ₹${bookingPackage?.offerPrice})\n*Patient Name:* ${patientName}\n*Phone:* ${patientPhone}\n*Preferred Date:* ${preferredDate || "Earliest Available"}\n${specialNotes ? `*Notes/Conditions:* ${specialNotes}\n` : ""}\nPlease confirm my appointment slot.`
    );
    window.open(`https://wa.me/919257029901?text=${message}`, "_blank");
  };

  // Structured Data for SEO (MedicalWebPage, OfferCatalog, FAQPage)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://jaipurhospital.co.in/health-packages#webpage",
        "url": "https://jaipurhospital.co.in/health-packages",
        "name": "Preventive Health Checkup Packages in Jaipur | Jaipur Hospital",
        "description":
          "Affordable preventive health checkup packages in Jaipur. Complete cardiac, wellness, senior citizen, full body, and diabetic checkups with 100% NABL lab & senior doctor consultations.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://jaipurhospital.co.in/#website",
          "name": "Jaipur Hospital",
          "url": "https://jaipurhospital.co.in",
        },
      },
      {
        "@type": "OfferCatalog",
        "name": "Jaipur Hospital Health Checkup Packages",
        "itemListElement": HEALTH_PACKAGES.map((pkg, idx) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTest",
            "name": pkg.title,
            "description": `${pkg.tagline}. Includes ${pkg.testsCount} tests and consultations.`,
          },
          "price": pkg.offerPrice,
          "priceCurrency": "INR",
          "category": pkg.categoryLabel,
          "position": idx + 1,
        })),
      },
      {
        "@type": "FAQPage",
        "mainEntity": PACKAGE_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  // List of all unique tests for comparison table
  const allTestNames = useMemo(() => {
    const set = new Set<string>();
    HEALTH_PACKAGES.forEach((p) => p.tests.forEach((t) => set.add(t.name)));
    return Array.from(set);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEO
        title="Health Checkup Packages in Jaipur | Full Body & Cardiac Tests"
        description="Book comprehensive health checkup packages at Jaipur Hospital. Basic & Advanced Cardiac, Full Body, Senior Citizen & Diabetic health packages at discounted cash offer prices. Fasting & NABL tests."
        canonical="/health-packages"
        schema={schemaData}
      />

      <HospitalHeader />

      <main className="pt-24">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-16 pb-20 bg-gradient-to-br from-primary/95 via-primary to-slate-900 text-primary-foreground overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          <div className="container-width relative z-10 text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-primary-foreground/90 mb-6 border border-white/15">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">Health Packages</span>
            </div>

            {/* Badge */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                <Sparkles size={14} className="animate-pulse text-emerald-300" />
                Up to 62% Cash Discount • 7 Specialized Packages
              </span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
              Health Checkup Packages in Jaipur
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Protect your well-being with precision diagnostics, NABL-standard pathology, advanced cardiac imaging, and direct consultations from senior medical specialists at Jaipur Hospital.
            </p>

            {/* Hero Quick CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              <a
                href="#packages-grid"
                className="bg-white text-primary font-bold px-7 py-3.5 rounded-xl text-sm md:text-base hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Activity size={18} /> View All Packages
              </a>
              <a
                href="tel:01412741465"
                className="bg-secondary text-secondary-foreground font-bold px-7 py-3.5 rounded-xl text-sm md:text-base hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2"
              >
                <Phone size={18} /> Call: 0141-2741465
              </a>
              <a
                href="https://wa.me/919257029901?text=Hi%20Jaipur%20Hospital,%20I%20want%20to%20know%20more%20about%20Health%20Checkup%20Packages."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm md:text-base transition-all shadow-lg flex items-center gap-2"
              >
                <MessageSquare size={18} /> WhatsApp Inquiry
              </a>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6 border-t border-white/15 text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs md:text-sm">
                  <ShieldCheck size={18} /> NABL Accredited Lab
                </div>
                <p className="text-[11px] md:text-xs text-primary-foreground/80 mt-1">
                  100% accurate pathology
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs md:text-sm">
                  <UserCheck size={18} /> MD Doctor Review
                </div>
                <p className="text-[11px] md:text-xs text-primary-foreground/80 mt-1">
                  Cardiologist & Physician
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs md:text-sm">
                  <Clock size={18} /> Same-Day Reports
                </div>
                <p className="text-[11px] md:text-xs text-primary-foreground/80 mt-1">
                  Digital & printed copies
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-xs md:text-sm">
                  <Award size={18} /> 20+ Years Trust
                </div>
                <p className="text-[11px] md:text-xs text-primary-foreground/80 mt-1">
                  Lal Kothi, Tonk Road
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= KEY VALUE PROPOSITION BANNERS ================= */}
        <section className="py-8 bg-surface border-b border-border">
          <div className="container-width">
            <div className="grid md:grid-cols-3 gap-5">
              {/* Perk 1 */}
              <div className="bg-card border border-primary/20 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  <Percent size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary bg-primary-light px-2.5 py-0.5 rounded">
                    Exclusive Benefit
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mt-1">
                    CGHS Rate + 20% Extra Discount
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    On any additional radiology, pathology tests, or doctor consultations advised by our specialists.
                  </p>
                </div>
              </div>

              {/* Perk 2 */}
              <div className="bg-card border border-secondary/20 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0 text-secondary font-bold">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-secondary bg-secondary-light px-2.5 py-0.5 rounded">
                    IPD Hospital Benefit
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mt-1">
                    15% Inpatient Admission Discount
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    If doctor advises hospital admission, get flat 15% discount on the total hospital bill (excluding implants).
                  </p>
                </div>
              </div>

              {/* Perk 3 */}
              <div className="bg-card border border-emerald-500/20 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  <FileText size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded">
                    100% Transparent
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mt-1">
                    Itemized Standalone Test Value
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Clear MRP breakdown for every individual test so you know exact savings on cash health packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PACKAGES EXPLORER ================= */}
        <section id="packages-grid" className="py-16 bg-surface">
          <div className="container-width">
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 bg-primary-light px-4 py-1.5 rounded-full">
                Preventive Health Checkups
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
                Select Your Customized Health Package
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Choose from comprehensive cardiac packages, whole body wellness profiles, diabetic care, and senior citizen checkups tailored for all age groups.
              </p>
            </div>

            {/* Category Filter Tabs & Search */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  All Packages ({HEALTH_PACKAGES.length})
                </button>
                <button
                  onClick={() => setSelectedCategory("cardiac")}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "cardiac"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  ❤️ Cardiac Care (3)
                </button>
                <button
                  onClick={() => setSelectedCategory("wellness")}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "wellness"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  🌿 Full Body & Wellness (1)
                </button>
                <button
                  onClick={() => setSelectedCategory("senior")}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "senior"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  👴 Senior Citizen (1)
                </button>
                <button
                  onClick={() => setSelectedCategory("whole-body")}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "whole-body"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  🩺 Master Whole Body (1)
                </button>
                <button
                  onClick={() => setSelectedCategory("diabetic")}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "diabetic"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  🩸 Diabetic Care (1)
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search test e.g. Echo, HbA1c, Vit D..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-xs md:text-sm bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            {/* Package Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {filteredPackages.map((pkg) => {
                const isExpanded = expandedPackageId === pkg.id;

                return (
                  <div
                    key={pkg.id}
                    className={`relative rounded-3xl bg-card border transition-all duration-300 shadow-card hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                      pkg.popular
                        ? "border-primary/40 ring-2 ring-primary/20 shadow-lg-blue"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {/* Top Tag & Badges */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-primary-light text-primary px-3 py-1 rounded-full">
                          {pkg.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {pkg.popular && (
                            <span className="text-[10px] font-extrabold uppercase bg-amber-500 text-white px-2.5 py-0.5 rounded-md">
                              Popular
                            </span>
                          )}
                          <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md">
                            {pkg.discountPercent}% OFF
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {pkg.tagline}
                      </p>

                      {/* Pricing Box */}
                      <div className="mt-5 p-4 rounded-2xl bg-surface border border-border/80 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-muted-foreground font-medium">
                            Special Offer Price
                          </div>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-2xl md:text-3xl font-extrabold text-foreground font-display">
                              ₹{pkg.offerPrice.toLocaleString("en-IN")}
                            </span>
                            <span className="text-xs text-muted-foreground line-through">
                              ₹{pkg.totalPrice.toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg inline-block">
                            Save ₹{pkg.savings.toLocaleString("en-IN")}
                          </span>
                          <div className="text-[10px] text-muted-foreground mt-1">
                            (Cash Payment)
                          </div>
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="mt-4 space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                          <Sparkles size={13} className="text-primary" /> Key Inclusions:
                        </div>
                        {pkg.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-foreground/90 font-medium"
                          >
                            <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Recommendation */}
                      <div className="mt-4 p-2.5 rounded-xl bg-primary-light/50 border border-primary/10 text-[11px] text-foreground/80 leading-relaxed">
                        <strong className="text-primary font-semibold">Best for: </strong>
                        {pkg.recommendedFor}
                      </div>

                      {/* Expandable Test List Toggle */}
                      <div className="mt-5 border-t border-border pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedPackageId(isExpanded ? null : pkg.id)
                          }
                          className="w-full flex items-center justify-between text-xs font-bold text-primary hover:text-primary/80 transition-colors py-1"
                        >
                          <span className="flex items-center gap-1.5">
                            <Layers size={14} />
                            {isExpanded
                              ? `Hide Test Breakdown (${pkg.testsCount} Tests)`
                              : `View All ${pkg.testsCount} Tests & Standalone MRPs`}
                          </span>
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {/* Expanded Itemized Tests Breakdown */}
                        {isExpanded && (
                          <div className="mt-3 space-y-1.5 max-h-64 overflow-y-auto pr-1 text-xs divide-y divide-border/60">
                            {pkg.tests.map((test, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between py-1.5 text-foreground/90 hover:bg-surface px-1.5 rounded"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span className="text-[11px]">{test.name}</span>
                                </span>
                                <span className="text-[11px] font-semibold text-muted-foreground">
                                  ₹{test.price}
                                </span>
                              </div>
                            ))}
                            <div className="flex items-center justify-between pt-2 font-bold text-xs text-foreground">
                              <span>Total Standalone MRP Value</span>
                              <span>₹{pkg.totalPrice.toLocaleString("en-IN")}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action CTAs */}
                    <div className="p-6 pt-0 space-y-2.5">
                      <button
                        onClick={() => handleOpenBooking(pkg)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                      >
                        <Calendar size={15} /> Book {pkg.title}
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="tel:01412741465"
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-border hover:bg-surface text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Phone size={12} /> Call Desk
                        </a>
                        <a
                          href={`https://wa.me/919257029901?text=${encodeURIComponent(
                            `Hello Jaipur Hospital, I want to book the *${pkg.title}* Health Package (Offer Price: ₹${pkg.offerPrice}).`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-[11px] font-semibold transition-colors"
                        >
                          <MessageSquare size={12} className="text-emerald-600" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= COMPREHENSIVE COMPARISON TABLE ================= */}
        <section className="py-16 bg-card border-y border-border overflow-hidden">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 bg-primary-light px-4 py-1.5 rounded-full">
                Side-By-Side Comparison
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
                Compare All 7 Health Packages
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Check exactly which tests, scans, and specialist reviews are included in each health package at a glance.
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-3xl border border-border shadow-sm bg-background">
              <table className="w-full text-left text-xs border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-border">
                    <th className="p-4 font-bold text-sm w-1/4 sticky left-0 bg-slate-900 z-10">
                      Tests & Inclusions
                    </th>
                    {HEALTH_PACKAGES.map((pkg) => (
                      <th key={pkg.id} className="p-3 text-center border-l border-slate-800">
                        <div className="font-bold text-xs">{pkg.title}</div>
                        <div className="text-emerald-400 font-extrabold text-sm mt-0.5">
                          ₹{pkg.offerPrice.toLocaleString("en-IN")}
                        </div>
                        <div className="text-[10px] text-slate-400 line-through">
                          ₹{pkg.totalPrice.toLocaleString("en-IN")}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {allTestNames.map((testName, idx) => (
                    <tr
                      key={testName}
                      className={idx % 2 === 0 ? "bg-card" : "bg-surface/50"}
                    >
                      <td className="p-3 font-medium text-foreground sticky left-0 bg-inherit z-10 border-r border-border">
                        {testName}
                      </td>
                      {HEALTH_PACKAGES.map((pkg) => {
                        const included = pkg.tests.some((t) => t.name === testName);
                        return (
                          <td
                            key={pkg.id}
                            className="p-3 text-center border-l border-border/60"
                          >
                            {included ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                                <Check size={14} />
                              </span>
                            ) : (
                              <span className="text-muted-foreground/30 font-bold">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="bg-primary-light font-bold text-foreground">
                    <td className="p-4 sticky left-0 bg-primary-light z-10 border-r border-border">
                      Action
                    </td>
                    {HEALTH_PACKAGES.map((pkg) => (
                      <td key={pkg.id} className="p-3 text-center border-l border-border">
                        <button
                          onClick={() => handleOpenBooking(pkg)}
                          className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-[11px] font-bold hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
                        >
                          Book ₹{pkg.offerPrice}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= INSTRUCTIONS & PREPARATION GUIDELINES ================= */}
        <section className="py-16 bg-surface">
          <div className="container-width max-w-5xl">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 bg-primary-light px-4 py-1.5 rounded-full">
                Important Patient Guidelines
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
                General Instructions for Your Health Checkup
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Please follow these essential guidelines to ensure accurate test reports and seamless sample collection.
              </p>
            </div>

            {/* 6 General Instructions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {GENERAL_INSTRUCTIONS.map((item) => (
                <div
                  key={item.step}
                  className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-primary/30 transition-all flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-display font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Benefits & Medical Alerts (from Image 2) */}
            <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-border">
                <AlertCircle className="text-primary" size={24} />
                <h3 className="font-display font-bold text-xl text-foreground">
                  Special Guidance & Hospital Privileges
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {SPECIAL_BENEFITS.map((b, idx) => (
                  <div
                    key={idx}
                    className="bg-surface rounded-2xl p-5 border border-border/80 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-primary-light text-primary px-2.5 py-0.5 rounded mb-2">
                        {b.badge}
                      </span>
                      <h4 className="font-display font-bold text-sm text-foreground mb-2">
                        {b.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Booking Helpline Callout */}
              <div className="bg-gradient-to-r from-primary to-slate-900 rounded-2xl p-6 text-primary-foreground flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left mt-6">
                <div>
                  <h4 className="font-display font-bold text-base md:text-lg text-white">
                    Need Assistance Choosing the Right Package?
                  </h4>
                  <p className="text-primary-foreground/80 text-xs md:text-sm mt-1">
                    Speak directly with our Chief Wellness Coordinator for personalized recommendations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919257029901"
                    className="bg-white text-primary font-bold px-6 py-2.5 rounded-xl text-xs md:text-sm hover:bg-slate-100 transition-all shadow whitespace-nowrap"
                  >
                    Call: +91 92570 29901
                  </a>
                  <a
                    href="tel:01412741465"
                    className="bg-secondary text-secondary-foreground font-bold px-6 py-2.5 rounded-xl text-xs md:text-sm hover:bg-secondary/90 transition-all shadow whitespace-nowrap"
                  >
                    Landline: 0141-2741465
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SEO RICH INFORMATION SECTION ================= */}
        <section className="py-16 bg-surface border-t border-border">
          <div className="container-width max-w-4xl">
            <div className="prose prose-slate max-w-none text-foreground">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Why Preventive Health Checkups are Crucial for Long-Term Wellness
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                Lifestyle illnesses such as hypertension, heart disease, diabetes, lipid disorders, and liver dysfunctions often progress silently without overt warning signs in their initial stages. Routine preventive health checkups at Jaipur Hospital provide vital biomarkers to evaluate internal organ function, detect asymptomatic conditions, and implement proactive lifestyle or medical interventions before complications arise.
              </p>

              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mt-8 mb-3">
                Who Should Get a Health Checkup Package?
              </h3>
              <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong className="text-foreground">Working Professionals & Adults (25+):</strong> To monitor cholesterol, fasting glucose, liver enzymes, and stress markers.
                </li>
                <li>
                  <strong className="text-foreground">Individuals with Family History:</strong> Those with a genetic predisposition to coronary artery disease, high BP, or diabetes.
                </li>
                <li>
                  <strong className="text-foreground">Senior Citizens (55+):</strong> To track bone health (Knee X-Rays), prostate markers (PSA for males), kidney filtration (RFT), and cardiac ejection fraction (2D Echo).
                </li>
                <li>
                  <strong className="text-foreground">Diabetic & Cardiac Patients:</strong> For routine half-yearly or annual organ risk profile evaluations.
                </li>
              </ul>

              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mt-8 mb-3">
                Diagnostic Capabilities at Jaipur Hospital
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Located centrally at Lal Kothi, Tonk Road, Jaipur, Jaipur Hospital houses an ultra-modern diagnostic suite featuring automated biochemistry analyzers, 12-lead digital ECG, high-resolution 2D Echocardiography & TMT stress testing, Carotid Doppler ultrasound, Digital X-Ray with low-dose radiation, and pulmonary function testing (PFT).
              </p>
            </div>
          </div>
        </section>

        {/* ================= FREQUENTLY ASKED QUESTIONS (FAQS) ================= */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container-width max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 bg-primary-light px-4 py-1.5 rounded-full">
                Got Questions?
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm">
                Everything you need to know about booking and preparing for health checkups at Jaipur Hospital.
              </p>
            </div>

            <div className="space-y-4">
              {PACKAGE_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-surface border border-border rounded-2xl p-5 md:p-6 shadow-sm"
                >
                  <h3 className="font-display font-bold text-base md:text-lg text-foreground flex items-start gap-3">
                    <HelpCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-3 pl-8 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOTTOM ACTION CTA ================= */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container-width text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 text-white">
              Invest in Your Health Today with Jaipur Hospital
            </h2>
            <p className="text-primary-foreground/90 text-sm md:text-base mb-8 leading-relaxed">
              Appointments are available Monday to Saturday (9:00 AM – 8:00 PM). Fasting blood collection starts at 8:00 AM daily.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#packages-grid"
                className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl text-sm md:text-base hover:bg-slate-100 transition-all shadow-lg"
              >
                Choose Your Package
              </a>
              <a
                href="tel:01412741465"
                className="bg-secondary text-secondary-foreground font-bold px-8 py-3.5 rounded-xl text-sm md:text-base hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2"
              >
                <Phone size={18} /> Call: 0141-2741465
              </a>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-6">
              📍 Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015, Rajasthan
            </p>
          </div>
        </section>
      </main>

      {/* ================= INSTANT BOOKING MODAL ================= */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-lg bg-card border-border p-6 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-display font-bold text-foreground flex items-center gap-2">
              <Calendar className="text-primary" size={20} />
              Book Health Package
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Fill in your details below to schedule your appointment slot. Our wellness desk will confirm immediately.
            </DialogDescription>
          </DialogHeader>

          {bookingPackage && (
            <div className="p-3.5 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-between mt-2">
              <div>
                <div className="text-xs font-bold text-foreground">
                  {bookingPackage.title}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {bookingPackage.testsCount} tests & consultations included
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-extrabold text-primary font-display">
                  ₹{bookingPackage.offerPrice}
                </span>
                <div className="text-[10px] text-emerald-700 font-bold">
                  Save ₹{bookingPackage.savings}
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-4 mt-3">
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Sharma"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                Preferred Appointment Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                Known Conditions or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Diabetic for 5 years, BP medication, etc."
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-surface border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setIsBookingOpen(false)}
                className="w-1/3 py-2.5 rounded-xl border border-border text-xs font-bold text-muted-foreground hover:bg-surface transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-2/3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare size={15} /> Confirm & Send via WhatsApp
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default HealthPackagesPage;
