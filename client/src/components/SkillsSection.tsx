import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 100, icon: '🏗️' },
  { name: 'CSS', level: 95, icon: '🎨' },
  { name: 'JavaScript', level: 98, icon: '⚡' },
  { name: 'React', level: 96, icon: '⚛️' },
  { name: 'Node.js', level: 94, icon: '🟢' },
  { name: 'Java', level: 97, icon: '☕' },
  { name: 'MongoDB', level: 92, icon: '🗄️' },
  { name: 'AWS', level: 88, icon: '☁️' },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Master essential technologies used in production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition-all">

                <div className="text-4xl mb-4">{skill.icon}</div>

                <h3 className="text-lg font-bold mb-4 hover:text-brand-600 transition-colors">
                  {skill.name}
                </h3>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-brand-600 to-blue-600 rounded-full"
                  />
                </div>

                <div className="mt-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {skill.level}%
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

