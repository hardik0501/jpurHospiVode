import { FileText } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
// PDFs served from public/AnualReport/ – ensure these filenames exist in that folder
const ANNUAL_REPORTS = [
  { year: "2015–2016", pdf: "/AnualReport/27th_ANNUAL_REPORT-2015-16.pdf" },
  { year: "2016–2017", pdf: "/AnualReport/Annual_Report_for_the_Financial_Year_2016-17.pdf" },
  { year: "2017–2018", pdf: "/AnualReport/Annual_Report_for_the_financial_year_2017-18.pdf" },
  { year: "2018–2019", pdf: "/AnualReport/Annual_Report_for_the_financial_year_2018-19.pdf" },
  { year: "2019–2020", pdf: "/AnualReport/Annual-Report-2019-20_compressed_compressed.pdf" },
  { year: "2020–2021", pdf: "/AnualReport/Annual-Report-2020-21.pdf" },
  { year: "2021–2022", pdf: "/AnualReport/Annual-Report-2022-in-Lakhs_compressed-1.pdf" },
  { year: "2022–2023", pdf: "/AnualReport/AR-2023-IN-LAKHS_compressed.pdf" },
  { year: "2023–2024", pdf: "/AnualReport/Annual-Report-2023-2024.pdf" },
  { year: "2024–2025", pdf: "/AnualReport/Annual-Report-2024-2025.pdf" },
  { year: "2025–2026", pdf: "/AnualReport/Financial Year 2025–2026.pdf" },
];

const AnnualReportPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Annual Report – Jaipur Hospital
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Below are the Annual Reports of Jaipur Hospital for different financial years.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Annual Report List</h2>
            <ul className="space-y-4">
              {ANNUAL_REPORTS.map((report, index) => (
                <li
                  key={report.year}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 md:p-5 bg-card border border-border rounded-xl shadow-card hover:border-primary/40 transition-colors"
                >
                  <span className="font-display font-semibold text-foreground">
                    {index + 1}. Financial Year {report.year}
                  </span>
                  <a
                    href={report.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <FileText size={18} />
                    PDF Link
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 bg-primary-light text-primary font-medium px-4 py-2 rounded-full">
                Total Reports: {ANNUAL_REPORTS.length}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary-light text-primary font-medium px-4 py-2 rounded-full">
                Years Covered: 2015 – 2026
              </span>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default AnnualReportPage;
