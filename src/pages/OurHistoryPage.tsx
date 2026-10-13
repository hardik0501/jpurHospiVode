import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { CheckCircle2, ChevronRight, Stethoscope, Building2, HeartPulse } from "lucide-react";

const historyTimeline = [
  {
    year: "2010",
    title: "We start cardioly Hospital",
    description: "There are many variation of passages of medical technologies available. The majority have suffered alteration in some form by injected a heath care hospital. This health care hospital is away some which don't look even slightly believable."
  },
  {
    year: "2012",
    title: "We have experienced doctors",
    description: "There are many variation of passages of medical technologies available. The majority have suffered alteration in some form by injected a heath care hospital. This health care hospital is away some which don't look even slightly believable."
  },
  {
    year: "2014",
    title: "We win the national awards",
    description: "There are many variation of passages of medical technologies available. The majority have suffered alteration in some form by injected a heath care hospital. This health care hospital is away some which don't look even slightly believable."
  },
  {
    year: "2015",
    title: "We get high level success",
    description: "There are many variation of passages of medical technologies available. The majority have suffered alteration in some form by injected a heath care hospital. This health care hospital is away some which don't look even slightly believable."
  }
];

const features = [
  {
    title: "Latest Technology",
    description: "Top level of services provide in our health care hospital",
    icon: Building2
  },
  {
    title: "Specialist Doctor",
    description: "Provide heart treatment Specialist doctors to the patients",
    icon: Stethoscope
  },
  {
    title: "Health Care Hospital",
    description: "Top level of services provide in our health care hospital",
    icon: Building2
  },
  {
    title: "Valve prolapse",
    description: "Provide heart treatment Specialist doctors to the patients",
    icon: HeartPulse
  }
];

const OurHistoryPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
                Our History
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-medium">
                <span>Jaipur Hospital</span>
                <ChevronRight size={14} />
                <span className="text-primary-foreground">Our History</span>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are & Features Section */}
        <section className="py-16 bg-surface">
          <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-12 h-0.5 bg-primary"></span>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                The Cardioly excellent in Health Care
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore t dolore magna aliqua. Ut enim ad minim veniam quis. Healthy environment in building that supports for the community. Trusted advice at the doctors at medical care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground text-lg mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Jaipur Hospital Building" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+ Years</div>
                    <div className="text-muted-foreground font-medium">Of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container-width">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="w-12 h-0.5 bg-primary"></span>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our History</span>
                <span className="w-12 h-0.5 bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                How we started our cardioly
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative px-4">
              {/* Vertical line through the middle */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              <div className="space-y-12">
                {historyTimeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={item.year} className="relative flex flex-col md:flex-row items-center">
                      {/* Mobile year badge */}
                      <div className="sm:hidden w-full flex justify-start mb-4">
                        <span className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full shadow-md text-lg">
                          {item.year}
                        </span>
                      </div>

                      {/* Left content (blank for odd items on desktop) */}
                      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right text-left' : 'md:pl-12 order-last md:order-first'}`}>
                        {isEven && (
                          <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative group">
                            <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                          </div>
                        )}
                        {!isEven && <div className="hidden md:block"></div>}
                      </div>

                      {/* Center dot/year (desktop/tablet) */}
                      <div className="hidden sm:flex absolute left-4 md:left-1/2 transform -translate-x-1/2 items-center justify-center z-10 w-24 h-24">
                        <div className="bg-card w-full h-full rounded-full flex items-center justify-center shadow-lg border-4 border-primary/20 text-primary font-bold text-xl relative group overflow-hidden">
                          <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                          <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">{item.year}</span>
                        </div>
                      </div>

                      {/* Right content (blank for even items on desktop) */}
                      <div className={`w-full md:w-1/2 mt-4 md:mt-0 ${!isEven ? 'md:pl-12 text-left' : 'md:pr-12 order-last md:order-last'}`}>
                        {!isEven && (
                          <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative group">
                            <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                          </div>
                        )}
                        {isEven && <div className="hidden md:block"></div>}
                      </div>
                    </div>
                  );
                })}
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

export default OurHistoryPage;
