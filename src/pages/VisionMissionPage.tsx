import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Target, Eye, Heart, Shield, Users, Lightbulb, HandHeart } from "lucide-react";

const values = [
  {
    title: "Patient Centricity",
    description: "Commit to 'best outcomes and experience' for our patients. Treat patients and their caregivers with compassion, care and understanding. Our patients' needs will come first.",
    icon: HandHeart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10"
  },
  {
    title: "Integrity",
    description: "Be principled, open and honest. Model and live our 'Values'. Demonstrate moral courage to speak up and do the right things.",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Teamwork",
    description: "Proactively support each other and operate as one team. Respect and value people at all levels with different opinions, experiences and backgrounds. Put organization needs' before department / self interest.",
    icon: Users,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  },
  {
    title: "Ownership",
    description: "Be responsible and take pride in our actions. Take initiative and go beyond the call of duty. Deliver commitment and agreement made.",
    icon: Heart,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    title: "Innovation",
    description: "Continuously improve and innovate to exceed expectations. Adopt a 'can-do' attitude. Challenge ourselves to do things differently.",
    icon: Lightbulb,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  }
];

const VisionMissionPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Vision & Mission
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Our guiding principles and unwavering commitment to excellence in healthcare.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-20 bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Mission Card */}
              <div className="bg-card p-10 rounded-3xl border border-border shadow-lg relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-primary transform group-hover:scale-110 transition-transform duration-500">
                  <Target size={120} strokeWidth={1} />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                  Our mission is to improve the quality of health care and become the most revered healthcare service provider.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-primary p-10 rounded-3xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-white transform group-hover:scale-110 transition-transform duration-500">
                  <Eye size={120} strokeWidth={1} />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/90 text-lg leading-relaxed relative z-10">
                  To create a world-class integrated healthcare delivery system, entailing the finest medical skills combined with compassionate patient care. Jaipur Hospital is driven by the vision of becoming a regional leader in the integrated healthcare delivery space and the larger purpose of saving and enriching lives through clinical excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide our actions, shape our culture, and drive our commitment to exceptional patient care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-surface p-8 rounded-3xl border border-border shadow-card hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${value.bgColor} ${value.color} flex items-center justify-center mb-6`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default VisionMissionPage;
