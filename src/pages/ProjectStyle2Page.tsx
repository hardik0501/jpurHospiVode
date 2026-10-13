import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Heart Failure Management", category: "Doctors" },
  { id: 2, title: "Blood Pressure Monitoring", category: "Healthcare" },
  { id: 3, title: "24/7 Monitoring and Care", category: "Monitor" },
  { id: 4, title: "Optimization of Therapy", category: "Assistance" },
  { id: 5, title: "Valve Implantation", category: "Treatment" },
  { id: 6, title: "Children’s Heart Surgery", category: "Saving Lives" },
  { id: 7, title: "Latest Equipment Surgery", category: "Healthcare" },
  { id: 8, title: "Heart Transplant Carefully", category: "Treatment" },
  { id: 9, title: "Recognized Cardiologists", category: "Doctors" },
];

const ProjectStyle2Page = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Project Style 2
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Healthcare Services / Projects at Jaipur Hospital
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  to={`/project-style-2/${project.id}`}
                  key={project.id}
                  className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary p-8 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.id < 10 ? `0${project.id}` : project.id}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-primary-light text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                    Category: {project.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ProjectStyle2Page;
