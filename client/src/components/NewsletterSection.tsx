import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-blue-600 to-purple-600 dark:from-brand-700 dark:via-blue-700 dark:to-purple-700"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          {/* Content */}
          <div className="relative py-16 px-8 sm:px-12 lg:px-16 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail size={32} />
                <span className="text-lg font-semibold">Weekly Insights</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Stay Updated with Latest Trends</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get weekly coding tips, career advice, industry updates, and exclusive learning resources delivered to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-full bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-white text-brand-600 font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
                >
                  <Send size={20} /> Subscribe
                </button>
              </form>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-white/80 text-sm"
                >
                  ✓ Thanks for subscribing! Check your email.
                </motion.p>
              )}

              <p className="text-white/70 text-sm">No spam, unsubscribe anytime. We respect your privacy.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
