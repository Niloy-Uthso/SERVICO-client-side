import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router';
import { valueContext } from '../Rootlayout';

const Eachservice = ({service}) => {
    const {theme}=useContext(valueContext)
   
    return (
 
         <div>
  <div className={`card ${theme ? `bg-base-100` : `bg-slate-800 text-gray-100`} w-80 md:w-72 shadow-xl rounded-xl hover:shadow-2xl h-[380px] transform hover:scale-[1.02] transition-all duration-300`}>
    <figure className="h-[40%] bg-white p-2 rounded-t-xl">
      <img
        className="w-full h-full"
        src={service.serviceImage}
        alt={service.serviceTitle}
      />
    </figure>

    <div className="card-body h-[60%] space-y-0.5">
      <h2 className="card-title text-indigo-600 font-bold text-sm">Title:
        {service.serviceTitle}
      </h2>

      <p className="text-sm text-gray-300 dark:text-gray-500">
        {service.description.split('.')[0]}
      </p>

      <div className="flex flex-col gap-2 justify-between flex-wrap mt-2">
        <span className="badge badge-outline text-sm">Category:{service.category}</span>
        <span className="badge badge-accent text-sm">${service.price}</span>
      </div>

      <div className="card-actions  mt-2 items-center justify-between">
        <p className='text-sm'>Company:{service.companyName}</p>
        <NavLink
          state={{ from: location.pathname }}
          to={`/service/${service._id}`}
          className="btn btn-xs w-14 text-[9px] md:btn-xs btn-primary hover:scale-105 transition-transform"
        >
          Details
        </NavLink>
      </div>
    </div>
  </div>
</div>

    );
};

export default Eachservice;