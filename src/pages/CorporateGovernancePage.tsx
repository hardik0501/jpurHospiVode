import { FileText, Shield, Info, Phone, Mail } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";

// PDFs served from public/Corporate_goverance/ – ensure these filenames exist in that folder
const BOARD_MEETING_NOTICES = [
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2015",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2016",
    "pdf": "Board_Meeting_Notice_for_the_year_ended_31.03.2016.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2016",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_30.06.2016.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2016",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_30.09.2016.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2016",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_31.12.2016.pdf"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2017",
    "pdf": "Board_Meeting_Notice_for_the_year_ended_31.03.2017.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2017",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_30.06.2017.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.09.2017",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_30.09.2017.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2017",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_31.12.2017.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.03.2018",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_31.03.2018.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2018",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_30.06.2018.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.09.2018",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_30.09.2018.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2018",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_31.12.2018.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.03.2019",
    "pdf": "Board_Meeting_Notice_for_the_Quarter_ended_31.03.2019.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2019",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.09.2019",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2019",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2020",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2020.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2020",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2020",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-30.09.2020.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2020",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.12.2020.pdf"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2021",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2021.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2021",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-30.06.2021.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2021",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-30.09.2021.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2021",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.12.2021.pdf"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2022",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2022.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2022",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2022",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-30.09.2022.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2022",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.12.2022.pdf"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2023",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2023.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2023",
    "pdf": "Board-Meeting-Notice-for-the-Quarter-Ended-30.06.2023.pdf"
  },
  {
    "title": "Board Meeting Notice regarding Annual General Meeting Approval",
    "pdf": "Intimation-of-Board-Meeting-to-be-held-on-04.09.2023.pdf"
  },
  {
    "title": "Board Meeting Notice for Resignation of Independent Director",
    "pdf": "Board-Meeting-Notice-for-consideration-and-approval-of-resignation-of-Independent-Director.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2023",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2023",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2024",
    "pdf": "Board-Meeting-Notice-for-the-year-ended-31.03.2024 (1).pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2024",
    "pdf": "#"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2024",
    "pdf": "Board-Meeting-Notice-for-the-quarter-and-half-year-ended-30.09.2024_compressed.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2024",
    "pdf": "Board-Meeting-Notice-for-the-quarter-ended-31.12.2024_compressed.pdf"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2025",
    "pdf": "Board-Meeting-Notice-for-the-year-ended-31.03.2025_compressed.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2025",
    "pdf": "Board-Meeting-Notice-for-the-quarter-ended-30.06.2025_compressed.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2025",
    "pdf": "Board Meeting Notice for the Quarter and Half Year ended 30.09.2025.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 31.12.2025",
    "pdf": "Board Meeting Notice for the Quarter ended 31.12.2025.pdf"
  },
  {
    "title": "Board Meeting Notice for the Year ended 31.03.2026",
    "pdf": "Board Meeting Notice for the Year ended 31.03.2026.pdf"
  },
  {
    "title": "Board Meeting Notice for the Quarter ended 30.06.2026",
    "pdf": "Board Meeting Notice for the Quarter ended 30.06.2026 (1).pdf"
  }
];

const VOTING_RESULTS = [
  {
    "title": "Results of 27th AGM with Scrutinizer’s Report",
    "pdf": "Results_of_27th_AGM_with_Scrutinizers_report.pdf"
  },
  {
    "title": "Results of 28th AGM with Scrutinizer’s Report",
    "pdf": "Results_of_28th_AGM_with_Scrutinizers_report.pdf"
  },
  {
    "title": "Results of 29th AGM with Scrutinizer’s Report",
    "pdf": "Results_on_29th_AGM_with_Scrutinizers_Report.pdf"
  },
  {
    "title": "Results of 30th AGM with Scrutinizer’s Report",
    "pdf": "Results_of_30th_AGM_with_Scrutinizers_Report.pdf"
  },
  {
    "title": "Results of 31st AGM with Scrutinizer’s Report",
    "pdf": "#"
  },
  {
    "title": "Results of 32nd AGM with Scrutinizer’s Report",
    "pdf": "Results-of-32nd-AGM-with-Scrutinizers-Report.pdf"
  },
  {
    "title": "Results of 33rd AGM with Scrutinizer’s Report",
    "pdf": "Results-of-33rd-AGM-with-Scrutinizers-Report.pdf"
  },
  {
    "title": "Results of 34th AGM with Scrutinizer’s Report",
    "pdf": "Results-of-34th-AGM-with-Scrutinizers-Report-1.pdf"
  },
  {
    "title": "Results of 35th AGM with Scrutinizer’s Report",
    "pdf": "Results-of-35th-AGM-with-Scrutinizers-report.pdf"
  },
  {
    "title": "Results of 36th AGM with Scrutinizer’s Report",
    "pdf": "Voting Results with Scrutinizers Report.pdf"
  },
  {
    "title": "Results of 37th AGM with Scrutinizers Report",
    "pdf": "Results of 37th AGM with Scrutinizers Report.pdf"
  }
];

const POLICIES = [
  {
    "title": "Policy for Determination of Material Events / Information Disclosure",
    "pdf": "POLICY_FOR_DETERMINATION_OF_MATERIALITY_OF_EVENT_OR_INFORMATION_FOR_DISCLOSURE.pdf"
  },
  {
    "title": "Preservation of Documents Policy",
    "pdf": "Preservation_of_Documents_Policy_and_Archival_Policy.pdf"
  },
  {
    "title": "Archival Policy",
    "pdf": "01.-archival-policy.pdf"
  },
  {
    "title": "Policy for Determination of Materiality",
    "pdf": "03.-policy-for-determination-of-materiality.pdf"
  },
  {
    "title": "Preservation Policy",
    "pdf": "02.-preservation-Policy.pdf"
  }
];

interface InvestorComplaint {
  period: string;
  pdf?: string;
}

const INVESTOR_COMPLAINT_PERIODS: InvestorComplaint[] = [
  { period: "December 2015", pdf: "Reg. 13(3) - Investor Complaints for December 2015.pdf" },
  { period: "March 2016", pdf: "Reg. 13(3) - Investor Complaints for March 2016.pdf" },
  { period: "June 2016", pdf: "Reg. 13(3) - Investor Complaints for June 2016.pdf" },
  { period: "September 2016", pdf: "Reg. 13(3) - Investor Complaints for September 2016.pdf" },
  { period: "December 2016", pdf: "Reg. 13(3) - Investor Complaints for December 2016.pdf" },
  { period: "March 2017", pdf: "Reg. 13(3) - Investor Complaints for March 2017.pdf" },
  { period: "June 2017", pdf: "Reg. 13(3) - Investor Complaints for June 2017.pdf" },
  { period: "September 2017", pdf: "Reg. 13(3) - Investor Complaints for September 2017.pdf" },
  { period: "December 2017", pdf: "Reg. 13(3) - Investor Complaints for December 2017.pdf" },
  { period: "December 2018", pdf: "Reg. 13(3) - Investor Complaints for December 2018.pdf" },
  { period: "March 2019", pdf: "Reg. 13(3) - Investor Complaints for March 2019.pdf" },
  { period: "June 2019", pdf: "Reg. 13(3) - Investor Complaints for June 2019.pdf" },
  { period: "September 2019", pdf: "Reg. 13(3) - Investor Complaints for September 2019.pdf" },
  { period: "December 2019", pdf: "Reg. 13(3) - Investor Complaints for December 2019.pdf" },
  { period: "March 2020", pdf: "Reg. 13(3) - Investor Complaints for March 2020.pdf" },
  { period: "June 2020", pdf: "Reg. 13(3) - Investor Complaints for June 2020.pdf" },
  { period: "September 2020", pdf: "Reg. 13(3) - Investor Complaints for September 2020.pdf" },
  { period: "December 2020", pdf: "Reg. 13(3) - Investor Complaints for December 2020.pdf" },
  { period: "March 2021", pdf: "Reg. 13(3) - Investor Complaints for March 2021.pdf" },
  { period: "June 2021", pdf: "Reg. 13(3) - Investor Complaints for June 2021.pdf" },
  { period: "September 2021", pdf: "Reg. 13(3) - Investor Complaints for September 2021.pdf" },
  { period: "March 2022", pdf: "Reg. 13(3) - Investor Complaints for March 2022.pdf" },
  { period: "September 2022", pdf: "Reg. 13(3) - Investor Complaints for September 2022.pdf" },
  { period: "December 2022", pdf: "Reg. 13(3) - Investor Complaints for December 2022.pdf" },
  { period: "March 2023", pdf: "Reg. 13(3) - Investor Complaints for March 2023.pdf" },
  { period: "June 2023", pdf: "Reg. 13(3) - Investor Complaints for June 2023.pdf" },
  { period: "September 2023", pdf: "Investor Complaints for September 2023.pdf" },
  { period: "December 2023", pdf: "Reg. 13(3) - Investor Complaints for December 2023.pdf" },
  { period: "March 2024", pdf: "Reg. 13(3) - Investor Complaints for March 2024.pdf" },
  { period: "June 2024", pdf: "sharmaeastjune24.pdf" },
  { period: "September 2024", pdf: "Reg. 13(3) - Investor Complaints for September 2024.pdf" },
  { period: "December 2024", pdf: "Sharmaeast_dec24.pdf" },
  { period: "March 2025", pdf: "Reg. 13(3) - Investor Complaints for March 2025.pdf" },
  { period: "June 2025", pdf: "SHARMAEAST_jUNE25.pdf" },
  { period: "September 2025", pdf: "Reg. 13(3) - Investor Complaints for September 2025.pdf" },
  { period: "December 2025", pdf: "Investor Complaints for December 2025.pdf" },
  { period: "June 2026", pdf: "Investor Complaints for June 2026.pdf" },
];

const REG27_2_NON_APPLICABILITY_CERT = [
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2017",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2017.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2018",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2018.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2019",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2019.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2020",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2020.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2020",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2020.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2020",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2020.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2021",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2021.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2021",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2021.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2021",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2021.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2021",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2021.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2022",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2022.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2022",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2022.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2022",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2022.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2022",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2022.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2023",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2023.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2023",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2023.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2023",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2023.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2023",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2023.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2024",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2024.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2024",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2024.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2024",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2024.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2024",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2024.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2025",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2025.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2025",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2025.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2025",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.09.2025.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2025",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.12.2025.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2026",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 31.03.2026.pdf"
  },
  {
    title: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2026",
    pdf: "Reg 27(2) Non-Applicability of Corporate Governance Certificate 30.06.2026.pdf"
  }
];

const REG74_5_COMPLIANCE_CERT = [
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2019",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2019.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2019",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2019.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2020",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2020.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2020",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2020.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.09.2020",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.09.2020.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2020",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2020.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2021",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2021.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.06.2021",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.06.2021.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.09.2021",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.09.2021.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2021",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2021.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2022",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2022.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.06.2022",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.06.2022.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.09.2022",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.09.2022.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2022",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.12.2022.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2023",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 31.03.2023.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.06.2023",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants ) Regulations, 2018 for 30.06.2023.pdf"
  },
  {
    title: "Compliance Certificate under Reg.  74 ( 5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.09.2023",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.09.2023.pdf"
  },
  {
    title: "Compliance Certificate under Reg.  74 ( 5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.12.2023",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.12.2023.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.03.2024",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.03.2024.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2024",
    pdf: "74(5) 30.06.2024.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.09.2024",
    pdf: "74(5) 30.09.2024.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.12.2024",
    pdf: "74(5) 31.12.2024.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.03.2025",
    pdf: "74(5) 31.03.2025.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2025",
    pdf: "74(5) 30.06.2025.pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.09.2025",
    pdf: "intimation under reg74(5).pdf"
  },
  {
    title: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.12.2025",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.12.2025.pdf"
  },
  {
    title: "Compliance Certificate under Reg.  74 ( 5) of SEBI (Depositories and Participants)  Regulations, 2018 for 31.03.2026",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 31.03.2026.pdf"
  },
  {
    title: "Compliance Certificate under Reg.  74 ( 5) of SEBI (Depositories and Participants)  Regulations, 2018 for 30.06.2026",
    pdf: "Compliance Certificate under Reg. 74 (5) of SEBI (Depositories and Participants) Regulations, 2018 for 30.06.2026.pdf"
  }
];

const REG76_AUDIT_REPORT = [
  {
    title: "Reconciliation of Share Capital 31.12.2015",
    pdf: "Reconciliation of Share Capital 31.12.2015.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2016",
    pdf: "Reconciliation of Share Capital 31.03.2016.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2016",
    pdf: "Reconciliation of Share Capital 30.06.2016.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2016",
    pdf: "Reconciliation of Share Capital 30.09.2016.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2016",
    pdf: "Reconciliation of Share Capital 31.12.2016.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2017",
    pdf: "Reconciliation of Share Capital 31.03.2017.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2017",
    pdf: "Reconciliation of Share Capital 30.06.2017.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2017",
    pdf: "Reconciliation of Share Capital 30.09.2017.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2017",
    pdf: "Reconciliation of Share Capital 31.12.2017.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2018",
    pdf: "Reconciliation of Share Capital 31.03.2018.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2018",
    pdf: "Reconciliation of Share Capital 30.06.2018.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2018",
    pdf: "Reconciliation of Share Capital 30.09.2018.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2018",
    pdf: "Reconciliation of Share Capital 31.12.2018.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2019",
    pdf: "Reconciliation of Share Capital 31.03.2019.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2019",
    pdf: "Reconciliation of Share Capital 30.06.2019.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2019",
    pdf: "Reconciliation of Share Capital 30.09.2019.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2019",
    pdf: "Reconciliation of Share Capital 31.12.2019.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2020",
    pdf: "Reconciliation of Share Capital 31.03.2020.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2020",
    pdf: "Reconciliation of Share Capital 30.06.2020.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2020",
    pdf: "Reconciliation of Share Capital 30.09.2020.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2020",
    pdf: "Reconciliation of Share Capital 31.12.2020.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2021",
    pdf: "Reconciliation of Share Capital 31.03.2021.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2021",
    pdf: "Reconciliation of Share Capital 30.06.2021.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2021",
    pdf: "Reconciliation of Share Capital 30.09.2021.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2021",
    pdf: "Reconciliation of Share Capital 31.12.2021.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2022",
    pdf: "Reconciliation of Share Capital 31.03.2022.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2022",
    pdf: "Reconciliation of Share Capital 30.06.2022.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2022",
    pdf: "Reconciliation of Share Capital 30.09.2022.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2022",
    pdf: "Reconciliation of Share Capital 31.12.2022.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2023",
    pdf: "Reconciliation of Share Capital 31.03.2023.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2023",
    pdf: "Reconciliation of Share Capital 30.06.2023.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2023",
    pdf: "Reconciliation of Share Capital 30.09.2023.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2023",
    pdf: "Reconciliation of Share Capital 31.12.2023.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2024",
    pdf: "Reconciliation of Share Capital 31.03.2024.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2024",
    pdf: "Reconciliation of Share Capital 30.06.2024.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2024",
    pdf: "Reconciliation of Share Capital 30.09.2024.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2024",
    pdf: "Reconciliation of Share Capital 31.12.2024.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2025",
    pdf: "Reconciliation of Share Capital 31.03.2025.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2025",
    pdf: "Reconciliation of Share Capital 30.06.2025.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.09.2025",
    pdf: "Reconciliation of Share Capital 30.09.2025.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.12.2025",
    pdf: "Reconciliation of Share Capital 31.12.2025.pdf"
  },
  {
    title: "Reconciliation of Share Capital 31.03.2026",
    pdf: "Reconciliation of Share Capital 31.03.2026.pdf"
  },
  {
    title: "Reconciliation of Share Capital 30.06.2026",
    pdf: "Reconciliation of Share Capital 30.06.2026.pdf"
  }
];

// PDF paths are now explicitly mapped above

const CorporateGovernancePage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Corporate Governance – Jaipur Hospital
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
              Disclosures, board meeting notices, voting results, policies and investor information of
              Sharma East India Hospitals &amp; Medical Research Limited.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width max-w-5xl space-y-10">
            {/* Board Meeting Notices */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Notice of Board Meeting
              </h2>
              <p className="text-muted-foreground mb-4">
                The following board meeting notices are available for different quarters and financial years.
              </p>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <ul className="space-y-3">
                  {BOARD_MEETING_NOTICES.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={item.pdf === "#" ? "#" : `/Corporate_goverance/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Voting Results */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Voting Results</h2>
              <p className="text-muted-foreground mb-4">
                Voting results of Annual General Meetings are available for the following years.
              </p>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <ul className="space-y-3">
                  {VOTING_RESULTS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={item.pdf === "#" ? "#" : `/Corporate_goverance/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Policies */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Policies</h2>
              <p className="text-muted-foreground mb-4">
                The hospital follows various corporate policies including:
              </p>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <ul className="space-y-3">
                  {POLICIES.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={item.pdf === "#" ? "#" : `/Corporate_goverance/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Regulation 13(3) – Investor Complaints */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Regulation 13(3) – Investor Complaints
              </h2>
              <p className="text-muted-foreground mb-4">
                Investor complaint reports are available for the following quarters:
              </p>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {INVESTOR_COMPLAINT_PERIODS.map((item) => (
                    <a
                      key={item.period}
                      href={item.pdf ? `/Corporate_goverance/${item.pdf}` : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-primary underline-offset-2 hover:underline"
                    >
                      <FileText className="w-4 h-4 text-primary" />
                      <span>{item.period}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Regulation 27(2) Non-Applicability of Corporate Governance Certificate */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Regulation 27(2) Non-Applicability of Corporate Governance Certificate
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <ul className="space-y-3">
                  {REG27_2_NON_APPLICABILITY_CERT.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={`/Non- Applicabilityof _Certificate/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Compliance Certificate under Reg. 74(5) */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Compliance Certificate under Reg.  74 ( 5) of SEBI (Depositories and Participants ) Regulations, 2018
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <ul className="space-y-3">
                  {REG74_5_COMPLIANCE_CERT.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={`/ComplianceCertificateunderReg. 74( 5)/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Regulation 76 (DP) - Reconciliation of Share Capital Audit Report */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Regulation 76 (DP) - Reconciliation of Share Capital Audit Report
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6">
                <ul className="space-y-3">
                  {REG76_AUDIT_REPORT.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={`/Reg.76Audit/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Corporate Announcements */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Corporate Announcements
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Announcement under Regulation 30 (LODR) – Change in Directorate
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Intimation of Annual General Meeting and Voting Details
                  </p>
                </div>
              </div>
            </section>

            {/* Grievance Redressal Mechanism / Cell */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Grievance Redressal Mechanism / Cell
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6 space-y-4">
                <p className="text-muted-foreground">
                  For investor and shareholder grievances, please contact:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    Mrs. Bhawana Sharma
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Company Secretary &amp; Compliance Officer
                  </p>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Jaipur Hospital</p>
                  <p>Near SMS Stadium</p>
                  <p>Lal Kothi, Tonk Road</p>
                  <p>Jaipur – 302015, Rajasthan</p>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>0141-2742557, 0141-2742266</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>jaipurhospital_lalkothi@rediffmail.com</span>
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

export default CorporateGovernancePage;

