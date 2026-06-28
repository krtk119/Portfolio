const projects = [
  {
    title: "SpyBot",
    description: "Secure two-way Morse code communication system built in Java for a physical robot. Features QR authentication, autonomous triangular navigation, and LED delivery confirmation.",
    tags: ["Java", "Robotics", "OOP"],
    github: "https://github.com/krtk119",
  },
  {
    title: "SE Education Toolkit",
    description: "Open-source AI-powered lab exercise generator for software engineering education. Built with Next.js 15 and TypeScript. Multiple PRs merged under academic supervision.",
    tags: ["Next.js", "TypeScript", "Open Source"],
    github: "https://github.com/krtk119",
  },
  {
    title: "MiSAR Parser",
    description: "Contributed to a microservice architecture recovery tool. Identified and fixed a Python 3.12 breaking change (ast.Str removal) that caused zero output on analysis.",
    tags: ["Python", "Open Source", "Architecture"],
    github: "https://github.com/krtk119/MiSAR-Parser-and-Model-Transformation",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-gray-400 mb-12">Things I have built and contributed to.</p>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}