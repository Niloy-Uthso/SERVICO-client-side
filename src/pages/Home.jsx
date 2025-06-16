import React, { useContext, useEffect, useState,  } from 'react';
import { NavLink, useLoaderData, useLocation, useNavigate } from 'react-router';
import Faq from '../components/Faq';
import Feedback from '../components/Feedback';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { valueContext } from '../Rootlayout';
import { motion } from 'framer-motion';
import MeetOurPartners from '../components/MeetOurPartners';
import axios from 'axios';
import CountUp from 'react-countup';
const Home = () => {

    const services=useLoaderData()
const {theme}=useContext(valueContext)
const navigate=useNavigate()     
      const location=useLocation()
const [stats, setStats] = useState({
  totalServices: 0,
  uniqueUsers: 0,
  totalReviews: 0,
});
    const fetchData = async () => {
  try {
    const res = await axios.get("https://service-site-server-five.vercel.app/services");
    const data = res.data;

    console.log("All services:", data.length);

    const uniqueEmails = new Set(data.map(service => service.userEmail));
    console.log("Unique user emails:", uniqueEmails.size);

    const totalReviews = data.reduce((sum, service) => {
      return sum + (service.allReviews?.length || 0);
    }, 0);
    console.log("Total reviews:", totalReviews);

      setStats({
      totalServices: data.length,
      uniqueUsers: uniqueEmails.size,
      totalReviews,
    });
  } catch (err) {
    console.log("Error fetching services:", err);
  }
};

useEffect(() => {
  fetchData();
}, []);
    

     
// groupName: "Sketch Sunday",
//     category: "Drawing & Painting",
//     description: "Weekly sketch challenges and tips from pros.",
//     meetingLocation: "City Art Museum",
//     maxMembers: 16,
//     startDate: "2025-06-09",
//     imageUrl: "https://example.com/images/sketch.jpg"
    return (
        <div className='relative'>
           <div className="absolute z-20 top-10 left-10 bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl max-w-md">
  <h1 className="text-sm md:text-2xl font-extrabold text-indigo-700 leading-snug">
    <Typewriter
      words={[
        'Find Trusted Services Near You!',
        'Offer Your Skills. Get Hired Fast!',
        'Connect. Serve. Grow.',
      ]}
      loop={Infinity}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={40}
      delaySpeed={1200}
    />
  </h1>
</div>

 <div className='absolute z-20 top-2 right-10 flex gap-3'>

 <h2 className="text-sm font-bold text-primary">Total review:
          <CountUp end={stats.totalReviews} duration={2.5} />
        </h2>
        <h2 className="text-sm font-bold text-primary"> Total users:
          <CountUp end={stats.uniqueUsers} duration={4} />
        </h2>

        <h2 className="text-sm font-bold text-primary">Total services:
          <CountUp end={stats.totalServices} duration={4} />
        </h2>
 </div>


              <div className="carousel relative h-[70vh] w-full">
               
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/PGGRp8q1/flat-car-repair-shop-services-social-media-cover-template-23-2149588342.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/dwY5vghz/web-design-concept-banner-template-23-2148738715.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/8ngwcbKn/house-repair-facebook-timeline-cover-web-banner-template-612198-43.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/7J03XsHY/construction-facebook-cover-social-media-web-banner-template-873916-292.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


</div>
 
      <div className='flex flex-col justify-between items-center gap-6 mt-12'>


         <Fade direction="up" triggerOnce>
        <h2 className="text-3xl font-extrabold text-white drop-shadow-md tracking-wide">Featured Services</h2>
         
      </Fade>
       
 <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-1'>
            {
                // services.slice(0, 6).
               services.map(service =>(
              <Fade direction="up" triggerOnce>
          <div className={`card ${theme?`bg-base-100`:`bg-slate-800 text-gray-100`} w-80 md:w-96 h-full md:h-[360px] shadow-sm`}>
  <figure>
    <img className='w-full h-full'
      src= {service.serviceImage}
      alt="Shoes"/>
  </figure>
  <div className="card-body">
     < h2 className="card-title">
       {service.serviceTitle}
      <div className="badge badge-secondary">Price:{service.price}$</div>
    </h2>
    <p>{service.description}</p>
    <div className="card-actions justify-end">
       
      <NavLink state={{from:location.pathname}} className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/service/${service._id}`}>See Details!!</NavLink>
          
    </div>
  </div>
</div>
</Fade>

                ))
            }
         </div>

        <button  onClick={()=>navigate('/services')} class="btn btn-soft btn-secondary">See all Services</button>
      </div>
        <MeetOurPartners></MeetOurPartners>
        <Faq></Faq>

        <Feedback></Feedback>
           
        </div>
    );
};

export default Home;