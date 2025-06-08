import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router';
import { valueContext } from '../Rootlayout';

const Eachservice = ({group}) => {
    const {theme}=useContext(valueContext)
    return (
         <div>
            <div className={`card ${theme?`bg-base-100`:`bg-slate-800 text-gray-100`}  w-80 md:w-96 h-[100%] shadow-sm`}>
  <figure>
    <img className='w-full h-full'
      src= {group.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       {group.groupName}
      <div className="badge badge-secondary">{group.category}</div>
    </h2>
    <p>{group.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{group.startDate}</div>
       
      <NavLink state={{from:location.pathname}} className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/group/${group._id}`}>Show More!!</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Eachservice;