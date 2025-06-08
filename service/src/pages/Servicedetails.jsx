import React, { useContext } from 'react';
import { Navigate, NavLink, useLoaderData, useLocation, useParams } from 'react-router';
import { valueContext } from '../Rootlayout';
import Swal from 'sweetalert2';

const Servicedetails = () => {
  const { currentUser, loading } = useContext(valueContext);
  const group = useLoaderData();
  const location=useLocation()
   
     const f= location?.state?.from
    // console.log(group)

  if (loading) return<div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676"
  height={60}
  radius={12}
  speedMultiplier={0}
  width={8} />
      </div>

  if (!currentUser?.email) {
    return <Navigate state={{from:location.pathname}} to="/login" />;
  }
      
  const handleJoin=()=>{
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your have joined the group",
  showConfirmButton: false,
  timer: 1500
});
  }
   
  return (
    <div data-aos="fade-up" className="bg-base-200 py-10 px-6 rounded-xl shadow-lg max-w-4xl md:mx-auto my-12 ml-2 mr-2 ">
      <div className="card w-full bg-white shadow-xl">
        <figure className="max-h-[400px] overflow-hidden">
          <img src={group.imageUrl} alt={group.groupName} className="w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-indigo-700">{group.groupName}</h2>
          <div className="flex gap-3 flex-wrap mb-2">
            <span className="badge badge-secondary">{group.category}</span>
            <span className="badge badge-outline">Max Members: {group.maxMembers}</span>
            <span className="badge badge-outline">Start Date: {group.startDate}</span>
          </div>
          <p className="text-gray-700 text-lg">{group.description}</p>
          <div className="mt-4">
            <p><span className="font-semibold text-indigo-600">Meeting Location:</span> {group.meetingLocation}</p>
            <p><span className="font-semibold text-indigo-600">Created by:</span> {group.userName} ({group.userEmail})</p>
          </div>
         {new Date(group.startDate) > new Date() ? (
  <button onClick={()=>handleJoin()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
    Join Group
  </button>
) : (
  <span className="text-red-600 font-semibold">
    Group is no longer active
  </span>
)}
        </div>
      </div>


     <NavLink to={f}> <button  class="btn btn-outline block mx-auto mt-4 btn-accent">Go Back</button></NavLink>
    </div>
  );
};

export default Servicedetails;
