import HospitalHeader from "@/components/hospital/HospitalHeader";
import HeroSection from "@/components/hospital/HeroSection";
import QuickActionBar from "@/components/hospital/QuickActionBar";
import TrustStats from "@/components/hospital/TrustStats";
import AboutSection from "@/components/hospital/AboutSection";
import SpecialitiesSection from "@/components/hospital/SpecialitiesSection";
import ConditionsWeTreat from "@/components/hospital/ConditionsWeTreat";
import FeaturedServices from "@/components/hospital/FeaturedServices";
import DoctorsSection from "@/components/hospital/DoctorsSection";
import WhyChooseUs from "@/components/hospital/WhyChooseUs";
import FacilitiesGallery from "@/components/hospital/FacilitiesGallery";
import EmpanelmentSection from "@/components/hospital/EmpanelmentSection";
import TestimonialsSection from "@/components/hospital/TestimonialsSection";
import HealthPackages from "@/components/hospital/HealthPackages";
import FAQSection from "@/components/hospital/FAQSection";
import LocationSection from "@/components/hospital/LocationSection";
import AppointmentForm from "@/components/hospital/AppointmentForm";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";

import { SEO } from "@/components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "name": "Jaipur Hospital",
      "alternateName": "Best Multispeciality Hospital in Jaipur",
      "url": "https://www.jaipurhospital.co.in",
      "logo": "https://www.jaipurhospital.co.in/logo.png",
      "image": "https://www.jaipurhospital.co.in/hospital-image.jpg",
      "description": "Jaipur Hospital is one of the best multispeciality hospitals in Jaipur, providing expert medical care since 2004. 50+ specialist doctors, 24/7 emergency, ICU, NICU, and cashless treatment under Ayushman Bharat, CGHS, and ECHS.",
      "foundingDate": "2004",
      "numberOfBeds": 150,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lal Kothi, Near S.M.S. Stadium, Tonk Road",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8988",
        "longitude": "75.8069"
      },
      "telephone": ["+91-141-2741465", "+91-92570-29901"],
      "email": "Jaipurhospitallalkothi@gmail.com",
      "openingHours": ["Mo-Sa 09:00-20:00"],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      "medicalSpecialty": [
        "Cardiology", "Orthopedic Surgery", "Neurology",
        "General Surgery", "Obstetrics and Gynecology",
        "Pediatrics", "Emergency Medicine", "General Medicine",
        "Physical Therapy", "Diagnostic Imaging"
      ],
      "hasMap": "https://maps.google.com/?q=Jaipur+Hospital+Lal+Kothi+Jaipur",
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Credit Card, Insurance, CGHS, ECHS, Ayushman Bharat",
      "sameAs": [
        "https://www.facebook.com/share/1PtNFgMpZw/",
        "https://www.instagram.com/jaipur_hospital_lalkothi",
        "https://youtube.com/@jaipurhospitallalkothi1992?si=vA1EbYOY7jrGt835"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Health Checkup Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Heart Checkup Package",
            "price": "1499",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "name": "Diabetes and Thyroid Package",
            "price": "999",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "name": "Full Body Checkup",
            "price": "1999",
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Jaipur Hospital a CGHS empanelled hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Jaipur Hospital is a CGHS empanelled hospital in Jaipur. Central government employees and pensioners can receive cashless treatment across most departments by presenting their CGHS card. Please contact our patient coordinator team to confirm coverage for your specific treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Is Jaipur Hospital empanelled under Ayushman Bharat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are a registered Ayushman Bharat PM-JAY hospital in Jaipur. Beneficiaries of the scheme can avail cashless inpatient treatment for listed conditions. Our team will help you verify your eligibility and complete the necessary documentation."
          }
        },
        {
          "@type": "Question",
          "name": "What are the OPD timings at Jaipur Hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our OPD runs from 9:00 AM to 8:00 PM, Monday to Saturday. Emergency services are available 24 hours a day, 7 days a week, including all public holidays."
          }
        },
        {
          "@type": "Question",
          "name": "Does Jaipur Hospital have a 24/7 ambulance service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our GPS-enabled Advanced Life Support ambulances with trained paramedics are available round the clock. Call +91 92570 29901 for immediate ambulance dispatch anywhere in Jaipur."
          }
        },
        {
          "@type": "Question",
          "name": "Which specialities are available at Jaipur Hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 10+ specialities including Cardiology, Orthopaedics, Neurology, General Medicine, Gynaecology, Obstetrics, Paediatrics, General and Laparoscopic Surgery, Diagnostics and Imaging, and Physiotherapy. Our 50+ specialist doctors cover both routine and complex cases."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Jaipur Hospital located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaipur Hospital is located at Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015, Rajasthan. We are easily accessible from Malviya Nagar, Vaishali Nagar, Mansarovar, C-Scheme, and most parts of central and south Jaipur."
          }
        },
        {
          "@type": "Question",
          "name": "Does Jaipur Hospital offer normal delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Obstetrics and Gynaecology department actively supports normal delivery and has experienced lady doctors and midwives available 24/7 in the labour and delivery unit. We also have a NICU for newborns who need additional care."
          }
        }
      ]
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO
        title="Jaipur Hospital | Best Multispeciality Hospital in Jaipur"
        description="Jaipur Hospital — best multispeciality hospital in Jaipur since 2004. 50+ specialists, 24/7 emergency, ICU, NICU, cashless treatment under Ayushman Bharat, CGHS and ECHS."
        canonical="/"
        schema={homeSchema as any}
      />
      <HospitalHeader />
      <main>
        <HeroSection />
        <QuickActionBar />
        <TrustStats />
        <AboutSection />
        <SpecialitiesSection />
        <ConditionsWeTreat />
        <FeaturedServices />
        <WhyChooseUs />
        <DoctorsSection />
        <FacilitiesGallery />
        <EmpanelmentSection />
        <TestimonialsSection />
        <HealthPackages />
        <FAQSection />
        <LocationSection />
        <AppointmentForm />
        <ContactFooter />
      </main>
      <FloatingButtons />
    </div>
  );
};

export default Index;
