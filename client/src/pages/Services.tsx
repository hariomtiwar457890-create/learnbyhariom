import { Helmet } from "react-helmet-async";
import {
  BookOpen,
  Code2,
  Laptop,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "Programming Courses",
    description:
      "Learn Java, DSA, Web Development, React, JavaScript and more with structured roadmaps.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    features: ["Structured Curriculum", "Hands-on Projects", "Industry Ready"],
  },
  {
    icon: <Users className="w-10 h-10 text-green-600" />,
    title: "1-on-1 Mentorship",
    description:
      "Personal guidance, interview preparation, resume review and career planning.",
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    features: ["Expert Mentors", "Mock Interviews", "Career Strategy"],
  },
  {
    icon: <Laptop className="w-10 h-10 text-purple-600" />,
    title: "Project Development",
    description:
      "Build real-world projects with React, Node.js, Express, MongoDB and deploy them professionally.",
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    features: ["Full Stack Apps", "Live Deployment", "Portfolio Ready"],
  },
  {
    icon: <Code2 className="w-10 h-10 text-orange-600" />,
    title: "Website Development",
    description:
      "Custom responsive websites, portfolios, dashboards and business websites.",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
];

const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "98%", label: "Success Rate" },
  { number: "50+", label: "Projects Built" },
  { number: "4.9", label: "Average Rating" },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Learn By Hariom - Start Your Coding Journey</title>
        <meta
          name="description"
          content="Learn By Hariom provides programming courses, 1-on-1 mentorship, website development and project guidance. Join us to become a job-ready developer."
        />
        <meta name="keywords" content="programming courses, mentorship, web development, react, nodejs, interview preparation" />
        <link rel="canonical" href="https://learnbyhariom.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Empowering Future Developers
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </h1>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We help students and developers become job-ready through quality
              learning, mentorship, and real-world development experience.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700">
                View Courses
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              <div className={`relative rounded-2xl border border-gray-200 dark:border-slate-700 ${service.bg} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm`}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full group/btn px-6 py-3 bg-white dark:bg-slate-800 rounded-xl font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-gray-200 dark:border-slate-700">
                  Explore Service
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="mt-2 text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 p-12 md:p-16 text-white shadow-2xl"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Join 500+ Happy Learners
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your <span className="text-yellow-300">Learning Journey</span>?
            </h2>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Join Learn By Hariom and master programming with practical projects
              and expert mentorship. Your future in tech starts here.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl">
                <Zap className="w-5 h-5" />
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-blue-500/30 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-blue-500/40 transition-all border border-white/20">
                Contact Us
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Career Guidance
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Lifetime Access
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}