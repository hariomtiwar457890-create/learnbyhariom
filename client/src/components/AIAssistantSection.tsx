import { motion } from 'framer-motion';
import { MessageSquare, Zap, Brain, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: MessageSquare,
    title: 'Ask Coding Questions',
    description: 'Get instant answers to your programming doubts',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Debug Your Code',
    description: 'AI-powered code debugging and error analysis',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Career Guidance',
    description: 'Personalized career advice and growth plans',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Zap,
    title: '24/7 Support',
    description: 'Round-the-clock AI mentorship available',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function AIAssistantSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🤖</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Meet Hariom AI</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Your personal AI mentor available 24/7. Ask anything about coding, debugging, career guidance, or learning strategies. Get instant, personalized responses powered by advanced AI.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white flex-shrink-0 mt-1`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Start Chatting with AI
              <Zap size={20} />
            </Link>
          </motion.div>

          {/* Right - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-end"
                  >
                    <div className="bg-brand-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs text-sm">
                      How do I optimize React performance?
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl rounded-tl-none px-4 py-3 max-w-xs text-sm">
                      Great question! Use React.memo(), useMemo(), useCallback(), and code splitting...
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-end"
                  >
                    <div className="bg-brand-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs text-sm">
                      Can you show me an example?
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl rounded-tl-none px-4 py-3 max-w-xs text-sm">
                      Absolutely! Here's the code example: [code] ...
                    </div>
                  </motion.div>
                </div>

                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm"
                  />
                  <button className="bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700 transition-all">
                    <Zap size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
