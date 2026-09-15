import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { HOSPITAL_CONTACT } from "@/data/hospitalData";
import logoJH from "@/assets/logo-jh.png";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
  ],
  "Patient Care": [
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "Our Schemes", href: "/our-schemes" },
    { label: "Health Packages", href: "/health-packages" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  "Hospital": [
    { label: "Career", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      {/* Map + Contact Info */}
      <div className="container-width py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img
                src={logoJH}
                alt="Jaipur Hospital - we care for life"
                className="h-28 md:h-32 w-auto"
              />
            </div>

            <h3 className="font-display font-bold text-white text-base md:text-lg mb-3">
              Jaipur Hospital — Trusted Multispeciality Care in Jaipur Since 1998
            </h3>
            <p className="text-navy-foreground/60 text-sm mb-8 leading-relaxed">
              Jaipur Hospital is one of the best multispeciality hospitals in Jaipur, providing advanced healthcare with compassion, expertise, and cutting-edge technology to the people of Rajasthan. We are committed to making quality care accessible, affordable, and available to everyone who walks through our doors.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-glow flex-shrink-0 mt-0.5" />
                <span className="text-navy-foreground/80 text-sm">
                  Address: Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015, Rajasthan
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary-glow flex-shrink-0 mt-0.5" />
                <div className="text-navy-foreground/80 text-sm space-y-0.5">
                  <a href="tel:01412741465" className="hover:text-primary-glow transition-colors block">
                    Phone: 0141-2741465
                  </a>
                  <a href="tel:+919257029901" className="hover:text-primary-glow transition-colors block">
                    Mobile: +91 92570 29901
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-glow flex-shrink-0" />
                <a href={`mailto:Jaipurhospitallalkothi@gmail.com`} className="text-navy-foreground/80 text-sm hover:text-primary-glow transition-colors">
                  Email: Jaipurhospitallalkothi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-primary-glow flex-shrink-0" />
                <span className="text-navy-foreground/80 text-sm">OPD: 9:00 AM to 8:00 PM | Emergency: 24/7</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1PtNFgMpZw/", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/jaipur_hospital_lalkothi", label: "Instagram" },
                { Icon: Youtube, href: "https://youtube.com/@jaipurhospitallalkothi1992?si=vA1EbYOY7jrGt835", label: "YouTube" },
              ].map(({ Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors text-navy-foreground/70 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Emergency & Operations Card */}
          <div className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-inner">
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-white text-base mb-2">24/7 Critical & Emergency Care</h4>
                <p className="text-navy-foreground/60 text-sm leading-relaxed">
                  Our emergency room, ICU, NICU, and ambulance services remain fully operational 24 hours a day, 365 days a year, with on-duty specialists ready to deliver emergency care.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-navy-foreground/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-navy-foreground/50">Emergency Helpline:</span>
                  <a href="tel:+919257029901" className="text-primary-glow font-bold hover:underline">+91 92570 29901</a>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-navy-foreground/50">Landline:</span>
                  <a href="tel:01412741465" className="text-navy-foreground/80 font-medium hover:text-primary-glow">0141-2741465</a>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-navy-foreground/50">OPD Timings:</span>
                  <span className="text-navy-foreground/80 font-medium">9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-14 pt-10 border-t border-navy-foreground/10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-navy-foreground mb-4 text-sm uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-navy-foreground/60 text-sm hover:text-primary-glow transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-navy-foreground/60 text-sm hover:text-primary-glow transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-foreground/10 py-5">
        <div className="container-width flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-navy-foreground/50">
          <span>© 2026 Jaipur Hospital, Jaipur. All rights reserved.</span>
          <span>Designed for excellence in healthcare</span>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
