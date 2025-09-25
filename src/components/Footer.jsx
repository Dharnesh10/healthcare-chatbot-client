import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-gray-700">
        
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} healthcare.gov.in. All rights reserved.
        </p>

        {/* Back to top */}
        <a
          href="#hero"
          className="flex items-center text-sm text-blue-700 hover:underline mt-4 md:mt-0"
        >
          <ArrowUp size={16} className="mr-1" />
          Back to Top
        </a>
      </div>
    </footer>
  );
};
