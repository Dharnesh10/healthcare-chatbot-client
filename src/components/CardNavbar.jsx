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
          className="flex items-center space-x-2 text-gray-800 font-semibold text-xl"
          href="#hero"
        >
          <img
            src="/assets/odisha.png"
            alt="Odisha Logo"
            width={40}
            height={40}
          />
          <span>Healthcare Portal</span>
        </a>

        {/* Navbar links */}
        <div className="flex items-center space-x-6 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-700"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-700"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
