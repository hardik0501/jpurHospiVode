import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 35, suffix: "+", label: "Years of Excellence", desc: "Serving Jaipur Since 1998" },
  { value: 150, suffix: "", label: "Hospital Beds", desc: "General, ICU, CCU and NICU" },
  { value: 50, suffix: "+", label: "Specialist Doctors", desc: "Across 10+ Departments" },
  { value: 10000, suffix: "+", label: "Patients Treated", desc: "Happy and Recovered" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-primary-foreground font-semibold text-base mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
