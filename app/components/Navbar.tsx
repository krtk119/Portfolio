export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center z-50">
      <span className="text-white font-bold text-xl">Kartik</span>
      <div className="flex gap-6">
        <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
        <a href="/projects" className="text-gray-400 hover:text-white transition">Projects</a>
        <a href="/skills" className="text-gray-400 hover:text-white transition">Skills</a>
        <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
      </div>
    </nav>
  )
}