import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Briefcase, GraduationCap } from "lucide-react";

const directors = [
  {
    name: "Dr. Shailendra Kumar Sharma (Managing Director)",
    qualification: "M.B.B.S, M.S (Ortho)",
    role: null,
    showExpertiseHeading: true,
    content: [
      "Dr. Shailendra Kumar Sharma is an experienced orthopaedic surgeon practicing in Jaipur for more than 30 years. He specializes in traumatology and joint replacement surgery.",
      "He is the Managing Director of Sharma East India Hospitals & Medical Research Limited and has been associated with the company since the beginning of the hospital project as one of the chief promoters.",
      "Dr. Sharma is one of the most renowned orthopaedic surgeons in Rajasthan. He completed his MBBS in 1979 and MS in 1982.",
      "He has served as: Secretary of Rajasthan Orthopaedics Association; President of Rajasthan Orthopaedics Association.",
      "He was awarded “Pioneer in Orthopaedic Work” by the Medical Practitioners Society of Rajasthan. He was also awarded “Entrepreneur in Medicine” during the Golden Jubilee Celebration of SMS Medical College.",
      "Dr. Sharma started his own hospital in 1983 in Jaipur, becoming the first orthopaedic surgeon in Rajasthan to establish his own hospital.",
      "He is the promoter and Managing Director of the public limited company Sharma East India Hospital & Medical Research Ltd, which runs Jaipur Hospital at Lal Kothi, Jaipur.",
      "He has more than 41 years of experience in the hospital industry and is widely known for introducing knee replacement surgery in Jaipur.",
    ],
  },
  {
    name: "Mrs. Maya Sharma",
    qualification: "B.Com",
    role: null,
    content: [
      "Mrs. Maya Sharma has extensive experience in the business sector and specializes in managing successful businesses, particularly in the hospital industry.",
      "She is known for her dedication, generosity, and leadership in business management.",
    ],
  },
  {
    name: "Dr. Karan Sharma",
    qualification: "MBBS, MS (Ortho), DNB (Ortho), MCh Orth (UK)",
    role: "Non-Executive Director",
    content: [
      "Dr. Karan Sharma is a well-known orthopaedic surgeon in Rajasthan.",
      "He completed: MBBS in 2007 from Kasturba Medical College, Manipal; MS in 2011 from Bharati Vidyapeeth, Pune; DNB in 2012 from National Board of Examinations, Delhi; MCh Orth from University of Dundee, UK.",
      "He also serves as an international visiting faculty at the University of Dundee, UK.",
      "Dr. Sharma received distinction in Orthopaedics and has presented research papers in Rome, Italy and South Korea. He is recognized for his expertise in hip fracture treatment and has authored a book on Hip Fracture.",
      "He has about 16 years of experience in the hospital industry and serves as a Non-Executive Director of Sharma East India Hospitals & Medical Research Ltd.",
    ],
  },
  {
    name: "Dr. Pushpendra Prasad Garg",
    qualification: "MBBS, MD",
    role: "Independent Director",
    content: [
      "Dr. Pushpendra Prasad Garg is a highly experienced medical professional with more than 40 years of experience in the hospital industry.",
      "He has extensive knowledge of the medical and healthcare business environment. He serves as an Independent Director of the company.",
    ],
  },
  {
    name: "Dr. Pawan Shorey",
    qualification: "M.B.B.S, M.S.",
    role: "Non-Executive Independent Director",
    content: [
      "Dr. Pawan Shorey is a highly respected ophthalmologist with over 25 years of rich experience in the field of eye care and vision science. He has been associated with several reputed hospitals and eye institutes, where he has built a distinguished reputation for his clinical excellence, ethical medical practice, and commitment to community eye health. His expertise spans a wide range of ophthalmic services, and he is known for adopting advanced diagnostic and surgical techniques to enhance patient outcomes.",
      "As a Non-Executive Independent Director on the Board of Jaipur Hospital, Dr. Shorey brings a strong clinical perspective, guiding the institution in upholding the highest standards of patient care, medical ethics, and governance. His insights as a practicing eye specialist help strengthen the hospital's mission of delivering quality and affordable healthcare to the community.",
    ],
  },
  {
    name: "Dr. Srikant Vinayakrao Bulakh",
    qualification: "M.B.B.S, M.S.",
    role: "Non-Executive Independent Director",
    content: [
      "Dr. Srikant Vinayakrao Bulakh is a highly respected General Surgeon with over 33 years of rich experience in surgical practice, patient care, and clinical governance. He has been associated with several reputed hospitals and healthcare institutions, where he has built a distinguished career marked by surgical precision, professional integrity, and compassionate patient service. His expertise spans a wide range of general and laparoscopic surgical procedures, and he is known for his commitment to adopting safe and advanced surgical techniques to ensure optimal patient outcomes.",
      "As a Non-Executive Independent Director on the Board of Jaipur Hospital, Dr. Bulakh brings a strong clinical perspective and valuable experience in healthcare quality, ethics, and operational oversight. His guidance plays a vital role in strengthening the hospital's mission to deliver high standards of medical care, safety, and patient satisfaction.",
    ],
  },
  {
    name: "Dr. Radhika Sathe",
    qualification: "M.B.B.S",
    role: "Non-Executive Woman Director",
    content: [
      "Dr. Radhika Sathe is an accomplished dental professional with extensive experience in clinical dentistry, oral healthcare management, and patient education. With a strong focus on preventive and restorative dentistry, she has earned a reputation for delivering high-quality, ethical, and compassionate dental care. Over the years, she has developed expertise in cosmetic dentistry, oral rehabilitation, and community dental health programs, contributing significantly to improving oral health awareness among patients and communities.",
      "As a Non-Executive Woman Director on the Board of Jaipur Hospital, Dr. Sathe brings valuable insights into healthcare service quality, patient experience, and community health engagement. Her professional background and empathetic approach contribute to the hospital's vision of providing comprehensive, inclusive, and patient-centered healthcare.",
    ],
  },
  {
    name: "Mrs. Bhawana Sharma",
    qualification: "M.Com, CS",
    role: "Company Secretary and Compliance Officer",
    content: [
      "Mrs. Bhawana Sharma is the Company Secretary and Compliance Officer of Sharma East India Hospitals Medical Research Limited.",
      "Her responsibilities include: Ensuring compliance with legal and regulatory requirements; Supporting the Board of Directors in governance matters; Promoting ethical corporate practices; Managing regulatory disclosures; Drafting and reviewing legal documents and contracts.",
      "She ensures the organization follows proper governance and compliance standards.",
    ],
  },
  {
    name: "Mr. Vimal Kumar Joshi",
    qualification: "M.Com",
    role: "Chief Financial Officer (CFO)",
    content: [
      "Mr. Vimal Kumar Joshi manages the financial operations of the company.",
      "His responsibilities include: Financial planning and analysis; Budgeting and forecasting; Financial reporting; Financial risk management.",
      "He works closely with departments to ensure efficient use of financial resources and compliance with accounting standards.",
    ],
  },
  {
    name: "Mr. Hemant Shetye",
    qualification: null,
    role: "Corporate Consultant & Auditor",
    content: [
      "Mr. Hemant S. Shetye is associated with HSPN Associates LLP, formerly known as H. Shetye Associates, a firm of Company Secretaries established in 1989. The firm specializes in corporate law and company secretarial services.",
      "Mr. Shetye is: A Fellow Member of the Institute of Company Secretaries of India; A Commerce Law Graduate from Mumbai University; Practicing for more than 30 years. He is also registered with the Insolvency and Bankruptcy Board of India as an Insolvency Professional since 2019.",
      "He serves as a corporate consultant and auditor for the company.",
    ],
  },
  {
    name: "Mr. Gautam Sharma",
    qualification: "Gopal Sharma & Co. Chartered Accountants",
    role: "Statutory Auditor",
    content: [
      "Mr. Gautam Sharma from Gopal Sharma & Co. Chartered Accountants is the Statutory Auditor of the company.",
      "His responsibilities include: Verifying financial statements and records; Ensuring compliance with accounting standards; Evaluating internal controls and risk management systems; Enhancing corporate governance through independent financial audits.",
    ],
  },
];

const BoardOfDirectorsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Board of Directors – Jaipur Hospital
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Leadership and governance at Sharma East India Hospitals & Medical Research Limited.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width max-w-4xl">
            <div className="space-y-10">
              {directors.map((person, index) => (
                <div key={index} className="relative">
                  {"showExpertiseHeading" in person && person.showExpertiseHeading && (
                    <h2 className="text-2xl font-display font-semibold text-primary mb-6 pb-2 border-b-2 border-primary/20">
                      Expertise with Jaipur Hospital
                    </h2>
                  )}
                  <div
                    className="relative bg-card rounded-2xl border border-border shadow-card overflow-hidden
                      hover:shadow-lg transition-shadow duration-300
                      pl-6 md:pl-8 pr-6 md:pr-8 pt-6 md:pt-8 pb-6 md:pb-8
                      border-l-4 border-l-primary"
                  >
                    <div className="flex flex-wrap items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-tight">
                          {person.name}
                        </h3>
                        {person.qualification && (
                          <p className="flex items-center gap-2 text-sm text-muted-foreground mt-1.5 font-medium">
                            <GraduationCap size={16} className="text-primary flex-shrink-0" />
                            {person.qualification}
                          </p>
                        )}
                        {person.role && (
                          <span className="inline-block mt-3 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg">
                            {person.role}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                      {person.content.map((para, i) => (
                        <p key={i} className="text-foreground/85">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default BoardOfDirectorsPage;
