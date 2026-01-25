import WaveTop from "./waves/WaveTop";

export default function Hero() {
  return (
    <section id="home" className="relative px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
      <WaveTop />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Hello! 👋 <br /> I'm Arnold Kells
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Frontend Developer & UI Engineer
        </p>
        <button className="bg-[#f28b82] text-white px-7 py-3 rounded-full shadow hover:scale-105 transition">
          View My Work
        </button>
      </div>

      <div className="bg-[#ffe3d3] rounded-[40px] h-[300px] flex items-center justify-center text-gray-400 text-lg shadow relative z-10">
        Your Illustration / Photo Here
      </div>
    </section>
  );
}
