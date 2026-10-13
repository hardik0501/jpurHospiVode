import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Building2, FileSearch, Info } from "lucide-react";

const ListingInformationPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Listing &amp; Company Information
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Corporate and listing details of Sharma East India Hospitals and Medical Research Limited.
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

        {/* Main content */}
        <section className="section-padding bg-surface">
          <div className="container-width max-w-5xl space-y-10">
            {/* Company Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Company Information</h2>
                  <p className="text-sm text-muted-foreground">
                    As per corporate disclosures filed with the stock exchange.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sharma East India Hospitals and Medical Research Limited is a public limited company incorporated in
                  1989. The Company is listed with Bombay Stock Exchange Limited. The Company is primarily engaged in
                  the business of providing healthcare services and is running a multi-specialty hospital in the name
                  and style of Jaipur Hospital at Lal Kothi, Jaipur, Rajasthan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The CIN of the Company is{" "}
                  <span className="font-semibold text-foreground">L85110RJ1989PLC005206</span>. The Registered Address of
                  the Company is:
                </p>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>Jaipur Hospital</p>
                  <p>Near SMS Stadium</p>
                  <p>Lal Kothi, Tonk Road</p>
                  <p>Jaipur – 302015 (Rajasthan)</p>
                </div>
              </div>
            </section>

            {/* Listing Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Listing Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Details of equity shares listed on the stock exchange.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The equity shares of the Company are listed at:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface text-left">
                        <th className="border-b border-border px-3 py-2 font-semibold">Name of the Stock Exchange</th>
                        <th className="border-b border-border px-3 py-2 font-semibold">Address</th>
                        <th className="border-b border-border px-3 py-2 font-semibold">Scrip Code</th>
                        <th className="border-b border-border px-3 py-2 font-semibold">Security ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-border px-3 py-2 align-top">BSE Limited</td>
                        <td className="border-b border-border px-3 py-2 align-top">
                          Phiroze Jeejeebhoy Towers, Dalal Street, Mumbai 400 001
                        </td>
                        <td className="border-b border-border px-3 py-2 align-top">524548</td>
                        <td className="border-b border-border px-3 py-2 align-top">SHARMEH</td>
                      </tr>
                    </tbody>
                  </table>
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

export default ListingInformationPage;

