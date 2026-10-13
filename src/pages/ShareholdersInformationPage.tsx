import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileText, Download, ChevronRight } from "lucide-react";

const shareholdingReports = [
  { title: "Shareholding Information 31.03.2026", file: "/ShareHolders/0327_CL31_310326.XLSX" },
  { title: "Shareholding Information 31.12.2025", file: "/ShareHolders/0327_CL31_311225 (1).XLS" },
  { title: "Shareholding Information 30.09.2025", file: "/ShareHolders/0327_CL31_300925.pdf" },
  { title: "Shareholding Information 30.06.2025", file: "/ShareHolders/Shareholding-Information-30.06.2025.pdf" },
  { title: "Shareholding Information 31.03.2025", file: "/ShareHolders/Shareholding-Information-31.03.2025.pdf" },
  { title: "Shareholding Information 31.12.2024", file: "/ShareHolders/Shareholding-Information-31.12.2024.pdf" },
  { title: "Shareholding Information 30.09.2024", file: "/ShareHolders/Shareholding-Information-30.09.2024.pdf" },
  { title: "Shareholding Information 30.06.2024", file: "/ShareHolders/Shareholding-Information-30.06.2024.pdf" },
  { title: "Shareholding Information 31.03.2024", file: "/ShareHolders/Shareholding-Information-31.03.2024.pdf" },
  { title: "Shareholding Information 31.12.2023", file: "/ShareHolders/Shareholding-Information-31.12.2023.pdf" },
  { title: "Shareholding Information 30.09.2023", file: "/ShareHolders/Shareholding-Information-30.09.2023.pdf" },
  { title: "Shareholding Information 30.06.2023", file: "/ShareHolders/Shareholding-Information-30.06.2023.pdf" },
];

const investorCompliance = [
  { title: "Message to Shareholders", file: "/ShareHolders/Message-to-Shareholders.pdf" },
  { title: "Circular dated 03.11.2021", file: "#" }, // Not found in public folder
  { title: "Circular dated 14.12.2021", file: "#" }, // Not found in public folder
  { title: "Circular dated 16.03.2023", file: "/ShareHolders/Circular-dated-16.03.2023.pdf" },
  { title: "FORM_ISR-1", file: "/ShareHolders/FORM_ISR-1.pdf" },
  { title: "FORM-ISR-2", file: "/ShareHolders/FORM-ISR-2.pdf" },
  { title: "FORM-ISR-3", file: "/ShareHolders/FORM-ISR-3.pdf" },
  { title: "FORM-SH-13", file: "/ShareHolders/FORM-SH-13.pdf" },
];

const historicalArchives = [
  { title: "Shareholding Information 31.12.2015", file: "/ShareHolders/Shareholders_Pattern_31.12.2015.pdf" },
  { title: "Shareholding Information 31.03.2016", file: "/ShareHolders/Shareholders_Pattern_31.03.2016.pdf" },
];

const DocumentList = ({ title, documents }: { title: string; documents: { title: string; file: string }[] }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <FileText size={16} />
      </div>
      {title}
    </h2>
    <div className="bg-card border border-border shadow-sm rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 divide-y divide-border">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 hover:bg-surface transition-colors group"
          >
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {doc.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <span>View Document</span>
              <Download size={16} />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ShareholdersInformationPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
                Shareholder's Information
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-medium">
                <span>Jaipur Hospital</span>
                <ChevronRight size={14} />
                <span className="text-primary-foreground">Shareholder's Information</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-surface">
          <div className="container-width max-w-4xl mx-auto">
            <DocumentList title="Shareholding Pattern Reports" documents={shareholdingReports} />
            <DocumentList title="Investor Compliance & KYC Forms" documents={investorCompliance} />
            <DocumentList title="Historical Archives (Sample)" documents={historicalArchives} />
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ShareholdersInformationPage;
