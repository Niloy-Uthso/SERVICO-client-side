import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router';
import { valueContext } from '../Rootlayout';

const Eachservice = ({service}) => {
    const {theme}=useContext(valueContext)
   
    return (
//          <div>
//             <div className={`card ${theme?`bg-base-100`:`bg-slate-800 text-gray-100`}  w-80 md:w-96 h-[100%] shadow-sm`}>
//   <figure>
//     <img className='w-full h-full'
//       src= {service.imageUrl}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//        {service.serviceName}
//       <div className="badge badge-secondary">{service.category}</div>
//     </h2>
//     <p>{service.description}</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">{service.startDate}</div>
       
//       <NavLink state={{from:location.pathname}} className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
//  to={`/service/${service._id}`}>Show More!!</NavLink>
//     </div>
//   </div>
// </div>
//         </div>
         <div>
  <div className={`card ${theme ? `bg-base-100` : `bg-slate-800 text-gray-100`} w-80 md:w-96 shadow-xl rounded-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300`}>
    <figure className="h-60 bg-white p-2 rounded-t-xl">
      <img
        className="w-full h-full"
        src={service.serviceImage}
        alt={service.serviceTitle}
      />
    </figure>

    <div className="card-body space-y-2">
      <h2 className="card-title text-indigo-600 font-bold text-xl">
        {service.serviceTitle}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {service.description.length > 100 ? `${service.description.slice(0, 100)}...` : service.description}
      </p>

      <div className="flex justify-between flex-wrap mt-2">
        <span className="badge badge-outline">{service.category}</span>
        <span className="badge badge-accent">${service.price}</span>
      </div>

      <div className="card-actions mt-4 justify-end">
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