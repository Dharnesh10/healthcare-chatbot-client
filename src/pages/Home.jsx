import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { CardSection } from "../components/CardSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { AboutUsSection } from "../components/AboutUsSection";
import ImageSection from "../components/ImageSection";
import PhotoGallery from "../components/PhotoGallery";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        {/* <ImageSection /> */}
        <HeroSection />
        <CardSection />
        <AboutUsSection />
        <PhotoGallery />
        {/* <ContactSection /> */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
