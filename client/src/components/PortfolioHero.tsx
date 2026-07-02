import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Code2,
  Briefcase,
} from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-brand-900 dark:from-slate-950 dark:via-slate-950 dark:to-brand-950 flex items-center py-20 px-4 sm:px-6 lg:px-8">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Name */}
            <div>
              <p className="text-brand-300 text-lg font-medium mb-3">
                👋 Welcome to my digital space
              </p>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight">
                Hariom
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-400 to-purple-400">
                  Tiwari
                </span>
              </h1>
            </div>

            {/* Roles */}
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="text-brand-400" />
                Software Engineer
              </p>
              <p className="text-2xl font-bold text-blue-300">
                Full Stack Developer
              </p>
              <p className="text-2xl font-bold text-purple-300">
                AI Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 max-w-2xl">
              Building modern web apps, AI systems, and learning platforms that turn ideas into reality.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">

              <a
                href="mailto:hariom@example.com"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                <Briefcase size={20} />
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold border border-white/30"
              >
                <Download size={20} />
                Resume
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold border border-white/30"
              >
                <Github size={20} />
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >

            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-brand-600 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}