import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is coding experience required to start?',
    answer: 'No! Our beginner courses start from zero. We have HTML, CSS, and JavaScript fundamentals that cover everything.',
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'It depends on the course and your pace. Most courses take 2-6 months of consistent learning.',
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes! Every completed course includes a certificate that you can add to your LinkedIn profile.',
  },
  {
    question: 'Can I access courses on mobile?',
    answer: 'Absolutely! All courses are optimized for mobile and desktop devices.',
  },
  {
    question: 'What if I need help?',
    answer: 'Our AI mentor is available 24/7, and our community Discord has thousands of learners ready to help.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 14-day money-back guarantee if you\'re not satisfied.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <h3 className="text-lg font-semibold text-left text-slate-900 dark:text-white">{question}</h3>
        <ChevronDown
          size={24}
          className={`text-brand-600 dark:text-brand-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-slate-200 dark:border-slate-800"
      >
        <p className="p-6 text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Find answers to common questions</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
