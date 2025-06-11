import React, { useContext } from 'react';
import { MessageCircle } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { valueContext } from '../Rootlayout';

const testimonials = [
  {
    quotes: [
      "This platform connected me to clients I never imagined reaching.",
      "As a freelance designer, my growth has been exponential.",
      "It’s the ultimate community builder."
    ],
    name: "Aarav, Freelance Designer"
  },
  {
    quotes: [
      "I booked a fitness coach in my area within minutes!",
      "The interface is smooth, smart, and user-first.",
      "Love the personal touch in the recommendations."
    ],
    name: "Lina, Marketing Executive"
  },
  {
    quotes: [
      "I now collaborate with local artists for mural gigs.",
      "It’s more than a platform—it’s an ecosystem.",
      "Real people. Real talent. Real stories."
    ],
    name: "Kabir, Visual Artist"
  },
  {
    quotes: [
      "I've hired tutors, language coaches, and a dog walker—all from here.",
      "You won’t believe how diverse the services are!",
      "Truly a one-stop shop for modern living."
    ],
    name: "Sana, Startup Founder"
  }
];

const Feedback = () => {
  const { theme } = useContext(valueContext);

  return (
    <div
      data-aos="fade-up"
      className={`py-14 px-6 rounded-3xl shadow-2xl max-w-6xl md:mx-auto ml-2 mr-2 my-16 transition duration-500 ${
        theme
          ? 'bg-gradient-to-br from-sky-50 to-indigo-100'
          : 'bg-gradient-to-br from-slate-900 to-gray-900'
      }`}
    >
      <h1
        className={`text-4xl font-extrabold text-center mb-12 tracking-tight ${
          theme ? 'text-indigo-700' : 'text-white'
        }`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Voices From Our Community
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md relative border-l-4 transition duration-300 hover:shadow-xl ${
              theme
                ? 'bg-white/90 border-indigo-400 hover:border-pink-400'
                : 'bg-white/10 backdrop-blur-lg border-pink-500 hover:border-indigo-400'
            }`}
          >
            <MessageCircle
              className={`absolute -top-5 left-4 p-1 rounded-full shadow ${
                theme
                  ? 'bg-white text-pink-500'
                  : 'bg-slate-800 text-indigo-400'
              }`}
              size={36}
            />
            <p
              className={`min-h-[90px] text-base font-medium mb-3 leading-relaxed ${
                theme ? 'text-gray-800' : 'text-slate-200'
              }`}
            >
              <Typewriter
                words={item.quotes}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </p>
            <p
              className={`text-sm font-semibold ${
                theme ? 'text-indigo-600' : 'text-pink-400'
              }`}
            >
              — {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
