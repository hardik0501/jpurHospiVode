import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileText, Download, ChevronRight } from "lucide-react";

const agmNotices = [
  { title: "NOTICE OF 37TH AGM", file: "/Notice_of_AGM/NOTICE OF 37TH AGM.pdf" },
  { title: "NOTICE OF 36TH AGM", file: "/Notice_of_AGM/Notice-of-36th-AGM.pdf" },
  { title: "NOTICE OF 35TH AGM", file: "/Notice_of_AGM/Notice-of-35th-AGM.pdf" },
  { title: "NOTICE OF 34TH AGM", file: "/Notice_of_AGM/Notice-2023.pdf" },
  { title: "NOTICE OF 33TH AGM", file: "/Notice_of_AGM/Notice-of-33rd-AGM.pdf" },
  { title: "NOTICE OF 32TH AGM", file: "/Notice_of_AGM/Notice-of-32nd-AGM.pdf" },
  { title: "NOTICE OF 31TH AGM", file: "/Notice_of_AGM/Notice-of-31st-AGM-1.pdf" },
  { title: "NOTICE OF 30TH AGM", file: "/Notice_of_AGM/NOTICE-OF-30TH-AGM.pdf" },
  { title: "NOTICE OF 29TH AGM", file: "/Notice_of_AGM/NOTICE_OF_29TH_AGM.pdf" },
  { title: "NOTICE OF 28TH AGM", file: "/Notice_of_AGM/Notice_of_28th_AGM.pdf" },
  { title: "NOTICE OF 27TH AGM", file: "/Notice_of_AGM/Notice_of_27th_AGM.pdf" },
];

const NoticeOfAGMPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="pt-16 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Notice of AGM
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Notice of AGM</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Notice of Annual General Meetings (AGM)
            </p>
          </div>
        </section>

        {/* Action List Section */}
        <section className="py-20 bg-surface">
          <div className="container-width max-w-4xl mx-auto">
            <div className="bg-card border border-border shadow-md rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-border">
                {agmNotices.map((notice, index) => (
                  <a
                    key={index}
                    href={notice.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-slate-50 transition-colors group gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <FileText size={24} />
                      </div>
                      <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/5 px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 self-start sm:self-auto">
                      <span>Download PDF</span>
                      <Download size={16} />
                    </div>
                  </a>
                ))}
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

export default NoticeOfAGMPage;
