import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import WaveFooter from "./waves/WaveFooter";

// 🔁 OPTIONAL: hardcode keys if not using .env
// const SERVICE_ID = "service_xxxxxx";
// const TEMPLATE_ID = "template_xxxxxx";
// const PUBLIC_KEY = "xxxxxxxxxxxx";

export default function Contact() {
  const formRef = useRef(null);
  const lastSentRef = useRef(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // 🕵️ honeypot field
  });

  const [status, setStatus] = useState("");
  const [toast, setToast] = useState("");

  // ✅ input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ simple validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛑 honeypot spam check
    if (form.company) return;

    // 🛑 rate limit (10 seconds)
    const now = Date.now();
    if (now - lastSentRef.current < 10000) {
      setToast("⏳ Please wait before sending again.");
      return;
    }

    // 🛑 validation
    if (!form.name || !form.email || !form.message) {
      setToast("⚠️ Please fill all fields.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setToast("⚠️ Enter a valid email.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      lastSentRef.current = now;
      setStatus("success");
      setToast("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });

      // auto hide toast
      setTimeout(() => setToast(""), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setToast("❌ Failed to send. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="px-10 py-24 grid md:grid-cols-2 gap-12 items-center relative"
    >
      <WaveFooter />

      {/* LEFT */}
      <div className="relative z-10">
        <h3 className="text-3xl font-semibold mb-4">Let's Connect!</h3>
        <p className="text-gray-600 mb-4">
          Get in touch and let's create something amazing!
        </p>
        <p className="mb-2">📧 arnoldkells@example.com</p>
        <p>🔗 LinkedIn | GitHub</p>
      </div>

      {/* FORM */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow space-y-4 relative z-10"
      >
        {/* 🕵️ HONEYPOT (hidden from humans) */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f28b82]"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f28b82]"
        />

        <textarea
          rows="4"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f28b82]"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#f28b82] text-white w-full py-3 rounded-full shadow hover:scale-105 transition disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {toast}
        </div>
      )}
    </section>
  );
}