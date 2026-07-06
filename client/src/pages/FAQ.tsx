import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Sparkles,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Users,
  BookOpen,
  Award,
  Shield,
  Globe,
  CreditCard,
  ChevronRight,
  Search,
  X,
} from 'lucide-react';

// Types
interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  icon: React.ReactNode;
  questions: FAQItem[];
}

interface ColorClasses {
  [key: string]: string;
}

const faqs: FAQCategory[] = [
  {
    category: "Getting Started",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    questions: [
      {
        q: "How do I start learning with Learn By Hariom?",
        a: "Simply browse our courses and roadmaps, choose the one that matches your goals, and enroll. You'll get instant access to all learning materials, projects, and community resources. New students also get a free 30-minute consultation with our mentors."
      },
      {
        q: "What are the prerequisites for joining?",
        a: "We cater to all levels—from absolute beginners to experienced developers. Each course and roadmap clearly mentions its prerequisites. For beginners, we recommend starting with our 'Programming Fundamentals' course."
      },
      {
        q: "How much time do I need to dedicate?",
        a: "We recommend 10-15 hours per week for optimal results. However, our courses are self-paced, so you can learn at your own speed. Most students complete their chosen roadmap in 4-6 months with consistent effort."
      }
    ]
  },
  {
    category: "Courses & Curriculum",
    icon: <BookOpen className="w-5 h-5 text-green-600" />,
    questions: [
      {
        q: "Do you provide certificates after completion?",
        a: "Yes! Upon completing a course or roadmap, you'll receive a verified certificate that you can share on LinkedIn, add to your resume, or showcase in your portfolio. Our certificates are recognized by industry professionals."
      },
      {
        q: "Are the courses updated regularly?",
        a: "Absolutely! We update our curriculum every 3-6 months to keep pace with industry trends, new technologies, and best practices. You'll always learn the most current and relevant skills."
      },
      {
        q: "Can I access courses on mobile devices?",
        a: "Yes, all our courses are fully responsive and can be accessed on any device - desktop, tablet, or mobile. You can learn on the go, anytime, anywhere."
      }
    ]
  },
  {
    category: "Mentorship & Support",
    icon: <Users className="w-5 h-5 text-purple-600" />,
    questions: [
      {
        q: "How does the mentorship program work?",
        a: "Each student gets a dedicated mentor who provides 1-on-1 guidance, reviews your code, helps with projects, and offers career advice. You can schedule weekly 30-minute sessions and get unlimited support via chat."
      },
      {
        q: "What kind of support do you offer?",
        a: "We offer 24/7 community support, weekly office hours, code reviews, project feedback, career counseling, and interview preparation. Our students also get access to exclusive Slack and Discord communities."
      },
      {
        q: "Do you offer job placement assistance?",
        a: "Yes! We provide resume reviews, portfolio building, mock interviews, and networking opportunities. Our students have been placed at top companies like Google, Amazon, Microsoft, and many startups."
      }
    ]
  },
  {
    category: "Payments & Pricing",
    icon: <CreditCard className="w-5 h-5 text-orange-600" />,
    questions: [
      {
        q: "What payment options are available?",
        a: "We accept all major credit cards, debit cards, UPI, PayPal, and bank transfers. We also offer flexible EMI options for select plans through our payment partners."
      },
      {
        q: "Do you offer refunds?",
        a: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with your purchase, contact us within 7 days for a full refund. No questions asked!"
      },
      {
        q: "Are there any scholarships available?",
        a: "Yes! We offer scholarships for meritorious students, women in tech, and those with financial constraints. Contact our support team to learn more about scholarship opportunities."
      }
    ]
  }
];

// Fixed color classes for Tailwind (No dynamic classes)
const colorClasses: ColorClasses = {
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  green: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800",
  purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  orange: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800",
};

const quickLinks = [
  { icon: <MessageCircle className="w-5 h-5" />, label: "Live Chat", desc: "Chat with our support team", color: "blue" as const },
  { icon: <Mail className="w-5 h-5" />, label: "Email Support", desc: "support@learnbyhariom.com", color: "green" as const },
  { icon: <Phone className="w-5 h-5" />, label: "Phone Support", desc: "+91-98765-43210", color: "purple" as const },
  { icon: <Clock className="w-5 h-5" />, label: "Working Hours", desc: "Mon-Sat, 10:00 AM - 7:00 PM", color: "orange" as const },
];

// FAQ Structured Data for SEO
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap(category => 
    category.questions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    }))
  )
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (categoryIndex: number, questionIndex: number): void => {
    const key = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === key ? null : key);
  };

  // Filter FAQs based on search
  const filteredFAQs = faqs
    .map(category => ({
      ...category,
      questions: category.questions.filter(q =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.questions.length > 0);

  return (
    <>
      <Helmet>
        <title>FAQ | Learn By Hariom - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Learn By Hariom - courses, mentorship, pricing, support, and more."
        />
        <meta name="keywords" content="faq, frequently asked questions, learn by hariom, courses, mentorship, support" />
        <link rel="canonical" href="https://learnbyhariom.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Answers to common questions about learning paths, community access, 
              and support. Everything you need to know to get started.
            </p>

            {/* Search Box */}
            <div className="mt-8 max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Support Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 dark:border-slate-700 text-center cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto ${colorClasses[link.color]} group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <h4 className="font-semibold mt-3 text-gray-800 dark:text-gray-200">{link.label}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{link.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">No Results Found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {category.category}
                  </h2>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-200 dark:divide-slate-700">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isActive = activeIndex === key;

                    return (
                      <div key={questionIndex}>
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors group"
                          aria-expanded={isActive ? "true" : "false"}
                          aria-controls={`faq-${key}`}
                        >
                          <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {faq.q}
                          </span>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors"
                          >
                            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                          </motion.div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0,
                            padding: isActive ? '0 1.5rem 1.5rem' : '0 1.5rem',
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p 
                            id={`faq-${key}`}
                            className="text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-slate-700 pt-4"
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Still Have Questions? */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 p-12 text-center text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10" />
            </div>

            <h3 className="text-3xl font-bold">
              Still Have Questions?
            </h3>

            <p className="mt-4 text-blue-100 max-w-xl mx-auto">
              Our support team is here to help you. Reach out to us anytime and we'll get back to you within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl">
                  <MessageCircle className="w-5 h-5" />
                  Contact Support
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/courses">
                <button className="px-8 py-4 bg-blue-500/30 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-blue-500/40 transition-all border border-white/20">
                  View All Courses
                </button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Available Worldwide
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                7-Day Money Back
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}