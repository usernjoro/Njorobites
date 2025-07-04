import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Njorobites</h3>
            <p className="text-gray-300 mb-2">
              Experience the authentic taste of Africa with a modern twist.
            </p>
            <p className="text-gray-300">📍 123 Njoro Street, Nairobi, Kenya</p>
            <p className="text-gray-300">📞 +254 794366994</p>
            <p className="text-gray-300">✉️ info@njorobites.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-primary transition">
                Home
              </Link>
              <Link to="/menu" className="block text-gray-300 hover:text-primary transition">
                Menu
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-primary transition">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition">
                Contact
              </Link>
              <Link to="/reservation" className="block text-gray-300 hover:text-primary transition">
                Reservations
              </Link>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Opening Hours</h3>
            <div className="text-gray-300 space-y-1">
              <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
              <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Njorobites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
