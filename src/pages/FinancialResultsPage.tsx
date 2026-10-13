import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { FileText, Download } from "lucide-react";

interface FinancialResult {
  id: number;
  title: string;
  type: string;
  fileUrl: string;
}

const financialResults: FinancialResult[] = [
  { id: 1, title: "Quarter Ended 31.12.2015", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial_results_31.12.2015.pdf" },
  { id: 2, title: "Quarter Ended 31.03.2016", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial_Results_31.03.2016.pdf" },
  { id: 3, title: "Quarter Ended 30.06.2016", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial_Results_30.06.2016.pdf" },
  { id: 4, title: "Quarter & Half Year Ended 30.09.2016", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial_Results_30.09.2016.pdf" },
  { id: 5, title: "Quarter Ended 31.12.2016", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Un-Audited_Financial_Result_for_the_Quarter_Ended_on_31.12.2016.pdf" },
  { id: 6, title: "Quarter & Year Ended 31.03.2017", type: "Audited Financial Result", fileUrl: "/FinancialResults/Audited_Financial_Result_for_the_Quarter_and_year_ended_on_3.pdf" },
  { id: 7, title: "Quarter Ended 30.06.2017", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Un-Audited_Financial_Result_for_the_Quarter_Ended_on_30.06.pdf" },
  { id: 8, title: "Quarter Ended 30.09.2017", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/UN-Audited_Financial_Result_for_the_Quarter_ended_on_30.09.2017.pdf" },
  { id: 9, title: "Quarter Ended 31.12.2017", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/UN-Audited-Financial-Result-for-the-Quarter-ended-on-31.12.2017.pdf" },
  { id: 10, title: "Quarter & Year Ended 31.03.2018", type: "Audited Financial Result", fileUrl: "/FinancialResults/Financial-Result-for-the-Quarter-and-year-ended-on-31.03.2018.pdf" },
  { id: 11, title: "Quarter Ended 30.06.2018", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited_Financial_Result_for_the_Quarter_ended_on_30.06.20.pdf" },
  { id: 12, title: "Quarter & Half Year Ended 30.09.2018", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/UN-Audited_Financial_Result_for_the_Quarter_and_Half_Year_En.pdf" },
  { id: 13, title: "Quarter & Nine Months Ended 31.12.2018", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/UN-Audited_Financial_Result_for_the_Quarter_and_Nine_Months_.pdf" },
  { id: 14, title: "Quarter & Year Ended 31.03.2019", type: "Audited Financial Result", fileUrl: "/FinancialResults/Audited_Financial_Result_for_the_Quarter_and_Year_Ended_on_3 (1).pdf" },
  { id: 15, title: "Quarter Ended 30.06.2019", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Un-Audited_Financial_Results_for_the_Quarter_Ended_on_30.06.pdf" },
  { id: 16, title: "Quarter & Half Year Ended 30.09.2019", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/UN-Audited_Financial_Result_for_the_Quarter_and_Half_Year_En (1).pdf" },
  { id: 17, title: "Quarter & Nine Months Ended 31.12.2019", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/UN-Audited_Financial_Result_for_the_Quarter_and_Nine_Months_ (1).pdf" },
  { id: 18, title: "Quarter & Year Ended 31.03.2020", type: "Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-31.03.2020_compressed.pdf" },
  { id: 19, title: "Quarter Ended 30.06.2020", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Standalone-Unaudited-Financial-Results-For-The-Quarter-Ended-30.06.2020_compressed.pdf" },
  { id: 20, title: "Quarter & Half Year Ended 30.09.2020", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Standalone-Unaudited-Financial-Results-For-The-Quarter-And-Half-Year-Ended-On-30.09.2020_compressed.pdf" },
  { id: 21, title: "Quarter & Nine Months Ended 31.12.2020", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Standalone-Unaudited-Financial-Results-For-The-Quarter-And-Nine-Months-Ended-31.12.2020.pdf" },
  { id: 22, title: "Quarter & Year Ended 31.03.2021", type: "Audited Financial Result", fileUrl: "/FinancialResults/Audited-Financial-Results-For-The-Quarter-And-Year-Ended-On-31St-March-2021_compressed.pdf" },
  { id: 23, title: "Quarter Ended 30.06.2021", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-30.06.2021.pdf" },
  { id: 24, title: "Quarter & Half Year Ended 30.09.2021", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-As-On-30.09.2021.pdf" },
  { id: 25, title: "Quarter & Nine Months Ended 31.12.2021", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-Of-The-Company-For-The-Quarter-And-Nine-Months-Ended-On-31St-December-2021.pdf" },
  { id: 26, title: "Quarter & Year Ended 31.03.2022", type: "Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-For-31.03.2022_compressed.pdf" },
  { id: 27, title: "Quarter Ended 30.06.2022", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-For-Quarter-Ended-30.06.2022_compressed.pdf" },
  { id: 28, title: "Quarter & Half Year Ended 30.09.2022", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-For-Year-Ended-30.09.2022_compressed.pdf" },
  { id: 29, title: "Quarter & Nine Months Ended 31.12.2022", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-For-The-Quarter-And-Nine-Months-Ended-On-31.12.2022.pdf" },
  { id: 30, title: "Quarter & Year Ended 31.03.2023", type: "Audited Financial Result", fileUrl: "/FinancialResults/Financial-Results-For-The-Quarter-And-Year-Ended-31.03.2023_compressed.pdf" },
  { id: 31, title: "Quarter Ended 30.06.2023", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-For-The-Quarter-Ended-30.06.2023.pdf" },
  { id: 32, title: "Quarter & Half Year Ended 30.09.2023", type: "Financial Result", fileUrl: "/FinancialResults/Financial-Results-for-the-quarter-and-half-year-ended-30.09.2023.pdf" },
  { id: 33, title: "Quarter & Nine Months Ended 31.12.2023", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-for-the-quarter-and-nine-months-ended-31.12.2023_compressed.pdf" },
  { id: 34, title: "Quarter & Year Ended 31.03.2024", type: "Audited Financial Result", fileUrl: "/FinancialResults/Audited-Financial-Results-for-the-quarter-and-year-ended-31.03.2024.pdf" },
  { id: 35, title: "Quarter Ended 30.06.2024", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-for-the-quarter-ended-30.06.2024.pdf" },
  { id: 36, title: "Quarter & Half Year Ended 30.09.2024", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-for-the-quarter-and-half-year-ended-30.09.2024.pdf" },
  { id: 37, title: "Quarter & Nine Months Ended 31.12.2024", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-for-the-quarter-and-nine-months-ended-31.12.2024.pdf" },
  { id: 38, title: "Quarter & Year Ended 31.03.2025", type: "Audited Financial Result", fileUrl: "/FinancialResults/Audited-Financial-Results-for-the-quarter-and-year-ended-31.03.2025.pdf" },
  { id: 39, title: "Quarter Ended 30.06.2025", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Unaudited-Financial-Results-for-the-quarter-ended-30.06.2025.pdf" },
  { id: 40, title: "Quarter & Half Year Ended 30.09.2025", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Quarter & Half Year Ended 30.09.2025.pdf" },
  { id: 41, title: "Quarter & Nine Months Ended 31.12.2025", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Quarter & Nine Months Ended 31.12.2025.pdf" },
  { id: 42, title: "Quarter & Year Ended 31.03.2026", type: "Audited Financial Result", fileUrl: "/FinancialResults/Quarter & Year Ended 31.03.2026.pdf" },
  { id: 43, title: "Quarter Ended 30.06.2026", type: "Un-Audited Financial Result", fileUrl: "/FinancialResults/Quarter Ended 30.06.2026.pdf" },
];

const FinancialResultsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <HospitalHeader />
      
      <main className="flex-1">
        {/* Page Header / Hero Area */}
        <section className="internal-hero-pt pb-16 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Financial Results
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Below are the financial results of Jaipur Hospital for different quarters and financial years.
            </p>
          </div>
        </section>

        {/* Financial Results List */}
        <section className="section-padding bg-surface">
          <div className="container-width max-w-5xl">
            <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {financialResults.map((result) => (
                  <a
                    key={result.id}
                    href={result.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col bg-surface border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md-blue transition-all duration-300 relative overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground bg-border/50 px-2 py-1 rounded-md">
                        #{result.id}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {result.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {result.type}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-medium text-primary">
                      <Download className="w-4 h-4 mr-2" />
                      View PDF
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

export default FinancialResultsPage;
