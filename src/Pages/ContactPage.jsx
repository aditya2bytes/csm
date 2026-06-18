export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-20">
      <h1 className="text-5xl font-bold mb-10">Contact Us</h1>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          rows="6"
          placeholder="Message"
          className="w-full border p-4 rounded-xl"
        />

        <button className="bg-rose-600 text-white px-8 py-4 rounded-xl">
          Send Message
        </button>
      </form>
    </div>
  );
}
