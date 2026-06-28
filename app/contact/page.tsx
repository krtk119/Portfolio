export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Contact</h1>
      <p className="text-gray-400 mb-12">Get in touch.</p>
      <div className="grid gap-6">
        <a
          href="mailto:119kartikwork@gmail.com"
          className="flex items-center gap-4 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
        >
          <div>
            <p className="font-semibold mb-1">Email</p>
            <p className="text-gray-400 text-sm">119kartikwork@gmail.com</p>
          </div>
        </a>
        <a
          href="https://github.com/krtk119"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
        >
          <div>
            <p className="font-semibold mb-1">GitHub</p>
            <p className="text-gray-400 text-sm">github.com/krtk119</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/kartik-3242963a8"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
        >
          <div>
            <p className="font-semibold mb-1">LinkedIn</p>
            <p className="text-gray-400 text-sm">linkedin.com/in/kartik-3242963a8</p>
          </div>
        </a>
      </div>
    </main>
  )
}