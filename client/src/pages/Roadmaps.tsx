import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Shield,
  Sparkles,
  ChevronRight,
  Clock,
  Award,
  Users,
  BookOpen,
} from 'lucide-react';

const roadmaps = [
  {
    title: 'Frontend Developer',
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    description: 'Master HTML, CSS, JavaScript, React, and modern frontend frameworks.',
    level: 'Beginner to Advanced',
    duration: '4-6 Months',
    topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Next.js'],
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    jobs: ['Frontend Developer', 'UI Engineer', 'React Developer'],
  },
  {
    title: 'Backend Developer',
    icon: <Server className="w-8 h-8 text-green-600" />,
    description: 'Build robust APIs, microservices, and server-side applications.',
    level: 'Intermediate',
    duration: '5-7 Months',
    topics: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs'],
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
    jobs: ['Backend Developer', 'API Engineer', 'Node.js Developer'],
  },
  {
    title: 'Full Stack Developer',
    icon: <Code2 className="w-8 h-8 text-purple-600" />,
    description: 'Complete web development mastery from frontend to backend.',
    level: 'Beginner to Advanced',
    duration: '8-10 Months',
    topics: ['MERN Stack', 'Next.js', 'TypeScript', 'GraphQL', 'Docker'],
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    jobs: ['Full Stack Developer', 'Software Engineer', 'Tech Lead'],
  },
  {
    title: 'Mobile App Developer',
    icon: <Smartphone className="w-8 h-8 text-orange-600" />,
    description: 'Build cross-platform mobile apps with React Native and Flutter.',
    level: 'Intermediate',
    duration: '6-8 Months',
    topics: ['React Native', 'Flutter', 'Android', 'iOS', 'App Store Deployment'],
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    jobs: ['Mobile Developer', 'React Native Developer', 'Flutter Developer'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    description: 'Master cloud platforms, CI/CD, containerization, and infrastructure.',
    level: 'Advanced',
    duration: '6-8 Months',
    topics: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    jobs: ['DevOps Engineer', 'Cloud Architect', 'SRE'],
  },
  {
    title: 'Data Science & AI',
    icon: <Database className="w-8 h-8 text-red-600" />,
    description: 'Learn data analysis, machine learning, and artificial intelligence.',
    level: 'Advanced',
    duration: '8-12 Months',
    topics: ['Python', 'Pandas', 'TensorFlow', 'PyTorch', 'Data Visualization'],
    color: 'from-red-500 to-rose-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    jobs: ['Data Scientist', 'ML Engineer', 'AI Researcher'],
  },
];

const quickStats = [
  { icon: <BookOpen className="w-5 h-5" />, label: '10+ Roadmaps', color: 'blue' },
  { icon: <Users className="w-5 h-5" />, label: '500+ Students', color: 'green' },
  { icon: <Award className="w-5 h-5" />, label: '98% Success Rate', color: 'purple' },
  { icon: <Clock className="w-5 h-5" />, label: 'Flexible Learning', color: 'orange' },
];

export default function Roadmaps() {
  return (
    <>
      <Helmet>
        <title>Roadmaps | Learn By Hariom - Structured Learning Paths</title>
        <meta
          name="description"
          content="Explore structured learning roadmaps for developers, creators, and entrepreneurs. Choose your path and start your journey today."
        />
        <meta name="keywords" content="learning roadmaps, developer roadmap, web development, full stack, data science" />
        <link rel="canonical" href="https://learnbyhariom.com/roadmaps" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              Choose Your Path
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Learning Roadmaps
            </h1>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Structured learning roadmaps for developers, creators, and entrepreneurs. 
              Choose your path and start your journey today.
            </p>

            {/* Quick Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 px-5 py-3 rounded-xl border border-${stat.color}-200 dark:border-${stat.color}-800`}
                >
                  <div className={`text-${stat.color}-600 dark:text-${stat.color}-400`}>
                    {stat.icon}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${roadmap.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              <div className={`relative rounded-2xl border border-gray-200 dark:border-slate-700 ${roadmap.bg} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm`}>
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {roadmap.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${roadmap.color} text-white shadow-sm`}>
                      {roadmap.level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {roadmap.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {roadmap.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {roadmap.description}
                </p>

                {/* Topics */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {roadmap.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 shadow-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Job Opportunities */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Career Opportunities</p>
                  <div className="flex flex-wrap gap-2">
                    {roadmap.jobs.map((job, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-6 w-full group/btn px-6 py-3 bg-white dark:bg-slate-800 rounded-xl font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-gray-200 dark:border-slate-700">
                  View Roadmap
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 p-12 md:p-16 text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Get Started Today
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Not Sure Which Path to Choose?
            </h2>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Book a free 1-on-1 consultation with our experts and get personalized guidance for your career journey.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl">
                <GitBranch className="w-5 h-5" />
                Book Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-blue-500/30 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-blue-500/40 transition-all border border-white/20">
                Browse All Courses
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Free Resources
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Practice Projects
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certificate Included
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}