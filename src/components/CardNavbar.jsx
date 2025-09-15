import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const CardNavbar = () => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 py-5 bg-background/80 backdrop-blur-md shadow-xs"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* App Name on the left */}
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Healthcare</span> Portal
          </span>
        </a>

        {/* Navbar links on the right */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-md text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-md text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-md text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-md text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
