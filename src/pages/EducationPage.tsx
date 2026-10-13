import { BookOpen, Stethoscope, Briefcase, Mail } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Education & Careers
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Learn, train and grow with Jaipur Hospital through structured education and meaningful career opportunities.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-surface">
          <div className="container-width max-w-4xl space-y-10">
            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Education</h2>
                  <p className="text-sm text-muted-foreground">
                    Clinical learning with experienced consultants and multidisciplinary hospital exposure.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jaipur Hospital offers educational opportunities for doctors, nurses, technicians and administrative
                  professionals who wish to learn in a real hospital environment. Trainees get exposure to OPD,
                  emergency, wards, ICU, operation theatres and support services under the guidance of senior
                  consultants and nursing leaders.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Observerships, short-term postings and longer training attachments can be planned based on
                  department requirements and candidate qualification. Preference is given to candidates who are
                  motivated to build a long-term career in healthcare and patient care.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you are interested in educational opportunities at Jaipur Hospital, please email your updated
                  resume mentioning your qualification, area of interest and preferred duration of training.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
                  <span className="inline-flex items-center gap-2 bg-primary-light text-primary font-semibold px-4 py-2 rounded-full">
                    <Mail className="w-4 h-4" />
                    jaipurhospital1992@gmail.com
                  </span>
                </div>
              </div>
            </section>

            {/* Career */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Career at Jaipur Hospital</h2>
                  <p className="text-sm text-muted-foreground">
                    Meaningful roles across patient care, hospital administration and operations.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jaipur Hospital provides meaningful career opportunities in all areas of patient care, hospital
                  administration and operations. Our team includes doctors, nurses, paramedical staff, technicians,
                  pharmacists, front office executives, billing and insurance coordinators, HR and finance
                  professionals and many other support functions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We look for people who are committed to patient safety, ethical medical practice and compassionate
                  service. In return, we offer a professional work environment, exposure to advanced medical
                  technologies and the opportunity to grow with a respected healthcare institution in Rajasthan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you would like to explore current openings or wish to be considered for future roles, please send
                  your resume with a brief cover note about the role you are interested in.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
                  <span className="inline-flex items-center gap-2 bg-primary-light text-primary font-semibold px-4 py-2 rounded-full">
                    <Mail className="w-4 h-4" />
                    jaipurhospital1992@gmail.com
                  </span>
                </div>
              </div>
            </section>

            {/* Simple note */}
            <section>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6 flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Note: Shortlisted candidates will be contacted by the hospital HR / academic team by email or phone.
                  Please do not share sensitive personal information beyond what is required for your resume and
                  professional profile.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default EducationPage;

