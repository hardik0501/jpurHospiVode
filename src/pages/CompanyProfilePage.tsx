import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Heart, Bone, Activity, Brain, Users, Building2 } from "lucide-react";

const CompanyProfilePage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Company Profile – Jaipur Hospital
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Expertise and care at the heart of Rajasthan’s healthcare.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Expertise with Jaipur Hospital
            </h2>

            <div className="space-y-8">
              {/* Clinical team par excellence */}
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Clinical team par excellence
                </h3>

                <div className="bg-card rounded-2xl border border-border shadow-card p-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    Nursing Care
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A team of professionally trained staff serves patients with compassion, respect, and integrity.
                    Nursing has always been the backbone of the medical services offered by Jaipur Hospital.
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                    <Bone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Joint Replacement and Advanced Trauma Centre</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                    <Activity className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Cardio Thoracic and Vascular Surgery Department</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card rounded-xl border border-border p-4">
                    <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Neurology and Neurosurgery Department</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Facilities */}
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Facilities
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The hospital has ventilated wards, waiting areas, OPD facilities, and private rooms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The hospital currently provides multiple indoor medical facilities for patients.
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

export default CompanyProfilePage;
