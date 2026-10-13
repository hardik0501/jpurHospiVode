import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { HOSPITAL_CONTACT } from "@/data/hospitalData";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="internal-hero-pt pb-12 sm:pb-16 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Reach out to us for appointments, enquiries, or emergencies. We're here to help 24/7.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-surface">
          <div className="container-width max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${HOSPITAL_CONTACT.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20an%20appointment`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">WhatsApp Us</h3>
                  <p className="text-muted-foreground mb-2">Chat with our support team for quick appointment booking and queries.</p>
                  <span className="text-green-600 font-semibold group-hover:underline">+{HOSPITAL_CONTACT.whatsapp.slice(0, 2)} {HOSPITAL_CONTACT.whatsapp.slice(2, 7)} {HOSPITAL_CONTACT.whatsapp.slice(7)}</span>
                </div>
              </a>

              {/* Call */}
              <a 
                href={`tel:${HOSPITAL_CONTACT.primaryPhone.replace(/[^+\d]/g, "")}`}
                className="group bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">Call our helpline for immediate assistance and emergency support.</p>
                  <span className="text-blue-600 font-semibold group-hover:underline">{HOSPITAL_CONTACT.primaryPhone}</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${HOSPITAL_CONTACT.email}`}
                className="group bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">Drop us an email for general inquiries, reports, or feedback.</p>
                  <span className="text-purple-600 font-semibold group-hover:underline break-all">{HOSPITAL_CONTACT.email}</span>
                </div>
              </a>

              {/* Location */}
              <a 
                href={`https://maps.google.com/?q=${HOSPITAL_CONTACT.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">{HOSPITAL_CONTACT.address}</p>
                  <span className="text-orange-600 font-semibold group-hover:underline">Get Directions &rarr;</span>
                </div>
              </a>
            </div>
            
            {/* Map iframe */}
            <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-card h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.347356439285!2d75.80222627502319!3d26.892469076659104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db420e65e5acb%3A0x2b5b8e5dec74b037!2sJaipur%20Hospital-%20Best%20hospital%20in%20Lal%20kothi%20Jaipur%20%7C%20Multispeciality%20hospital%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1773386283154!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Jaipur Hospital Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
