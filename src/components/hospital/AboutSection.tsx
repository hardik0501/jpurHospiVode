import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Heart, UserCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
                About Jaipur Hospital
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                Jaipur's Trusted Multispeciality <br />
                <span className="text-primary">Hospital Since 1998</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Jaipur Hospital is one of the most trusted multispeciality hospitals in Jaipur, founded in 1998 with a single goal: to make world-class healthcare available to every family in Rajasthan.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Over two decades, we have grown from a 50-bed facility into a 150-bed affordable hospital in Jaipur with 50+ specialist doctors across Cardiology, Orthopaedics, Neurology, Gynaecology, Paediatrics, General Medicine, General Surgery, and more. We have treated over 10,000 patients, and every one of them has experienced the same commitment to quality, honesty, and compassionate care.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Conveniently located at Lal Kothi, near SMS Stadium on Tonk Road, our hospital near SMS Stadium, Jaipur, is easily reachable from all parts of the city and from districts including Tonk, Dausa, Sawai Madhopur, Sikar, and Ajmer.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              We are empanelled under Ayushman Bharat PM-JAY, CGHS, and ECHS, and have tie-ups with 20+ insurance TPA networks — making cashless treatment a reality for thousands of patients every year.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold rounded-full px-7 py-3.5 hover:opacity-95 transition-opacity shadow-md-blue"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Modern Visual Card Collage & Quick Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/Gallery/4.jpg"
                alt="Jaipur Hospital Building and Care Center"
                className="w-full h-80 lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-base">Patient First Philosophy</div>
                  <div className="text-muted-foreground text-xs">Providing honest, compassionate care daily.</div>
                </div>
              </div>
            </div>

            {/* Micro Highlights Pill */}
            <div className="absolute -top-4 -right-4 bg-yellow-300 text-yellow-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg border border-yellow-400 hidden sm:block animate-pulse">
              20+ Years Legacy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
