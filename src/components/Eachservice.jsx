import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router';
import { valueContext } from '../Rootlayout';

const Eachservice = ({service}) => {
    const {theme}=useContext(valueContext)
   
    return (
 
         <div>
  <div className={`card ${theme ? `bg-base-100` : `bg-slate-800 text-gray-100`} w-80 md:w-96 shadow-xl rounded-xl hover:shadow-2xl h-[500px] transform hover:scale-[1.02] transition-all duration-300`}>
    <figure className="h-60 bg-white p-2 rounded-t-xl">
      <img
        className="w-full h-full"
        src={service.serviceImage}
        alt={service.serviceTitle}
      />
    </figure>

    <div className="card-body space-y-2">
      <h2 className="card-title text-indigo-600 font-bold text-xl">Title:
        {service.serviceTitle}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {service.description.length > 100 ? `${service.description.slice(0, 100)}...` : service.description}
      </p>

      <div className="flex justify-between flex-wrap mt-2">
        <span className="badge badge-outline">Category:{service.category}</span>
        <span className="badge badge-accent">${service.price}</span>
      </div>

      <div className="card-actions  mt-4 justify-end">
        <p>Company:{service.companyName}</p>
        <NavLink
          state={{ from: location.pathname }}
          to={`/service/${service._id}`}
          className="btn btn-sm md:btn-md btn-primary hover:scale-105 transition-transform"
        >
          See Details
        </NavLink>
      </div>
    </div>
  </div>
</div>

    );
};

export default Eachservice;