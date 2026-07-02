import { Helmet } from "react-helmet-async";
import {
  BookOpen,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "Complete Java Masterclass",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    students: "5,000+",
    color: "bg-red-500",
  },
  {
    title: "Spring Boot Development",
    level: "Intermediate",
    duration: "8 Weeks",
    students: "2,800+",
    color: "bg-green-500",
  },
  {
    title: "React.js Complete Guide",
    level: "Beginner to Advanced",
    duration: "10 Weeks",
    students: "4,200+",
    color: "bg-blue-500",
  },
  {
    title: "Full Stack Java Development",
    level: "Professional",
    duration: "16 Weeks",
    students: "3,100+",
    color: "bg-purple-500",
  },
  {
    title: "Data Structures & Algorithms",
    level: "Interview Preparation",
    duration: "14 Weeks",
    students: "6,000+",
    color: "bg-orange-500",
  },
  {
    title: "Artificial Intelligence & Generative AI",
    level: "Advanced",
    duration: "10 Weeks",
    students: "2,000+",
    color: "bg-pink-500",
  },
];

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | Learn By Hariom</title>
      </Helmet>

      <section className="mx-auto max-w-7xl px-4 py-16">

        {/* Header */}
        <div className="text-center">
          <BookOpen className="mx-auto h-14 w-14 text-blue-600" />

          <h1 className="mt-5 text-5xl font-bold">
            Explore Our Courses
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Learn industry-ready skills through practical, project-based
            courses designed for beginners and professionals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
            >
              <div className={`h-3 ${course.color}`}></div>

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {course.level}
                </p>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>{course.students} Students</span>
                  </div>

                </div>

                <button className="mt-8 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Enroll Now
                  <ArrowRight size={18} />
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Why Learn With Us */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Why Learn By Hariom?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div>
              <h3 className="text-xl font-semibold">💻 Practical Learning</h3>
              <p className="mt-2">
                Build real-world projects while learning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">🎯 Career Focused</h3>
              <p className="mt-2">
                Prepare for interviews and industry requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">🚀 Lifetime Growth</h3>
              <p className="mt-2">
                Access updated content and continuous learning resources.
              </p>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}