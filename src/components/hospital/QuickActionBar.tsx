import { Phone, Clock, MapPin, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: Phone,
    label: "Emergency",
    value: "0141-2741465",
    href: "tel:01412741465",
    bg: "bg-red-50",
    iconBg: "bg-red-500",
  },
  {
    icon: Clock,
    label: "OPD Timings",
    value: "10:00 AM – 5:00 PM",
    href: "#",
    bg: "bg-primary-light",
    iconBg: "bg-primary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lal Kothi, Jaipur",
    href: "https://maps.google.com?q=Jaipur+Hospital+Jaipur",
    bg: "bg-secondary-light",
    iconBg: "bg-secondary",
  },
  {
    icon: Stethoscope,
    label: "Find a Doctor",
    value: "50+ Specialists",
    href: "/doctors",
    bg: "bg-primary-light",
    iconBg: "bg-primary",
    isInternal: true,
  },
];

const QuickActionBar = () => {
  return (
    <section className="bg-card shadow-md-blue border-b border-border -mt-1 relative z-20">
      <div className="container-width">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, idx) => {
            const content = (
              <>
                <div
                  className={`w-11 h-11 rounded-xl ${action.iconBg} flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <action.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {action.label}
                  </div>
                  <div className="text-sm font-bold text-foreground mt-0.5">
                    {action.value}
                  </div>
                </div>
              </>
            );
            const className = `flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 ${action.bg} hover:brightness-95 transition-all group border-b sm:border-b-0 ${
              idx < actions.length - 1 ? "sm:border-r border-border" : "border-border"
            }`;

            return 'isInternal' in action && action.isInternal ? (
              <Link key={action.label} to={action.href} className={className}>{content}</Link>
            ) : (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={className}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActionBar;
