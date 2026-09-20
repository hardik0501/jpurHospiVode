import { MapPin, Navigation, Clock, Phone, Compass } from "lucide-react";

const landmarks = [
  "Near Sawai Man Singh Stadium (SMS Stadium), Jaipur",
  "On Tonk Road, Lal Kothi area",
  "5 minutes from Statue Circle",
  "Easily accessible from Jaipur Railway Station and Sindhi Camp Bus Stand",
];

const LocationSection = () => {
  const directionsUrl = "https://maps.google.com/?q=Jaipur+Hospital+Lal+Kothi+Jaipur";

  return (
    <section id="location" className="section-padding bg-surface">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How to Reach Jaipur Hospital
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Jaipur Hospital is located at Lal Kothi, Near S.M.S. Stadium, Tonk Road — one of the most centrally accessible locations in Jaipur.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Info Card */}
          <div className="lg:col-span-5 bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                  <MapPin size={22} className="text-primary" /> Location details
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Whether you are coming from Malviya Nagar, Vaishali Nagar, Mansarovar, Civil Lines, or travelling in from Tonk Road, our hospital near SMS Stadium, Jaipur is straightforward to reach by car, auto, or public transport.
                </p>
              </div>

              {/* Landmarks */}
              <div>
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Compass size={16} className="text-primary" /> Nearby Landmarks
                </h4>
                <ul className="space-y-2">
                  {landmarks.map((l, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours and Phones */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary flex-shrink-0" />
                  <span>
                    <strong>OPD Hours:</strong> 10:00 AM to 5:00 PM | <strong>Emergency:</strong> 24/7
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span>
                    <strong>Call:</strong> <a href="tel:01412741465" className="hover:text-primary">0141-2741465</a> | <a href="tel:+919257029901" className="hover:text-primary">+91 92570 29901</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Deep link button */}
            <div className="pt-6">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold rounded-xl py-4 hover:opacity-95 transition-opacity shadow-md-blue"
              >
                <Navigation size={18} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-border min-h-[300px] shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.347356439285!2d75.80222627502319!3d26.892469076659104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db420e65e5acb%3A0x2b5b8e5dec74b037!2sJaipur%20Hospital-%20Best%20hospital%20in%20Lal%20kothi%20Jaipur%20%7C%20Multispeciality%20hospital%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1773386283154!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaipur Hospital Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
