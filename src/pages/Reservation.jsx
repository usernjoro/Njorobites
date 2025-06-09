import PageTransition from "../components/PageTransition";

function Reservation() {
  return (
    <PageTransition>
      <section className="py-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Make a Reservation
        </h1>
        <form className="space-y-6 bg-white p-6 rounded shadow">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Date</label>
            <input
              type="date"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Time</label>
            <input
              type="time"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Guests</label>
            <input
              type="number"
              min="1"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-amber-700 transition"
          >
            Submit Reservation
          </button>
        </form>
      </section>
    </PageTransition>
  );
}

export default Reservation;
