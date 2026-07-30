import Image from "next/image"

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
    description: "Contributed to a microservice architecture recovery tool. Identified and fixed a Python 3.12 breaking change that caused zero output on analysis.",
    tags: ["Python", "Open Source", "Architecture"],
    github: "https://github.com/krtk119/MiSAR-Parser-and-Model-Transformation",
  },
  {
    title: "Grade Classification Calculator",
    description: "Web app where students enter their grades and instantly get their UK degree classification. Supports multiple grading schemes and reverse calculation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/krtk119/Grade-Classification-Calculator",
  },
  {
    title: "RotaSync",
    description: "AI-powered shift scheduling app for workplace rotas. Staff submit availability, managers build rotas manually or let the AI auto-generate fair shift assignments using constraint-based search.",
    tags: ["Next.js", "TypeScript", "Python", "Supabase", "AI"],
    github: "https://github.com/krtk119/RotaSync",
  },
  {
  title: "Simon Swift — SwiftBot",
  description: "A Simon Says style memory game built in Swift as a collaborative project. Players follow and repeat increasingly complex sequences of colours and sounds, with difficulty scaling as the game progresses.",
  tags: ["Swift", "iOS", "Game Development"],
  github: "https://github.com/mannycodes20/Simon-Swift---SwiftBot",
},
 {
  title: "Formative Task 5 — SwiftBot Integration",
  description: "Integrated multiple SwiftBot programs (Morse code, dance, shape drawing, light search, zig-zag) into a single menu-driven Java application. Users select a task from the menu and the robot executes the corresponding behaviour.",
  tags: ["Java", "Robotics", "Integration", "OOP"],
  github: "https://github.com/krtk119/Formative-Task-5",
},
]

const technical = [
  {
    role: "Software Engineering Contributor",
    company: "Brunel Talent Marketplace",
    period: "Jun 2026 – Present",
    points: [
      "Contributing to se-education-toolkit, a Next.js 15 AI-powered lab sheet generator",
      "Raising and resolving GitHub Issues, with PRs reviewed by academic leads",
      "Implementing UI/UX improvements including persona cards and reset functionality",
      "Collaborating with senior reviewers Cigdem Sengul and Rumyana Neykova",
    ],
  },
  {
    role: "Research Contributor",
    company: "MiSAR Parser — Dr Nour Ali, Brunel",
    period: "2025 – Present",
    points: [
      "Contributing to a microservice architecture recovery research tool",
      "Identified and fixed a Python 3.12 breaking change (ast.Str removal)",
      "Running benchmarks and documenting results for academic research",
    ],
  },
  {
    role: "Assistant Coach",
    company: "Jam Coding",
    period: "May 2026 – Present",
    points: [
      "Teaching programming concepts to primary school children (Years 1–7)",
      "Managing classroom dynamics across mixed-age groups",
      "Holds Enhanced DBS clearance and Safeguarding certification",
    ],
  },
]

const work = [
  {
    role: "Catering Services Assistant",
    company: "Compass Group UK & Ireland",
    period: "Jun 2026 – Present",
    points: [
      "Front-of-house service at Brunel University London campus",
      "Till operation, food preparation, and stock management",
      "Completed Food Hygiene, Allergen Awareness, and Health & Safety training",
    ],
  },
  {
    role: "Student Recruitment Ambassador",
    company: "Brunel University London",
    period: "May 2026 – Present",
    points: [
      "Selected through competitive application including assessment centre",
      "Representing Brunel at open days and recruitment events",
      "Guiding prospective students through university life and application process",
    ],
  },
  {
    role: "Warehouse Operative",
    company: "TCK Fresh Produce Limited",
    period: "Nov 2025 – Jun 2026",
    points: [
      "Night shifts alongside full-time undergraduate studies",
      "Picking, packing, and processing fresh produce orders under tight deadlines",
      "Demonstrated consistent reliability and strong time management",
    ],
  },
]

const skills = [
  { category: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", items: ["Next.js", "React", "Tailwind CSS", "Node.js"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vercel"] },
  { category: "Concepts", items: ["OOP", "REST APIs", "Data Structures", "Algorithms", "Microservices", "Open Source"] },
]

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] text-gray-900">

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-5xl w-full mt-[-120px]">

          {/* Left — Quote */}
          <div className="flex-1 text-left">
            <p className="text-2xl text-gray-700 font-light leading-relaxed italic mb-6">
              "We can only see a short distance ahead, but we can see plenty there that needs to be done."
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Image
                src="/turing.jpg"
                alt="Alan Turing"
                width={50}
                height={50}
                className="rounded-full object-cover grayscale border border-gray-300"
              />
              <p className="text-gray-400 text-sm">— Alan Mathison Turing · Mathematician & Father of Computer Science · (1912–1954)</p>
            </div>
          </div>

          {/* Right — Photo and details */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/profile.jpg"
              alt="Kartik"
              width={200}
              height={200}
              loading="eager"
              className="rounded-full object-cover mb-6 border-2 border-gray-300"
            />
            <h1 className="text-4xl font-bold mb-2 text-gray-900">Kartik</h1>
            <p className="text-gray-600 mb-1">CS (AI) Student @ Brunel University London</p>
            <p className="text-gray-400 text-sm mb-6">Software Engineer · VC Scholar · Open to Placement</p>
            <div className="flex gap-4">
              <a href="https://github.com/krtk119" target="_blank" rel="noreferrer" className="px-5 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/krtk119" target="_blank" rel="noreferrer" className="px-5 py-2 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-900 transition text-sm">LinkedIn</a>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">About</h2>
        <p className="text-gray-400 mb-8">The person behind the code.</p>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>I'm Kartik, a CS (AI) student at Brunel University London originally from New Delhi, India. I'm a Vice Chancellor's Scholar currently in my second year, working towards a First Class degree while balancing multiple part-time roles and open source contributions.</p>
          <p>I've always been drawn to problem solving. What excites me about CS and AI is the speed at which it can create real impact — a well-built system can solve in seconds what would take humans hours.</p>
          <p>My goal is to work in big tech, building things that matter at scale. I'm currently looking for a placement year in central London as the next step. Outside of tech, I watch sports and read fiction.</p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Experience</h2>
        <p className="text-gray-400 mb-12">Where I have worked and contributed.</p>

        <h3 className="text-xl font-semibold mb-6 text-gray-700">Technical</h3>
        <div className="space-y-8 mb-16">
          {technical.map((item) => (
            <div key={item.role} className="border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition bg-white">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{item.role}</p>
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </div>
                <p className="text-gray-400 text-sm">{item.period}</p>
              </div>
              <ul className="space-y-1">
                {item.points.map((point) => (
                  <li key={point} className="text-gray-500 text-sm">→ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-gray-700">Work Experience</h3>
        <div className="space-y-8">
          {work.map((item) => (
            <div key={item.role} className="border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition bg-white">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{item.role}</p>
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </div>
                <p className="text-gray-400 text-sm">{item.period}</p>
              </div>
              <ul className="space-y-1">
                {item.points.map((point) => (
                  <li key={point} className="text-gray-500 text-sm">→ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Projects</h2>
        <p className="text-gray-400 mb-12">Things I have built and contributed to.</p>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition bg-white">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">{tag}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Skills</h2>
        <p className="text-gray-400 mb-12">What I work with.</p>
        <div className="grid gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:border-gray-400 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Contact</h2>
        <p className="text-gray-400 mb-12">Get in touch.</p>
        <div className="grid gap-6">
          <a href="mailto:119kartikwork@gmail.com" className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition bg-white">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Email</p>
              <p className="text-gray-500 text-sm">119kartikwork@gmail.com</p>
            </div>
          </a>
          <a href="https://github.com/krtk119" target="_blank" rel="noreferrer" className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition bg-white">
            <div>
              <p className="font-semibold text-gray-900 mb-1">GitHub</p>
              <p className="text-gray-500 text-sm">github.com/krtk119</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/krtk119" target="_blank" rel="noreferrer" className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition bg-white">
            <div>
              <p className="font-semibold text-gray-900 mb-1">LinkedIn</p>
              <p className="text-gray-500 text-sm">linkedin.com/in/krtk119</p>
            </div>
          </a>
        </div>
      </section>
      

      {/* Footer */}
<footer className="border-t border-gray-200 px-6 py-8 text-center">
  <p className="text-gray-400 text-sm">© 2026 Kartik · Built with Next.js & Tailwind CSS</p>
  <div className="flex justify-center gap-6 mt-4">
    <a href="https://github.com/krtk119" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 text-sm transition">GitHub</a>
    <a href="https://www.linkedin.com/in/krtk119" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 text-sm transition">LinkedIn</a>
    <a href="mailto:119kartikwork@gmail.com" className="text-gray-400 hover:text-gray-900 text-sm transition">Email</a>
  </div>
</footer>
    </main>
  )
}