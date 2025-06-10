import React, { useContext } from 'react';
import { valueContext } from '../Rootlayout';
import { Navigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { FadeLoader } from 'react-spinners';

const Newservice = () => {
     const {currentUser,loading}=useContext(valueContext)
     const location=useLocation()
      if(loading)
        return<div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676"
  height={60}
  radius={12}
  speedMultiplier={0}
  width={8} />
      </div>
    if(!currentUser||!currentUser.email){
        
        return <Navigate state={{from:location.pathname}}  to={'/login'}></Navigate>
        
    }

    const handleSubmit=(e)=>{
             e.preventDefault()

        const form =e.target;
        const formData=new FormData(form)
        const servicedata=Object.fromEntries(formData.entries())
         servicedata.allReviews = [];
         

        // fetch(' https://hobbyhub-server-nine.vercel.app/hobbier',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(hobbydata)
        // })
        // .then(res=>res.json())
        // .then(data =>{
        //     console.log('after adding',data)
        // })

        fetch('http://localhost:3000/services',{
            method:'POST',
            
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(servicedata)
        })
        .then(res=>res.json())
        .then(data =>{
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your new group has been created",
  showConfirmButton: false,
  timer: 1500
});
            console.log('after adding',data)
            form.reset()
        })
    }
    return (
//         <div>
//            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
//   <label className="label">Title</label>
//   <input type="text" className="input" name='name' placeholder="email" />

//   <label className="label">Slug</label>
//   <input type="text" className="input" name='email' placeholder="email" />
       
//        <button className='btn w-full'>submit</button>
   
// </form> 
//         </div>


<div className="max-w-3xl md:mx-auto ml-2 mr-2 my-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Add a Service </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label className="block mb-1 font-medium">Service Name</label>
          <input type="text" name="serviceTitle" required className="input input-bordered w-full" />
        </div>

  <div>
          <label className="block mb-1 font-medium">Company Name</label>
          <input type="text" name="companyName" required className="input input-bordered w-full" />
        </div>
  <div>
          <label className="block mb-1 font-medium">Website</label>
          <input type="text" name="website" required className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Service Category</label>
          <select name="category" required className="select select-bordered w-full">
            <option value="">Select a category</option>
            <option>Technology & IT</option>
            <option>Marketing</option>
            <option>Business & Consulting</option>
            <option>Creative & Media</option>
            <option>Home Services</option>
            <option>Education & Coaching</option>
            <option>Health & Wellness</option>
            <option>Others</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" required className="textarea textarea-bordered w-full" rows="4" />
        </div>

      
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input type="number" name="price" required className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Added Date</label>
            <input type="date" name="addedDate" required className="input input-bordered w-full" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input type="url" name="serviceImage" required className="input input-bordered w-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input type="text" name="userName" value={currentUser.displayName} readOnly  className="input input-bordered w-full bg-gray-100" />
          </div>
          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input type="email" name="userEmail" value={currentUser.email} readOnly className="input input-bordered w-full bg-gray-100" />
          </div>
        </div>

        <div className="text-center mt-6">
          <button type="submit" className="btn btn-primary px-8">Create</button>
        </div>

      </form>
    </div>
    );
};

export default Newservice;