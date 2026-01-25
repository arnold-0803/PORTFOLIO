import WaveBottom from "./waves/WaveBottom";

const projects = [
  {
    title: "Custom Carz Platform",
    image: "/projects/custom-carz.png",
    link: "https://github.com/arnold-0803/custom-carz-project",
  },
  {
    title: "E-commerce UI",
    image: "/projects/ecommerce-ui.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    link: "#",
  },
  {
    title: "Dashboard App",
    image: "/projects/dashboard.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-10 py-20">
      <WaveBottom />

      <div className="relative z-10">
        <h3 className="text-3xl font-semibold mb-10">My Projects</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-4 shadow hover:-translate-y-1 hover:shadow-lg transition block"
            >
              <div className="h-36 bg-gray-100 rounded-xl mb-3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-center">{project.title}</h4>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#f28b82] text-white px-8 py-3 rounded-full shadow hover:scale-105 transition">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
