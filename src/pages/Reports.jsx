import React, { useState } from "react";
import { StarBackground } from "@/components/StarBackground";
import { CardNavbar } from "../components/CardNavbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { Footer } from "../components/Footer";

const Reports = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Report Submitted!",
        description: "Your healthcare report has been successfully uploaded.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarBackground />
      <CardNavbar />
      <ThemeToggle />

      {/* Page Content */}
      <main className="relative z-10 container mx-auto px-4 pt-32">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Upload and submit your healthcare reports securely.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-xs max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Upload a Report</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="reportTitle"
                className="block text-sm font-medium mb-2"
              >
                Report Title
              </label>
              <input
                type="text"
                id="reportTitle"
                name="reportTitle"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background 
                           focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="e.g. COVID-19 Analysis Report"
              />
            </div>

            <div>
              <label
                htmlFor="reportFile"
                className="block text-sm font-medium mb-2"
              >
                Upload File
              </label>
              <input
                type="file"
                id="reportFile"
                name="reportFile"
                required
                accept="application/pdf" // Only allows PDF
                className="block w-full text-sm text-muted-foreground
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-md file:border-0
                           file:text-sm file:font-semibold
                           file:bg-primary file:text-primary-foreground
                           hover:file:bg-primary/90"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
