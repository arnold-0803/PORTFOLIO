import WaveFooter from "./waves/WaveFooter";

export default function Contact() {
  return (
    <section id="contact" className="px-10 py-24 grid md:grid-cols-2 gap-12 items-center relative">
      <WaveFooter />

      <div className="relative z-10">
        <h3 className="text-3xl font-semibold mb-4">Let's Connect!</h3>
        <p className="text-gray-600 mb-4">
          Get in touch and let's create something amazing!
        </p>
        <p className="mb-2">📧 arnoldkells@example.com</p>
        <p>🔗 LinkedIn | GitHub</p>
      </div>

      <form className="bg-white p-8 rounded-3xl shadow space-y-4 relative z-10">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f28b82]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f28b82]"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f28b82]"
        />
        <button
          type="submit"
          className="bg-[#f28b82] text-white w-full py-3 rounded-full shadow hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
