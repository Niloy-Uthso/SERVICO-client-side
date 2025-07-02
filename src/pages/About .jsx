import React, { useContext } from 'react';
import { Users } from 'lucide-react';
import { valueContext } from '../Rootlayout';

const About = () => {
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
        className={`text-4xl font-extrabold text-center mb-10 tracking-tight ${
          theme ? 'text-indigo-700' : 'text-white'
        }`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          About Our Platform
        </span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <Users
          size={64}
          className={`p-2 rounded-full shadow ${
            theme ? 'bg-white text-indigo-500' : 'bg-slate-800 text-pink-400'
          }`}
        />
        <p
          className={`text-lg leading-relaxed font-medium text-center md:text-left ${
            theme ? 'text-gray-800' : 'text-slate-200'
          } max-w-3xl`}
        >
          We believe that services should be more than just transactions—they should build community.
          Our platform empowers individuals and businesses to share what they do best, gather reviews,
          and grow through real, human connections. Whether you're a creator, a coach, a consultant,
          or just curious, you're welcome here. Let’s build something amazing—together.
        </p>
      </div>
    </div>
  );
};

export default About;
