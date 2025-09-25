import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const CardNavbar = () => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 bg-white shadow-sm py-3 transition-all duration-300"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* App Name / Logo */}
        <a
          href="#hero"
          className="flex items-center space-x-2 text-gray-800 font-semibold"
        >
          <img
            src="/assets/odisha.png"
            alt="Odisha Logo"
            width={50}
            height={50}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-gray-600 bold">Department of Family & HealthCare</span>
            <span>Government of Odisha</span>
          </div>
        </a>

        {/* Navbar links */}
        <div className="flex items-center space-x-6 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-700"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};
