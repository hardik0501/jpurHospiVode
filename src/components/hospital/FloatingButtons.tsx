import { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, Facebook, Instagram, Plus, X } from "lucide-react";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Floating Buttons (visible on tablet/desktop) */}
      <div 
        ref={containerRef}
        className="fixed bottom-6 right-4 z-50 hidden sm:flex flex-col items-end gap-3"
      >
        {/* Expanded Options */}
        <div className={`flex flex-col gap-3 transition-all duration-300 transform origin-bottom ${
          isOpen 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/jaipur_hospital_lalkothi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            aria-label="Instagram"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <Instagram size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
              Follow on Instagram
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1PtNFgMpZw/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#1877F2] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            aria-label="Facebook"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <Facebook size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
              Like on Facebook
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919257029901?text=Hello%20Jaipur%20Hospital!%20I%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            aria-label="WhatsApp"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </a>

          {/* Call */}
          <a
            href="tel:+919257029901"
            className="group flex items-center gap-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            aria-label="Call Now"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <Phone size={22} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
              Call Emergency
            </span>
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative ${
            isOpen 
              ? "bg-slate-700 hover:bg-slate-800 rotate-90" 
              : "bg-primary hover:bg-primary/90"
          }`}
          aria-label="Toggle Quick Contact Menu"
        >
          {isOpen ? (
            <X size={24} className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <>
              {/* Pulsing ring for attention when closed */}
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none animate-duration-1000" />
              <Plus size={24} className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar (visible on mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-3 flex sm:hidden items-center gap-2 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1PtNFgMpZw/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center bg-[#1877F2] text-white rounded-xl active:scale-95 transition-transform shadow-md flex-shrink-0"
          aria-label="Facebook"
        >
          <Facebook size={18} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/jaipur_hospital_lalkothi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-xl active:scale-95 transition-transform shadow-md flex-shrink-0"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>

        {/* Call CTA */}
        <a
          href="tel:+919257029901"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl py-3 text-sm active:scale-95 transition-transform shadow-md h-11"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919257029901?text=Hello%20Jaipur%20Hospital!%20I%20need%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-xl py-3 text-sm active:scale-95 transition-transform shadow-md h-11"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
