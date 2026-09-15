export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  img: string;
  content: string[];
}

const placeholder = "/placeholder.svg";

export const blogPosts: BlogPost[] = [
  {
    slug: "heart-health-tips-from-jaipur-hospital-cardiology",
    title: "Heart Health Tips from Jaipur Hospital Cardiology Team",
    excerpt: "Practical advice from our cardiologists to keep your heart healthy—diet, exercise, and when to see a doctor.",
    date: "2025-02-15",
    author: "Jaipur Hospital",
    category: "Cardiology",
    img: placeholder,
    content: [
      "Your heart works round the clock. At Jaipur Hospital, our cardiology team sees hundreds of patients every month. Here are evidence-based tips we share with every patient.",
      "Eat a heart-friendly diet: Include more vegetables, fruits, whole grains, and lean protein. Limit salt, sugar, and fried foods. Small changes can lower blood pressure and cholesterol.",
      "Stay active: Aim for at least 30 minutes of moderate exercise (walking, cycling, swimming) most days. It strengthens the heart and improves circulation.",
      "Know your numbers: Get your blood pressure, blood sugar, and cholesterol checked regularly. Early detection helps prevent serious heart disease.",
      "Don’t ignore symptoms: Chest discomfort, breathlessness, unexplained fatigue, or swelling in legs—get checked. Our 24/7 emergency and OPD are here for you at Lal Kothi, Tonk Road, Jaipur.",
    ],
  },
  {
    slug: "when-to-consider-knee-replacement-surgery",
    title: "When to Consider Knee Replacement Surgery",
    excerpt: "Signs that it might be time for knee replacement and what to expect at Jaipur Hospital’s orthopaedic department.",
    date: "2025-02-10",
    author: "Jaipur Hospital",
    category: "Orthopaedics",
    img: placeholder,
    content: [
      "Knee pain that doesn’t improve with rest, medicines, or physiotherapy can affect your quality of life. Our orthopaedic team at Jaipur Hospital helps you decide if knee replacement is right for you.",
      "You may be a candidate if: pain limits daily activities like walking or climbing stairs, stiffness persists especially in the morning, you have significant knee deformity or instability, and non-surgical options have not helped enough.",
      "We offer total knee replacement with modern implants and a dedicated physiotherapy programme for faster recovery. Most patients walk with support within a day and resume light activities in a few weeks.",
      "Consult our senior orthopaedic consultants for a personalised assessment. Book an appointment or visit our OPD at Lal Kothi, Tonk Road, Jaipur.",
    ],
  },
  {
    slug: "pregnancy-care-and-delivery-at-jaipur-hospital",
    title: "Pregnancy Care and Delivery at Jaipur Hospital",
    excerpt: "From antenatal check-ups to safe delivery—how our obstetrics and gynaecology team supports expecting mothers.",
    date: "2025-02-05",
    author: "Jaipur Hospital",
    category: "Gynaecology",
    img: placeholder,
    content: [
      "Jaipur Hospital’s obstetrics and gynaecology department offers complete care for expecting mothers—from the first trimester to delivery and beyond.",
      "We provide regular antenatal check-ups, ultrasound, high-risk pregnancy care, and counselling. Our labour ward is equipped for normal and caesarean deliveries with round-the-clock specialist support.",
      "We focus on comfort, safety, and clear communication so you and your family are well informed at every step. Post-delivery, we guide you on breastfeeding, vaccination, and newborn care.",
      "To schedule a visit or for any pregnancy-related query, call us or visit our OPD. We are here to support you through this special journey.",
    ],
  },
  {
    slug: "understanding-24-7-emergency-and-icu-at-jaipur-hospital",
    title: "Understanding Our 24/7 Emergency and ICU at Jaipur Hospital",
    excerpt: "What happens when you bring a patient to our emergency ward and how our ICU supports critical care.",
    date: "2025-01-28",
    author: "Jaipur Hospital",
    category: "Emergency",
    img: placeholder,
    content: [
      "Medical emergencies don’t wait. At Jaipur Hospital, our emergency department and ICU work 24/7 to stabilise and treat serious conditions.",
      "When you arrive, our triage team quickly assesses the patient. We have facilities for trauma, heart attacks, strokes, severe infections, and post-surgical care. Our emergency number 0141-2741465 and +91 92570 29901 are always active.",
      "The ICU is equipped with ventilators, monitors, and round-the-clock intensivist support. We believe in keeping families informed and involved in the care plan wherever possible.",
      "If you or a loved one needs urgent care, come to Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur. We are committed to saving lives and giving the best chance of recovery.",
    ],
  },
  {
    slug: "importance-of-regular-health-checkups",
    title: "Importance of Regular Health Check-ups",
    excerpt: "Why annual or periodic health check-ups matter and what we offer at Jaipur Hospital.",
    date: "2025-01-20",
    author: "Jaipur Hospital",
    category: "Preventive Care",
    img: placeholder,
    content: [
      "Many diseases can be managed or even prevented when detected early. Regular health check-ups are one of the best investments you can make in your long-term health.",
      "At Jaipur Hospital we offer comprehensive health packages that include blood tests, ECG, chest X-ray, ultrasound, and consultations with physicians. You can choose a package based on your age, family history, and lifestyle.",
      "Check-ups help track blood pressure, sugar, cholesterol, kidney and liver function, and more. Your doctor can then advise on diet, exercise, and any further tests or treatment.",
      "Book a health check-up at our OPD. We are empanelled with CGHS, ECHS, Ayushman Bharat, and several insurance TPAs for cashless options where applicable.",
    ],
  },
  {
    slug: "pediatric-care-and-vaccination-at-jaipur-hospital",
    title: "Pediatric Care and Vaccination at Jaipur Hospital",
    excerpt: "How we care for children from newborns to adolescents, including NICU and vaccination.",
    date: "2025-01-15",
    author: "Jaipur Hospital",
    category: "Pediatrics",
    img: placeholder,
    content: [
      "Children need specialised care. Our paediatric team at Jaipur Hospital looks after everything from newborn care in the NICU to routine vaccinations and treatment of childhood illnesses.",
      "We follow the recommended immunisation schedule and keep parents informed about each vaccine. Our NICU is equipped to care for premature or sick newborns under expert supervision.",
      "Whether it’s fever, infections, growth concerns, or adolescent health, our doctors are trained to put both the child and the family at ease. We also guide on nutrition and development.",
      "Schedule a visit for your child at our OPD. We are here to support your child’s health from day one.",
    ],
  },
  {
    slug: "eye-care-and-cataract-surgery-at-jaipur-hospital",
    title: "Eye Care and Cataract Surgery at Jaipur Hospital",
    excerpt: "When to see an ophthalmologist and what to expect from cataract and other eye treatments.",
    date: "2025-01-10",
    author: "Jaipur Hospital",
    category: "Ophthalmology",
    img: placeholder,
    content: [
      "Good vision is essential for daily life. Our ophthalmology department at Jaipur Hospital offers diagnosis and treatment for a wide range of eye conditions.",
      "Cataract is one of the most common procedures we perform. Modern surgery is quick, with minimal discomfort and a short recovery. We also manage glaucoma, diabetic retinopathy, and routine eye check-ups.",
      "If you notice blurred vision, difficulty reading, glare, or any sudden change in vision, do not delay. Early treatment can prevent permanent damage in many cases.",
      "Visit our eye OPD for a comprehensive examination. We are located at Lal Kothi, Tonk Road, Jaipur.",
    ],
  },
  {
    slug: "ent-health-ear-nose-throat-care",
    title: "ENT Health: Ear, Nose & Throat Care at Jaipur Hospital",
    excerpt: "When to see an ENT specialist and common conditions we treat.",
    date: "2025-01-05",
    author: "Jaipur Hospital",
    category: "ENT",
    img: placeholder,
    content: [
      "Ear, nose, and throat issues can affect hearing, breathing, and quality of life. Our ENT department at Jaipur Hospital provides full diagnosis and treatment for these conditions.",
      "We treat ear infections, hearing loss, sinusitis, tonsillitis, nasal blockage, and throat disorders. We also perform procedures such as tonsillectomy, septoplasty, and ear surgery when needed.",
      "Persistent cold, ear pain, hearing difficulty, or recurrent sore throat should be evaluated. Delaying can lead to complications or chronic problems.",
      "Book an ENT consultation at our OPD. Our specialists will guide you on the best course of treatment for you or your child.",
    ],
  },
  {
    slug: "diabetes-and-hypertension-management",
    title: "Diabetes and Hypertension Management at Jaipur Hospital",
    excerpt: "How our physicians help you control sugar and blood pressure for a healthier life.",
    date: "2024-12-28",
    author: "Jaipur Hospital",
    category: "General Medicine",
    img: placeholder,
    content: [
      "Diabetes and hypertension are common but manageable with the right care and lifestyle changes. Our general medicine team at Jaipur Hospital works with patients to achieve better control.",
      "We focus on diet, exercise, and regular monitoring along with medicines. We also screen for complications such as eye, kidney, and heart issues so they can be addressed early.",
      "Sticking to your treatment plan and attending follow-ups is important. We help you set realistic targets and adjust treatment as needed.",
      "If you have diabetes or high blood pressure, or if you want a check-up, visit our OPD. We are here to support your long-term health.",
    ],
  },
  {
    slug: "diagnostics-and-pathology-at-jaipur-hospital",
    title: "Diagnostics and Pathology at Jaipur Hospital",
    excerpt: "How our lab and imaging services support accurate diagnosis and treatment.",
    date: "2024-12-20",
    author: "Jaipur Hospital",
    category: "Diagnostics",
    img: placeholder,
    content: [
      "Accurate diagnosis is the first step to effective treatment. Jaipur Hospital has a NABL-accredited laboratory and modern imaging including MRI, CT, X-ray, and ultrasound.",
      "Our pathologists and radiologists work with your doctor to ensure timely and reliable reports. We offer routine blood tests, histopathology, and specialised tests as required.",
      "Quick and precise results help in faster decision-making, especially in emergencies and before surgery. Reports are available within the promised time and can be collected or sent digitally where applicable.",
      "For any lab or imaging requirement, contact our reception or visit the hospital. We serve both outpatients and inpatients with the same standard of care.",
    ],
  },
  {
    slug: "post-surgery-recovery-and-physiotherapy",
    title: "Post-Surgery Recovery and Physiotherapy at Jaipur Hospital",
    excerpt: "How physiotherapy helps you recover faster after orthopaedic or other surgeries.",
    date: "2024-12-15",
    author: "Jaipur Hospital",
    category: "Physiotherapy",
    img: placeholder,
    content: [
      "Recovery after surgery doesn’t end at the operation table. Physiotherapy plays a key role in restoring movement, strength, and confidence.",
      "Our physiotherapy team designs programmes for joint replacement, spine surgery, sports injuries, and general rehabilitation. We use evidence-based techniques and modern equipment to speed up recovery.",
      "Starting physiotherapy early (as advised by your surgeon) reduces stiffness, pain, and the risk of complications. We also teach home exercises so you can continue progress after discharge.",
      "If you have had surgery or have a musculoskeletal condition, ask your doctor for a physiotherapy referral. We are here to help you get back to your daily activities safely.",
    ],
  },
  {
    slug: "cghs-echs-ayushman-bharat-cashless-treatment",
    title: "CGHS, ECHS, Ayushman Bharat: Cashless Treatment at Jaipur Hospital",
    excerpt: "How government and insurance empanelment helps you access cashless care at Jaipur Hospital.",
    date: "2024-12-10",
    author: "Jaipur Hospital",
    category: "Patient Info",
    img: placeholder,
    content: [
      "Jaipur Hospital is empanelled under CGHS, ECHS, Ayushman Bharat, and several insurance TPAs. This means eligible patients can avail cashless or reimbursable treatment with us.",
      "CGHS beneficiaries (central government employees and pensioners) and ECHS beneficiaries (ex-servicemen and families) can get treatment as per their scheme. Ayushman Bharat cardholders can also access our services under the scheme guidelines.",
      "We recommend carrying your valid ID, card, and any referral or approval as required by your scheme. Our billing team will guide you through the process and paperwork.",
      "For queries on empanelment and cashless treatment, contact our front desk or call 0141-2741465. We are committed to making quality healthcare accessible to all.",
    ],
  },
  {
    slug: "know-your-heart-signs-and-symptoms",
    title: "Know Your Heart: Signs and Symptoms Not to Ignore",
    excerpt: "Warning signs of heart trouble and when to seek emergency care.",
    date: "2024-12-05",
    author: "Jaipur Hospital",
    category: "Cardiology",
    img: placeholder,
    content: [
      "Heart disease can show up in different ways. Recognising the signs early can save lives. Here are symptoms that should prompt a visit to a doctor or the emergency room.",
      "Chest pain or discomfort (pressure, squeezing, or heaviness), especially with exertion or stress; shortness of breath at rest or with minimal activity; unexplained fatigue; swelling in legs; palpitations or irregular heartbeat; and dizziness or fainting—all need evaluation.",
      "In case of severe chest pain, sudden breathlessness, or collapse, do not wait. Call our emergency number or come directly to Jaipur Hospital. Our team is ready 24/7.",
      "Regular check-ups with our cardiology team can help identify risk factors and prevent major events. Prevention and early action are the best medicine for the heart.",
    ],
  },
  {
    slug: "hypertension-diet-and-lifestyle-tips",
    title: "Hypertension: Diet and Lifestyle Tips from Our Physicians",
    excerpt: "Simple changes that can help control high blood pressure along with medication.",
    date: "2024-11-28",
    author: "Jaipur Hospital",
    category: "General Medicine",
    img: placeholder,
    content: [
      "High blood pressure can be managed with a combination of medicines and healthy habits. Our physicians at Jaipur Hospital often share these tips with patients.",
      "Reduce salt: Use less table salt and avoid packaged and processed foods high in sodium. Add flavour with herbs and spices instead. Eat more potassium-rich foods like bananas, green leafy vegetables, and pulses (as per your doctor’s advice).",
      "Stay active: Regular walking or light exercise helps lower blood pressure. Maintain a healthy weight and avoid smoking and excess alcohol. Stress management and good sleep also play a role.",
      "Take your medicines as prescribed and get your blood pressure checked regularly. For personalised advice, book a consultation with our general medicine or cardiology team.",
    ],
  },
  {
    slug: "why-choose-jaipur-hospital-for-your-family",
    title: "Why Choose Jaipur Hospital for Your Family’s Healthcare",
    excerpt: "A quick look at what makes Jaipur Hospital a trusted name in Rajasthan.",
    date: "2024-11-20",
    author: "Jaipur Hospital",
    category: "About Us",
    img: placeholder,
    content: [
      "Since 1998, Jaipur Hospital has been serving the people of Rajasthan with a focus on quality, accessibility, and compassion. Here’s why families trust us.",
      "We offer multispeciality care under one roof—cardiology, orthopaedics, gynaecology, paediatrics, general surgery, emergency, ICU, and more. Our team of experienced doctors and support staff work together for your best outcome.",
      "We have modern diagnostics, NABL-accredited lab, and 24/7 emergency and ICU. We are empanelled with CGHS, ECHS, Ayushman Bharat, and insurance for cashless treatment where applicable.",
      "Whether you need a routine check-up, specialist consultation, or emergency care, we are here at Lal Kothi, Near S.M.S. Stadium, Tonk Road, Jaipur. Call us at 0141-2741465 or +91 92570 29901. We care for life.",
    ],
  },
];

export const getBlogBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getRecentBlogs = (count: number) =>
  [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
