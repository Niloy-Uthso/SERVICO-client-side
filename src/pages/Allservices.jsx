// import React, { useContext } from 'react';
// import { NavLink, useLoaderData, useLocation } from 'react-router';
 
// import { valueContext } from '../Rootlayout';
// import Lottie from 'lottie-react';
// import Eachservice from '../components/Eachservice';
 
// const Allservices = () => {
//      const services=useLoaderData()
//     //  const location=useLocation()
//     const {theme}=useContext(valueContext)
     
//     return (
//        <div className='flex events flex-col p-4 pt-8 items-center  gap-10'>
         
//             <h1 className={`text-4xl ${theme?``:`text-white`} font-bold`}>All Services</h1>
//             <div data-aos="fade-up" className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
//                 {
//                     services.map(service=>(
//                         <Eachservice key={service._id} service={service}></Eachservice>
//                     ))
//                 }
//             </div>
//             <NavLink to={'/'}>
//                       <button class="btn btn-dash btn-accent text-red-500">Back to Home</button>
//             </NavLink>
            
//         </div>
//     );
// };

// export default Allservices;

// import React, { useContext, useEffect, useState } from 'react';
// import { valueContext } from '../Rootlayout';
// import Eachservice from '../components/Eachservice';
// import axios from 'axios';

// const Allservices = () => {
//   const { theme } = useContext(valueContext);
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState('');

//  useEffect(() => {
//   const fetchServices = async () => {
//     try {
//       const url = search
//         ? `https://service-site-server-five.vercel.app/services/search?search=${search}`
//         : `https://service-site-server-five.vercel.app/services`;
//       const res = await axios.get(url);
//       setServices(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchServices();
// }, [search]);
// console.log(services)
//   return (
//     <div className='flex flex-col p-4 pt-8 items-center gap-10'>
//       <h1 className={`text-4xl ${theme ? `` : `text-white`} font-bold`}>All Services</h1>

//       <input
//         type="text"
//         className="input input-bordered w-full max-w-xs mb-4"
//         placeholder="Search services..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
//         {services.map(service => (
            
//           <Eachservice key={service._id} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Allservices;

import React, { useContext, useEffect, useState } from 'react';
import { valueContext } from '../Rootlayout';
import Eachservice from '../components/Eachservice';
import axios from 'axios';
// import { useLoaderData } from 'react-router';

const Allservices = () => {
  const { theme } = useContext(valueContext);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
    //  const allservices=useLoaderData()
    //  console.log(allservices.length)
     
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const url = category
          ? `https://service-site-server-five.vercel.app/services/filter?category=${category}`
          : search
          ? `https://service-site-server-five.vercel.app/services/search?search=${search}`
          : `https://service-site-server-five.vercel.app/services`;

        const res = await axios.get(url);
        setServices(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, [search, category]);

  return (
    <div className='flex flex-col p-4 pt-8 items-center gap-10'>
      <h1 className={`text-4xl ${theme ? '' : 'text-white'} font-bold`}>All Services</h1>

      <div className='flex flex-col sm:flex-row gap-4'>
        <input
          type='text'
          className='input input-bordered w-full max-w-xs'
          placeholder='Search services...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCategory(''); // Reset filter if searching
          }}
        />

        <select
          className='select select-bordered max-w-xs'
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSearch(''); // Reset search if filtering
          }}
        >
          <option value=''>All Categories</option>
           <option>Technology and IT</option>
            <option>Marketing</option>
            <option>Business and Consulting</option>
            <option>Creative and Media</option>
            <option>Home Services</option>
            <option>Education and Coaching</option>
            <option>Health and Wellness</option>
            <option>Others</option>
          {/* Add more as needed */}
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {services.map((service) => (
          <Eachservice key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Allservices;

