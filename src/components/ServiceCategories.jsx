import {
  Search,
  Sprout,
  Baby,
  HeartPulse,
  Stethoscope,
  Scissors,
  Flower,
  Activity,
} from "lucide-react";

export default function GynecologicalServices() {
  const services = [
    {
      title: "Preventive Care",
      icon: <Search size={62} color="#4f46e5" />,
      services: [
        "Annual well-woman examinations",
        "Pap smear tests",
        "HPV screening and vaccination",
        "Breast examinations",
        "STI testing and prevention counseling",
      ],
    },
    {
      title: "Reproductive Health",
      icon: <Sprout size={62} color="#4f46e5" />,
      services: [
        "Contraception counseling and management",
        "IUD insertion and removal",
        "Birth control implants and injections",
        "Family planning services",
        "Emergency contraception",
      ],
    },
    {
      title: "Pregnancy Care",
      icon: <Baby size={62} color="#4f46e5" />,
      services: [
        "Preconception counseling",
        "Prenatal care and monitoring",
        "Genetic screening",
        "High-risk pregnancy management",
        "Postpartum care",
      ],
    },
    {
      title: "Specialized Treatments",
      icon: <HeartPulse size={62} color="#4f46e5" />,
      services: [
        "Menopause management",
        "Hormone replacement therapy",
        "Treatment for menstrual disorders",
        "PCOS management",
        "Endometriosis treatment",
      ],
    },
    {
      title: "Gynecological Procedures",
      icon: <Stethoscope size={62} color="#4f46e5" />,
      services: [
        "Colposcopy",
        "Hysteroscopy",
        "Endometrial biopsy",
        "LEEP procedures",
        "Dilation and curettage (D&C)",
      ],
    },
    {
      title: "Surgical Services",
      icon: <Scissors size={62} color="#4f46e5" />,
      services: [
        "Laparoscopic surgery",
        "Hysterectomy (various approaches)",
        "Myomectomy for fibroid removal",
        "Ovarian cyst removal",
        "Tubal ligation",
      ],
    },
    {
      title: "Fertility Services",
      icon: <Flower size={62} color="#4f46e5" />,
      services: [
        "Fertility evaluation and testing",
        "Ovulation tracking",
        "Medication management for fertility",
        "Intrauterine insemination (IUI)",
        "Referrals for advanced reproductive technologies",
      ],
    },
    {
      title: "Pelvic Health",
      icon: <Activity size={62} color="#4f46e5" />,
      services: [
        "Pelvic floor therapy",
        "Treatment for urinary incontinence",
        "Management of pelvic organ prolapse",
        "Pelvic pain evaluation and treatment",
        "Urogynecological care",
      ],
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive women's health services provided by our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium mb-4 text-center text-blue-600">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
