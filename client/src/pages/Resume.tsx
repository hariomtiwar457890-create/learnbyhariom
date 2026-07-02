import { Helmet } from "react-helmet-async";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-16">

        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-xl">

          <h1 className="text-5xl font-bold">
            Hariom Tiwari
          </h1>

          <p className="mt-3 text-xl">
            Full Stack Java Developer | AI Enthusiast | Software Engineer
          </p>

          <div className="mt-8 flex flex-wrap gap-5">

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>tiwarihariom211@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 6206152782</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Durgapur, Bihar, India</span>
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              download
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </span>
            </a>

            <a
              href="https://github.com/hariomtiwar457890-create"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white px-6 py-3 transition hover:bg-white hover:text-blue-700"
            >
              <span className="flex items-center gap-2">
                <Github size={18} />
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/hariom-tiwari-913a8537a"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white px-6 py-3 transition hover:bg-white hover:text-blue-700"
            >
              <span className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </span>
            </a>

          </div>

        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* About */}
          <div className="rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">

            <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold">
              <Briefcase className="text-blue-600" />
              Professional Summary
            </h2>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              Passionate Full Stack Java Developer with hands-on experience in
              Java, Spring Boot, React.js, MySQL, Git, GitHub, and modern web
              technologies. Interested in Artificial Intelligence, Generative AI,
              Prompt Engineering, and building scalable software solutions.
            </p>

          </div>

          {/* Skills */}
          <div className="rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">

            <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold">
              <Code2 className="text-green-600" />
              Technical Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {[
                "Java",
                "Spring Boot",
                "React.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "MySQL",
                "Git",
                "GitHub",
                "REST API",
                "Artificial Intelligence",
                "Generative AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Projects */}
          <div className="rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">

            <h2 className="mb-5 text-2xl font-bold">
              Featured Projects
            </h2>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300">

              <li>🚀 Learn By Hariom Platform</li>
              <li>💼 Personal Portfolio Website</li>
              <li>📚 Student Management System</li>
              <li>🤖 AI Assistant Project</li>
              <li>🛒 E-Commerce Application</li>

            </ul>

          </div>

          {/* Education */}
          <div className="rounded-2xl border bg-white p-8 shadow dark:bg-slate-900">

            <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold">
              <GraduationCap className="text-purple-600" />
              Education & Learning
            </h2>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              Continuously learning Full Stack Java Development,
              Artificial Intelligence, Data Structures & Algorithms,
              System Design, Cloud Technologies, and Software Engineering
              through practical projects and industry-focused roadmaps.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}