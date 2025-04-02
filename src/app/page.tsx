import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import FeatureCards from '@/components/FeatureCards';
import DoctorSlider from '@/components/DoctorSlider';
import ServiceCategories from '@/components/ServiceCategories';
import TestimonialSlider from '@/components/TestimonialSlider';
import LatestBlogs from '@/components/LatestBlogs';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <div className="container-custom ">
        <FeatureCards />
        {/* <DoctorSlider /> */}
        {/* <TestimonialSlider /> */}
        <LatestBlogs />
      </div>
      <Footer />
    </main>
  );
}
