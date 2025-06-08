import React, { useContext } from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { valueContext } from '../Rootlayout';

const Feedback = () => {
    const {theme}=useContext(valueContext)
  return (
    <div data-aos="fade-up" className={`${theme?`bg-gradient-to-br from-purple-50 to-pink-100`:`bg-gradient-to-br from-purple-800 to-pink-800`} py-12 px-6 rounded-2xl shadow-2xl max-w-6xl md:mx-auto ml-2 mr-2  my-12`}>
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10">What Our Community Says</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            quote: "Joining the photography group completely reignited my creative passion. I now spend weekends on photo walks with new friends!",
            name: "Anika, Photography Enthusiast"
          },
          {
            quote: "From cooking to coding, I've found groups that match my interests. The vibe here is warm, fun, and very inclusive.",
            name: "Ravi, Full Stack Dev & Hobby Chef"
          },
          {
            quote: "I’ve never felt so connected with a community before. Our writing club helped me publish my first short story!",
            name: "Meera, Aspiring Author"
          },
          {
            quote: "The platform makes it so easy to find people with the same passions. 10/10 for interface and experience.",
            name: "Zayan, UX Designer"
          }
        ].map((feedback, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md relative border-l-4 border-pink-400 hover:shadow-lg transition">
            <MessageSquareQuote className="absolute -top-5 left-4 text-pink-400 bg-white rounded-full p-1" size={32} />
            <p className="text-gray-800 min-h-[96px] italic mb-3">
                 <Typewriter
                                words={[`“${feedback.quote}”`]}
                                loop={100}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1000}
                              />
                
                </p>
            <p className="text-sm font-semibold text-pink-600">— {feedback.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
