import { motion } from 'framer-motion';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Java Master Course',
    description: 'From basics to advanced OOP concepts',
    level: 'Beginner → Advanced',
    students: '5000+',
    duration: '40 hrs',
    rating: 4.8,
    price: '₹2,999',
    icon: '☕',
  },
  {
    title: 'React Complete Guide',
    description: 'Build modern UIs with React & TypeScript',
    level: 'Intermediate',
    students: '8000+',
    duration: '35 hrs',
    rating: 4.9,
    price: '₹2,499',
    icon: '⚛️',
  },
  {
    title: 'Node.js & Express APIs',
    description: 'RESTful APIs, databases, authentication',
    level: 'Intermediate',
    students: '6000+',
    duration: '30 hrs',
    rating: 4.7,
    price: '₹2,299',
    icon: '🟢',
  },
  {
    title: 'Spring Boot Mastery',
    description: 'Enterprise Java applications',
    level: 'Advanced',
    students: '3000+',
    duration: '45 hrs',
    rating: 4.8,
    price: '₹3,499',
    icon: '🍃',
  },
  {
    title: 'DSA Complete Bootcamp',
    description: 'Data Structures & Algorithms',
    level: 'Intermediate',
    students: '7000+',
    duration: '50 hrs',
    rating: 4.9,
    price: '₹2,999',
    icon: '📊',
  },
  {
    title: 'Web Development Masterclass',
    description: 'HTML, CSS, JavaScript, Responsive Design',
    level: 'Beginner',
    students: '9000+',
    duration: '25 hrs',
    rating: 4.8,
    price: '₹1,999',
    icon: '🌐',
  },
];

export default function FeaturedCoursesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Carefully crafted courses from industry experts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-brand-500/10 to-blue-500/10 dark:from-brand-500/20 dark:to-blue-500/20 flex items-center justify-center text-6xl">
                {course.icon}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">{course.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{course.description}</p>

                <div className="space-y-3 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 rounded text-xs font-semibold">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Users size={16} /> {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} /> {course.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-600'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">{course.price}</span>
                  <Link
                    to="/courses"
                    className="p-2 rounded-full bg-brand-100 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 hover:bg-brand-200 dark:hover:bg-brand-900/60 transition-all"
                  >
                    <ArrowRight size={20} />
                  </Link>
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
            Browse All Courses <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
