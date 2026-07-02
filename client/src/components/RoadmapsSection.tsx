import { motion } from "framer-motion";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const roadmaps = [
  {
    title: "Software Engineer",
    description: "12-month journey to become a full-stack engineer",
    duration: "12 months",
    steps: 15,
    learners: "2000+",
    icon: "🛣️",
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Frontend Developer",
    description: "Master modern frontend technologies",
    duration: "6 months",
    steps: 10,
    learners: "1500+",
    icon: "🎨",
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "Backend Developer",
    description: "Build scalable server-side applications",
    duration: "8 months",
    steps: 12,
    learners: "1800+",
    icon: "⚙️",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Full Stack Developer",
    description: "Complete journey from frontend to backend",
    duration: "12 months",
    steps: 20,
    learners: "2500+",
    icon: "🌐",
    color: "from-green-600 to-emerald-600",
  },
  {
    title: "AI/ML Engineer",
    description: "Deep dive into Artificial Intelligence",
    duration: "10 months",
    steps: 14,
    learners: "800+",
    icon: "🤖",
    color: "from-yellow-600 to-orange-600",
  },
  {
    title: "DevOps Engineer",
    description: "Master cloud deployment & automation",
    duration: "6 months",
    steps: 11,
    learners: "600+",
    icon: "☁️",
    color: "from-indigo-600 to-purple-600",
  },
];

export default function RoadmapsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Career Roadmaps
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Structured learning paths to reach your career goals
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${roadmap.color} p-8 text-white overflow-hidden`}
            >
              {/* Hover layer */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

              <div className="relative">

                <div className="text-5xl mb-4">{roadmap.icon}</div>

                <h3 className="text-2xl font-bold mb-2">
                  {roadmap.title}
                </h3>

                <p className="text-white/80 text-sm mb-6">
                  {roadmap.description}
                </p>

                {/* Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-white/20">

                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} />
                    {roadmap.duration}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} />
                    {roadmap.steps} structured steps
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} />
                    {roadmap.learners} learners
                  </div>

                </div>

                {/* CTA */}
                <Link
                  to="/roadmaps"
                  className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Start Learning <ArrowRight size={16} />
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold"
          >
            Explore All Roadmaps <ArrowRight size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}