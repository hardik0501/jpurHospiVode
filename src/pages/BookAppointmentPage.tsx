import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import AppointmentForm from "@/components/hospital/AppointmentForm";
import { ChevronRight, CalendarCheck, Clock, MapPin, Phone } from "lucide-react";

const BookAppointmentPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="pt-16 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Book Appointment
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Book Appointment</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Schedule your consultation with the best doctors in Jaipur
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-surface">
          <div className="container-width">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form (8 cols) */}
              <div className="lg:col-span-8 bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                <AppointmentForm />
              </div>

              {/* Right Column: Key Details & Helpline (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Immediate Helpline Card */}
                <div className="bg-gradient-primary rounded-3xl p-6 text-primary-foreground shadow-md">
                  <CalendarCheck size={36} className="mb-4 text-yellow-300" />
                  <h3 className="font-display font-bold text-xl mb-3">Quick Appointment Booking</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                    Rather book directly over the phone or WhatsApp? Tap below to reach our scheduling desk immediately.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+919257029901"
                      className="flex items-center justify-center gap-2 w-full bg-primary-foreground text-primary font-bold rounded-xl py-3.5 text-sm hover:scale-[1.02] transition-transform"
                    >
                      <Phone size={16} /> Call: +91 92570 29901
                    </a>
                    <a
                      href="https://wa.me/919257029901?text=Hello%20Jaipur%20Hospital!%20I'd%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold rounded-xl py-3.5 text-sm hover:bg-green-600 hover:scale-[1.02] transition-all"
                    >
                      WhatsApp Us Now
                    </a>
                  </div>
                </div>

                {/* Important Notes Card */}
                <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
                  <h4 className="font-display font-bold text-foreground text-base">Important Booking Notes</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2.5">
                      <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Appointments are confirmed within 30 minutes during OPD hours (10 AM - 5 PM).</span>
                    </li>
                    <li className="flex gap-2.5">
                      <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Please arrive 15 minutes before your confirmed slot for registration.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <CalendarCheck size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>If you are empanelled under CGHS, ECHS, or Ayushman Bharat, please bring your scheme card.</span>
                    </li>
                  </ul>
                </div>
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

export default BookAppointmentPage;
