import React, { useState } from "react";
import { CardNavbar } from "../components/CardNavbar";
import { Footer } from "../components/Footer";
import { Send } from "lucide-react";

const OutbreakAlerts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMessage(
        "✅ Alert Sent! Your outbreak alert has been successfully submitted."
      );
      setIsSubmitting(false);
  }, 1500);
  };


  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      <CardNavbar />

      {/* Page Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-4">Outbreak Alerts</h1>
        <p className="text-lg text-gray-600 mb-10">
          Stay updated on the latest outbreak information and healthcare alerts.
        </p>

        <div className="bg-white border border-gray-300 p-8 rounded-md shadow-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Send an Outbreak Alert</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Region
              </label>
              <input
                type="text"
                id="region"
                name="region"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="e.g. Bhubaneswar"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none"
                placeholder="Provide details about the outbreak..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Alert"}
              <Send size={16} />
            </button>
          </form>

          {/* Dummy Confirmation Message */}
          {successMessage && (
            <p className="mt-6 text-green-700 font-medium">{successMessage}</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OutbreakAlerts;
