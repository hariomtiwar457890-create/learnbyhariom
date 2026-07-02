import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { icon: '🎨', label: 'Frontend', skills: 'React, Vue, Angular', color: 'from-blue-500 to-cyan-500' },
  { icon: '⚙️', label: 'Backend', skills: 'Node, Django, Java', color: 'from-purple-500 to-pink-500' },
  { icon: '🐍', label: 'Python', skills: 'Basics, Data Science', color: 'from-yellow-500 to-orange-500' },
  { icon: '☕', label: 'Java', skills: 'Core, Spring Boot', color: 'from-red-500 to-pink-500' },
  { icon: '🤖', label: 'AI/ML', skills: 'Beginner to Advanced', color: 'from-green-500 to-emerald-500' },
  { icon: '🔒', label: 'Cyber Security', skills: 'Fundamentals, Ethical', color: 'from-red-600 to-orange-600' },
  { icon: '☁️', label: 'Cloud', skills: 'AWS, Azure, GCP', color: 'from-indigo-500 to-purple-500' },
  { icon: '🐳', label: 'DevOps', skills: 'Docker, Kubernetes', color: 'from-cyan-500 to-blue-500' },
];

export default function LearningCategoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Learning Categories</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Master in-demand skills across multiple domains</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white cursor-pointer transition-all overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{category.label}</h3>
                <p className="text-white/80 text-sm mb-4">{category.skills}</p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={16} />
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
            to="/courses"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            View All Categories <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
