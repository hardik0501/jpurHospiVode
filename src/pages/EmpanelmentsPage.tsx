import { useState } from "react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { 
  CheckCircle2, 
  Phone, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Building2, 
  ChevronRight, 
  HelpCircle, 
  ArrowRight,
  Info,
  BadgeCheck,
  Search,
  ExternalLink
} from "lucide-react";

// Logos for the 7 Cashless Schemes matching the reference design
const SchemeLogos = {
  pmjay: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <img
        src="https://images.seeklogo.com/logo-png/42/1/ayushman-bharat-logo-png_seeklogo-429020.png"
        alt="Ayushman Bharat PM-JAY Logo"
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback SVG if image is blocked
          (e.currentTarget.style.display = "none");
          e.currentTarget.parentElement?.classList.add("bg-gradient-to-b", "from-orange-50", "via-white", "to-green-50");
        }}
      />
    </div>
  ),
  maa: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M50 15 C35 30, 25 45, 25 60 A25 25 0 0 0 75 60 C75 45, 65 30, 50 15 Z" fill="#0284c7" opacity="0.15" />
        {/* Family figure */}
        <circle cx="50" cy="42" r="5" fill="#0284c7" />
        <path d="M42 58 C42 49 58 49 58 58 Z" fill="#0284c7" />
        <circle cx="39" cy="47" r="3.5" fill="#0369a1" />
        <circle cx="61" cy="47" r="3.5" fill="#0369a1" />
        {/* Leaves base */}
        <path d="M30 72 C40 68 45 74 50 78 C55 74 60 68 70 72 C65 80 55 82 50 82 C45 82 35 80 30 72 Z" fill="#ea580c" />
        {/* Circular text simulation */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="50" y="92" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#0369a1" fontFamily="sans-serif">MAA-YOJANA</text>
        <text x="50" y="11" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#ea580c" fontFamily="sans-serif">मुख्यमंत्री आयुष्मान</text>
      </svg>
    </div>
  ),
  rghs: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Rajasthan Map Silhouette in emerald green */}
        <path 
          d="M32 18 L48 14 L65 20 L74 30 L85 45 L78 62 L82 75 L70 88 L52 82 L38 86 L22 75 L16 58 L20 40 L18 28 Z" 
          fill="#15803d" 
        />
        {/* White Cross with Golden/Yellow R inside */}
        <rect x="36" y="44" width="12" height="12" rx="2" fill="#ffffff" />
        <text x="42" y="53" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="sans-serif">+</text>
        <text x="58" y="58" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#eab308" fontFamily="sans-serif">R</text>
        <text x="50" y="96" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803d" fontFamily="sans-serif">RGHS</text>
      </svg>
    </div>
  ),
  cghs: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#16a34a" strokeWidth="2" />
        {/* Medical Caduceus / cross symbol */}
        <circle cx="50" cy="30" r="16" fill="#9333ea" opacity="0.9" />
        <path d="M50 20 L50 40 M40 30 L60 30" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
        {/* Protective hands */}
        <path d="M24 64 C30 52 40 48 50 56 C60 48 70 52 76 64 C68 76 32 76 24 64 Z" fill="#16a34a" />
        {/* Family silhouettes inside */}
        <circle cx="45" cy="50" r="3" fill="#ffffff" />
        <circle cx="55" cy="50" r="3" fill="#ffffff" />
        <circle cx="50" cy="53" r="2.5" fill="#ffffff" />
        <text x="50" y="86" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a" fontFamily="sans-serif">CGHS</text>
      </svg>
    </div>
  ),
  esi: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Maroon Outer Circle */}
        <circle cx="50" cy="50" r="46" fill="#881337" stroke="#b91c1c" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="#991b1b" />
        {/* Lamp / Menorah / Emblem in Golden Yellow */}
        <path d="M30 38 Q50 34 70 38 L65 44 Q50 40 35 44 Z" fill="#fbbf24" />
        <path d="M36 44 Q50 58 64 44 L60 52 Q50 62 40 52 Z" fill="#fbbf24" />
        <path d="M47 52 L53 52 L53 66 L47 66 Z" fill="#fbbf24" />
        <path d="M38 66 L62 66 L60 70 L40 70 Z" fill="#fbbf24" />
        {/* ESIC text */}
        <text x="50" y="80" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff" letterSpacing="1" fontFamily="sans-serif">ESIC</text>
        <text x="50" y="24" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#fbbf24" fontFamily="sans-serif">सामाजिक सुरक्षा</text>
      </svg>
    </div>
  ),
  echs: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Armed Forces Shield */}
        <path d="M22 20 L78 20 L78 50 C78 72 50 88 50 88 C50 88 22 72 22 50 Z" fill="#dc2626" />
        <path d="M22 45 L78 45 L78 50 C78 72 50 88 50 88 C50 88 22 72 22 50 Z" fill="#1e3a8a" />
        <path d="M22 62 L78 62 L78 65 C78 72 50 88 50 88 C50 88 22 72 22 65 Z" fill="#0284c7" />
        {/* Crossed Swords / Emblem in gold */}
        <circle cx="50" cy="34" r="5" fill="#fef08a" />
        <path d="M38 48 L62 36 M62 48 L38 36" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
        <text x="50" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff" letterSpacing="0.5" fontFamily="sans-serif">ECHS</text>
      </svg>
    </div>
  ),
  tpa: () => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="#f0fdf4" stroke="#0284c7" strokeWidth="2" />
        {/* Family icon in circle with supporting hands */}
        <circle cx="50" cy="32" r="5" fill="#0284c7" />
        <circle cx="40" cy="38" r="4" fill="#0284c7" />
        <circle cx="60" cy="38" r="4" fill="#0284c7" />
        <path d="M34 52 C34 44 46 44 46 52 Z" fill="#0369a1" />
        <path d="M54 52 C54 44 66 44 66 52 Z" fill="#0369a1" />
        <path d="M43 52 C43 42 57 42 57 52 Z" fill="#0284c7" />
        {/* Supporting hands */}
        <path d="M22 62 C34 54 42 66 50 68 C58 66 66 54 78 62 C68 76 32 76 22 62 Z" fill="#0ea5e9" opacity="0.8" />
        <text x="50" y="86" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0369a1" fontFamily="sans-serif">TPA</text>
      </svg>
    </div>
  ),
};

// Top 7 Cashless Schemes Data matching user's banner image
const bannerSchemes = [
  {
    id: "pmjay",
    hindiName: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
    englishCode: "(PM-JAY)",
    logo: SchemeLogos.pmjay,
    themeColor: "from-orange-500/10 to-green-500/10 border-orange-200",
  },
  {
    id: "maa-yojana",
    hindiName: "मुख्यमंत्री आयुष्मान आरोग्य योजना",
    englishCode: "(MAA - YOJANA)",
    logo: SchemeLogos.maa,
    themeColor: "from-sky-500/10 to-blue-500/10 border-sky-200",
  },
  {
    id: "rghs",
    hindiName: "RGHS (राजस्थान सरकार स्वास्थ्य योजना)",
    englishCode: "(Rajasthan Govt Health Scheme)",
    logo: SchemeLogos.rghs,
    themeColor: "from-emerald-500/10 to-teal-500/10 border-emerald-200",
  },
  {
    id: "cghs",
    hindiName: "CGHS (केंद्रीय सरकार स्वास्थ्य योजना)",
    englishCode: "(Central Govt Health Scheme)",
    logo: SchemeLogos.cghs,
    themeColor: "from-green-500/10 to-emerald-500/10 border-green-200",
  },
  {
    id: "esi",
    hindiName: "ESI (कर्मचारी राज्य बीमा योजना)",
    englishCode: "(Employees' State Insurance)",
    logo: SchemeLogos.esi,
    themeColor: "from-rose-500/10 to-red-500/10 border-rose-200",
  },
  {
    id: "echs",
    hindiName: "ECHS (पूर्व सैनिक स्वास्थ्य योजना)",
    englishCode: "(Ex-Servicemen Health Scheme)",
    logo: SchemeLogos.echs,
    themeColor: "from-blue-500/10 to-indigo-500/10 border-blue-200",
  },
  {
    id: "tpa",
    hindiName: "अन्य TPA (थर्ड पार्टी एडमिनिस्ट्रेटर)",
    englishCode: "(Corporate & Private Insurers)",
    logo: SchemeLogos.tpa,
    themeColor: "from-cyan-500/10 to-sky-500/10 border-cyan-200",
  },
];

// Comprehensive scheme details
const schemeDetails = [
  {
    id: "pmjay",
    badge: "National Health Authority • Govt. of India",
    titleHindi: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
    titleEnglish: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    logo: SchemeLogos.pmjay,
    coverage: "₹5,00,000 / Family / Year",
    coverageType: "100% Cashless Hospitalization",
    overview:
      "Ayushman Bharat PM-JAY is the world's largest government-funded healthcare assurance scheme. At Jaipur Hospital, eligible beneficiaries get comprehensive cashless secondary and tertiary inpatient care without paying anything upfront.",
    eligibleBeneficiaries: [
      "PM-JAY Gold / Ayushman e-Card holders",
      "NFSA / BPL and SECC eligible family members",
      "Senior Citizens aged 70+ (Under Ayushman Vaya Vandana Yojana)",
      "Families listed on the official Mera PM-JAY portal",
    ],
    coveredSpecialties: [
      "General & Laparoscopic Surgery",
      "Cardiology & Cardiac Care",
      "Orthopaedics & Joint Replacements",
      "Gynaecology & Obstetrics",
      "Critical Care & ICU Management",
      "Diagnostics, Pre & Post-Hospitalization Meds",
    ],
    documentsRequired: [
      "Ayushman Bharat Golden Card / PM-JAY Card",
      "Aadhaar Card of the patient",
      "Ration Card / NFSA Proof",
      "Registered Mobile Number for OTP Verification",
    ],
    highlightBadge: "₹5 Lakh Free Treatment",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "maa-yojana",
    badge: "Government of Rajasthan • State Scheme",
    titleHindi: "मुख्यमंत्री आयुष्मान आरोग्य योजना (MAA-YOJANA)",
    titleEnglish: "Mukhyamantri Ayushman Arogya Yojana (Formerly Chiranjeevi Scheme)",
    logo: SchemeLogos.maa,
    coverage: "₹25,00,000 / Family / Year",
    coverageType: "Complete Cashless Hospitalization",
    overview:
      "Mukhyamantri Ayushman Arogya Yojana (MAA Yojana) provides state-of-the-art cashless healthcare coverage to all eligible residents of Rajasthan. Jaipur Hospital offers seamless package admissions under this flagship initiative.",
    eligibleBeneficiaries: [
      "All registered Jan Aadhaar Card holders in Rajasthan",
      "NFSA / BPL / SECC families of Rajasthan",
      "Small and marginal farmers, contractual workers (Samvida Karmi)",
      "Citizens enrolled under the paid premium category (₹850/yr)",
    ],
    coveredSpecialties: [
      "Advanced Multi-specialty Surgeries",
      "Cardiac Interventions & Cath Lab procedures",
      "Intensive Care Unit (ICU) & HDU treatment",
      "General Medicine & Emergency Care",
      "Pre-hospitalization (5 days) & Post-hospitalization (15 days) medicines",
    ],
    documentsRequired: [
      "Jan Aadhaar Card / Jan Aadhaar Enrollment Slip",
      "Patient Aadhaar Card",
      "Doctor's Admission Advice / Referral Slip",
      "Biometric / OTP Verification at Jaipur Hospital Helpdesk",
    ],
    highlightBadge: "Up to ₹25 Lakh Cover",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    id: "rghs",
    badge: "Finance Department • Govt. of Rajasthan",
    titleHindi: "RGHS (राजस्थान सरकार स्वास्थ्य योजना)",
    titleEnglish: "Rajasthan Government Health Scheme (RGHS)",
    logo: SchemeLogos.rghs,
    coverage: "IPD Cashless Cover as per RGHS Norms",
    coverageType: "Cashless Inpatient & Daycare",
    overview:
      "RGHS is designed to provide quality cashless medical treatment to serving State Government employees, pensioners, MLAs, ex-MLAs, and judicial officers across Rajasthan. Jaipur Hospital is an authorized RGHS healthcare provider.",
    eligibleBeneficiaries: [
      "Serving Rajasthan State Government Employees",
      "State Government Pensioners & Family Pensioners",
      "Hon'ble MLAs, Former MLAs, and Ministers",
      "Autonomous Bodies / Boards / University Employees under RGHS",
      "Registered dependent family members",
    ],
    coveredSpecialties: [
      "Cashless Indoor (IPD) Hospitalization",
      "Major & Minor Surgical Procedures",
      "Cardiology, Orthopaedics & Neurology care",
      "Specialty Consultations & Pre-authorized Daycare procedures",
      "Approved Implants & Consumables as per RGHS rulebook",
    ],
    documentsRequired: [
      "RGHS E-Card / Jan Aadhaar linked RGHS Card",
      "Employee / Pensioner PPO / Department ID Card",
      "Patient Aadhaar Card",
      "Prescription / Admission recommendation by Treating Doctor",
    ],
    highlightBadge: "State Govt. Cashless",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "cghs",
    badge: "Ministry of Health & Family Welfare • Govt. of India",
    titleHindi: "CGHS (केंद्रीय सरकार स्वास्थ्य योजना)",
    titleEnglish: "Central Government Health Scheme (CGHS)",
    logo: SchemeLogos.cghs,
    coverage: "100% Cashless at CGHS Approved Rates",
    coverageType: "Cashless for Pensioners & Beneficiaries",
    overview:
      "Jaipur Hospital is a recognized CGHS empanelled hospital in Jaipur, catering to Central Government employees, pensioners, and their dependents with cashless indoor treatment across broad clinical specialties.",
    eligibleBeneficiaries: [
      "Central Government Pensioners and their dependent family members",
      "Serving Central Government Employees (with requisite referral)",
      "Sitting & Former Members of Parliament (MPs / Ex-MPs)",
      "Freedom Fighters & Ex-Governors",
      "Retired Supreme Court & High Court Judges",
    ],
    coveredSpecialties: [
      "Emergency Cashless Admission",
      "Elective & Planned Surgeries at CGHS tariffs",
      "Cardiology, General Surgery, Orthopaedics",
      "ICU, CCU, and specialized inpatient nursing",
      "Laboratory & Radiological investigations during admission",
    ],
    documentsRequired: [
      "Valid CGHS Plastic Card / Digital E-Card",
      "Permission Letter / Referral from CGHS Wellness Centre (if applicable)",
      "Government Photo ID Proof (Aadhaar / Voter ID)",
      "Doctor's Admission Advice Memo",
    ],
    highlightBadge: "CGHS Empanelled Hospital",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "esi",
    badge: "Ministry of Labour & Employment • Govt. of India",
    titleHindi: "ESI / ESIC (कर्मचारी राज्य बीमा योजना)",
    titleEnglish: "Employees' State Insurance Corporation (ESIC)",
    logo: SchemeLogos.esi,
    coverage: "Complete Cashless Secondary & Tertiary Care",
    coverageType: "Cashless Treatment on Referral",
    overview:
      "Employees' State Insurance provides comprehensive social security and medical benefits to industrial and organized workforce employees. Jaipur Hospital delivers cashless tie-up treatment upon referral from ESIC dispensaries and model hospitals.",
    eligibleBeneficiaries: [
      "Insured Persons (IP) with active ESIC contribution",
      "Registered dependent spouse, children, and parents",
      "ESIC Pensioners and beneficiaries with valid Pehchan Card",
    ],
    coveredSpecialties: [
      "Super-specialty and Secondary Care Inpatient Hospitalization",
      "Laparoscopic & Open Surgeries",
      "Critical Care & Trauma Care Management",
      "Dialysis & Special Investigation Support",
    ],
    documentsRequired: [
      "ESIC E-Pehchan Card / Plastic Smart Card",
      "Referral Slip / Form 1 / Permission from ESIC Dispensary/SMC",
      "Aadhaar Card of Insured Person & Patient",
      "Recent Contribution Slip / Salary Proof (if requested)",
    ],
    highlightBadge: "ESIC Tie-Up Care",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: "echs",
    badge: "Department of Ex-Servicemen Welfare • Ministry of Defence",
    titleHindi: "ECHS (पूर्व सैनिक स्वास्थ्य योजना)",
    titleEnglish: "Ex-Servicemen Contributory Health Scheme (ECHS)",
    logo: SchemeLogos.echs,
    coverage: "100% Cashless Comprehensive Medical Care",
    coverageType: "Cashless Inpatient & Surgical Treatment",
    overview:
      "Honoring our nation's brave armed forces veterans, Jaipur Hospital offers dedicated, prompt, and cashless medical treatment to ex-servicemen, war widows, and their dependents under the ECHS scheme.",
    eligibleBeneficiaries: [
      "Ex-Servicemen Pensioners from Army, Navy, and Air Force",
      "War Widows and Veer Naris",
      "Registered Dependent family members of ECHS cardholders",
      "Coast Guard and Assam Rifles Pensioners",
    ],
    coveredSpecialties: [
      "24x7 Emergency & Trauma Admissions",
      "Advanced Cardiac, Orthopaedic & Surgical Procedures",
      "ICU, Post-Operative Care & High Dependency Unit",
      "All inpatient medicines, consumables, and implants",
    ],
    documentsRequired: [
      "ECHS 64KB Smart Card / Online Temp Slip",
      "Referral Letter from local ECHS Polyclinic (except emergencies)",
      "Service Discharge Book / PPO copy (if needed)",
      "Patient Aadhaar / Photo ID",
    ],
    highlightBadge: "Armed Forces Veterans Care",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "tpa",
    badge: "IRDAI Approved TPAs & Private Health Insurance",
    titleHindi: "अन्य TPA एवं बीमा कंपनियाँ (Third Party Administrators)",
    titleEnglish: "Major TPAs, Corporate Tie-Ups & Private Health Insurance",
    logo: SchemeLogos.tpa,
    coverage: "As per Individual / Corporate Policy Sum Insured",
    coverageType: "Hassle-Free Cashless Authorization",
    overview:
      "Jaipur Hospital is empanelled with all premier Third Party Administrators (TPAs) and leading public and private health insurance providers to facilitate fast, frictionless cashless hospitalization for our patients.",
    eligibleBeneficiaries: [
      "Individual Health Insurance Policyholders",
      "Family Floater Policy Beneficiaries",
      "Corporate Group Mediclaim (GMC) Employees & Dependents",
      "Senior Citizen & Critical Illness Insurance Cardholders",
    ],
    coveredSpecialties: [
      "Planned Hospitalization & Daycare Surgeries",
      "Emergency Inpatient & Trauma Admissions",
      "Multi-specialty Surgical & Medical Treatments",
      "Post-discharge Claim Assistance & Query Redressal",
    ],
    documentsRequired: [
      "Health Insurance E-Card or Physical Policy Copy",
      "Government Photo ID Proof (Aadhaar / PAN / Voter ID)",
      "Employee ID Card (For Corporate GMC policies)",
      "Doctor's Consultation Prescription & Diagnostic Reports",
    ],
    highlightBadge: "25+ TPAs Empanelled",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
];

// List of empanelled TPAs and corporate partners
const tpaList = [
  "Medi Assist TPA",
  "MD India Healthcare Services",
  "Family Health Plan Ltd. (FHPL)",
  "Paramount Health Services",
  "Raksha Health Insurance TPA",
  "Vipul MedCorp TPA",
  "Heritage Health TPA",
  "Alankit Health Care TPA",
  "Dedicated Healthcare TPA",
  "Health India TPA",
  "Star Health and Allied Insurance",
  "HDFC ERGO General Insurance",
  "ICICI Lombard General Insurance",
  "Niva Bupa Health Insurance",
  "Care Health Insurance (Religare)",
  "Bajaj Allianz General Insurance",
  "TATA AIG General Insurance",
  "New India Assurance Co. Ltd.",
  "United India Insurance Co.",
  "National Insurance Co. Ltd.",
  "Oriental Insurance Co. Ltd.",
  "Aditya Birla Health Insurance",
  "SBI General Insurance",
  "Reliance General Insurance",
  "IFFCO Tokio General Insurance",
  "Future Generali India Insurance",
];

// How to avail cashless treatment steps
const cashlessSteps = [
  {
    step: "01",
    title: "Visit Helpdesk",
    desc: "Present your scheme/insurance card and Aadhaar card at our 24/7 Cashless TPA Helpdesk on the Ground Floor.",
    icon: Building2,
  },
  {
    step: "02",
    title: "Verification & Pre-Auth",
    desc: "Our cashless coordinators verify your eligibility and submit the pre-authorization request electronically.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Cashless Treatment",
    desc: "Upon quick approval, receive seamless inpatient treatment, diagnostics, and doctor care without upfront deposit.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Hassle-Free Discharge",
    desc: "Sign the discharge summary upon recovery. All expenses within the scheme/policy are settled directly with the authority.",
    icon: BadgeCheck,
  },
];

const EmpanelmentsPage = () => {
  const [selectedScheme, setSelectedScheme] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSchemes = schemeDetails.filter((scheme) => {
    const matchesTab = selectedScheme === "all" || scheme.id === selectedScheme;
    const matchesSearch =
      searchQuery.trim() === "" ||
      scheme.titleHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.titleEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.eligibleBeneficiaries.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      scheme.coveredSpecialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-foreground">
      <HospitalHeader />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="pt-12 pb-14 bg-gradient-primary text-primary-foreground relative overflow-hidden">
          <div className="container-width relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide mb-4">
              <ShieldCheck size={16} /> 100% Cashless Healthcare Empanelments
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              Our Cashless Schemes
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Our Schemes</span>
            </div>
            <p className="text-primary-foreground/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We are empanelled with all major Central & State Government Health Schemes, Armed Forces Health Programs, and 25+ Corporate Insurance TPAs to provide hassle-free cashless treatments.
            </p>
          </div>
        </section>

        {/* TOP BANNER STRIP - EXACTLY AS PER USER'S SHARED IMAGE */}
        <section className="container-width -mt-8 relative z-20 mb-14">
          <div className="bg-white rounded-2xl md:rounded-3xl border-2 border-primary/25 shadow-xl p-5 md:p-8">
            {/* Banner Title with horizontal dividing lines */}
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="h-0.5 bg-primary/40 flex-1 max-w-[80px] md:max-w-[140px]" />
              <h2 className="text-lg md:text-2xl font-display font-extrabold text-primary tracking-wide text-center uppercase">
                CASHLESS SCHEMES AVAILABLE
              </h2>
              <div className="h-0.5 bg-primary/40 flex-1 max-w-[80px] md:max-w-[140px]" />
            </div>

            {/* 7 Schemes Grid matching image layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4 items-stretch">
              {bannerSchemes.map((item, idx) => {
                const LogoComp = item.logo;
                const isLast = idx === bannerSchemes.length - 1;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedScheme(item.id);
                      const target = document.getElementById(item.id);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    className={`group flex flex-col items-center text-center p-3 md:p-4 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-md border border-transparent hover:border-primary/20 ${
                      !isLast ? "lg:border-r lg:border-r-slate-200/80" : ""
                    }`}
                  >
                    <div className="mb-3">
                      <LogoComp />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-[12px] md:text-[13px] font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-3">
                        {item.hindiName}
                      </p>
                      <span className="text-[10px] md:text-[11px] font-semibold text-primary/80 mt-1 block">
                        {item.englishCode}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Filter & Search Bar */}
        <section className="container-width mb-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setSelectedScheme("all")}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  selectedScheme === "all"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Schemes (7)
              </button>
              {bannerSchemes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedScheme(s.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    selectedScheme === s.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {s.id.toUpperCase().replace("-", " ")}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search scheme or treatment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>
        </section>

        {/* Detailed Scheme Cards */}
        <section className="container-width space-y-8 mb-16">
          {filteredSchemes.map((scheme) => {
            const LogoComponent = scheme.logo;
            return (
              <div
                key={scheme.id}
                id={scheme.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Header Strip */}
                <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start md:items-center gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <LogoComponent />
                      </div>
                      <div>
                        <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-2 ${scheme.badgeColor}`}>
                          {scheme.badge}
                        </span>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-slate-900 leading-tight">
                          {scheme.titleHindi}
                        </h2>
                        <p className="text-sm md:text-base font-medium text-slate-600 mt-1">
                          {scheme.titleEnglish}
                        </p>
                      </div>
                    </div>

                    {/* Coverage badge */}
                    <div className="flex lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-200">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {scheme.coverageType}
                      </span>
                      <span className="text-lg md:text-xl font-bold text-primary">
                        {scheme.coverage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8">
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8">
                    {scheme.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Eligible Beneficiaries */}
                    <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm md:text-base">
                        <BadgeCheck size={18} className="text-primary flex-shrink-0" />
                        <h3>पात्रता (Who is Eligible)</h3>
                      </div>
                      <ul className="space-y-2">
                        {scheme.eligibleBeneficiaries.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Covered Services */}
                    <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm md:text-base">
                        <ShieldCheck size={18} className="text-primary flex-shrink-0" />
                        <h3>उपचार व सुविधाएं (Covered Care)</h3>
                      </div>
                      <ul className="space-y-2">
                        {scheme.coveredSpecialties.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Required Documents */}
                    <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm md:text-base">
                        <FileText size={18} className="text-primary flex-shrink-0" />
                        <h3>आवश्यक दस्तावेज (Documents Needed)</h3>
                      </div>
                      <ul className="space-y-2">
                        {scheme.documentsRequired.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* If TPA, render list of all partner insurance providers */}
                  {scheme.id === "tpa" && (
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
                        Major Empanelled TPAs & Insurance Partners:
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                        {tpaList.map((tpaName, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 flex items-center gap-2 hover:border-primary/40 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="truncate">{tpaName}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Helpdesk Action Bar */}
                  <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-600 text-xs md:text-sm">
                      <Info size={16} className="text-primary flex-shrink-0" />
                      <span>Cashless admission requires valid scheme ID & OTP/Biometric verification at admission counter.</span>
                    </div>

                    <a
                      href="tel:01412741465"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-full text-xs md:text-sm hover:bg-primary/90 transition-colors shadow-sm flex-shrink-0"
                    >
                      <Phone size={14} /> Contact Helpdesk
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* 4-Step Cashless Process */}
        <section className="container-width mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-primary/90 font-bold text-xs uppercase tracking-widest bg-primary/20 px-3.5 py-1.5 rounded-full">
                Simple & Transparent
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mt-3">
                How to Avail Cashless Treatment
              </h2>
              <p className="text-slate-300 text-sm md:text-base mt-2">
                4-step seamless admission process at Jaipur Hospital for planned and emergency admissions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cashlessSteps.map((stepItem, idx) => {
                const StepIcon = stepItem.icon;
                return (
                  <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                        <StepIcon size={24} />
                      </div>
                      <span className="text-2xl font-display font-extrabold text-slate-500">
                        {stepItem.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{stepItem.title}</h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{stepItem.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cashless Helpdesk Contact Card */}
        <section className="container-width mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-sky-50 to-primary/10 border-2 border-primary/20 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-primary/20 inline-block mb-3">
                Dedicated Scheme Helpdesk
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
                Need Assistance With Your Scheme or Insurance?
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl">
                Our 24x7 Cashless Desk on the Ground Floor is always ready to help you verify eligibility, process documents, and coordinate with authorities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href="tel:01412741465"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-md text-sm"
              >
                <Phone size={16} /> 0141-2741465 / 66
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 font-bold px-6 py-3.5 rounded-full hover:bg-slate-50 transition-colors text-sm"
              >
                Find Us on Map <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container-width">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-2">
                Common queries regarding cashless treatment under Government & Private schemes at Jaipur Hospital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-primary flex-shrink-0" />
                  What if my treatment is an emergency?
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  In case of acute emergency, admission and life-saving care are initiated immediately. Our TPA desk coordinates with your scheme authority within 24 hours to obtain retroactive pre-authorization.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-primary flex-shrink-0" />
                  Are senior citizens aged 70+ eligible under Ayushman Bharat?
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Yes, under the Ayushman Vaya Vandana Yojana, all senior citizens aged 70 and above are eligible for up to ₹5 Lakh cashless coverage regardless of income or SECC category.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-primary flex-shrink-0" />
                  What documents are needed for RGHS admission?
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Please bring your RGHS E-Card, Jan Aadhaar card, employee/pensioner ID, and doctor's admission recommendation. OTP verification will be conducted at our desk.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-primary flex-shrink-0" />
                  Do I need to pay any security deposit?
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  No advance or security deposit is required for approved cashless scheme beneficiaries (PM-JAY, MAA-Yojana, RGHS, CGHS, ECHS). Only non-medical items (if excluded by the scheme) may require separate settlement.
                </p>
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

export default EmpanelmentsPage;
