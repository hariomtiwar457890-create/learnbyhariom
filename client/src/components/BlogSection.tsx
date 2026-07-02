import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'System Design Interview Preparation',
    description: 'Master the art of designing scalable systems with proven patterns',
    author: 'Hariom',
    date: 'Jul 1, 2024',
    category: 'Interview Tips',
    icon: '🏗️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'JavaScript Async/Await Explained',
    description: 'Complete guide to asynchronous programming in JavaScript',
    author: 'Dev Team',
    date: 'Jun 28, 2024',
    category: 'JavaScript',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'React Performance Optimization',
    description: 'Essential techniques to build faster React applications',
    author: 'React Expert',
    date: 'Jun 25, 2024',
    category: 'React',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Learn from industry insights and technical deep dives</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${article.color} flex items-center justify-center text-6xl`}>
                {article.icon}
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full mb-4">
                  {article.category}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>

                <div className="space-y-2 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <User size={16} /> {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> {article.date}
                  </div>
                </div>

                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
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
            to="/blog"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Read All Articles <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
