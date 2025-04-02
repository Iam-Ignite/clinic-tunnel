"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 px-6 md:px-16">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Clinic Logo" 
              width={300} 
              height={300}
              className="md:h-20 h-12 w-auto"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-500 font-medium">Home</Link>
            <Link href="/patients" className="text-gray-700 hover:text-blue-500 transition-colors">Patients</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/pharmacy" className="text-gray-700 hover:text-blue-500 transition-colors">Pharmacy</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-500 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-500 transition-colors">Login</Link>
            <Link href="/signup" className="btn-primary">Sign Up</Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <Link href="/" className="block text-blue-500 font-medium">Home</Link>
            <Link href="/doctors" className="block text-gray-700 hover:text-blue-500 transition-colors">Doctors</Link>
            <Link href="/patients" className="block text-gray-700 hover:text-blue-500 transition-colors">Patients</Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/pharmacy" className="block text-gray-700 hover:text-blue-500 transition-colors">Pharmacy</Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-500 transition-colors">Blog</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-500 transition-colors">Contact</Link>
            <div className="pt-3 space-y-2">
              <Link href="/login" className="block text-gray-700 hover:text-blue-500 transition-colors">Login</Link>
              <Link href="/signup" className="block btn-primary inline-block">Sign Up</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
