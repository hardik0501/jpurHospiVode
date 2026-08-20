import { useState } from "react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Info, FileSearch, Link2, Users, Phone, Mail, Globe, FileText, ExternalLink, Download } from "lucide-react";

const NEWSPAPER_PUBLICATIONS = [
  {
    title: "Newspaper advertisement for Notice of 35th Annual General Meeting",
    pdf: "Newspaper advertisement for Notice of 35th Annual General Meeting.pdf",
  },
  {
    title: "Newspaper advertisement for Notice of 34th Annual General Meeting",
    pdf: "Newspaper advertisement for Notice of 34th Annual General Meeting.pdf",
  },
  {
    title: "Newspaper advertisement for Notice of 33rd Annual General Meeting",
    pdf: "Newspaper advertisement for Notice of 33rd Annual General Meeting.pdf",
  },
  {
    title: "Newspaper advertisement for 31.12.2025",
    pdf: "Newspaper advertisement for 31.12.2025.pdf",
  },
  {
    title: "Newspaper advertisement for 31.12.2024",
    pdf: "Newspaper advertisement for 31.12.2024.pdf",
  },
  {
    title: "Newspaper advertisement for 31.12.2023",
    pdf: "Newspaper advertisement for 31.12.2023.pdf",
  },
  {
    title: "Newspaper advertisement for 31.03.2026",
    pdf: "Newspaper advertisement for 31.03.2026.pdf",
  },
  {
    title: "Newspaper advertisement for 31.03.2025",
    pdf: "Newspaper advertisement for 31.03.2025.pdf",
  },
  {
    title: "Newspaper advertisement for 31.03.2024",
    pdf: "Newspaper advertisement for 31.03.2024.pdf",
  },
  {
    title: "Newspaper advertisement for 31.03.2023",
    pdf: "Newspaper advertisement for 31.03.2023.pdf",
  },
  {
    title: "Newspaper advertisement for 30.09.2024",
    pdf: "Newspaper advertisement for 30.09.2024.pdf",
  },
  {
    title: "Newspaper advertisement for 30.09.2023",
    pdf: "Newspaper advertisement for 30.09.2023.pdf",
  },
  {
    title: "Newspaper advertisement for 30.09.2022",
    pdf: "Newspaper advertisement for 30.09.2022.pdf",
  },
  {
    title: "Newspaper advertisement for 30.06.2026",
    pdf: "Newspaper advertisement for 30.06.2026.pdf",
  },
  {
    title: "Newspaper advertisement for 30.06.2024",
    pdf: "Newspaper advertisement for 30.06.2024.pdf",
  },
  {
    title: "Newspaper advertisement for 30.06.2023",
    pdf: "Newspaper advertisement for 30.06.2023.pdf",
  },
];

const ANNUAL_RETURNS = [
  { year: "2025", title: "MGT 7 - Annual Return 2025", pdf: "MGT-7 2025.pdf" },
  { year: "2023", title: "MGT 7 - Annual Return 2023", pdf: "MGT-7 2023.pdf" },
  { year: "2022", title: "MGT 7 - Annual Return 2022", pdf: "MGT-7 2022.pdf" },
  { year: "2021", title: "MGT 7 - Annual Return 2021", pdf: "MGT-7 2021.pdf" },
  { year: "2020", title: "MGT 7 - Annual Return 2020", pdf: "MGT-7 2020.pdf" },
  { year: "2019", title: "MGT 7 - Annual Return 2019", pdf: "MGT-7 2019.pdf" },
  { year: "2018", title: "MGT 7 - Annual Return 2018", pdf: "MGT-7 2018.pdf" },
  { year: "2017", title: "MGT 7 - Annual Return 2017", pdf: "MGT-7 2017.pdf" },
  { year: "2016", title: "MGT 7 - Annual Return 2016", pdf: "MGT-7 2016.pdf" },
  { year: "2015", title: "MGT 7 - Annual Return 2015", pdf: "MGT-7 2015.pdf" },
];

const Regulation46and62Page = () => {
  const [selectedPdf, setSelectedPdf] = useState(NEWSPAPER_PUBLICATIONS[0]);
  const [selectedReturn, setSelectedReturn] = useState(ANNUAL_RETURNS[0]);
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Regulation 46 &amp; 62 Disclosures
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
              Overview of disclosures made under Regulation 46 and 62 of SEBI (LODR) Regulations, 2015 and a guide to
              key investor information available on this website.
            </p>
          </div>
        </section>

        {/* Search (static UI) */}
        <section className="bg-surface border-b border-border">
          <div className="container-width max-w-4xl py-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileSearch className="w-4 h-4 text-primary" />
                <span>Write search keyword &amp; press Enter</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width max-w-5xl space-y-10">
            {/* Regulation 30 (LODR) - Newspaper Publication */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Regulation 30 (LODR)-Newspaper Publication
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Access newspaper advertisements for Notice of Annual General Meetings and financial results.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-4 md:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Panel: Tabs List */}
                  <div className="lg:col-span-5 flex flex-col space-y-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">
                      Newspaper Publications List
                    </span>
                    
                    {/* Desktop scrollable tab list */}
                    <div className="hidden lg:flex flex-col gap-1.5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                      {NEWSPAPER_PUBLICATIONS.map((pub) => {
                        const isSelected = selectedPdf.title === pub.title;
                        return (
                          <button
                            key={pub.title}
                            onClick={() => setSelectedPdf(pub)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border flex items-start gap-2.5 ${
                              isSelected
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-surface hover:bg-muted text-foreground border-border"
                            }`}
                          >
                            <FileText className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                            <span className="leading-tight">{pub.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile select dropdown */}
                    <div className="lg:hidden">
                      <select
                        value={selectedPdf.title}
                        onChange={(e) => {
                          const pub = NEWSPAPER_PUBLICATIONS.find((p) => p.title === e.target.value);
                          if (pub) setSelectedPdf(pub);
                        }}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-medium"
                      >
                        {NEWSPAPER_PUBLICATIONS.map((pub) => (
                          <option key={pub.title} value={pub.title}>
                            {pub.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Right Panel: Live PDF Preview Frame */}
                  <div className="lg:col-span-7 flex flex-col space-y-4">
                    <div className="bg-surface p-4 rounded-xl border border-border/50 flex flex-col space-y-3">
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Currently Selected
                        </div>
                        <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight" title={selectedPdf.title}>
                          {selectedPdf.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        <a
                          href={`/PolicyReg46&42/NewsPaper/${encodeURIComponent(selectedPdf.pdf)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open PDF</span>
                        </a>
                        <a
                          href={`/PolicyReg46&42/NewsPaper/${encodeURIComponent(selectedPdf.pdf)}`}
                          download
                          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm border border-border bg-card text-foreground hover:bg-muted font-semibold rounded-lg transition-colors whitespace-nowrap"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>

                    {/* PDF iframe viewport with fallbacks */}
                    <div className="relative w-full h-[450px] md:h-[500px] bg-surface rounded-xl border border-border overflow-hidden shadow-inner flex flex-col">
                      <iframe
                        src={`/PolicyReg46&42/NewsPaper/${encodeURIComponent(selectedPdf.pdf)}#toolbar=0`}
                        className="w-full h-full border-none flex-grow"
                        title={selectedPdf.title}
                      />
                      {/* Mobile message or fallback detail */}
                      <div className="bg-muted/30 p-2.5 border-t border-border text-center text-xs text-muted-foreground">
                        Previewing inline. If the preview does not load, use the "Open PDF" button to view.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Annual Return */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Annual Return
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Access Form MGT-7 (Annual Return) disclosures for various financial years.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-4 md:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Panel: Tabs List */}
                  <div className="lg:col-span-5 flex flex-col space-y-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">
                      Select Annual Return (MGT-7)
                    </span>
                    
                    {/* Desktop scrollable tab list */}
                    <div className="hidden lg:flex flex-col gap-1.5 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
                      {ANNUAL_RETURNS.map((ret) => {
                        const isSelected = selectedReturn.year === ret.year;
                        return (
                          <button
                            key={ret.year}
                            onClick={() => setSelectedReturn(ret)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border flex items-start gap-2.5 ${
                              isSelected
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-surface hover:bg-muted text-foreground border-border"
                            }`}
                          >
                            <FileText className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                            <span className="leading-tight">{ret.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile select dropdown */}
                    <div className="lg:hidden">
                      <select
                        value={selectedReturn.year}
                        onChange={(e) => {
                          const ret = ANNUAL_RETURNS.find((r) => r.year === e.target.value);
                          if (ret) setSelectedReturn(ret);
                        }}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-medium"
                      >
                        {ANNUAL_RETURNS.map((ret) => (
                          <option key={ret.year} value={ret.year}>
                            {ret.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Right Panel: Live PDF Preview Frame */}
                  <div className="lg:col-span-7 flex flex-col space-y-4">
                    <div className="bg-surface p-4 rounded-xl border border-border/50 flex flex-col space-y-3">
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Currently Selected
                        </div>
                        <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                          {selectedReturn.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        <a
                          href={`/PolicyReg46&42/Annual%20return/${encodeURIComponent(selectedReturn.pdf)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open PDF</span>
                        </a>
                        <a
                          href={`/PolicyReg46&42/Annual%20return/${encodeURIComponent(selectedReturn.pdf)}`}
                          download
                          className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm border border-border bg-card text-foreground hover:bg-muted font-semibold rounded-lg transition-colors whitespace-nowrap"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>

                    {/* PDF iframe viewport with fallbacks */}
                    <div className="relative w-full h-[450px] md:h-[500px] bg-surface rounded-xl border border-border overflow-hidden shadow-inner flex flex-col">
                      <iframe
                        src={`/PolicyReg46&42/Annual%20return/${encodeURIComponent(selectedReturn.pdf)}#toolbar=0`}
                        className="w-full h-full border-none flex-grow"
                        title={selectedReturn.title}
                      />
                      {/* Mobile message or fallback detail */}
                      <div className="bg-muted/30 p-2.5 border-t border-border text-center text-xs text-muted-foreground">
                        Previewing inline. If the preview does not load, use the "Open PDF" button to view.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Company / regulation summary */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Disclosure under Regulation 46 &amp; 62
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    As per SEBI (Listing Obligations &amp; Disclosure Requirements) Regulations, 2015.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-4 text-sm md:text-base">
                <p className="text-muted-foreground leading-relaxed">
                  M/s Sharma East India Hospitals and Medical Research Limited is a public limited Company
                  incorporated in 1989, listed at BSE Limited, and is engaged in the provision of medical and
                  healthcare services. The Company runs a multi-specialty hospital in the name and style of{" "}
                  <span className="font-semibold text-foreground">Jaipur Hospital</span> at Lal Kothi, Tonk Road,
                  Jaipur – 302015, Rajasthan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The CIN of the Company is{" "}
                  <span className="font-semibold text-foreground">L85110RJ1989PLC005206</span>. The ISIN of the
                  Company is{" "}
                  <span className="font-semibold text-foreground">INE465H01012</span>. The BSE Scrip Code of the
                  Company is{" "}
                  <span className="font-semibold text-foreground">524548 (SHARMEH)</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Registered Address of the Company is:
                </p>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>Jaipur Hospital</p>
                  <p>Near SMS Stadium</p>
                  <p>Lal Kothi, Tonk Road</p>
                  <p>Jaipur – 302015 (Rajasthan)</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Stakeholders of the Company may please visit the{" "}
                  <span className="font-semibold text-foreground">“Investors”</span> section of the website for
                  detailed reports and compliances.
                </p>

                <div className="mt-6 pt-6 border-t border-border/60">
                  <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Important Disclosures:</h3>
                  <ul className="space-y-3 pl-1">
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Terms and conditions of appointment of independent directors.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        1. Terms and conditions of appointment of Independent Directors
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Composition of various committees of board of directors.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        2. Composition of various committees of Board of Directors
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Code of conduct of board of directors and senior management personnel.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        3. Code of conduct of Board of Directors and Senior Management Personnel
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Details of establishment of vigil mechanism Whistle Blower policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        4. Details of establishment of vigil mechanism Whistle Blower Policy
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Criteria of making payments to non-executive directors.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        5. Criteria of making payments to Non-Executive Directors
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Policy on dealing with related party.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        6. Policy on dealing with Related Party
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href="/PolicyReg46&42/Details of familiarization programmes imparted to independent director.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        7. Details of familiarization programmes imparted to Independent Director
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Gist of Investors section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Gist of the “Investors” Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Summary of information available under different tabs for investors.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="/listing-information"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Listing Information
                  </h3>
                  <p className="text-muted-foreground">
                    Contains information about the Company and its listing at the recognised stock exchange, including
                    contact details for investor grievances.
                  </p>
                </a>
                <a
                  href="/notice-of-agm"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Notice of AGM
                  </h3>
                  <p className="text-muted-foreground">
                    Contains notices of Annual General Meetings of the Company for the information of investors.
                  </p>
                </a>
                <a
                  href="/financial-results"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Financial Results
                  </h3>
                  <p className="text-muted-foreground">
                    Contains financial results approved for various quarters of the Company.
                  </p>
                </a>
                <a
                  href="/shareholders-information"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Shareholder’s Information
                  </h3>
                  <p className="text-muted-foreground">
                    Contains the shareholding pattern of the Company for various quarters.
                  </p>
                </a>
                <a
                  href="/annual-report"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Annual Reports
                  </h3>
                  <p className="text-muted-foreground">
                    Contains the annual reports of the Company for the information of investors.
                  </p>
                </a>
                <a
                  href="/corporate-governance"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Corporate Governance
                  </h3>
                  <p className="text-muted-foreground">
                    Contains Board Meeting intimations, voting results of AGMs, various policies (Preservation, Archival,
                    Materiality), Regulation 13(3) Investor Complaints, Regulation 27(2) Non-Applicability of Corporate
                    Governance, Regulation 74(5), Regulation 76 reports, outcomes of Board Meetings and Grievance
                    Redressal Mechanism for investors.
                  </p>
                </a>
                <a
                  href="/notice-of-book-closure"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Notice of Book Closure
                  </h3>
                  <p className="text-muted-foreground">
                    Contains notices of book closure disclosure for the Company.
                  </p>
                </a>
                <a
                  href="/regulation-46-62"
                  className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm block hover:border-primary/50 transition-all hover:shadow-md group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Regulation 46 &amp; 62
                  </h3>
                  <p className="text-muted-foreground">
                    Provides this consolidated gist of inclusions of various reports and compliances on the website and
                    an overview of information relevant for investor relations.
                  </p>
                </a>
              </div>
            </section>

            {/* Quick links */}
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="/listing-information"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Listing Information
                </a>
                <a
                  href="/notice-of-agm"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Notice of AGM
                </a>
                <a
                  href="/financial-results"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Financial Results
                </a>
                <a
                  href="/shareholders-information"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Shareholder&apos;s Information
                </a>
                <a
                  href="/annual-report"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Annual Reports
                </a>
                <a
                  href="/corporate-governance"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Corporate Governance
                </a>
                <a
                  href="/notice-of-book-closure"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Notice of Book Closure
                </a>
                <a
                  href="/board-of-directors"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Board of Directors &amp; KMP
                </a>
              </div>
            </section>

            {/* Board and KMP table */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Details of the Board of Directors &amp; Key Managerial Personnel
                  </h2>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-4 md:p-6 overflow-x-auto">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface text-left">
                      <th className="border-b border-border px-2 py-2 font-semibold">Sr. No.</th>
                      <th className="border-b border-border px-2 py-2 font-semibold">Name</th>
                      <th className="border-b border-border px-2 py-2 font-semibold">
                        Category (Promoter / Director / Compliance Officer)
                      </th>
                      <th className="border-b border-border px-2 py-2 font-semibold">DIN</th>
                      <th className="border-b border-border px-2 py-2 font-semibold">PAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">1</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Shailendra Kumar Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Promoter – Managing Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">00432070</td>
                      <td className="border-b border-border px-2 py-2 align-top">AFEPS7340Q</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">2</td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Shri. Pushpendra Prasad Garg
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Independent Non-Executive Director
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        10304570
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        ACCPG2105L
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">3</td>
                      <td className="border-b border-border px-2 py-2 align-top">Ms. Maya Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Non-Executive Woman Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">00432496</td>
                      <td className="border-b border-border px-2 py-2 align-top">ABXPS3785L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">4</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Karan Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Non-Executive Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">01484050</td>
                      <td className="border-b border-border px-2 py-2 align-top">BPJPS1420R</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">5</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Pawan Shorey</td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Independent Non-Executive Director
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">10636955</td>
                      <td className="border-b border-border px-2 py-2 align-top">ACZPS7413G</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">6</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Srikant Vinayakrao Bulakh</td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Independent Non-Executive Director
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">10637125</td>
                      <td className="border-b border-border px-2 py-2 align-top">AESPB8318L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">7</td>
                      <td className="border-b border-border px-2 py-2 align-top">Ms. Radhika Sathe</td>
                      <td className="border-b border-border px-2 py-2 align-top">Non-Executive Woman Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">10645753</td>
                      <td className="border-b border-border px-2 py-2 align-top">CTLPS2523L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">8</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Vimal Kumar Joshi</td>
                      <td className="border-b border-border px-2 py-2 align-top">Chief Financial Officer</td>
                      <td className="border-b border-border px-2 py-2 align-top">N.A.</td>
                      <td className="border-b border-border px-2 py-2 align-top">AECPJ3849L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">9</td>
                      <td className="border-b border-border px-2 py-2 align-top">Ms. Bhawana Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Company Secretary</td>
                      <td className="border-b border-border px-2 py-2 align-top">N.A.</td>
                      <td className="border-b border-border px-2 py-2 align-top">HEKPS8865A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Disclosure of Contact Details of Key Managerial Personnel */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Disclosure of Contact Details of Key Managerial Personnel
                  </h2>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  
                  {/* Shri Shailendra Kumar Sharma */}
                  <div className="bg-surface p-5 rounded-xl border border-border/60 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-foreground text-base">Shri Shailendra Kumar Sharma</h3>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-0.5">Managing Director</p>
                      
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground font-sans">
                        <p className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>0141-2742557, 2742266, 2742619, 2741465</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          <a href="mailto:sharmaeastindia@gmail.com" className="hover:text-primary transition-colors underline underline-offset-2">sharmaeastindia@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Shri Vimal Kumar Joshi */}
                  <div className="bg-surface p-5 rounded-xl border border-border/60 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-foreground text-base">Shri Vimal Kumar Joshi</h3>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-0.5">Chief Financial Officer</p>
                      
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground font-sans">
                        <p className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>0141-2742557, 2742266, 2742619, 2741465</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          <a href="mailto:sharmaeastindia@gmail.com" className="hover:text-primary transition-colors underline underline-offset-2">sharmaeastindia@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mrs. Bhawana Sharma */}
                  <div className="bg-surface p-5 rounded-xl border border-border/60 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-foreground text-base">Mrs. Bhawana Sharma</h3>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-0.5">Company Secretary & Compliance Officer</p>
                      
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground font-sans">
                        <p className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>0141-2742557, 2742266, 2742619, 2741465</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          <a href="mailto:sharmaeastindia@gmail.com" className="hover:text-primary transition-colors underline underline-offset-2">sharmaeastindia@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Investor grievance contact */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Investor Grievance Contact
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6 space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievance
                </p>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Bhawana Sharma
                  </p>
                  <p>Company Secretary &amp; Compliance Officer</p>
                  <p>Sharma East India Hospitals and Medical Research Limited</p>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p>Jaipur Hospital, Near SMS Stadium</p>
                  <p>Lal Kothi, Tonk Road</p>
                  <p>Jaipur – 302015 (Rajasthan)</p>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p className="flex flex-wrap items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>
                      Tel: 0141-2742557, 2742266, 2742619, 2741465
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>Jaipurhospitallalkothi@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>www.jaipurhospital.co.in</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default Regulation46and62Page;

