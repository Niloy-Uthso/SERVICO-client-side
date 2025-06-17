
import React, { useContext, useState } from 'react';
import { valueContext } from '../Rootlayout';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { FadeLoader } from 'react-spinners';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating';
const MyReviews = () => {
  const { currentUser, loading } = useContext(valueContext);
  const services = useLoaderData();
  const [primaryService, setPrimaryService] = useState(services);
  const [updatedReviewText, setUpdatedReviewText] = useState('');
  // const [updatedReviewstar, setUpdatedReviewstar] = useState('');
  const location = useLocation();

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676" height={60} radius={12} width={8} />
      </div>
    );

  if (!currentUser || !currentUser.email) {
    return <Navigate state={{ from: location.pathname }} to={'/login'} />;
  }
const token=currentUser.accessToken
  const handleUpdate=(serviceId, reviewEmail,reviewerReview)=>{
    console.log(0)
      Swal.fire({
      title: 'Are you sure?',
      text: "You really want to update this?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    }).then((result)=>{
        if(result.isConfirmed){
            axios.patch(`https://service-site-server-five.vercel.app/update/${serviceId}`,{
              
           
            email:reviewEmail, 
            myreviews:reviewerReview ,
                       
    },

    {

               headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`, 
        },
            },
  
  
  ).then(data=>{
        console.log(data.data)
          const updatedServices = primaryService.map(service => {
            if (service._id === serviceId) {

              const updatedReviews = service.allReviews.map(r =>
                r.reviewerEmail === reviewEmail ? { ...r, reviewerReview: reviewerReview }  : r );
     
                
           
              return { ...service, allReviews: updatedReviews };
            }
            return service;
          });
          console.log(updatedServices)
          setPrimaryService(updatedServices);
          Swal.fire('Updated!', 'Your review has been updated.', 'success');

    })
    .catch(err=>{
        console.log(err)
    })
        }
    })
  }

 

const handleDelete = (serviceId, reviewEmail) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e11d48', 
    cancelButtonColor: '#6b7280',  
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.patch(`https://service-site-server-five.vercel.app/review/${serviceId}`, {
          email: reviewEmail
        },
         {
               headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`, 
        },
            },
      
      
      );

        if (response.data.reviewed === false) {
          const updated = primaryService.map(service => {
            if (service._id === serviceId) {
              const updatedReviews = service.allReviews.filter(
                r => r.reviewerEmail !== reviewEmail
              );
              return {
                ...service,
                allReviews: updatedReviews
              };
            }
            return service;
          });

          setPrimaryService(updated);
          Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
        }
      } catch (error) {
        console.error("Error deleting review:", error);
        Swal.fire('Error!', 'Something went wrong while deleting.', 'error');
      }
    }
  });
};


  const myReviews = primaryService.flatMap(service =>
    (service.allReviews || [])
      .filter(review => review.reviewerEmail === currentUser.email)
      .map(review => ({ service, review }))
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <title>Myreviews|Servico</title>
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">My Reviews</h1>

      {myReviews.length === 0 ? (
        <p className="text-center text-gray-500">You haven't reviewed any services yet.</p>
      ) : (
        <div className="space-y-4">
          {
          myReviews.map(({ service, review }, index) => (
            
            <div key={index} className="border rounded-lg shadow p-4 bg-white">
              <h2 className="text-xl font-semibold text-indigo-700">Service Title:{service.serviceTitle}</h2>
              <p className="text-gray-700 mt-2">{review.reviewerReview}</p>
              <div className="mt-2 flex items-center gap-4">
                <p > <Rating className='ml-2'
                                     
                  initialRating={review.reviewRating}
                  // onChange={(rate) => setRating(rate)}   
                  emptySymbol={<FontAwesomeIcon icon={regularStar} className="text-sm text-gray-400" />}
                  fullSymbol={<FontAwesomeIcon icon={solidStar} className="text-sm text-yellow-400" />}
                  readonly
                /></p> 
              </div>
              <div className="flex gap-4 mt-4">
                <button className="btn btn-outline btn-primary btn-sm" onClick={() => document.getElementById(`update-modal-${index}`).showModal()}>Update</button>
                <button className="btn btn-outline btn-error btn-sm" onClick={() => handleDelete(service._id, review.reviewerEmail)}>Delete</button>
              </div>

            
              <dialog id={`update-modal-${index}`} className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Update Review</h3>
                  <form method="dialog">
                    <textarea defaultValue={review.reviewerReview} onChange={(e) => setUpdatedReviewText(e.target.value)} className="textarea textarea-bordered w-full my-4" rows="3"></textarea>
                    
                     
                    <div className="modal-action">
                      <button className="btn">Close</button>
                      <button onClick={() => handleUpdate(service._id, review.reviewerEmail, updatedReviewText)} className="btn btn-primary">Update</button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;