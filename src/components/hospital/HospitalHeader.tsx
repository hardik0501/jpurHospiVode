import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, Calendar, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoJH from "@/assets/logo-jh.png";
import { SchemesTicker } from "./SchemesTicker";

// Mega menu items from reference list; skip what's already in main nav (About, Services, Doctors, Facilities, Contact)
const moreMenuItems = [
  { label: "Health Packages", href: "/health-packages", badge: "Offers" },
  { label: "Home", href: "/" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Our Schemes", href: "/our-schemes" },
  { label: "Annual Report", href: "/annual-report" },
  { label: "Board of Directors", href: "/board-of-directors" },
  { label: "Company Profile", href: "/company-profile" },
  { label: "Corporate Governance", href: "/corporate-governance" },
  { label: "Education", href: "/education" },
  { label: "Gallery", href: "/gallery" },
  { label: "Financial Results", href: "/financial-results" },
  { label: "Listing Information", href: "/listing-information" },
  { label: "Managing Director's Message", href: "/managing-directors-message" },
  { label: "Our Partner", href: "/our-partner" },
  { label: "Regulation 46 & 62", href: "/regulation-46-62" },
  { label: "Notice of AGM", href: "/notice-of-agm" },
  { label: "Notice of Book Closure", href: "/notice-of-book-closure" },
  { label: "Notice of Postal Ballot", href: "/notice-of-postal-ballot" },
  { label: "Shareholder's Information", href: "/shareholders-information" },
  { label: "Vision Mission", href: "/vision-mission" },
  { label: "Our History", href: "/our-history" },
  { label: "Our Team Member", href: "/our-team-member" },
  { label: "Project Style 2", href: "/project-style-2" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

const HospitalHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Facilities", href: "/facilities" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-card shadow-md-blue border-b border-border"
          : "bg-card/95 backdrop-blur-sm"
        }`}
    >
      {/* Moving Schemes Marquee Ticker Above Header */}
      <SchemesTicker />

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1 px-4 text-xs md:text-sm hidden md:block">
        <div className="container-width flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            24/7 Emergency: <strong>0141-2741465</strong> | <strong>+91 92570 29901</strong>
          </span>
          <span>Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-width flex items-center justify-between py-2 sm:py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src={logoJH}
            alt="Jaipur Hospital - we care for life"
            className="h-10 sm:h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 pb-0.5"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 pb-0.5"
              >
                {link.label}
              </Link>
            )
          )}
          {/* More - Mega Menu */}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-0.5 pb-0.5"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <ChevronDown size={16} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                <div className="bg-card border border-border rounded-xl shadow-xl min-w-[280px] max-w-[90vw] w-max overflow-hidden">
                  <div className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-0.5 max-h-[70vh] overflow-y-auto">
                    {moreMenuItems.map((item) =>
                      item.href.startsWith("/") ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className={`px-4 py-2.5 text-sm rounded-lg text-left transition-colors flex items-center justify-between gap-2 ${
                            item.badge
                              ? "bg-primary-light/60 text-primary font-bold hover:bg-primary hover:text-white"
                              : "text-foreground hover:bg-primary-light hover:text-primary"
                          }`}
                          onClick={() => setMoreOpen(false)}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500 text-white shadow-sm">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="px-4 py-2.5 text-sm text-foreground hover:bg-primary-light hover:text-primary rounded-lg text-left transition-colors flex items-center justify-between gap-2"
                          onClick={() => setMoreOpen(false)}
                        >
                          <span>{item.label}</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919257029901"
            className="flex items-center gap-2 text-sm text-primary font-medium border border-primary/30 rounded-full px-4 py-2 hover:bg-primary-light transition-colors"
          >
            <Phone size={14} />
            Call Now
          </a>
          <Link
            to="/book-appointment"
            className="flex items-center gap-2 text-sm bg-gradient-primary text-primary-foreground font-semibold rounded-full px-5 py-2 shadow-md-blue hover:opacity-90 transition-opacity"
          >
            <Calendar size={14} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="border-b border-border/50 pb-2">
            <span className="text-sm font-semibold text-foreground py-2 block">More</span>
            <div className="grid grid-cols-1 gap-0.5 pl-2 mt-1 max-h-64 overflow-y-auto">
              {moreMenuItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm text-foreground/90 py-1.5 hover:text-primary flex items-center justify-between pr-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-foreground/90 py-1.5 hover:text-primary flex items-center justify-between pr-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                  </a>
                )
              )}
            </div>
          </div>
          <Link
            to="/book-appointment"
            className="mt-2 text-center text-sm bg-gradient-primary text-primary-foreground font-semibold rounded-full px-5 py-3"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
};

export default HospitalHeader;
