import { useParams, Link } from "react-router-dom";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { ChevronRight, ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

interface Metric {
  label: string;
  value: string;
}

interface ProjectDetail {
  title: string;
  category: string;
  date: string;
  client: string;
  address: string;
  techDesc: string;
  techFeaturesLabel: string;
  techFeatures: string[];
  challenges: string;
  solution: string;
  metricsLabel: string;
  metrics: Metric[];
  benefitsLabel: string;
  benefits: string[];
}

const projectDetails: Record<string, ProjectDetail> = {
  "1": {
    title: "Heart Failure Management",
    category: "Doctors",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that is highly reliable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Technology Features",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home Service on Video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing product making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. We focus on a normal distribution of products to ensure the technology is both affordable and effective.",
    metricsLabel: "Performance Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Benefits & Services",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "2": {
    title: "Blood Pressure Monitoring",
    category: "Healthcare",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly unbelievable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Featured Services",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops best version and new upgrades.",
      "Home Service on Video: Healthcare technology develops best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. By focusing on a professional layout and normal distribution of medical products, we ensure the technology remains effective and user-friendly.",
    metricsLabel: "Performance & Capacity Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Highlights",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "3": {
    title: "24/7 Monitoring and Care",
    category: "Monitor",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Technology Services",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home service on video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. By focusing on professional cardio monitoring and specialized recovery plans, we ensure top-tier care for every patient.",
    metricsLabel: "Performance Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Features",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "4": {
    title: "Optimization of Therapy",
    category: "Assistance",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Technology Features",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home Service on Video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. By focusing on therapeutic optimization and precise monitoring, we ensure the highest standards of patient care.",
    metricsLabel: "Performance & Specialist Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Service Commitments",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "5": {
    title: "Valve Implantation",
    category: "Treatment",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Featured Cardiac Technologies",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home service on video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. We focus on delivering high-end surgical solutions and valve treatments using the latest clinical upgrades.",
    metricsLabel: "Success Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Features & Commitments",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "6": {
    title: "Children’s Heart Surgery",
    category: "Saving Lives",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Featured Pediatric Cardiac Technologies",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home service on video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. We focus on providing life-saving surgical solutions for children, ensuring high recovery rates through specialized pediatric care.",
    metricsLabel: "Project Success Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Commitments",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "7": {
    title: "Latest Equipment Surgery",
    category: "Healthcare",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Technology Highlights",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home service on video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. We ensure that our surgical equipment and facilities are at the cutting edge of medical advancement.",
    metricsLabel: "Success & Specialization Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Operational Features",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "8": {
    title: "Heart Transplant Carefully",
    category: "Treatment",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Technology Highlights",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home service on video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. We prioritize precision and careful management throughout the transplant process to ensure patient safety and successful outcomes.",
    metricsLabel: "Clinical Performance Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Operational Features",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing to the hospital's children patients.",
      "Home services provided via video conference with patients."
    ]
  },
  "9": {
    title: "Recognized Cardiologists",
    category: "Doctors",
    date: "June 20, 2019",
    client: "Envato Group, US",
    address: "2946 Angus Road, NY",
    techDesc: "There are many variations of passages of healthcare Technologies available, but the majority have suffered alteration in some conditions by the injected heart hospital. This heart hospital is awesome and provides technology that doesn’t look even slightly believable. If you are going to use a passage of heart hospital, you need to be sure about the hospital.",
    techFeaturesLabel: "Technology Features",
    techFeatures: [
      "Heart Rate Monitor: Healthcare technology develops the best version and new upgrades.",
      "Home service on video: Healthcare technology develops the best version and new upgrades.",
      "Blood Pressure Measure: Healthcare technology develops the best version and new upgrades."
    ],
    challenges: "Healthcare technology develops the best versions and new upgrades available. It is a long-established fact that people will be distracted by the latest upgrade technology when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of products, as opposed to using affordable and re-installing products making it look like great technology.",
    solution: "Healthcare technology develops the best version and new upgrades available. We connect patients with recognized cardiologists and integrate advanced monitoring systems to ensure continuous heart health management.",
    metricsLabel: "Performance Metrics",
    metrics: [
      { label: "Cardio Monitoring", value: "80%" },
      { label: "Patients Recovery", value: "70%" },
      { label: "Heart Specialists", value: "90%" }
    ],
    benefitsLabel: "Key Commitments",
    benefits: [
      "Healthcare technology develops new versions and upgrades.",
      "Top-level heart treatment specialist doctors are invited.",
      "Free reliable quality medicines are available during OPD hours.",
      "Easy and affordable billing for the hospital's pediatric patients.",
      "Home services provided via video conference with patients."
    ]
  }
};

const ProjectStyle2DetailPage = () => {
  const { id } = useParams();
  const data = id ? projectDetails[id] : null;

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="internal-hero-pt pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              {data.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <Link to="/project-style-2" className="hover:text-white transition-colors">Projects</Link>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">{data.title}</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Project Overview
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-surface">
          <div className="container-width max-w-5xl mx-auto">
            <Link to="/project-style-2" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mb-12">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-12">
                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gradient-surface rounded-3xl overflow-hidden shadow-md flex items-center justify-center">
                   <span className="font-display font-bold text-foreground/40 text-2xl">{data.title}</span>
                </div>

                {/* Latest Technology */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold text-foreground">Latest Technology</h2>
                  <p className="text-muted-foreground leading-relaxed">{data.techDesc}</p>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mt-6">{data.techFeaturesLabel}:</h3>
                  <ul className="space-y-3 mt-4">
                    {data.techFeatures.map((feature: string, idx: number) => {
                      const splitText = feature.split(":");
                      return (
                        <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>
                            {splitText.length > 1 ? (
                              <>
                                <strong className="text-foreground">{splitText[0]}:</strong> {splitText[1]}
                              </>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Project Challenges */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold text-foreground">Project Challenges</h2>
                  <p className="text-muted-foreground leading-relaxed">{data.challenges}</p>
                </div>

                {/* Project Solution */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold text-foreground">Project Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">{data.solution}</p>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mt-8">{data.benefitsLabel}:</h3>
                  <ul className="space-y-3 mt-4">
                    {data.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Area */}
              <div className="lg:col-span-1 space-y-8">
                {/* Project Info Card */}
                <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6 pb-4 border-b border-border">
                    Project Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Date</h4>
                      <p className="font-medium text-foreground">{data.date}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Client</h4>
                      <p className="font-medium text-foreground">{data.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Category</h4>
                      <p className="font-medium text-foreground">{data.category}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Address</h4>
                      <p className="font-medium text-foreground">{data.address}</p>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics Card */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-display font-bold mb-6 pb-4 border-b border-primary-foreground/20">
                    {data.metricsLabel}
                  </h3>
                  <div className="space-y-6">
                    {data.metrics.map((metric: Metric, idx: number) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between font-medium">
                          <span>{metric.label}</span>
                          <span>{metric.value}</span>
                        </div>
                        <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                          <div 
                            className="bg-primary-foreground h-2 rounded-full" 
                            style={{ width: metric.value }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

export default ProjectStyle2DetailPage;
