import { Helmet } from "react-helmet-async";
import {
  Github,
  ExternalLink,
  Code2,
  Calendar,
} from "lucide-react";

const projects = [
  {
    title: "Learn By Hariom",
    description:
      "A complete Full Stack Learning Platform with courses, roadmaps, blogs, authentication, admin dashboard, certificates, and user management.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    github: "https://github.com/hariomtiwar457890-create/learnbyhariom",
    demo: "#",
    status: "In Progress",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio showcasing my skills, projects, achievements, and contact information.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/hariomtiwar457890-create",
    demo: "#",
    status: "Completed",
  },
  {
    title: "Student Management System",
    description:
      "A Java-based application to manage student records, attendance, and results efficiently.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
  {
    title: "AI Assistant",
    description:
      "An AI-powered assistant capable of understanding voice commands, automating tasks, and answering user queries.",
    tech: ["Python", "AI", "LLM"],
    github: "#",
    demo: "#",
    status: "In Development",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A complete online shopping platform with authentication, payment integration, and admin panel.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#",
    status: "Planning",
  },
  {
    title: "Online Quiz System",
    description:
      "Interactive quiz platform with leaderboard, score tracking, and performance analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="text-center">
          <Code2 className="mx-auto h-14 w-14 text-blue-600" />

          <h1 className="mt-5 text-5xl font-bold">
            My Projects
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Explore real-world projects built using Java, Spring Boot, React,
            AI, and modern web technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
            >
              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-green-600">
                <Calendar size={18} />
                {project.status}
              </div>

              <div className="mt-8 flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            🚀 Building Real-World Solutions
          </h2>

          <p className="mt-4 text-lg">
            Every project helps me improve my skills in Full Stack Development,
            Artificial Intelligence, and Software Engineering.
          </p>

        </div>

      </section>
    </>
  );
}