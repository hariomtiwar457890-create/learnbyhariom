import { Helmet } from "react-helmet-async";
import {
  Award,
  BadgeCheck,
  Calendar,
  ExternalLink,
} from "lucide-react";

const certificates = [
  {
    title: "Java Programming",
    issuer: "Learn By Hariom",
    date: "2026",
    level: "Completed",
  },
  {
    title: "Spring Boot Development",
    issuer: "Learn By Hariom",
    date: "2026",
    level: "Completed",
  },
  {
    title: "React.js Development",
    issuer: "Learn By Hariom",
    date: "2026",
    level: "Completed",
  },
  {
    title: "Full Stack Java Developer",
    issuer: "Learn By Hariom",
    date: "2026",
    level: "Professional",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Learn By Hariom",
    date: "2026",
    level: "Advanced",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Learn By Hariom",
    date: "2026",
    level: "Completed",
  },
];

export default function Certificates() {
  return (
    <>
      <Helmet>
        <title>Certificates | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-16">

        {/* Header */}
        <div className="text-center">
          <Award className="mx-auto h-16 w-16 text-yellow-500" />

          <h1 className="mt-4 text-5xl font-bold">
            Certificates
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Earn industry-ready certificates after successfully completing
            courses, projects, and assessments on Learn By Hariom.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
            >
              <Award className="h-12 w-12 text-yellow-500" />

              <h2 className="mt-5 text-2xl font-bold">
                {certificate.title}
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Issued By <strong>{certificate.issuer}</strong>
              </p>

              <div className="mt-5 flex items-center gap-2 text-blue-600">
                <Calendar size={18} />
                {certificate.date}
              </div>

              <div className="mt-3 flex items-center gap-2 text-green-600">
                <BadgeCheck size={18} />
                {certificate.level}
              </div>

              <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 hover:gap-3 transition">
                View Certificate
                <ExternalLink size={18} />
              </button>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">

          <Award className="mx-auto h-14 w-14" />

          <h2 className="mt-5 text-3xl font-bold">
            Learn • Build • Get Certified
          </h2>

          <p className="mt-4 text-lg">
            Complete courses, build projects, pass assessments, and earn
            professional certificates to showcase your skills.
          </p>

        </div>

      </section>
    </>
  );
}