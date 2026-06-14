import WaveMid from "./waves/WaveMid";

export default function About() {
  return (
    <section id="about" className="relative px-10 py-20">
      <WaveMid />

      <div className="relative z-10 ">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <div className="flex flex-row-reverse gap-[15px] max-[768px]:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="max-w-2xl text-gray-600 mb-6">
              I'm a <strong>Frontend Developer</strong> passionate about building modern, accessible,
              and performant web applications using <strong>JavaScript, React, Tailwind,</strong> and modern tools.
              I aspire to becoming a <strong>Backend Developer</strong> and also have passion in Arts and Crafts which backup my core skills in <strong>Web Development</strong> and <strong>UI/UX</strong> design.
            </p>
            <a href="https://www.linkedin.com/in/arnold-kiritu" className="inline-block bg-[#f28b82] text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Read More
            </a>
          </div>
          <div className="flex-1">
            <img src="src/assets/RC IMG_9996.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
