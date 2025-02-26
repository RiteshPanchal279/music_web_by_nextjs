import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructure from "@/components/Instructure";
import MusiclCards from "@/components/MusiclCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusiclCards />
      <UpcomingWebinars />
      <Instructure/>
      <Footer/>
    </main>
  );
}
