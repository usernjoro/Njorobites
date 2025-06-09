import PageTransition from "../components/PageTransition";

function About() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center mb-16 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1556912999-1fa02c4775f3?auto=format&fit=crop&w=1350&q=80")`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            About Njorobites
          </h1>
          <p className="text-lg max-w-xl mx-auto text-gray-300">
            Discover our story, mission, and the passionate team behind the
            flavors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20 space-y-16">
        {/* Our Story */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://images.unsplash.com/photo-1556912999-1fa02c4775f3?auto=format&fit=crop&w=800&q=80"
            alt="Restaurant"
            className="rounded-lg shadow-lg md:w-1/2 transition-transform duration-300 hover:scale-105"
          />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Njorobites is a modern culinary destination, born out of a love
              for African cuisine and a passion for global flavors. Located in
              the heart of the city, we bring the spirit of hospitality to every
              plate we serve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our chefs use fresh, locally sourced ingredients to create bold,
              vibrant dishes that delight the senses. Whether you're here for a
              casual lunch, a family dinner, or a special occasion, Njorobites
              promises an unforgettable dining experience.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To celebrate African culinary traditions while embracing the
              richness of global cuisine, providing every guest with a warm,
              authentic, and innovative dining experience.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading destination for food lovers seeking authentic
              African flavors, fostering community and cultural appreciation
              through the art of food.
            </p>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-4xl font-bold text-primary">Meet Our Team</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our talented team of chefs, servers, and hospitality professionals
            are dedicated to making your visit to Njorobites extraordinary. From
            our kitchen to your table, we pour heart and soul into everything we
            do.
          </p>
          <img
            src="https://images.unsplash.com/photo-1543353071-087092ec393e?auto=format&fit=crop&w=800&q=80"
            alt="Team"
            className="rounded-lg shadow-xl mx-auto w-full md:w-2/3 transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>
    </PageTransition>
  );
}

export default About;
