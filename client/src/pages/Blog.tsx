import { Helmet } from "react-helmet-async";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Complete Java Roadmap 2026",
    date: "July 2026",
    description:
      "Learn Java from beginner to advanced with a complete roadmap, projects, and interview preparation.",
  },
  {
    title: "Spring Boot Full Course Guide",
    date: "July 2026",
    description:
      "Build modern REST APIs and full-stack applications using Spring Boot and MySQL.",
  },
  {
    title: "React.js Complete Learning Path",
    date: "July 2026",
    description:
      "Master React.js with hooks, routing, API integration, Tailwind CSS, and projects.",
  },
  {
    title: "Artificial Intelligence & Generative AI",
    date: "July 2026",
    description:
      "Explore AI, LLMs, Prompt Engineering, ChatGPT, and real-world AI applications.",
  },
  {
    title: "DSA Interview Preparation",
    date: "July 2026",
    description:
      "Important DSA topics, coding patterns, and interview questions for software engineers.",
  },
  {
    title: "Git & GitHub Complete Guide",
    date: "July 2026",
    description:
      "Version control, Git workflow, GitHub projects, branches, pull requests, and deployment.",
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Learn By Hariom Blog
          </h1>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore programming tutorials, Full Stack Development,
            Artificial Intelligence, interview preparation,
            project guides, and software engineering resources.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900"
            >
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <CalendarDays size={18} />
                {blog.date}
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {blog.description}
              </p>

              <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition">
                Read More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}

        </div>

        <div className="mt-20 rounded-2xl bg-blue-600 p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            🚀 Keep Learning • Keep Building • Keep Growing
          </h2>

          <p className="mt-4 text-lg">
            New tutorials, coding guides, AI articles, and project-based blogs
            are published regularly on Learn By Hariom.
          </p>
        </div>

      </section>
    </>
  );
}