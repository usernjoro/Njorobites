function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Njorobites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
