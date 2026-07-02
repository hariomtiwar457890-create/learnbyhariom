import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20 px-4 sm:px-6 lg:px-8">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 animate-blob"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              <Sparkles size={16} />
              Welcome to Learn By Hariom
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Become a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-purple-600">
                Software Engineer, AI Expert
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Learn through real-world projects, structured roadmaps, and AI-powered mentorship.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                <Sparkles size={20} />
                Start Learning
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/roadmaps"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-full font-semibold"
              >
                <Play size={20} />
                Explore Roadmaps
              </Link>

            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t">
              <div>
                <div className="text-3xl font-bold text-brand-600">50+</div>
                <div className="text-sm">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">200+</div>
                <div className="text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">24×7</div>
                <div className="text-sm">AI Mentor</div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {["🚀 Fast", "🎓 Certified", "🤖 AI", "💼 Job Ready"].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}