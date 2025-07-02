import React, { useContext } from 'react';
import { Megaphone } from 'lucide-react';
import { valueContext } from '../Rootlayout';

const promotions = [
  {
    title: "🔥 New User Discount",
    message: "Sign up today and get 30% off your first service booking!"
  },
  {
    title: "🎁 Earn Rewards",
    message: "Review services to earn points and unlock exclusive benefits."
  },
  {
    title: "🚀 Boost Your Service",
    message: "Promote your service on our featured section to gain visibility."
  },
  {
    title: "🌟 Become a VIP",
    message: "Upgrade to VIP and enjoy premium tools and early access features."
  }
];

const Promotional = () => {
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
          Promotional Offers
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {promotions.map((promo, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md relative border-l-4 transition duration-300 hover:shadow-xl ${
              theme
                ? 'bg-white/90 border-indigo-400 hover:border-pink-400'
                : 'bg-white/10 backdrop-blur-lg border-pink-500 hover:border-indigo-400'
            }`}
          >
            <Megaphone
              className={`absolute -top-5 left-4 p-1 rounded-full shadow ${
                theme
                  ? 'bg-white text-pink-500'
                  : 'bg-slate-800 text-indigo-400'
              }`}
              size={36}
            />
            <h2
              className={`text-lg font-semibold mb-2 ${
                theme ? 'text-gray-900' : 'text-white'
              }`}
            >
              {promo.title}
            </h2>
            <p
              className={`text-base leading-relaxed ${
                theme ? 'text-gray-700' : 'text-slate-300'
              }`}
            >
              {promo.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotional;
