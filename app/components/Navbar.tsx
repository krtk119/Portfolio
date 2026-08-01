export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#FAFAFA] border-b border-gray-200 px-6 py-4 flex justify-between items-center z-50">
      <span className="text-gray-900 font-bold text-xl">Kartik</span>
      <div className="flex gap-6">
        <a href="#" className="text-gray-500 hover:text-gray-900 transition">Home</a>
        <a href="#about" className="text-gray-500 hover:text-gray-900 transition">About</a>
        <a href="#education" className="text-gray-500 hover:text-gray-900 transition">Education</a>
        <a href="#experience" className="text-gray-500 hover:text-gray-900 transition">Experience</a>
        <a href="#projects" className="text-gray-500 hover:text-gray-900 transition">Projects</a>
        <a href="#skills" className="text-gray-500 hover:text-gray-900 transition">Skills</a>
        <a href="#contact" className="text-gray-500 hover:text-gray-900 transition">Contact</a>
      </div>
    </nav>
  )
}