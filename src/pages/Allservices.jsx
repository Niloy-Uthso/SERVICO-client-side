
import React, { useContext, useEffect, useState } from 'react';
import { valueContext } from '../Rootlayout';
import Eachservice from '../components/Eachservice';
import axios from 'axios';


const Allservices = () => {
  const { theme } = useContext(valueContext);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
    
     
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
        <title>Servico|All Services</title>
      <h1 className={`text-4xl ${theme ? '' : 'text-white'} font-bold`}>All Services</h1>

      <div className='flex flex-col sm:flex-row gap-4'>
        <input
          type='text'
          className='input input-bordered w-full max-w-xs'
          placeholder='Search services...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCategory('');  
          }}
        />

        <select
          className='select select-bordered max-w-xs'
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSearch('');  
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
           
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-8'>
        {services.map((service) => (
          <Eachservice key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Allservices;

