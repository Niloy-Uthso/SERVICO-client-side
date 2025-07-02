import React, { useContext, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { valueContext } from '../Rootlayout';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What kind of services can I find on Servico?",
    answer: "You can find a wide range of services, including home repairs, graphic design, tutoring, fitness coaching, and more—offered by local professionals."
  },
  {
    question: "How do I book a service provider?",
    answer: "Simply browse services, view provider profiles, and click 'See More' to contact them or book directly through the platform."
  },
  {
    question: "Can I offer my own services?",
    answer: "Yes! After signing in, go to 'Add Service' and provide your service details, pricing, and images. Your listing will go live immediately."
  },
  {
    question: "Is there a rating or review system?",
    answer: "Absolutely. After using a service, you can leave feedback to help others make informed decisions—and receive feedback to build your own credibility."
  },
  {
    question: "Are payments handled through the site?",
    answer: "Currently, payments are arranged directly between users and providers. We're working on secure integrated payments for future updates."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { theme } = useContext(valueContext);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`max-w-6xl md:mx-auto px-6 py-14 rounded-3xl shadow-2xl ml-2 mr-2 mt-16 transition duration-500 ${
        theme
          ? 'bg-gradient-to-br from-sky-50 to-sky-100'
          : 'bg-gradient-to-br from-gray-900 to-slate-900'
      }`}
    >
      <h2
        className={`text-4xl font-extrabold text-center mb-12 tracking-tight ${
          theme ? 'text-indigo-700' : 'text-cyan-300'
        }`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          <Typewriter
            words={['Frequently Asked Questions']}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-xl border transition duration-300 ${
              theme
                ? 'bg-white/90 border-indigo-100 hover:shadow-indigo-200'
                : 'bg-white/5 border-slate-700 hover:border-cyan-400 backdrop-blur-md'
            } shadow hover:shadow-xl`}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold transition-all ${
                theme ? 'text-indigo-800' : 'text-cyan-200'
              }`}
            >
              <span>{faq.question}</span>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={`text-3xl font-bold ${
                  theme ? 'text-indigo-500' : 'text-cyan-400'
                }`}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`px-6 pb-5 leading-relaxed ${
                    theme ? 'text-gray-700' : 'text-slate-300'
                  }`}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
