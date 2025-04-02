"use client"
import React, { useState } from 'react';
import { CalendarDays, Video, MapPin, Stethoscope } from 'lucide-react';

export default function HeroBanner() {
  const [activeTab, setActiveTab] = useState('appointment');
  
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
            

        <div className="md:w-2/5 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Find doctors, book appointments, and get medical services online.
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex mb-6 border-b">
              <button 
                className={`flex items-center px-4 py-3 font-medium ${activeTab === 'appointment' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('appointment')}
              >
                <CalendarDays size={18} className="mr-2" />
                Book Appointment
              </button>
              <button 
                className={`flex items-center px-4 py-3 font-medium ${activeTab === 'consultation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('consultation')}
              >
                <Video size={18} className="mr-2" />
                Quick Video Help Tips
              </button>
            </div>
            
            {activeTab === 'appointment' && (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                  <div className="flex-1 relative">
                    <MapPin size={16} className="absolute left-3 top-3.5 text-gray-400" />
                    <select className="w-full pl-10 p-3 border rounded text-gray-700 bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Lagos NG</option>                     
                    </select>
                  </div>
                  <div className="flex-1 relative">
                    <Stethoscope size={16} className="absolute left-3 top-3.5 text-gray-400" />
                    <select className="w-full pl-10 p-3 border rounded text-gray-700 bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select Specialty</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                      <option>Orthopedics</option>
                      <option>Dermatology</option>
                      <option>Gynecology</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center">
                  <CalendarDays size={18} className="mr-2" />
                  Find & Book Appointment
                </button>
              </div>
            )}
            
            {activeTab === 'consultation' && (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                  <div className="flex-1 relative">
                    <Stethoscope size={16} className="absolute left-3 top-3.5 text-gray-400" />
                    <select className="w-full pl-10 p-3 border rounded text-gray-700 bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select category</option>
                      <option>General Medicine</option>
                      <option>Pediatrics</option>
                      <option>Dermatology</option>
                      <option>Mental Health</option>
                      <option>Women's Health</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 p-3 rounded-md text-sm">
                  <div className="mr-3 bg-blue-100 p-1 rounded-full">
                    <Video size={16} />
                  </div>
                  Get the best medical tips for just 15 minutes
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center">
                  <Video size={18} className="mr-2" />
                  Start Video Now
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/2 md:h-[28rem] -mb-4 md:-mb-36 md:pl-16">
          <img
            src="/doc.png"
            alt="Healthcare Professional"
            className="w-full h-auto md:h-[28rem]"
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H1000C808,120,808,120,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}