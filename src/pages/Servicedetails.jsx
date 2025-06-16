import React, { useContext, useEffect, useState } from 'react';
import { Navigate, NavLink, useLoaderData, useLocation, useNavigate, useParams } from 'react-router';
import { valueContext } from '../Rootlayout';
import Swal from 'sweetalert2';
import axios from 'axios';
import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const Servicedetails = () => {
  const { currentUser, loading } = useContext(valueContext);
  
  const service = useLoaderData();
  const [rating, setRating] = useState(0);
  const [review,setReview]=useState(service.allReviews?.includes(false))
  const [reviewcount,setReviewcount]=useState(service.allReviews.length)
  const [showoff,setShowoff]=useState(service.allReviews || []);
  const navigate = useNavigate();
  useEffect(()=>{
// setReview(service?.allReviews?.includes(currentUser.email))
setReview(service?.allReviews?.some(review => review.reviewerEmail ===currentUser?.email));
 
// const alreadyreviewed = service?.allReviews?.
//  service?.allReviews?

  },[service.allReviews,currentUser])
   
  const location=useLocation()
   
     const f= location?.state?.from
     

  if (loading) return<div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676"
  height={60}
  radius={12}
  speedMultiplier={0}
  width={8} />
      </div>

       const token=currentUser?.accessToken

   
      
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
if (!currentUser?.email) {
   navigate('/login', { state: { from: location.pathname } });
  return
  //  <Navigate state={{from:location.pathname}} to="/login" />;
  }
   
    const x=e.target.myreview.value
    const y=e.target.date.value
     
    
    if(currentUser?.email===service.userEmail)
      return Swal.fire({
            icon: "error",
            title: "Your Own created Service",
            text: "You can not review your own service.",
          });
       
    axios.patch(`https://service-site-server-five.vercel.app/review/${service._id}`,
      {
      name:currentUser?.displayName,
      email:currentUser?.email,
      myreview:x,
      photo:currentUser?.photoURL,
      date:y,
       rating: rating 
    },
        {
           headers: {
        'Content-Type': 'application/json',
         authorization: `Bearer ${token}`
      }
        }
  ).then(data=>{
         
         const { reviewed, newReview } = data.data;
        
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
      <p><span className="font-medium">Website:</span> <span className="text-blue-500 underline">{service.website}</span></p>
    </div>

    <div className='flex  items-center justify-center gap-2 '>

      <form className='' onSubmit={handleReview}>   
        <div className=''>
          <label className="block mb-3 ml-24 font-medium">Put your review</label>
          <input type="text" name="myreview" required disabled={!!review} className= "input input-bordered w-full mb-3"/>
        <div>
                     <input type="text" name="date" readOnly className='text-center border mb-3 ' value={new Date().toISOString().split('T')[0]}/>
          <Rating className='ml-2'
                     
  initialRating={ review?rating:0}
  readonly={!!review}  
  onChange={(rate) => setRating(rate)}    
  emptySymbol={<FontAwesomeIcon icon={regularStar} className="text-2xl text-gray-400" />}
  fullSymbol={<FontAwesomeIcon icon={solidStar} className="text-2xl text-yellow-400" />}
  
/>
        </div>
         
        </div>
        {/* <button onClick={handleReview}></button> */}
        <button type="submit"  className="btn  btn-secondary md:px-8 md:ml-16">{review?'You added a review.Can Delete now':'Add Review'}</button>
      </form>
      
    </div>

<div className='flex  justify-between items-center'>
 <div className="flex flex-wrap gap-2">
      <span className="badge badge-info">{service.category}</span>
      <span className="badge badge-outline">${service.price}</span>
      <span className="badge badge-outline">Reviews: {reviewcount}</span>
    </div>
    
  <div className="dropdown  w-20 md:w-48 dropdown-end md:dropdown-start">
  <div tabIndex={0} role="button" className="btn  m-1 text-[7px] text-orange-300 md:text-sm">Click to see reviews ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
   {showoff.map((review, index) => (
    <li className='mb-1' key={index}>
      <div className="flex items-start gap-4 p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition duration-300">
        <img
          src={review.reviewerPhoto}
          alt={review.reviewerName}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <h4 className="font-semibold text-lg text-indigo-600">{review.reviewerName}</h4>
          <p className="text-gray-600 mt-1">{review.reviewerReview}</p>
          <p className='mt-1'>{review.reviewDate}</p> 
          <p>  <Rating className='ml-2'
                     
  initialRating={review.reviewRating}
  // onChange={(rate) => setRating(rate)}    // Number between 0 and 5 (can be float)
  emptySymbol={<FontAwesomeIcon icon={regularStar} className="text-sm text-gray-400" />}
  fullSymbol={<FontAwesomeIcon icon={solidStar} className="text-sm text-yellow-400" />}
  readonly
/> </p>
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
      <button onClick={()=>handleJoin()} className="btn btn-primary">Request This Service</button>
    </div>

    <NavLink to={f}>
      <button className="btn btn-outline btn-accent block mx-auto mt-4">Go Back</button>
    </NavLink>
  </div>
</div>

  );
};

export default Servicedetails;
