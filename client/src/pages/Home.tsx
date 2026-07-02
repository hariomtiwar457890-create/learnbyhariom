import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <Helmet><title>Learn By Hariom | Home</title><meta name="description" content="Learn modern web development, growth, and practical skills with Learn By Hariom." /></Helmet>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-700 dark:border-brand-900 dark:bg-brand-950/40 dark:text-brand-300">
            <Sparkles size={16} /> Learn, build, and grow with confidence
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Build your future with practical learning.</h1>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">Explore curated courses, roadmaps, projects, and mentorship experiences designed for modern developers and creators.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-medium text-white">Explore Courses <ArrowRight size={18} /></Link>
            <Link to="/projects" className="rounded-full border px-5 py-3 font-medium">View Projects</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
              <Code2 className="mb-3 text-brand-600" size={28} />
              <h3 className="font-semibold">Hands-on Projects</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Build real apps and portfolios with guided implementations.</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
              <ShieldCheck className="mb-3 text-brand-600" size={28} />
              <h3 className="font-semibold">Secure & Scalable</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Production-minded architecture with security best practices.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
