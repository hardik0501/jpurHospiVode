import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Smile,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Star,
  GraduationCap,
  Languages,
  BadgeCheck,
  MessageCircle,
  Accessibility,
  HeartHandshake,
  Check,
  ChevronDown,
  ChevronUp,
  Send,
  Navigation,
  ExternalLink,
  Flame,
  Activity,
  Scissors
} from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";

interface TreatmentItem {
  id: string;
  title: string;
  category: "dental" | "cosmetology" | "hair";
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
}

const TREATMENTS: TreatmentItem[] = [
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    category: "dental",
    tagline: "Revitalize Your Smile with Painless Root Canal",
    description:
      "Advanced single-sitting and multi-sitting root canal therapy using rotary endodontics and digital apex locators to eliminate infection and save your natural tooth without discomfort.",
    features: ["Painless modern rotary tech", "Single-sitting option available", "Preserves natural tooth structure", "Crown capping restoration"],
    icon: "Smile",
    badge: "Popular"
  },
  {
    id: "implants",
    title: "Dental Implants",
    category: "dental",
    tagline: "Permanent, Lifelike Tooth Replacement",
    description:
      "State-of-the-art titanium implants anchored securely into the jawbone, topped with natural-looking crowns to restore full chewing capability, speech, and youthful facial contour.",
    features: ["Long-lasting durability", "Natural look and feel", "Prevents bone loss", "Biocompatible materials"],
    icon: "ShieldCheck",
    badge: "Advanced"
  },
  {
    id: "smile-correction",
    title: "Smile Correction & Design",
    category: "dental",
    tagline: "Achieve Your Dream Aesthetic Smile",
    description:
      "Comprehensive aesthetic smile makeover customized to your facial proportions, combining teeth alignment, whitening, contouring, and gum reshaping for unmatched confidence.",
    features: ["Digital smile preview", "Golden proportion alignment", "Gum symmetry correction", "Instant aesthetic uplift"],
    icon: "Sparkles",
    badge: "Cosmetic Specialty"
  },
  {
    id: "orthodontics",
    title: "Orthodontic Treatment (Braces & Aligners)",
    category: "dental",
    tagline: "Transform Your Smile & Fix Malocclusion",
    description:
      "Effective alignment of crowded, crooked teeth and bite correction using invisible clear aligners, ceramic braces, and traditional metal brackets for kids, teens, and adults.",
    features: ["Clear invisible aligners", "Ceramic aesthetic braces", "Overbite & underbite correction", "Custom treatment planning"],
    icon: "Smile",
  },
  {
    id: "veneers-bridges",
    title: "Veneers & Bridges",
    category: "dental",
    tagline: "Enhance Your Smile with Porcelain Artistry",
    description:
      "Ultra-thin custom porcelain veneers and durable ceramic bridges to mask chipped, discolored, or gapped teeth, giving you a radiant Hollywood smile.",
    features: ["Stain-resistant porcelain", "Minimal tooth preparation", "Gap closure & shape fix", "High mechanical strength"],
    icon: "Sparkles",
  },
  {
    id: "tooth-extraction",
    title: "Gentle Tooth Extraction",
    category: "dental",
    tagline: "Safe & Painless Surgical Oral Care",
    description:
      "Gentle extraction of damaged, decayed, or impacted wisdom teeth performed with local anesthesia, minimal trauma, and swift post-op healing care.",
    features: ["Impacted wisdom teeth removal", "Atraumatic surgical protocol", "Quick recovery management", "Local pain-free anesthesia"],
    icon: "ShieldCheck",
  },
  {
    id: "scaling-polishing",
    title: "Scaling & Polishing",
    category: "dental",
    tagline: "Professional Cleaning for Healthy Gums",
    description:
      "Ultrasonic scaling to remove stubborn tartar, calculus, and yellow plaque, followed by diamond polishing to restore freshness and prevent gingivitis.",
    features: ["Ultrasonic plaque removal", "Enamel-safe polishing", "Fresh breath rejuvenation", "Prevents gum bleeding"],
    icon: "CheckCircle2",
  },
  {
    id: "tooth-surgeries",
    title: "Comprehensive Tooth Surgeries",
    category: "dental",
    tagline: "Specialized Oral & Maxillofacial Solutions",
    description:
      "Advanced minor oral surgical procedures including cyst removal, frenectomy, bone grafting, and alveoloplasty conducted in a sterile clinical environment.",
    features: ["Strict aseptic protocols", "Pre-prosthetic surgery", "Soft tissue corrections", "Expert postoperative follow-up"],
    icon: "Activity",
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial & Medi Facials",
    category: "cosmetology",
    tagline: "Elevating Skincare to New Heights",
    description:
      "Multi-step medical-grade facial that cleanses, exfoliates, extracts deep impurities, and infuses intense hydration with antioxidants, peptides, and hyaluronic acid.",
    features: ["Instant glow with zero downtime", "Deep pore vortex extraction", "Hydration boost & collagen stimulation", "Customized serum cocktails"],
    icon: "Sparkles",
    badge: "Most Loved"
  },
  {
    id: "chemical-peels",
    title: "Advanced Chemical Peels",
    category: "cosmetology",
    tagline: "Rejuvenate & Renew Radiant Skin",
    description:
      "Dermatologically formulated Glycolic, Salicylic, and TCA peels targeting hyperpigmentation, uneven skin tone, sun damage, fine lines, and active blemishes.",
    features: ["Exfoliates dull epidermal layers", "Controls sebum & acne", "Lightens dark spots & melasma", "Smoothens skin texture"],
    icon: "Sparkles",
  },
  {
    id: "microneedling",
    title: "Microneedling & Collagen Induction",
    category: "cosmetology",
    tagline: "Pathway to Skin Renewal & Scar Reduction",
    description:
      "Micro-punctures using medical derma pens to activate natural collagen and elastin synthesis, dramatically softening acne scars, open pores, and stretch marks.",
    features: ["Reduces acne scars & pits", "Tightens enlarged facial pores", "Improves skin elasticity", "Combined with nourishing serums"],
    icon: "Activity",
  },
  {
    id: "acne-treatment",
    title: "Acne & Scar Management",
    category: "cosmetology",
    tagline: "Conquering Breakouts for Clear, Healthy Skin",
    description:
      "Holistic dermatological protocols addressing the root cause of stubborn acne, cystic pimples, post-inflammatory pigmentation, and textural scarring.",
    features: ["Targeted anti-bacterial therapy", "Pore unclogging treatments", "Scar remodeling procedures", "Personalized skincare regimen"],
    icon: "ShieldCheck",
  },
  {
    id: "laser-hair-removal",
    title: "Permanent Laser Hair Removal",
    category: "cosmetology",
    tagline: "Bid Farewell to Unwanted Hair",
    description:
      "Painless triple-wavelength laser technology that destroys hair follicles at the root for silk-smooth, hair-free skin on face, underarms, arms, legs, and full body.",
    features: ["Painless cooling tip technology", "Safe for all Indian skin types", "Long-term hair reduction", "No ingrown hair or cuts"],
    icon: "Sparkles",
    badge: "High Demand"
  },
  {
    id: "microdermabrasion",
    title: "Microdermabrasion & Carbon Facial",
    category: "cosmetology",
    tagline: "Unlocking Smooth, Glowing & Youthful Skin",
    description:
      "Diamond-tip microdermabrasion and Hollywood Laser Carbon Peel to sweep away dead skin cells, shrink pores, and impart a porcelain-like luminous glow.",
    features: ["Exfoliates dead cellular debris", "Minimizes oiliness & blackheads", "Smooth makeup-ready canvas", "Quick 30-minute procedure"],
    icon: "Sparkles",
  },
  {
    id: "hair-prp",
    title: "Hair PRP & Hair Restoration",
    category: "hair",
    tagline: "Restoring Density & Confidence Strand by Strand",
    description:
      "Autologous Platelet-Rich Plasma (PRP) therapy enriched with growth factors injected directly into the scalp to awaken dormant follicles, arrest hair fall, and thicken hair.",
    features: ["100% natural, patient's own plasma", "Arrests progressive hair thinning", "Stimulates new hair growth", "Aids post-transplant density"],
    icon: "Sparkles",
    badge: "Proven Results"
  },
  {
    id: "tattoo-removal",
    title: "Laser Tattoo & Melasma Removal",
    category: "cosmetology",
    tagline: "Precision Pigment Clearance Technology",
    description:
      "Q-switched Nd:YAG laser pulses that shatter unwanted ink pigments and stubborn dermal melasma into micro-particles for natural lymphatic clearance.",
    features: ["Safe pigment shattering", "Minimal discomfort", "Fades dark melasma patches", "Effective multi-colored ink clearance"],
    icon: "ShieldCheck",
  }
];

const TESTIMONIALS = [
  {
    name: "Surendra Pareek",
    time: "Verified Patient",
    rating: 5,
    text: "Very nice experience constantly with Dr. Jahanvi ji. She is a wonderful person. She listens to every problem very carefully and gave the best treatment plan for my wife's skin problem. The results were truly wonderful and noticeable.",
    treatment: "Clinical Cosmetology"
  },
  {
    name: "Dv Shekhawat",
    time: "Verified Patient",
    rating: 5,
    text: "I was suffering from severe acne for months. My friend suggested taking treatment from Dr. Jahanvi Tyagi. The treatment was very effective at an affordable cost, and Doctor's behaviour was extremely friendly and comforting. Thanks a lot Dr.!",
    treatment: "Acne & Skin Care"
  },
  {
    name: "Vartika Tyagi",
    time: "Verified Patient",
    rating: 5,
    text: "Dr. Jahanvi is very kind and interactive. I had a wonderful experience at the clinic. I got both my dental scaling and skin glow treatment done at very reasonable rates. Staff and clinical precision were top-notch!",
    treatment: "Dental & Skin Glow"
  },
  {
    name: "Dimpal Agarwal",
    time: "Verified Patient",
    rating: 5,
    text: "I completed my melasma skin treatment from Dr. Jahanvi. She is very kind and explains each step patiently. I am fully satisfied with the results and my melasma patches have completely disappeared. Highly recommended doctor in Jaipur!",
    treatment: "Melasma & Pigmentation"
  },
  {
    name: "Arpit Khandelwal",
    time: "Verified Patient",
    rating: 5,
    text: "I underwent a hair PRP procedure at Dr. Jahanvi's Dermadent, and I'm thrilled with the outcomes. The clinic is immaculate, hygienic, and equipped with modern machinery. Noticeable reduction in hair fall within 3 sessions!",
    treatment: "Hair PRP Therapy"
  },
  {
    name: "Seema Nathawat",
    time: "Verified Patient",
    rating: 5,
    text: "I had a wonderful experience with Dr. Jahanvi ma'am. Her friendly approach and dual expertise in dental surgery and aesthetic medicine make her the best doctor for comprehensive facial beauty and dental health.",
    treatment: "Smile Design & Cosmetology"
  }
];

const FAQS = [
  {
    q: "Is Root Canal Treatment (RCT) painful at Dr. Jahanvi's clinic?",
    a: "No. With advanced local anesthesia and modern rotary endodontic equipment, the procedure is practically painless. Most patients feel immediate relief from their toothache after the first sitting."
  },
  {
    q: "What is the difference between general dentistry and cosmetic dentistry?",
    a: "General dentistry focuses on oral health, hygiene, cavity fillings, and saving teeth (RCT, extractions). Cosmetic dentistry enhances the appearance of your teeth and smile through smile designing, porcelain veneers, teeth whitening, aligners, and aesthetic restorations."
  },
  {
    q: "How many sessions are required for Laser Hair Removal or Hair PRP?",
    a: "Laser hair removal typically requires 6 to 8 sessions spaced 4-6 weeks apart for optimal permanent hair reduction. Hair PRP therapy usually shows visible improvement in density and hair fall arrest within 3 to 6 sessions."
  },
  {
    q: "Are the cosmetology facials (Hydrafacial, Chemical Peels) safe for sensitive skin?",
    a: "Yes. Every treatment begins with a thorough skin analysis by Dr. Jahanvi Tyagi (Fellowship in Facial Aesthetic Medicine). The serums, peel strengths, and vortex suction levels are customized to your specific skin type, ensuring zero harmful side effects."
  },
  {
    q: "What are the clinic timings and how can I book an appointment?",
    a: "The clinic is open 7 days a week (Monday to Sunday) from 10:30 AM to 08:00 PM. You can book an appointment directly through our online form, call 8209011472 / 92570 29901, or message us on WhatsApp for instant confirmation."
  }
];

const DentalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "dental" | "cosmetology" | "hair">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredTreatments = activeTab === "all"
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeTab);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEO
        title="Dental & Cosmetology Centre Jaipur | Dr. Jahanvi's Dermadent - Devkripa Healthcare"
        description="Best Dental Surgeon & Clinical Cosmetologist in Jaipur. Dr. Jahanvi Tyagi (BDS, FFAC) provides advanced Root Canal Treatment, Implants, Smile Correction, Hydrafacial, Hair PRP & Laser Care. Open 7 Days: 10:30 AM – 8:00 PM."
        canonical="/dental"
      />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dr. Jahanvi's Dermadent - Devkripa Healthcare",
            "image": "https://doctoronboarding.eka.care/cl2rhhut3000l0sg1fkcghr9j.png",
            "telephone": "+918209011472",
            "email": "dev.kripahealthcare@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H.no.175 Ashok Vihar Vistar, Khirni Phatak Road, Gokulpura Jhotwara",
              "addressLocality": "Jaipur",
              "addressRegion": "Rajasthan",
              "postalCode": "302012",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.93527211,
              "longitude": 75.72658185
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:30",
                "closes": "20:00"
              }
            ],
            "priceRange": "₹₹",
            "medicalSpecialty": ["Dentistry", "Cosmetic Dentistry", "Dermatology", "Cosmetology"],
            "founder": {
              "@type": "Person",
              "name": "Dr. Jahanvi Tyagi",
              "jobTitle": "Dental Surgeon & Clinical Cosmetologist",
              "alumniOf": "Govt Dental College Nagpur, MUHS Nashik"
            }
          })
        }}
      />

      <HospitalHeader />

      <main className="pt-28 sm:pt-36 lg:pt-40 bg-slate-950 text-white">
        {/* TOP CLINIC STATUS & ANNOUNCEMENT BAR */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-teal-950 border-b border-cyan-500/20 py-2.5 px-4 text-xs sm:text-sm">
          <div className="container-width flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold px-2.5 py-0.5 rounded-full text-[11px] tracking-wider uppercase shadow-sm">
                Multispeciality Wing
              </span>
              <span className="text-slate-200">
                <strong className="text-white">DEVKRIPA HEALTH CARE CENTRE</strong> • Dr. Jahanvi's Dermadent
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>OPD Open Today: 10:30 AM – 08:00 PM</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a
                href="tel:8209011472"
                className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-bold bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-colors"
              >
                <Phone size={13} className="text-emerald-400" /> +91 8209011472
              </a>
              <a
                href="https://wa.me/918209011472?text=Hello%20Dr.%20Jahanvi%20Tyagi,%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-semibold"
              >
                <MessageCircle size={13} /> WhatsApp Desk
              </a>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 lg:py-20">
          {/* Ambient Background Glows */}
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container-width relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Department Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-cyan-950/80 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 shadow-sm">
                    <Smile size={14} className="text-cyan-400" /> Advanced Dentistry
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-teal-950/80 border border-teal-400/30 px-3 py-1 rounded-full text-xs font-semibold text-teal-300 shadow-sm">
                    <Sparkles size={14} className="text-amber-300 animate-pulse" /> Clinical Cosmetology & Aesthetics
                  </span>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-display font-black tracking-tight leading-[1.15] text-white">
                    Painless Dental Surgery & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-200">
                      Flawless Aesthetic Care
                    </span>
                  </h1>
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed pt-1 max-w-2xl font-normal">
                    Led by <strong className="text-white font-semibold">Dr. Jahanvi Tyagi</strong> (15+ Years Clinical Practice • BDS Govt Dental College Nagpur, FFAC Mumbai). Offering painless root canals, smile designing, dental implants, medical facials, acne therapies, and hair PRP under one premier clinic.
                  </p>
                </div>

                {/* Trust Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl p-3 text-center shadow-lg hover:border-cyan-500/40 transition-colors">
                    <div className="text-xl sm:text-2xl font-black text-amber-300">15+</div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl p-3 text-center shadow-lg hover:border-cyan-500/40 transition-colors">
                    <div className="text-xl sm:text-2xl font-black text-cyan-300">10k+</div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Smiles Restored</div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl p-3 text-center shadow-lg hover:border-cyan-500/40 transition-colors">
                    <div className="text-xl sm:text-2xl font-black text-emerald-300 flex items-center justify-center gap-1">
                      5.0 <Star size={14} className="fill-emerald-300 text-emerald-300" />
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Google Rating</div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl p-3 text-center shadow-lg hover:border-cyan-500/40 transition-colors">
                    <div className="text-xl sm:text-2xl font-black text-teal-300">7 Days</div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Mon – Sun Open</div>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#book-appointment"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-primary to-teal-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
                  >
                    <Calendar size={18} /> Book Consultation
                  </a>
                  <a
                    href="tel:8209011472"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900/90 border border-slate-700 hover:border-emerald-500 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all shadow-md"
                  >
                    <Phone size={18} className="text-emerald-400" /> Call Clinic: 8209011472
                  </a>
                  <a
                    href="https://wa.me/918209011472?text=Hello%20Dr.%20Jahanvi,%20I%20would%20like%20to%20inquire%20about%20treatment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-colors shadow-md"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>

                {/* Quick Treatments Jump Bar */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Popular:</span>
                  <a href="#treatments" onClick={() => setActiveTab("dental")} className="hover:text-cyan-300 underline-offset-4 hover:underline">Root Canal (RCT)</a>
                  <span>•</span>
                  <a href="#treatments" onClick={() => setActiveTab("dental")} className="hover:text-cyan-300 underline-offset-4 hover:underline">Smile Makeover</a>
                  <span>•</span>
                  <a href="#treatments" onClick={() => setActiveTab("dental")} className="hover:text-cyan-300 underline-offset-4 hover:underline">Dental Implants</a>
                  <span>•</span>
                  <a href="#treatments" onClick={() => setActiveTab("cosmetology")} className="hover:text-teal-300 underline-offset-4 hover:underline">Hydrafacial</a>
                  <span>•</span>
                  <a href="#treatments" onClick={() => setActiveTab("hair")} className="hover:text-amber-300 underline-offset-4 hover:underline">Hair PRP</a>
                </div>

              </div>

              {/* Right Column: Premium Doctor & Clinic Showcase Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-teal-500/20 to-slate-800/40 shadow-2xl">
                  <div className="bg-gradient-to-b from-slate-900/95 to-slate-950/95 rounded-[22px] p-6 sm:p-7 backdrop-blur-xl border border-white/10 space-y-5">
                    
                    {/* Header with status badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">
                          OPD Consultation Active
                        </span>
                      </div>
                      <span className="text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                        Senior Specialist
                      </span>
                    </div>

                    {/* Doctor Info Header */}
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-amber-300 p-0.5 shadow-lg">
                          <div className="w-full h-full rounded-[14px] bg-slate-900 flex flex-col items-center justify-center text-center p-1 overflow-hidden relative">
                            <img
                              src="https://doctoronboarding.eka.care/cl2rhhut3000l0sg1fkcghr9j.png"
                              alt="Dr. Jahanvi Tyagi"
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                // Fallback elegant avatar icon if URL blocked
                                (e.target as HTMLElement).style.display = "none";
                                const fallback = document.getElementById("dr-avatar-fallback");
                                if (fallback) fallback.style.display = "flex";
                              }}
                            />
                            <div id="dr-avatar-fallback" className="hidden w-full h-full flex-col items-center justify-center bg-gradient-to-br from-cyan-950 to-slate-900 text-cyan-300">
                              <Smile size={28} className="text-cyan-300 mb-1" />
                              <span className="text-[10px] font-bold">Dr. Jahanvi</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h2 className="text-xl sm:text-2xl font-display font-black text-white leading-snug">
                          Dr. Jahanvi Tyagi
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
                          Dental Surgeon & Clinical Cosmetologist
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Registration: <span className="text-slate-200 font-medium">A4243 (RDC)</span>
                        </p>
                      </div>
                    </div>

                    {/* Qualifications & Specialities List */}
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/60 rounded-xl p-4 border border-slate-800">
                      <div className="flex items-start gap-2.5">
                        <GraduationCap size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">BDS (2008)</strong> – Govt Dental College Nagpur (MUHS Nashik)
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Award size={16} className="text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">FFAC (2018)</strong> – Fellowship in Facial Aesthetic Medicine, Mumbai
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Languages size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Languages Spoken:</strong> English, हिन्दी
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <MapPin size={16} className="text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Clinic Location:</strong> H.no. 175 Ashok Vihar, Khirni Phatak Rd, Jhotwara, Jaipur
                        </div>
                      </div>
                    </div>

                    {/* Footer Timings & Quick Link */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Timings (Mon – Sun):</span>
                        <strong className="text-emerald-300 font-bold text-sm">10:30 AM – 08:00 PM</strong>
                      </div>
                      <a
                        href="#about-doctor"
                        className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-semibold bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                      >
                        Full Profile <ArrowRight size={13} />
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK CLINIC AMENITIES RIBBON */}
        <section className="bg-surface border-y border-border py-4">
          <div className="container-width">
            <div className="flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-foreground/80">
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Accessibility size={16} />
                </div>
                <span>Wheelchair Accessible Elevator</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span>100% Hospital-Grade Sterilization</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                  <Smile size={16} />
                </div>
                <span>Painless Dental Technology</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span>Gender Neutral & Clean Restrooms</span>
              </div>
            </div>
          </div>
        </section>

        {/* TREATMENTS OFFERED SECTION */}
        <section id="treatments" className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full inline-block mb-3">
                Our Procedures
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Treatments & Clinical Solutions Offered
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Discover our extensive range of advanced dental surgery, restorative dentistry, aesthetic skin therapies, and hair restoration under one roof.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "all"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-surface text-foreground/80 hover:bg-muted border border-border"
                  }`}
                >
                  All Treatments (16)
                </button>
                <button
                  onClick={() => setActiveTab("dental")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "dental"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-surface text-foreground/80 hover:bg-muted border border-border"
                  }`}
                >
                  🦷 Dental Care (8)
                </button>
                <button
                  onClick={() => setActiveTab("cosmetology")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "cosmetology"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-surface text-foreground/80 hover:bg-muted border border-border"
                  }`}
                >
                  ✨ Skin & Cosmetology (6)
                </button>
                <button
                  onClick={() => setActiveTab("hair")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "hair"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                      : "bg-surface text-foreground/80 hover:bg-muted border border-border"
                  }`}
                >
                  💇 Hair Restoration (2)
                </button>
              </div>
            </div>

            {/* Treatments Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTreatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className="group bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-lg hover:border-primary/40 transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  {treatment.badge && (
                    <span className="absolute top-4 right-4 bg-primary-light text-primary text-[10px] font-bold px-2.5 py-1 rounded-full border border-primary/20">
                      {treatment.badge}
                    </span>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-secondary-light text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {treatment.category === "dental" ? (
                        <Smile size={24} className="text-primary" />
                      ) : treatment.category === "cosmetology" ? (
                        <Sparkles size={24} className="text-teal-600" />
                      ) : (
                        <Flame size={24} className="text-amber-600" />
                      )}
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                      {treatment.category === "dental" ? "Dental Surgery" : treatment.category === "cosmetology" ? "Clinical Cosmetology" : "Hair Care"}
                    </span>

                    <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {treatment.title}
                    </h3>
                    
                    <p className="text-primary/90 text-xs font-semibold mb-3">
                      {treatment.tagline}
                    </p>

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {treatment.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 border-t border-border pt-3">
                      {treatment.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-foreground/80 flex items-center gap-2">
                          <Check size={13} className="text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/918209011472?text=${encodeURIComponent(`Hello Dr. Jahanvi Tyagi, I want to consult for ${treatment.title}. Please share available appointment slots.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-emerald-600 text-primary hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl border border-primary/20 hover:border-emerald-600 transition-all w-full text-center"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp for {treatment.title.split(" ")[0]}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR DEEP-DIVE & CREDENTIALS SECTION */}
        <section id="about-doctor" className="section-padding bg-surface border-t border-border">
          <div className="container-width">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Doctor Visual Frame */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-teal-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-card rounded-3xl border border-border overflow-hidden shadow-card">
                    <div className="h-80 sm:h-96 overflow-hidden bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center relative">
                      <img
                        src="https://doctoronboarding.eka.care/cl2rhhut3000l0sg1fkcghr9j.png"
                        alt="Dr. Jahanvi Tyagi Dental Surgeon"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                          const fallback = document.getElementById("dr-about-fallback");
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div id="dr-about-fallback" className="hidden w-full h-full flex-col items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950 text-cyan-300 p-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-cyan-900/60 border-2 border-cyan-400/50 flex items-center justify-center mb-3 shadow-xl">
                          <Smile size={44} className="text-cyan-300" />
                        </div>
                        <h4 className="font-display font-bold text-xl text-white">Dr. Jahanvi Tyagi</h4>
                        <p className="text-xs text-cyan-300 font-semibold mt-1">Dental Surgeon & Cosmetologist</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">BDS (2008), FFAC (2018)</p>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent p-4 text-white">
                        <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-400/30 px-2 py-0.5 rounded-full inline-block mb-1">
                          Head of Dental & Aesthetic Wing
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl">Dr. Jahanvi Tyagi</h3>
                      </div>
                    </div>
                    
                    <div className="p-5 space-y-3 bg-card">
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
                        <span>Experience:</span>
                        <strong className="text-foreground">15+ Years (Since 2008)</strong>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
                        <span>State Registration:</span>
                        <strong className="text-foreground">A4243 (Rajasthan Dental Council)</strong>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Consultation Fee:</span>
                        <strong className="text-emerald-600 font-bold">₹300 (Affordable & High Quality)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Bio & Credentials */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full inline-block mb-3">
                    About The Doctor
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    Dr. Jahanvi Tyagi
                  </h2>
                  <p className="text-base text-primary font-semibold">
                    Dental Surgeon & Clinical Cosmetologist • Head of Dr. Jahanvi's Dermadent
                  </p>
                </div>

                <div className="prose prose-sm text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    <strong>Dr. Jahanvi Tyagi</strong> is a seasoned dental surgeon and clinical cosmetologist with over 15 years of distinguished practice in Jaipur. She earned her Bachelor of Dental Surgery (BDS) in 2008 from the prestigious <strong>Govt Dental College Nagpur (MUHS Nashik)</strong>, followed by an advanced <strong>Fellowship in Facial Aesthetic Medicine (FFAC)</strong> from Mumbai in 2018.
                  </p>
                  <p>
                    Blending surgical dental mastery with clinical cosmetology, Dr. Jahanvi offers complete oral rehabilitation alongside modern facial aesthetics. Her specialized clinical repertoire covers painless single-visit root canals, customized crown & bridge prosthetics, smile makeovers, dental implants, malocclusion corrections, and comprehensive oral surgeries.
                  </p>
                  <p>
                    On the aesthetic front, she specializes in medical-grade treatments for melasma, acne scar revision, pigmentation disorders, fine lines, hydrafacials, carbon peel treatments, painless diode laser hair reduction, PRP therapy for hair restoration, and skin rejuvenation.
                  </p>
                </div>

                {/* Degrees & Qualifications Grid */}
                <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary-light text-primary shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">BDS (2008)</h4>
                      <p className="text-xs text-muted-foreground">Govt Dental College Nagpur, MUHS Nashik</p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-700 shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">FFAC (2018)</h4>
                      <p className="text-xs text-muted-foreground">Fellowship in Facial Aesthetic Medicine, Mumbai</p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="text-xs font-semibold text-foreground">Connect with Doctor:</span>
                  <a
                    href="https://www.instagram.com/dermadentt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm hover:opacity-90"
                  >
                    Instagram @dermadentt
                  </a>
                  <a
                    href="https://www.facebook.com/Dr.jahanvisdermadent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm hover:opacity-90"
                  >
                    Facebook @Dr.jahanvisdermadent
                  </a>
                  <a
                    href="mailto:dev.kripahealthcare@gmail.com"
                    className="inline-flex items-center gap-1.5 bg-card text-foreground border border-border text-xs font-semibold px-3.5 py-1.5 rounded-lg hover:bg-muted"
                  >
                    <Mail size={13} /> dev.kripahealthcare@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CLINIC TIMINGS & LOCATION SECTION */}
        <section id="location" className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full inline-block mb-3">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                Clinic Location & OPD Timings
              </h2>
              <p className="text-muted-foreground text-sm">
                Located conveniently at Khirni Phatak Road, Jhotwara, Jaipur. Open all 7 days for your convenience.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Timings & Address Details */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Timings Card */}
                <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                  <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
                    <div className="flex items-center gap-2">
                      <Clock size={20} className="text-primary" />
                      <h3 className="font-display font-bold text-lg text-foreground">OPD Timings</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open 7 Days
                    </span>
                  </div>

                  <div className="divide-y divide-border text-sm">
                    {[
                      { day: "Monday", time: "10:30 AM – 08:00 PM" },
                      { day: "Tuesday", time: "10:30 AM – 08:00 PM" },
                      { day: "Wednesday", time: "10:30 AM – 08:00 PM" },
                      { day: "Thursday", time: "10:30 AM – 08:00 PM" },
                      { day: "Friday", time: "10:30 AM – 08:00 PM" },
                      { day: "Saturday", time: "10:30 AM – 08:00 PM" },
                      { day: "Sunday", time: "10:30 AM – 08:00 PM" },
                    ].map((item, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between text-foreground/85">
                        <span className="font-medium">{item.day}</span>
                        <span className="font-semibold text-primary">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-card rounded-2xl border border-border p-6 shadow-card space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-foreground">Dr. Jahanvi's Dermadent</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Devkripa Health Care Centre</p>
                      <p className="text-xs sm:text-sm text-foreground/80 mt-2 leading-relaxed">
                        H.no. 175 Ashok Vihar Vistar, Khirni Phatak Road, Gokulpura, Jhotwara, Jaipur, Rajasthan 302012
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href="https://maps.google.com/maps?q=26.93527211,75.72658185"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl shadow hover:opacity-90 transition-all"
                    >
                      <Navigation size={15} /> Get Directions
                    </a>
                    <a
                      href="tel:8209011472"
                      className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-muted text-foreground font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl border border-border transition-all"
                    >
                      <Phone size={15} className="text-emerald-600" /> Call 8209011472
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="lg:col-span-6">
                <div className="bg-card rounded-2xl border border-border p-3 shadow-card overflow-hidden">
                  <div className="h-80 sm:h-[460px] rounded-xl overflow-hidden relative">
                    <iframe
                      src="https://maps.google.com/maps?q=26.93527211,75.72658185&output=embed"
                      title="Dr. Jahanvi's Dermadent Jaipur Location"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="section-padding bg-surface border-t border-border">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full inline-block mb-3">
                Patient Feedback
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                What Our Patients Say
              </h2>
              <p className="text-muted-foreground text-sm">
                Real reviews and heartfelt experiences from patients treated at Dr. Jahanvi's Dermadent & Devkripa Healthcare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl border border-border p-6 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1 text-amber-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold bg-primary-light text-primary px-2 py-0.5 rounded">
                        {review.treatment}
                      </span>
                    </div>

                    <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed mb-4 italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-border pt-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-teal-400 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">{review.name}</h4>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <BadgeCheck size={12} className="text-emerald-500" /> {review.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECT CONNECT & INSTANT CONSULTATION */}
        <section id="book-appointment" className="section-padding bg-gradient-to-b from-background via-surface to-background">
          <div className="container-width max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl border border-cyan-500/30 shadow-2xl p-6 sm:p-10 relative overflow-hidden text-center">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-3 mb-8">
                <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Instant Booking & Doctor Consultation
                </span>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white">
                  Connect Directly with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-200">
                    Dr. Jahanvi Tyagi
                  </span>
                </h2>
                
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  No lengthy forms! Connect directly on WhatsApp or call our clinic desk for immediate consultation slots, toothache emergency, and aesthetic advice.
                </p>
              </div>

              {/* Direct Action Buttons Grid */}
              <div className="relative z-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                
                {/* 1. Direct WhatsApp Button */}
                <a
                  href="https://wa.me/918209011472?text=Hello%20Dr.%20Jahanvi%20Tyagi,%20I%20want%20to%20book%20an%20appointment%20at%20your%20clinic.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-5 rounded-2xl shadow-xl shadow-emerald-900/30 hover:shadow-emerald-600/40 hover:scale-[1.02] transition-all flex flex-col items-center text-center justify-center gap-2 border border-emerald-400/30"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={26} className="text-white" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-bold block">Chat on WhatsApp</span>
                    <span className="text-xs text-emerald-100 font-medium">+91 8209011472 (Instant Reply)</span>
                  </div>
                </a>

                {/* 2. Direct Call Button */}
                <a
                  href="tel:8209011472"
                  className="group bg-gradient-to-r from-cyan-600 to-primary hover:from-cyan-500 hover:to-primary text-white p-5 rounded-2xl shadow-xl shadow-cyan-900/30 hover:shadow-cyan-600/40 hover:scale-[1.02] transition-all flex flex-col items-center text-center justify-center gap-2 border border-cyan-400/30"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={26} className="text-white" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-bold block">Call Clinic Directly</span>
                    <span className="text-xs text-cyan-100 font-medium">+91 8209011472 / 92570 29901</span>
                  </div>
                </a>

              </div>

              {/* Quick Info Ribbon */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center justify-center gap-1.5">
                  <Clock size={15} className="text-cyan-400 shrink-0" />
                  <span>Mon – Sun: 10:30 AM – 08:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <MapPin size={15} className="text-rose-400 shrink-0" />
                  <span>Khirni Phatak, Jhotwara, Jaipur</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <BadgeCheck size={15} className="text-emerald-400 shrink-0" />
                  <span>Prior Booking = Zero Waiting</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="section-padding bg-surface border-t border-border">
          <div className="container-width max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full inline-block mb-3">
                Helpful FAQs
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Common questions about dental procedures, cosmetology sessions, and clinic visits.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl border border-border overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp size={18} className="text-primary shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="bg-gradient-to-r from-cyan-900 via-primary to-teal-900 text-white py-12 px-4">
          <div className="container-width text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Ready for a Healthier Smile & Radiant Skin?
            </h2>
            <p className="text-cyan-100 text-xs sm:text-sm max-w-xl mx-auto">
              Schedule your appointment at Dr. Jahanvi's Dermadent / Devkripa Healthcare today. Call us directly or walk into our clinic in Jhotwara, Jaipur.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="#book-appointment"
                className="bg-white text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow hover:bg-slate-100 transition-colors"
              >
                Book Appointment Online
              </a>
              <a
                href="tel:8209011472"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-1.5"
              >
                <Phone size={15} /> Call 8209011472
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

export default DentalPage;
