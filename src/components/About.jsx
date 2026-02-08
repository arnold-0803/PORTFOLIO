import WaveMid from "./waves/WaveMid";

export default function About() {
  return (
    <section id="about" className="relative px-10 py-20">
      <WaveMid />

      <div className="relative z-10">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="max-w-2xl text-gray-600 mb-6">
          I'm a frontend developer passionate about building modern, accessible,
          and performant web applications using React, Tailwind, and modern tools.
          I also have passion in Arts and Crafts which backup my core skills in Web Dev.
        </p>
        <a href="https://www.linkedin.com/in/arnold-kiritu" className="inline-block bg-[#f28b82] text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
          Read More
        </a>
      </div>
    </section>
  );
}
