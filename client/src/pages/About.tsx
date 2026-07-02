export default function About() {
  return (
    <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">

      {/* About Me */}
      <div>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          👨‍💻 About Me
        </h2>

        <p>
          Hi, I'm <strong>Hariom Tiwari</strong>, a passionate{" "}
          <strong>Full Stack Java Developer</strong> with a strong interest in
          building modern, scalable, and user-friendly web applications. I
          specialize in <strong>Java, Spring Boot, React.js, MySQL, Git, and GitHub</strong>,
          enabling me to develop real-world applications that are efficient,
          reliable, and easy to maintain.
        </p>

        <p className="mt-4">
          Along with web development, I am actively exploring{" "}
          <strong>Artificial Intelligence (AI)</strong>,{" "}
          <strong>Generative AI</strong>,{" "}
          <strong>Prompt Engineering</strong>, and{" "}
          <strong>AI-powered applications</strong>.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          🚀 My Mission
        </h2>

        <p>
          My goal is to combine Full Stack Development and Artificial Intelligence
          to build innovative solutions that create a real impact.
        </p>
      </div>

      {/* What You'll Find */}
      <div>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          📚 What You'll Find Here
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>💻 Full Stack Java Development</li>
          <li>⚛️ React.js & Spring Boot Projects</li>
          <li>🤖 AI & Generative AI</li>
          <li>📖 Programming Tutorials</li>
          <li>🗺️ Roadmaps</li>
          <li>🎯 Interview Prep</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="rounded-xl bg-blue-600 p-6 text-center text-white">
        <h2 className="text-2xl font-bold">
          💙 Keep Learning • Keep Building • Keep Growing
        </h2>
      </div>

    </div>
  );
}