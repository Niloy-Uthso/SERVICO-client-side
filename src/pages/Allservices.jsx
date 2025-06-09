import React, { useContext } from 'react';
import { NavLink, useLoaderData, useLocation } from 'react-router';
 
import { valueContext } from '../Rootlayout';
import Lottie from 'lottie-react';
import Eachservice from '../components/Eachservice';
 
const Allservices = () => {
     const services=useLoaderData()
    //  const location=useLocation()
    const {theme}=useContext(valueContext)
     
    return (
       <div className='flex events flex-col p-4 pt-8 items-center  gap-10'>
         
            <h1 className={`text-4xl ${theme?``:`text-white`} font-bold`}>All groups</h1>
            <div data-aos="fade-up" className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    services.map(service=>(
                        <Eachservice key={service._id} service={service}></Eachservice>
                    ))
                }
            </div>
            <NavLink to={'/'}>
                      <button class="btn btn-dash btn-accent">Back to Home</button>
            </NavLink>
            
        </div>
    );
};

export default Allservices;