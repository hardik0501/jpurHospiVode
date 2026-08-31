import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const insurers = [
  "Ayushman Bharat PM-JAY", "MAA Yojana", "RGHS", "CGHS", "ESIC", "ECHS", "New India Assurance", "United India Insurance",
  "Bajaj Allianz Health", "Niva Bupa", "SBI Health Insurance", "Star Health", "HDFC ERGO",
  "ICICI Lombard", "Aditya Birla Health", "Care Health", "TATA AIG", "Reliance General",
  "Ayushman Bharat PM-JAY", "MAA Yojana", "RGHS", "CGHS", "ESIC", "ECHS", "New India Assurance", "United India Insurance",
];

const EmpanelmentSection = () => {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-width">
        <div className="bg-gradient-primary rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest mb-4 bg-primary-foreground/15 px-4 py-1.5 rounded-full">
                  Accreditations and Empanelment
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6 leading-snug">
                  Cashless Treatment and Trusted Empanelments
                </h2>
                <div className="space-y-4 mb-8 text-primary-foreground/90 text-sm md:text-base leading-relaxed">
                  <p>
                    At Jaipur Hospital, we have worked to make quality healthcare financially accessible to everyone. We are empanelled with major government health schemes including Ayushman Bharat (PM-JAY), MAA Yojana, RGHS, CGHS, ESIC, and ECHS for complete cashless treatment.
                  </p>
                  <p>
                    Additionally, our 25+ corporate TPA and private health insurance partnerships cover all major policies with on-the-spot pre-authorization and hassle-free discharge.
                  </p>
                </div>
                <Link
                  to="/our-schemes"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold rounded-full px-7 py-3.5 hover:scale-105 transition-transform shadow-lg"
                >
                  Explore All Schemes & Eligibility <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right - Scrolling logos */}
              <div>
                <div className="text-primary-foreground font-semibold text-sm mb-4 uppercase tracking-wide">
                  Our Insurance & TPA Partners
                </div>
                <div className="overflow-hidden relative">
                  <div className="flex gap-3 animate-marquee w-max">
                    {insurers.map((name, idx) => (
                      <div
                        key={`${name}-${idx}`}
                        className="flex-shrink-0 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-xl whitespace-nowrap"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden relative mt-3">
                  <div className="flex gap-3 animate-marquee w-max" style={{ animationDirection: "reverse", animationDuration: "25s" }}>
                    {[...insurers].reverse().map((name, idx) => (
                      <div
                        key={`${name}-r-${idx}`}
                        className="flex-shrink-0 bg-primary-foreground/15 border border-primary-foreground/15 text-primary-foreground/80 font-medium text-sm px-5 py-2.5 rounded-xl whitespace-nowrap"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-primary-foreground/60 text-xs mt-4 text-center lg:text-left italic">
                  +15 additional TPA partners empanelled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpanelmentSection;
