import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Njorobites
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 font-semibold text-gray-700 hidden md:flex">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/menu" className="hover:text-primary">
            Menu
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-semibold text-gray-700">
          <Link
            to="/"
            className="block hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link to="/reservation" className="hover:text-primary">
            Reservation
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
