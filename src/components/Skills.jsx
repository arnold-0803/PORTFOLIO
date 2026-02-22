export default function Skills() {
  return (
    <section className="px-10 py-20">
      <h3 className="text-3xl font-semibold mb-10">Skills & Tools</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Git", "Figma", "Next.js", "TypeScript"].map(
          (skill, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow hover:-translate-y-1 transition"
            >
              <p className="font-medium">{skill}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
