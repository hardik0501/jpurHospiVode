import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { CopySlash as BookOpen, Download, ChevronRight } from "lucide-react";

const bookClosureNotices = [
  { title: "Notice of Book Closure For 36th AGM", file: "/Book_Closure/Notice-of-Book-Closure-For-36th-AGM.pdf" },
  { title: "Notice of Book Closure For 35th AGM", file: "/Book_Closure/Notice-of-Book-Closure-For-35th-AGM.pdf" },
  { title: "Notice of Book Closure For 34th AGM", file: "/Book_Closure/Notice-of-Book-Closure-For-34th-AGM.pdf" },
  { title: "Notice of Book Closure For 33rd AGM", file: "/Book_Closure/Notice-of-Book-Closure-for-33rd-AGM.pdf" },
  { title: "Notice of Book Closure For 32nd AGM", file: "/Book_Closure/Notice-of-Book-Closure-for-32nd-AGM.pdf" },
  { title: "Notice of Book Closure For 31st AGM", file: "/Book_Closure/Notice-of-Book-Closure-for-31st-AGM.pdf" },
  { title: "Notice of Book Closure For 30th AGM", file: "/Book_Closure/NOTICE-OF-Book-Closure-for-30th-AGM.pdf" },
  { title: "Notice of Book Closure For 29th AGM", file: "/Book_Closure/NOTICE_OF_Book_Closure_for_29th_AGM.pdf" },
  { title: "Notice of Book Closure For 28th AGM", file: "/Book_Closure/Notice_of_Book_Closure_for_28th_AGM.pdf" },
  { title: "Notice of Book Closure For 27th AGM", file: "/Book_Closure/Notice_of_Book_Closure.pdf" },
];

const NoticeOfBookClosurePage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Notice of Book Closure
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Notice of Book Closure</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Announcements and Notices for Book Closures (AGM)
            </p>
          </div>
        </section>

        {/* Action List Section */}
        <section className="py-20 bg-surface">
          <div className="container-width max-w-4xl mx-auto">
            <div className="bg-card border border-border shadow-md rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-border">
                {bookClosureNotices.map((notice, index) => (
                  <a
                    key={index}
                    href={notice.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-slate-50 transition-colors group gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <BookOpen size={24} />
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

export default NoticeOfBookClosurePage;
