import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import TrustStats from "@/components/hospital/TrustStats";
import WhyChooseUs from "@/components/hospital/WhyChooseUs";
import FacilitiesGallery from "@/components/hospital/FacilitiesGallery";
import TestimonialsSection from "@/components/hospital/TestimonialsSection";
import { HOSPITAL_MISSION } from "@/data/hospitalData";
import { Target, Eye, Heart, Shield, Users, Lightbulb, Award } from "lucide-react";
import { SEO } from "@/components/SEO";

const valueIcons = [Heart, Shield, Users, Award, Lightbulb];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO title="About Us" description="Learn about Jaipur Hospital's history, mission, and vision. We are a trusted multispeciality hospital in Jaipur." canonical="/about" />
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About Jaipur Hospital</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Trusted multispeciality hospital serving the people of Rajasthan with compassion and excellence since 1998.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">Our Story</span>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Two Decades of Healing</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1998, Jaipur Hospital began with a vision to provide world-class healthcare accessible to every citizen
                    of Rajasthan. What started as a 50-bed facility has now grown into a 150-bed multispeciality hospital equipped
                    with cutting-edge technology and a team of 50+ specialist doctors.
                  </p>
                  <p>
                    Located at the heart of Jaipur — Lal Kothi, Near S.M.S. Stadium, Tonk Road — we have treated over 10,000 patients across
                    Cardiology, Orthopaedics, Neurology, General Surgery, Gynaecology, Pediatrics, and more. Our commitment to
                    patient-first care, advanced diagnostics, and affordable pricing has made us one of the most trusted hospitals in Rajasthan.
                  </p>
                  <p>
                    We are empanelled under CGHS, ECHS, Ayushman Bharat, and multiple insurance TPAs, ensuring cashless treatment
                    for government employees, defence personnel, and insured patients.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border">
                <img src="/Gallery/2.jpg" alt="Jaipur Hospital Building" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Mission */}
              <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">{HOSPITAL_MISSION.mission}</p>
              </div>
              {/* Vision */}
              <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-secondary-light flex items-center justify-center mb-5">
                  <Eye size={28} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">{HOSPITAL_MISSION.vision}</p>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">Our Values</span>
              <h2 className="text-3xl font-display font-bold text-foreground">What Drives Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HOSPITAL_MISSION.values.map((value, idx) => {
                const Icon = valueIcons[idx % valueIcons.length];
                return (
                  <div key={value.title} className="bg-card rounded-2xl border border-border p-6 hover:shadow-md-blue transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <TrustStats />
        <WhyChooseUs />
        <FacilitiesGallery />
        <TestimonialsSection />
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
