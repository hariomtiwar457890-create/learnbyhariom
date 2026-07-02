import { Helmet } from "react-helmet-async";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  Award,
  BookOpen,
  Code,
} from "lucide-react";

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left Profile Card */}
          <div className="rounded-2xl border bg-white p-8 shadow-lg dark:bg-slate-900">

            <div className="flex flex-col items-center">

              <img
                src="https://ui-avatars.com/api/?name=Hariom+Tiwari&size=250&background=2563eb&color=fff"
                alt="Hariom Tiwari"
                className="h-36 w-36 rounded-full"
              />

              <h1 className="mt-5 text-3xl font-bold">
                Hariom Tiwari
              </h1>

              <p className="mt-2 text-blue-600 font-semibold">
                Full Stack Java Developer
              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>tiwarihariom211@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <span>+91 6206152782</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" />
                <span>Durgapur, Bihar, India</span>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a href="https://github.com/hariomtiwar457890-create" target="_blank" rel="noreferrer">
                <Github size={26} />
              </a>

              <a href="https://www.linkedin.com/in/hariom-tiwari-913a8537a" target="_blank" rel="noreferrer">
                <Linkedin size={26} />
              </a>

              <a href="https://www.instagram.com/hariomtiwari" target="_blank" rel="noreferrer">
                <Instagram size={26} />
              </a>

              <a href="https://youtube.com/@hariomcodding" target="_blank" rel="noreferrer">
                <Youtube size={26} />
              </a>

              <a href="https://t.me/Diler_brhaman" target="_blank" rel="noreferrer">
                <Send size={26} />
              </a>

            </div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* About */}
            <div className="rounded-2xl border bg-white p-8 shadow-lg dark:bg-slate-900">

              <div className="flex items-center gap-3">
                <User className="text-blue-600" />
                <h2 className="text-2xl font-bold">
                  About Me
                </h2>
              </div>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Hi, I'm <strong>Hariom Tiwari</strong>, a passionate
                Full Stack Java Developer with expertise in Java,
                Spring Boot, React.js, MySQL, Git, and GitHub.
                I also enjoy working with Artificial Intelligence,
                Generative AI, Prompt Engineering, and modern software
                development technologies.
              </p>

            </div>

            {/* Skills */}
            <div className="rounded-2xl border bg-white p-8 shadow-lg dark:bg-slate-900">

              <div className="flex items-center gap-3">
                <Code className="text-green-600" />
                <h2 className="text-2xl font-bold">
                  Skills
                </h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Java",
                  "Spring Boot",
                  "React",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "MySQL",
                  "Git",
                  "GitHub",
                  "REST API",
                  "AI",
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

            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border bg-white p-6 text-center shadow-lg dark:bg-slate-900">
                <BookOpen className="mx-auto text-blue-600" />
                <h3 className="mt-4 text-3xl font-bold">25+</h3>
                <p>Courses</p>
              </div>

              <div className="rounded-2xl border bg-white p-6 text-center shadow-lg dark:bg-slate-900">
                <Award className="mx-auto text-yellow-500" />
                <h3 className="mt-4 text-3xl font-bold">30+</h3>
                <p>Projects</p>
              </div>

              <div className="rounded-2xl border bg-white p-6 text-center shadow-lg dark:bg-slate-900">
                <User className="mx-auto text-purple-600" />
                <h3 className="mt-4 text-3xl font-bold">5000+</h3>
                <p>Students</p>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}