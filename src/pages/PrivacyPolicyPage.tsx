import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Shield, ChevronRight, Check } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Privacy Policy</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              How we handle and protect patient data and confidentiality
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-surface">
          <div className="container-width max-w-4xl">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm space-y-8">
              <div className="flex items-center gap-3 text-primary border-b border-border pb-4">
                <Shield size={32} />
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">Patient Data Protection</h2>
                  <p className="text-muted-foreground text-xs">Last Updated: June 10, 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  At Jaipur Hospital, we are committed to protecting the privacy, confidentiality, and security of all personal, medical, and demographic information we collect from patients, visitors, and users of our online and offline services.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, and share your data when you visit our facility, consult our doctors, use our website (jaipurhospital.co.in), or book appointments through our digital channels.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">1. Information We Collect</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We collect information necessary to provide medical care, complete administrative tasks, and improve clinical operations. This includes:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Personal Details (Name, Age, Address, Phone, Email)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Medical History, Diagnosis, and Treatment Records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Insurance, TPA, CGHS, ECHS, or Scheme IDs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Payment details (Transactions and bills)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">2. How We Use Your Information</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your information is strictly protected and used only for:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Diagnosing, treating, and managing your medical condition.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Processing cashless billing under empanelled schemes (CGHS, ECHS, Ayushman Bharat) or insurance TPAs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Sending appointment confirmations, health reminders, and diagnostic reports.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Complying with statutory medical records acts and legal regulations in India.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">3. Medical Records Confidentiality</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Medical records (electronic and paper-based) are treated with the highest degree of security. Access is restricted exclusively to authorized clinical personnel and doctors directly involved in your care. We do not sell or lease patient records to third-party marketing companies under any circumstances.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold text-foreground">4. Sharing of Information</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We will share your information with outside parties only:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>With your written consent (e.g. for sharing reports with family members).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>With empanelled TPAs/government agencies to facilitate cashless treatment approvals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>When required by a court order, law enforcement request, or statutory health agency command.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-lg font-display font-bold text-foreground">Contact Our Grievance Officer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you have questions about our privacy practices, medical records access, or want to raise a concern, contact us at:
                </p>
                <div className="bg-surface rounded-2xl p-5 border border-border space-y-2 text-sm text-muted-foreground">
                  <div className="font-bold text-foreground">Jaipur Hospital Patient Grievance Team</div>
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

export default PrivacyPolicyPage;
