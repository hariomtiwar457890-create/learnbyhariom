import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Netflix Clone',
    description: 'Full-stack Netflix replica with streaming functionality',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    difficulty: 'Advanced',
    stars: 450,
    icon: '🎬',
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Complete online shopping experience',
    tech: ['React', 'Java', 'PostgreSQL', 'Redis'],
    difficulty: 'Advanced',
    stars: 380,
    icon: '🛍️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Social Media App',
    description: 'Instagram-like social networking platform',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    difficulty: 'Advanced',
    stars: 420,
    icon: '📱',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging with video call',
    tech: ['React', 'Firebase', 'WebRTC', 'Tailwind'],
    difficulty: 'Intermediate',
    stars: 290,
    icon: '💬',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Hospital Management',
    description: 'Complete hospital information system',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
    difficulty: 'Advanced',
    stars: 320,
    icon: '🏥',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'AI Chat Bot',
    description: 'Intelligent chatbot with NLP',
    tech: ['Python', 'Node.js', 'TensorFlow', 'React'],
    difficulty: 'Advanced',
    stars: 380,
    icon: '🤖',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function ProjectShowcaseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Real-world projects to build your portfolio</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all"></div>
                <span className="relative">{project.icon}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      project.difficulty === 'Advanced'
                        ? 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300'
                        : 'bg-yellow-100 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    ⭐ {project.stars}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Link
                    to="/projects"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm"
                  >
                    <ExternalLink size={16} /> View
                  </Link>
                  <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                    <Github size={16} /> Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Browse All Projects <ExternalLink size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
