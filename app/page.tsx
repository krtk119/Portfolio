import Image from "next/image"
import Reveal from "@/app/components/Reveal"

const education = [
  {
    institution: "Brunel University London",
    degree: "BSc Computer Science (Artificial Intelligence)",
    period: "2025 – 2029",
    predictedGrade: "First Class Honours",
    points: [
      "Vice Chancellor's Scholar (top 10% of cohort)",
      "Maintaining a First Class average while balancing multiple part-time roles and open source contributions",
    ],
  },
  {
    institution: "University of Southern Denmark",
    degree: "International Summer School - Introduction to R",
    period: "August 2026",
    predictedGrade: "Certificate of Completion",
    points: [
      "Selected for fully funded international summer school in Odense, Denmark",
      "Completed intensive R programming course covering data analysis and statistical computing",
      "One of a small number of Brunel students selected for the programme",
    ],
  },
]

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
  {
    role: "Web Officer",
    company: "Brunel Cyber Security Society",
    period: "Jul 2026 – Present",
    points: [
      "Managing and maintaining the society's website and digital presence",
      "Coordinating digital promotion with the Societies' Administrator",
      "Running the society's social media accounts",
      "Presenting the society in a respectable and professional manner",
    ],
  },
  {
    role: "PAL Leader",
    company: "Brunel University London — Academic Skills (ASK)",
    period: "Sep 2026 – Present",
    points: [
      "Volunteering to lead Peer Assisted Learning (PAL) sessions for Year 1 students",
      "Supporting student transition to university life and academic study",
      "Developing leadership, communication and mentoring skills",
      "Completed official PAL Leader training during Welcome Week",
    ],
  },
]

const work = [
  {
    role: "Student Brand Ambassador",
    company: "Deloitte",
    period: "Sep 2026 – Present",
    points: [
      "Selected as Deloitte Brand Ambassador for 2026/27 academic year through Higherin Academy",
      "Promoting Deloitte Early Careers opportunities to students at Brunel University London",
      "Collaborating with university societies to expand reach and drive diversity and inclusion",
      "Organising campus activations including stall setups, event promotion and social media content",
    ],
  },
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
  { category: "Languages", items: ["Java", "Python", "R", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", items: ["Next.js", "React", "Tailwind CSS", "Node.js", "ggplot2", "dplyr", "tidyverse"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vercel"] },
  { category: "Concepts", items: ["OOP", "REST APIs", "Data Structures", "Algorithms", "Microservices", "Open Source", "Data Analysis", "Statistical Computing"] },
]

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] text-gray-900">

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 max-w-5xl w-full mt-[-120px]">

          {/* Left — Quote */}
          <div className="flex-1 text-left">
            <p className="hero-animate hero-delay-1 text-2xl text-gray-700 font-light leading-relaxed italic mb-6">
              "We can only see a short distance ahead, but we can see plenty there that needs to be done."
            </p>
            <div className="hero-animate hero-delay-2 flex items-center gap-4 mt-2">
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
              className="profile-image rounded-full object-cover mb-6 border-2 border-gray-300 hero-animate hero-delay-1"
            />
            <h1 className="hero-animate hero-delay-2 text-4xl font-bold mb-2 text-gray-900">Kartik</h1>
            <p className="hero-animate hero-delay-3 text-gray-600 mb-1">CS (AI) Student @ Brunel University London</p>
            <p className="hero-animate hero-delay-3 text-gray-400 text-sm mb-6">Software Engineer · VC Scholar · Open to Placement</p>
            <div className="hero-animate hero-delay-4 flex gap-4">
              <a href="https://github.com/krtk119" target="_blank" rel="noreferrer" className="premium-button px-5 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/krtk119" target="_blank" rel="noreferrer" className="premium-button px-5 py-2 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-900 transition text-sm">LinkedIn</a>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <Reveal>
        <section id="about" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">About</h2>
          <p className="text-gray-400 mb-8">The person behind the code.</p>
          <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>I'm Kartik, a second-year Computer Science (AI) student at Brunel University London, Vice Chancellor's Scholar, and someone who genuinely loves building things.</p>
          <p>My goal is simple: work at a company where the engineering bar is high and the problems are hard. I want to be in rooms where the best people are, learning fast, shipping real software, and eventually leading teams that build products used by millions.</p>
          <p>Right now I'm doing everything I can to close the gap between where I am and where I want to be, including open source contributions, placement applications, daily DSA practice, and projects I'm actually proud of. I treat every year of university like it counts, because it does.</p>
          <p>Outside of code: sports, fiction, and the kind of conversations that go on too long but you don't want to end.</p>
        </div>
        </section>
      </Reveal>

      {/* Education */}
      <Reveal>
        <section id="education" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Education</h2>
          <p className="text-gray-400 mb-8">Where I've learned and grown.</p>
          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.institution} className="premium-card border border-gray-200 rounded-xl p-6 bg-white">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">{item.institution}</p>
                    <p className="font-semibold text-gray-900">{item.degree}</p>
                    <p className="text-gray-400 text-sm">{item.predictedGrade}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{item.period}</p>
                </div>
                <ul className="space-y-1 mb-6">
  {item.points.map((point) => (
    <li key={point} className="text-gray-500 text-sm">→ {point}</li>
  ))}
</ul>

{/* Modules table — only for Brunel */}
{item.institution === "Brunel University London" && (
  <div className="mt-4 border-t border-gray-100 pt-4">
    <p className="text-sm font-semibold text-gray-700 mb-3">Modules</p>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Year 1</p>
        <ul className="space-y-1">
          {["Introduction to Programming", "Logic and Computation", "Information Systems and Organisation", "Programming Applications", "Data and Information", "Group Project"].map((mod) => (
            <li key={mod} className="text-gray-500 text-xs">· {mod}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Year 2</p>
        <ul className="space-y-1">
          {["Graduate Development", "Software Development and Management", "Usability Engineering", "Fundamentals of Algorithms", "Algorithms and their Applications", "Networks and Operating Systems", "Level 5 Group Project", "Project Proposal", "Individual Project Report"].map((mod) => (
            <li key={mod} className="text-gray-500 text-xs">· {mod}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Experience */}
      <Reveal>
        <section id="experience" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Experience</h2>
          <p className="text-gray-400 mb-12">Where I have worked and contributed.</p>

          <h3 className="text-xl font-semibold mb-6 text-gray-700">Technical</h3>
          <div className="space-y-8 mb-16">
            {technical.map((item) => (
              <div key={item.role} className="premium-card border border-gray-200 rounded-xl p-6 bg-white">
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
              <div key={item.role} className="premium-card border border-gray-200 rounded-xl p-6 bg-white">
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
      </Reveal>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Projects</h2>
          <p className="text-gray-400 mb-12">Things I have built and contributed to.</p>
        </Reveal>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <div className="premium-card border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-badge text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">{tag}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition">
                  View on GitHub →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <Reveal>
        <section id="skills" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Skills</h2>
          <p className="text-gray-400 mb-12">What I work with.</p>
          <div className="grid gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-badge px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Contact */}
      <Reveal>
        <section id="contact" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Contact</h2>
          <p className="text-gray-400 mb-12">Get in touch.</p>
          <div className="grid gap-6">
            <a href="mailto:119kartikwork@gmail.com" className="premium-card flex items-center gap-4 border border-gray-200 rounded-xl p-6 bg-white">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p className="text-gray-500 text-sm">119kartikwork@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/krtk119" target="_blank" rel="noreferrer" className="premium-card flex items-center gap-4 border border-gray-200 rounded-xl p-6 bg-white">
              <div>
                <p className="font-semibold text-gray-900 mb-1">GitHub</p>
                <p className="text-gray-500 text-sm">github.com/krtk119</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/krtk119" target="_blank" rel="noreferrer" className="premium-card flex items-center gap-4 border border-gray-200 rounded-xl p-6 bg-white">
              <div>
                <p className="font-semibold text-gray-900 mb-1">LinkedIn</p>
                <p className="text-gray-500 text-sm">linkedin.com/in/krtk119</p>
              </div>
            </a>
          </div>
        </section>
      </Reveal>

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