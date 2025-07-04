import React, { useContext, useState } from 'react';
import { valueContext } from '../Rootlayout';
import { Link, Navigate, NavLink, useLoaderData, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { FadeLoader } from 'react-spinners';
import axios from 'axios';
const Myservice = () => {
  const { currentUser, loading } = useContext(valueContext);
  const services = useLoaderData();
    const[primaryService,setPrimaryService]=useState(services)
    const location=useLocation()
   
  if (loading) 
    return  <div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676"
  height={60}
  radius={12}
  speedMultiplier={0}
  width={8} />
      </div>

  if (!currentUser || !currentUser.email) {
    return <Navigate state={{from:location.pathname}} to={'/login'} />;
  }
 const token=currentUser.accessToken
 
 

const handleDelete = async (id,email) => {
  console.log(email)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e11d48",  
    cancelButtonColor: "#6b7280",   
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`https://service-site-server-five.vercel.app/service/${id}`,{
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`
  },
  data: { email }  
});

        if (response.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your service has been deleted.",
            icon: "success"
          });

          const remaining = primaryService.filter(gr => gr._id !== id);
          setPrimaryService(remaining);
          console.log("remaining",remaining)
        }
      } catch (error) {
        console.error("Error deleting service:", error);
        Swal.fire("Error", "Something went wrong while deleting the service.", "error");
      }
    }
  });
};


  const myServices = primaryService.filter(service => service.userEmail === currentUser.email);
      
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center text-green-700 mb-6'>My Services</h1>

      <div className="overflow-x-auto shadow border rounded-lg">
        <table className="table w-full text-center">
          <thead className="bg-indigo-200 text-indigo-800">
            <tr>
              <th>Image</th>
              <th>Service Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>price</th>
              <th>Company Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myServices.map(service => (
              <tr key={service._id} className="hover:bg-indigo-50 transition duration-200">
                <td className="p-2">
                  <img src={service.serviceImage} alt={service.serviceTitle} className="w-16 h-16 rounded object-cover" />
                </td>
                <td className="font-semibold">{service.serviceTitle}</td>
                <td>{service.category}</td>
                <td>{service.addedDate}</td>
                <td>{service.price}</td>
                <td>{service.companyName}</td>
                <td>
                  <div className="flex gap-2 justify-center">

                    
                    
                    <Link  to={`/myservice/updateService/${service._id}`}> <button className="btn btn-sm btn-outline btn-primary">Update</button></Link>
                   
                    <button onClick={()=>handleDelete(service._id,service.userEmail)} className="btn btn-sm btn-outline btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {myServices.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">No services found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
       <NavLink to={'/'}> <button  class="btn btn-outline block mx-auto mt-4 btn-accent">Go Home</button></NavLink>
    </div>
  );
};

export default Myservice;
