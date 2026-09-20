import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Agarwal",
    rating: 5,
    text: "Dr. Sharma performed my angioplasty with exceptional skill. The ICU team was professional and caring throughout my stay. Best cardiac care in Jaipur!",
    label: "Cardiology Patient, Jaipur",
  },
  {
    name: "Sunita Devi",
    rating: 5,
    text: "I had my knee replacement done here. The surgery was smooth and the physiotherapy team helped me walk within 3 days. Amazing results, I'm truly grateful.",
    label: "Knee Replacement Patient, Dausa",
  },
  {
    name: "Manoj Sharma",
    rating: 5,
    text: "My son was treated in the NICU for 2 weeks. The pediatric team worked tirelessly and our baby recovered fully. Forever thankful to Jaipur Hospital.",
    label: "Pediatrics Patient, Jaipur",
  },
  {
    name: "Kavya Gupta",
    rating: 5,
    text: "Excellent maternity care! Dr. Priya Meena is a wonderful doctor. The delivery suite was clean and comfortable. Highly recommended for expectant mothers.",
    label: "Gynaecology Patient, Ajmer",
  },
  {
    name: "Pradeep Singhania",
    rating: 5,
    text: "Emergency care was outstanding. The team stabilized my father within minutes of arrival. The doctors are highly skilled and very compassionate.",
    label: "Emergency Care Patient, Jaipur",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-6">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
            What Patients Say About the Best Hospital in Jaipur
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
            Over 1,000,000+ happy patients have trusted us with their health and their families' well-being. Their recoveries are our greatest achievement.
          </p>
        </div>

        {/* Google Reviews Trust Widget */}
        <div className="flex items-center justify-center gap-3 mb-12 bg-card border border-border rounded-2xl px-5 py-3 max-w-sm mx-auto shadow-sm">
          <div className="flex items-center gap-1">
            <span className="font-bold text-foreground text-sm">4.8</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <span className="text-muted-foreground text-xs">|</span>
          <span className="text-xs font-semibold text-foreground tracking-wide uppercase">
            2,500+ Google Reviews
          </span>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card">
            <Quote size={48} className="text-primary/10 absolute top-6 left-6" />
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/85 text-base md:text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonials[current].name}</div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {testimonials[current].label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all ${
                  idx === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-border hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
