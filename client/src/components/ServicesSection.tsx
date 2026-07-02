import { motion } from 'framer-motion';
import { Briefcase, Users, Code2, Zap, Globe, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Portfolio Development',
    description: 'Build a stunning portfolio website to showcase your work and land your dream job',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship Programs',
    description: 'Get personalized guidance from industry experts and experienced developers',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Interview Preparation',
    description: 'Comprehensive training for technical interviews and coding assessments',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Freelance Consulting',
    description: 'Expert advice on projects, architecture, and best practices',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern tech stack',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Upskill your team with customized training programs',
    color: 'from-indigo-500 to-purple-500',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
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
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional services to accelerate your growth
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  aria-label={`Learn more about ${service.title}`}
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}