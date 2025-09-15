import React, { useState } from "react";
import { StarBackground } from "@/components/StarBackground";
import { CardNavbar } from "../components/CardNavbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { Footer } from "../components/Footer";

const OutbreakAlerts = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Alert Sent!",
        description: "Your outbreak alert has been successfully submitted.",
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
        <h1 className="text-3xl font-bold mb-6">Outbreak Alerts</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Stay updated on the latest outbreak information and healthcare alerts.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-xs max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Send an Outbreak Alert</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="region" className="block text-sm font-medium mb-2">
                Region
              </label>
              <input
                type="text"
                id="region"
                name="region"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background 
                           focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="e.g. New York City"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background 
                           focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Provide details about the outbreak..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Alert"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OutbreakAlerts;
