import React, { useContext, useEffect, useState } from 'react';
import { Navigate, NavLink, useLoaderData, useLocation, useParams } from 'react-router';
import { valueContext } from '../Rootlayout';
import Swal from 'sweetalert2';
import axios from 'axios';

const Servicedetails = () => {
  const { currentUser, loading } = useContext(valueContext);
  
  const service = useLoaderData();
  const [review,setReview]=useState(service.allReviews.includes(false))
  const [reviewcount,setReviewcount]=useState(service.allReviews.length)
  const [showoff,setShowoff]=useState(service.allReviews || []);

  useEffect(()=>{
// setReview(service?.allReviews?.includes(currentUser.email))
setReview(service?.allReviews?.some(review => review.reviewerEmail ===currentUser.email));
 
// const alreadyreviewed = service?.allReviews?.
//  service?.allReviews?

  },[service.allReviews,currentUser])
   
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
  title: "Your have joined the service",
  showConfirmButton: false,
  timer: 1500
});
  }

  const handleReview=(e)=>{
    e.preventDefault()
    const x=e.target.myreview.value
    console.log(currentUser.displayName);
    
    if(currentUser?.email===service.userEmail)
      return alert('can not')
       
    axios.patch(`http://localhost:3000/review/${service._id}`,{
      name:currentUser?.displayName,
      email:currentUser?.email,
      myreview:x,
      photo:currentUser?.photoURL
      
    }).then(data=>{
        console.log(data.data)
         const { reviewed, newReview } = data.data;
        // console.log(data.config.adapter.data.email)
        setReview(reviewed)
        setReviewcount(prev=>reviewed? prev+1:prev-1)

         setShowoff(prev => {
    if (reviewed) {
       
      return [...prev, newReview];
    } else {
       
      return prev.filter(r => r.reviewerEmail !== currentUser?.email);
    }
  });
          
        
      }).catch(err=>{
        console.log(err)
      })

  }
   
  return (
//     <div data-aos="fade-up" className="bg-base-200 py-10 px-6 rounded-xl shadow-lg max-w-4xl md:mx-auto my-12 ml-2 mr-2 ">
//       <div className="card w-full bg-white shadow-xl">
//         <figure className="max-h-[400px] overflow-hidden">
//           <img src={service.imageUrl} alt={service.groupName} className="w-full object-cover" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title text-3xl font-bold text-indigo-700">{service.groupName}</h2>
//           <div className="flex gap-3 flex-wrap mb-2">
//             <span className="badge badge-secondary">{service.category}</span>
//             <span className="badge badge-outline">Max Members: {service.maxMembers}</span>
//             <span className="badge badge-outline">Start Date: {service.startDate}</span>
//           </div>
//           <p className="text-gray-700 text-lg">{service.description}</p>
//           <div className="mt-4">
//             <p><span className="font-semibold text-indigo-600">Meeting Location:</span> {service.meetingLocation}</p>
//             <p><span className="font-semibold text-indigo-600">Created by:</span> {service.userName} ({service.userEmail})</p>
//           </div>
//          {new Date(service.startDate) > new Date() ? (
//   <button onClick={()=>handleJoin()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
//     Join Group
//   </button>
// ) : (
//   <span className="text-red-600 font-semibold">
//     Group is no longer active
//   </span>
// )}
//         </div>
//       </div>


//      <NavLink to={f}> <button  class="btn btn-outline block mx-auto mt-4 btn-accent">Go Back</button></NavLink>
//     </div>

         <div data-aos="fade-up" className="bg-white rounded-xl shadow-xl p-6 my-12 mx-2 max-w-4xl md:mx-auto border border-gray-200">
  <div className="overflow-hidden rounded-md">
    <img
      src={service.serviceImage}
      alt={service.serviceTitle}
      className="w-full h-full object-contain rounded-t-md"
    />
  </div>

  <div className="mt-6 space-y-4">
    <h2 className="text-3xl font-bold text-indigo-700">{service.serviceTitle}</h2>

    <div className="text-sm text-gray-600">
      <p><span className="font-medium">Company:</span> {service.companyName}</p>
      <p><span className="font-medium">Website:</span> <a href={service.website} target="_blank" rel="noreferrer" className="text-blue-500 underline">{service.website}</a></p>
    </div>

<div className='flex justify-between'>
 <div className="flex flex-wrap gap-2">
      <span className="badge badge-info">{service.category}</span>
      <span className="badge badge-outline">${service.price}</span>
      <span className="badge badge-outline">Reviews: {reviewcount}</span>
    </div>
    <div>

      <form onSubmit={handleReview}>   
        <div>
          <label className="block mb-1 font-medium">Put your review</label>
          <input type="text" name="myreview"  className="input input-bordered w-full" />
        </div>
        {/* <button onClick={handleReview}></button> */}
        <button type="submit" className="btn btn-primary px-8">{review?'Delete review':'Add Review'}</button>
      </form>
      
    </div>
  <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
   {showoff.map((review, index) => (
    <li key={index}>
      <div className="flex items-start gap-4 p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition duration-300">
        <img
          src={review.reviewerPhoto}
          alt={review.reviewerName}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <h4 className="font-semibold text-lg text-indigo-600">{review.reviewerName}</h4>
          <p className="text-gray-600 mt-1">{review.reviewerReview}</p>
        </div>
      </div>
    </li>
  ))}

  </ul>
</div>
</div>
   

    <p className="text-gray-700">{service.description}</p>

    <div className="border-t pt-4 text-sm text-gray-500">
      <p><span className="font-medium">Added by:</span> {service.userEmail}</p>
      <p><span className="font-medium">Added on:</span> {new Date(service.addedDate).toLocaleDateString()}</p>
    </div>

    <div className="text-center mt-6">
      <button onClick={()=>handleJoin} className="btn btn-primary">Request This Service</button>
    </div>

    <NavLink to={f}>
      <button className="btn btn-outline btn-accent block mx-auto mt-4">Go Back</button>
    </NavLink>
  </div>
</div>

  );
};

export default Servicedetails;
