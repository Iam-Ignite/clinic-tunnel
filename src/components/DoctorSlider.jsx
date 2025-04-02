"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function DoctorSlider() {
  const doctors = [
    {
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 125,
      image: "/images/doctor-1.jpg"
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Neurologist",
      rating: 4.8,
      reviews: 98,
      image: "/images/doctor-2.jpg"
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Pediatrician",
      rating: 4.7,
      reviews: 112,
      image: "/images/doctor-3.jpg"
    },
    {
      name: "Dr. Emma Wilson",
      specialty: "Dermatologist",
      rating: 4.9,
      reviews: 86,
      image: "/images/doctor-4.jpg"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Top Doctors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Consult with top-rated doctors and specialists
        </p>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{doctor.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{doctor.specialty}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <p className="ml-1 text-sm">
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500"> ({doctor.reviews} reviews)</span>
                  </p>
                </div>
                <button className="mt-4 w-full py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-md"
        >
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-md"
        >
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}