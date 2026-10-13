import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { User } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "DR. DEEPAK KUMAR",
    department: "Cardiac Anaesthesia",
    qualifications: "MBBS, MD (Anaesthesia)",
    image: "/OurTeam/deepak.jpg"
  },
  {
    id: 2,
    name: "DR. SHAILENDRA SHARMA",
    department: "Orthopaedic (Managing Director)",
    qualifications: "MBBS, MS (Orthopaedics)",
    image: "/OurTeam/sss-600x700.jpg"
  },
  {
    id: 3,
    name: "DR. KARAN SHARMA",
    department: "Orthopaedic",
    qualifications: "MBBS, MS, DNB, M.Ch. (Ortho)",
    image: null
  },
  {
    id: 4,
    name: "DR. RAJIV SHARMA",
    department: "Orthopaedic",
    qualifications: "MBBS, MS (Orthopaedics)",
    image: null
  },
  {
    id: 5,
    name: "DR. PRAMOD KUMAR JAIN",
    department: "Orthopaedic",
    qualifications: "MBBS, MS (Orthopaedics)",
    image: "/OurTeam/p-1-600x700.jpg"
  },
  {
    id: 6,
    name: "DR. SUHASINI SHITOOT",
    department: "Obstetrics & Gynaecology",
    qualifications: "MBBS, DGO, MD (Obs & Gynae)",
    image: "/OurTeam/s-600x700.jpg"
  },
  {
    id: 7,
    name: "DR. ANKIT JAIPAL",
    department: "Orthopaedic (Consultant Surgeon)",
    qualifications: "MBBS, MS (Orthopaedics)",
    image: "/OurTeam/dr-ankit-jaipal.png"
  }
];

const OurTeamMemberPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="pt-16 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Team Members
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Meet our expert medical professionals dedicated to providing the best healthcare.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary flex flex-col items-center text-center pb-6"
                >
                  <div className="w-full h-80 bg-gradient-surface overflow-hidden relative mb-6">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={80} strokeWidth={1} />
                      </div>
                    )}
                  </div>
                  <div className="px-6 flex flex-col flex-1 w-full relative">
                    <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-primary text-sm font-semibold mb-3">
                      {member.department}
                    </div>
                    <div className="text-muted-foreground text-sm mt-auto max-w-xs mx-auto">
                      {member.qualifications}
                    </div>
                  </div>
                </div>
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

export default OurTeamMemberPage;
