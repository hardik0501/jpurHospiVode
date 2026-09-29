import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 28, suffix: "+", label: "Years of Experience", desc: "Serving Jaipur Since 1998" },
  { value: 100, suffix: "+", label: "Hospital Beds", desc: "General, ICU, CCU and NICU" },
  { value: 50, suffix: "+", label: "Specialist Doctors", desc: "Across 10+ Departments" },
  { value: 10, suffix: " Lakh+", label: "Happy Patients", desc: "Treated with Compassion" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let current = 0;
    setCount(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1800;
          const steps = 40;
          const increment = target / steps;
          current = 0;
          
          if (timer) clearInterval(timer);
          timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              if (timer) clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const TrustStats = () => {
  return (
    <section className="section-padding bg-gradient-primary">
      <div className="container-width">
        <div className="text-center mb-10">
          <span className="inline-block text-primary-foreground/90 font-semibold text-sm uppercase tracking-widest bg-primary-foreground/15 px-4 py-1.5 rounded-full">
            Trusted by Families Across Rajasthan
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={`${stat.label}-${stat.value}-${stat.suffix}`}
              className="text-center p-4 sm:p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors flex flex-col justify-center items-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-display font-bold text-primary-foreground mb-2 whitespace-nowrap tracking-tight">
                <CountUp key={`${stat.value}-${stat.suffix}`} target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-primary-foreground font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70 text-xs sm:text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
