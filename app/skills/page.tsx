const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vercel"],
  },
  {
    category: "Concepts",
    items: ["OOP", "REST APIs", "Data Structures", "Algorithms", "Microservices", "Open Source"],
  },
]

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Skills</h1>
      <p className="text-gray-400 mb-12">What I work with.</p>
      <div className="grid gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">{group.category}</h2>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 text-sm hover:border-gray-400 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}