import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DoctorsPage = lazy(() => import("./pages/DoctorsPage"));
const DoctorDetail = lazy(() => import("./pages/DoctorDetail"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FacilitiesPage = lazy(() => import("./pages/FacilitiesPage"));
const AnnualReportPage = lazy(() => import("./pages/AnnualReportPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const BoardOfDirectorsPage = lazy(() => import("./pages/BoardOfDirectorsPage"));
const CompanyProfilePage = lazy(() => import("./pages/CompanyProfilePage"));
const CorporateGovernancePage = lazy(() => import("./pages/CorporateGovernancePage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const ListingInformationPage = lazy(() => import("./pages/ListingInformationPage"));
const ManagingDirectorMessagePage = lazy(() => import("./pages/ManagingDirectorMessagePage"));
const OurPartnersPage = lazy(() => import("./pages/OurPartnersPage"));
const Regulation46and62Page = lazy(() => import("./pages/Regulation46and62Page"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const FinancialResultsPage = lazy(() => import("./pages/FinancialResultsPage"));
const ProjectStyle2Page = lazy(() => import("./pages/ProjectStyle2Page"));
const ProjectStyle2DetailPage = lazy(() => import("./pages/ProjectStyle2DetailPage"));
const OurTeamMemberPage = lazy(() => import("./pages/OurTeamMemberPage"));
const OurHistoryPage = lazy(() => import("./pages/OurHistoryPage"));
const VisionMissionPage = lazy(() => import("./pages/VisionMissionPage"));
const ShareholdersInformationPage = lazy(() => import("./pages/ShareholdersInformationPage"));
const EmpanelmentsPage = lazy(() => import("./pages/EmpanelmentsPage"));
const NoticeOfAGMPage = lazy(() => import("./pages/NoticeOfAGMPage"));
const NoticeOfBookClosurePage = lazy(() => import("./pages/NoticeOfBookClosurePage"));
const NoticeOfPostalBallotPage = lazy(() => import("./pages/NoticeOfPostalBallotPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUsePage"));
const BookAppointmentPage = lazy(() => import("./pages/BookAppointmentPage"));
const HealthPackagesPage = lazy(() => import("./pages/HealthPackagesPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));

import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import { SEO } from "@/components/SEO";

const queryClient = new QueryClient();

const pageRoutes = [
  { path: "/facilities", element: <FacilitiesPage />, seo: { title: "Clinical Facilities", description: "Discover Jaipur Hospital's medical facilities, advanced diagnostics, ICU, operation theatres, and patient-focused care.", canonical: "/facilities" } },
  { path: "/contact", element: <ContactPage />, seo: { title: "Contact Jaipur Hospital", description: "Get in touch with Jaipur Hospital for appointments, emergencies, and patient support in Jaipur.", canonical: "/contact" } },
  { path: "/annual-report", element: <AnnualReportPage />, seo: { title: "Annual Reports", description: "Read Jaipur Hospital's annual reports and corporate disclosures for the latest financial year.", canonical: "/annual-report" } },
  { path: "/blogs", element: <BlogsPage />, seo: { title: "Health Blog", description: "Read health tips, patient stories, and expert medical updates from Jaipur Hospital doctors.", canonical: "/blogs" } },
  { path: "/board-of-directors", element: <BoardOfDirectorsPage />, seo: { title: "Board of Directors", description: "Meet the governing board guiding Jaipur Hospital's vision and healthcare excellence.", canonical: "/board-of-directors" } },
  { path: "/company-profile", element: <CompanyProfilePage />, seo: { title: "Company Profile", description: "Learn about Jaipur Hospital's history, leadership, values, and commitment to quality care.", canonical: "/company-profile" } },
  { path: "/corporate-governance", element: <CorporateGovernancePage />, seo: { title: "Corporate Governance", description: "Explore Jaipur Hospital's corporate governance policies, disclosures, and leadership practices.", canonical: "/corporate-governance" } },
  { path: "/education", element: <EducationPage />, seo: { title: "Education & Training", description: "Discover Jaipur Hospital's medical education, training programs, and career opportunities.", canonical: "/education" } },
  { path: "/listing-information", element: <ListingInformationPage />, seo: { title: "Listing Information", description: "Access Jaipur Hospital's listing information, disclosures, and regulatory filings.", canonical: "/listing-information" } },
  { path: "/managing-directors-message", element: <ManagingDirectorMessagePage />, seo: { title: "Managing Director's Message", description: "Read the Jaipur Hospital MD's message about patient care, growth, and hospital values.", canonical: "/managing-directors-message" } },
  { path: "/our-partner", element: <OurPartnersPage />, seo: { title: "Our Partners", description: "Meet Jaipur Hospital's strategic partners and healthcare collaborators.", canonical: "/our-partner" } },
  { path: "/regulation-46-62", element: <Regulation46and62Page />, seo: { title: "Regulation 46 & 62", description: "Find Jaipur Hospital's corporate compliance documents under Regulation 46 and 62.", canonical: "/regulation-46-62" } },
  { path: "/gallery", element: <GalleryPage />, seo: { title: "Gallery", description: "View Jaipur Hospital's facilities, care environment, and hospital infrastructure gallery.", canonical: "/gallery" } },
  { path: "/financial-results", element: <FinancialResultsPage />, seo: { title: "Financial Results", description: "Review Jaipur Hospital's financial performance, results, and investor disclosures.", canonical: "/financial-results" } },
  { path: "/project-style-2", element: <ProjectStyle2Page />, seo: { title: "Project Style 2", description: "Explore Jaipur Hospital's latest projects and design initiatives.", canonical: "/project-style-2" } },
  { path: "/our-team-member", element: <OurTeamMemberPage />, seo: { title: "Our Team Members", description: "Meet Jaipur Hospital's expert medical professionals delivering compassionate care.", canonical: "/our-team-member" } },
  { path: "/our-history", element: <OurHistoryPage />, seo: { title: "Our History", description: "Learn about Jaipur Hospital's journey, milestones, and healthcare legacy.", canonical: "/our-history" } },
  { path: "/vision-mission", element: <VisionMissionPage />, seo: { title: "Vision & Mission", description: "Discover Jaipur Hospital's purpose, values, and future direction in healthcare.", canonical: "/vision-mission" } },
  { path: "/shareholders-information", element: <ShareholdersInformationPage />, seo: { title: "Shareholders Information", description: "Access Jaipur Hospital's investor disclosures, shareholder reports, and company information.", canonical: "/shareholders-information" } },
  { path: "/our-schemes", element: <EmpanelmentsPage />, seo: { title: "Our Schemes", description: "View Jaipur Hospital's empanelment details and insurance partner information.", canonical: "/our-schemes" } },
  { path: "/ourscheme", element: <EmpanelmentsPage />, seo: { title: "Our Schemes", description: "View Jaipur Hospital's empanelment details and insurance partner information.", canonical: "/our-schemes" } },
  { path: "/ourschemes", element: <EmpanelmentsPage />, seo: { title: "Our Schemes", description: "View Jaipur Hospital's empanelment details and insurance partner information.", canonical: "/our-schemes" } },
  { path: "/empanelments", element: <EmpanelmentsPage />, seo: { title: "Our Schemes", description: "View Jaipur Hospital's empanelment details and insurance partner information.", canonical: "/our-schemes" } },
  { path: "/notice-of-agm", element: <NoticeOfAGMPage />, seo: { title: "Notice of AGM", description: "Read the latest Jaipur Hospital Annual General Meeting notice and details.", canonical: "/notice-of-agm" } },
  { path: "/notice-of-book-closure", element: <NoticeOfBookClosurePage />, seo: { title: "Notice of Book Closure", description: "See Jaipur Hospital's notice of book closure and record date information.", canonical: "/notice-of-book-closure" } },
  { path: "/notice-of-postal-ballot", element: <NoticeOfPostalBallotPage />, seo: { title: "Notice of Postal Ballot", description: "Review Jaipur Hospital's postal ballot notice and voting information.", canonical: "/notice-of-postal-ballot" } },
  { path: "/project-style-2/:id", element: <ProjectStyle2DetailPage />, seo: { title: "Project Details", description: "Read detailed project information at Jaipur Hospital.", canonical: "/project-style-2" } },
];

const wrapWithSEO = (page: JSX.Element, seo?: { title: string; description: string; canonical: string; robots?: string }) =>
  seo ? (
    <>
      <SEO title={seo.title} description={seo.description} canonical={seo.canonical} robots={seo.robots} />
      {page}
    </>
  ) : (
    page
  );

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen grid place-items-center bg-background text-foreground">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/doctors/:id" element={<DoctorDetail />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              {pageRoutes.map(({ path, element, seo }) => (
                <Route key={path} path={path} element={wrapWithSEO(element, seo)} />
              ))}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy-policy" element={wrapWithSEO(<PrivacyPolicyPage />, { title: "Privacy Policy", description: "Learn about privacy policy and data security standards at Jaipur Hospital.", canonical: "/privacy-policy" })} />
              <Route path="/terms-of-use" element={wrapWithSEO(<TermsOfUsePage />, { title: "Terms of Use", description: "Read the website and service terms of use for Jaipur Hospital.", canonical: "/terms-of-use" })} />
              <Route path="/book-appointment" element={wrapWithSEO(<BookAppointmentPage />, { title: "Book Appointment | Jaipur Hospital", description: "Book an appointment online or contact our patient coordinator desk directly.", canonical: "/book-appointment" })} />
              <Route path="/health-packages" element={wrapWithSEO(<HealthPackagesPage />, { title: "Health Checkup Packages | Jaipur Hospital", description: "Select from our range of affordable preventive checkup packages in Jaipur.", canonical: "/health-packages" })} />
              <Route path="/testimonials" element={wrapWithSEO(<TestimonialsPage />, { title: "Patient Testimonials | Jaipur Hospital", description: "Explore reviews and stories of recovery shared by our patients.", canonical: "/testimonials" })} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
