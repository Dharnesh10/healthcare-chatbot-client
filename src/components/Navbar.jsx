import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-gray-100 shadow-sm py-2"
          : "bg-white py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">

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


        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-blue-700"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-700"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-opacity duration-200 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-gray-700 text-lg">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-700"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
