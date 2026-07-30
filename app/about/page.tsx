export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">About Me</h1>
      <p className="text-gray-400 mb-12">The person behind the code.</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-3">Who I am</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm Kartik, a CS (AI) student at Brunel University London originally from New Delhi, India. 
            I'm a Vice Chancellor's Scholar currently in my second year, working towards a First Class degree 
            while balancing multiple part-time roles and open source contributions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Why CS and AI</h2>
          <p className="text-gray-400 leading-relaxed">
            I've always been drawn to problem solving. What excites me about CS and AI specifically is the 
            speed at which it can create real impact — a well-built system can solve in seconds what would 
            take humans hours. That intersection of logic, creativity, and real-world impact is what keeps 
            me going.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">What I'm working towards</h2>
          <p className="text-gray-400 leading-relaxed">
            My goal is to work in big tech — building things that matter and contributing to solving real 
            problems at scale. I'm currently looking for a placement year in central London as the next 
            step towards that. Long term, I want to push the boundaries of what technology can do for the world.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Outside of tech</h2>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me watching sports or buried in a fictional book. 
            I think both feed the same thing — a love for stories, strategy, and seeing how things unfold.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Currently</h2>
          <ul className="text-gray-400 space-y-2">
            <li>→ Building RotaSync — an AI-powered shift scheduling app</li>
            <li>→ Contributing to open source via Brunel Talent Marketplace</li>
            <li>→ Daily DSA practice on LeetCode</li>
            <li>→ Open to placement opportunities in central London</li>
          </ul>
        </section>
      </div>
    </main>
  )
}