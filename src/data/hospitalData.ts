// Doctor images are served from public/DrImages/ (path: /DrImages/filename)
// "No Image" doctors use /placeholder.svg for production-safe URLs
const getDoctorImg = (imageFile: string) =>
  imageFile && imageFile !== "No Image" ? `/DrImages/${imageFile}` : "/placeholder.svg";

import heartImg from "@/assets/service-heart.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";
import icuImg from "@/assets/facility-icu.jpg";
import plasticImg from "@/assets/service-plastic-surgery.jpg";
import entImg from "@/assets/service-ent.jpg";
import ophthalmologyImg from "@/assets/service-ophthalmology.jpg";
import pathologyImg from "@/assets/service-pathology.jpg";

export interface Doctor {
  id: string;
  img: string;
  name: string;
  qual: string;
  dept: string;
  exp: string;
  designation?: string;
  bio: string;
  education: string[];
  specializations: string[];
  schedule: { day: string; time: string }[];
  languages: string[];
}

export interface Speciality {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  color: string;
  bg: string;
  treatments: string[];
  doctorIds: string[];
  img: string;
  htmlContent?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const HOSPITAL_CONTACT = {
  address: "Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015, Rajasthan",
  phones: ["0141-2741465", "0141-2742619", "0141-2742577", "0141-2742266", "+91 92570 29901"],
  primaryPhone: "0141-2741465",
  whatsapp: "919257029901",
  email: "Jaipurhospitallalkothi@gmail.com",
  opdTimings: "9:00 AM – 8:00 PM",
  emergencyTimings: "24/7",
  mapQuery: "Jaipur+Hospital+Lal+Kothi+Tonk+Road+Jaipur",
};

export const HOSPITAL_MISSION = {
  mission: "Our mission is to improve the quality of health care and become the most revered healthcare service provider.",
  vision: "To create a world-class integrated healthcare delivery system, entailing the finest medical skills combined with compassionate patient care. Jaipur Hospital is driven by the vision of becoming a regional leader in the integrated healthcare delivery space and the larger purpose of saving and enriching lives through clinical excellence.",
  values: [
    { title: "Patient Centricity", desc: "Commit to 'best outcomes and experience' for our patients. Treat patients and their caregivers with compassion, care and understanding. Our patients' needs will come first." },
    { title: "Integrity", desc: "Be principled, open and honest. Model and live our 'Values'. Demonstrate moral courage to speak up and do the right things." },
    { title: "Teamwork", desc: "Proactively support each other and operate as one team. Respect and value people at all levels with different opinions, experiences and backgrounds." },
    { title: "Ownership", desc: "Be responsible and take pride in our actions. Take initiative and go beyond the call of duty. Deliver commitment and agreement made." },
    { title: "Innovation", desc: "Continuously improve and innovate to exceed expectations. Adopt a 'can-do' attitude. Challenge ourselves to do things differently." },
  ],
};

// Build education array from qual string (comma-separated)
const educationFromQual = (qual: string) => qual.split(",").map((s) => s.trim()).filter(Boolean);

export const doctors: Doctor[] = [
  {
    id: "dr-deepak-kumar",
    img: getDoctorImg("deepak.jpg"),
    name: "Dr. Deepak Kumar",
    qual: "Cardiac Anesthesist, MBBS, MD (Anaesthesia)",
    dept: "Anaesthesia",
    designation: "Cardiac Anesthesist",
    exp: "Experienced",
    bio: "Dr. Deepak Kumar is a Cardiac Anesthesist with qualifications in MBBS and MD (Anaesthesia), providing expert anaesthesia care for cardiac procedures.",
    education: educationFromQual("MBBS, MD (Anaesthesia)"),
    specializations: ["Cardiac Anaesthesia", "Critical Care"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-shailendra-sharma",
    img: getDoctorImg("sss-600x700.jpg"),
    name: "Dr. Shailendra Sharma",
    qual: "Managing Director & Senior Consultant Orthopaedic, MBBS, MS (Orthopedics)",
    dept: "Orthopaedics",
    designation: "Managing Director & Senior Consultant Orthopaedic",
    exp: "Experienced",
    bio: "Dr. Shailendra Sharma is the Managing Director and Senior Consultant Orthopaedic at Jaipur Hospital, with MBBS and MS (Orthopedics).",
    education: educationFromQual("MBBS, MS (Orthopedics)"),
    specializations: ["Orthopaedic Surgery", "Joint Replacement", "Trauma"],
    schedule: [{ day: "Mon – Sat", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-karan-sharma",
    img: getDoctorImg("No Image"),
    name: "Dr. Karan Sharma",
    qual: "MBBS, MS (Orthopedics), DNB (Orthopedics), M.Ch (Ortho)",
    dept: "Orthopaedics",
    exp: "Experienced",
    bio: "Dr. Karan Sharma is an orthopaedic surgeon with MBBS, MS (Orthopedics), DNB (Orthopedics), and M.Ch (Ortho).",
    education: educationFromQual("MBBS, MS (Orthopedics), DNB (Orthopedics), M.Ch (Ortho)"),
    specializations: ["Orthopaedic Surgery", "Joint Replacement"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-rajiv-sharma",
    img: getDoctorImg("No Image"),
    name: "Dr. Rajiv Sharma",
    qual: "MBBS, MS (Orthopedics)",
    dept: "Orthopaedics",
    exp: "Experienced",
    bio: "Dr. Rajiv Sharma is an orthopaedic surgeon with MBBS and MS (Orthopedics).",
    education: educationFromQual("MBBS, MS (Orthopedics)"),
    specializations: ["Orthopaedic Surgery"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-pramod-kumar-jain",
    img: getDoctorImg("p-1-600x700.jpg"),
    name: "Dr. Pramod Kumar Jain",
    qual: "MBBS, MS (Orthopedics)",
    dept: "Orthopaedics",
    exp: "Experienced",
    bio: "Dr. Pramod Kumar Jain is an orthopaedic surgeon with MBBS and MS (Orthopedics).",
    education: educationFromQual("MBBS, MS (Orthopedics)"),
    specializations: ["Orthopaedic Surgery"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-suhasini-shitoot",
    img: getDoctorImg("s-600x700.jpg"),
    name: "Dr. Suhasini Shitoot",
    qual: "MBBS, DGO, MD (Obstetric & Gynaecology)",
    dept: "Gynaecology",
    exp: "Experienced",
    bio: "Dr. Suhasini Shitoot specializes in Obstetric & Gynaecology with MBBS, DGO, and MD (Obstetric & Gynaecology).",
    education: educationFromQual("MBBS, DGO, MD (Obstetric & Gynaecology)"),
    specializations: ["Obstetrics", "Gynaecology"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-rohit-kumar-goyal",
    img: getDoctorImg("No Image"),
    name: "Dr. Rohit Kumar Goyal",
    qual: "MBBS, MS (Orthopedics), Fellowship in Shoulder Surgery & Sports Medicine, Fellowship in Paediatric Orthopaedics",
    dept: "Orthopaedics",
    exp: "Experienced",
    bio: "Dr. Rohit Kumar Goyal is an orthopaedic surgeon with fellowship training in Shoulder Surgery, Sports Medicine, and Paediatric Orthopaedics.",
    education: educationFromQual("MBBS, MS (Orthopedics)"),
    specializations: ["Shoulder Surgery", "Sports Medicine", "Paediatric Orthopaedics"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-pushpendra-prasad-garg",
    img: getDoctorImg("No Image"),
    name: "Dr. Pushpendra Prasad Garg",
    qual: "MBBS, MD (General Medicine)",
    dept: "General Medicine",
    exp: "Experienced",
    bio: "Dr. Pushpendra Prasad Garg is a physician with MBBS and MD (General Medicine).",
    education: educationFromQual("MBBS, MD (General Medicine)"),
    specializations: ["General Medicine"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-r-l-modi",
    img: getDoctorImg("rl-600x700.jpg"),
    name: "Dr. R. L. Modi",
    qual: "MBBS, MD (General Medicine)",
    dept: "General Medicine",
    exp: "Experienced",
    bio: "Dr. R. L. Modi is a physician with MBBS and MD (General Medicine).",
    education: educationFromQual("MBBS, MD (General Medicine)"),
    specializations: ["General Medicine"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-mayank-gupta",
    img: getDoctorImg("m-600x700.jpg"),
    name: "Dr. Mayank Gupta",
    qual: "MBBS, MD (General Medicine)",
    dept: "General Medicine",
    exp: "Experienced",
    bio: "Dr. Mayank Gupta is a physician with MBBS and MD (General Medicine).",
    education: educationFromQual("MBBS, MD (General Medicine)"),
    specializations: ["General Medicine"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-sandeep-sharma",
    img: getDoctorImg("No Image"),
    name: "Dr. Sandeep Sharma",
    qual: "MBBS, MD (Internal Medicine)",
    dept: "General Medicine",
    exp: "Experienced",
    bio: "Dr. Sandeep Sharma specializes in Internal Medicine with MBBS and MD (Internal Medicine).",
    education: educationFromQual("MBBS, MD (Internal Medicine)"),
    specializations: ["Internal Medicine"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-srikant-bulakh",
    img: getDoctorImg("ss-600x700.jpg"),
    name: "Dr. Srikant Bulakh",
    qual: "MBBS, MS (General Surgery)",
    dept: "General Surgery",
    exp: "Experienced",
    bio: "Dr. Srikant Bulakh is a general surgeon with MBBS and MS (General Surgery).",
    education: educationFromQual("MBBS, MS (General Surgery)"),
    specializations: ["General Surgery"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-mansimrat-paul-singh",
    img: getDoctorImg("No Image"),
    name: "Dr. Mansimrat Paul Singh",
    qual: "MBBS, MS (General Surgery)",
    dept: "General Surgery",
    exp: "Experienced",
    bio: "Dr. Mansimrat Paul Singh is a general surgeon with MBBS and MS (General Surgery).",
    education: educationFromQual("MBBS, MS (General Surgery)"),
    specializations: ["General Surgery"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-arun-mathur",
    img: getDoctorImg("No Image"),
    name: "Dr. Arun Mathur",
    qual: "MBBS, MS, MCh (Plastic Surgery)",
    dept: "Plastic Surgery",
    exp: "Experienced",
    bio: "Dr. Arun Mathur is a plastic surgeon with MBBS, MS, and MCh (Plastic Surgery).",
    education: educationFromQual("MBBS, MS, MCh (Plastic Surgery)"),
    specializations: ["Plastic Surgery", "Reconstructive Surgery"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-dinesh-kumar-dalmia",
    img: getDoctorImg("k-600x700.jpg"),
    name: "Dr. Dinesh Kumar Dalmia",
    qual: "MBBS, MD (Paediatric)",
    dept: "Pediatrics",
    exp: "Experienced",
    bio: "Dr. Dinesh Kumar Dalmia is a paediatrician with MBBS and MD (Paediatric).",
    education: educationFromQual("MBBS, MD (Paediatric)"),
    specializations: ["Paediatrics"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-kamal-kant-khandelwal",
    img: getDoctorImg("dd-600x700.jpg"),
    name: "Dr. Kamal Kant Khandelwal",
    qual: "MBBS, MD (Paediatric)",
    dept: "Pediatrics",
    exp: "Experienced",
    bio: "Dr. Kamal Kant Khandelwal is a paediatrician with MBBS and MD (Paediatric).",
    education: educationFromQual("MBBS, MD (Paediatric)"),
    specializations: ["Paediatrics"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-pavan-kumar-shorey",
    img: getDoctorImg("p-600x700.jpg"),
    name: "Dr. Pavan Kumar Shorey",
    qual: "MBBS, MS (Ophthalmology)",
    dept: "Ophthalmology",
    exp: "Experienced",
    bio: "Dr. Pavan Kumar Shorey is an ophthalmologist with MBBS and MS (Ophthalmology).",
    education: educationFromQual("MBBS, MS (Ophthalmology)"),
    specializations: ["Ophthalmology", "Eye Care"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-anita-kothari",
    img: getDoctorImg("a-600x700.jpg"),
    name: "Dr. Anita Kothari",
    qual: "MBBS, MS (ENT)",
    dept: "ENT",
    exp: "Experienced",
    bio: "Dr. Anita Kothari is an ENT specialist with MBBS and MS (ENT).",
    education: educationFromQual("MBBS, MS (ENT)"),
    specializations: ["ENT", "Ear, Nose & Throat"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-ramesh-gupta",
    img: getDoctorImg("No Image"),
    name: "Dr. Ramesh Gupta",
    qual: "MBBS, MD (Anaesthesia)",
    dept: "Anaesthesia",
    exp: "Experienced",
    bio: "Dr. Ramesh Gupta is an anaesthetist with MBBS and MD (Anaesthesia).",
    education: educationFromQual("MBBS, MD (Anaesthesia)"),
    specializations: ["Anaesthesia"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-anu-agarwal",
    img: getDoctorImg("an-600x700.jpg"),
    name: "Dr. Anu Agarwal",
    qual: "MBBS, MD (Anaesthesia)",
    dept: "Anaesthesia",
    exp: "Experienced",
    bio: "Dr. Anu Agarwal is an anaesthetist with MBBS and MD (Anaesthesia).",
    education: educationFromQual("MBBS, MD (Anaesthesia)"),
    specializations: ["Anaesthesia"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-deepak-kumar-anaesthesia",
    img: getDoctorImg("No Image"),
    name: "Dr. Deepak Kumar",
    qual: "MBBS, MD (Anaesthesia)",
    dept: "Anaesthesia",
    exp: "Experienced",
    bio: "Dr. Deepak Kumar is an anaesthetist with MBBS and MD (Anaesthesia).",
    education: educationFromQual("MBBS, MD (Anaesthesia)"),
    specializations: ["Anaesthesia"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-savita-kumari",
    img: getDoctorImg("s-1-600x700.jpg"),
    name: "Dr. Savita Kumari",
    qual: "MBBS, MD (Pathology)",
    dept: "Pathology",
    exp: "Experienced",
    bio: "Dr. Savita Kumari is a pathologist with MBBS and MD (Pathology).",
    education: educationFromQual("MBBS, MD (Pathology)"),
    specializations: ["Pathology", "Diagnostics"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-bhavesh-meel",
    img: getDoctorImg("b-600x700.jpg"),
    name: "Dr. Bhavesh Meel",
    qual: "MBBS, MD, DNB (Cardiology)",
    dept: "Cardiology",
    exp: "Experienced",
    bio: "Dr. Bhavesh Meel is a cardiologist with MBBS, MD, and DNB (Cardiology).",
    education: educationFromQual("MBBS, MD, DNB (Cardiology)"),
    specializations: ["Cardiology", "Heart Care"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-ram-singh-yadav",
    img: getDoctorImg("ram.jpg"),
    name: "Dr. Ram Singh Yadav",
    qual: "MBBS, MCh (Cardiac Thoracic Surgery)",
    dept: "Cardiology",
    exp: "Experienced",
    bio: "Dr. Ram Singh Yadav is a cardiac thoracic surgeon with MBBS and MCh (Cardiac Thoracic Surgery).",
    education: educationFromQual("MBBS, MCh (Cardiac Thoracic Surgery)"),
    specializations: ["Cardiac Thoracic Surgery", "CTVS"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
  {
    id: "dr-divya-meel",
    img: getDoctorImg("d.jpg"),
    name: "Dr. Divya Meel",
    qual: "MBBS, MD (Radiology)",
    dept: "Diagnostics",
    exp: "Experienced",
    bio: "Dr. Divya Meel is a radiologist with MBBS and MD (Radiology).",
    education: educationFromQual("MBBS, MD (Radiology)"),
    specializations: ["Radiology", "Diagnostic Imaging"],
    schedule: [{ day: "Mon – Fri", time: "9:00 AM – 8:00 PM" }],
    languages: ["Hindi", "English"],
  },
];

export const specialities: Speciality[] = [
  {
    id: "orthopaedics",
    name: "Orthopedic Surgery with Joint Replacement",
    shortDesc: "Joint & bone surgery",
    fullDesc: "Expert orthopedic care for bones, joints, and muscles. Restore mobility, relieve pain, and regain your active lifestyle.",
    icon: "Bone",
    color: "text-orange-500",
    bg: "bg-orange-50",
    treatments: ["Total Knee Replacement", "Total Hip Replacement", "Arthroscopic Surgery", "Spine Surgery", "Fracture Management", "Sports Injury Treatment"],
    doctorIds: ["dr-shailendra-sharma", "dr-pramod-kumar-jain", "dr-karan-sharma", "dr-rajiv-sharma", "dr-rohit-kumar-goyal"],
    img: icuImg,
    metaTitle: "Orthopedic & Joint Replacement Surgery in Jaipur | Jaipur Hospital",
    metaDescription: "Expert orthopedic doctors in Jaipur for knee, hip & shoulder replacement, fracture care & sports injuries. Cashless treatment available. Book now!",
    htmlContent: `<h1>Orthopedic Surgery and Joint Replacement in Jaipur | Jaipur Hospital</h1>

<h2>Why People Come to Us for Orthopedic Care</h2>
<p>Families living in Jaipur or nearby areas come to Jaipur Hospital because they know about the service we have been providing for the last 20 years. If you or someone from your family needs a bone specialist in Jaipur, just come to us.</p>

<p>We offer our service to everyone regardles off their age. It could be anyone, such as:</p>
<ul>
  <li>A young athlete who is dealing with ligament damage</li>
  <li>An older adult who needs joint replacement surgery.</li>
</ul>

<p>We always start with non-surgical options and suggest an operation when it is clearly needed and when it will bring a real improvement to the patient's daily life.</p>

<h2>Conditions We Treat</h2>
<p>Our orthopedic department at Jaipur Hospital manages many different bone, joint, and muscle conditions, including:</p>
<ul>
  <li>Knee and hip arthritis</li>
  <li>Ligament tears and sports injuries</li>
  <li>Fractures and trauma-related injuries</li>
  <li>Spinal disorders, including slip disc and spondylitis</li>
  <li>Shoulder injuries and rotator cuff problems</li>
  <li>Foot and ankle conditions</li>
  <li>Bone infections and tumours</li>
  <li>Osteoporosis-related complications</li>
</ul>

<p>Jaipur Hospital is undoubtedly the best choice if you are looking to get in touch with an orthopedic doctor in Jaipur who is well-experienced to handle cases from basic to complex.</p>

<h2>Joint Replacement Surgery in Jaipur</h2>
<p>Joint replacement counts as one of the biggest advances in orthopedic treatment. Once a joint gets so worn out that simple moves like walking, going up stairs, or rising from a seat cause real pain, this surgery can bring back normal movement and greatly improve quality of life.</p>

<p>At Jaipur Hospital, we carry out:</p>

<h3>Knee Replacement Surgery</h3>
<p>Knee replacement stands as the most frequent joint replacement we do. Whether the patient needs a partial knee replacement or a total knee replacement, our surgeons work with modern implants built to hold up well and feel comfortable. People who visit us as a knee replacement hospital in Jaipur often say they notice much better movement just a few months after the procedure.</p>

<h3>Hip Replacement Surgery</h3>
<p>Arthritis or broken bones in the hip area can cut down your ability to get around. Our hip replacement methods rely on minimally invasive approaches when suitable so patients recover faster and feel less pain afterward.</p>

<h3>Shoulder Replacement</h3>
<p>Patients facing serious shoulder arthritis or tough fractures can benefit from shoulder joint replacement, another field where our team has solid experience.</p>

<p>Our joint replacement surgery in Jaipur programme covers pre-surgery guidance, thorough scans and assessment, the operation with imported implants, plus a clear physiotherapy-based recovery schedule.</p>

<h2>Our Orthopedic Team and Infrastructure</h2>
<p>Jaipur Hospital earns its name as an orthopedic hospital in Jaipur thanks to strong doctors and solid facilities. Our orthopedic unit comes prepared with:</p>
<ul>
  <li>Modular operation theatres with HEPA filtration for infection control</li>
  <li>Digital X-ray and MRI for precise diagnosis</li>
  <li>In-house physiotherapy and post-surgery rehabilitation</li>
  <li>ICU support for complex surgical cases</li>
</ul>

<p>Our team consists of specialists who have trained at well-known centers around India. They have handled standard orthopedic work along with follow-up surgeries for patients whose first procedures did not work out as hoped.</p>

<h2>Cashless Treatment and Insurance</h2>
<p>Being listed under Ayushman Bharat, CGHS, and ECHS means we provide cashless orthopedic care, including joint replacement surgeries, for those who qualify. This helps many households that feel stressed about surgery expenses.</p>

<p>If your coverage falls under these programs or comes through a TPA-linked insurance plan, our patient coordinator team will explain the steps and handle the forms so you can put all your energy into recovery.</p>

<h2>When Should You See an Orthopedic Doctor?</h2>
<p>A lot of people wait too long before going to an orthopedic hospital in Jaipur, hoping the discomfort will fade by itself. Getting checked early usually means easier options that do not need major procedures. You should talk to an orthopedic specialist when you notice:</p>
<ul>
  <li>Joint or bone pain that has lasted more than a few weeks</li>
  <li>Swelling, stiffness, or reduced range of motion in any joint</li>
  <li>Difficulty walking, standing, or doing routine tasks</li>
  <li>A history of fractures or injuries that did not heal properly</li>
  <li>Signs of bone deformity or limb length difference</li>
</ul>

<h2>Book Your Appointment</h2>
<p>Jaipur Hospital OPD is open from 9 AM to 8 PM, Monday to Saturday. For emergencies, our ortho team is available around the clock.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/>
<strong>Call Us:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Do not let joint pain limit your life. Reach out to our bone specialist in Jaipur today and take the first step toward a more active, pain-free life.</p>`,
  },
  {
    id: "cardiology",
    name: "Cardiology & CTVS",
    shortDesc: "Heart & vascular care",
    fullDesc: "Comprehensive cardiology and CTVS care. Expert heart and vascular treatments to ensure a healthier, stronger heart for life.",
    icon: "Heart",
    color: "text-red-500",
    bg: "bg-red-50",
    treatments: ["Coronary Angiography & Angioplasty", "Pacemaker Implantation", "2D Echo & Stress Test", "Cardiac Rehabilitation", "Heart Failure Management", "Holter Monitoring"],
    doctorIds: ["dr-deepak-kumar", "dr-bhavesh-meel", "dr-ram-singh-yadav"],
    img: heartImg,
    metaTitle: "Best Cardiologist in Jaipur | Heart & CTVS Care | Jaipur Hospital",
    metaDescription: "Top cardiology hospital in Jaipur offering bypass surgery, angioplasty, valve repair & 24/7 cardiac emergency care. Cashless Ayushman Bharat. Call now!",
    htmlContent: `<h1>Cardiology and CTVS | Heart Specialist Hospital in Jaipur | Jaipur Hospital</h1>

<h2>Cardiology Care You Can Trust</h2>
<p>Heart disease ranks among the top causes of death in India, and Rajasthan is no different. The positive side is that most heart problems can be handled well when caught early and treated properly. Our cardiology department at Jaipur Hospital has some of the best cardiologists in Jaipur. They have years of experience handling all kinds of heart issues.</p>

<p>Many people search for the best cardiology doctor in Jaipur and land here because they want experts who are skilled and also truly care about patients. Our cardiologists explain your condition in plain language, discuss the choices clearly, and let you take part in decisions about your treatment.</p>

<h2>Heart Conditions We Treat</h2>
<p>Our cardiology hospital in Jaipur has the right tools and know-how to manage conditions such as:</p>
<ul>
  <li>Coronary artery disease (blocked arteries)</li>
  <li>Heart failure</li>
  <li>Hypertension and related complications</li>
  <li>Arrhythmias (irregular heartbeat)</li>
  <li>Valvular heart disease</li>
  <li>Congenital heart defects</li>
  <li>Peripheral vascular disease</li>
  <li>Post-heart attack care and cardiac rehabilitation</li>
</ul>

<p>If you or someone in your family feels chest pain, shortness of breath, fluttering in the chest, or unusual tiredness, do not delay. A prompt check with the best cardiologist in Jaipur can stop a small problem from turning serious.</p>

<h2>Diagnostic Facilities for Heart Care</h2>
<p>Getting the diagnosis right forms the base for good heart treatment in Jaipur. Our own cardiac testing unit offers:</p>
<ul>
  <li>ECG and Holter Monitoring</li>
  <li>2D Echocardiography</li>
  <li>Stress Test (TMT)</li>
  <li>Digital X-ray and CT Angiography</li>
  <li>Cardiac MRI</li>
  <li>NABL-accredited lab for lipid profiles, cardiac enzyme tests, and more</li>
</ul>

<p>All tests happen inside the hospital, so you get results fast, and treatment can start sooner. There is no need to visit different labs outside.</p>

<h2>CTVS: Cardiothoracic and Vascular Surgery</h2>

<h3>Bypass Surgery (CABG)</h3>
<p>Coronary artery bypass grafting is one of the heart surgeries we perform most often. Our surgical team has carried it out successfully for patients of different ages with strong results.</p>

<h3>Heart Valve Repair and Replacement</h3>
<p>Valves that are damaged or diseased can usually be fixed or replaced to allow normal blood flow again. Our best doctor for cardiology in Jaipur coordinates closely with surgeons to choose the best option for every patient.</p>

<h3>Aortic Surgeries</h3>
<p>Problems with the aorta, such as aneurysms or dissections, need expert attention. Our CTVS unit is set up to manage these difficult cases.</p>

<h3>Peripheral Vascular Surgeries</h3>
<p>Blockages in vessels away from the heart, especially in the legs, can lead to big troubles. Our vascular surgery team treats them using both open surgery and less invasive methods.</p>

<h2>Cardiac Care Under Chiranjeevi Yojana and Ayushman Bharat</h2>
<p>Jaipur Hospital is empanelled under the Heart Hospital in Jaipur Chiranjeevi Yojana scheme, Ayushman Bharat, CGHS, and ECHS. Eligible patients can get cashless heart treatment and avoid paying large amounts upfront.</p>

<p>If you want a cardiac care hospital in Jaipur that works with your government scheme or insurance, our team will walk you through the paperwork and approval steps.</p>

<h2>Why Jaipur Hospital is Trusted for Heart Care</h2>

<h3>Experienced Specialists</h3>
<p>Our cardiologists and cardiac surgeons have many years of practice between them and have been trained at leading medical centers across India.</p>

<h3>Advanced Infrastructure</h3>
<p>We have a well-equipped Cath Lab for procedures, modern operation theatres, and a dedicated Cardiac ICU with round-the-clock monitoring. This setup meets the demands of serious heart cases.</p>

<h3>Round-the-Clock Emergency Care</h3>
<p>Heart problems do not wait for office hours. Our emergency cardiology team stays available 24/7. GPS-equipped ambulances with trained staff can reach patients quickly and bring them safely.</p>

<h3>Patient-First Approach</h3>
<p>We give every cardiac patient a coordinator to keep things smooth from tests and treatment through surgery and recovery. Our staff speaks multiple languages, so people from all over Rajasthan feel at ease and well-informed.</p>

<h2>Signs You Should Not Ignore</h2>
<p>Many people brush off early heart warnings, thinking it is just stress or acidity. These symptoms mean you should visit a heart specialist hospital in Jaipur straight away:</p>
<ul>
  <li>Chest pain or tightness, especially during activity</li>
  <li>Shortness of breath with minimal exertion</li>
  <li>Persistent fatigue or weakness</li>
  <li>Palpitations or a racing heart</li>
  <li>Swelling in the ankles or legs</li>
  <li>Dizziness or fainting spells</li>
</ul>

<h2>Book a Cardiac Consultation Today</h2>
<p>Our OPD runs from 9 AM to 8 PM, and the emergency department works 24/7.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/>
<strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Do not take chances with heart care. Come to Jaipur Hospital, one of the most trusted names for heart treatment in Jaipur, and get a proper hold on your cardiac health today.</p>`,
  },
  {
    id: "general-surgery",
    name: "General & Laparoscopic Surgery",
    shortDesc: "Laparoscopic surgery",
    fullDesc: "Skilled general & Laparoscopic surgery for a wide range of conditions. Precision, care, and expertise to ensure your best possible recovery.",
    icon: "Scissors",
    color: "text-secondary",
    bg: "bg-secondary-light",
    treatments: ["Laparoscopic Cholecystectomy", "Hernia Repair", "Appendectomy", "GI Surgery", "Thyroid Surgery", "Breast Surgery"],
    doctorIds: ["dr-srikant-bulakh", "dr-mansimrat-paul-singh"],
    img: emergencyImg,
    metaTitle: "Laparoscopic & General Surgeon in Jaipur | Jaipur Hospital",
    metaDescription: "Advanced laparoscopic surgery in Jaipur for gallbladder, hernia, appendix & more with faster recovery & minimal scars. 24/7 emergency surgery available.",
    htmlContent: `<h1>General and Laparoscopic Surgery in Jaipur | Jaipur Hospital</h1>

<h2>General Surgery at Jaipur Hospital</h2>
<p>General surgery covers a broad range of procedures involving the abdomen, digestive tract, skin, soft tissues, and related structures. Our general surgeon in Jaipur team handles both emergency surgeries, such as appendicitis or bowel obstruction, and elective procedures planned in advance after thorough evaluation.</p>

<p>Our surgical team works closely with the anaesthesiology department to ensure safe, well-monitored procedures, and with the ICU team for patients who need post-operative critical care. Patients recovering from surgery are supported by our nursing team, physiotherapists for early mobilisation, and dietitians for nutritional recovery where needed.</p>

<h2>Laparoscopic Surgery: Smaller Cuts, Faster Recovery</h2>
<p>Laparoscopic surgery, also known as minimally invasive or keyhole surgery, has transformed the way many common surgical procedures are performed. Instead of a large open incision, the surgeon makes a few tiny cuts and uses a camera along with specialised instruments to perform the procedure while viewing a magnified image on a screen.</p>

<p>The benefits for patients are significant:</p>
<ul>
  <li>Much smaller scars</li>
  <li>Less post-operative pain</li>
  <li>Shorter hospital stay</li>
  <li>Faster return to normal activity</li>
  <li>Lower risk of wound infections and hernia at the incision site</li>
</ul>

<p>At Jaipur Hospital, our laparoscopic surgeon in Jaipur team performs a wide range of procedures using this technique. For most of the common surgeries we do, laparoscopy is now the standard approach unless there is a specific clinical reason to go open.</p>

<h2>Surgeries We Perform</h2>

<h3>Laparoscopic Cholecystectomy (Gallbladder Removal)</h3>
<p>Gallstones are one of the most common surgical conditions we see. When stones cause recurrent pain, infection, or block the bile duct, the gallbladder needs to come out. Laparoscopic cholecystectomy is a well-established, safe procedure that most patients recover from within a few days. It is one of the most commonly performed surgeries at our laparoscopy hospital in Jaipur.</p>

<h3>Appendicectomy</h3>
<p>Serious appendicitis needs prompt surgical treatment. Our emergency surgical team is available 24*7 to perform appendicectomy, using laparoscopy wherever possible to minimise recovery time.</p>

<h3>Hernia Repair</h3>
<p>Hernias occur when tissue pushes through a weak spot in the abdominal wall. Inguinal hernia, umbilical hernia, incisional hernia, and hiatal hernia are conditions we regularly treat. Laparoscopic hernia repair using mesh provides a strong, durable result with significantly less post-operative discomfort than open repair.</p>

<h3>Haemorrhoid Surgery</h3>
<p>Piles or haemorrhoids that do not respond to conservative management can be treated surgically. We offer both conventional and minimally invasive options depending on the grade and severity.</p>

<h3>Thyroid and Parathyroid Surgery</h3>
<p>Thyroid nodules, goitres, and thyroid cancers often require surgical removal. Our team performs both total and partial thyroidectomies with careful attention to preserving the recurrent laryngeal nerve and parathyroid glands.</p>

<h3>Breast Surgery</h3>
<p>We perform diagnostic biopsies, lumpectomies, and mastectomies for patients with breast conditions, benign and malignant. Our team works in coordination with oncology specialists for cancer-related cases.</p>

<h3>Abdominal and Bowel Surgeries</h3>
<p>For conditions involving the stomach, small intestine, large bowel, rectum, and anus, our surgical team handles both elective and emergency procedures. This includes surgeries for bowel obstruction, colorectal disease, and bowel resections.</p>

<h3>Trauma and Emergency Surgery</h3>
<p>Abdominal injuries from road accidents or falls often require urgent surgical intervention. Our emergency surgical team is experienced in damage control surgery and trauma laparotomy, working alongside our ICU and trauma care teams.</p>

<h2>Advanced Operation Theatre Infrastructure</h2>
<p>Good surgery requires the right environment. Our modular operation theatres at Jaipur Hospital are equipped with:</p>
<ul>
  <li>HEPA filtration for ultra-clean air and infection control</li>
  <li>High-definition laparoscopy equipment with 4K imaging for precise visualisation</li>
  <li>Integrated anaesthesia and patient monitoring systems</li>
  <li>Dedicated scrub teams experienced in both open and laparoscopic procedures</li>
</ul>

<p>The quality of the OT environment directly affects surgical outcomes, particularly in reducing post-operative infection rates, and we take this seriously.</p>

<h2>Anaesthesia and Pain Management</h2>
<p>Surgery is only half the picture. Safe anaesthesia and effective pain management are equally important. Our anaesthesiology team evaluates every surgical patient before the procedure, plans the anaesthetic approach based on the individual's health profile, and manages pain in the immediate post-operative period.</p>

<p>For laparoscopic procedures, most patients are comfortable enough to walk on the same day as surgery and go home within 24 to 48 hours. For larger open procedures, our pain management team ensures that recovery is as comfortable as possible while avoiding excessive dependence on opioids.</p>

<h2>Pre-Surgery Evaluation and Preparation</h2>
<p>Every patient scheduled for an elective surgery at Jaipur Hospital goes through a structured pre-operative workup. This includes relevant blood tests, ECG, chest X-ray, and a pre-anaesthesia check-up. The purpose is to identify any risk factors that need to be addressed before surgery so that the procedure is as safe as possible.</p>

<p>Our surgical team also takes time to counsel patients about what to expect before, during, and after surgery. An informed patient recovers better and has fewer anxieties going into the procedure.</p>

<h2>Post-Surgery Care and Discharge</h2>
<p>Recovery does not end when the surgery is over. Our post-operative care includes regular wound monitoring, pain control, early mobilisation with physiotherapy support, dietary guidance, and clear instructions for the patient and family to follow at home.</p>

<p>We schedule follow-up consultations after discharge to check on healing, remove sutures if needed, review histopathology reports, and answer any questions that come up during recovery.</p>

<h2>Cashless Surgery Under Government Schemes</h2>
<p>Jaipur Hospital is empanelled under Ayushman Bharat, CGHS, and ECHS. A wide range of general and laparoscopic surgeries are covered under these schemes, allowing eligible patients to receive quality surgical care without having to arrange funds upfront. Our team will guide you through the empanelment verification and prior authorisation process.</p>

<h2>When Should You See a Surgeon?</h2>
<p>You should consult a general surgeon in Jaipur if you have:</p>
<ul>
  <li>A lump or swelling in the abdomen, groin, or neck that is growing or painful</li>
  <li>Persistent or severe abdominal pain</li>
  <li>Symptoms suggesting gallstones such as right upper abdominal pain especially after fatty meals</li>
  <li>A bulge in the groin or near the navel that appears when you stand or strain</li>
  <li>Rectal bleeding or painful bowel habits that have not resolved with medication</li>
  <li>A thyroid nodule or swelling in the neck that has been flagged on ultrasound</li>
</ul>

<h2>Book a Surgical Consultation</h2>
<p>Our surgical OPD runs from 9 AM to 8 PM. Emergency surgical care is available 24/7.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</p>
<p><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>If surgery has been recommended or you want a second opinion, speak to our team at Jaipur Hospital. As a trusted laparoscopy hospital in Jaipur, we will give you an honest assessment and the skilled care you deserve.</p>`,
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    shortDesc: "Internal medicine",
    fullDesc: "Comprehensive general medicine care for all ages. Expert diagnosis, treatment, and prevention to keep you healthy and thriving.",
    icon: "Stethoscope",
    color: "text-primary",
    bg: "bg-primary-light",
    treatments: ["Diabetes Management", "Hypertension Care", "Fever & Infection Treatment", "Preventive Health Checkups", "Thyroid Disorders", "Respiratory Conditions"],
    doctorIds: ["dr-pushpendra-prasad-garg", "dr-r-l-modi", "dr-mayank-gupta", "dr-sandeep-sharma"],
    img: heartImg,
    metaTitle: "General Physician in Jaipur | Fever, Diabetes & BP Treatment",
    metaDescription: "Visit Jaipur Hospital for expert general medicine care - fever, diabetes, BP & health checkups. In-house lab & 24/7 OPD. Cashless treatment available.",
    htmlContent: `<h1>General Medicine in Jaipur | Expert Diagnosis and Treatment | Jaipur Hospital</h1>

<h2>What General Medicine Covers</h2>
<p>General Medicine forms the base of all healthcare services. Our internal medicine specialists receive training to identify, treat, and handle many different conditions that affect adults and senior patients. While a specialist concentrates on one body part or system, a medicine doctor in Jaipur from our team examines the complete situation. This full-picture method often proves key in spotting problems early or handling long-term issues effectively.</p>

<p>Patients visit our General Medicine OPD with problems from simple viral fever to complex problems involving various systems of the body. A few of the typical issues we diagnose and treat are:</p>
<ul>
  <li>Fever, infections, and viral illnesses</li>
  <li>Diabetes and blood sugar management</li>
  <li>High blood pressure and hypertension</li>
  <li>Thyroid disorders</li>
  <li>Respiratory conditions like asthma and bronchitis</li>
  <li>Anaemia and nutritional deficiencies</li>
  <li>Gastric and digestive problems</li>
  <li>Urinary tract infections</li>
  <li>Skin rashes and allergy-related conditions</li>
  <li>General fatigue, weakness, and unexplained weight loss</li>
</ul>

<p>If you're not sure which specialist you should start with, it definitely makes sense to check out our general medicine staff first.</p>

<h2>Fever Treatment in Jaipur</h2>
<p>Fever is one of the most common reasons that people visit the doctor, and while it could be a simple viral infection, there are other, more serious causes. Some diseases are recurrent in Rajasthan, such as Dengue, Typhoid, Malaria, and Chikungunya, which happen during or after the monsoons. Our doctors know how to find the exact reason for fever fast through blood tests and pathology services available inside the hospital, then begin proper treatment immediately.</p>

<p>If you or a family member has dealt with a fever lasting more than two or three days, or if it comes with rash, joint pain, or confusion, do not delay. Visit us for fever treatment in Jaipur, so our team can figure out the cause.</p>

<h2>Diabetes Treatment in Jaipur</h2>
<p>Diabetes counts as one of the health problems growing quickest across India and appears very frequently in Rajasthan. Diabetic people can have an active and healthy lifestyle if they take care of their condition. If ignored or not controlled well, it can increase the likelihood of complications to the kidney, eye, heart, and nerve diseases.</p>

<p>At Jaipur Hospital, diabetes treatment in Jaipur includes more than writing prescriptions. Our general medicine specialists support patients with:</p>
<ul>
  <li>Accurate diagnosis, including HbA1c, fasting, and post-meal glucose tests</li>
  <li>Personalised medication plans for Type 1, Type 2, and gestational diabetes</li>
  <li>Diet and lifestyle counselling</li>
  <li>Regular monitoring to prevent complications</li>
  <li>Coordination with specialists if complications have already developed</li>
</ul>

<p>Whether the diagnosis is new or you have lived with diabetes for a long time and seek improved control, our team stands ready to assist.</p>

<h2>BP Treatment in Jaipur</h2>
<p>High blood pressure, also known as hypertension, earns the name silent killer since it usually produces no clear signs until damage has already started. A blood pressure that stays high often leads to heart disease, stroke, and kidney failure.</p>

<p>Our BP treatment in Jaipur involves finding the root causes, selecting suitable medicines when necessary, and helping patients adopt lifestyle changes that deliver real results. We track blood pressure readings across time and fine-tune the plan according to your body's reaction.</p>

<p>If your doctor has stated that your blood pressure is elevated, or it seems to run in your family, take the time to have it checked out thoroughly—don't let it go.</p>

<h2>Preventive Health Checkups</h2>
<p>Preventive care stands as one of the biggest benefits general medicine provides. Doctors can detect many serious conditions early using standard blood tests, physical exams, and screenings. Jaipur Hospital offers health checkup packages with a complete range of tests that show your current health status clearly.</p>

<p>It’s very important for adults over 35, people with a family history of diabetes, heart disease or cancer, and people who sit for a long time. It's always better to prevent a problem than to solve it.</p>

<h2>Our General Medicine OPD</h2>
<p>Experienced internal medicine doctors run our OPD and stay available from 9 AM to 8 PM, six days a week. For patients who require admission for close watching or treatment of sudden conditions, our general medicine ward gives care around the clock with nursing staff and doctor supervision.</p>

<p>We maintain complete in-house testing facilities such as digital X-ray, ECG, NABL-accredited laboratory, and ultrasound. This setup means most tests your doctor orders can happen on the spot without sending you elsewhere.</p>

<h2>Cashless Treatment Available</h2>
<p>Jaipur Hospital holds approval under Ayushman Bharat, CGHS, ECHS, and several TPA insurance networks. Most schemes cover general medicine visits and hospital stays. Our patient support team assists with checking your eligibility and handling all paperwork.</p>

<h2>Book a General Medicine Consultation</h2>
<p>Stop waiting for a health worry that keeps troubling you. It is better to see a general doctor in Jaipur in its early stages so that it doesn't escalate into a big problem.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/>
<strong>OPD Hours:</strong> 9:00 AM to 8:00 PM | Emergency: 24/7<br/>
<strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Your health matters too much to delay. Come in person or phone us now to fix an appointment with our general medicine team.</p>`,
  },
  {
    id: "gynaecology",
    name: "Obstetrics & Gynaecological",
    shortDesc: "Women's health",
    fullDesc: "Comprehensive obstetric and gynecological care for every stage of a woman's life. Expertise in pregnancy, fertility, and women's health.",
    icon: "User",
    color: "text-pink-500",
    bg: "bg-pink-50",
    treatments: ["Normal & C-Section Delivery", "High-Risk Pregnancy", "Laparoscopic Hysterectomy", "Infertility Treatment", "PCOS Management", "Menopause Care"],
    doctorIds: ["dr-suhasini-shitoot"],
    img: heartImg,
    metaTitle: "Gynaecologist & Pregnancy Care Hospital in Jaipur | Jaipur Hospital",
    metaDescription: "Trusted gynaecology & maternity hospital in Jaipur for normal delivery, high-risk pregnancy & women's health. NICU support & cashless delivery. Book today!",
    htmlContent: `<h1>Obstetrics and Gynaecology in Jaipur | Women's Health Care | Jaipur Hospital</h1>

<h2>Women's Health at Every Stage</h2>
<p>There are many chapters on women's health. It evolves with age and presents new needs as it goes. We understand this and provide treatment specific to every individual in our gynaecology team:</p>
<ul>
  <li>Teenage girls facing irregular periods or hormone problems</li>
  <li>Women in their reproductive years handling PCOD, fibroids, or questions about fertility</li>
  <li>Pregnant women who want reliable and caring maternity support</li>
  <li>Hormone transitions in women (pre and post-menopausal)</li>
</ul>

<p>Whether you're a youngster or an adult, we'll listen closely and provide you with honest, unbiased suggestions without judgment.</p>

<h2>Pregnancy Care in Jaipur</h2>
<p>Pregnancy ranks as one of the biggest and most emotional times in a woman's life. Starting prenatal care early makes a real difference for the health of both mother and child. Jaipur Hospital serves as a reliable pregnancy care hospital in Jaipur with strong antenatal services, seasoned obstetricians, and up-to-date maternity setups.</p>

<h3>Regular Antenatal Checkups</h3>
<p>We monitor mother and baby throughout the first trimester to delivery with regular visits, labwork, and scans. Our gynaecologists observe the baby's development, catch problems in its early stages, and discuss food and behaviour choices with you every time.</p>

<h3>High-Risk Pregnancy Management</h3>
<p>Some pregnancies involve diabetes, high blood pressure, thyroid problems, twins, or past issues that call for closer watch. Our doctors bring the right skills and hospital setup to handle these cases well, with neonatology backup and NICU ready if the baby needs it.</p>

<h3>Nutrition and Birth Planning Counselling</h3>
<p>Knowing her options makes a mom more confident. Our staff will spend time discussing healthy eating, exercising while pregnant, emotional wellbeing and options for delivery so that there is a clearer understanding when labour begins.</p>

<h2>Normal Delivery Hospital in Jaipur</h2>
<p>More women these days want to avoid caesarean sections that are not needed. Jaipur Hospital backs natural birth when it is the safe choice. We are a top hospital for normal delivery in Jaipur and have helped thousands of women in delivering their babies through normal delivery.</p>

<p>There is continuous availability of labour ward staff and support throughout the day and night with obstetricians, midwives and nurses available. The rooms are relaxing, private, and family-friendly. We provide ways to manage pain in labour and make sure both mother and baby get close attention after birth.</p>

<p>Of course, if a caesarean becomes necessary for medical reasons, our surgeons step in with solid experience. We always decide based on what protects the mother and baby best, not for any other reason.</p>

<h2>Gynaecological Conditions We Treat</h2>
<p>Our gynecology hospital in Jaipur team handles some of the most common women's health issues apart from pregnancy:</p>
<ul>
  <li>Polycystic Ovarian Disease (PCOD or PCOS)</li>
  <li>Uterine fibroids and ovarian cysts</li>
  <li>Endometriosis</li>
  <li>Irregular periods and menstrual disorders</li>
  <li>Pelvic inflammatory disease</li>
  <li>Cervical and uterine health concerns, including PAP smear screening</li>
  <li>Urinary incontinence</li>
  <li>Menopausal symptoms and hormone management</li>
  <li>Fertility evaluation and initial infertility management</li>
</ul>

<p>Catching and treating these issues early often stops bigger problems later and helps keep fertility options open.</p>

<h2>Gynaecological Surgeries</h2>
<p>If surgery makes sense, our team carries out different operations such as:</p>
<ul>
  <li>Laparoscopic surgeries for fibroids, cysts, and endometriosis</li>
  <li>Hysterectomy (open and laparoscopic)</li>
  <li>Dilation and Curettage</li>
  <li>Cervical procedures</li>
  <li>Reconstructive pelvic floor surgeries</li>
</ul>

<p>When possible, we use laparoscopic or keyhole surgery because it involves small incisions, causes less pain, allows patient to heal faster and requires less hospital time.</p>

<h2>Why Mothers and Women Choose Jaipur Hospital</h2>

<h3>Experienced Female Specialists</h3>
<p>Our gynaecology team has senior lady doctors who bring many years of experience in obstetrics and gynaecological operations. Plenty of patients come to us on purpose because they prefer talking with a female doctor.</p>

<h3>Private and Comfortable Environment</h3>
<p>We know women's health talks need a quiet and respectful space. Our OPD and exam rooms are set up to protect your privacy fully.</p>

<h3>NICU Support for Newborns</h3>
<p>Our hospital runs a good NICU for babies born early or who need extra help right after birth. This matters a lot in high-risk cases and helps parents feel more at ease.</p>

<h3>Cashless Delivery Under Government Schemes</h3>
<p>Jaipur Hospital works with Ayushman Bharat, CGHS, and ECHS. Many families can get maternity services, whether normal or caesarean, covered through these plans and pay much less out of pocket.</p>

<h2>When to See a Gynaecologist</h2>
<p>A lot of women wait too long before seeing a gynaecologist and only come when something feels wrong. Make an appointment if you notice:</p>
<ul>
  <li>Missed or very irregular periods</li>
  <li>Unusual pain during periods or intercourse</li>
  <li>Vaginal discharge with odour or itching</li>
  <li>A lump or unusual sensation in the lower abdomen</li>
  <li>Difficulty conceiving after one year of trying</li>
  <li>Any concerns during pregnancy</li>
  <li>Symptoms of menopause affecting your daily life</li>
</ul>

<h2>Book an Appointment</h2>
<p>Our gynaecology OPD runs from 9 AM to 8 PM, and our maternity and delivery services are available around the clock.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/>
<strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Your health and your baby's health deserve the best possible care. Reach out to our team at Jaipur Hospital and experience the warmth and expertise that have made us a trusted pregnancy care hospital in Jaipur for over two decades.</p>`,
  },
  {
    id: "plastic-surgery",
    name: "Plastic & Reconstructive Surgery",
    shortDesc: "Cosmetic & reconstructive",
    fullDesc: "Expert plastic and Reconstructive surgery for enhancing beauty and restoring confidence. Specializing in transformative, natural-looking results.",
    icon: "Sparkles",
    color: "text-violet-500",
    bg: "bg-violet-50",
    treatments: ["Rhinoplasty", "Facelift Surgery", "Burn Reconstruction", "Hand Surgery", "Cleft Lip & Palate Repair", "Skin Grafting"],
    doctorIds: ["dr-arun-mathur"],
    img: plasticImg,
    metaTitle: "Best Plastic Surgery Hospital in Jaipur | Cosmetic Surgeon",
    metaDescription: "Top plastic surgery hospital in Jaipur. Expert cosmetic & reconstructive surgeons for rhinoplasty, burns, and trauma reconstruction. Call: 0141-2741465",
    htmlContent: "<p>Whether you are looking to restore function after an injury or enhance your natural appearance, choosing the right surgical team is essential. The Plastic and Reconstructive Surgery department at Jaipur Hospital offers highly specialized care with a focus on precision, safety, and natural-looking results. As a leading <strong>plastic surgery hospital in Jaipur</strong>, we provide both reconstructive solutions for trauma and advanced cosmetic procedures.</p><h2>Reconstructive Surgery in Jaipur</h2><p>Reconstructive surgery aims to restore normal function and appearance to body parts affected by accidents, diseases, or birth defects. Our experienced <strong>plastic surgeon in Jaipur</strong> is highly skilled in complex reconstructive cases.</p><ul><li><strong>Burn Care and Reconstruction:</strong> Specialized surgical care for severe burns, including skin grafting and scar revision, to improve both mobility and appearance.</li><li><strong>Trauma and Maxillofacial Surgery:</strong> Expert repair of facial fractures and soft tissue injuries following accidents.</li><li><strong>Hand Surgery:</strong> Treatment for nerve injuries, tendon repairs, and congenital hand deformities to restore essential hand function.</li><li><strong>Cleft Lip and Palate Repair:</strong> Corrective surgeries for children born with facial anomalies, helping them eat, speak, and smile naturally.</li></ul><h2>Cosmetic Aesthetic Surgery</h2><p>Cosmetic surgery is a personal choice aimed at improving self-confidence and aesthetic appeal. We offer a safe, confidential environment and utilize modern techniques for the best outcomes.</p><ul><li><strong>Rhinoplasty (Nose Job):</strong> Reshaping the nose for better facial harmony or to correct breathing issues.</li><li><strong>Body Contouring:</strong> Procedures like liposuction and tummy tucks (abdominoplasty) to shape and refine the body's profile.</li><li><strong>Breast Surgery:</strong> Including breast augmentation, reduction, and reconstructive surgery following mastectomy.</li><li><strong>Facial Rejuvenation:</strong> Facelifts, eyelid surgery (blepharoplasty), and non-surgical anti-aging treatments.</li></ul><p>When searching for the <strong>best cosmetic surgeon in Jaipur</strong>, patients trust our department for our ethical approach—we prioritize patient safety and realistic, beautiful outcomes above all else.</p><h2>Why Choose Our Plastic Surgery Department?</h2><p>Plastic surgery requires a blend of medical expertise and artistic vision. Our department is supported by a robust hospital infrastructure, including modular operation theatres and rigorous infection control protocols. This ensures a level of safety and emergency backup that standalone cosmetic clinics cannot match.</p><h2>Book a Consultation</h2><p>Discuss your goals confidentially with our experts.</p><p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>",
  },
  {
    id: "pathology",
    name: "Pathology",
    shortDesc: "Diagnostic pathology",
    fullDesc: "Pathology is the scientific study of diseases, focusing on their causes, processes, development, and effects on the body.",
    icon: "Microscope",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    treatments: ["Histopathology", "Clinical Pathology", "Cytopathology", "Hematology", "Biochemistry", "Microbiology"],
    doctorIds: ["dr-savita-kumari"],
    img: pathologyImg,
    metaTitle: "Best Pathology Lab in Jaipur | Diagnostic Blood Tests",
    metaDescription: "Accurate & fast pathology lab in Jaipur. Comprehensive blood tests, biochemistry, microbiology & histopathology. NABL standards. Call: 0141-2741465",
    htmlContent: "<p>Accurate medical treatment begins with an accurate diagnosis. The Pathology department at Jaipur Hospital serves as the critical backbone for all our clinical and surgical specialties. Operating with precision and speed, we are recognized as a highly reliable <strong>pathology lab in Jaipur</strong>, delivering dependable test results that doctors and patients can trust.</p><h2>Comprehensive Pathology Services</h2><p>Our fully automated, state-of-the-art laboratory functions round-the-clock to support both admitted patients and walk-in individuals. We maintain strict quality control measures aligned with NABL standards to ensure zero errors. If you are looking for the <strong>best diagnostic lab in Jaipur</strong>, our facility offers a complete spectrum of testing.</p><h3>Clinical Pathology and Hematology</h3><p>We perform routine and advanced blood tests to detect infections, anemia, and blood disorders. Our automated cell counters provide rapid and highly accurate complete blood counts (CBC), coagulation profiles, and bone marrow analyses.</p><h3>Biochemistry</h3><p>Our advanced biochemistry analyzers process hundreds of samples daily to check vital organ functions. We conduct precise liver function tests (LFT), kidney function tests (KFT), lipid profiles, blood sugar monitoring, and complex hormone assays including thyroid profiles.</p><h3>Microbiology and Serology</h3><p>Identifying the exact cause of an infection is vital for prescribing the right antibiotics. We offer rapid culture and sensitivity testing, along with advanced serological tests for diseases like Dengue, Typhoid, Malaria, and viral hepatitis.</p><h3>Histopathology and Cytopathology</h3><p>For cancer detection and surgical biopsies, accuracy is non-negotiable. Our expert pathologists meticulously examine tissue samples and cellular smears (such as PAP smears and FNAC) to provide conclusive reports for oncology and surgical teams.</p><h2>Why Trust Our Laboratory?</h2><p>While there are many collection centers, having your tests done at a fully-fledged <strong>hospital pathology lab in Jaipur</strong> offers distinct advantages:</p><ul><li><strong>24/7 Availability:</strong> Illness doesn't wait for morning. Our lab runs day and night to process emergency samples instantly.</li><li><strong>Advanced Technology:</strong> We utilize fully automated analyzers that eliminate human error.</li><li><strong>Expert Pathologists:</strong> Reports are validated by senior MD Pathologists, ensuring clinical correlation.</li><li><strong>In-house Convenience:</strong> Get your doctor's consultation and all required tests done under one roof without traveling to different locations.</li></ul><h2>Health Checkup Packages</h2><p>Prevention is always better than cure. We offer comprehensive, customized preventive health checkup packages covering all essential blood and urine tests to help you monitor your health proactively.</p><p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>",
  },
  {
    id: "ent",
    name: "ENT",
    shortDesc: "Ear, Nose & Throat",
    fullDesc: "ENT specialist, also known as an otolaryngologist, is a medical professional who specializes in diagnosing and treating conditions affecting the ear, nose, and throat.",
    icon: "Ear",
    color: "text-teal-500",
    bg: "bg-teal-50",
    treatments: ["Tonsillectomy", "Septoplasty", "Sinus Surgery", "Hearing Assessment", "Voice Disorders", "Ear Infections Treatment"],
    doctorIds: ["dr-anita-kothari"],
    img: entImg,
    metaTitle: "Best ENT Hospital in Jaipur | Ear, Nose & Throat Specialist",
    metaDescription: "Consult the best ENT specialist in Jaipur at Jaipur Hospital. Advanced care for sinus, hearing loss, tonsils & throat disorders. Call: 0141-2741465",
    htmlContent: "<p>Conditions affecting the ear, nose, and throat can significantly impact your daily quality of life, affecting how you hear, breathe, speak, and swallow. The ENT (Otorhinolaryngology) department at Jaipur Hospital provides comprehensive medical and surgical care for patients of all ages. Whether it is a stubborn sinus infection or a complex hearing issue, you will find the <strong>best ENT specialist in Jaipur</strong> right here.</p><h2>Ear, Nose, and Throat Conditions We Treat</h2><p>Our department is fully equipped with modern diagnostic tools, including nasal endoscopes and audiometry equipment, allowing our <strong>ENT doctor in Jaipur</strong> to pinpoint the exact cause of your discomfort.</p><h3>Ear Care and Hearing Solutions</h3><p>Hearing loss, ringing in the ears (tinnitus), and chronic ear infections need prompt attention. We offer thorough hearing assessments, treatment for middle ear fluid, eardrum repair (Tympanoplasty), and specialized care for vertigo and balance disorders.</p><h3>Nasal and Sinus Treatments</h3><p>Chronic sinusitis, nasal blockages, and allergies are highly common. We provide advanced medical management for allergies and perform Functional Endoscopic Sinus Surgery (FESS) to clear chronic sinus blockages. We also expertly handle deviated nasal septums (Septoplasty) to restore normal breathing.</p><h3>Throat and Voice Care</h3><p>From recurrent tonsillitis in children to voice hoarseness and swallowing difficulties in adults, our team provides effective solutions. We routinely perform safe, modern tonsillectomies and adenoidectomies, and treat vocal cord nodules and polyps.</p><h2>Advanced ENT Surgery in Jaipur</h2><p>When medical treatments are not enough, our surgeons perform a wide range of ENT surgeries. As a leading <strong>ENT hospital in Jaipur</strong>, we utilize minimally invasive endoscopic and microscopic techniques. This means surgeries are precise, leave no external scars, and allow for a much faster recovery.</p><ul><li>Microscopic Ear Surgeries for hearing restoration</li><li>Endoscopic Sinus Surgery for chronic sinusitis</li><li>Thyroid and Salivary Gland Surgeries</li><li>Microlaryngeal surgery for voice disorders</li></ul><h2>Pediatric ENT Care</h2><p>Children often suffer from recurrent ear infections, tonsillitis, and enlarged adenoids that can cause snoring and sleep apnea. Our specialists are highly experienced in gentle, pediatric-friendly ENT care, ensuring your child breathes and hears perfectly for proper development.</p><h2>Book an ENT Consultation</h2><p>If you are experiencing hearing loss, chronic nasal congestion, or persistent throat pain, do not ignore it.</p><p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    shortDesc: "Eye care",
    fullDesc: "Ophthalmologists are eye care specialists who can diagnose and treat any issue that affects your eyes or vision.",
    icon: "Eye",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    treatments: ["Cataract Surgery", "Glaucoma Treatment", "Retina Care", "LASIK Surgery", "Corneal Transplant", "Pediatric Ophthalmology"],
    doctorIds: ["dr-pavan-kumar-shorey"],
    img: ophthalmologyImg,
    metaTitle: "Best Eye Hospital in Jaipur | Ophthalmology Specialist",
    metaDescription: "Expert eye care at Jaipur Hospital. Best eye specialist in Jaipur for cataract surgery, glaucoma & retina treatments. Cashless available. Call: 0141-2741465",
    htmlContent: "<p>Your vision is your window to the world, and protecting it requires expert care and advanced technology. The Ophthalmology department at Jaipur Hospital offers comprehensive eye care services, ranging from routine vision check-ups to complex eye surgeries. Recognized as a trusted center for eye care, we provide access to the <strong>best eye specialist in Jaipur</strong> to safeguard your sight.</p><h2>Comprehensive Eye Care Services</h2><p>Our modern eye clinic is equipped with advanced diagnostic equipment to detect eye diseases in their earliest stages. We cater to patients of all ages, offering solutions for everything from simple refractive errors to sight-threatening conditions.</p><h3>Cataract Surgery in Jaipur</h3><p>Cataracts—the clouding of the eye's natural lens—are the most common cause of vision loss in older adults. We are a preferred <strong>eye hospital in Jaipur</strong> for advanced Phacoemulsification (stitchless cataract surgery). This quick, painless procedure uses premium foldable intraocular lenses (IOLs) to restore clear vision almost immediately, allowing patients to go home the same day.</p><h3>Glaucoma Diagnosis and Management</h3><p>Often called the 'silent thief of sight,' glaucoma damages the optic nerve without early symptoms. We provide comprehensive glaucoma screening, including intraocular pressure monitoring and visual field testing, along with advanced medical and surgical management to halt vision loss.</p><h3>Diabetic Retinopathy and Retina Care</h3><p>Diabetes can severely damage the blood vessels in the retina. Our <strong>eye doctor in Jaipur</strong> specializes in routine diabetic eye screenings, laser photocoagulation, and intravitreal injections to prevent blindness associated with diabetic retinopathy and macular degeneration.</p><h3>Pediatric Ophthalmology</h3><p>Children's eye problems, such as squint (strabismus) and lazy eye (amblyopia), need early intervention. Our team is skilled in assessing and treating pediatric eye conditions gently and effectively.</p><h2>Why Choose Us for Eye Care?</h2><p>When searching for the <strong>best eye doctor in Jaipur</strong>, patients choose our hospital because of our commitment to safety and precision. Operating within a multi-specialty hospital environment means we have stringent infection control measures in our dedicated ophthalmic operation theatres. Moreover, if an elderly patient has underlying health issues like high blood pressure or heart disease, our physicians and anesthesiologists are right here to ensure their eye surgery is completely safe.</p><h2>Cashless Eye Surgery</h2><p>We are empanelled with Ayushman Bharat, CGHS, ECHS, and various insurance companies, providing seamless cashless facilities for cataract surgeries and other major ophthalmic procedures.</p><h2>Book an Eye Examination</h2><p>Do not compromise on your vision. Regular check-ups are key to healthy eyes.</p><p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015<br/><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>",
  },
  {
    id: "neurology",
    name: "Neurology",
    shortDesc: "Brain & nervous system",
    fullDesc: "Our Neurology department specializes in the diagnosis and treatment of disorders of the brain, spinal cord, and peripheral nerves. We offer advanced diagnostics including EEG, EMG/NCV, and neuroimaging services.",
    icon: "Brain",
    color: "text-purple-500",
    bg: "bg-purple-50",
    treatments: ["Stroke Management", "Epilepsy Treatment", "Headache & Migraine Clinic", "Parkinson's Disease Treatment", "Neuropathy Management", "EEG & EMG Studies"],
    doctorIds: [],
    img: heartImg,
    metaTitle: "Best Neurologist in Jaipur | Stroke & Brain Care Hospital",
    metaDescription: "Top neurology hospital in Jaipur for stroke, epilepsy, migraine & dementia care with on-site EEG, EMG & MRI. 24/7 emergency neuro care. Book consultation.",
    htmlContent: `<h1>Neurology Hospital in Jaipur | Brain and Nerve Care | Jaipur Hospital</h1>

<h2>Why Neurology Needs Specialist Care</h2>
<p>Neurological issues are frequently difficult to diagnose unless a doctor is well-equipped and experienced. Headaches, dizziness, memory loss, numbness in hands or feet, or weakness on one side of the body could all be caused by a variety of factors. A correct diagnosis will prevent unnecessary delays in treatment and ensure the best possible outcomes.</p>

<p>The neurology department of Jaipur Hospital treats every case systematically. We perform a complete medical history, a careful examination of the nervous system and perform certain tests. This enables our doctors to arrive at the correct diagnosis and develop a plan that suits you.</p>

<h2>Neurological Conditions We Diagnose and Treat</h2>
<p>Our Neuro hospital in Jaipur treats numerous neurological disorders, such as:</p>
<ul>
  <li>Stroke and transient ischaemic attacks (TIA)</li>
  <li>Epilepsy and seizure disorders</li>
  <li>Migraine and other headache disorders</li>
  <li>Parkinson's disease and movement disorders</li>
  <li>Alzheimer's disease and dementia</li>
  <li>Multiple sclerosis</li>
  <li>Peripheral neuropathy</li>
  <li>Guillain-Barré syndrome</li>
  <li>Brain and spinal cord infections, including meningitis and encephalitis</li>
  <li>Myasthenia gravis and neuromuscular disorders</li>
  <li>Vertigo and balance disorders</li>
  <li>Spinal disorders with neurological involvement</li>
</ul>

<p>No matter if the issue comes on suddenly and needs urgent help or stays long-term and calls for ongoing care, our team has the setup to deal with it.</p>

<h2>Stroke Treatment in Jaipur</h2>
<p>Stroke counts as one of the most urgent medical situations around. When blood flow stops reaching part of the brain, cells start to die in just minutes. Doctors in this field often say time equals brain. Starting care quickly raises the odds of staying alive and getting back good function.</p>

<p>Our stroke treatment in Jaipur follows a plan focused on fast action and accuracy:</p>
<ul>
  <li>Quick CT scan or MRI to identify the stroke type</li>
  <li>Fast use of medicine to break up clots in ischaemic stroke when it fits the case</li>
  <li>Check by a neurology specialist within minutes after reaching the hospital</li>
  <li>Close watch in the ICU right after the event</li>
  <li>Starting physiotherapy and speech therapy early to aid recovery</li>
</ul>

<p>If someone close to you suddenly starts dropping one side of their face, becomes weak in one arm or leg, or has trouble talking, contact us immediately. Don't wait and pray that it will pass. Every single minute counts in these situations.</p>

<h2>Migraine Treatment in Jaipur</h2>
<p>Migraine is more than just a typical headache. To many, it becomes a serious issue and prevents them from working, meeting friends or managing a normal day. Occasionally, migraine attacks are severe and can last several hours or even days, and may include nausea, vomiting and increased sensitivity to light and sound.</p>

<p>Many who deal with ongoing migraine have used regular pain pills for years and still get no real fix. Our method for migraine treatment in Jaipur looks beyond just covering up the pain:</p>
<ul>
  <li>Finding and dealing with each person's own triggers</li>
  <li>Telling migraines apart from other kinds of headaches with careful checks</li>
  <li>Using proven medicines to prevent attacks in chronic cases</li>
  <li>Plans for handling bad episodes when they hit</li>
  <li>Botulinum toxin therapy for tough chronic migraine when needed</li>
  <li>Advice on changes to daily habits</li>
</ul>

<p>If you keep getting bad headaches and have never had a proper check from a neurologist, this would be a fine time to visit.</p>

<h2>Advanced Neurological Diagnostics</h2>

<h3>EEG (Electroencephalogram)</h3>
<p>An EEG measures the electrical activity of the brain and has a major role in assessing epilepsy, seizure disorders and some sleep disorders. Our EEG lab performs routine and ambulatory recordings.</p>

<h3>EMG and NCV (Electromyography and Nerve Conduction Velocity Studies)</h3>
<p>These checks look at muscle condition and the nerves linked to it. Doctors use them to spot problems such as peripheral neuropathy, carpal tunnel syndrome, Guillain-Barré syndrome, and muscle diseases.</p>

<h3>Neuroimaging</h3>
<p>Our own MRI and CT scan units give clear pictures of the brain and spinal cord. For nerve-related issues, both picture quality and reading them with neurology knowledge count heavily, and our staff handles both.</p>

<h3>Doppler Studies</h3>
<p>Carotid and transcranial Doppler tests check blood movement in the vessels that feed the brain. This proves especially useful when looking at stroke risk and prevention.</p>

<h2>Epilepsy Management</h2>
<p>Epilepsy touches millions of people in India and still carries a lot of stigma, even though it is a treatable medical issue that most patients can control well. Our neurology team gives full epilepsy support, including:</p>
<ul>
  <li>Correct sorting and diagnosis of seizures</li>
  <li>Choosing and watching anti-epileptic medicines</li>
  <li>Guidance for patients and families about first aid during seizures and staying safe</li>
  <li>Additional medications for those who still suffer seizures after using a regular medication.</li>
</ul>

<p>Our mission is to help people with epilepsy live complete, secure and independent lives.</p>

<h2>Memory Clinics and Dementia Care</h2>
<p>Memory lapses are often seen as a normal aspect of ageing by older adults. However, forgetfulness, confusion of thought and changes in personality may be an early sign of dementia or Alzheimer's. Checking and handling it early can slow things down and improve daily living a good deal.</p>

<p>Our neurology team runs specific memory tests and teams up with families to set up support arrangements that help the person affected and those looking after them.</p>

<h2>Why Choose Jaipur Hospital for Neurology</h2>
<p>As one of the best neurology hospitals in Jaipur, we come together with all the components required for the best treatment of the nervous system:</p>
<ul>
  <li>Highly trained neurologists who are familiar with all types of nerve disorders.</li>
  <li>On-site EEG, EMG/NCV, MRI, and CT services for quick and joined-up testing</li>
  <li>Straight links with neurosurgery, ICU, and rehab teams when cases get complicated</li>
  <li>A helpful style that uses simple words to explain diagnoses and includes patients when choosing treatments</li>
  <li>Cashless treatment options under Ayushman Bharat, CGHS, and ECHS</li>
</ul>

<h2>Do Not Ignore These Neurological Warning Signs</h2>
<p>A lot of people delay a doctor visit, hoping the signs will fade. Please see a brain specialist in Jaipur if you or someone in your family has:</p>
<ul>
  <li>Sudden severe headache, unlike any before</li>
  <li>Weakness or numbness on one side of the body</li>
  <li>Sudden difficulty speaking or understanding speech</li>
  <li>Frequent seizures or unexplained blackouts</li>
  <li>Progressive memory decline or personality changes</li>
  <li>Persistent dizziness or balance problems</li>
  <li>Tingling, burning, or weakness in the hands and feet</li>
</ul>

<h2>Book a Neurology Consultation</h2>
<p>Our OPD is open from 9 AM to 8 PM. Emergency neurology support is available 24/7.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</p>
<p><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Neurological health is a specialist concern. Come and visit your trusted ‘Neuro care hospital in Jaipur’ at ‘Jaipur Hospital’.</p>`,
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    shortDesc: "Child healthcare",
    fullDesc: "Dedicated pediatric care from newborns to adolescents with a fully equipped NICU. Our team of pediatricians provides comprehensive child health services including vaccinations, growth monitoring, and treatment of childhood illnesses.",
    icon: "Baby",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    treatments: ["Newborn Care (NICU)", "Childhood Vaccinations", "Growth Assessment", "Pediatric Infections", "Adolescent Health", "Nutrition Counseling"],
    doctorIds: ["dr-dinesh-kumar-dalmia", "dr-kamal-kant-khandelwal"],
    img: heartImg,
    metaTitle: "Child Specialist & Paediatric Hospital in Jaipur | Jaipur Hospital",
    metaDescription: "Expert paediatrician in Jaipur for child illness, vaccinations, NICU & newborn care. Child-friendly OPD with 24/7 paediatric emergency. Book appointment.",
    htmlContent: `<h1>Paediatrics in Jaipur | Child Specialist Hospital | Jaipur Hospital</h1>

<h2>Why Paediatric Care Needs a Specialist</h2>
<p>Many parents visit a general physician for their child's health concerns, and while that works for minor issues, children with complex or recurring conditions genuinely need specialist paediatric care. A paediatrician understands the age-specific norms for growth, development, and disease presentation.</p>

<p>They know that a fever of 38.5°C means something different in a two-month-old than it does in a ten-year-old. That kind of nuanced, age-aware clinical thinking is what separates paediatric care from general medicine.</p>

<p>Our paediatric team at Jaipur Hospital also works closely with our NICU, general surgery, and neurology departments so that children with complex or multi-system conditions receive coordinated, seamless care.</p>

<h2>Conditions We Treat</h2>
<p>Our child hospital in Jaipur manages a full range of acute and chronic childhood conditions including:</p>
<ul>
  <li>Fever, viral infections, and seasonal illnesses</li>
  <li>Respiratory conditions including pneumonia, bronchitis, and asthma</li>
  <li>Diarrhoea, vomiting, and dehydration</li>
  <li>Malnutrition and growth-related concerns</li>
  <li>Anaemia and nutritional deficiencies</li>
  <li>Urinary tract infections</li>
  <li>Skin allergies and eczema</li>
  <li>Jaundice in newborns and older children</li>
  <li>Epilepsy and febrile seizures</li>
  <li>Developmental delays and behavioural concerns</li>
  <li>Diabetes and hormonal disorders in children</li>
  <li>Childhood infections like typhoid, dengue, and chickenpox</li>
</ul>

<p>Whether your child has a sudden illness or a condition that has been going on for a while, our paediatricians take the time to evaluate thoroughly and explain clearly to parents what is happening and what the plan is.</p>

<h2>Newborn and Neonatal Care</h2>
<p>The first few days and weeks of a baby's life are the most vulnerable. Our Neonatal Intensive Care Unit is equipped to handle premature babies, low birth weight newborns, and infants with conditions that need immediate medical attention after delivery.</p>

<p>Our NICU has:</p>
<ul>
  <li>Incubators with precise temperature control</li>
  <li>Neonatal ventilators for breathing support</li>
  <li>Phototherapy units for jaundice treatment</li>
  <li>Continuous vital monitoring</li>
  <li>24*7 neonatologist and nursing coverage</li>
</ul>

<p>Parents of high-risk pregnancies often choose us specifically because having a functioning NICU in the same hospital as the maternity unit means their baby gets immediate care if needed, without a stressful transfer to another facility.</p>

<h2>Vaccinations and Preventive Child Healthcare</h2>
<p>One of the most important things you can do for your child's long-term health is to keep their vaccinations up to date. Our paediatric team follows the Indian Academy of Paediatrics immunisation schedule and provides all recommended vaccines from birth through adolescence.</p>

<p>Beyond vaccinations, we also offer:</p>
<ul>
  <li>Growth monitoring and developmental assessment</li>
  <li>Nutritional counselling for children with feeding difficulties or poor weight gain</li>
  <li>School health checks</li>
  <li>Guidance on age-appropriate milestones for parents who have concerns about development</li>
</ul>

<p>Preventive care at the right time can prevent serious illnesses down the line and give parents confidence that their child is growing well.</p>

<h2>Paediatric Emergency Care</h2>
<p>The condition of children can get worse faster than that of adults. High fevers, breathing difficulties, severe dehydration, and allergic reactions need to be assessed and treated quickly. Our emergency department at Jaipur Hospital is equipped to handle paediatric emergencies 24/7, with quick access to our paediatric team and NICU support when needed.</p>

<p>If your child has a very high fever that is not coming down, is breathing fast or struggling to breathe, is unusually drowsy or difficult to wake, or has had a seizure, do not wait. Come in immediately or call our emergency line.</p>

<h2>Child-Friendly Environment</h2>
<p>Hospitals can be frightening for children. We have worked to make our paediatric spaces as welcoming and stress-free as possible, for both children and their parents. Our nurses and doctors are trained to communicate with children in a calm, reassuring way. We take the time to explain what is happening in a way that is appropriate for the child's age, which helps reduce anxiety and makes the experience less traumatic.</p>

<p>We also ensure that parents are closely involved in every step of their child's care. We believe that an informed, calm parent is one of the best things for an unwell child.</p>

<h2>Paediatric Surgery Support</h2>
<p>For children who need surgical intervention, our paediatric team works closely with our general surgery and orthopaedic departments. Common procedures include hernia repair, appendicectomy, and management of fractures in children. Our modular operation theatres and anaesthesia team are experienced in paediatric cases and take every precaution to ensure safe outcomes.</p>

<h2>When Should You See a Paediatrician?</h2>
<p>Bring your child to see our child specialist in Jaipur if you notice:</p>
<ul>
  <li>Fever above 38°C in a baby under three months, or fever lasting more than three days in older children</li>
  <li>Poor feeding or significant weight loss</li>
  <li>Persistent cough, wheezing, or breathing difficulty</li>
  <li>Repeated ear infections or throat infections</li>
  <li>Delayed speech, walking, or social development</li>
  <li>Rashes, especially with fever</li>
  <li>Behavioural changes, excessive irritability, or unusual drowsiness</li>
  <li>Stomach pain with vomiting or diarrhoea lasting more than a day or two</li>
</ul>

<p>When in doubt, it is always better to get your child checked. Paediatric conditions can escalate quickly and early assessment saves a lot of worry and potential complications.</p>

<h2>Cashless Treatment for Children</h2>
<p>Jaipur Hospital is empanelled under Ayushman Bharat, CGHS, and ECHS. Paediatric consultations, NICU care, and inpatient treatment are covered under most of these schemes, which is a significant relief for families managing the cost of a child's hospitalisation.</p>

<h2>Book a Paediatric Consultation</h2>
<p>Our paediatric OPD runs from 9 AM to 8 PM. Emergency paediatric care is available around the clock.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</p>
<p><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Your child deserves the best possible start in life. Visit Jaipur Hospital, a trusted paediatric hospital in Jaipur, and give your child the care they deserve.</p>`,
  },
  {
    id: "icu-emergency",
    name: "ICU & Emergency",
    shortDesc: "Critical care 24/7",
    fullDesc: "Round-the-clock emergency department with rapid response team, advanced life support, and fully equipped ICU/CCU/NICU. Our critical care team is trained to handle all medical, surgical, and trauma emergencies.",
    icon: "Activity",
    color: "text-red-600",
    bg: "bg-red-50",
    treatments: ["24/7 Emergency Care", "Advanced Life Support", "Trauma Care", "ICU Management", "Ventilator Support", "Post-Surgical Critical Care"],
    doctorIds: [],
    img: emergencyImg,
    metaTitle: "24/7 Emergency & ICU Hospital in Jaipur | Jaipur Hospital",
    metaDescription: "Round-the-clock emergency, ICU, CCU & trauma care in Jaipur with advanced ambulance service & NICU. Fast response for critical cases. Call +91 9257029901.",
    htmlContent: `<h1>ICU and Emergency Care in Jaipur | 24/7 Critical Care | Jaipur Hospital</h1>

<h2>Our Emergency Department: Always On, Always Ready</h2>
<p>Our emergency department is open around the clock, every day of the year, and is staffed by experienced emergency physicians, on-call specialists, trained nurses, and paramedics. Immediately upon a patient's arrival, we begin triage. We check how serious the problem is straight away and give priority according to medical needs, so critical patients never have to stand in line.</p>

<p>As a dependable 24-hour hospital in Jaipur, we treat cases ranging from small cuts and sudden sickness to major trauma and problems affecting several organs. Our emergency area has resuscitation bays, crash carts, quick lab tests at the bedside, and fast links to experts in heart care, brain care, bone care, and general surgery.</p>

<h2>Trauma and Accident Emergency Care</h2>
<p>Car crashes, falls, injuries at work, and similar events call for speedy teamwork. Waiting even one hour after major trauma can decide whether someone gets better completely or lives with lasting harm. Our trauma care hospital in Jaipur works hard to cut down that risky time.</p>

<p>We have:</p>
<ul>
  <li>A separate trauma bay stocked with full resuscitation tools</li>
  <li>Round-the-clock digital X-ray and CT scan right away</li>
  <li>Surgical, orthopaedic, and neurosurgery teams on call</li>
  <li>Quick blood bank service for needed transfusions</li>
  <li>Straight route from the emergency room to operation theatre for urgent operations</li>
</ul>

<p>If you or a loved one meets with an accident, call us at +91 92570 29901 or request our ambulance. Our accident emergency hospital in Jaipur team gets set before you reach here.</p>

<h2>Advanced Ambulance Service in Jaipur</h2>
<p>Rushing the patient to the hospital fast and without extra harm comes first. Trained paramedics ride in our GPS-equipped Advanced Life Support ambulances and start helping on the road. This goes beyond simple travel. It delivers treatment while moving.</p>

<p>We are a 24-hour, on-demand ambulance service in Jaipur. All vehicles used are equipped with cardiac monitors, defibrillators, oxygen, IV stands and emergency medication to help calm the patient before reaching our emergency department.</p>

<h2>Intensive Care Unit (ICU and CCU)</h2>
<p>Our Intensive Care Unit provides the best monitoring and treatment for patients who are at life-threatening risk or have recently undergone surgery, and is on par with larger centres. Our Jaipur based ICU hospital treats difficult cases with utmost care and attention.</p>

<p>Features of our ICU include:</p>
<ul>
  <li>24/7 intensivist coverage with critical care doctors present on every shift</li>
  <li>Constant checks of heart rate, blood pressure, oxygen levels, and breathing signs at the bedside</li>
  <li>Ventilator support for anyone who cannot breathe properly</li>
  <li>Arterial lines, central lines, and advanced pressure monitoring</li>
  <li>Strict infection control using HEPA-filtered rooms</li>
  <li>Separate isolation areas for contagious cases</li>
</ul>

<p>Our intensive care unit in Jaipur works as more than basic rooms. It creates a closely watched setting where each patient gets personal nursing care and nonstop doctor supervision.</p>

<h2>Ventilator Support</h2>
<p>Ventilator support is often necessary to sustain life when breathing is severely impaired, a brain crisis occurs, a problem arises after surgery or when there is a serious infection. We have well-equipped ventilator-supported hospital with the latest ventilators and breathing specialists at our Jaipur hospital.</p>

<p>We care for patients on ventilators during their most critical time and safely remove these machines when patients get better, always minimizing risk associated with the use of the ventilator for extended periods.</p>

<h2>Cardiac Care Unit (CCU)</h2>
<p>Heart attacks, serious irregular heartbeats, sudden heart failure, and related heart problems need closer watching than a standard ICU offers. Our Cardiac Care Unit serves as a focused area inside critical care, giving nonstop ECG checks, immediate heart doctor help, and quick moves to procedures when required.</p>

<h2>NICU for Newborns</h2>
<p>Early and/or ill newborns require special critical care. Our NICU has incubators, baby ventilators, and phototherapy lights. The unit is run by paediatric experts, who understand the fragility and strength of newborns.</p>

<p>When families face risky births or early babies, a working NICU inside the same hospital brings real peace of mind.</p>

<h2>What Makes Our Critical Care Different</h2>
<p>Running a critical care hospital in Jaipur involves far more than machines. It takes the right staff, clear steps, and a strong approach to make everything work smoothly during tough times. At Jaipur Hospital:</p>
<ul>
  <li>Specialists arrive within minutes instead of waiting hours</li>
  <li>We treat family updates as important, so our staff keeps everyone informed</li>
  <li>The path from emergency to ICU moves smoothly to prevent risky gaps</li>
  <li>We accept CGHS, ECHS, and Ayushman Bharat for cashless treatment in critical cases</li>
</ul>

<h2>When to Call Us Immediately</h2>
<p>Do not wait if you see any of these signs:</p>
<ul>
  <li>Chest pain, trouble breathing, or signs of a heart attack</li>
  <li>Stroke signs such as sudden weakness, unclear words, or one side of the face dropping</li>
  <li>Head injury from a fall or crash</li>
  <li>Bleeding that will not stop</li>
  <li>Seizures or passing out</li>
  <li>High fever plus confusion or neck stiffness</li>
  <li>Possible poisoning or drug overdose</li>
  <li>Bad stomach pain</li>
  <li>Breathing trouble in kids</li>
</ul>

<h2>Contact Our Emergency Team</h2>
<p><strong>Emergency:</strong> 24/7</p>
<p><strong>Ambulance:</strong> +91 92570 29901</p>
<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</p>
<p><strong>General Enquiry:</strong> 0141-2741465</p>

<p>In a medical emergency, time is of the essence. Rely on Jaipur Hospital, the dependable emergency ICU in Jaipur, for assistance when you most need it.</p>`,
  },
  {
    id: "diagnostics",
    name: "Diagnostics & Imaging",
    shortDesc: "Advanced lab & imaging",
    fullDesc: "NABL-accredited diagnostic laboratory with advanced imaging services including MRI, CT Scan, Digital X-Ray, and comprehensive pathology. We provide accurate, rapid results to support timely clinical decisions.",
    icon: "Microscope",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    treatments: ["MRI Scan", "CT Scan", "Digital X-Ray", "Ultrasound", "Pathology & Biochemistry", "Microbiology"],
    doctorIds: ["dr-divya-meel"],
    img: icuImg,
    metaTitle: "Diagnostic Centre in Jaipur | X-Ray, CT, MRI & Lab Tests",
    metaDescription: "NABL-accredited diagnostic lab in Jaipur offering X-ray, CT scan, MRI, ultrasound & full health checkups with fast reports. Cashless tests available.",
    htmlContent: `<h1>Diagnostics and Imaging in Jaipur | Advanced Lab and Radiology | Jaipur Hospital</h1>

<h2>Why In-House Diagnostics Matter</h2>
<p>When a patient is referred to an outside lab or radiology centre, it introduces delays. The sample travels, the report takes time to come back, the doctor sees it later, and the treatment is pushed back. In emergency situations, that delay can be harmful. Even in routine outpatient care, waiting days for a report is frustrating and inefficient.</p>

<p>At Jaipur Hospital, our diagnostics laboratory and imaging unit are right here in the building. Reports from most tests are ready within hours. In emergencies, critical results are communicated to the treating team immediately. This speed and coordination is one of the most practical advantages we offer patients.</p>

<h2>Pathology and Laboratory Services</h2>
<p>Our NABL-accredited pathology lab handles a comprehensive range of tests with the accuracy and consistency that certification demands. NABL accreditation means the lab meets national quality standards for equipment, processes, sample handling, and reporting, so you can trust what the report says.</p>

<h3>Haematology</h3>
<p>Complete blood count, ESR, peripheral smear, clotting profiles, and related tests that give a detailed picture of your blood health.</p>

<h3>Biochemistry</h3>
<p>Liver function tests, kidney function tests, lipid profiles, blood sugar, including fasting, post-meal, and HbA1c, thyroid function tests, electrolytes, and uric acid, among others.</p>

<h3>Microbiology and Serology</h3>
<p>Blood cultures, urine cultures, stool tests, Widal test for typhoid, dengue NS1 antigen and antibody tests, malaria antigen tests, HIV, HBsAg, and other infection markers.</p>

<h3>Hormonal and Immunological Tests</h3>
<p>Hormone panels for thyroid, reproductive health, adrenal function, and autoimmune markers.</p>

<h3>Urine and Stool Analysis</h3>
<p>Routine examination, culture and sensitivity, and specific tests based on clinical requirements.</p>

<p>For patients managing chronic conditions like diabetes or thyroid disorders, our lab offers convenient repeat testing without the need to visit an external diagnostic centre.</p>

<h2>Digital X-Ray</h2>
<p>Digital X-ray produces clearer images than conventional film X-ray and does so at lower radiation doses. Results are available almost immediately, which is particularly important in emergency settings where a chest X-ray or fracture assessment cannot wait.</p>

<p>Our X-ray centre in Jaipur handles chest X-rays, orthopaedic imaging for fractures and joint assessments, abdominal X-rays, and dental X-rays. Digital images are stored electronically and can be shared with specialists directly for faster reporting.</p>

<h2>Ultrasound and Colour Doppler</h2>
<p>Ultrasound is one of the most versatile diagnostic tools available. It is safe, painless, does not involve radiation, and gives real-time images of soft tissue structures, including organs, blood vessels, and, in pregnancy, the developing baby.</p>

<p>Our ultrasound centre in Jaipur performs:</p>
<ul>
  <li>Abdominal and pelvic ultrasound</li>
  <li>Obstetric ultrasound for all trimesters, including anomaly scans</li>
  <li>Thyroid and neck ultrasound</li>
  <li>Breast ultrasound</li>
  <li>Scrotal ultrasound</li>
  <li>Musculoskeletal ultrasound for soft tissue injuries</li>
  <li>Colour Doppler for blood flow assessment in peripheral vessels, kidneys, and liver</li>
  <li>Carotid Doppler for stroke risk evaluation</li>
</ul>

<p>All ultrasound scans are performed by trained sonologists and reported by experienced radiologists.</p>

<h2>CT Scan</h2>
<p>A CT scan provides detailed cross-sectional images of the body that plain X-rays cannot deliver. It is particularly valuable for evaluating the brain, chest, abdomen, and pelvis, for trauma assessment, cancer staging, vascular conditions, and more.</p>

<p>Our CT scan centre in Jaipur is available round the clock since many CT scans are done in emergency situations, particularly for head injuries, stroke evaluation, and trauma. The scanner is maintained to high technical standards and staffed by radiographers and radiologists experienced in emergency and routine imaging.</p>

<p>Common CT scan indications we handle include head CT for stroke and injury, chest CT for lung conditions and pulmonary embolism, CT angiography for vascular assessment, and abdominal CT for liver, kidney, and bowel conditions.</p>

<h2>MRI Scan</h2>
<p>MRI provides the most detailed soft tissue imaging available without using radiation. It is the gold standard for brain and spinal cord conditions, joint and ligament assessment, pelvic and abdominal soft tissue evaluation, and many other applications where fine detail matters.</p>

<p>Our MRI centre in Jaipur is equipped with a high-field MRI machine capable of producing sharp, diagnostically useful images across a wide range of body regions. Our radiologists specialise in interpreting neurological, musculoskeletal, abdominal, and cardiac MRI studies.</p>

<p>MRI is particularly important for our neurology and orthopaedic teams, and having it in-house means that a scan requested in the morning can be reported and acted upon the same day.</p>

<h2>ECG and Cardiac Diagnostics</h2>
<p>For patients with heart-related concerns, we offer:</p>
<ul>
  <li>12-lead ECG with immediate reporting</li>
  <li>Holter monitoring for a 24 to 48-hour heart rhythm recording</li>
  <li>2D Echocardiography for detailed heart structure and function assessment</li>
  <li>Stress ECG or TMT for evaluating cardiac response to exercise</li>
</ul>

<p>These tests are available both as part of a cardiology consultation and as standalone investigations for patients referred by their doctors.</p>

<h2>Integrated Diagnostics with Clinical Care</h2>
<p>What makes our diagnostic setup genuinely useful is not just the range of tests available but how well the diagnostics team is integrated with the clinical departments. When a surgeon needs an urgent ultrasound before an operation, or when an emergency physician needs a CT result in twenty minutes, the infrastructure and communication channels are there to make that happen.</p>

<p>Routine outpatients can also benefit from this integration. If your doctor is at Jaipur Hospital and your tests are done here, the turnaround is faster, follow-up is easier, and nothing gets lost in transit between providers.</p>

<h2>Health Checkup Packages</h2>
<p>We offer structured health checkup packages for different age groups and risk profiles. These packages combine multiple blood tests, urine analysis, ECG, chest X-ray, and specialist consultation into a single convenient visit. They are especially useful for:</p>
<ul>
  <li>Working adults above 35 who have not had a recent health check</li>
  <li>Patients with a family history of diabetes, heart disease, or cancer</li>
  <li>Pre-employment and pre-surgery workups</li>
  <li>Annual wellness monitoring for patients with chronic conditions</li>
</ul>

<h2>Cashless and Empanelled Diagnostics</h2>
<p>Diagnostic tests are covered under Ayushman Bharat, CGHS, ECHS, and most TPA-linked insurance policies for admitted patients. Our patient coordination team can confirm coverage and assist with authorisation, so there are no surprises when the bill comes.</p>

<h2>Book Your Tests Today</h2>
<p>Most tests do not need an appointment and can be done on a walk-in basis during OPD hours.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</p>
<p><strong>OPD Hours:</strong> 9:00 AM to 8:00 PM | Emergency diagnostics: 24/7</p>
<p><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Accurate diagnosis is the first step toward effective treatment. Visit our diagnostic centre in Jaipur and get reliable results that you and your doctor can act on.</p>`,
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehabilitation",
    shortDesc: "Rehabilitation care",
    fullDesc: "Comprehensive physiotherapy and rehabilitation services for post-surgical recovery, sports injuries, and musculoskeletal conditions. Our team uses evidence-based techniques and modern equipment for optimal recovery.",
    icon: "Dumbbell",
    color: "text-green-500",
    bg: "bg-green-50",
    treatments: ["Post-Surgical Rehab", "Joint Mobilization", "Sports Injury Rehab", "Spinal Therapy", "Neuro Rehabilitation", "Pain Management"],
    doctorIds: [],
    img: icuImg,
    metaTitle: "Best Physiotherapy Centre in Jaipur | Pain Relief & Rehab",
    metaDescription: "Expert physiotherapy in Jaipur for back pain, sports injury, post-surgery & stroke rehabilitation. Personalised treatment plans. Book your session today!",
    htmlContent: `<h1>Physiotherapy in Jaipur | Rehabilitation and Pain Relief | Jaipur Hospital</h1>

<h2>What Physiotherapy Actually Does</h2>
<p>There is a common misconception that physiotherapy is just about exercises. In reality, it is a clinical discipline that uses a combination of manual therapy, targeted exercise programmes, electrotherapy, and education to restore function, reduce pain, and prevent recurrence of injury.</p>

<p>A good physiotherapist does not give you a generic set of exercises and send you home. They assess your movement patterns, identify what is not working properly, and design a programme that addresses the root cause of your problem rather than just the symptoms.</p>

<p>Our physiotherapy centre in Jaipur takes exactly this approach. Every patient gets an individual assessment and a treatment plan tailored to their specific condition, their lifestyle, and their recovery goals.</p>

<h2>Conditions Treated by Our Physiotherapy Team</h2>

<h3>Orthopaedic and Musculoskeletal</h3>
<ul>
  <li>Post-surgical rehabilitation after knee, hip, and shoulder replacement</li>
  <li>Fracture rehabilitation</li>
  <li>Sports injuries, including ligament tears, muscle strains, and tendon injuries</li>
  <li>Lower back pain and sciatica</li>
  <li>Neck pain and cervical spondylosis</li>
  <li>Frozen shoulder and rotator cuff problems</li>
  <li>Knee pain from arthritis or overuse</li>
  <li>Plantar fasciitis and ankle injuries</li>
</ul>

<h3>Neurological Rehabilitation</h3>
<ul>
  <li>Stroke rehabilitation for patients with weakness, balance problems, or speech-related motor issues</li>
  <li>Parkinson's disease management</li>
  <li>Spinal cord injury rehabilitation</li>
  <li>Facial palsy and Bell's palsy</li>
  <li>Peripheral nerve injuries</li>
</ul>

<h3>Other Conditions</h3>
<ul>
  <li>Respiratory physiotherapy for COPD and post-ICU patients</li>
  <li>Post-COVID rehabilitation for patients with persistent fatigue, breathlessness, or weakness</li>
  <li>Geriatric physiotherapy for older patients with mobility concerns</li>
  <li>Antenatal and postnatal physiotherapy for pregnant and new mothers</li>
</ul>

<h2>Post-Surgery Rehabilitation</h2>
<p>Surgery fixes the structural problem. Physiotherapy gets you functional again. This is why post-operative rehabilitation is not optional, it is an essential part of the treatment.</p>

<p>After procedures like knee replacement, hip replacement, or spinal surgery, our rehabilitation centre in Jaipur team begins physiotherapy as early as it is safe to do so. Early mobilisation reduces the risk of complications like deep vein thrombosis, prevents muscle wasting, and leads to significantly better long-term outcomes.</p>

<p>Our post-surgical rehab programmes are designed in close coordination with the operating surgeon so that the physiotherapy progression matches what the surgical repair can handle at each stage of healing.</p>

<h2>Physiotherapy for Back and Neck Pain</h2>
<p>Back pain is one of the most common reasons people visit a physiotherapist, and also one of the most mismanaged. Many people spend years on painkillers when the underlying issue, whether it is a disc problem, muscle imbalance, or postural dysfunction, could be effectively addressed through a structured physiotherapy programme.</p>

<p>If you have been dealing with persistent back pain treatment in Jaipur or neck pain that keeps coming back, our team can assess what is causing it and give you a targeted plan that goes beyond temporary pain relief. We work on strengthening the muscles that support the spine, improving posture, and educating patients on how to protect their back in daily life and at work.</p>

<h2>Sports Injury Rehabilitation</h2>
<p>Athletes and active individuals have specific needs when it comes to recovery. The goal is not just to heal but to return to sport at the same or better level of performance, without the risk of re-injury.</p>

<p>Our sports physiotherapy in Jaipur approach includes injury assessment, guided recovery through progressive loading, sport-specific conditioning, and return-to-play evaluation. Whether you play cricket on weekends or train competitively, we take your return to activity seriously.</p>

<h2>Electrotherapy and Advanced Modalities</h2>
<p>Our physiotherapy department is equipped with a range of therapeutic modalities that complement hands-on treatment:</p>
<ul>
  <li>TENS (Transcutaneous Electrical Nerve Stimulation) for pain relief</li>
  <li>Ultrasound therapy for soft tissue healing</li>
  <li>Interferential therapy for deep tissue pain</li>
  <li>Shortwave diathermy</li>
  <li>Hot and cold therapy</li>
  <li>Traction for spinal decompression</li>
  <li>Wax therapy for hand and joint conditions</li>
</ul>

<p>These modalities are used as part of a broader treatment plan and not as standalone treatments. The physiotherapist decides which combination is appropriate for each patient based on the clinical presentation.</p>

<h2>Neurological Physiotherapy</h2>
<p>Recovery after a stroke, brain injury, or spinal cord injury is a long road, but with consistent, evidence-based physiotherapy, it is a road that leads somewhere meaningful.</p>

<p>Our neuro physiotherapy in Jaipur programme uses techniques like:</p>
<ul>
  <li>Bobath and NDT (Neurodevelopmental Treatment) for stroke patients</li>
  <li>Task-specific training to re-learn functional movements</li>
  <li>Balance and gait retraining</li>
  <li>Spasticity management</li>
  <li>Constraint-induced movement therapy</li>
</ul>

<p>We work with the neurology team to align physiotherapy goals with the overall management plan and support families in understanding how to assist the patient at home between sessions.</p>

<h2>Why In-Hospital Physiotherapy Makes a Difference</h2>
<p>Having physiotherapy within a hospital setting like Jaipur Hospital has specific advantages. Our physiotherapists can coordinate directly with the treating surgeon, physician, or neurologist. They have access to the patient's full medical history and imaging. And when a patient is an inpatient, bedside physiotherapy can begin early without waiting for an external appointment.</p>

<p>For outpatients, our physiotherapy OPD runs regular sessions with flexible scheduling so that working adults and school-going children can access care without disrupting their daily routine.</p>

<h2>When to See a Physiotherapist</h2>
<p>Consider visiting our physiotherapy centre in Jaipur if you have:</p>
<ul>
  <li>Pain or stiffness that has lasted more than a few weeks</li>
  <li>Difficulty with everyday activities like walking, climbing stairs, or lifting</li>
  <li>Recovered from surgery and need structured rehabilitation</li>
  <li>Had a neurological event and want to rebuild function</li>
  <li>A sports injury that is not healing with rest alone</li>
  <li>Recurring back or neck pain that keeps coming back</li>
</ul>

<h2>Book a Physiotherapy Session</h2>
<p>Our physiotherapy OPD is available Monday to Saturday during hospital hours.</p>

<p><strong>Location:</strong> Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur – 302015</p>
<p><strong>Call:</strong> 0141-2741465 | +91 92570 29901</p>

<p>Do not settle for pain or limited movement as a permanent state. Book a session with our physiotherapist in Jaipur today and start moving toward a better, more active life.</p>`,
  },
];

// Unique departments from doctors list (for filter dropdown) – same order everywhere
export const DOCTOR_DEPARTMENTS = [
  "All Departments",
  "Anaesthesia",
  "Cardiology",
  "Diagnostics",
  "ENT",
  "General Medicine",
  "General Surgery",
  "Gynaecology",
  "Orthopaedics",
  "Ophthalmology",
  "Pathology",
  "Pediatrics",
  "Plastic Surgery",
] as const;

export const getDoctorsByDept = (dept: string) =>
  doctors.filter((d) => d.dept === dept);

export const getDoctorById = (id: string) =>
  doctors.find((d) => d.id === id);

export const getSpecialityById = (id: string) =>
  specialities.find((s) => s.id === id);

export const getDoctorsForSpeciality = (specialityId: string) => {
  const spec = getSpecialityById(specialityId);
  if (!spec) return [];
  return spec.doctorIds.map((id) => getDoctorById(id)).filter(Boolean) as Doctor[];
};
