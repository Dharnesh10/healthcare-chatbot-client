import React from "react";
import { StarBackground } from "@/components/StarBackground";
import { CardNavbar } from "../components/CardNavbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";

const VaccinationScheduler = () => {
  
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarBackground />
      <CardNavbar />
      <ThemeToggle />

      {/* Page Content */}
      <main className="relative z-10 container mx-auto px-4 pt-32">
        <h1 className="text-3xl font-bold mb-6">Vaccination Scheduler</h1>
      </main>
      <Footer />
    </div>
  );
};

export default VaccinationScheduler;
