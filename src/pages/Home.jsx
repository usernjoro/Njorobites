import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah M.",
    feedback:
      "Absolutely loved the grilled tilapia! Amazing flavors and excellent service.",
  },
  {
    name: "James K.",
    feedback:
      "A perfect blend of traditional and modern dishes. Highly recommended!",
  },
  {
    name: "Lilian W.",
    feedback: "Their samosas are to die for! Cozy and beautiful ambiance too.",
  },
];

const featuredDishes = [
  {
    name: "Grilled Tilapia",
    image:
      "https://www.allrecipes.com/thmb/cf3ZrEzVK52ywEvHEK8K7L6Hqlo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7894897-b2e5c569f105486f8c1f826dfeecf314.jpg",
  },
  {
    name: "Beef Samosas",
    image:
      "https://www.allrecipes.com/thmb/RzE12jY1wBTetr_L7Fm-aZsolSU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/609167-fcde3d214a3b4ee49eaf679ad46198d1.jpg",
  },
  {
    name: "Chapati & Chicken Stew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGouJPp2h79QkDnDLLkPj9OMw6yj0-_b-tNQ&s",
  },
];

function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://explore-cayman.imgix.net/images/MACABUCA-1_2022-11-18-152946_qdle.jpg?crop=focalpoint&domain=explore-cayman.imgix.net&fit=crop&fm=webp&fp-x=0.5&fp-y=0.5&h=1024&ixlib=php-3.3.1&q=61&usm=20&w=1536")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl text-green-500 font-bold mb-4">
            Welcome to Njorobites
          </h1>
          <p className="text-lg mb-6">
            A fusion of African flavors & international cuisines
          </p>
          <Link
            to="/menu"
            className="bg-primary px-6 py-3 rounded text-white font-semibold hover:bg-amber-700 transition"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-white py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Featured Dishes
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="shadow rounded overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-600">
                  Delicious and freshly prepared daily!
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">
            About Njorobites
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At Njorobites, we bring you the authentic taste of Africa fused with
            global inspirations. From sizzling grilled meats to vegan delights,
            our menu caters to every palate. Join us for an unforgettable dining
            experience!
          </p>
          <Link
            to="/about"
            className="bg-primary px-6 py-3 rounded text-white font-semibold hover:bg-amber-700 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          What Our Customers Say
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow rounded p-6 text-center hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-4">"{item.feedback}"</p>
              <h3 className="text-primary font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-primary py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Dine With Us?</h2>
        <p className="text-lg mb-8">
          Reserve your table now and enjoy a world of flavors at Njorobites.
        </p>
        <Link
          to="/reservation"
          className="bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-gray-200 transition inline-block"
        >
          Make a Reservation
        </Link>
      </section>
    </PageTransition>
  );
}

export default Home;
