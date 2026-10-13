import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileText, ChevronRight, Check } from "lucide-react";

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Terms of Use
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Terms of Use</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Rules and guidelines governing our services and digital platforms
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-surface">
          <div className="container-width max-w-4xl">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm space-y-8">
              <div className="flex items-center gap-3 text-primary border-b border-border pb-4">
                <FileText size={32} />
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">Terms & Conditions</h2>
                  <p className="text-muted-foreground text-xs">Last Updated: June 10, 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Welcome to the official website of Jaipur Hospital (jaipurhospital.co.in). By accessing our website, booking an appointment, checking scheme eligibility, or availing healthcare services at our facility at Lal Kothi, Tonk Road, you agree to be bound by the terms, conditions, and disclaimers outlined below.
                </p>
                <p>
                  If you do not agree with any part of these terms, please discontinue use of this site and our digital services.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">1. Medical Content Disclaimer (Not Medical Advice)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All contents, articles, diagrams, list of symptoms, and conditions described on this website are for general information and educational purposes only. They DO NOT constitute professional medical advice, diagnosis, treatment, or clinical recommendations. Always consult a qualified general physician or specialist for personal health concerns. In case of a critical emergency, call our ambulance or visit the nearest emergency room immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">2. Online Appointments & Scheduling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When you submit an appointment request through our website or WhatsApp CTA buttons:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>The request is subject to doctor availability and hospital OPD schedules.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Our patient coordinator will contact you to officially confirm the time slot. Submitted times are preferences and not final bookings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Consultation fees are payable at the OPD counter or registration desks.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">3. Cashless Treatment & Schemes (CGHS, ECHS, PM-JAY)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empanelled cashless facilities under Central Government Health Scheme (CGHS), Ex-Servicemen Contributory Health Scheme (ECHS), Ayushman Bharat, and private insurance TPAs are subject to statutory eligibility:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Patients must submit valid cards, referral letters, and relevant proof at the time of admission.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Cashless approvals are subject to guidelines, limits, and approvals from TPA managers or scheme administrators. Hospital is not liable for claims rejected by TPAs or schemes.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">4. Code of Conduct at Hospital Premises</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Jaipur Hospital maintains a zero-tolerance policy against physical violence, abusive language, or harassment targeted towards our doctors, nurses, paramedics, and support staff. Violations will result in immediate discharge, legal complaint filing, and termination of non-emergency clinical relations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">5. Limitation of Liability</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Jaipur Hospital and its directors, consultants, and developers are not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including but not limited to reliance on informational articles.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-lg font-display font-bold text-foreground">Questions Regarding Terms</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you have concerns or queries regarding our service terms and policies, please reach out to the hospital administration at:
                </p>
                <div className="bg-surface rounded-2xl p-5 border border-border space-y-2 text-sm text-muted-foreground">
                  <div className="font-bold text-foreground">Jaipur Hospital Management Team</div>
                  <div>Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015, Rajasthan</div>
                  <div>Email: Jaipurhospitallalkothi@gmail.com</div>
                  <div>Phone: 0141-2741465 | +91 92570 29901</div>
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

export default TermsOfUsePage;
