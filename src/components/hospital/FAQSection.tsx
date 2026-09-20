import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Jaipur Hospital a CGHS empanelled hospital?",
    a: "Yes, Jaipur Hospital is a CGHS empanelled hospital in Jaipur. Central government employees and pensioners can receive cashless treatment across most departments by presenting their CGHS card. Please contact our patient coordinator team to confirm coverage for your specific treatment.",
  },
  {
    q: "Is Jaipur Hospital empanelled under Ayushman Bharat?",
    a: "Yes, we are a registered Ayushman Bharat PM-JAY hospital in Jaipur. Beneficiaries of the scheme can avail cashless inpatient treatment for listed conditions. Our team will help you verify your eligibility and complete the necessary documentation.",
  },
  {
    q: "What are the OPD timings at Jaipur Hospital?",
    a: "Our OPD runs from 10:00 AM to 5:00 PM, Monday to Saturday. Emergency services are available 24 hours a day, 7 days a week, including all public holidays.",
  },
  {
    q: "Does Jaipur Hospital have a 24/7 ambulance service?",
    a: "Yes. Our GPS-enabled Advanced Life Support ambulances with trained paramedics are available round the clock. Call +91 92570 29901 for immediate ambulance dispatch anywhere in Jaipur.",
  },
  {
    q: "Which specialities are available at Jaipur Hospital?",
    a: "We offer 10+ specialities including Cardiology, Orthopaedics, Neurology, General Medicine, Gynaecology, Obstetrics, Paediatrics, General and Laparoscopic Surgery, Diagnostics and Imaging, and Physiotherapy. Our 50+ specialist doctors cover both routine and complex cases.",
  },
  {
    q: "Where is Jaipur Hospital located?",
    a: "Jaipur Hospital is located at Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015, Rajasthan. We are easily accessible from Malviya Nagar, Vaishali Nagar, Mansarovar, C-Scheme, and most parts of central and south Jaipur.",
  },
  {
    q: "Does Jaipur Hospital offer normal delivery?",
    a: "Yes. Our Obstetrics and Gynaecology department actively supports normal delivery and has experienced lady doctors and midwives available 24/7 in the labour and delivery unit. We also have a NICU for newborns who need additional care.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Common Questions About Jaipur Hospital
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Have a question before visiting us? Here are answers to what people ask most often.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                value={`faq-${idx}`}
                key={idx}
                className="bg-card border border-border rounded-2xl px-5 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/45 transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground text-sm md:text-base py-4 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
