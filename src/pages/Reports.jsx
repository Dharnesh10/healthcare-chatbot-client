import React, { useState } from "react";
import { CardNavbar } from "../components/CardNavbar";
import { Footer } from "../components/Footer";
import { Send } from "lucide-react";

const Reports = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMessage(
        "✅ Report Submitted! Your healthcare report has been successfully uploaded."
      );
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      <CardNavbar />

      {/* Page Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-4">Reports</h1>
        <p className="text-lg text-gray-600 mb-10">
          Upload and submit your healthcare reports securely.
        </p>

        <div className="bg-white border border-gray-300 p-8 rounded-md shadow-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Upload a Report</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Report Title */}
            <div>
              <label
                htmlFor="reportTitle"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Report Title
              </label>
              <input
                type="text"
                id="reportTitle"
                name="reportTitle"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="e.g. COVID-19 Analysis Report"
              />
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="reportFile"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Upload File (PDF Only)
              </label>
              <input
                type="file"
                id="reportFile"
                name="reportFile"
                required
                accept="application/pdf"
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
              <Send size={16} />
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <p className="mt-6 text-green-700 font-medium">{successMessage}</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
