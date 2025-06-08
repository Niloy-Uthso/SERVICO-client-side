import React, { useContext, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { valueContext } from '../Rootlayout';

const faqs = [
  {
    question: "What is HobbyHub?",
    answer: "HobbyHub is a platform where you can find, join, or create local hobby-based groups like painting circles, reading clubs, or hiking crews."
  },
  {
    question: "How do I create a new hobby group?",
    answer: "Once you're logged in, go to the 'Create Group' page, fill in the required details, and submit. Your group will be live for others to discover."
  },
  {
    question: "Can I join multiple hobby groups?",
    answer: "Absolutely! You can join as many groups as you like, as long as they are open and the start date hasn’t passed."
  },
  {
    question: "What happens after I join a group?",
    answer: "You'll gain access to the group's event details, updates, and communications. Stay tuned for meetups and activities!"
  },
  {
    question: "Can I leave or delete a group I created?",
    answer: "Yes. Visit the 'My Groups' section to update or delete any group you've created."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
 const {theme}=useContext(valueContext)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`max-w-5xl md:mx-auto px-6 py-12 ${theme?`bg-gradient-to-br from-pink-50 to-purple-100 `:`bg-gradient-to-br from-purple-800 to-pink-800`} rounded-2xl shadow-xl ml-2 mr-2  mt-10`}>

     

      <h2 className={`text-4xl font-extrabold text-center ${theme?`text-purple-700`:`text-green-700`}  mb-10`}>
        
        <Typewriter
                words={['Frequently Asked Questions']}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
        
       </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-purple-800"
            >
              {faq.question}
              <span className="text-2xl font-bold">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
