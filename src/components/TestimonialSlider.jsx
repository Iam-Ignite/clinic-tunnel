"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      text: "I found an excellent doctor through Doccure. The appointment process was so simple, and the doctor was amazing. Highly recommend!",
      image: "/images/patient-1.jpg"
    },
    {
      name: "Emily Clark",
      rating: 5,
      text: "The service was exceptional from start to finish. I was able to book an appointment with a specialist the same day. Very impressed!",
      image: "/images/patient-2.jpg"
    },
    {
      name: "Robert Wilson",
      rating: 4,
      text: "Great platform for finding healthcare professionals. The interface is user-friendly and the doctors are highly qualified.",
      image: "/images/patient-3.jpg"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read testimonials from our satisfied patients
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden relative">
                <Image 
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/4 md:pl-8">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonials[activeIndex].text}"
              </blockquote>
              
              <p className="font-medium text-blue-600">
                {testimonials[activeIndex].name}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={prevTestimonial}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md"
        >
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextTestimonial}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md"
        >
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
