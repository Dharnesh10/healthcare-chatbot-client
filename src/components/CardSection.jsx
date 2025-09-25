import { Activity, FileText, Syringe } from "lucide-react";
import { Link } from "react-router-dom";

export const CardSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Healthcare <span className="text-blue-700">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Outbreak Alerts */}
          <Link
            to="/outbreak-alerts"
            className="block border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="p-4 rounded-full bg-blue-50 mb-4">
                <Activity className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Outbreak Alerts
              </h3>
              <p className="text-sm text-gray-600">
                Stay updated on the latest healthcare outbreaks and emergency
                alerts.
              </p>
            </div>
          </Link>

          {/* Reports */}
          <Link
            to="/reports"
            className="block border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="p-4 rounded-full bg-blue-50 mb-4">
                <FileText className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reports
              </h3>
              <p className="text-sm text-gray-600">
                Upload, generate, and analyze healthcare reports securely.
              </p>
            </div>
          </Link>

          {/* Vaccination Scheduler */}
          <Link
            to="/vaccination-scheduler"
            className="block border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="p-4 rounded-full bg-blue-50 mb-4">
                <Syringe className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vaccination Scheduler
              </h3>
              <p className="text-sm text-gray-600">
                Plan and track your vaccination schedules with timely reminders.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
