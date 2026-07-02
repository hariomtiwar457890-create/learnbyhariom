import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Raj Kumar',
    role: 'Software Engineer at Google',
    content: 'Learn By Hariom transformed my career. The structured roadmaps and AI mentorship were exactly what I needed.',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    role: 'Full Stack Developer',
    content: 'The courses are comprehensive and the projects are real-world. I built 5 projects that are now in my portfolio.',
    avatar: '👩‍💻',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'AI Engineer at Microsoft',
    content: 'The AI/ML roadmap helped me transition into AI engineering. Best investment for my career!',
    avatar: '👨‍🔬',
    rating: 5,
  },
  {
    name: 'Neha Sharma',
    role: 'Startup Founder',
    content: 'I learned full-stack development and built my startup MVP using the skills from this platform.',
    avatar: '👩‍💼',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hear from students who transformed their careers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="text-brand-600 dark:text-brand-400 mb-4 opacity-50" size={24} />

              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
