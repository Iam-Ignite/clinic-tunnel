import React from 'react';
import { Stethoscope, Building, Pill, Beaker, ClipboardCheck, Baby, Leaf, LineChart, Shield, Search, Calendar, MessageCircle, FileText } from 'lucide-react';

export default function FeatureCards() {
    const features = [
        {
          icon: <Stethoscope size={24} />,
          title: "Consult Online",
          description: "Get expert gynecological advice through online consultations.",
        },
        {
          icon: <Calendar size={24} />,
          title: "Book an Appointment",
          description: "Schedule a virtual or in-person consultation at your convenience.",
        },
        {
          icon: <MessageCircle size={24} />,
          title: "Personalized Guidance",
          description: "Receive tailored health advice for your concerns.",
        },
        {
          icon: <FileText size={24} />,
          title: "Medical Reports Review",
          description: "Get professional insights on your test results and health reports.",
        },
      ];
      
  const gynecologyServices = [
    {
      icon: <ClipboardCheck size={28} />,
      title: "Routine Gynecological Exams",
      description: "Annual wellness visits including pap smears, breast exams, and preventive screenings",
      buttonText: "Book Annual Exam",
      illustration: "/exams2.jpg"
    },
    {
      icon: <Baby size={28} />,
      title: "Pregnancy Care",
      description: "Comprehensive prenatal care, monitoring, and education throughout your pregnancy journey",
      buttonText: "Schedule Prenatal Visit",
      illustration: "/pregnancy1.jpg"
    },
    {
      icon: <Leaf size={28} />,
      title: "Fertility Treatments",
      description: "Specialized care for couples trying to conceive, including testing and treatment options",
      buttonText: "Fertility Consultation",
      illustration: "/fertility1.jpg"
    },
    {
      icon: <LineChart size={28} />,
      title: "Menopause Management",
      description: "Personalized care to manage symptoms and maintain health during perimenopause and beyond",
      buttonText: "Menopause Consultation",
      illustration: "/menopause.jpg"
    },
    {
      icon: <Shield size={28} />,
      title: "Birth Control Counseling",
      description: "Guidance on contraceptive options to find the best fit for your health and lifestyle",
      buttonText: "Birth Control Consultation",
      illustration: "/BirthControl.jpg"
    },
    {
      icon: <Search size={28} />,
      title: "Gynecological Conditions",
      description: "Diagnosis and treatment for PCOS, endometriosis, fibroids, and other women's health concerns",
      buttonText: "Book Appointment",
      illustration: "/GynecologicalConditions.jpg"
    }
  ];
  
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Our Services</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Everything you need for your healthcare journey in one place</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 hover:translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md group"
              >
                <div className="bg-blue-50 text-blue-600 p-4 rounded-lg inline-flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 w-14 h-14">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Women's Health Services</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Comprehensive gynecological care tailored to your needs at every stage of life</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gynecologyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative  h-60">
                  <img 
                    src={service.illustration} 
                    alt={service.title} 
                    className="w-full h-66 object-contain p-3 rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white/10"></div>
                </div>
                <div className="p-6 flex-grow">
                  {/* <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-5">
                    {service.icon}
                  </div> */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}