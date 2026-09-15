import { Phone, MessageCircle, ShieldCheck, Clock, Stethoscope } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Gallery/2.jpg"
          alt="Jaipur Hospital Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-width text-center pt-24 pb-12 sm:pt-32 sm:pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-4 sm:mb-6 animate-fade-up max-w-[95vw] sm:max-w-none">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          <span className="text-primary-foreground text-[10px] xs:text-xs sm:text-sm font-medium whitespace-normal sm:whitespace-nowrap text-center">
            Trusted Healthcare Since 1998 · Lal Kothi, Jaipur, Rajasthan
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Best Multispeciality
          <br />
          <span className="text-yellow-300">Hospital in Jaipur</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Expert doctors. Advanced care. 24/7 emergency and critical care support. Jaipur Hospital has been Rajasthan's trusted name in healthcare for over two decades. Your health is our highest priority.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-14 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="tel:+919257029901"
            className="flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-semibold rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base hover:bg-primary-foreground/25 transition-colors w-full sm:w-auto"
          >
            <Phone size={18} />
            Call Now: +91 92570 29901
          </a>
          <a
            href="https://wa.me/919257029901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base hover:bg-green-600 transition-colors w-full sm:w-auto"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Trust Badges */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-up w-full max-w-sm sm:max-w-none mx-auto"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Clock, label: "24/7 Emergency Care", desc: "Always Available, Always Ready" },
            { icon: Stethoscope, label: "50+ Specialist Doctors", desc: "Best Doctors in Jaipur" },
            { icon: ShieldCheck, label: "Advanced ICU and NICU", desc: "Critical Care Round the Clock" },
          ].map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 sm:gap-3 bg-primary-foreground/12 backdrop-blur-sm border border-primary-foreground/20 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/80 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-primary-foreground sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <div className="text-primary-foreground font-bold text-xs sm:text-sm">{label}</div>
                <div className="text-primary-foreground/70 text-[10px] sm:text-xs hidden sm:block">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
