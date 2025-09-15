import { Activity, FileText, Syringe } from "lucide-react";
import { Link } from "react-router-dom";

export const CardSection = () => {
  const primaryColor = "#7969c9"; // violet theme color

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Healthcare <span className="text-primary"> Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Outbreak Alerts */}
          <Link to="/outbreak-alerts" className="group relative block">
            <div
              className="p-[2px] rounded-2xl"
              style={{
                background: `linear-gradient(90deg, ${primaryColor}40, ${primaryColor}30, ${primaryColor}40)`,
              }}
            >
              <div className="relative bg-card/70 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col items-center gap-5 transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105 shadow-lg cursor-pointer">
                <div
                  className="p-5 rounded-full bg-card/30 backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform duration-500"
                  style={{ boxShadow: `0 0 15px ${primaryColor}40` }}
                >
                  <Activity className="h-10 w-10" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-wide">
                  Outbreak Alerts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated on the latest healthcare outbreaks and emergency alerts.
                </p>
              </div>
            </div>
          </Link>

          {/* Reports */}
          <Link to="/reports" className="group relative block">
            <div
              className="p-[2px] rounded-2xl"
              style={{
                background: `linear-gradient(90deg, ${primaryColor}40, ${primaryColor}30, ${primaryColor}40)`,
              }}
            >
              <div className="relative bg-card/70 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col items-center gap-5 transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105 shadow-lg cursor-pointer">
                <div
                  className="p-5 rounded-full bg-card/30 backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform duration-500"
                  style={{ boxShadow: `0 0 15px ${primaryColor}40` }}
                >
                  <FileText className="h-10 w-10" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-wide">
                  Reports
                </h3>
                <p className="text-sm text-muted-foreground">
                  Generate, view, and analyze detailed healthcare reports quickly.
                </p>
              </div>
            </div>
          </Link>

          {/* Vaccination Scheduler */}
          <Link to="/vaccination-scheduler" className="group relative block">
            <div
              className="p-[2px] rounded-2xl"
              style={{
                background: `linear-gradient(90deg, ${primaryColor}40, ${primaryColor}30, ${primaryColor}40)`,
              }}
            >
              <div className="relative bg-card/70 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col items-center gap-5 transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105 shadow-lg cursor-pointer">
                <div
                  className="p-5 rounded-full bg-card/30 backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform duration-500"
                  style={{ boxShadow: `0 0 15px ${primaryColor}40` }}
                >
                  <Syringe className="h-10 w-10" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-wide">
                  Vaccination Scheduler
                </h3>
                <p className="text-sm text-muted-foreground">
                  Plan and track your vaccination schedules with timely reminders.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
