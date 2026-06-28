export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-20">
      <h1 className="text-6xl font-bold mb-4 text-center">Kartik</h1>
      <p className="text-2xl text-gray-400 mb-2 text-center">CS (AI) Student @ Brunel University London</p>
      <p className="text-lg text-gray-500 mb-8 text-center">Software Engineer · VC Scholar · Open to Placement</p>
      <p className="text-gray-400 max-w-xl text-center mb-10">
        I build real things — from autonomous robots to open-source AI tools.
        Currently in Year 2 at Brunel, looking for a placement in central London.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/krtk119"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kartik-3242963a8"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-white transition"
        >
          LinkedIn
        </a>
      </div>
    </main>
  )
}