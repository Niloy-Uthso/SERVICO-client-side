import React, { useContext, useState } from 'react';
import { valueContext } from '../Rootlayout';
import { Link, Navigate, NavLink, useLoaderData, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { FadeLoader } from 'react-spinners';

const Myservice = () => {
  const { currentUser, loading } = useContext(valueContext);
  const groups = useLoaderData();
    const[primaryGroups,setPrimaryGroups]=useState(groups)
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

  const handleDelete=(id)=>{
          
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(` https://hobbyhub-server-nine.vercel.app/groups/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount){
         Swal.fire({
      title: "Deleted!",
      text: "Your group has been deleted.",
      icon: "success"
    });

          const remaining=groups.filter(gr=>gr._id!==id)
          setPrimaryGroups(remaining)
       }
    })

   
  }
});
  }

  const myGroups = primaryGroups.filter(group => group.userEmail === currentUser.email);

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center text-indigo-600 mb-6'>My Hobby Groups</h1>

      <div className="overflow-x-auto shadow border rounded-lg">
        <table className="table w-full text-center">
          <thead className="bg-indigo-200 text-indigo-800">
            <tr>
              <th>Image</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>Max Members</th>
              <th>Meeting Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myGroups.map(group => (
              <tr key={group._id} className="hover:bg-indigo-50 transition duration-200">
                <td className="p-2">
                  <img src={group.imageUrl} alt={group.groupName} className="w-16 h-16 rounded object-cover" />
                </td>
                <td className="font-semibold">{group.groupName}</td>
                <td>{group.category}</td>
                <td>{group.startDate}</td>
                <td>{group.maxMembers}</td>
                <td>{group.meetingLocation}</td>
                <td>
                  <div className="flex gap-2 justify-center">

                    <Link state={{from:location.pathname}} to={`/group/${group._id}`}>
                    <button class="btn btn-outline btn-info btn-sm">Detail</button>
                    </Link>
                    
                    <Link  to={`/mygroups/updateGroup/${group._id}`}> <button className="btn btn-sm btn-outline btn-primary">Update</button></Link>
                   
                    <button onClick={()=>handleDelete(group._id)} className="btn btn-sm btn-outline btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {myGroups.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">No groups found.</td>
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
