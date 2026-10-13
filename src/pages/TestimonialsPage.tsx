import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import TestimonialsSection from "@/components/hospital/TestimonialsSection";
import { ChevronRight, Star, Heart, Award } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    city: "Jaipur",
    speciality: "Orthopaedics Patient",
    text: "Excellent experience during my knee surgery. The doctors and nurses are cooperative and highly professional. Highly recommended!",
    date: "2 months ago",
  },
  {
    name: "Neelam Sharma",
    city: "Tonk",
    speciality: "Cardiology Patient",
    text: "My mother was admitted under critical heart blockages. The prompt angiography and treatment saved her life. Heartfelt thanks to Dr. Meel and the CCU nursing staff.",
    date: "3 months ago",
  },
  {
    name: "Devendra Soni",
    city: "Sikar",
    speciality: "General Surgery Patient",
    text: "Laparoscopic hernia operation was smooth and nearly painless. The pricing was completely transparent and cashless insurance approval took under an hour.",
    date: "1 month ago",
  },
  {
    name: "Sunita Yadav",
    city: "Dausa",
    speciality: "Gynaecology Patient",
    text: "Great maternity department! Delivered my baby here through normal delivery. The staff in the labor suite is patient-friendly and professional.",
    date: "2 weeks ago",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Patient Testimonials
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Testimonials</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Real stories of recovery and care from families across Rajasthan
            </p>
          </div>
        </section>

        {/* Testimonials Slider */}
        <TestimonialsSection />

        {/* Detailed Reviews Grid */}
        <section className="py-16 bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                More Recoveries, More Smiles
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                Stories of successful recoveries from our patients across different departments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-foreground text-base">{rev.name}</div>
                        <div className="text-muted-foreground text-xs">{rev.city} · {rev.speciality}</div>
                      </div>
                      <span className="text-muted-foreground text-xs">{rev.date}</span>
                    </div>

                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Review Callout */}
            <div className="mt-16 bg-card border border-border rounded-3xl p-8 max-w-2xl mx-auto text-center space-y-4">
              <Award size={40} className="text-primary mx-auto" />
              <h3 className="font-display font-bold text-xl text-foreground">Were you treated at Jaipur Hospital?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                Your feedback helps us continuously improve our healthcare services. Please share your recovery story on Google Business Profile to help other families make informed healthcare choices.
              </p>
              <div>
                <a
                  href="https://maps.google.com/?q=Jaipur+Hospital+Lal+Kothi+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold rounded-full px-7 py-3.5 text-sm hover:opacity-90 transition-opacity shadow-sm"
                >
                  Write a Google Review
                </a>
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

export default TestimonialsPage;
