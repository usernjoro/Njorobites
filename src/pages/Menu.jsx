import PageTransition from "../components/PageTransition";

const dishes = [
  {
    name: "Grilled Chicken",
    price: "$12.99",
    desc: "Juicy marinated grilled chicken with seasonal veggies.",
    image:
      "https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-760x1050.jpg",
    category: "Main Dish",
  },
  {
    name: "Beef Samosas",
    price: "$5.99",
    desc: "Crispy homemade beef samosas served with chutney.",
    image:
      "https://www.allrecipes.com/thmb/RzE12jY1wBTetr_L7Fm-aZsolSU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/609167-fcde3d214a3b4ee49eaf679ad46198d1.jpg",
    category: "Starter",
  },
  {
    name: "Chapati & Beans",
    price: "$8.99",
    desc: "Traditional chapati served with spiced beans.",
    image:
      "https://images.unsplash.com/photo-1604908177523-9371bdbf1688?auto=format&fit=crop&w=800&q=80",
    category: "Vegetarian",
  },
  {
    name: "Tilapia Fry",
    price: "$14.99",
    desc: "Fried whole tilapia with kachumbari and ugali.",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    category: "Seafood",
  },
  {
    name: "Goat Stew",
    price: "$13.99",
    desc: "Tender goat meat simmered in rich spiced broth.",
    image:
      "https://img-global.cpcdn.com/recipes/1aa8c4562f0f1e17/680x964cq90/kenyan-goat-meat-stew-recipe-main-photo.webp",
    category: "Main Dish",
  },
  {
    name: "Vegetable Rice",
    price: "$9.99",
    desc: "Fragrant rice tossed with mixed vegetables.",
    image:
      "https://www.joyousapron.com/wp-content/uploads/2019/01/Easy-Mixed-Vegetable-Rice-Pic-2.jpg",
    category: "Vegetarian",
  },
];

function Menu() {
  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="border rounded shadow hover:scale-105 hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="rounded mb-4 h-48 object-cover"
              />
              <div className="flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {dish.name}
                  </h3>
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
                    {dish.category}
                  </span>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                </div>
                <span className="text-primary font-bold text-lg">
                  {dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default Menu;
