import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileSearch, Quote, User } from "lucide-react";

const ManagingDirectorMessagePage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Managing Director&apos;s Message
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
              A message from our Managing Director, reflecting on two decades of service and our commitment to
              compassionate, quality healthcare.
            </p>
          </div>
        </section>

        {/* Search (static UI) */}
        <section className="bg-surface border-b border-border">
          <div className="container-width max-w-4xl py-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileSearch className="w-4 h-4 text-primary" />
                <span>Write search keyword &amp; press Enter</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="section-padding bg-surface">
          <div className="container-width max-w-4xl">
            <article className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">A very warm welcome to everyone.</h2>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  With this hospital unit completing two decades of service in the healthcare industry, it is quite
                  satisfying to turn back the pages of history to see the thousands of smiling faces. Over these years,
                  this unit has been a forerunner in providing integrated healthcare in the state of Rajasthan.
                </p>
                <p>
                  We have always maintained a highly qualified and dedicated team of Medical, Administrative and
                  Support staff. Our consultants come among the top brass in their respective specialties, this coupled
                  with state of the art technology and trained paramedical personnel forms the core of our efficient
                  healthcare delivery system.
                </p>
                <p>
                  We cannot achieve our mission, vision, values or our associated goals and objectives without help
                  from all our stakeholders. We encourage staff at all levels of the hospital, individuals served,
                  families, friends and other interested parties to become engaged and involved in the provision of care
                  and treatment provided. We welcome all stakeholders to become constructively involved in suggesting
                  ideas, identifying opportunities for improvement and participating in continuous improvement in order
                  to advance the operational effectiveness and efficiencies of the Hospital.
                </p>
                <p>
                  At Jaipur Hospital, we are united in our determination to continue our efforts so that we can provide
                  advanced medical care that is safe, secure and caring, in a manner that lives up to the expectations
                  of patients and the wider community, based on the basics of medical care, medical science and
                  nursing, and so that we can sufficiently fulfill our responsibilities and mission as a hospital that
                  creates a better tomorrow for medical care. Thank you for your continued support and cooperation.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dr. Shailendra Kumar Sharma</p>
                    <p className="text-sm text-muted-foreground">Managing Director</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">Regards</p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ManagingDirectorMessagePage;

